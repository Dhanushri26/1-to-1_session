import { BookingSession } from '../types';

export const userSessions: BookingSession[] = [
  {
    id: "session-1",
    therapistId: 1,
    therapistName: "Dr. Sarah Mitchell",
    date: "2025-01-12",
    time: "2:00 PM",
    status: "confirmed",
    type: "initial",
    sessionPrice: 120
  },
  {
    id: "session-2",
    therapistId: 3,
    therapistName: "Dr. Emily Rodriguez",
    date: "2025-01-10",
    time: "10:00 AM",
    status: "completed",
    type: "follow-up",
    sessionPrice: 130
  },
  {
    id: "session-3",
    therapistId: 2,
    therapistName: "Dr. Michael Chen",
    date: "2025-01-18",
    time: "1:00 PM",
    status: "confirmed",
    type: "follow-up",
    sessionPrice: 100
  }
];