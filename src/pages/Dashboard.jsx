import { useState } from 'react';
import { Bell, HelpCircle, ArrowRight, Home, BookOpen, Clock, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', icon: Home, id: 'home' },
  { label: 'Knowledge hub', icon: BookOpen, id: 'knowledge' },
  { label: 'Loan history', icon: Clock, id: 'history' },
];

const financeClasses = [
  { title: 'What is a credit score?', cta: 'Read now', color: 'bg-indigo-500' },
  { title: 'Benefits of good credit score', cta: 'Read now', color: 'bg-indigo-600' },
  { title: 'Credit score myths and facts', cta: 'Read now', color: 'bg-indigo-700' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans max-w-md w-full mx-auto relative overflow-hidden">
      {/* Dark Purple Header Section */}
      <div className="bg-[#0f0b2f] text-white pt-12 pb-24 px-6 relative rounded-b-[40px] shadow-lg overflow-hidden shrink-0">
        
        {/* Background Concentric Circles */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-64 h-64 border border-white/5 rounded-full"></div>
          <div className="absolute top-[-10%] left-[-5%] w-80 h-80 border border-white/5 rounded-full"></div>
          <div className="absolute top-[0%] left-[0%] w-96 h-96 border border-white/5 rounded-full"></div>
        </div>

        {/* Top Bar */}
        <div className="flex justify-between items-center relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-linear-to-tr from-pink-500 to-orange-400 p-[2px] shadow-sm">
               <img src="https://images.unsplash.com/photo-1546272989-40c92939c6c2?q=80&w=250&auto=format&fit=crop" alt="Profile" className="w-full h-full rounded-full object-cover border-2 border-[#0f0b2f]" />
            </div>
            <h1 className="text-xl font-medium tracking-wide">TezCredit</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-white/80 hover:text-white transition-colors">
              <Bell className="w-6 h-6" />
            </button>
            <button className="text-white/80 hover:text-white transition-colors">
              <HelpCircle className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Balance Area */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 relative z-10"
        >
          <p className="text-slate-300 text-sm font-medium mb-1">Current amount due</p>
          <h2 className="text-5xl font-bold tracking-tight mb-2">₹42,190</h2>
          <p className="text-sm font-medium">Days Left: <span className="text-orange-400">3 days</span></p>
          
          <button className="mt-4 flex items-center gap-2 text-white font-bold bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors text-sm backdrop-blur-sm">
            Repay now <div className="bg-white text-[#0f0b2f] rounded-full p-0.5"><ArrowRight className="w-3 h-3" /></div>
          </button>
        </motion.div>

        {/* Abstract Coin Graphic Illustration (CSS mockup) */}
        <div className="absolute right-[-20px] bottom-[-10px] w-48 h-48 pointer-events-none opacity-90">
           <div className="absolute bottom-4 right-10 w-24 h-24 bg-yellow-400 rounded-full shadow-[inset_-10px_-10px_20px_rgba(202,138,4,0.5)] flex items-center justify-center border-4 border-yellow-300">
              <span className="text-yellow-600 font-bold text-4xl">₹</span>
           </div>
           <div className="absolute bottom-16 right-4 w-12 h-12 bg-yellow-400 rounded-full shadow-[inset_-5px_-5px_10px_rgba(202,138,4,0.5)] flex items-center justify-center border-2 border-yellow-300 blur-[1px]">
              <span className="text-yellow-600 font-bold text-xl">₹</span>
           </div>
           <div className="absolute bottom-24 right-20 w-8 h-8 bg-yellow-400 rounded-full shadow-[inset_-3px_-3px_8px_rgba(202,138,4,0.5)] flex items-center justify-center border border-yellow-300 blur-[2px]">
              <span className="text-yellow-600 font-bold text-sm">₹</span>
           </div>
           {/* Plant sprout abstract */}
           <svg className="absolute bottom-28 right-8 w-20 h-20 text-green-400 drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,22V10M12,10C12,10 6,12 6,6C6,6 12,6 12,10M12,10C12,10 18,12 18,6C18,6 12,6 12,10Z" />
           </svg>
        </div>
      </div>

      {/* Floating Action Badge overlaying header/content */}
      <div className="absolute top-[340px] left-1/2 -translate-x-1/2 -mt-16 z-20">
         <div className="bg-white/90 backdrop-blur-md rounded-full shadow-xl flex items-center p-1 border border-slate-100/50">
            <div className="w-10 h-10 bg-slate-500 rounded-full flex items-center justify-center text-white font-bold shadow-inner">S</div>
            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center -ml-2 border-2 border-white shadow-inner">
               <div className="w-4 h-4 border-2 border-slate-400 rotate-45"></div>
            </div>
         </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto px-6 pb-28 pt-8 -mt-6 rounded-t-[40px] relative z-10 space-y-8 scrollbar-hide">
        
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
          
          {/* Promo Card */}
          <motion.div variants={itemVariants} className="bg-orange-50/80 rounded-2xl p-5 flex items-center justify-between shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-orange-100/50">
            <div>
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                How to get a loan <ArrowRight className="w-4 h-4" />
              </h3>
              <p className="text-xs text-slate-500 mt-1 font-medium">No Clue? No Problem we got your back</p>
            </div>
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shrink-0 shadow-inner relative">
               <div className="absolute w-12 h-14 bg-indigo-500 rounded-b-xl rounded-t-lg bottom-1"></div>
               <div className="absolute w-6 h-6 bg-indigo-600 rounded-full top-2 flex items-center justify-center border-2 border-indigo-400">
                 <span className="text-white text-xs font-bold">₹</span>
               </div>
            </div>
          </motion.div>

          {/* Finance Classes */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-slate-800 mb-4 px-1">Finance classes</h3>
            <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide snap-x">
              {financeClasses.map((item, idx) => (
                <div key={idx} className="bg-white min-w-[160px] w-[160px] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100/60 overflow-hidden flex flex-col snap-start shrink-0">
                  <div className="p-4 flex-1">
                    <h4 className="font-bold text-slate-800 text-sm leading-tight mb-4">{item.title}</h4>
                    {/* Abstract illustration placeholder since we lack assets */}
                    <div className="w-full h-16 bg-slate-50 rounded-lg border border-slate-100 relative overflow-hidden flex items-end justify-center">
                       <div className="w-8 h-8 bg-blue-200 rounded-full absolute -left-2 -bottom-2"></div>
                       <div className="w-12 h-12 bg-green-200 rounded-full absolute -right-4 -top-4"></div>
                       <div className="w-16 h-8 bg-orange-200 rounded-t-full"></div>
                    </div>
                  </div>
                  <button className={`${item.color} text-white text-sm font-bold py-3 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity`}>
                    {item.cta} <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Credit Score Card */}
          <motion.div variants={itemVariants} className="bg-blue-50/50 rounded-3xl p-6 shadow-sm border border-blue-100/50">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-lg font-bold text-slate-800">Credit score</h3>
              <button className="text-indigo-600 font-bold text-sm hover:text-indigo-700">Check score</button>
            </div>
            
            <div className="flex items-center gap-6">
              {/* Simple SVG gauge */}
              <div className="relative w-24 h-12 overflow-hidden shrink-0">
                <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
                  <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#e2e8f0" strokeWidth="12" strokeLinecap="round" />
                  <path d="M 10 50 A 40 40 0 0 1 70 18" fill="none" stroke="#22c55e" strokeWidth="12" strokeLinecap="round" />
                </svg>
                {/* Needle */}
                <div className="absolute bottom-0 left-1/2 w-1 h-12 bg-slate-800 origin-bottom rounded-full transform -rotate-45" style={{ transformOrigin: 'bottom center', left: 'calc(50% - 2px)' }}></div>
                <div className="absolute bottom-[-4px] left-1/2 -ml-1.5 w-3 h-3 bg-slate-800 rounded-full"></div>
              </div>

              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-2xl font-bold text-green-600">800</span>
                  <span className="text-slate-400 font-medium">/900</span>
                  <span className="text-slate-300">|</span>
                  <span className="font-bold text-slate-700">Excellent</span>
                </div>
                <p className="text-xs text-slate-500 flex items-center gap-1 cursor-pointer group">
                  New score available on 06 Jun 2025 <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-slate-800" />
                </p>
              </div>
            </div>
          </motion.div>

          {/* Refer and earn */}
          <motion.div variants={itemVariants} className="bg-linear-to-r from-white to-sky-50 rounded-3xl p-6 shadow-md border border-slate-100 flex justify-between items-center relative overflow-hidden">
            <div className="relative z-10 w-2/3">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Refer and earn!</h3>
              <p className="text-sm text-slate-500 mb-4 leading-relaxed">
                Invite your friend and earn rewards. The more you share, the more you gain.
              </p>
              <button className="text-indigo-600 font-bold text-sm flex items-center gap-1 hover:text-indigo-800 transition-colors">
                Refer now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute -right-4 -bottom-4 w-32 h-32 opacity-90 mix-blend-multiply">
               <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=250&auto=format&fit=crop" className="w-full h-full object-cover rounded-full" alt="Gift box placeholder" />
            </div>
          </motion.div>

        </motion.div>
      </main>

      {/* Floating Bottom Navigation (Dock) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 w-max">
        <div className="flex items-center gap-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 p-2 rounded-3xl shadow-2xl">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`
                  relative flex items-center justify-center px-4 py-2.5 rounded-2xl transition-all duration-300 ease-out
                  ${isActive ? 'text-indigo-600 bg-indigo-50/80 shadow-sm' : 'text-slate-400 hover:text-slate-600'}
                `}
              >
                <Icon size={20} className={isActive ? 'stroke-[2.5px]' : 'stroke-2'} />

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                      animate={{ width: 'auto', opacity: 1, marginLeft: 8 }}
                      exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden flex flex-col justify-center"
                    >
                      <motion.span
                        className="text-sm font-bold whitespace-nowrap"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {item.label}
                      </motion.span>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        className="h-[3px] bg-indigo-600 rounded-full mt-0.5"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
