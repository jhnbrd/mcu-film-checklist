import fs from 'fs';
import sharp from 'sharp';

const svgBuffer = fs.readFileSync('public/favicon.svg');

async function renderIcons() {
  console.log('Rendering high-resolution Arc Reactor PNG icons from SVG...');
  
  // Apple Touch Icon: 180x180
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile('public/apple-touch-icon.png');

  // PWA 192x192
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile('public/pwa-192x192.png');

  // PWA 512x512
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile('public/pwa-512x512.png');

  console.log('Successfully generated authentic Arc Reactor PNG icons:');
  console.log('- public/apple-touch-icon.png (180x180)');
  console.log('- public/pwa-192x192.png (192x192)');
  console.log('- public/pwa-512x512.png (512x512)');
}

renderIcons().catch(err => {
  console.error('Error rendering icons:', err);
  process.exit(1);
});
