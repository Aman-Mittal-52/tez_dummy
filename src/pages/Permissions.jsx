import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  MessageSquare, 
  Users, 
  Image, 
  CheckCircle2, 
  ChevronRight,
  ShieldCheck,
  XCircle,
  Loader2
} from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

const permissionsList = [
  {
    id: 'location',
    title: 'Location',
    description: 'To provide tailored loan offers based on your area.',
    icon: MapPin,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    id: 'sms',
    title: 'SMS',
    description: 'To verify your identity and financial history securely.',
    icon: MessageSquare,
    color: 'bg-green-100 text-green-600'
  },
  {
    id: 'contacts',
    title: 'Contacts',
    description: 'To help build your trust score with our network.',
    icon: Users,
    color: 'bg-purple-100 text-purple-600'
  },
  {
    id: 'media',
    title: 'Media & Files',
    description: 'To upload necessary documents for your loan application.',
    icon: Image,
    color: 'bg-orange-100 text-orange-600'
  }
];

const processSteps = [
  { id: 1, text: 'Reading history' },
  { id: 2, text: 'Evaluating offer' },
  { id: 3, text: 'Finalizing your loan offer' }
];

export default function Permissions() {
  const [step, setStep] = useState('request'); // 'request', 'processing'
  const [error, setError] = useState(null);
  const [currentProcessStep, setCurrentProcessStep] = useState(0);
  const navigate = useNavigate();

  const handleAllowAll = () => {
    // Simulate permission request
    // In a real app, this would call navigator.permissions or similar
    
    // For demo/UI flow:
    // We simulate a potential rejection for one of them just to show the Alert component usage
    // but usually we want success
    
    setStep('processing');
  };

  const handleReject = () => {
    setError("All permissions are required to provide you with the best loan offer. Please grant access to continue.");
  };

  const handleSkip = () => {
    navigate('/home');
  };

  useEffect(() => {
    if (step === 'processing') {
      const timer = setInterval(() => {
        setCurrentProcessStep(prev => {
          if (prev < processSteps.length) {
            return prev + 1;
          }
          clearInterval(timer);
          return prev;
        });
      }, 1500);

      // Final navigation after all steps
      if (currentProcessStep === processSteps.length) {
          setTimeout(() => {
            navigate('/home');
          }, 1000);
      }

      return () => clearInterval(timer);
    }
  }, [step, currentProcessStep, navigate]);

  if (step === 'processing') {
    return (
      <div className="min-h-screen bg-[#0f0b2f] text-white flex flex-col items-center justify-center p-8 font-sans">
        <div className="w-full max-w-xs space-y-12">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tight">This won't take long</h1>
            <p className="text-slate-400 text-sm">We are analyzing your profile to find the best offers.</p>
          </div>

          <div className="space-y-6">
            {processSteps.map((s, idx) => (
              <motion.div 
                key={s.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ 
                  opacity: idx <= currentProcessStep ? 1 : 0.3,
                  x: 0 
                }}
                className="flex items-center gap-4"
              >
                <div className="relative">
                  {idx < currentProcessStep ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      <CheckCircle2 className="w-6 h-6 text-green-400 fill-green-400/20" />
                    </motion.div>
                  ) : idx === currentProcessStep ? (
                    <Loader2 className="w-6 h-6 text-indigo-400 animate-spin" />
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-slate-700" />
                  )}
                </div>
                <span className={`text-lg font-medium ${idx === currentProcessStep ? 'text-white' : 'text-slate-500'}`}>
                  {s.text}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center pt-8">
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    delay: i * 0.2
                  }}
                  className="w-2 h-2 rounded-full bg-indigo-500"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans max-w-md w-full mx-auto relative overflow-hidden">
      {/* Top Graphic Decor */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16 z-0" />
      
      <main className="flex-1 px-8 pt-16 pb-8 flex flex-col relative z-10">
        <div className="mb-10 text-center">
          <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-200">
            <ShieldCheck className="text-white w-10 h-10" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 mb-2">Grant permissions</h1>
          <p className="text-slate-500 text-sm px-4">
            To give you the best loan offer, we need access to the following
          </p>
        </div>

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6"
            >
              <Alert variant="destructive" className="bg-red-50 border-red-100">
                <XCircle className="h-4 w-4" />
                <AlertTitle>Permission Required</AlertTitle>
                <AlertDescription>
                  {error}
                </AlertDescription>
              </Alert>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-6 flex-1 overflow-y-auto pr-2 scrollbar-hide">
          {permissionsList.map((item) => (
            <div key={item.id} className="flex gap-4 group">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 duration-200 ${item.color}`}>
                <item.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-800 text-base">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-300 self-center" />
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-4">
          <Button 
            onClick={handleAllowAll}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-7 rounded-2xl text-lg shadow-xl shadow-indigo-100 transition-all active:scale-[0.98]"
          >
            Allow all
          </Button>
          
          <button 
            onClick={handleSkip}
            className="w-full text-slate-400 font-bold py-2 text-sm hover:text-slate-600 transition-colors"
          >
            Skip for now
          </button>
        </div>
      </main>

      {/* Safety Badge */}
      <div className="pb-8 flex justify-center items-center gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
        <ShieldCheck className="w-3 h-3" />
        Encrypted & Secure
      </div>
    </div>
  );
}
