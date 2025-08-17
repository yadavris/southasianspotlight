import { db } from "./firebaseAdmin.js";
import type { Officer, InsertOfficer } from "./storage.js";

export async function getOfficers(): Promise<Officer[]> {
  const snapshot = await db.collection("officers").get();
  return snapshot.docs.map(doc => ({ id: doc.id as unknown as number, ...doc.data() } as Officer));
}

export async function getOfficer(id: number): Promise<Officer | undefined> {
  const doc = await db.collection("officers").doc(id.toString()).get();
  if (!doc.exists) return undefined;
  return { id, ...doc.data() } as Officer;
}

export async function createOfficer(officer: InsertOfficer): Promise<Officer> {
  const ref = await db.collection("officers").add(officer);
  return { id: ref.id as unknown as number, ...officer } as Officer;
}
