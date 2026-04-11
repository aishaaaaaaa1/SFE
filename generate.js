const fs = require('fs');
const path = require('path');

const arDir = path.join(__dirname, 'pages', 'ar');
const templatePath = path.join(arDir, 'actu-bir-gandouz.html');
const templateContent = fs.readFileSync(templatePath, 'utf8');

const pages = [
  { file: 'actu-conseil.html', title: 'دعوة للترشح لعضوية مجلس الإدارة', content: 'أطلقت الوكالة الحضرية للداخلة وادي الذهب دعوة للترشح لعضوية مجلس إدارتها...' },
  { file: 'actu-voirie.html', title: 'انطلاق أشغال تهيئة الطرق الحضرية', content: 'تم إعطاء الانطلاقة لأشغال تهيئة الطرق الحضرية لتحسين البنية التحتية...' },
  { file: 'actu-commission.html', title: 'اجتماع اللجنة التقنية', content: 'عقدت اللجنة التقنية اجتماعا لدراسة ملفات ومشاريع التعمير...' },
  { file: 'actu-ouverture-sede.html', title: 'افتتاح توسعة مقر الوكالة', content: 'تم افتتاح توسعة مقر الوكالة الحضرية للداخلة لتعزيز الفضاءات الإدارية...' },
  { file: 'actu-formation-agents.html', title: 'دورة تكوينية للموظفين', content: 'نظمت الوكالة دورة تكوينية لفائدة أطرها لتقوية قدراتهم في مجال التعمير...' },
  { file: 'actu-digitalisation-services.html', title: 'رقمنة الخدمات', content: 'تواصل الوكالة رقمنة خدماتها لتبسيط المساطر وتسهيل ولوج المرتفقين...' },
  { file: 'actu-partenariat-collectivite.html', title: 'شراكة مع الجماعات الترابية', content: 'تم توقيع اتفاقيات شراكة لتعزيز التعاون مع الجماعات الترابية...' },
  { file: 'actu-seminaire-urbanisme.html', title: 'ندوة حول التعمير', content: 'نظمت الوكالة ندوة حول آفاق التخطيط الحضري المستدام...' },
  { file: 'actu-appel-projets-amenagement.html', title: 'إعلان عن مشاريع التهيئة', content: 'إطلاق طلب عروض مشاريع للتهيئة الحضرية...' },
  { file: 'actu-nouveaux-dlai-instruction.html', title: 'آجال جديدة لدراسة الملفات', content: 'اعتماد آجال جديدة ومحينة لدراسة رخص التعمير...' },
  { file: 'actu-visite-ministre-equipement.html', title: 'زيارة السيد الوزير', content: 'اطلع السيد الوزير على تقدم مشاريع التهيئة الحضرية...' },
  { file: 'actu-etude-amenagement-zone-port.html', title: 'دراسة تهيئة منطقة الميناء', content: 'إعطاء الانطلاقة للدراسة الخاصة بتهيئة منطقة الميناء...' },
  { file: 'actu-bilan-2024-audoe.html', title: 'حصيلة التدخلات لسنة 2024', content: 'تقديم الحصيلة السنوية لتدخلات الوكالة الحضرية برسم سنة 2024...' }
];

pages.forEach(p => {
  let newContent = templateContent.replace(
    /<title>.*?<\/title>/,
    `<title>النسخة العربية · ${p.title} · AUDOE</title>`
  );

  newContent = newContent.replace(
    /<span>Bir Gandouz<\/span>/,
    `<span>الخبر</span>`
  );

  newContent = newContent.replace(
    /<h1 class="page-title">.*?<\/h1>/,
    `<h1 class="page-title">${p.title}</h1>`
  );

  // Replace content paragraphs
  newContent = newContent.replace(
    /<p>Une enquête publique relative au projet.*?<\/p>\s*<p>Les modalités de participation.*?<\/p>/s,
    `<p>${p.content}</p><p>للمزيد من التفاصيل، المرجو التواصل مع مصالح الوكالة الحضرية.</p>`
  );

  const outPath = path.join(arDir, p.file);
  fs.writeFileSync(outPath, newContent);
  console.log(`Created ${p.file}`);
});
