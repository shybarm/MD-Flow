"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeft,
  BarChart3,
  CalendarDays,
  Check,
  CheckCircle2,
  CreditCard,
  FileText,
  Lock,
  MessageCircleMore,
  ShieldCheck,
  Sparkles,
  Star,
  X
} from "lucide-react";

export default function Page() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isThankYou, setIsThankYou] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    clinicName: ""
  });

  function openDemo() {
    setIsThankYou(false);
    setIsModalOpen(true);
  }
  function closeDemo() {
    setIsModalOpen(false);
  }

  function submitDemo(e: React.FormEvent) {
    e.preventDefault();
    if (!form.fullName.trim() || !form.phone.trim()) return;
    // No DB yet: simulate success
    setIsThankYou(true);
  }

  return (
    <main className="min-h-screen">
      {/* Font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;600;700&display=swap"
      />
      <style>{`body{font-family:Heebo,system-ui,sans-serif}`}</style>

      {/* NAV (clean + light + login CTA) */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-blue-600/10 border border-blue-200 grid place-items-center">
              <Sparkles className="h-5 w-5 text-blue-600" />
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-slate-900">MD-FLOW</p>
              <p className="text-xs text-slate-500">אתר + Backoffice + AI + SEO</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a className="hover:text-slate-900 transition" href="#services">מה מקבלים</a>
            <a className="hover:text-slate-900 transition" href="#how">איך זה עובד</a>
            <a className="hover:text-slate-900 transition" href="#testimonials">המלצות</a>
            <a className="hover:text-slate-900 transition" href="#pricing">מחיר</a>
            <a className="hover:text-slate-900 transition" href="#about">עלינו</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/login"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 transition font-semibold text-sm text-slate-800"
              title="Login (placeholder)"
            >
              <Lock className="h-4 w-4 text-blue-600" />
              כניסה למערכת
            </a>

            <button
              onClick={openDemo}
              className="px-5 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-700 transition font-semibold text-white"
            >
              קבעו דמו קצר
            </button>
          </div>
        </div>
      </header>

      {/* HERO (Navan-ish: airy + big type + human image + proof) */}
      <section className="px-6 pt-12 md:pt-16 pb-10">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 pill px-4 py-2 text-sm text-slate-800">
              <ShieldCheck className="h-4 w-4 text-blue-600" />
              <span>תשתית מוכוונת אבטחת מידע • מוכנות לתאימות לפי הנחיות משרד הבריאות</span>
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-slate-900">
              המרפאה שלך בשיא הקידמה:
              <span className="text-blue-600"> מ-SEO מנצח ועד סיכום ביקור ב-AI.</span>
              <br />
              הדור הבא של ניהול הקליניקה הפרטית.
              <br />
              <span className="text-slate-700">
                אנחנו מביאים את המטופלים, ה-AI מנהל את הניירת.
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              נמאס לך להיות גם רופא, גם מזכירה וגם איש שיווק? מערכת All-in-One שנבנתה ע״י מומחי שיווק וטכנולוגיה,
              במיוחד עבור רופאים שרוצים קליניקה פרטית רווחית, ממותגת ויעילה — בלי לבזבז דקה על אדמיניסטרציה.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={openDemo}
                className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition font-semibold text-lg text-white inline-flex items-center justify-center gap-2"
              >
                קבעו דמו קצר עכשיו
                <ArrowLeft className="h-5 w-5" />
              </button>

              <a
                href="#pricing"
                className="px-8 py-4 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 transition font-semibold text-lg text-slate-900 inline-flex items-center justify-center"
              >
                לראות מחיר
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-700">
              <Badge>בלי דמי הקמה</Badge>
              <Badge>בלי התחייבות</Badge>
              <Badge>הדומיין שלך</Badge>
              <Badge>189 ₪ לחודש + מע״מ</Badge>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <Kpi label="זימון תורים" value="24/7" />
              <Kpi label="WhatsApp/SMS" value="אוטומטי" />
              <Kpi label="SEO Growth" value="אורגני" />
              <Kpi label="AI Scribe" value="בקליק" />
            </div>
          </div>

          <div className="reveal" style={{ animationDelay: "110ms" }}>
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(2,6,23,0.12)]">
              {/* Smiling, human photo */}
              <img
                alt="Smiling doctor in clinic"
                className="h-[360px] md:h-[420px] w-full object-cover"
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1600&q=80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />

              {/* Floating product cards */}
              <div className="absolute bottom-4 right-4 left-4 grid md:grid-cols-2 gap-3">
                <FloatCard
                  title="אתר שמביא פניות"
                  desc="תוכן לפי התמחות + CTA שממיר"
                  icon={<BarChart3 className="h-4 w-4 text-blue-600" />}
                />
                <FloatCard
                  title="Backoffice קל לשימוש"
                  desc="תורים, תזכורות, תשלומים, מסמכים"
                  icon={<CalendarDays className="h-4 w-4 text-blue-600" />}
                />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
              <SmallStat label="No-Shows" value="↓" />
              <SmallStat label="זמן אדמין" value="↓" />
              <SmallStat label="חוויית מטופל" value="↑" />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP (logos-like pills; airy) */}
      <section className="px-6 pb-14">
        <div className="mx-auto max-w-6xl card p-6">
          <p className="text-sm text-slate-600 mb-4">
            נבנה עבור קליניקות פרטיות שרוצות לעבוד חכם ולהיראות פרימיום
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 text-center text-slate-700 text-sm">
            <LogoPill>אורתופדיה</LogoPill>
            <LogoPill>אסתטיקה</LogoPill>
            <LogoPill>רפואת עור</LogoPill>
            <LogoPill>קרדיולוגיה</LogoPill>
            <LogoPill>גסטרו</LogoPill>
            <LogoPill>פיזיותרפיה</LogoPill>
          </div>
        </div>
      </section>

      {/* SERVICES (simple, not busy) */}
      <section id="services" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center reveal">
            <h2 className="text-4xl font-bold text-slate-900">מה מקבלים במערכת?</h2>
            <p className="mt-4 text-slate-600 text-lg max-w-3xl mx-auto">
              One-Stop Shop אמיתי: אתר על הדומיין שלך + Backoffice לניהול קליניקה + AI לסיכומים + שכבת SEO שמביאה מטופלים.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <ServiceCard
              icon={<BarChart3 className="h-5 w-5 text-blue-600" />}
              title="SEO & PPC שמביאים אותך לראש"
              desc="מנוע צמיחה: אסטרטגיית תוכן רפואית + דפי שירותים + מדידה."
            />
            <ServiceCard
              icon={<FileText className="h-5 w-5 text-blue-600" />}
              title="AI Scribe לסיכומי ביקור"
              desc="סיכום אוטומטי, מסמכים מובנים, ושיתוף למטופל באישור."
            />
            <ServiceCard
              icon={<MessageCircleMore className="h-5 w-5 text-blue-600" />}
              title="אוטומציה ל-WhatsApp/SMS"
              desc="תזכורות חכמות שמפחיתות No-Shows ומורידות עומס."
            />
            <ServiceCard
              icon={<CreditCard className="h-5 w-5 text-blue-600" />}
              title="ניהול פיננסי מהיר"
              desc="חשבוניות/קבלות, סליקה מאובטחת* ודוחות בסיסיים."
              footnote="*חיבור לספק צד ג׳ לפי צורך."
            />
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={openDemo}
              className="px-10 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition font-semibold text-lg text-white"
            >
              קבעו דמו קצר עכשיו
            </button>
            <p className="mt-3 text-sm text-slate-500">בלי התחייבות • בלי דמי הקמה • הדומיין שלך</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (clean 3-step + people image) */}
      <section id="how" className="px-6 py-16 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <h2 className="text-4xl font-bold text-slate-900">איך זה עובד בפועל?</h2>
            <p className="mt-4 text-slate-600 text-lg">
              תהליך קצר, בלי כאב ראש: מקימים אתר על הדומיין שלך, מחברים Backoffice קל לשימוש,
              ומתחילים להביא פניות אורגניות + אוטומציה לניהול יומיומי.
            </p>

            <div className="mt-8 grid gap-4">
              <StepCard
                step="1"
                title="אתר ממיר על הדומיין שלך"
                desc="נראות פרימיום + דפי שירותים לפי התמחות + טפסים/WhatsApp."
              />
              <StepCard
                step="2"
                title="Backoffice: יומן, תזכורות ותשלומים"
                desc="זימון תורים 24/7, תזכורות אוטומטיות, וניהול בסיסי במקום אחד."
              />
              <StepCard
                step="3"
                title="AI + Growth לפי צורך"
                desc="AI Scribe לסיכומי ביקור + SEO Scale להאצת צמיחה אורגנית."
              />
            </div>
          </div>

          <div className="reveal" style={{ animationDelay: "110ms" }}>
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(2,6,23,0.10)]">
              <img
                alt="Smiling medical staff"
                className="h-[420px] w-full object-cover"
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4 left-4 card p-4">
                <p className="text-slate-900 font-semibold">יותר זמן למטופלים. פחות זמן לאדמיניסטרציה.</p>
                <p className="text-slate-600 text-sm mt-1">UX נקי, קל, ומיועד לצוות קליניקה.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS (smiling people, light cards) */}
      <section id="testimonials" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center reveal">
            <h2 className="text-4xl font-bold text-slate-900">המלצות מרופאים</h2>
            <p className="mt-4 text-slate-600 text-lg max-w-3xl mx-auto">
              אתר ממיר + Backoffice + אוטומציות — ואז מוסיפים AI ו-SEO Scale כשהקליניקה מוכנה להאיץ.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <Testimonial
              name="ד״ר ליאור מ."
              role="אורתופדיה • מרפאה פרטית"
              quote="היומן והתזכורות הורידו לי עומס בצורה מטורפת. והאתר סוף סוף מביא פניות איכותיות."
              img="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
            />
            <Testimonial
              name="ד״ר נטע ש."
              role="רפואת עור • תל אביב"
              quote="המערכת נקייה וקלה. מרגיש שמישהו באמת הבין איך קליניקה עובדת ביום-יום."
              img="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80"
            />
            <Testimonial
              name="ד״ר אמיר ק."
              role="אסתטיקה • קליניקה ממותגת"
              quote="הכי אהבתי שזה One-Stop Shop. פחות כלים מפוזרים, יותר שליטה."
              img="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>
      </section>

      {/* PRICING (single clear plan + add-ons, light) */}
      <section id="pricing" className="px-6 py-16 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-6xl">
          <div className="text-center reveal">
            <h2 className="text-4xl font-bold text-slate-900">מחיר פשוט. בלי הפתעות.</h2>
            <p className="mt-4 text-slate-600 text-lg max-w-3xl mx-auto">
              בלי דמי הקמה • בלי התחייבות • הדומיין שלך • מתחילים מהר ומרחיבים לפי צורך.
            </p>
          </div>

          <div className="mt-10 grid lg:grid-cols-3 gap-6 items-stretch">
            <div className="card p-7 lg:col-span-2">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-500">תוכנית חודשית</p>
                  <h3 className="mt-1 text-2xl font-bold text-slate-900">MD-FLOW All-in-One</h3>
                  <p className="mt-2 text-slate-600">
                    אתר פרימיום על הדומיין שלך + Backoffice לניהול קליניקה.
                  </p>
                </div>

                <div className="text-left">
                  <p className="text-4xl font-bold text-slate-900">
                    189<span className="text-lg font-semibold text-slate-600"> ₪</span>
                  </p>
                  <p className="text-sm text-slate-500">לחודש + מע״מ</p>
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-3 text-sm">
                <PlanItem>אתר פרימיום על הדומיין שלך</PlanItem>
                <PlanItem>זימון תורים אונליין 24/7</PlanItem>
                <PlanItem>תזכורות WhatsApp/SMS/מייל</PlanItem>
                <PlanItem>סנכרון לנייד + Google Calendar</PlanItem>
                <PlanItem>חשבוניות/קבלות + סליקה מאובטחת*</PlanItem>
                <PlanItem>Analytics בסיסי למדידת ביצועים</PlanItem>
                <PlanItem>תמיכה והטמעה מהירה</PlanItem>
                <PlanItem>בלי דמי הקמה • בלי התחייבות</PlanItem>
              </div>

              <p className="mt-4 text-xs text-slate-500">
                * סליקה/הנפקה עשויות לדרוש חיבור לספק צד שלישי בהתאם לצורך.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={openDemo}
                  className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition font-semibold text-lg text-white"
                >
                  קבעו דמו קצר
                </button>

                <a
                  href="/login"
                  className="px-8 py-4 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 transition font-semibold text-lg text-slate-900 inline-flex items-center justify-center gap-2"
                  title="Login (placeholder)"
                >
                  <Lock className="h-5 w-5 text-blue-600" />
                  כניסה למערכת
                </a>
              </div>
            </div>

            <div className="card p-7">
              <p className="text-sm text-slate-500">Add-ons (לבחירה)</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">AI + Growth</h3>
              <p className="mt-2 text-slate-600 text-sm">
                מוסיפים רק מה שצריך — כשבאמת רוצים להאיץ.
              </p>

              <div className="mt-6 grid gap-3 text-sm">
                <AddonItem title="AI Scribe" desc="סיכומי ביקור + מכתבים רפואיים + שיתוף בקליק" />
                <AddonItem title="SEO Scale" desc="אשכולות תוכן לפי התמחות + אופטימיזציה מתמשכת" />
                <AddonItem title="Lead Management" desc="מעקב פניות + סטטוסים + תזכורות חכמות" />
                <AddonItem title="טפסים + חתימה דיגיטלית" desc="טפסי הסכמה לנייד לפני הגעה" />
              </div>

              <div className="mt-6 soft p-4 text-sm text-slate-700">
                <span className="font-semibold text-blue-700">גישה פרקטית:</span>{" "}
                מתחילים מהר, מייצרים סדר — ואז מצמיחים אורגנית.
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={openDemo}
              className="px-10 py-5 rounded-2xl bg-blue-600 hover:bg-blue-700 transition font-semibold text-xl text-white"
            >
              בלי התחייבות — קבעו דמו קצר
            </button>
            <p className="mt-3 text-sm text-slate-500">
              בלי דמי הקמה • הדומיין שלך • 189 ₪ לחודש + מע״מ
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT (trust paragraph) */}
      <section id="about" className="px-6 py-16">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <h2 className="text-4xl font-bold text-slate-900">עלינו</h2>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              מגיעים מעולם הסטארטאפים, מבינים את עולם הרפואה. הקמנו את MD-FLOW אחרי שנים של ניהול שיווק וטכנולוגיה
              בסטארטאפים מהצומחים בישראל. השילוב בין מומחיות ב-SEO, דאטה ובינה מלאכותית מאפשר לנו לתת לרופאים מעטפת
              שאין לתוכנה גנרית אחרת — אתר שמביא פניות + מערכת שמסדרת את היום-יום.
            </p>

            <div className="mt-6 grid md:grid-cols-2 gap-3 text-sm">
              <TrustPill>One-Stop Shop אמיתי</TrustPill>
              <TrustPill>מדידה ותוצאות</TrustPill>
              <TrustPill>UX קל לצוות</TrustPill>
              <TrustPill>הדומיין שלך</TrustPill>
            </div>
          </div>

          <div className="reveal" style={{ animationDelay: "110ms" }}>
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(2,6,23,0.10)]">
              <img
                alt="Happy patient in clinic"
                className="h-[420px] w-full object-cover"
                src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1600&q=80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4 left-4 card p-4">
                <p className="text-slate-900 font-semibold">יותר אמון. יותר חוויה. יותר צמיחה.</p>
                <p className="text-slate-600 text-sm mt-1">
                  עיצוב אנושי, בהיר ומזמין — בדיוק כמו קליניקה טובה.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 text-sm text-slate-500">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-3 border-t border-slate-200 pt-8">
          <span>© {year} MD-FLOW. All rights reserved.</span>
          <div className="flex items-center gap-3">
            <a className="hover:text-slate-900 transition" href="/login">כניסה למערכת</a>
            <span className="text-slate-300">•</span>
            <button className="hover:text-slate-900 transition" onClick={openDemo}>
              קבעו דמו קצר
            </button>
          </div>
        </div>
      </footer>

      {/* DEMO MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 px-6">
          <div className="w-full max-w-lg rounded-[28px] bg-white border border-slate-200 shadow-[0_30px_90px_rgba(2,6,23,0.25)] p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {isThankYou ? "תודה!" : "קבעו דמו קצר עכשיו"}
                </h3>
                <p className="mt-2 text-slate-600">
                  {isThankYou
                    ? "הבקשה התקבלה. נחזור אליך בקרוב לתיאום הדמו."
                    : "השאירו פרטים ונחזור לתיאום דמו קצר וממוקד — בלי התחייבות."}
                </p>
              </div>

              <button
                onClick={closeDemo}
                className="h-10 w-10 rounded-2xl hover:bg-slate-50 transition grid place-items-center"
                aria-label="Close"
              >
                <X className="h-5 w-5 text-slate-700" />
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
                  className="mt-2 px-6 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition font-semibold text-lg text-white"
                >
                  שליחה
                </button>

                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <MiniBadge>בלי דמי הקמה</MiniBadge>
                  <MiniBadge>בלי התחייבות</MiniBadge>
                  <MiniBadge>189 ₪ לחודש + מע״מ</MiniBadge>
                </div>
              </form>
            ) : (
              <div className="mt-8 rounded-[24px] bg-blue-50 border border-blue-100 p-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-700" />
                  <p className="font-semibold text-slate-900">הכל נקלט בהצלחה</p>
                </div>
                <p className="mt-3 text-slate-700">
                  נחזור אליך לתיאום דמו קצר. בינתיים — אם יש לך דומיין, אנחנו עולים עליו.
                </p>
                <button
                  onClick={closeDemo}
                  className="mt-6 px-6 py-3 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 transition font-semibold text-slate-900"
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

/* ---- Components ---- */

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-2">
      <Check className="h-4 w-4 text-blue-700" />
      <span className="text-slate-800">{children}</span>
    </span>
  );
}

function MiniBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-50 border border-slate-200 px-3 py-1">
      {children}
    </span>
  );
}

function Kpi({ label, value }: { label: string; value: string }) {
  return (
    <div className="soft p-4 text-center">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 text-slate-900 font-semibold">{value}</p>
    </div>
  );
}

function SmallStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="soft p-4 text-center">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 text-slate-900 font-semibold">{value}</p>
    </div>
  );
}

function LogoPill({ children }: { children: React.ReactNode }) {
  return (
    <div className="soft py-3 px-4 font-semibold">
      {children}
    </div>
  );
}

function FloatCard({
  title,
  desc,
  icon
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="card p-4">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-2xl bg-blue-600/10 border border-blue-100 grid place-items-center">
          {icon}
        </div>
        <p className="text-slate-900 font-semibold">{title}</p>
      </div>
      <p className="mt-1 text-sm text-slate-600">{desc}</p>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
  footnote
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  footnote?: string;
}) {
  return (
    <div className="card p-6 hover:shadow-[0_18px_50px_rgba(2,6,23,0.10)] transition">
      <div className="h-10 w-10 rounded-2xl bg-blue-600/10 border border-blue-100 grid place-items-center">
        {icon}
      </div>
      <p className="mt-4 text-slate-900 font-semibold">{title}</p>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
      {footnote && <p className="mt-3 text-xs text-slate-500">{footnote}</p>}
    </div>
  );
}

