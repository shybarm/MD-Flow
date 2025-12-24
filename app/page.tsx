import React from 'react';
import { Search, BrainCircuit, CalendarCheck, MessageSquare, BarChart3, ShieldCheck, ChevronLeft, Zap, Star } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900" dir="rtl">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
        <div className="text-2xl font-black text-blue-600 tracking-tighter">MD-FLOW</div>
        <div className="hidden md:flex space-x-8 space-x-reverse text-sm font-bold text-slate-600">
          <a href="#growth" className="hover:text-blue-600 transition">צמיחה ושיווק</a>
          <a href="#ai-scribe" className="hover:text-blue-600 transition">סיכום AI</a>
          <a href="#automation" className="hover:text-blue-600 transition">אוטומציה</a>
        </div>
        <button className="bg-slate-900 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-blue-600 transition shadow-lg shadow-blue-100">
          הצטרפות לקליניקה
        </button>
      </nav>

      {/* Hero Section */}
      <header className="px-6 pt-16 pb-24 text-center max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-bold text-blue-700 bg-blue-50 rounded-full border border-blue-100">
          <Zap size={14} fill="currentColor"/> הטכנולוגיה המובילה לרופאים פרטיים
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight text-slate-900">
          אנחנו נביא את המטופלים, <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-indigo-500">ה-AI ינהל את השאר.</span>
        </h1>
        <p className="text-xl text-slate-500 mb-12 max-w-3xl mx-auto font-medium">
          מערכת ניהול חכמה שנבנתה על ידי מומחי שיווק וטכנולוגיה מיוצאי סטארטאפים. SEO רפואי אגרסיבי, סיכום ביקורים אוטומטי ב-AI ואוטומציית WhatsApp מלאה.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl text-xl font-black hover:bg-blue-700 hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
            התחילו עכשיו <ChevronLeft size={24}/>
          </button>
          <div className="flex items-center justify-center gap-2 px-6 py-4 bg-white rounded-2xl border border-slate-200">
            <div className="flex -space-x-2 space-x-reverse">
              {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white" />)}
            </div>
            <span className="text-sm font-bold text-slate-600">50+ רופאים כבר הצטרפו</span>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="px-6 py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            
            {/* SEO & Growth */}
            <div className="relative group">
              <div className="mb-6 inline-flex p-4 rounded-3xl bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <Search size={32} />
              </div>
              <h3 className="text-2xl font-black mb-4">כיבוש גוגל (SEO)</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                אנחנו לא רק תוכנה. אנחנו מביאים איתנו ניסיון שיווקי מטורף כדי להביא אותך לראש התוצאות. דאטה בזמן אמת על כל מטופל פוטנציאלי.
              </p>
            </div>

            {/* AI Summary */}
            <div className="relative group">
              <div className="mb-6 inline-flex p-4 rounded-3xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <BrainCircuit size={32} />
              </div>
              <h3 className="text-2xl font-black mb-4">סיכום ביקור ב-AI</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                תתרכז במטופל, לא במקלדת. המערכת מסכמת את השיחה, מפיקה מכתב שחרור רפואי ושולחת אותו אוטומטית למטופל.
              </p>
            </div>

            {/* Automation */}
            <div className="relative group">
              <div className="mb-6 inline-flex p-4 rounded-3xl bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <MessageSquare size={32} />
              </div>
              <h3 className="text-2xl font-black mb-4">אוטומציה ב-WhatsApp</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                תזכורות תורים חכמות, אישורי הגעה, שליחת חשבוניות ודפי הסבר – הכל ב-WhatsApp בלי מגע יד אדם.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Us (Startup Experience) */}
      <section className="px-6 py-24 bg-slate-900 text-white rounded-[3rem] mx-4 my-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8">אנחנו מביאים את ה-Tech לקליניקה</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            כמייסדים שמגיעים מעולמות ה-Scale-up והשיווק בסטארטאפים גדולים, בנינו את המערכת שחלמנו עליה עבור רופאים: מהירה, חכמה ומביאה תוצאות בשורה התחתונה.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-black text-blue-400 mb-2">24/7</div>
              <div className="text-sm text-slate-500">זמינות תורים אונליין</div>
            </div>
            <div>
              <div className="text-4xl font-black text-blue-400 mb-2">0%</div>
              <div className="text-sm text-slate-500">זמן הקלדה ידנית</div>
            </div>
            <div>
              <div className="text-4xl font-black text-blue-400 mb-2">X3</div>
              <div className="text-sm text-slate-500">חשיפה במנועי חיפוש</div>
            </div>
            <div>
              <div className="text-4xl font-black text-blue-400 mb-2">100%</div>
              <div className="text-sm text-slate-500">אבטחת מידע (HIPAA)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 text-center">
        <div className="text-xl font-bold text-slate-400 mb-4 italic">MD-FLOW.AI</div>
        <p className="text-slate-400 text-sm italic">נבנה ב-2025 על ידי מומחי שיווק ו-AI עבור קהילת הרופאים בישראל.</p>
      </footer>
    </div>
  );
}
