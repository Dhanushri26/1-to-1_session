import { Therapist } from '../types';

export const therapists: Therapist[] = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    title: "Clinical Psychologist",
    yearsOfExperience: 12,
    specialty: ["Anxiety Disorders", "Depression", "Trauma Therapy"],
    clientsHelped: 850,
    rating: 4.9,
    image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    availability: [
      { id: "1a", date: "2025-01-15", time: "10:00 AM", available: true, type: "immediate" },
      { id: "1b", date: "2025-01-15", time: "2:00 PM", available: true, type: "scheduled" },
      { id: "1c", date: "2025-01-16", time: "11:00 AM", available: true, type: "scheduled" },
    ],
    nextAvailable: "Today at 10:00 AM",
    sessionPrice: 120,
    languages: ["English", "Spanish"],
    education: "PhD in Clinical Psychology - Harvard University"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    title: "Licensed Therapist",
    yearsOfExperience: 8,
    specialty: ["Relationship Counseling", "Family Therapy", "Stress Management"],
    clientsHelped: 620,
    rating: 4.8,
    image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    availability: [
      { id: "2a", date: "2025-01-15", time: "1:00 PM", available: true, type: "immediate" },
      { id: "2b", date: "2025-01-15", time: "4:00 PM", available: true, type: "scheduled" },
      { id: "2c", date: "2025-01-17", time: "9:00 AM", available: true, type: "scheduled" },
    ],
    nextAvailable: "Today at 1:00 PM",
    sessionPrice: 100,
    languages: ["English", "Mandarin"],
    education: "MA in Marriage & Family Therapy - UCLA"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    title: "Behavioral Therapist",
    yearsOfExperience: 15,
    specialty: ["CBT", "ADHD", "Autism Spectrum", "Child Psychology"],
    clientsHelped: 1200,
    rating: 4.9,
    image: "https://images.pexels.com/photos/5327647/pexels-photo-5327647.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    availability: [
      { id: "3a", date: "2025-01-15", time: "3:00 PM", available: true, type: "scheduled" },
      { id: "3b", date: "2025-01-16", time: "10:00 AM", available: true, type: "immediate" },
      { id: "3c", date: "2025-01-16", time: "2:00 PM", available: true, type: "scheduled" },
    ],
    nextAvailable: "Tomorrow at 10:00 AM",
    sessionPrice: 130,
    languages: ["English", "Spanish", "Portuguese"],
    education: "PhD in Behavioral Psychology - Stanford University"
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    title: "Addiction Counselor",
    yearsOfExperience: 10,
    specialty: ["Substance Abuse", "Addiction Recovery", "Group Therapy"],
    clientsHelped: 750,
    rating: 4.7,
    image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    availability: [
      { id: "4a", date: "2025-01-15", time: "11:00 AM", available: true, type: "immediate" },
      { id: "4b", date: "2025-01-15", time: "5:00 PM", available: true, type: "scheduled" },
      { id: "4c", date: "2025-01-18", time: "9:00 AM", available: true, type: "scheduled" },
    ],
    nextAvailable: "Today at 11:00 AM",
    sessionPrice: 110,
    languages: ["English"],
    education: "MA in Addiction Counseling - NYU"
  },
  {
    id: 5,
    name: "Dr. Lisa Thompson",
    title: "Trauma Specialist",
    yearsOfExperience: 14,
    specialty: ["PTSD", "Trauma Recovery", "EMDR", "Crisis Intervention"],
    clientsHelped: 950,
    rating: 4.9,
    image: "https://images.pexels.com/photos/5327665/pexels-photo-5327665.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    availability: [
      { id: "5a", date: "2025-01-16", time: "9:00 AM", available: true, type: "immediate" },
      { id: "5b", date: "2025-01-16", time: "1:00 PM", available: true, type: "scheduled" },
      { id: "5c", date: "2025-01-17", time: "11:00 AM", available: true, type: "scheduled" },
    ],
    nextAvailable: "Tomorrow at 9:00 AM",
    sessionPrice: 140,
    languages: ["English", "French"],
    education: "PhD in Trauma Psychology - Johns Hopkins University"
  },
  {
    id: 6,
    name: "Dr. Robert Kim",
    title: "Adolescent Counselor",
    yearsOfExperience: 9,
    specialty: ["Teen Counseling", "Academic Stress", "Social Anxiety", "Identity Issues"],
    clientsHelped: 580,
    rating: 4.8,
    image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    availability: [
      { id: "6a", date: "2025-01-15", time: "4:00 PM", available: true, type: "scheduled" },
      { id: "6b", date: "2025-01-17", time: "10:00 AM", available: true, type: "immediate" },
      { id: "6c", date: "2025-01-17", time: "3:00 PM", available: true, type: "scheduled" },
    ],
    nextAvailable: "Friday at 10:00 AM",
    sessionPrice: 95,
    languages: ["English", "Korean"],
    education: "MA in Adolescent Psychology - University of Chicago"
  }
];