import React from 'react';
import { 
  Search, BrainCircuit, CalendarCheck, MessageSquare, 
  BarChart3, ShieldCheck, ChevronLeft, Zap, Star, 
  MousePointerClick, LineChart, FileText, Bell
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100" dir="rtl">
      
      {/* Glow Effect Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-blue-50/50 to-transparent -z-10" />

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-blue-200">M</div>
          <span className="text-2xl font-black tracking-tighter">MD-FLOW<span className="text-blue-600">.AI</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-500">
          <a href="#features" className="hover:text-blue-600 transition">טכנולוגיה</a>
          <a href="#marketing" className="hover:text-blue-600 transition">שיווק וצמיחה</a>
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-blue-600 transition-all shadow-md">קביעת דמו</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 pt-20 pb-32 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-bold text-blue-700 bg-blue-50 rounded-full border border-blue-100 animate-bounce">
          <Star size={14} fill="currentColor"/> חדש: AI Scribe בעברית מלאה
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.05] tracking-tight">
          הקליניקה הפרטית שלך, <br/>
          <span className="text-blue-600">באוטופיילוט.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
          אנחנו בונים לך מותג רפואי חזק בגוגל ומנהלים לך את הביורוקרטיה עם AI. 
          אתה מטפל - אנחנו דואגים לכל השאר.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-blue-600 text-white px-12 py-6 rounded-2xl text-2xl font-black hover:bg-blue-700 hover:scale-105 transition-all shadow-2xl shadow-blue-200 flex items-center justify-center gap-3">
            התחל צמיחה עכשיו <ChevronLeft size={28}/>
          </button>
        </div>

        {/* Floating Mockup Preview */}
        <div className="mt-20 relative mx-auto max-w-4xl bg-slate-900 rounded-3xl p-4 shadow-2xl border border-slate-800">
          <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 aspect-video flex flex-col">
            <div className="h-10 bg-slate-900/50 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="flex-1 p-8 grid grid-cols-3 gap-6">
              <div className="col-span-2 space-y-4">
                <div className="h-8 bg-blue-500/20 rounded-lg w-1/3 animate-pulse" />
                <div className="h-32 bg-slate-700/50 rounded-xl ring-1 ring-blue-500/30 flex items-center justify-center text-blue-400 font-bold tracking-widest text-xs">AI SCRIBE LIVE SUMMARY...</div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-20 bg-slate-700/30 rounded-xl" />
                  <div className="h-20 bg-slate-700/30 rounded-xl" />
                </div>
              </div>
              <div className="bg-slate-900/40 rounded-xl p-4 space-y-4">
                <div className="h-4 bg-slate-700 rounded w-full" />
                <div className="h-4 bg-slate-700 rounded w-5/6" />
                <div className="h-4 bg-slate-700 rounded w-4/6" />
                <div className="mt-8 h-12 bg-blue-600/20 border border-blue-600/50 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Power Section */}
      <section id="marketing" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-3xl flex items-center justify-center shadow-xl shadow-blue-200">
                <LineChart size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-black leading-tight text-slate-900">
                SEO של סטארטאפים, <br/>לקליניקה שלך.
              </h2>
              <p className="text-xl text-slate-600 font-medium leading-relaxed">
                אנחנו לא בונים "אתרי תדמית" רדומים. אנחנו בונים מכונות שיווק. עם ניסיון בניהול תקציבי ענק ב-Google ו-Meta, אנחנו נדאג שהמטופלים הנכונים יגיעו אליך – ובזמן אמת תוכל לראות מי גולש באתר עכשיו.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-bold text-slate-700">
                <li className="flex items-center gap-2"><MousePointerClick className="text-blue-600"/> מעקב מבקרים בזמן אמת</li>
                <li className="flex items-center gap-2"><Search className="text-blue-600"/> קידום אורגני אגרסיבי</li>
                <li className="flex items-center gap-2"><BarChart3 className="text-blue-600"/> דוחות רווחיות (ROI)</li>
                <li className="flex items-center gap-2"><ShieldCheck className="text-blue-600"/> ניהול מוניטין חיובי</li>
              </ul>
            </div>
            <div className="flex-1 bg-white p-2 rounded-[2.5rem] shadow-2xl rotate-2">
               <div className="bg-blue-600 p-8 rounded-[2.2rem] text-white">
                  <div className="text-sm font-bold opacity-80 mb-2">צמיחה חודשית</div>
                  <div className="text-5xl font-black mb-4">+240%</div>
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

      {/* AI Features Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-16">העוזר האישי שלך (AI)</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: <BrainCircuit />, title: "AI Scribe", desc: "סיכום שיחה אוטומטי לתוך התיק הרפואי" },
            { icon: <FileText />, title: "מסמכים בקליק", desc: "הפקת מרשמים וסיכומי מחלה תוך שניות" },
            { icon: <Bell />, title: "אוטומציית וואטסאפ", desc: "תזכורות ועדכונים ללא התערבות ידנית" },
            { icon: <Zap />, title: "סליקה מהירה", desc: "שליחת חשבונית אוטומטית בסיום הטיפול" },
          ].map((item, idx) => (
            <div key={idx} className="p-8 rounded-[2rem] bg-white border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 bg-slate-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-black mb-3">{item.title}</h3>
              <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto bg-blue-600 rounded-[3rem] p-12 text-center text-white shadow-2xl shadow-blue-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <h2 className="text-4xl md:text-5xl font-black mb-6">מוכן להפוך למותג?</h2>
          <p className="text-xl text-blue-100 mb-10 font-medium">הצטרף לרופאים שכבר עברו לניהול חכם מבוסס AI ודאטה.</p>
          <button className="bg-white text-blue-600 px-12 py-5 rounded-2xl text-2xl font-black hover:bg-blue-50 transition-all shadow-xl">
            בוא נתחיל עכשיו
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-slate-400 font-medium">
        <p>© 2025 MD-FLOW.AI - High Performance Clinical Growth</p>
      </footer>
    </div>
  );
}
