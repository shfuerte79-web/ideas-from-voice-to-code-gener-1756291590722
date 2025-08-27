import "./globals.css";

export const metadata = {
  title: 'Ideas from: AI-Powered Screenshot to Text',
  description: 'حوّل لقطات الشاشة إلى نص مُهيكل باستخدام الذكاء الاصطناعي خلال ثوانٍ.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}