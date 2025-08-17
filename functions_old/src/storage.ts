import {
  User, InsertUser,
  Event, InsertEvent,
  Officer, InsertOfficer,
  MemberSpotlight, InsertMemberSpotlight,
  Announcement, InsertAnnouncement,
  GalleryImage, InsertGalleryImage,
  ContactMessage, InsertContactMessage,
  Suggestion, InsertSuggestion,
  NewsletterSubscriber, InsertNewsletterSubscriber
} from "../../shared/schema.js";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getEvents(): Promise<Event[]>;
  getEvent(id: number): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;
  getOfficers(): Promise<Officer[]>;
  getOfficer(id: number): Promise<Officer | undefined>;
  createOfficer(officer: InsertOfficer): Promise<Officer>;
  getMemberSpotlights(): Promise<MemberSpotlight[]>;
  getMemberSpotlight(id: number): Promise<MemberSpotlight | undefined>;
  createMemberSpotlight(memberSpotlight: InsertMemberSpotlight): Promise<MemberSpotlight>;
  getAnnouncements(): Promise<Announcement[]>;
  getAnnouncement(id: number): Promise<Announcement | undefined>;
  createAnnouncement(announcement: InsertAnnouncement): Promise<Announcement>;
  getGalleryImages(): Promise<GalleryImage[]>;
  getGalleryImage(id: number): Promise<GalleryImage | undefined>;
  createGalleryImage(galleryImage: InsertGalleryImage): Promise<GalleryImage>;
  getContactMessages(): Promise<ContactMessage[]>;
  createContactMessage(contactMessage: InsertContactMessage): Promise<ContactMessage>;
  getSuggestions(): Promise<Suggestion[]>;
  createSuggestion(suggestion: InsertSuggestion): Promise<Suggestion>;
  getNewsletterSubscribers(): Promise<NewsletterSubscriber[]>;
  createNewsletterSubscriber(subscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber>;
}

export class MemStorage implements IStorage {
  private users = new Map<number, User>();
  private events = new Map<number, Event>();
  private officers = new Map<number, Officer>();
  private memberSpotlights = new Map<number, MemberSpotlight>();
  private announcements = new Map<number, Announcement>();
  private galleryImages = new Map<number, GalleryImage>();
  private contactMessages = new Map<number, ContactMessage>();
  private suggestions = new Map<number, Suggestion>();
  private newsletterSubscribers = new Map<number, NewsletterSubscriber>();
  private currentId = 1;

  constructor() {
    this.seedData();
  }

  private seedData() {
    // Seed officers, events, announcements, member spotlights, gallery images...
    // Use same pattern as in your original file
    // Make sure all objects have all required fields
  }

  // ------------------- Storage Methods -------------------
  async getUser(id: number) { return this.users.get(id); }
  async getUserByUsername(username: string) { return Array.from(this.users.values()).find(u => u.username === username); }
  async createUser(insertUser: InsertUser) {
    const id = this.currentId++;
    const user: User = { id, username: insertUser.username, password: insertUser.password };
    this.users.set(id, user);
    return user;
  }

  async getEvents() { return Array.from(this.events.values()); }
  async getEvent(id: number) { return this.events.get(id); }
  async createEvent(event: InsertEvent) {
    const id = this.currentId++;
    const newEvent: Event = {
      id, title: event.title, description: event.description, date: event.date,
      time: event.time, location: event.location, category: event.category,
      imageUrl: event.imageUrl, registrationOpen: event.registrationOpen ?? false
    };
    this.events.set(id, newEvent);
    return newEvent;
  }

  async getOfficers() { return Array.from(this.officers.values()); }
  async getOfficer(id: number) { return this.officers.get(id); }
  async createOfficer(officer: InsertOfficer) {
    const id = this.currentId++;
    const newOfficer: Officer = {
      id, name: officer.name, position: officer.position, bio: officer.bio,
      imageUrl: officer.imageUrl, linkedinUrl: officer.linkedinUrl ?? null,
      email: officer.email ?? null, major: officer.major ?? null
    };
    this.officers.set(id, newOfficer);
    return newOfficer;
  }

  async getMemberSpotlights() { return Array.from(this.memberSpotlights.values()); }
  async getMemberSpotlight(id: number) { return this.memberSpotlights.get(id); }
  async createMemberSpotlight(memberSpotlight: InsertMemberSpotlight) {
    const id = this.currentId++;
    const newMember: MemberSpotlight = { id, ...memberSpotlight };
    this.memberSpotlights.set(id, newMember);
    return newMember;
  }

  async getAnnouncements() { return Array.from(this.announcements.values()); }
  async getAnnouncement(id: number) { return this.announcements.get(id); }
  async createAnnouncement(announcement: InsertAnnouncement) {
    const id = this.currentId++;
    const newAnnouncement: Announcement = {
      id, ...announcement, link: announcement.link ?? null
    };
    this.announcements.set(id, newAnnouncement);
    return newAnnouncement;
  }

  async getGalleryImages() { return Array.from(this.galleryImages.values()); }
  async getGalleryImage(id: number) { return this.galleryImages.get(id); }
  async createGalleryImage(image: InsertGalleryImage) {
    const id = this.currentId++;
    const newImage: GalleryImage = {
      id, title: image.title, description: image.description ?? null,
      category: image.category, imageUrl: image.imageUrl,
      eventDate: image.eventDate ?? null
    };
    this.galleryImages.set(id, newImage);
    return newImage;
  }

  async getContactMessages() { return Array.from(this.contactMessages.values()); }
  async createContactMessage(msg: InsertContactMessage) {
    const id = this.currentId++;
    const newMsg: ContactMessage = { id, ...msg };
    this.contactMessages.set(id, newMsg);
    return newMsg;
  }

  async getSuggestions() { return Array.from(this.suggestions.values()); }
  async createSuggestion(suggestion: InsertSuggestion) {
    const id = this.currentId++;
    const newSuggestion: Suggestion = { id, ...suggestion };
    this.suggestions.set(id, newSuggestion);
    return newSuggestion;
  }

  async getNewsletterSubscribers() { return Array.from(this.newsletterSubscribers.values()); }
  async createNewsletterSubscriber(subscriber: InsertNewsletterSubscriber) {
    const id = this.currentId++;
    const newSubscriber: NewsletterSubscriber = { id, ...subscriber };
    this.newsletterSubscribers.set(id, newSubscriber);
    return newSubscriber;
  }
}

// singleton
export const storage = new MemStorage();
