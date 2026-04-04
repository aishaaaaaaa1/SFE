/**
 * Génère un PDF « fiche AUDOE » (texte + images) dans le navigateur.
 * Dépendance : pdf-lib (ESM).
 */
import { PDFDocument, StandardFonts, rgb } from 'https://esm.sh/pdf-lib@1.17.1';

const MARGIN = 50;
const PAGE_W = 595.28;
const PAGE_H = 841.89;
const CONTENT_W = PAGE_W - MARGIN * 2;

function wrapWords(font, text, fontSize, maxW) {
  const words = String(text).split(/\s+/).filter(Boolean);
  const lines = [];
  let cur = '';
  for (const w of words) {
    const test = cur ? cur + ' ' + w : w;
    if (font.widthOfTextAtSize(test, fontSize) <= maxW) cur = test;
    else {
      if (cur) lines.push(cur);
      cur = w;
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

function wrapParagraph(font, text, fontSize, maxW) {
  const raw = String(text).trim();
  if (!raw) return [];
  const out = [];
  for (const line of raw.split('\n')) {
    const words = line.split(/\s+/).filter(Boolean);
    let cur = '';
    for (const w of words) {
      const test = cur ? cur + ' ' + w : w;
      if (font.widthOfTextAtSize(test, fontSize) <= maxW) cur = test;
      else {
        if (cur) out.push(cur);
        if (font.widthOfTextAtSize(w, fontSize) > maxW) {
          let chunk = '';
          for (const ch of w) {
            const t2 = chunk + ch;
            if (font.widthOfTextAtSize(t2, fontSize) <= maxW) chunk = t2;
            else {
              if (chunk) out.push(chunk);
              chunk = ch;
            }
          }
          cur = chunk;
        } else cur = w;
      }
    }
    if (cur) out.push(cur);
  }
  return out;
}

async function embedRaster(pdfDoc, bytes) {
  const u8 = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  if (u8.length > 1 && u8[0] === 0xff && u8[1] === 0xd8) {
    return pdfDoc.embedJpg(u8);
  }
  return pdfDoc.embedPng(u8);
}

function slugify(s) {
  return String(s)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 72) || 'document';
}

/**
 * @param {object} opts
 * @param {string} opts.title
 * @param {string[]} [opts.subtitleLines]
 * @param {string[]} opts.bodyParagraphs
 * @param {string[]} [opts.imageUrls] — URLs absolues ou relatives à la page
 * @param {string} [opts.fileName]
 * @param {string} [opts.sectionLabel] — ex. « Documents d'urbanisme »
 */
export async function downloadAudoeFiche(opts) {
  const title = opts.title || 'Document';
  const subtitleLines = opts.subtitleLines || [];
  const bodyParagraphs = opts.bodyParagraphs || [];
  const imageUrls = opts.imageUrls || [];
  const sectionLabel = opts.sectionLabel || 'AUDOE — Dakhla · Oued Eddahab';
  const fileName = (opts.fileName || slugify(title) + '-fiche-audoe.pdf').replace(/[^\w.\-]+/g, '-');

  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  let page = pdfDoc.addPage([PAGE_W, PAGE_H]);
  let y = PAGE_H - MARGIN;
  const lineH = (sz) => sz * 1.35;

  function needSpace(h) {
    if (y - h < MARGIN + 40) {
      page = pdfDoc.addPage([PAGE_W, PAGE_H]);
      y = PAGE_H - MARGIN;
      return true;
    }
    return false;
  }

  function drawLines(lines, size, color, bold = false) {
    const f = bold ? fontBold : font;
    for (const ln of lines) {
      needSpace(lineH(size));
      page.drawText(ln, {
        x: MARGIN,
        y: y - size,
        size,
        font: f,
        color,
        maxWidth: CONTENT_W,
      });
      y -= lineH(size);
    }
  }

  drawLines(wrapWords(font, sectionLabel, 9, CONTENT_W), 9, rgb(0.35, 0.42, 0.5));
  y -= 6;
  drawLines(wrapWords(fontBold, title, 16, CONTENT_W), 16, rgb(0.06, 0.12, 0.22), true);
  y -= 4;
  for (const sub of subtitleLines) {
    drawLines(wrapWords(font, sub, 11, CONTENT_W), 11, rgb(0.2, 0.28, 0.38));
  }
  y -= 8;
  page.drawLine({
    start: { x: MARGIN, y: y + 4 },
    end: { x: PAGE_W - MARGIN, y: y + 4 },
    thickness: 0.5,
    color: rgb(0.85, 0.88, 0.92),
  });
  y -= 12;

  for (const para of bodyParagraphs) {
    const lines = wrapParagraph(font, para, 10, CONTENT_W);
    for (const ln of lines) {
      needSpace(lineH(10));
      page.drawText(ln, { x: MARGIN, y: y - 10, size: 10, font, color: rgb(0.12, 0.16, 0.22) });
      y -= lineH(10);
    }
    y -= 6;
  }

  for (const url of imageUrls) {
    let res;
    try {
      res = await fetch(url, { credentials: 'same-origin' });
    } catch (e) {
      continue;
    }
    if (!res.ok) continue;
    const buf = await res.arrayBuffer();
    let img;
    try {
      img = await embedRaster(pdfDoc, buf);
    } catch {
      continue;
    }
    const iw = img.width;
    const ih = img.height;
    const maxW = CONTENT_W;
    const maxH = 420;
    let w = maxW;
    let h = (ih / iw) * w;
    if (h > maxH) {
      h = maxH;
      w = (iw / ih) * h;
    }
    needSpace(h + 28);
    y -= 8;
    page.drawText('Illustration :', {
      x: MARGIN,
      y: y - 9,
      size: 9,
      font: fontBold,
      color: rgb(0.35, 0.42, 0.5),
    });
    y -= lineH(9) + 4;
    needSpace(h + 10);
    page.drawImage(img, { x: MARGIN, y: y - h, width: w, height: h });
    y -= h + 16;
  }

  const bytes = await pdfDoc.save();
  const blob = new Blob([bytes], { type: 'application/pdf' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = fileName;
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  URL.revokeObjectURL(a.href);
  a.remove();
}

export function resolvePageUrl(relativeFromPages) {
  try {
    return new URL(relativeFromPages, window.location.href).href;
  } catch {
    return relativeFromPages;
  }
}
