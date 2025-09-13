import { Clock, Users } from 'lucide-react';
import { Therapist } from '../types';

interface TherapistCardProps {
  therapist: Therapist;
  onBookNow: (therapist: Therapist) => void;
}

export default function TherapistCard({ therapist, onBookNow }: TherapistCardProps) {
  // Generate a unique color theme for each card based on therapist ID - Cool tones only
  const colorThemes = [
    { primary: 'from-slate-500 to-slate-700', secondary: 'from-slate-50 to-slate-100', accent: 'slate', text: 'slate' },
    { primary: 'from-blue-500 to-blue-700', secondary: 'from-blue-50 to-blue-100', accent: 'blue', text: 'blue' },
    { primary: 'from-indigo-500 to-indigo-700', secondary: 'from-indigo-50 to-indigo-100', accent: 'indigo', text: 'indigo' },
    { primary: 'from-cyan-500 to-cyan-700', secondary: 'from-cyan-50 to-cyan-100', accent: 'cyan', text: 'cyan' },
    { primary: 'from-teal-500 to-teal-700', secondary: 'from-teal-50 to-teal-100', accent: 'teal', text: 'teal' },
    { primary: 'from-violet-500 to-violet-700', secondary: 'from-violet-50 to-violet-100', accent: 'violet', text: 'violet' }
  ];
  
  const theme = colorThemes[therapist.id % colorThemes.length];

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl hover:border-gray-200 transition-all duration-300 group relative">
      {/* Subtle gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${theme.secondary} opacity-30`}></div>
      
      <div className="p-6 relative z-10">
        <div className="flex items-center space-x-4 mb-4">
          <div className="relative">
            <img
              src={therapist.image}
              alt={therapist.name}
              className="w-16 h-16 rounded-full object-cover border-3 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
            />
            <div className={`absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r ${theme.primary} rounded-full border-2 border-white shadow-md`}></div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-gray-900 transition-colors">{therapist.name}</h3>
            <p className="text-gray-600 text-sm font-medium">{therapist.title}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className={`bg-gradient-to-br ${theme.secondary} rounded-xl p-3 text-center border border-${theme.accent}-100 shadow-sm group-hover:shadow-md transition-shadow`}>
            <Clock className={`h-5 w-5 text-${theme.accent}-600 mx-auto mb-2`} />
            <div className={`text-lg font-bold text-${theme.accent}-800`}>{therapist.yearsOfExperience}</div>
            <div className={`text-xs text-${theme.accent}-600 font-medium`}>Years Experience</div>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl p-3 text-center border border-gray-200 shadow-sm group-hover:shadow-md transition-shadow">
            <Users className="h-5 w-5 text-slate-600 mx-auto mb-2" />
            <div className="text-lg font-bold text-slate-800">{therapist.clientsHelped}+</div>
            <div className="text-xs text-slate-600 font-medium">Clients Helped</div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onBookNow(therapist)}
          className={`w-full bg-gradient-to-r ${theme.primary} text-white font-semibold py-3 px-4 rounded-xl hover:shadow-lg transition-all duration-200 shadow-md transform hover:-translate-y-0.5 hover:scale-[1.02]`}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
