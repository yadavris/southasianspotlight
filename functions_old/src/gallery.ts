import { db } from "./firebaseAdmin.js";
import type { GalleryImage, InsertGalleryImage } from "./storage.js";

export async function getGalleryImages(): Promise<GalleryImage[]> {
  const snapshot = await db.collection("gallery").get();
  return snapshot.docs.map(doc => ({ id: doc.id as unknown as number, ...doc.data() } as GalleryImage));
}

export async function getGalleryImage(id: number): Promise<GalleryImage | undefined> {
  const doc = await db.collection("gallery").doc(id.toString()).get();
  if (!doc.exists) return undefined;
  return { id, ...doc.data() } as GalleryImage;
}

export async function createGalleryImage(image: InsertGalleryImage): Promise<GalleryImage> {
  const ref = await db.collection("gallery").add(image);
  return { id: ref.id as unknown as number, ...image } as GalleryImage;
}
