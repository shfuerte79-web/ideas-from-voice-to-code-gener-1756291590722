const items = [
  { title: 'رفع لقطات الشاشة', desc: 'ادعم PNG / JPG / WebP مع معالجة ذكية للأبعاد.' },
  { title: 'استخراج نص بالذكاء الاصطناعي', desc: 'نماذج دقيقة للتعرّف على النصوص العربية والإنجليزية.' },
  { title: 'تنظيف وتنسيق', desc: 'إزالة الضجيج وتنسيق النتائج في فقرات أو نقاط.' },
  { title: 'تصدير سريع', desc: 'انسخ للمذكرة أو صدّر JSON/CSV بلمسة واحدة.' },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold">الميزات الأساسية</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <h3 className="text-xl font-semibold">{it.title}</h3>
            <p className="mt-2 text-white/70 text-sm">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}