import { Calendar, Clock, User, Phone, ArrowLeft, Video, MapPin } from 'lucide-react';
import { Therapist, SessionSlot } from '../types';
import { useState } from 'react';

interface BookingPageProps {
  isOpen: boolean;
  onClose: () => void;
  therapist: Therapist | null;
}

export default function BookingPage({ isOpen, onClose, therapist }: BookingPageProps) {
  const [sessionType, setSessionType] = useState<'online' | 'offline'>('online');
  
  if (!isOpen || !therapist) return null;

  const immediateSlots = therapist.availability.filter(slot => slot.type === 'immediate' && slot.available);
  const scheduledSlots = therapist.availability.filter(slot => slot.type === 'scheduled' && slot.available);
  
  const handleBooking = (slot: SessionSlot) => {
    const sessionTypeText = sessionType === 'online' ? 'Online' : 'In-person';
    alert(`${sessionTypeText} session booked successfully for ${slot.date} at ${slot.time}!`);
    onClose();
  };

  const handleReschedule = (sessionId: string) => {
    alert(`Rescheduling session ${sessionId}`);
  };

  const handleRebook = (sessionId: string) => {
    alert(`Rebooking session ${sessionId}`);
  };

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      {/* Header */}
      <div className="bg-purple-600 text-white p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onClose}
              className="text-white hover:text-purple-200 transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-3">
              <img
                src={therapist.image}
                alt={therapist.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-white"
              />
              <div>
                <h2 className="text-xl font-bold">{therapist.name}</h2>
                <p className="text-purple-100">{therapist.title}</p>
              </div>
            </div>
          </div>
          {/* <div className="text-right">
            <p className="text-lg font-bold">${therapist.sessionPrice}</p>
            <p className="text-purple-100 text-sm">per session</p>
          </div> */}
        </div>
      </div>

      {/* Session Type Selector */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Choose Session Type</h3>
          <div className="flex space-x-4">
            <button
              onClick={() => setSessionType('online')}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg border-2 transition-all duration-200 ${
                sessionType === 'online'
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-300 bg-white text-gray-600 hover:border-gray-400'
              }`}
            >
              <Video className="h-5 w-5" />
              <span className="font-medium">Online Session</span>
            </button>
            <button
              onClick={() => setSessionType('offline')}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg border-2 transition-all duration-200 ${
                sessionType === 'offline'
                  ? 'border-green-500 bg-green-50 text-green-700'
                  : 'border-gray-300 bg-white text-gray-600 hover:border-gray-400'
              }`}
            >
              <MapPin className="h-5 w-5" />
              <span className="font-medium">In-Person Session</span>
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {sessionType === 'online' 
              ? 'Join via video call from anywhere' 
              : 'Meet at the therapist\'s office location'
            }
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Immediate Sessions */}
          <div className="bg-white rounded-lg border border-purple-200 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Phone className="h-5 w-5 text-green-600" />
              <h3 className="text-lg font-bold text-purple-600">Available Now</h3>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                {immediateSlots.length} slots
              </span>
            </div>
            
            <div className="space-y-3">
              {immediateSlots.length > 0 ? (
                immediateSlots.map((slot) => (
                  <div
                    key={slot.id}
                    className="flex items-center justify-between p-3 border border-green-200 rounded-lg hover:bg-green-50 cursor-pointer transition-colors"
                    onClick={() => handleBooking(slot)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <div>
                        <div className="flex items-center space-x-2 text-gray-800">
                          <Calendar className="h-4 w-4" />
                          <span className="font-medium">Today</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span>{slot.time}</span>
                        </div>
                        <div className="flex items-center space-x-1 mt-1">
                          {sessionType === 'online' ? (
                            <Video className="h-3 w-3 text-blue-500" />
                          ) : (
                            <MapPin className="h-3 w-3 text-green-500" />
                          )}
                          <span className="text-xs text-gray-500">
                            {sessionType === 'online' ? 'Online' : 'In-person'}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700">
                      Book Now
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center py-4">No immediate slots available</p>
              )}
            </div>
          </div>

          {/* Scheduled Sessions */}
          <div className="bg-white rounded-lg border border-purple-200 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="h-5 w-5 text-purple-600" />
              <h3 className="text-lg font-bold text-purple-600">Schedule Ahead</h3>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                {scheduledSlots.length} slots
              </span>
            </div>
            
            <div className="space-y-3">
              {scheduledSlots.map((slot) => (
                <div
                  key={slot.id}
                  className="flex items-center justify-between p-3 border border-purple-200 rounded-lg hover:bg-purple-50 cursor-pointer transition-colors"
                  onClick={() => handleBooking(slot)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                    <div>
                      <div className="flex items-center space-x-2 text-gray-800">
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium">
                          {new Date(slot.date).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{slot.time}</span>
                      </div>
                      <div className="flex items-center space-x-1 mt-1">
                        {sessionType === 'online' ? (
                          <Video className="h-3 w-3 text-blue-500" />
                        ) : (
                          <MapPin className="h-3 w-3 text-green-500" />
                        )}
                        <span className="text-xs text-gray-500">
                          {sessionType === 'online' ? 'Online' : 'In-person'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700">
                    Schedule
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Previous Sessions for Reschedule/Rebook */}
        <div className="mt-8 bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-purple-600 mb-4">Previous Sessions with {therapist.name}</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
              <div className="flex items-center space-x-3">
                <User className="h-5 w-5 text-purple-500" />
                <div>
                  <p className="font-medium text-gray-800">Session on Jan 12, 2025</p>
                  <p className="text-sm text-gray-600">2:00 PM - Completed</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={() => handleReschedule('session-1')}
                  className="bg-purple-100 text-purple-600 px-3 py-1 rounded text-sm font-medium hover:bg-purple-200"
                >
                  Reschedule
                </button>
                <button 
                  onClick={() => handleRebook('session-1')}
                  className="bg-purple-600 text-white px-3 py-1 rounded text-sm font-medium hover:bg-purple-700"
                >
                  Rebook
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
              <div className="flex items-center space-x-3">
                <User className="h-5 w-5 text-purple-500" />
                <div>
                  <p className="font-medium text-gray-800">Session on Jan 8, 2025</p>
                  <p className="text-sm text-gray-600">10:00 AM - Completed</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={() => handleReschedule('session-2')}
                  className="bg-purple-100 text-purple-600 px-3 py-1 rounded text-sm font-medium hover:bg-purple-200"
                >
                  Reschedule
                </button>
                <button 
                  onClick={() => handleRebook('session-2')}
                  className="bg-purple-600 text-white px-3 py-1 rounded text-sm font-medium hover:bg-purple-700"
                >
                  Rebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}