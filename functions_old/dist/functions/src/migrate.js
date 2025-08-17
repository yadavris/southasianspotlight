import { FirestoreStorage } from "./firestoreStorage";
import { MemStorage } from "./storage";
async function migrate() {
    const mem = new MemStorage();
    const fs = new FirestoreStorage();
    // ---------------- OFFICERS ----------------
    const officers = await mem.getOfficers();
    for (const officer of officers) {
        await fs.createOfficer(officer);
    }
    // ---------------- EVENTS ----------------
    const events = await mem.getEvents();
    for (const event of events) {
        await fs.createEvent(event);
    }
    // ---------------- MEMBER SPOTLIGHTS ----------------
    const spotlights = await mem.getMemberSpotlights();
    for (const spotlight of spotlights) {
        await fs.createMemberSpotlight(spotlight);
    }
    // ---------------- ANNOUNCEMENTS ----------------
    const announcements = await mem.getAnnouncements();
    for (const announcement of announcements) {
        await fs.createAnnouncement(announcement);
    }
    // ---------------- GALLERY IMAGES ----------------
    const galleryImages = await mem.getGalleryImages();
    for (const image of galleryImages) {
        await fs.createGalleryImage(image);
    }
    // ---------------- CONTACT MESSAGES ----------------
    const messages = await mem.getContactMessages();
    for (const message of messages) {
        await fs.createContactMessage(message);
    }
    // ---------------- SUGGESTIONS ----------------
    const suggestions = await mem.getSuggestions();
    for (const suggestion of suggestions) {
        await fs.createSuggestion(suggestion);
    }
    // ---------------- NEWSLETTER SUBSCRIBERS ----------------
    const subscribers = await mem.getNewsletterSubscribers();
    for (const subscriber of subscribers) {
        await fs.createNewsletterSubscriber(subscriber);
    }
    console.log("Migration complete!");
}
migrate().catch(console.error);
//# sourceMappingURL=migrate.js.map