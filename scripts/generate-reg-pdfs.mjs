import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'assets', 'reglementation');

const items = [
  {
    file: 'dahir-1-93-51-agences-urbaines.pdf',
    lines: [
      'AUDOE — Dakhla · Oued Eddahab',
      '',
      'Fiche documentaire (exemple)',
      'Dahir n° 1-93-51',
      'Institution des agences urbaines',
      '',
      'Ce PDF est un modèle local pour téléchargement.',
      'Remplacez-le par le texte officiel consolidé si besoin.',
    ],
  },
  {
    file: 'decret-2-03-221-creation-audoe.pdf',
    lines: [
      'AUDOE — Dakhla · Oued Eddahab',
      '',
      'Fiche documentaire (exemple)',
      'Décret n° 2-03-221',
      'Création de l’agence — BO n° 5214 (2004)',
      '',
      'Document local — à substituer par l’extrait BO officiel.',
    ],
  },
  {
    file: 'circulaire-2259-1257-controle-urbanisme.pdf',
    lines: [
      'AUDOE — Dakhla · Oued Eddahab',
      '',
      'Fiche documentaire (exemple)',
      'Circulaire n° 2259-1257',
      'Contrôle et sanctions — urbanisme',
      '',
      'Document local — modèle de téléchargement.',
    ],
  },
  {
    file: 'circulaire-2911-controle-construction.pdf',
    lines: [
      'AUDOE — Dakhla · Oued Eddahab',
      '',
      'Fiche documentaire (exemple)',
      'Circulaire conjointe n° 2911',
      'Contrôle d’urbanisme et de la construction',
      '',
      'Document local — modèle de téléchargement.',
    ],
  },
  {
    file: 'arrete-modele-urbanisme-audoe.pdf',
    lines: [
      'AUDOE — Dakhla · Oued Eddahab',
      '',
      'Fiche documentaire (exemple)',
      'Arrêté-type — urbanisme sur le ressort',
      '',
      'Document local — à remplacer par les arrêtés publiés.',
    ],
  },
];

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

for (const item of items) {
  const bytes = await makePdf(item.lines);
  const fp = path.join(outDir, item.file);
  fs.writeFileSync(fp, bytes);
  console.log('Wrote', fp);
}

console.log('Done. Run: npm run pages');
