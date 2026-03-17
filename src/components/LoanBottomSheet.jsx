import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export function LoanBottomSheet({ onClose }) {
  const [amount, setAmount] = useState(2500);
  const [tenure, setTenure] = useState('Jan');
  const navigate = useNavigate();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
  
  const minAmount = 100;
  const maxAmount = 5000;

  // Handle slider drag interaction visually
  const progressPercentage = ((amount - minAmount) / (maxAmount - minAmount)) * 100;

  const handleGetOffer = () => {
    // Navigate to success screen with data
    onClose();
    setTimeout(() => {
        navigate('/success', { state: { amount } });
    }, 200);
  };

  return (
    <motion.div 
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", damping: 30, stiffness: 300 }}
      className="w-full bg-white rounded-t-[40px] shadow-[0_-20px_50px_rgba(0,0,0,0.2)] flex flex-col font-sans max-h-[90vh] overflow-hidden"
    >
      {/* Handle for dragging feel */}
      <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mt-4 mb-2 shrink-0" />
      <div className="p-8 pb-10">
        <h2 className="text-xl font-bold text-slate-800 mb-2">Select Loans Amount</h2>
        <p className="text-sm text-slate-400 mb-6">Move the slider to select your loans amount</p>

        {/* Amount Input Box */}
        <div className="border border-slate-200 rounded-2xl py-5 px-6 flex justify-center items-center mb-8 shadow-sm">
          <div className="flex items-start text-slate-800">
            <span className="text-lg font-medium mt-1 mr-1 text-slate-500">$</span>
            <span className="text-5xl font-bold tracking-tight">{amount}</span>
          </div>
        </div>

        {/* Custom Slider */}
        <div className="relative mb-12 px-2">
            
          <input 
            type="range" 
            min={minAmount} 
            max={maxAmount} 
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full absolute inset-0 opacity-0 cursor-pointer h-full z-20"
          />
          
          <div className="h-0.5 bg-slate-200 rounded-full w-full relative">
            <div 
              className="absolute left-0 h-full bg-indigo-600 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            />
            <div 
              className="absolute w-5 h-5 bg-white border-[3px] border-indigo-600 rounded-full -top-2 z-10 shadow-sm transition-transform active:scale-110"
              style={{ left: `calc(${progressPercentage}% - 10px)` }}
            />
          </div>
          
          <div className="flex justify-between text-xs text-slate-800 font-bold mt-4 px-1">
            <span>${minAmount}</span>
            <span>${maxAmount}</span>
          </div>
        </div>

        <h2 className="text-lg font-bold text-slate-800 mb-2">Select Loans Teanure</h2>
        <p className="text-sm text-slate-400 mb-6">Choose your collateral term in month</p>

        {/* Tenure Selector */}
        <div className="flex space-x-3 mb-10 overflow-x-auto pb-2 scrollbar-hide -mx-2 px-2">
          {months.map(m => (
            <button
              key={m}
              onClick={() => setTenure(m)}
              className={`flex-shrink-0 w-14 h-14 rounded-xl font-medium text-sm flex items-center justify-center transition-all duration-200 ${
                tenure === m 
                ? 'bg-indigo-700 text-white shadow-md shadow-indigo-200' 
                : 'border border-slate-200 text-slate-600 hover:border-indigo-300'
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Action Button */}
        <button 
          onClick={handleGetOffer}
          className="w-full bg-black text-white rounded-full py-4 font-medium text-base hover:bg-slate-800 transition-colors shadow-[0_8px_20px_rgba(0,0,0,0.15)] active:scale-[0.98]"
        >
          Get my offer
        </button>
      </div>
    </motion.div>
  );
}
