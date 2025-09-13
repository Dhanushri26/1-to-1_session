import { Calendar, Clock, User, CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import { BookingSession } from '../types';

interface UserSessionsProps {
  sessions: BookingSession[];
  onReschedule: (sessionId: string) => void;
  onCancel: (sessionId: string) => void;
}

export default function UserSessions({ sessions, onReschedule, onCancel }: UserSessionsProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'pending':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-blue-500" />;
      default:
        return <XCircle className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const upcomingSessions = sessions.filter(session => session.status === 'confirmed' || session.status === 'pending');
  const pastSessions = sessions.filter(session => session.status === 'completed');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Upcoming Sessions */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-purple-600 mb-6">Upcoming Sessions</h2>
        {upcomingSessions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingSessions.map((session) => (
              <div key={session.id} className="bg-white rounded-lg border border-purple-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(session.status)}
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(session.status)}`}>
                      {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
                    </span>
                  </div>
                  <span className="text-sm text-purple-600 font-medium">${session.sessionPrice}</span>
                </div>
                
                <h3 className="text-lg font-bold text-purple-600 mb-2">{session.therapistName}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">
                      {new Date(session.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        month: 'long', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{session.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <User className="h-4 w-4" />
                    <span className="text-sm capitalize">{session.type} Session</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => onReschedule(session.id)}
                    className="flex-1 bg-purple-100 text-purple-600 py-2 px-3 rounded-lg text-sm font-medium hover:bg-purple-200 transition-colors"
                  >
                    Reschedule
                  </button>
                  <button
                    onClick={() => onCancel(session.id)}
                    className="flex-1 bg-red-100 text-red-600 py-2 px-3 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg border border-purple-200">
            <Calendar className="h-12 w-12 text-purple-300 mx-auto mb-4" />
            <p className="text-xl text-purple-600 mb-2">No upcoming sessions</p>
            <p className="text-gray-600">Book a session with one of our therapists to get started</p>
          </div>
        )}
      </div>

      {/* Past Sessions */}
      <div>
        <h2 className="text-2xl font-bold text-purple-600 mb-6">Session History</h2>
        {pastSessions.length > 0 ? (
          <div className="space-y-4">
            {pastSessions.map((session) => (
              <div key={session.id} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(session.status)}
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(session.status)}`}>
                        Completed
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-purple-600">{session.therapistName}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(session.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{session.time}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span className="capitalize">{session.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-purple-600 font-medium">${session.sessionPrice}</p>
                    <button className="text-purple-600 text-sm hover:text-purple-700 mt-1">
                      Book Again
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
            <CheckCircle className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <p className="text-xl text-gray-600 mb-2">No session history</p>
            <p className="text-gray-500">Your completed sessions will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
}