import { db } from "./firebaseAdmin.js";
import type { MemberSpotlight, InsertMemberSpotlight } from "./storage.js";

export async function getMemberSpotlights(): Promise<MemberSpotlight[]> {
  const snapshot = await db.collection("memberSpotlights").get();
  return snapshot.docs.map(doc => ({ id: doc.id as unknown as number, ...doc.data() } as MemberSpotlight));
}

export async function getMemberSpotlight(id: number): Promise<MemberSpotlight | undefined> {
  const doc = await db.collection("memberSpotlights").doc(id.toString()).get();
  if (!doc.exists) return undefined;
  return { id, ...doc.data() } as MemberSpotlight;
}

export async function createMemberSpotlight(member: InsertMemberSpotlight): Promise<MemberSpotlight> {
  const ref = await db.collection("memberSpotlights").add(member);
  return { id: ref.id as unknown as number, ...member } as MemberSpotlight;
}
