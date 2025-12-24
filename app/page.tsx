import React from 'react';
import { 
  Search, BrainCircuit, CalendarCheck, MessageSquare, 
  BarChart3, ShieldCheck, ChevronLeft, Zap, Star, 
  MousePointerClick, LineChart, FileText, Bell
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 font-sans" dir="rtl">
      
      {/* Glow Effect Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-blue-50/50 to-transparent -z-10" />

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg">M</div>
          <span className="text-2xl font-black tracking-tighter">MD-FLOW<span className="text-blue-600">.AI</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-500">
          <a href="#marketing" className="hover:text-blue-600 transition">שיווק וצמיחה</a>
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-blue-600 transition-all shadow-md">קביעת דמו</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="px-6 pt-20 pb-32 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-bold text-blue-700 bg-blue-50 rounded-full border border-blue-100">
          <Star size={14} fill="currentColor"/> חדש: AI Scribe בעברית רפואית מלאה
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.05] tracking-tight text-slate-900">
          הקליניקה שלך, <br/>
          <span className="text-blue-600 italic">באוטופיילוט.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
          מערכת ההפעלה לרופאים שרוצים שקט. אנחנו בונים לך מותג חזק בגוגל, וה-AI שלנו מסכם עבורך את הביקורים ושולח מסמכים אוטומטית.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-blue-600 text-white px-12 py-6 rounded-2xl text-2xl font-black hover:bg-blue-700 hover:scale-105 transition-all shadow-2xl shadow-blue-200 flex items-center justify-center gap-3">
            התחל צמיחה עכשיו <ChevronLeft size={28}/>
          </button>
        </div>
      </header>

      {/* Marketing Power Section */}
      <section id="marketing" className="py-24 bg-slate-50 rounded-[3rem] mx-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8 text-right">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-3xl flex items-center justify-center shadow-xl shadow-blue-200">
                <LineChart size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-black leading-tight text-slate-900">
                SEO של סטארטאפים, <br/>לקליניקה שלך.
              </h2>
              <p className="text-xl text-slate-600 font-medium leading-relaxed">
                אנחנו מביאים ניסיון בניהול תקציבי ענק ב-Google כדי לוודא שהשם שלך יופיע ראשון. תקבל דאטה בזמן אמת על כל מטופל שנכנס לאתר.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-bold text-slate-700">
                <li className="flex items-center gap-2"><MousePointerClick className="text-blue-600"/> מעקב מבקרים בזמן אמת</li>
                <li className="flex items-center gap-2"><Search className="text-blue-600"/> קידום אורגני אגרסיבי</li>
                <li className="flex items-center gap-2"><BarChart3 className="text-blue-600"/> דוחות רווחיות (ROI)</li>
                <li className="flex items-center gap-2"><ShieldCheck className="text-blue-600"/> ניהול מוניטין חיובי</li>
              </ul>
            </div>
            <div className="flex-1 bg-white p-2 rounded-[2.5rem] shadow-2xl rotate-2 hidden md:block">
               <div className="bg-blue-600 p-8 rounded-[2.2rem] text-white text-right">
                  <div className="text-sm font-bold opacity-80 mb-2 font-mono">LIVE_GROWTH_DATA</div>
                  <div className="text-5xl font-black mb-4 tracking-tighter">+240%</div>
                  <div className="h-32 flex items-end gap-2">
                    {[40, 70, 55, 90, 65, 100].map((h, i) => (
                      <div key={i} className="flex-1 bg-white/20 rounded-t-lg transition-all hover:bg-white/40" style={{height: `${h}%`}} />
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-slate-400 font-bold text-sm tracking-widest">
        MD-FLOW.AI © 2025 | THE FUTURE OF MEDICAL PRACTICE
      </footer>
    </div>
  );
}
