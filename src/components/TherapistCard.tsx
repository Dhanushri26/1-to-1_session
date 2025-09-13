import { Star, Clock, Users, Globe } from 'lucide-react';
import { Therapist } from '../types';

interface TherapistCardProps {
  therapist: Therapist;
  onBookNow: (therapist: Therapist) => void;
}

export default function TherapistCard({ therapist, onBookNow }: TherapistCardProps) {
  return (
    <div className="bg-purple-600 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Header with Image and Basic Info */}
      <div className="p-4">
        <div className="flex items-start space-x-4">
          <img
            src={therapist.image}
            alt={therapist.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
          />
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-1">{therapist.name}</h3>
            <p className="text-purple-100 text-sm font-medium mb-2">{therapist.title}</p>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${i < Math.floor(therapist.rating) ? 'text-yellow-300 fill-current' : 'text-purple-300'}`}
                />
              ))}
              <span className="text-white text-xs ml-1">({therapist.rating})</span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Statistics */}
      <div className="px-4 pb-3">
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white bg-opacity-10 rounded-lg p-2 text-center">
            <Clock className="h-4 w-4 text-white mx-auto mb-1" />
            <div className="text-sm font-bold text-white">{therapist.yearsOfExperience}</div>
            <div className="text-xs text-purple-100">Years Exp.</div>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-2 text-center">
            <Users className="h-4 w-4 text-white mx-auto mb-1" />
            <div className="text-sm font-bold text-white">{therapist.clientsHelped}+</div>
            <div className="text-xs text-purple-100">Clients Helped</div>
          </div>
        </div>
      </div>

      {/* Specialties */}
      <div className="px-4 pb-3">
        <h4 className="text-white font-semibold mb-2 text-xs">Specializations</h4>
        <div className="flex flex-wrap gap-1">
          {therapist.specialty.map((spec, index) => (
            <span
              key={index}
              className="bg-white bg-opacity-20 text-white text-xs px-2 py-1 rounded-full"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="px-4 pb-3">
        <div className="flex items-center space-x-2">
          <Globe className="h-3 w-3 text-purple-100" />
          <span className="text-purple-100 text-xs">{therapist.languages.join(', ')}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-4 pb-4">
        <button
          onClick={() => onBookNow(therapist)}
          className="w-full bg-white text-purple-600 font-bold py-2 px-4 rounded-lg hover:bg-purple-50 transition-colors duration-200"
        >
          Book Now
        </button>
      </div>

      {/* Education (Footer) */}
      <div className="px-4 py-2 bg-white bg-opacity-5">
        <p className="text-purple-100 text-xs">{therapist.education}</p>
      </div>
    </div>
  );
}