import { useState, useMemo } from 'react';
import Header from './components/Header';
import SearchAndFilter from './components/SearchAndFilter';
import TherapistCard from './components/TherapistCard';
import BookingPage from './components/BookingPage';
import UserSessions from './components/UserSessions';
import { therapists } from './data/therapists';
import { userSessions } from './data/userSessions';
import { Therapist } from './types';

function App() {
  const [currentView, setCurrentView] = useState<'therapists' | 'sessions'>('therapists');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');
  const [sortBy, setSortBy] = useState('rating');
  const [selectedTherapist, setSelectedTherapist] = useState<Therapist | null>(null);
  const [isBookingPageOpen, setIsBookingPageOpen] = useState(false);

  const filteredAndSortedTherapists = useMemo(() => {
    let filtered = therapists.filter((therapist) => {
      const matchesSearch = therapist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        therapist.specialty.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesSpecialty = selectedSpecialty === 'All Specialties' ||
        therapist.specialty.includes(selectedSpecialty);

      return matchesSearch && matchesSpecialty;
    });

    // Sort therapists
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'experience':
          return b.yearsOfExperience - a.yearsOfExperience;
        case 'clients':
          return b.clientsHelped - a.clientsHelped;
        case 'availability':
          const aHasImmediate = a.availability.some(slot => slot.type === 'immediate' && slot.available);
          const bHasImmediate = b.availability.some(slot => slot.type === 'immediate' && slot.available);
          if (aHasImmediate && !bHasImmediate) return -1;
          if (!aHasImmediate && bHasImmediate) return 1;
          return 0;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedSpecialty, sortBy]);

  const handleBookNow = (therapist: Therapist) => {
    setSelectedTherapist(therapist);
    setIsBookingPageOpen(true);
  };

  const handleReschedule = (sessionId: string) => {
    alert(`Rescheduling session ${sessionId}`);
  };

  const handleCancel = (sessionId: string) => {
    alert(`Cancelling session ${sessionId}`);
  };

  const closeBookingPage = () => {
    setIsBookingPageOpen(false);
    setSelectedTherapist(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100">
      <Header currentView={currentView} onViewChange={setCurrentView} />
      
      {currentView === 'therapists' ? (
        <>
          <SearchAndFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedSpecialty={selectedSpecialty}
            onSpecialtyChange={setSelectedSpecialty}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
          
          <main className="max-w-7xl mx-auto px-4 py-8">
            {filteredAndSortedTherapists.length === 0 ? (
              <div className="text-center py-12">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 max-w-md mx-auto">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🔍</span>
                  </div>
                  <p className="text-xl font-bold text-gray-800 mb-2">No therapists found</p>
                  <p className="text-gray-600">Try adjusting your search criteria or filters</p>
                </div>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
                      Available Therapists ({filteredAndSortedTherapists.length})
                    </h2>
                    <p className="text-gray-700 text-lg font-medium">
                      Connect with licensed professionals ready to support your mental health journey
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredAndSortedTherapists.map((therapist) => (
                    <TherapistCard
                      key={therapist.id}
                      therapist={therapist}
                      onBookNow={handleBookNow}
                    />
                  ))}
                </div>
              </>
            )}
          </main>
        </>
      ) : (
        <UserSessions
          sessions={userSessions}
          onReschedule={handleReschedule}
          onCancel={handleCancel}
        />
      )}

      <BookingPage
        isOpen={isBookingPageOpen}
        onClose={closeBookingPage}
        therapist={selectedTherapist}
      />
    </div>
  );
}

export default App;