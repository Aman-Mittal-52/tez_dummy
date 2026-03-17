import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handleProceed = () => {
    if (phoneNumber.length === 10) {
      navigate('/otp', { state: { phoneNumber } });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans max-w-md w-full mx-auto relative overflow-hidden">
      {/* Hero Image Section */}
      <div className="pt-12 px-6 flex justify-center">
        <h1 className="text-2xl font-bold text-indigo-700">Boroww</h1>
      </div>
      
      <div className="relative mt-8 px-6 flex justify-center">
        {/* Placeholder for exactly the image shown in the mockup */}
        <div className="w-full aspect-4/3 bg-linear-to-b from-indigo-50 to-indigo-100 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-inner">
           <img 
            src="/assets/tez_men_on_sofa.png" 
            alt="Hero illustration" 
            className="w-full h-full object-contain object-bottom pt-4"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="absolute inset-0 hidden items-center justify-center">
            <img src="/money.png" className='w-full h-full object-cover object-bottom' alt="" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 pt-10 pb-8 flex flex-col">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight leading-tight">
            Apply in minutes, receive funds instantly.
          </h2>
        </div>

        <div className="mt-auto">
          <div className="relative flex items-center mb-6">
            <div className="grow border-t border-slate-200"></div>
            <span className="shrink-0 px-4 text-xs font-medium text-slate-400 uppercase tracking-wider">Log in or sign up</span>
            <div className="grow border-t border-slate-200"></div>
          </div>

          {/* Form Input Area */}
          <div className="flex gap-3 mb-6">
            <div className="w-16 h-14 bg-white border border-slate-200 rounded-xl flex items-center justify-center shadow-sm shrink-0">
               {/* India Flag placeholder */}
               <span className="text-xl">🇮🇳</span>
            </div>
            
            <div className="flex-1 bg-white border border-indigo-500 rounded-xl flex items-center px-4 shadow-[0_0_0_2px_rgba(99,102,241,0.2)] transition-shadow">
               <span className="text-slate-800 font-medium mr-2 shrink-0">+91 -</span>
               <input 
                  type="tel"
                  maxLength={10}
                  placeholder="Enter your number"
                  className="w-full bg-transparent border-none outline-none text-slate-800 font-medium text-lg tracking-wide placeholder:text-slate-400 placeholder:font-normal"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                  autoFocus
               />
            </div>
          </div>

          <button 
            onClick={handleProceed}
            disabled={phoneNumber.length !== 10}
            className={`w-full py-4 rounded-xl font-bold text-base transition-all duration-200 flex items-center justify-center
              ${phoneNumber.length === 10 
                ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-600 active:scale-[0.98]' 
                : 'bg-indigo-500/50 text-white/80 cursor-not-allowed'
              }
            `}
          >
            Proceed
          </button>

          <p className="text-center text-xs text-slate-500 mt-6 leading-relaxed px-4">
            By proceeding, you agree to our <a href="#" className="text-indigo-600 underline underline-offset-2">Terms & Conditions</a> and <a href="#" className="text-indigo-600 underline underline-offset-2">privacy policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}
