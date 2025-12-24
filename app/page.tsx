"use client";

import { useMemo, useState } from "react";
import {
  Sparkles,
  ShieldCheck,
  CalendarDays,
  MessageCircleMore,
  FileText,
  BarChart3,
  CreditCard,
  Stethoscope,
  CheckCircle2,
  X,
  ArrowLeft
} from "lucide-react";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isThankYou, setIsThankYou] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    clinicName: ""
  });

  const year = useMemo(() => new Date().getFullYear(), []);

  function openDemo() {
    setIsThankYou(false);
    setIsModalOpen(true);
  }

  function closeDemo() {
    setIsModalOpen(false);
  }

  function submitDemo(e: React.FormEvent) {
    e.preventDefault();

    // No DB right now: simulate success
    if (!form.fullName.trim() || !form.phone.trim()) return;

    setIsThankYou(true);
    // Optional: reset form
    // setForm({ fullName: "", phone: "", email: "", clinicName: "" });
  }

  return (
    <main className="min-h-screen">
      {/* Font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;600;700&display=swap"
      />
      <style>{`body{font-family:Heebo,system-ui,sans-serif}`}</style>

      {/* Top Nav (EasyBizy-ish: clean + sticky + CTA) */}
      <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/50 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-blue-600/15 border border-blue-500/25 grid place-items-center">
              <Sparkles className="h-5 w-5 text-blue-400" />
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-white">MD-FLOW</p>
              <p className="text-xs text-slate-400">All-in-One Clinic + AI + SEO</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a className="hover:text-white transition" href="#services">מה מקבלים</a>
            <a className="hover:text-white transition" href="#backoffice">Backoffice</a>
            <a className="hover:text-white transition" href="#ai">AI</a>
            <a className="hover:text-white transition" href="#seo">SEO</a>
            <a className="hover:text-white transition" href="#about">עלינו</a>
          </nav>

          <button
            onClick={openDemo}
            className="px-5 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-500 transition font-semibold hover:scale-105"
          >
            קבעו דמו קצר
          </button>
        </div>
      </header>

      {/* HERO (more human + image heavy) */}
      <section className="relative px-6 pt-12 md:pt-16 pb-14">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div className="reveal">
            <div className="inline-flex items-center gap-2 rounded-full glassLight px-4 py-2 text-sm text-slate-200">
              <ShieldCheck className="h-4 w-4 text-blue-400" />
              <span>תשתית מוכוונת אבטחת מידע • מוכנות לתאימות לפי הנחיות משרד הבריאות</span>
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-white">
              המרפאה שלך בשיא הקידמה:
              <span className="text-blue-500"> מ-SEO מנצח ועד סיכום ביקור ב-AI.</span>
              <br />
              הדור הבא של ניהול הקליניקה הפרטית.
              <br />
              <span className="text-slate-200">
                אנחנו מביאים את המטופלים, ה-AI מנהל את הניירת.
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-300 max-w-xl">
              נמאס לך להיות גם רופא, גם מזכירה וגם איש שיווק?
              פיתחנו מערכת All-in-One שנוצרה על ידי מומחי שיווק וטכנולוגיה מיוצאי סטארטאפים מובילים,
              במיוחד עבור רופאים שרוצים קליניקה פרטית רווחית, ממותגת ויעילה – בלי לבזבז דקה מיותרת על אדמיניסטרציה.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={openDemo}
                className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition font-semibold text-lg hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                קבעו דמו קצר עכשיו
                <ArrowLeft className="h-5 w-5" />
              </button>

              <a
                href="#services"
                className="px-8 py-4 rounded-2xl glass hover:bg-white/5 transition font-semibold text-lg inline-flex items-center justify-center"
              >
                לראות את הפיצ’רים
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <Kpi label="זימון תורים" value="24/7" />
              <Kpi label="WhatsApp/SMS" value="אוטומטי" />
              <Kpi label="SEO Growth" value="+240%" />
              <Kpi label="AI Scribe" value="בקליק" />
            </div>
          </div>

          {/* Human image + product card */}
          <div className="relative reveal" style={{ animationDelay: "110ms" }}>
            <div className="grid gap-4">
              {/* Human photo */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10">
                <img
                  alt="Doctor with tablet in modern clinic"
                  className="h-[320px] md:h-[360px] w-full object-cover"
                  src="https://images.unsplash.com/photo-1579684288402-e3e337bcc7af?auto=format&fit=crop&w=1600&q=80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 left-4 glass rounded-2xl p-4">
                  <p className="text-white font-semibold">חוויה אנושית למטופל. תהליך דיגיטלי עבורך.</p>
                  <p className="text-slate-300 text-sm mt-1">
                    אתר ממיר + Backoffice שמנהל תורים, תזכורות, מסמכים ותשלומים — במקום אחד.
                  </p>
                </div>
              </div>

              {/* Product mock */}
              <div className="glass glow rounded-3xl p-5">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Backoffice — Live</span>
                  <span className="text-green-400">● Online</span>
                </div>

                <div className="mt-4 grid md:grid-cols-2 gap-4">
                  <MiniCard
                    title="יומן חכם"
                    desc="תורים, חדרים, זמינות, ביטולים — בשקיפות מלאה"
                    icon={<CalendarDays className="h-5 w-5 text-blue-400" />}
                  />
                  <MiniCard
                    title="תזכורות"
                    desc="WhatsApp/SMS/מייל למניעת No-Shows"
                    icon={<MessageCircleMore className="h-5 w-5 text-blue-400" />}
                  />
                  <MiniCard
                    title="סיכומי ביקור"
                    desc="מכתב רפואי מובנה מתוך שיחה/הקלטה"
                    icon={<FileText className="h-5 w-5 text-blue-400" />}
                  />
                  <MiniCard
                    title="דשבורד צמיחה"
                    desc="Analytics בזמן אמת + מדידה של המרות"
                    icon={<BarChart3 className="h-5 w-5 text-blue-400" />}
                  />
                </div>
              </div>
            </div>

            <div className="absolute -z-10 -top-10 -left-10 h-48 w-48 rounded-full bg-blue-600/20 blur-3xl" />
            <div className="absolute -z-10 -bottom-12 -right-8 h-56 w-56 rounded-full bg-sky-400/10 blur-3xl" />
          </div>
        </div>

        {/* “Selected by” / social proof strip (EasyBizy-like) */}
        <div className="mx-auto max-w-6xl px-6 mt-12">
          <div className="glass rounded-3xl p-6">
            <p className="text-sm text-slate-400 mb-4">נבנה עבור קליניקות פרטיות שרוצות לעבוד חכם ולהיראות פרימיום</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-center text-slate-300 text-sm">
              <BrandPill>אורתופדיה</BrandPill>
              <BrandPill>אסתטיקה</BrandPill>
              <BrandPill>רפואת עור</BrandPill>
              <BrandPill>קרדיולוגיה</BrandPill>
              <BrandPill>פיזיותרפיה</BrandPill>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW (your exact offerings) */}
      <section id="services" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center reveal">
            <h2 className="text-4xl font-bold text-white">מה אנחנו מציעים?</h2>
            <p className="mt-4 text-slate-300 text-lg max-w-3xl mx-auto">
              מערכת All-in-One שמחברת אתר שמביא מטופלים + Backoffice שמנהל את הקליניקה + AI שמוריד ניירת + SEO שמייצר צמיחה אורגנית.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <ServiceCard
              icon={<BarChart3 className="h-5 w-5 text-blue-400" />}
              title="SEO & PPC שמביאים אותך לראש"
              desc="מנוע צמיחה אמיתי: אסטרטגיית תוכן רפואית + דפי שירותים + מדידה חכמה."
            />
            <ServiceCard
              icon={<FileText className="h-5 w-5 text-blue-400" />}
              title="AI Scribe לסיכומי ביקור"
              desc="סיכום ביקור אוטומטי, מכתבים רפואיים מובנים, ושליחה למטופל באישור קליק."
            />
            <ServiceCard
              icon={<CalendarDays className="h-5 w-5 text-blue-400" />}
              title="יומן + זימון תורים 24/7"
              desc="זימון אונליין, תבניות תורים, סנכרון לנייד ול-Google Calendar."
            />
            <ServiceCard
              icon={<CreditCard className="h-5 w-5
