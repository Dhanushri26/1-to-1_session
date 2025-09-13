import { Calendar, Users, Clock } from 'lucide-react';

interface HeaderProps {
  currentView: 'therapists' | 'sessions';
  onViewChange: (view: 'therapists' | 'sessions') => void;
}

export default function Header({ currentView, onViewChange }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-slate-700 via-blue-800 to-indigo-900 text-white py-6 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-700/90 via-blue-800/90 to-indigo-900/90"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-full translate-y-40 -translate-x-40"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20 shadow-lg">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">We are here</h1>
              <p className="text-blue-100 text-sm font-medium">Professional Mental Health Services</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex bg-white/10 backdrop-blur-sm rounded-xl p-1 border border-white/20 shadow-lg">
              <button
                onClick={() => onViewChange('therapists')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentView === 'therapists' 
                    ? 'bg-gradient-to-r from-white to-blue-50 text-indigo-700 shadow-md' 
                    : 'text-white hover:bg-white/20 hover:shadow-md'
                }`}
              >
                Find Therapists
              </button>
              <button
                onClick={() => onViewChange('sessions')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentView === 'sessions' 
                    ? 'bg-gradient-to-r from-white to-blue-50 text-indigo-700 shadow-md' 
                    : 'text-white hover:bg-white/20 hover:shadow-md'
                }`}
              >
                My Sessions
              </button>
            </div>
            <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
              <Clock className="h-4 w-4 text-cyan-300" />
              <span className="font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
              <Calendar className="h-4 w-4 text-blue-300" />
              <span className="font-medium">Instant Booking</span>
            </div>
            </div>
          </div>
        </div>
        <p className="text-blue-50 text-lg max-w-3xl font-medium leading-relaxed">
          {currentView === 'therapists' 
            ? 'Connect with licensed therapists and counselors. Book sessions, manage appointments, and get the professional support you deserve.'
            : 'Manage your therapy sessions, reschedule appointments, and track your mental health journey.'
          }
        </p>
      </div>
    </header>
  );
}