const fs = require('fs');
const path = require('path');
const https = require('https');

const publicImagesDir = path.join(__dirname, 'front-end', 'public', 'images');

// Ensure directory exists
if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

// Copy old images if they exist
const oldImagesDir = path.join(__dirname, 'old-nextjs', 'public', 'images');
const filesToCopy = ['confesweb.png', 'calculator.png', 'profile.jpeg'];
filesToCopy.forEach(file => {
  const src = path.join(oldImagesDir, file);
  const dest = path.join(publicImagesDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file} to public/images/`);
  } else {
    console.log(`Source file ${src} not found.`);
  }
});

// List of projects to take screenshots for
const projects = [
  { name: 'groupify', url: 'https://groupify-six.vercel.app/' },
  { name: 'bearly-ai', url: 'https://bearly-ai.vercel.app/' },
  { name: 'pusaka-busana', url: 'https://pusaka-busana.vercel.app/' },
  { name: 'repeat-lank', url: 'https://repeat-lank.web.app/' },
  { name: 'safthoo', url: 'https://safthoo.web.app/' },
  { name: 'markdown-note', url: 'https://minimalist-markdown-note.vercel.app/' }
];

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    
    // Set user agent to avoid bot detection block
    const options = new URL(url);
    const reqOpts = {
      hostname: options.hostname,
      path: options.pathname + options.search,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    };

    const request = https.get(reqOpts, (response) => {
      // Handle redirects if any
      if (response.statusCode === 301 || response.statusCode === 302) {
        file.close();
        fs.unlink(destPath, () => {});
        downloadFile(response.headers.location, destPath).then(resolve).catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        file.close();
        fs.unlink(destPath, () => {});
        reject(new Error(`Failed to get '${url}' (Status Code: ${response.statusCode})`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    });
    
    request.on('error', (err) => {
      file.close();
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

async function captureScreenshots() {
  for (const project of projects) {
    const dest = path.join(publicImagesDir, `${project.name}.png`);
    console.log(`\n========================================`);
    console.log(`Processing screenshot for: ${project.name}`);
    console.log(`URL: ${project.url}`);
    
    // Try microlink first
    const microlinkUrl = `https://api.microlink.io?url=${encodeURIComponent(project.url)}&screenshot=true&embed=screenshot.url`;
    // Fallback to thum.io
    const thumioUrl = `https://image.thum.io/get/width/1280/crop/800/maxAge/24/${project.url}`;
    
    try {
      console.log(`Attempting Microlink API...`);
      await downloadFile(microlinkUrl, dest);
      console.log(`Success: Saved via Microlink.`);
    } catch (err) {
      console.warn(`Microlink failed: ${err.message}. Trying Thum.io fallback...`);
      try {
        await downloadFile(thumioUrl, dest);
        console.log(`Success: Saved via Thum.io.`);
      } catch (fallbackErr) {
        console.error(`Error: Both methods failed. Details: ${fallbackErr.message}`);
      }
    }
  }
  console.log(`\n========================================`);
  console.log('All screenshot downloads complete.');
}

captureScreenshots();
