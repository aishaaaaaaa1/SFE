import fs from 'fs';
const s = fs.readFileSync('index.html', 'utf8');
const m = s.match(/<style>([\s\S]*?)<\/style>/);
const inner = fs.readFileSync('assets/css/inner-extra.css', 'utf8');
fs.writeFileSync('assets/css/styles.css', m[1] + '\n' + inner);
