import * as functions from "firebase-functions";
import { FirestoreStorage } from "./firestoreStorage.js";
import { MemStorage, storage as memStorage } from "./storage.js";
import type { Officer, Event, MemberSpotlight, Announcement, GalleryImage } from "./storage.js";

export const fsStorage = new FirestoreStorage();

// Example Firebase function
export const helloWorld = functions.https.onRequest((req, res) => {
  res.send("Hello from Firebase!");
});
