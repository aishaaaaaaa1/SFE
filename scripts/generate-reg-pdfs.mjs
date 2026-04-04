import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'assets', 'reglementation');

/** Modèles vides : ne pas écraser les PDF réels déjà présents dans assets/reglementation/. */
const items = [];

async function makePdf(lines) {
  const doc = await PDFDocument.create();
  const page = doc.addPage([595.28, 841.89]);
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const { width, height } = page.getSize();
  let y = height - 72;
  const size = 11;
  const lineHeight = size * 1.35;
  for (const line of lines) {
    if (line) {
      page.drawText(line, {
        x: 50,
        y,
        size,
        font,
        color: rgb(0.12, 0.16, 0.22),
        maxWidth: width - 100,
      });
    }
    y -= lineHeight;
    if (y < 72) break;
  }
  return doc.save();
}

fs.mkdirSync(outDir, { recursive: true });

if (items.length === 0) {
  console.log('Aucun PDF modèle à générer (voir assets/reglementation/).');
} else {
  for (const item of items) {
    const bytes = await makePdf(item.lines);
    const fp = path.join(outDir, item.file);
    fs.writeFileSync(fp, bytes);
    console.log('Wrote', fp);
  }
}

console.log('Done. Run: npm run pages');
