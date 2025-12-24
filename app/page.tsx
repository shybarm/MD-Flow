import React from 'react';
import { 
  Search, BrainCircuit, CalendarCheck, MessageSquare, 
  BarChart3, ShieldCheck, ChevronLeft, Zap, Star, 
  MousePointerClick, LineChart, FileText, Bell, Plus, Minus
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 font-sans" dir="rtl">
      
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto border-b border-slate-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg">M</div>
          <span className="text-2xl font-black tracking-tighter">MD-FLOW<span className="text-blue-600">.AI</span></span>
        </div>
        <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-blue-600 transition-all font-bold text-sm">קביעת דמו מהיר</button>
      </nav>

      {/* Hero */}
      <header className="px-6 pt-20 pb-20 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-bold text-blue-700 bg-blue-50 rounded-full border border-blue-100">
          <Zap size={14} fill="currentColor"/> ה-AI הראשון שמדבר עברית רפואית
        </div>
        <h1 className="text-6xl md:text-[85px] font-black mb-8 leading-[0.9] tracking-tight text-slate-900">
          מינימום ניירת. <br/>
          <span className="text-blue-600 italic leading-normal">מקסימום מטופלים.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
          מערכת ההפעלה של הקליניקה הפרטית. שיווק בסטנדרט של סיליקון ואלי בשילוב בינה מלאכותית שחוסכת לך שעתיים של הקלדה ביום.
        </p>
        <button className="bg-blue-600 text-white px-12 py-6 rounded-2xl text-2xl font-black hover:scale-105 transition-all shadow-2xl shadow-blue-200">
          אני רוצה להתקדם <ChevronLeft className="inline-block mr-2" size={28}/>
        </button>
      </header>

      {/* Process Section (How it Works) */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16 underline decoration-blue-500 decoration-4 underline-offset-8">3 צעדים לקליניקה חכמה</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "כיבוש גוגל", desc: "אנחנו מפעילים את מנוע ה-SEO וה-PPC כדי שהשם שלך יופיע ראשון בכל חיפוש רלוונטי." },
              { step: "02", title: "אוטומציה ביומן", desc: "המטופלים קובעים תור, מקבלים תזכורת בוואטסאפ ומשלמים מראש - הכל אוטומטי." },
              { step: "03", title: "טיפול נטו (AI)", desc: "ה-AI מסכם את הביקור ושולח את כל המסמכים למטופל. אתה רק לוחץ על 'אישור'." }
            ].map((s, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 relative overflow-hidden">
                <span className="absolute -top-4 -right-4 text-8xl font-black text-slate-50 opacity-50">{s.step}</span>
                <h3 className="text-2xl font-black mb-4 relative z-10">{s.title}</h3>
                <p className="text-slate-500 font-medium relative z-10 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-16">שאלות נפוצות של רופאים</h2>
        <div className="space-y-4">
          {[
            { q: "האם ה-AI תומך בעברית רפואית?", a: "חד משמעית כן. המנוע שלנו הוכשר על טרמינולוגיה רפואית בעברית ובאנגלית במקביל, ומזהה מושגים מקצועיים בדיוק של 98%." },
            { q: "מה לגבי אבטחת מידע ופרטיות המטופל?", a: "המערכת עומדת בתקני HIPAA המחמירים ביותר. המידע מוצפן מקצה לקצה ואינו משמש לאימון מודלים ציבוריים." },
            { q: "כמה זמן לוקח לראות תוצאות מה-SEO?", a: "אנחנו משתמשים בשיטות הקידום של הסטארטאפים המובילים. שיפור ראשוני נראה תוך 30-45 יום, עם צמיחה עקבית בכמות הלידים." },
            { q: "האם צריך מזכירה כדי לתפעל את המערכת?", a: "המערכת נוצרה כדי להחליף 80% מעבודת המזכירות. רוב הרופאים שלנו מנהלים קליניקה עצמאית לחלוטין בעזרת האוטומציות שלנו." }
          ].map((faq, i) => (
            <div key={i} className="border-b border-slate-200 pb-6 pt-4">
              <h4 className="text-xl font-bold flex items-center justify-between cursor-pointer hover:text-blue-600 transition">
                {faq.q} <Plus size={20} className="text-blue-600" />
              </h4>
              <p className="mt-4 text-slate-500 font-medium leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3.5rem] p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent pointer-events-none" />
          <h2 className="text-5xl md:text-6xl font-black mb-8 relative z-10 italic">הגיע הזמן לעבוד חכם.</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto relative z-10">בוא נבנה לך אימפרייה רפואית עם הטכנולוגיה הכי מתקדמת בעולם.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl text-xl font-black hover:bg-blue-500 transition-all shadow-xl">צרו קשר עכשיו</button>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl text-xl font-black hover:bg-white/20 transition-all">לצפייה בדמו וידאו</button>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-slate-400 text-sm font-bold">
        MD-FLOW.AI © 2025 | BUILT BY GROWTH EXPERTS FOR DOCTORS
      </footer>
    </div>
  );
}
