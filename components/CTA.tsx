export default function CTA() {
  return (
    <section id="try" className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-10 backdrop-blur">
      <h3 className="text-2xl md:text-3xl font-bold">ابدأ خلال أقل من دقيقة</h3>
      <p className="mt-2 text-white/70">الإصدار التجريبي متاح الآن. سجّل بريدك لتصلك النسخة مع ميزة الرفع الفوري.</p>
      <form className="mt-5 flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          placeholder="بريدك الإلكتروني"
          className="w-full rounded-xl bg-black/40 px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-[var(--accent)]"
        />
        <button type="submit" className="rounded-xl bg-[var(--accent)] px-6 py-3 font-semibold hover:opacity-90 transition">
          أعطني الوصول
        </button>
      </form>
      <p className="mt-3 text-xs text-white/50">لن نُرسل سبام. يمكنك الإلغاء في أي وقت.</p>
    </section>
  );
}