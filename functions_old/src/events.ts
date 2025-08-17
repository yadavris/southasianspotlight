import { db } from "./firebaseAdmin.js";
import type { Event, InsertEvent } from "./storage.js";

export async function getEvents(): Promise<Event[]> {
  const snapshot = await db.collection("events").get();
  return snapshot.docs.map(doc => ({ id: doc.id as unknown as number, ...doc.data() } as Event));
}

export async function getEvent(id: number): Promise<Event | undefined> {
  const doc = await db.collection("events").doc(id.toString()).get();
  if (!doc.exists) return undefined;
  return { id, ...doc.data() } as Event;
}

export async function createEvent(event: InsertEvent): Promise<Event> {
  const ref = await db.collection("events").add(event);
  return { id: ref.id as unknown as number, ...event } as Event;
}
