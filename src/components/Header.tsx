import { Calendar, Users, Clock, BookOpen } from 'lucide-react';

interface HeaderProps {
  currentView: 'therapists' | 'sessions';
  onViewChange: (view: 'therapists' | 'sessions') => void;
}

export default function Header({ currentView, onViewChange }: HeaderProps) {
  return (
    <header className="bg-purple-600 text-white py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="bg-white bg-opacity-20 p-2 rounded-lg">
              <Users className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">TherapyConnect</h1>
              <p className="text-purple-100 text-sm">Professional Mental Health Services</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex bg-white bg-opacity-10 rounded-lg p-1">
              <button
                onClick={() => onViewChange('therapists')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'therapists' 
                    ? 'bg-white text-purple-600' 
                    : 'text-white hover:bg-white hover:bg-opacity-10'
                }`}
              >
                Find Therapists
              </button>
              <button
                onClick={() => onViewChange('sessions')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'sessions' 
                    ? 'bg-white text-purple-600' 
                    : 'text-white hover:bg-white hover:bg-opacity-10'
                }`}
              >
                My Sessions
              </button>
            </div>
            <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>Instant Booking</span>
            </div>
            </div>
          </div>
        </div>
        <p className="text-purple-100 text-lg max-w-3xl">
          {currentView === 'therapists' 
            ? 'Connect with licensed therapists and counselors. Book sessions, manage appointments, and get the professional support you deserve.'
            : 'Manage your therapy sessions, reschedule appointments, and track your mental health journey.'
          }
        </p>
      </div>
    </header>
  );
}