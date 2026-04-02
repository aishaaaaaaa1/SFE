import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
let h = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
h = h.replace(/ target="_blank" rel="noopener noreferrer"/g, '');
h = h.replace(
  /<a class="social-btn" href="https:\/\/www.facebook.com\/agencedakhla\/"/,
  '<a class="social-btn" href="https://www.facebook.com/agencedakhla/" target="_blank" rel="noopener noreferrer"'
);
fs.writeFileSync(path.join(root, 'index.html'), h, 'utf8');
console.log('Stripped target=_blank from index (Facebook kept)');
