import { setGlobalOptions } from "firebase-functions";
import { onRequest } from "firebase-functions/https";
import * as logger from "firebase-functions/logger";
// Firestore storage class
import { FirestoreStorage } from "./firestoreStorage";
const storage = new FirestoreStorage();
// Set max instances for Firebase Functions
setGlobalOptions({ maxInstances: 10 });
// Generic error handler
function handleError(res, err) {
    logger.error(err);
    res.status(500).json({ error: "Internal Server Error" });
}
// ----------------------
// OFFICERS
// ----------------------
export const getOfficers = onRequest(async (req, res) => {
    try {
        const officers = await storage.getOfficers();
        res.json(officers);
    }
    catch (err) {
        handleError(res, err);
    }
});
// ----------------------
// EVENTS
// ----------------------
export const getEvents = onRequest(async (req, res) => {
    try {
        const events = await storage.getEvents();
        res.json(events);
    }
    catch (err) {
        handleError(res, err);
    }
});
// ----------------------
// MEMBER SPOTLIGHTS
// ----------------------
export const getMemberSpotlights = onRequest(async (req, res) => {
    try {
        const spotlights = await storage.getMemberSpotlights();
        res.json(spotlights);
    }
    catch (err) {
        handleError(res, err);
    }
});
// ----------------------
// ANNOUNCEMENTS
// ----------------------
export const getAnnouncements = onRequest(async (req, res) => {
    try {
        const announcements = await storage.getAnnouncements();
        res.json(announcements);
    }
    catch (err) {
        handleError(res, err);
    }
});
// ----------------------
// GALLERY IMAGES
// ----------------------
export const getGalleryImages = onRequest(async (req, res) => {
    try {
        const images = await storage.getGalleryImages();
        res.json(images);
    }
    catch (err) {
        handleError(res, err);
    }
});
//# sourceMappingURL=index.js.map