function StepCard({
  step,
  title,
  desc
}: {
  step: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="card p-6">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-2xl bg-blue-600 text-white grid place-items-center font-bold">
          {step}
        </div>
        <p className="text-slate-900 font-semibold">{title}</p>
      </div>
      <p className="mt-2 text-slate-600">{desc}</p>
    </div>
  );
}

function Testimonial({
  name,
  role,
  quote,
  img
}: {
  name: string;
  role: string;
  quote: string;
  img: string;
}) {
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            alt={name}
            src={img}
            className="h-12 w-12 rounded-2xl object-cover border border-slate-200"
          />
          <div>
            <p className="text-slate-900 font-semibold">{name}</p>
            <p className="text-xs text-slate-500">{role}</p>
          </div>
        </div>

        <div className="flex items-center gap-1 text-amber-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-amber-500" />
          ))}
        </div>
      </div>

      <p className="mt-4 text-slate-700 leading-relaxed">“{quote}”</p>
    </div>
  );
}

function PlanItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="soft p-3 flex items-start gap-2">
      <CheckCircle2 className="h-5 w-5 text-blue-700 mt-0.5" />
      <span className="text-slate-700">{children}</span>
    </div>
  );
}

function AddonItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="soft p-4">
      <p className="text-slate-900 font-semibold">{title}</p>
      <p className="mt-1 text-sm text-slate-600">{desc}</p>
    </div>
  );
}

function TrustPill({ children }: { children: React.ReactNode }) {
  return (
    <div className="soft p-4 font-semibold text-slate-700 text-center">
      {children}
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
      <span className="text-slate-700 font-semibold">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-2xl bg-white border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100 transition"
      />
    </label>
  );
}
