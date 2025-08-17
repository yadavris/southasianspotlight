export class MemStorage {
    users = new Map();
    events = new Map();
    officers = new Map();
    memberSpotlights = new Map();
    announcements = new Map();
    galleryImages = new Map();
    contactMessages = new Map();
    suggestions = new Map();
    newsletterSubscribers = new Map();
    currentId = 1;
    constructor() {
        this.seedData();
    }
    seedData() {
        // Seed example officers
        const seedOfficers = [
            { name: "Aditi Venkataraman", position: "Co-President", bio: "CS major...", imageUrl: "https://i.ibb.co/6cmwqYSr/1.png", linkedinUrl: null, email: null, major: null },
            { name: "Lekisha Nagpal", position: "Co-President", bio: "Business major...", imageUrl: "https://i.ibb.co/CXZk3dF/2.png", linkedinUrl: null, email: null, major: null }
        ];
        seedOfficers.forEach(o => this.officers.set(this.currentId++, { ...o, id: this.currentId - 1 }));
    }
    async getUser(id) { return this.users.get(id); }
    async getUserByUsername(username) { return Array.from(this.users.values()).find(u => u.username === username); }
    async createUser(insertUser) { const id = this.currentId++; const user = { ...insertUser, id, username: insertUser.username ?? "", password: insertUser.password ?? "" }; this.users.set(id, user); return user; }
    async getEvents() { return Array.from(this.events.values()); }
    async getEvent(id) { return this.events.get(id); }
    async createEvent(event) { const id = this.currentId++; const newEvent = { ...event, id, registrationOpen: event.registrationOpen ?? false }; this.events.set(id, newEvent); return newEvent; }
    async getOfficers() { return Array.from(this.officers.values()); }
    async getOfficer(id) { return this.officers.get(id); }
    async createOfficer(officer) { const id = this.currentId++; const newOfficer = { ...officer, id, linkedinUrl: officer.linkedinUrl ?? null, email: officer.email ?? null, major: officer.major ?? null }; this.officers.set(id, newOfficer); return newOfficer; }
    async getMemberSpotlights() { return Array.from(this.memberSpotlights.values()); }
    async getMemberSpotlight(id) { return this.memberSpotlights.get(id); }
    async createMemberSpotlight(memberSpotlight) { const id = this.currentId++; const newMember = { ...memberSpotlight, id }; this.memberSpotlights.set(id, newMember); return newMember; }
    async getAnnouncements() { return Array.from(this.announcements.values()); }
    async getAnnouncement(id) { return this.announcements.get(id); }
    async createAnnouncement(announcement) { const id = this.currentId++; const newAnnouncement = { ...announcement, id, link: announcement.link ?? null }; this.announcements.set(id, newAnnouncement); return newAnnouncement; }
    async getGalleryImages() { return Array.from(this.galleryImages.values()); }
    async getGalleryImage(id) { return this.galleryImages.get(id); }
    async createGalleryImage(image) { const id = this.currentId++; const newImage = { ...image, id, description: image.description ?? null, eventDate: image.eventDate ?? null }; this.galleryImages.set(id, newImage); return newImage; }
    async getContactMessages() { return Array.from(this.contactMessages.values()); }
    async createContactMessage(msg) { const id = this.currentId++; const newMsg = { ...msg, id }; this.contactMessages.set(id, newMsg); return newMsg; }
    async getSuggestions() { return Array.from(this.suggestions.values()); }
    async createSuggestion(suggestion) { const id = this.currentId++; const newSuggestion = { ...suggestion, id }; this.suggestions.set(id, newSuggestion); return newSuggestion; }
    async getNewsletterSubscribers() { return Array.from(this.newsletterSubscribers.values()); }
    async createNewsletterSubscriber(subscriber) { const id = this.currentId++; const newSubscriber = { ...subscriber, id }; this.newsletterSubscribers.set(id, newSubscriber); return newSubscriber; }
}
export const storage = new MemStorage();
//# sourceMappingURL=index.js.map