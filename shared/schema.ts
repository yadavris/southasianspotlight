export interface User {
  id: number;
  username: string;
  password: string;
}

export interface InsertUser {
  username: string;
  password: string;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  imageUrl: string;
  registrationOpen: boolean;
}

export interface InsertEvent {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  imageUrl: string;
  registrationOpen?: boolean;
}

export interface Officer {
  id: number;
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
  linkedinUrl: string | null;
  email: string | null;
  major: string | null;
}

export interface InsertOfficer {
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
  linkedinUrl?: string | null;
  email?: string | null;
  major?: string | null;
}

export interface MemberSpotlight {
  id: number;
  name: string;
  classYear: string;
  major: string;
  quote: string;
  achievement: string;
  joinedDate: string;
  imageUrl: string;
}

export interface InsertMemberSpotlight {
  name: string;
  classYear: string;
  major: string;
  quote: string;
  achievement: string;
  joinedDate: string;
  imageUrl: string;
}

export interface Announcement {
  id: number;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  icon: string;
  date: string;
  link: string | null;
}

export interface InsertAnnouncement {
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  icon: string;
  date: string;
  link?: string | null;
}

export interface GalleryImage {
  id: number;
  title: string;
  description: string | null;
  category: string;
  imageUrl: string;
  eventDate: string | null;
}

export interface InsertGalleryImage {
  title: string;
  description?: string | null;
  category: string;
  imageUrl: string;
  eventDate?: string | null;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  submittedAt: string;
}

export interface InsertContactMessage {
  name: string;
  email: string;
  message: string;
  submittedAt: string;
}

export interface Suggestion {
  id: number;
  name: string;
  category: string;
  email: string;
  submittedAt: string;
  suggestion: string;
}

export interface InsertSuggestion {
  name: string;
  category: string;
  email: string;
  submittedAt: string;
  suggestion: string;
}

export interface NewsletterSubscriber {
  id: number;
  email: string;
  subscribedAt: string;
}

export interface InsertNewsletterSubscriber {
  email: string;
  subscribedAt: string;
}
