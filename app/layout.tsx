import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MD-FLOW | הקליניקה שלך, באוטופיילוט",
  description:
    "MD-FLOW automates private clinics with AI Scribe (Hebrew/English) and aggressive SEO growth."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body className="bg-premium text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
