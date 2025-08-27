export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 gradient -z-10" />
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <span className="inline-block rounded-full border border-white/20 px-4 py-1 text-sm text-white/70">
          إطلاق مبكّر • SaaS
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          حوّل <span className="text-[var(--accent)]">لقطات الشاشة</span> إلى نص خلال ثوانٍ
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-white/70">
          ارفع صورة شاشة واحدة أو مجموعة صور، ودع الذكاء الاصطناعي يستخرج النص ويُنظّمه لك للتصدير أو النسخ.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#try" className="rounded-xl bg-[var(--accent)] px-6 py-3 font-semibold hover:opacity-90 transition">
            جرّبه الآن
          </a>
          <a href="#features" className="rounded-xl border border-white/20 px-6 py-3 font-semibold hover:bg-white/5 transition">
            كيف يعمل؟
          </a>
        </div>
      </div>
    </section>
  );
}