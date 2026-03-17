import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import { ArrowLeft } from 'lucide-react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function OTPVerification() {
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(30);
  const inputRef = useRef(null);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const phoneNumber = location.state?.phoneNumber || '9899835407';

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleProceed = () => {
    if (otp.length === 6) {
      dispatch(login({ phoneNumber }));
      navigate('/home', { replace: true });
    }
  };

  const handleResend = () => {
    setTimer(30);
    setOtp('');
    inputRef.current?.focus();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans max-w-md w-full mx-auto relative overflow-hidden">
      {/* Header */}
      <div className="pt-12 px-6 pb-6 flex items-center relative z-10">
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 absolute left-6"
        >
          <ArrowLeft className="text-slate-700 w-5 h-5" />
        </button>
        <h1 className="flex-1 text-center text-xl font-bold text-slate-800">Verify Code</h1>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 px-6 pt-4 pb-8 flex flex-col relative z-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight leading-tight mb-3">
            Enter OTP
          </h2>
          <p className="text-sm text-slate-500">
            A 6-digit code has been sent to <br />
            <span className="font-bold text-slate-700">+91 {phoneNumber.replace(/(\d{5})(\d{5})/, "$1 $2")}</span>
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center">
          {/* Custom InputOTP Component */}
          <div className="w-full relative flex justify-center mb-8 scale-125 origin-top mt-2">
            <InputOTP
              maxLength={6}
              value={otp}
              onChange={(value) => setOtp(value)}
              autoFocus
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} className="w-12 h-14 text-2xl font-bold bg-white border-2 border-indigo-100 rounded-lg mx-1" />
                <InputOTPSlot index={1} className="w-12 h-14 text-2xl font-bold bg-white border-2 border-indigo-100 rounded-lg mx-1" />
                <InputOTPSlot index={2} className="w-12 h-14 text-2xl font-bold bg-white border-2 border-indigo-100 rounded-lg mx-1" />
                <InputOTPSlot index={3} className="w-12 h-14 text-2xl font-bold bg-white border-2 border-indigo-100 rounded-lg mx-1" />
                <InputOTPSlot index={4} className="w-12 h-14 text-2xl font-bold bg-white border-2 border-indigo-100 rounded-lg mx-1" />
                <InputOTPSlot index={5} className="w-12 h-14 text-2xl font-bold bg-white border-2 border-indigo-100 rounded-lg mx-1" />
              </InputOTPGroup>
            </InputOTP>
          </div>
          
          <div className="flex items-center justify-center space-x-1 text-sm font-medium">
            <span className="text-slate-500">Didn't receive code?</span>
            {timer > 0 ? (
              <span className="text-slate-400">Resend in <span className="text-indigo-600 font-bold">{timer}s</span></span>
            ) : (
              <button 
                onClick={handleResend}
                className="text-indigo-600 font-bold hover:underline"
              >
                Resend Now
              </button>
            )}
          </div>
        </div>

        <div className="mt-auto pt-10">
          <button 
            onClick={handleProceed}
            disabled={otp.length !== 6}
            className={`w-full py-4 rounded-xl font-bold text-base transition-all duration-200 flex items-center justify-center
              ${otp.length === 6 
                ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-600 active:scale-[0.98]' 
                : 'bg-indigo-500/50 text-white/80 cursor-not-allowed'
              }
            `}
          >
            Verify & Proceed
          </button>
        </div>
      </div>
    </div>
  );
}
