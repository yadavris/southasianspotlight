// migrateToFirestore.ts
import { storage } from "./storage";
import { db } from "./firebaseAdmin";
async function migrateCollection(collectionName, items) {
    const batch = db.batch();
    items.forEach((item) => {
        const docRef = db.collection(collectionName).doc(); // Firestore auto-generates ID
        batch.set(docRef, item);
    });
    await batch.commit();
    console.log(`Migrated ${items.length} documents to ${collectionName}`);
}
async function main() {
    try {
        // OFFICERS
        const officers = await storage.getOfficers();
        await migrateCollection("officers", officers.map(({ id, ...rest }) => rest));
        // EVENTS
        const events = await storage.getEvents();
        await migrateCollection("events", events.map(({ id, ...rest }) => rest));
        // MEMBER SPOTLIGHTS
        const spotlights = await storage.getMemberSpotlights();
        await migrateCollection("memberSpotlights", spotlights.map(({ id, ...rest }) => rest));
        // ANNOUNCEMENTS
        const announcements = await storage.getAnnouncements();
        await migrateCollection("announcements", announcements.map(({ id, ...rest }) => rest));
        // GALLERY IMAGES
        const galleryImages = await storage.getGalleryImages();
        await migrateCollection("galleryImages", galleryImages.map(({ id, ...rest }) => rest));
        console.log("Migration completed successfully!");
    }
    catch (err) {
        console.error("Migration failed:", err);
    }
}
main();
//# sourceMappingURL=migrateToFirestore.js.map