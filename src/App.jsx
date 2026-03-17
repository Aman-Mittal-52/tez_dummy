import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import OTPVerification from './pages/OTPVerification';
import LoanSuccess from './pages/LoanSuccess';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="bg-slate-200 min-h-screen flex items-center justify-center font-sans antialiased">
        <div className="w-full max-w-md bg-white min-h-screen relative overflow-hidden shadow-2xl overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/home-legacy" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/otp" element={<OTPVerification />} />
            <Route path="/success" element={<LoanSuccess />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;