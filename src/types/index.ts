export interface Therapist {
  id: number;
  name: string;
  title: string;
  yearsOfExperience: number;
  specialty: string[];
  clientsHelped: number;
  rating: number;
  image: string;
  availability: SessionSlot[];
  nextAvailable: string;
  sessionPrice: number;
  languages: string[];
  education: string;
}

export interface SessionSlot {
  id: string;
  date: string;
  time: string;
  available: boolean;
  type: 'immediate' | 'scheduled';
}

export interface BookingSession {
  id: string;
  therapistId: number;
  therapistName: string;
  date: string;
  time: string;
  status: 'confirmed' | 'pending' | 'completed';
  type: 'initial' | 'follow-up';
  sessionPrice: number;
}