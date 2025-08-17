import { db } from "./firebaseAdmin.js";
import type {
  IStorage,
  User, InsertUser,
  Event, InsertEvent,
  Officer, InsertOfficer,
  MemberSpotlight, InsertMemberSpotlight,
  Announcement, InsertAnnouncement,
  GalleryImage, InsertGalleryImage,
  ContactMessage, InsertContactMessage,
  Suggestion, InsertSuggestion,
  NewsletterSubscriber, InsertNewsletterSubscriber
} from "./storage.js";

export class FirestoreStorage implements IStorage {
  // Users
  async getUser(id: number): Promise<User | undefined> {
    const doc = await db.collection("users").doc(id.toString()).get();
    if (!doc.exists) return undefined;
    return { id, ...doc.data() } as User;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const snapshot = await db.collection("users").where("username", "==", username).get();
    if (snapshot.empty) return undefined;
    const doc = snapshot.docs[0];
    return { id: doc.id as unknown as number, ...doc.data() } as User;
  }

  async createUser(user: InsertUser): Promise<User> {
    const ref = await db.collection("users").add(user);
    return { id: ref.id as unknown as number, ...user } as User;
  }

  // Events
  async getEvents(): Promise<Event[]> {
    const snapshot = await db.collection("events").get();
    return snapshot.docs.map(doc => ({ id: doc.id as unknown as number, ...doc.data() } as Event));
  }

  async getEvent(id: number): Promise<Event | undefined> {
    const doc = await db.collection("events").doc(id.toString()).get();
    if (!doc.exists) return undefined;
    return { id, ...doc.data() } as Event;
  }

  async createEvent(event: InsertEvent): Promise<Event> {
    const ref = await db.collection("events").add(event);
    return { id: ref.id as unknown as number, ...event } as Event;
  }

  // Implement other collections (Officers, MemberSpotlights, Announcements, etc.) similarly...
}
