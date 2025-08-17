import { db } from "./firebaseAdmin";
export class FirestoreStorage {
    // ---------------- OFFICERS ----------------
    async getOfficers() {
        const snapshot = await db.collection("officers").get();
        return snapshot.docs.map(doc => {
            return { id: doc.id, ...doc.data() };
        });
    }
    async createOfficer(officer) {
        const docRef = await db.collection("officers").add(officer);
        const doc = await docRef.get();
        return { id: doc.id, ...doc.data() };
    }
    // ---------------- EVENTS ----------------
    async getEvents() {
        const snapshot = await db.collection("events").get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }
    async createEvent(event) {
        const docRef = await db.collection("events").add(event);
        const doc = await docRef.get();
        return { id: doc.id, ...doc.data() };
    }
    // ---------------- MEMBER SPOTLIGHTS ----------------
    async getMemberSpotlights() {
        const snapshot = await db.collection("memberSpotlights").get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }
    async createMemberSpotlight(member) {
        const docRef = await db.collection("memberSpotlights").add(member);
        const doc = await docRef.get();
        return { id: doc.id, ...doc.data() };
    }
    // ---------------- ANNOUNCEMENTS ----------------
    async getAnnouncements() {
        const snapshot = await db.collection("announcements").get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }
    async createAnnouncement(announcement) {
        const docRef = await db.collection("announcements").add(announcement);
        const doc = await docRef.get();
        return { id: doc.id, ...doc.data() };
    }
    // ---------------- GALLERY IMAGES ----------------
    async getGalleryImages() {
        const snapshot = await db.collection("galleryImages").get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }
    async createGalleryImage(image) {
        const docRef = await db.collection("galleryImages").add(image);
        const doc = await docRef.get();
        return { id: doc.id, ...doc.data() };
    }
    // ---------------- CONTACT MESSAGES ----------------
    async getContactMessages() {
        const snapshot = await db.collection("contactMessages").get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }
    async createContactMessage(message) {
        const docRef = await db.collection("contactMessages").add(message);
        const doc = await docRef.get();
        return { id: doc.id, ...doc.data() };
    }
    // ---------------- SUGGESTIONS ----------------
    async getSuggestions() {
        const snapshot = await db.collection("suggestions").get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }
    async createSuggestion(suggestion) {
        const docRef = await db.collection("suggestions").add(suggestion);
        const doc = await docRef.get();
        return { id: doc.id, ...doc.data() };
    }
    // ---------------- NEWSLETTER SUBSCRIBERS ----------------
    async getNewsletterSubscribers() {
        const snapshot = await db.collection("newsletterSubscribers").get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }
    async createNewsletterSubscriber(subscriber) {
        const docRef = await db.collection("newsletterSubscribers").add(subscriber);
        const doc = await docRef.get();
        return { id: doc.id, ...doc.data() };
    }
}
//# sourceMappingURL=firestoreStorage.js.map