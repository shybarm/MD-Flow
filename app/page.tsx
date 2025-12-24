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
              icon={<CreditCard className="h-5 w-5 text-blue-400" />}
              title="ניהול פיננסי"
              desc="חשבוניות וקבלות דיגיטליות, סליקה מאובטחת, ודוחות בלחיצת כפתור."
            />
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={openDemo}
              className="px-10 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition font-semibold text-lg hover:scale-105"
            >
              קבעו דמו קצר עכשיו
            </button>
            <p className="mt-3 text-sm text-slate-400">בלי התחייבות • בלי דמי הקמה • מראים לך את זה בלייב</p>
          </div>
        </div>
      </section>

      {/* BACKOFFICE (one stop shop) */}
      <section id="backoffice" className="px-6 py-20 bg-slate-950/35 border-y border-white/5">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 rounded-full glassLight px-4 py-2 text-sm text-slate-200">
              <Stethoscope className="h-4 w-4 text-blue-400" />
              <span>One-Stop Shop Backoffice לקליניקה פרטית</span>
            </div>

            <h2 className="mt-6 text-4xl font-bold text-white">
              Backoffice קל לשימוש —<span className="text-blue-500"> שמוריד עומס</span> מהצוות
            </h2>

            <p className="mt-5 text-slate-300 text-lg">
              יומן חכם, זימון תורים, תזכורות, טפסים, תשלומים, תיקי מטופלים וניהול לידים —
              הכל במקום אחד, עם UX שאפשר לאהוב.
            </p>

            <ul className="mt-7 space-y-3 text-slate-200">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5" />
                <span>זימון תורים אונליין 24/7 + סנכרון לנייד ול-Google Calendar</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5" />
                <span>תזכורות WhatsApp/SMS/מייל להפחתת No-Shows</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5" />
                <span>חשבוניות/קבלות + סליקה מאובטחת + דוחות רווח והפסד</span>
              </li>
            </ul>

            <div className="mt-9">
              <button
                onClick={openDemo}
                className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition font-semibold text-lg hover:scale-105"
              >
                קבעו דמו קצר
              </button>
            </div>
          </div>

          <div className="reveal" style={{ animationDelay: "110ms" }}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <img
                alt="Clinic receptionist / scheduling"
                className="h-[420px] w-full object-cover"
                src="https://images.unsplash.com/photo-1580281657527-47f249e8f3b8?auto=format&fit=crop&w=1600&q=80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-4 right-4 left-4 glass rounded-2xl p-4">
                <p className="text-white font-semibold">הצוות נושם. המטופלים מרוצים. ואת/ה חוזר/ת לרפואה.</p>
                <p className="text-slate-300 text-sm mt-1">
                  פחות טלפונים, פחות תזכורות ידניות, פחות רדיפה אחרי תשלומים.
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
              <Kpi label="No-Shows" value="↓" />
              <Kpi label="זמן אדמין" value="↓" />
              <Kpi label="חוויית מטופל" value="↑" />
            </div>
          </div>
        </div>
      </section>

      {/* AI SCRIBE */}
      <section id="ai" className="px-6 py-20">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <h2 className="text-4xl font-bold text-white">
              ה-AI Scribe האישי שלך:
              <span className="text-blue-500"> סיכומי ביקור במינימום מאמץ</span>
            </h2>

            <p className="mt-5 text-slate-300 text-lg">
              הפסק להקליד תוך כדי שהמטופל מדבר. המערכת מסכמת ביקור מתוך שיחה/הקלטה,
              מייצרת מסמכים רפואיים מובנים, ומאפשרת שליחה למטופל באישור בלחיצת כפתור.
            </p>

            <div className="mt-8 grid gap-4">
              <InfoRow
                title="סיכום ביקור אוטומטי"
                desc="הפקת תמצית קלינית מקצועית + תכנית טיפול והפניות."
              />
              <InfoRow
                title="מכתב רפואי מובנה"
                desc="פורמט אחיד, קריא, ומוכן לשיתוף/הדפסה/שמירה."
              />
              <InfoRow
                title="שליחה למטופל בקליק"
                desc="שיתוף מאובטח באישור משתמש, עם שליטה מלאה."
              />
            </div>

            <div className="mt-9">
              <button
                onClick={openDemo}
                className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition font-semibold text-lg hover:scale-105"
              >
                תראו את ה-AI בלייב
              </button>
            </div>
          </div>

          <div className="reveal" style={{ animationDelay: "110ms" }}>
            <div className="glass glow rounded-3xl p-6">
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span>AI Scribe — Demo</span>
                <span className="text-green-400">● Recording</span>
              </div>

              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-slate-950/70 border border-white/5 p-4 text-sm">
                  <p className="text-slate-400 mb-2">שיחה</p>
                  <p className="text-blue-400 font-semibold">רופא:</p>
                  <p className="text-slate-200">מה מביא אותך היום?</p>
                  <p className="text-blue-400 font-semibold mt-3">מטופל:</p>
                  <p className="text-slate-200">כאבים בברך ימין בזמן ריצה.</p>
                </div>

                <div className="rounded-2xl bg-slate-950/70 border border-white/5 p-4 text-sm">
                  <p className="text-slate-400 mb-2">סיכום ביקור</p>
                  <p className="text-white font-semibold">תמצית</p>
                  <p className="text-slate-200 mt-2 leading-relaxed">
                    כאב ברך ימין במאמץ. מומלץ בדיקה גופנית מלאה, שקילת US/צילום לפי ממצאים,
                    והפניה לפיזיותרפיה. הנחיות להפחתת עומס והמשך מעקב.
                  </p>
                  <p className="text-slate-400 mt-3">נוצר אוטומטית • ניתן לעריכה • נשמר לתיק</p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-blue-600/10 border border-blue-500/20 p-4 text-sm text-slate-200">
                <span className="text-blue-400 font-semibold">טיפ:</span>{" "}
                אפשר להפוך את הסיכום גם לתוכן SEO “לפי התמחות” (FAQ ודפי שירותים) שמביא עוד מטופלים.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO / ORGANIC GROWTH */}
      <section id="seo" className="px-6 py-20 bg-slate-950/35 border-y border-white/5">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <h2 className="text-4xl font-bold text-white">
              נוכחות דיגיטלית שמביאה אותך לראש התוצאות:
              <span className="text-blue-500"> SEO & PPC</span>
            </h2>

            <p className="mt-5 text-slate-300 text-lg">
              אנחנו לא רק “תוכנה” — אנחנו מנוע הצמיחה שלך.
              עם ניסיון בקידום אתרים רפואיים, אנחנו דואגים שמי שמחפש מומחה בתחום שלך — ימצא אותך.
            </p>

            <div className="mt-8 grid gap-4">
              <InfoRow
                title="Google Analytics בזמן אמת"
                desc="נתונים חיים על מבקרים, מקורות, ודפים שמייצרים המרות."
              />
              <InfoRow
                title="קידום ממוקד לפי התמחות"
                desc="אשכולות תוכן רפואיים + דפי שירותים + FAQ שמביאים פניות."
              />
              <InfoRow
                title="מדידה עד השיחה"
                desc="Tracking של טופס דמו/שיחה/WhatsApp כדי להבין ROI אמיתי."
              />
            </div>

            <div className="mt-9">
              <button
                onClick={openDemo}
                className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition font-semibold text-lg hover:scale-105"
              >
                רוצים לראות תוכנית צמיחה?
              </button>
            </div>
          </div>

          <div className="reveal" style={{ animationDelay: "110ms" }}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <img
                alt="Team working on marketing analytics"
                className="h-[420px] w-full object-cover"
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              <div className="absolute bottom-4 right-4 left-4 glass rounded-2xl p-4">
                <p className="text-white font-semibold">+240% צמיחה אורגנית (הדגמה)</p>
                <p className="text-slate-300 text-sm mt-1">
                  קידום ממוקד + אתר ממיר + אופטימיזציה מתמשכת = יותר פניות איכותיות.
                </p>

                <div className="mt-4 h-10 flex items-end gap-2">
                  <div className="w-full bg-blue-500/35 rounded h-4" />
                  <div className="w-full bg-blue-500/50 rounded h-6" />
                  <div className="w-full bg-blue-500/70 rounded h-8" />
                  <div className="w-full bg-blue-500 rounded h-10" />
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
              <Kpi label="Clicks" value="↑" />
              <Kpi label="Leads" value="↑" />
              <Kpi label="CTR" value="↑" />
            </div>
          </div>
        </div>
      </section>

      {/* Bonus ideas (market research add-ons) */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="reveal">
            <h2 className="text-4xl font-bold text-white">
              בונוס: שירותים נוספים שרופאים באמת צריכים
            </h2>
            <p className="mt-4 text-slate-300 text-lg max-w-3xl">
              מתוך מחקר שוק — הרחבות שמעלות רמת שירות, חוסכות זמן, ומייצרות ערך למטופלים.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <BonusCard title="Telemedicine מובנה" desc="שיחות וידאו מוצפנות ומאובטחות מתוך המערכת." />
            <BonusCard title="ניהול מרשמים דיגיטליים" desc="שליחת מרשם חתום דיגיטלית לנייד של המטופל." />
            <BonusCard title="תיק מטופל מותאם התמחות" desc="שדות מותאמים לפי תחום (קרדיולוגיה/אורתופדיה וכו׳)." />
            <BonusCard title="ניהול לידים" desc="מעקב אחרי מתעניינים שלא קבעו תור (אסתטיקה/ניתוחים פרטיים)." />
            <BonusCard title="חתימה דיגיטלית" desc="טפסי הסכמה לנייד עוד לפני ההגעה — חוויית פרימיום." />
            <BonusCard title="אוטומציות מתקדמות" desc="טריגרים חכמים למעקב, גבייה ותזכורות פרסונליות." />
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={openDemo}
              className="px-10 py-5 rounded-2xl bg-blue-600 hover:bg-blue-500 transition font-semibold text-xl hover:scale-105"
            >
              הגיע הזמן להעביר את הקליניקה שלך למאה ה-21
            </button>
            <p className="mt-3 text-sm text-slate-400">
              בלי התחייבות • בלי דמי הקמה • בוא נראה לך איך ה-AI עובד בשבילך
            </p>
          </div>
        </div>
      </section>

      {/* About (trust-building paragraph) */}
      <section id="about" className="px-6 py-20 bg-slate-950/35 border-y border-white/5">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <h2 className="text-4xl font-bold text-white">עלינו</h2>
            <p className="mt-5 text-slate-300 text-lg leading-relaxed">
              מגיעים מעולם הסטארטאפים, מבינים את עולם הרפואה.
              הקמנו את MD-FLOW לאחר שנים של ניהול שיווק וטכנולוגיה בסטארטאפים מהצומחים בישראל.
              ראינו איך טכנולוגיה יכולה להקפיץ עסקים — והחלטנו להנגיש את הכוח הזה לרופאים.
              השילוב בין מומחיות ב-SEO, דאטה ובינה מלאכותית מאפשר לנו להעניק לך מעטפת שאין לתוכנה גנרית אחרת.
            </p>

            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <TrustPill icon={<ShieldCheck className="h-5 w-5 text-blue-400" />} text="מוכווני אבטחת מידע ותהליכים" />
              <TrustPill icon={<BarChart3 className="h-5 w-5 text-blue-400" />} text="שיווק מדיד שמביא מטופלים" />
              <TrustPill icon={<FileText className="h-5 w-5 text-blue-400" />} text="אוטומציה שמורידה אדמיניסטרציה" />
              <TrustPill icon={<Stethoscope className="h-5 w-5 text-blue-400" />} text="נבנה סביב צרכי רופאים" />
            </div>
          </div>

          <div className="reveal" style={{ animationDelay: "110ms" }}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <img
                alt="Friendly medical team"
                className="h-[420px] w-full object-cover"
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4 left-4 glass rounded-2xl p-4">
                <p className="text-white font-semibold">אנשים שמבינים מוצר, שיווק — ורפואה.</p>
                <p className="text-slate-300 text-sm mt-1">
                  הכל כדי שהקליניקה שלך תעבוד חכם, תיראה פרימיום, ותגדל אורגנית.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 text-sm text-slate-400">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-3 border-t border-white/5 pt-8">
          <span>© {year} MD-FLOW. All rights reserved.</span>
          <span className="text-slate-500">Premium clinic operations • Backoffice • AI • Growth</span>
        </div>
      </footer>

      {/* CTA Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 px-6">
          <div className="w-full max-w-lg rounded-3xl glass p-6 md:p-8 border border-white/10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {isThankYou ? "תודה!" : "קבעו דמו קצר עכשיו"}
                </h3>
                <p className="mt-2 text-slate-300">
                  {isThankYou
                    ? "הבקשה התקבלה. נחזור אליך בקרוב לתיאום הדמו."
                    : "השאירו פרטים ונחזור לתיאום דמו קצר וממוקד — בלי התחייבות."}
                </p>
              </div>

              <button
                onClick={closeDemo}
                className="h-10 w-10 rounded-2xl hover:bg-white/5 transition grid place-items-center"
                aria-label="Close"
              >
                <X className="h-5 w-5 text-slate-200" />
              </button>
            </div>

            {!isThankYou ? (
              <form onSubmit={submitDemo} className="mt-6 grid gap-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="שם מלא*"
                    value={form.fullName}
                    onChange={(v) => setForm((s) => ({ ...s, fullName: v }))}
                    placeholder="לדוגמה: ד״ר כהן"
                    autoComplete="name"
                  />
                  <Input
                    label="טלפון*"
                    value={form.phone}
                    onChange={(v) => setForm((s) => ({ ...s, phone: v }))}
                    placeholder="05X-XXXXXXX"
                    autoComplete="tel"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="אימייל"
                    value={form.email}
                    onChange={(v) => setForm((s) => ({ ...s, email: v }))}
                    placeholder="clinic@email.com"
                    autoComplete="email"
                  />
                  <Input
                    label="שם הקליניקה"
                    value={form.clinicName}
                    onChange={(v) => setForm((s) => ({ ...s, clinicName: v }))}
                    placeholder="קליניקת ..."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 px-6 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition font-semibold text-lg hover:scale-[1.02]"
                >
                  שליחה
                </button>

                <p className="text-xs text-slate-400">
                  * כרגע זו דמו־קאפצ׳ר ללא DB. כשתחבר Supabase נתחיל לשמור לידים אוטומטית.
                </p>
              </form>
            ) : (
              <div className="mt-8 rounded-3xl bg-blue-600/10 border border-blue-500/20 p-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-400" />
                  <p className="font-semibold text-white">הכל נקלט בהצלחה</p>
                </div>
                <p className="mt-3 text-slate-200">
                  נחזור אליך לתיאום דמו קצר. רוצים להוסיף WhatsApp / סליקה / AI Scribe? נבנה את זה לפי הצורך.
                </p>
                <button
                  onClick={closeDemo}
                  className="mt-6 px-6 py-3 rounded-2xl glass hover:bg-white/5 transition font-semibold"
                >
                  סגור
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

/* --------- UI bits --------- */

function Kpi({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass rounded-2xl p-4 text-center">
      <p className="text-xs text-slate-400">{label}</p>
      <p className="mt-1 text-white font-semibold">{value}</p>
    </div>
  );
}

function MiniCard({
  title,
  desc,
  icon
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-slate-950/55 border border-white/5 p-4">
      <div className="flex items-center gap-2">
        <div className="h-9 w-9 rounded-2xl bg-blue-600/10 border border-blue-500/20 grid place-items-center">
          {icon}
        </div>
        <p className="text-white font-semibold">{title}</p>
      </div>
      <p className="mt-2 text-sm text-slate-300 leading-relaxed">{desc}</p>
    </div>
  );
}

function BrandPill({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/5 py-3 px-4">
      {children}
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  desc
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="glass rounded-3xl p-6 hover:bg-white/5 transition">
      <div className="h-10 w-10 rounded-2xl bg-blue-600/10 border border-blue-500/20 grid place-items-center">
        {icon}
      </div>
      <p className="mt-4 text-white font-semibold">{title}</p>
      <p className="mt-2 text-sm text-slate-300 leading-relaxed">{desc}</p>
    </div>
  );
}

function InfoRow({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="glass rounded-2xl p-4">
      <p className="text-white font-semibold">{title}</p>
      <p className="mt-1 text-sm text-slate-300 leading-relaxed">{desc}</p>
    </div>
  );
}

function BonusCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="glass rounded-3xl p-6">
      <p className="text-white font-semibold">{title}</p>
      <p className="mt-2 text-sm text-slate-300 leading-relaxed">{desc}</p>
    </div>
  );
}

function TrustPill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="glass rounded-2xl p-4 flex items-center gap-3">
      <div className="h-10 w-10 rounded-2xl bg-blue-600/10 border border-blue-500/20 grid place-items-center">
        {icon}
      </div>
      <p className="text-slate-200 text-sm font-semibold">{text}</p>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  placeholder,
  autoComplete
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <label className="grid gap-2 text-sm">
      <span className="text-slate-300">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-2xl bg-slate-950/55 border border-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 transition"
      />
    </label>
  );
}
