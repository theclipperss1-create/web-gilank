# 📧 Contact Form Email Setup Guide

Your contact form is now integrated with **EmailJS** to send messages directly to your email!

## What You'll Receive

When someone fills out the contact form, you'll get an email at **lankdevv@gmail.com** with:
- Their name
- Their email
- Subject
- Full message

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to **[https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)**
2. Click **"Sign Up Free"**
3. Use your Google account (lankdevv@gmail.com) to sign up
4. It's **100% free** for up to 200 emails/month

### Step 2: Add Email Service (Gmail)
1. In EmailJS dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Select **Gmail**
4. Connect your Gmail account (lankdevv@gmail.com)
5. Click **"Create Service"**
6. Copy the **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Click **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template:

```
From: Portfolio Contact Form
Reply-To: {{from_email}}

New Contact Form Submission!

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio website
```

4. Click **"Save Template"**
5. Copy the **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key
1. Click **"Account"** (top right, your profile)
2. Go to **"API Keys"** tab
3. Copy your **Public Key** (e.g., `user_abc123xyz`)

### Step 5: Update Environment Variables
1. Open `.env.local` in your project
2. Replace the placeholder values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123     # From Step 2
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789   # From Step 3
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_abc123xyz     # From Step 4
```

3. Save the file

### Step 6: Deploy to Vercel
1. Push your changes to GitHub (already done!)
2. Go to **Vercel Dashboard**
3. Find your project: `web-gilank`
4. Go to **Settings → Environment Variables**
5. Add the same 3 variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
6. Redeploy the project

---

## ✅ Test It Works

1. Go to your portfolio
2. Fill out the contact form with test data
3. Click "Send Message"
4. Check your Gmail inbox at **lankdevv@gmail.com**
5. You should receive the test message!

---

## 📊 EmailJS Pricing

- **Free Plan:** 200 emails/month (perfect for portfolio!)
- **Paid Plans:** Start at $3.99/month if you need more

---

## 🔧 Troubleshooting

### Messages not sending?
- Check browser console for errors
- Verify all 3 API keys in `.env.local`
- Make sure Gmail service is connected in EmailJS

### Messages going to spam?
- Mark the first few emails as "Not Spam"
- EmailJS uses your Gmail account, so they come from you

### Need help?
- EmailJS Docs: https://www.emailjs.com/docs/
- Check Vercel deployment logs for errors

---

## 🎉 That's It!

Once setup is complete, every message from your portfolio will arrive directly in your Gmail inbox at **lankdevv@gmail.com**!

No backend needed. No server to maintain. Just pure client-side magic. ✨
