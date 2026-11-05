import { estedad, schibsted } from "@/lib/fonts";
import "../globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={`${estedad.variable} ${schibsted.variable}`}>
      <body>{children}</body>
    </html>
  );
}
