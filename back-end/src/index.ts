export interface Env {
  RESEND_API_KEY: string;
  TO_EMAIL?: string; // Optional: email to send notifications to, default can be hardcoded
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    // Handle CORS preflight options request
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    // Only allow POST requests
    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      });
    }

    // Parse path to match /api/contact
    const url = new URL(request.url);
    if (url.pathname !== "/api/contact") {
      return new Response(JSON.stringify({ error: "Not found" }), {
        status: 404,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      });
    }

    try {
      const { name, email, message } = await request.json() as {
        name?: string;
        email?: string;
        message?: string;
      };

      // Input Validation
      if (!name || !email || !message) {
        return new Response(JSON.stringify({ error: "Missing required fields" }), {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        });
      }

      if (message.length < 10) {
        return new Response(JSON.stringify({ error: "Message must be at least 10 characters long" }), {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        });
      }

      // Secure Resend API Integration
      const resendApiKey = env.RESEND_API_KEY;
      if (!resendApiKey) {
        console.error("RESEND_API_KEY is not configured in environment variables.");
        return new Response(JSON.stringify({ error: "Server configuration error" }), {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        });
      }

      const toEmail = env.TO_EMAIL || "gilankdev@gmail.com"; // Default recipient email

      // Send request to Resend API
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: toEmail,
          subject: `New Portfolio Message from ${name}`,
          html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background-color: #f4f4f5; padding: 15px; border-radius: 8px; border: 1px solid #e4e4e7;">${message}</p>
          `,
        }),
      });

      if (!resendResponse.ok) {
        const resendError = await resendResponse.text();
        console.error("Resend API error:", resendError);
        throw new Error("Resend API failed to send email");
      }

      return new Response(JSON.stringify({ success: true, message: "Message sent successfully" }), {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      });

    } catch (err: any) {
      console.error("Worker error:", err.message);
      return new Response(JSON.stringify({ error: "Internal server error" }), {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      });
    }
  },
};
