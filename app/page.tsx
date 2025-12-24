"use client";

import { useMemo, useState } from "react";
import {
  Activity,
  ArrowLeft,
  ShieldCheck,
  Languages,
  MessageCircleMore,
  BarChart3,
  Sparkles,
  FileText,
  CheckCircle2,
  X
} from "lucide-react";
import { saveLead } from "./lib/supabaseClient";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  clinicName: string;
};

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isThankYou, setIsThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [form, setForm] = useState<FormState>({
    fullName: "",
    phone: "",
    email: "",
    clinicName: ""
  });

  const year = useMemo(() => new Date().getFullYear(), []);

  function openDemo() {
    setErrorMsg(null);
    setIsThankYou(false);
    setIsModalOpen(true);
  }

  function closeDemo() {
    setIsModalOpen(false);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg(null);

    if (!form.fullName.trim() || !form.phone.trim()) {
      setErrorMsg("נא למלא שם מלא וטלפון.");
      return;
    }

    setIsSubmitting(true);
    const result = await saveLead({
      fullName: form.fullName.trim(),
      phone: form.phone.trim(),
      email: form.email.trim() || undefined,
      clinicName: form.clinicName.trim() || undefined
    });
    setIsSubmitting(false);

    if (!result.ok) {
      setErrorMsg(result.message || "משהו השתבש. נסו שוב.");
      return;
    }

    setIsThankYou(true);
  }

  return (
    <main className="min-h-screen">
      {/* Top Nav */}
      <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/40 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-blue-600/20 border border-blue-500/30 grid place-items-center">
              <Sparkles className="h-5 w-5 text-blue-400" />
            </div>
            <div className="leading-tight">
              <p className="font-semibold">MD-FLOW</p>
              <p className="text-xs text-slate-400">AI Scribe + SEO Growth</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a className="hover:text-white transition" href="#demo">דמו</a>
            <a className="hover:text-white transition" href="#growth">צמיחה</a>
            <a className="hover:text-white transition" href="#trust">אבטחה</a>
            <a className="hover:text-white transition" href="#faq">FAQ</a>
          </nav>

          <button
            onClick={openDemo}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-semibold hover:scale-105"
          >
            קביעת דמו
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-6 pt-16 md:pt-24 pb-16">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              הקליניקה שלך,
              <br />
              <span className="text-blue-500">באוטופיילוט</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-xl">
              MD-FLOW ממנפת AI לתיעוד רפואי דו-לשוני (עברית/אנגלית), אוטומציות תפעוליות,
              ושכבת SEO שמייצרת ביקוש אורגני בקצב גבוה.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                onClick={openDemo}
                className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition font-semibold text-lg hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                קביעת דמו
                <ArrowLeft className="h-5 w-5" />
              </button>

              <a
                href="#demo"
                className="px-8 py-4 rounded-2xl glass hover:bg-white/5 transition font-semibold text-lg inline-flex items-center justify-center gap-2"
              >
                לראות איך זה עובד
                <FileText className="h-5 w-5 text-blue-400" />
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 text-sm text-slate-300">
              <div className="glass rounded-2xl p-4">
                <p className="text-slate-400">דיוק תיעוד</p>
                <p className="text-xl font-semibold text-white mt-1">99.1%</p>
              </div>
              <div className="glass rounded-2xl p-4">
                <p className="text-slate-400">חיסכון בזמן</p>
                <p className="text-xl font-semibold text-white mt-1">~2h/יום</p>
              </div>
              <div className="glass rounded-2xl p-4">
                <p className="text-slate-400">צמיחה אורגנית</p>
                <p className="text-xl font-semibold text-white mt-1">+240%</p>
              </div>
            </div>
          </div>

          {/* Floating dashboard mock */}
          <div className="relative reveal" style={{ animationDelay: "120ms" }}>
            <div className="glass glow rounded-3xl p-6 md:p-7">
              <div className="flex items-center justify-between text-sm text-slate-400">
                <div className="inline-flex items-center gap-2">
                  <Activity className="h-4 w-4 text-blue-400" />
                  <span>AI Scribe — Live</span>
                </div>
                <span className="text-green-400">● Active</span>
              </div>

              <div className="mt-5 grid gap-4">
                <div className="rounded-2xl bg-slate-950/70 border border-white/5 p-4 text-sm leading-relaxed">
                  <p className="text-blue-400 font-semibold">רופא</p>
                  <p className="text-slate-200">מה שלומך היום?</p>
                  <p className="text-blue-400 font-semibold mt-3">מטופל</p>
                  <p className="text-slate-200">כאבים בחזה בזמן מאמץ, במיוחד בעלייה במדרגות.</p>
                </div>

                <div className="rounded-2xl bg-slate-950/70 border border-white/5 p-4 text-sm">
                  <p className="text-slate-400 mb-2">סיכום אוטומטי</p>
                  <p className="text-slate-200">
                    תלונה על כאבים בחזה במאמץ. מומלץ אק״ג, בדיקות דם (טרופונין/שומנים),
                    ושקילת הפניה לקרדיולוג. הנחיות להימנע ממאמץ עד בירור.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-950/70 border border-white/5 p-4 text-sm">
                  <p className="text-slate-400">מדדים בזמן אמת</p>
                  <div className="mt-3 grid grid-cols-3 gap-3">
                    <Metric label="מבקרים" value="1,842" />
                    <Metric label="לידים" value="126" />
                    <Metric label="המרה" value="6.8%" />
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
                <span>Latency</span>
                <span className="text-blue-400 font-semibold">~180ms</span>
              </div>
            </div>

            {/* Soft glow accents */}
            <div className="absolute -z-10 -top-10 -left-10 h-44 w-44 rounded-full bg-blue-600/20 blur-3xl" />
            <div className="absolute -z-10 -bottom-12 -right-8 h-56 w-56 rounded-full bg-sky-400/10 blur-3xl" />
          </div>
        </div>
      </section>

      {/* AI Scribe demo section */}
      <section id="demo" className="px-6 py-20 bg-slate-950/40 border-y border-white/5">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
          <div className="reveal">
            <h2 className="text-4xl font-bold">
              AI Scribe שמתרגם שיחה
              <span className="text-blue-500"> למכתב רפואי</span>
            </h2>
            <p className="mt-5 text-slate-300 text-lg max-w-xl">
              תיעוד קליני בזמן אמת, ניסוח מקצועי, ותמיכה במונחים רפואיים בעברית ובאנגלית —
              כדי לשחרר את הצוות להתמקד במטופלים.
            </p>

            <div className="mt-8 grid gap-4">
              <FeatureRow
                icon={<Languages className="h-5 w-5 text-blue-400" />}
                title="דו-לשוני (RTL/LTR)"
                desc="עברית ראשית + אנגלית מלאה, כולל קיצורים וניסוח רפואי."
              />
              <FeatureRow
                icon={<MessageCircleMore className="h-5 w-5 text-blue-400" />}
                title="אוטומציות WhatsApp"
                desc="תזכורות חכמות, Follow-ups, ביטולים ושיפור הגעה."
              />
              <FeatureRow
                icon={<FileText className="h-5 w-5 text-blue-400" />}
                title="מכתבים ותיעוד מובנה"
                desc="סיכום תלונות, בדיקות, אבחנה, תוכנית טיפול והפניות."
              />
            </div>

            <div className="mt-10">
              <button
                onClick={openDemo}
                className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition font-semibold text-lg hover:scale-105"
              >
                קביעת דמו
              </button>
            </div>
          </div>

          <div className="reveal" style={{ animationDelay: "120ms" }}>
            <div className="glass rounded-3xl p-6 md:p-7">
              <div className="flex items-center justify-between">
                <p className="font-semibold">תצוגת דמו</p>
                <span className="text-xs text-slate-400">Auto-generated</span>
              </div>

              <div className="mt-5 grid md:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-slate-950/70 border border-white/5 p-4">
                  <p className="text-sm text-slate-400 mb-3">שיחה</p>
                  <div className="space-y-3 text-sm">
                    <div className="flex gap-3">
                      <span className="text-blue-400 font-semibold">רופא:</span>
                      <span className="text-slate-200">מתי התחיל הכאב?</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-blue-400 font-semibold">מטופל:</span>
                      <span className="text-slate-200">לפני שבוע, בעיקר במאמץ.</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-blue-400 font-semibold">רופא:</span>
                      <span className="text-slate-200">יש קוצר נשימה?</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-blue-400 font-semibold">מטופל:</span>
                      <span className="text-slate-200">כן, לפעמים.</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-950/70 border border-white/5 p-4">
                  <p className="text-sm text-slate-400 mb-3">מכתב רפואי</p>
                  <div className="text-sm text-slate-200 leading-relaxed">
                    <p className="font-semibold text-white">סיכום ביקור</p>
                    <p className="mt-2">
                      תלונה על כאבים בחזה במאמץ מזה שבוע, לעיתים עם קוצר נשימה.
                      ללא אירוע חריף כעת. תכנית: אק״ג, בדיקות דם, ייעוץ קרדיולוגי.
                      הנחיה להימנע ממאמץ עד השלמת בירור.
                    </p>
                    <p className="mt-3 text-slate-400">
                      נוצר אוטומטית • ניתן לעריכה • נשמר לתיק המטופל
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-blue-600/10 border border-blue-500/20 p-4 text-sm text-slate-200">
                <span className="text-blue-400 font-semibold">Insight:</span>{" "}
                זיהינו מילות מפתח + Intent רפואי — מוכן גם לתוכן SEO מבוסס שירותים.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth/SEO section */}
      <section id="growth" className="px-6 py-20">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <h2 className="text-4xl font-bold">
              לא רק קליניקה —
              <br />
              <span className="text-blue-500">מנוע צמיחה אורגני</span>
            </h2>

            <p className="mt-5 text-slate-300 text-lg max-w-xl">
              MD-FLOW בונה שכבת SEO רפואית ייעודית: דפי שירותים, FAQ, ותוכן מבוסס
              התנהגות חיפוש — עם ניטור מבקרים בזמן אמת והמרות שמביאות דמו.
            </p>

            <div className="mt-8 grid gap-4">
              <FeatureRow
                icon={<BarChart3 className="h-5 w-5 text-blue-400" />}
                title="Real-time traffic intelligence"
                desc="מעקב מבקרים, נקודות נפילה, ושיפור יחס המרה."
              />
              <FeatureRow
                icon={<Sparkles className="h-5 w-5 text-blue-400" />}
                title="SEO Scale Engine"
                desc="אשכולות תוכן רפואיים שמייצרים דומיננטיות אורגנית."
              />
              <FeatureRow
                icon={<CheckCircle2 className="h-5 w-5 text-blue-400" />}
                title="High-intent lead capture"
                desc="טפסי דמו, CTA חכם, ומסרים שמניעים פעולה."
              />
            </div>

            <div className="mt-10">
              <button
                onClick={openDemo}
                className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition font-semibold text-lg hover:scale-105"
              >
                קביעת דמו
              </button>
            </div>
          </div>

          <div className="reveal" style={{ animationDelay: "120ms" }}>
            <div className="glass rounded-3xl p-7">
              <p className="text-sm text-slate-400">צמיחת מבקרים (90 יום)</p>

              <div className="mt-6">
                <div className="flex items-end gap-3 h-44">
                  <div className="w-full rounded-xl bg-blue-500/35 h-20" />
                  <div className="w-full rounded-xl bg-blue-500/50 h-28" />
                  <div className="w-full rounded-xl bg-blue-500/70 h-36" />
                  <div className="w-full rounded-xl bg-blue-500 h-44" />
                </div>
                <div className="mt-5 flex items-center justify-between text-sm">
                  <span className="text-slate-400">Baseline</span>
                  <span className="text-blue-400 font-semibold">+240% growth</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 text-sm">
                <MiniStat label="עמודים" value="48" />
                <MiniStat label="Clicks" value="9.2k" />
                <MiniStat label="CTR" value="5.4%" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section id="trust" className="px-6 py-20 bg-slate-950/40 border-y border-white/5">
        <div className="mx-auto max-w-6xl">
          <div className="text-center reveal">
            <h2 className="text-4xl font-bold">אבטחה. תאימות. שקט תפעולי.</h2>
            <p className="mt-4 text-slate-300 text-lg max-w-2xl mx-auto">
              בנוי עבור מידע רפואי, תהליכי קליניקה רגישים, וסטנדרטים שמנהלים יכולים לסמוך עליהם.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <TrustCard
              icon={<ShieldCheck className="h-5 w-5 text-blue-400" />}
              title="HIPAA-minded security"
              desc="תכנון עם עקרונות הצפנה, בקרות גישה, והפרדת נתונים."
            />
            <TrustCard
              icon={<Languages className="h-5 w-5 text-blue-400" />}
              title="עברית רפואית ברמה גבוהה"
              desc="זיהוי מינוחים, קיצורים, והקשר קליני בעברית ובאנגלית."
            />
            <TrustCard
              icon={<MessageCircleMore className="h-5 w-5 text-blue-400" />}
              title="אוטומציות קליניקה"
              desc="תזכורות WhatsApp, תיאומים, ופישוט גבייה ותהליכים."
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="reveal">
            <h2 className="text-4xl font-bold">FAQ</h2>
            <p className="mt-4 text-slate-300 text-lg max-w-2xl">
              שאלות נפוצות — ממוקד במה שמנהל קליניקה צריך כדי לקבל החלטה מהירה.
            </p>
          </div>

          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <FaqItem
              q="האם יש תמיכה במונחים רפואיים בעברית?"
              a="כן. המערכת מיועדת לעברית רפואית, כולל קיצורים והקשר קליני, לצד אנגלית מלאה."
            />
            <FaqItem
              q="איך אתם מתייחסים לאבטחת מידע רפואי?"
              a="הארכיטקטורה מוכוונת עקרונות HIPAA: הפרדת הרשאות, הצפנה ובקרות. חיבור Supabase יגיע בשלב הבא."
            />
            <FaqItem
              q="האם ניתן לבצע אוטומציה לתזכורות WhatsApp?"
              a="כן. המערכת מתוכננת לחיבור תזכורות חכמות, Follow-ups, והפחתת ביטולים."
            />
            <FaqItem
              q="האם זה כולל SEO?"
              a="כן. MD-FLOW בונה שכבת SEO ייעודית לקליניקות: דפי שירותים, תוכן נישתי, ומעקב מבקרים והמרות."
            />
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={openDemo}
              className="px-10 py-5 rounded-2xl bg-blue-600 hover:bg-blue-500 transition font-semibold text-xl hover:scale-105"
            >
              קביעת דמו
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 border-t border-white/5 text-sm text-slate-400">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-3">
          <span>© {year} MD-FLOW. All rights reserved.</span>
          <span className="text-slate-500">Built for premium clinic operations & growth.</span>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 px-6">
          <div className="w-full max-w-lg rounded-3xl glass p-6 md:p-8 border border-white/10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold">
                  {isThankYou ? "תודה!" : "קביעת דמו"}
                </h3>
                <p className="mt-2 text-slate-300">
                  {isThankYou
                    ? "הבקשה התקבלה. נציג MD-FLOW יחזור אליך בקרוב."
                    : "השאירו פרטים ונחזור לתיאום דמו קצר וממוקד."}
                </p>
              </div>

              <button
                onClick={closeDemo}
                className="h-10 w-10 rounded-xl hover:bg-white/5 transition grid place-items-center"
                aria-label="Close"
              >
                <X className="h-5 w-5 text-slate-300" />
              </button>
            </div>

            {!isThankYou ? (
              <form onSubmit={onSubmit} className="mt-6 grid gap-4">
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

                {errorMsg && (
                  <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 px-6 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition font-semibold text-lg hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
                >
                  {isSubmitting ? "שולח..." : "שליחה"}
                </button>

                <p className="text-xs text-slate-400 mt-1">
                  * כרגע הלידים נשמרים במצב סימולציה (ללא DB). כשתוסיף Supabase env + טבלת leads, זה יתחיל להישמר אוטומטית.
                </p>
              </form>
            ) : (
              <div className="mt-8 rounded-3xl bg-blue-600/10 border border-blue-500/20 p-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-400" />
                  <p className="font-semibold text-white">הכל בוצע בהצלחה</p>
                </div>
                <p className="mt-3 text-slate-200">
                  בשלב הבא אפשר לחבר Supabase כדי לשמור לידים בטבלת <span className="text-blue-400 font-semibold">leads</span>.
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

/* ---------- Components ---------- */

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/5 p-3">
      <p className="text-xs text-slate-400">{label}</p>
      <p className="mt-1 text-base font-semibold text-white">{value}</p>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/5 p-3">
      <p className="text-xs text-slate-400">{label}</p>
      <p className="mt-1 text-base font-semibold text-white">{value}</p>
    </div>
  );
}

function FeatureRow({
  icon,
  title,
  desc
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="glass rounded-2xl p-4 flex gap-3">
      <div className="h-10 w-10 rounded-2xl bg-blue-600/10 border border-blue-500/20 grid place-items-center">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-white">{title}</p>
        <p className="text-slate-300 text-sm mt-1">{desc}</p>
      </div>
    </div>
  );
}

function TrustCard({
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
      <p className="mt-4 font-semibold text-white">{title}</p>
      <p className="mt-2 text-slate-300 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="glass rounded-3xl p-6">
      <p className="font-semibold text-white">{q}</p>
      <p className="mt-3 text-slate-300 text-sm leading-relaxed">{a}</p>
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
        className="w-full rounded-2xl bg-slate-950/60 border border-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 transition"
      />
    </label>
  );
}
