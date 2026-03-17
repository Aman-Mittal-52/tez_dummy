import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Bell, Search, FileText, Grid, Compass, Inbox, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoanBottomSheet } from '../components/LoanBottomSheet';

const navItems = [
  { label: 'Home', icon: Grid, path: '/' },
  { label: 'Discover', icon: Compass, path: '#' },
  { label: 'Docs', icon: FileText, path: '#' },
  { label: 'Inbox', icon: Inbox, path: '#' },
];

export default function Home() {
  const [isLoanSheetOpen, setIsLoanSheetOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans max-w-md w-full mx-auto shadow-xl relative overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center p-6 pt-12 pb-4">
        <div>
          <h1 className="text-xl text-slate-600 font-medium">Hello,</h1>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Jimmy</h2>
        </div>
        <div className="relative">
          <img 
            src="https://i.pravatar.cc/150?img=11" 
            alt="Profile" 
            className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover"
          />
          <span className="absolute top-0 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-slate-50">
            3
          </span>
        </div>
      </header>

      {/* Main Content Scrollable */}
      <main className="flex-1 overflow-y-auto px-6 pb-24 space-y-6 scrollbar-hide">
        {/* Balance Card */}
        <div className="bg-linear-to-br from-indigo-700 via-indigo-600 to-purple-600 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
          
          <p className="text-indigo-100 text-sm font-medium mb-1">Balance</p>
          <div className="flex justify-between items-end">
            <h3 className="text-3xl font-bold tracking-tight">$250.90</h3>
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-red-500 mix-blend-multiply opacity-90"></div>
              <div className="w-6 h-6 rounded-full bg-yellow-400 mix-blend-multiply opacity-90"></div>
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100/50">
          <h3 className="text-lg font-bold text-slate-800 mb-2">Make a loans</h3>
          <p className="text-sm text-slate-500 mb-6 leading-relaxed flex-wrap">
            Request your loans and get your money to your balance just in seconds.
          </p>
          <button 
            onClick={() => setIsLoanSheetOpen(true)}
            className="bg-black text-white rounded-full py-3 px-6 font-medium text-sm flex items-center space-x-2 hover:bg-slate-800 transition-colors shadow-md w-max"
          >
            <div className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center text-white/80 shrink-0">
               <span className="text-xs leading-none">+</span>
            </div>
            <span>Create Application</span>
          </button>
        </div>

        {/* News Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-slate-800">G-News</h3>
            <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700 transition-colors">See all</button>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden h-40 shadow-md group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2689&auto=format&fit=crop" 
              alt="Golden Gate Bridge" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <h4 className="text-white font-bold text-lg leading-tight mb-1">New Normal Life<br/>San Francisco</h4>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-max">
        <div className="flex items-center gap-1 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-lg border border-neutral-200 dark:border-neutral-800 p-2 rounded-2xl shadow-xl">
          {navItems.map((item, index) => {
            const isActive = activeIndex === index;
            const Icon = item.icon;

            return (
              <Link to={item.path} key={index}>
                <button
                  onClick={() => setActiveIndex(index)}
                  className={`
                  relative flex items-center justify-center px-3 py-2 rounded-xl transition-all duration-300
                  ${isActive ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}
                `}
                >
                  <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        key="active-text"
                        initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                        animate={{ width: 'auto', opacity: 1, marginLeft: 8 }}
                        exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden flex flex-col items-center justify-center"
                      >
                        <motion.div
                          className="text-sm font-medium whitespace-nowrap leading-none flex"
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={{
                            hidden: { opacity: 0 },
                            visible: {
                              opacity: 1,
                              transition: { staggerChildren: 0.05, delayChildren: 0.1 }
                            }
                          }}
                        >
                          {item.label.split('').map((char, i) => (
                            <motion.span
                              key={i}
                              variants={{
                                hidden: { y: 10, opacity: 0 },
                                visible: { y: 0, opacity: 1 }
                              }}
                            >
                              {char}
                            </motion.span>
                          ))}
                        </motion.div>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          className="h-[2px] bg-indigo-600 dark:bg-indigo-400 rounded-full mt-0.5"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Overlay & Bottom Sheet */}
      <AnimatePresence>
        {isLoanSheetOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLoanSheetOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm z-40"
            />
            <LoanBottomSheet onClose={() => setIsLoanSheetOpen(false)} />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
