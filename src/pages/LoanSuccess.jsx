import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, User, Banknote, Landmark, CreditCard, Coins, RefreshCw } from 'lucide-react';

export default function LoanSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  // Provide a fallback if accessed directly
  const amount = location.state?.amount || 2500;

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans max-w-md w-full mx-auto relative overflow-hidden items-center pt-24 pb-12 px-6">
      <h1 className="text-xl font-bold text-slate-800 mb-8">Loans Success</h1>
      
      <div className="text-center mb-16">
        <h2 className="text-xl text-slate-400 font-medium mb-1">Jimmy Sullivan</h2>
        <h3 className="text-5xl font-bold tracking-tight text-slate-800">${amount}</h3>
      </div>

      {/* Decorative Circular Graphic */}
      <div className="relative w-64 h-64 flex items-center justify-center mb-auto">
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border border-slate-100 border-dashed animate-[spin_60s_linear_infinite]" />
        
        {/* Inner Rings */}
        <div className="absolute inset-4 rounded-full border border-slate-50 animate-[spin_40s_linear_infinite_reverse]" />
        
        {/* Gradient Blob Background */}
        <div className="absolute w-40 h-40 bg-indigo-50/50 rounded-full blur-xl" />
        
        {/* Center Checkmark Circle */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="relative z-10 w-28 h-28 bg-gradient-to-br from-indigo-700 to-indigo-500 rounded-full flex items-center justify-center shadow-xl shadow-indigo-200"
        >
          <div className="absolute inset-0 rounded-full bg-white opacity-10 mix-blend-overlay"></div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <Check className="w-12 h-12 text-white" strokeWidth={3} />
          </motion.div>
        </motion.div>

        {/* Floating Icons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute -top-2 left-6 w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center shadow-sm"
        >
          <Landmark className="w-5 h-5 text-indigo-400" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center shadow-sm"
        >
          <Coins className="w-5 h-5 text-amber-500" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="absolute -top-2 right-6 w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center shadow-sm"
        >
          <Banknote className="w-5 h-5 text-emerald-500" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 bg-rose-50 rounded-full flex items-center justify-center shadow-sm"
        >
          <RefreshCw className="w-5 h-5 text-rose-400" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="absolute bottom-4 right-12 w-10 h-10 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center shadow-sm"
        >
          <CreditCard className="w-5 h-5 text-slate-500 z-20 bg-white rounded flex items-center justify-center" />
        </motion.div>
      </div>

      <div className="w-full mt-12 space-y-6">
        <button 
          onClick={() => navigate('/')}
          className="w-full bg-black text-white rounded-full py-4 font-medium text-base hover:bg-slate-800 transition-colors shadow-lg active:scale-[0.98]"
        >
          Back to home
        </button>
        
        <button className="w-full text-slate-400 font-medium text-sm hover:text-slate-600 transition-colors">
          See loans history
        </button>
      </div>
    </div>
  );
}
