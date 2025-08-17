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
        // --- Seed Officers ---
        const seedOfficers = [
            { name: "Aditi Venkataraman", position: "Co-President", bio: "CS major...", imageUrl: "https://i.ibb.co/6cmwqYSr/1.png", linkedinUrl: "", email: "", major: "" },
            { name: "Lekisha Nagpal", position: "Co-President", bio: "Business major...", imageUrl: "https://i.ibb.co/CXZk3dF/2.png", linkedinUrl: "", email: "", major: "" },
            { name: "Vibhan Emmi", position: "Vice President", bio: "Psychology major...", imageUrl: "https://i.ibb.co/ycbW71tF/3.png", linkedinUrl: "", email: "", major: "" }
        ];
        seedOfficers.forEach(officer => {
            const id = this.currentId++;
            this.officers.set(id, { ...officer, id });
        });
        // --- Seed Events ---
        const seedEvents = [
            { title: "Camp Cavalier Showcase", description: "Come learn about our club...", date: "2025-08-02", time: "5:00 - 8:00 PM", location: "College Park High School", category: "Club showcase", imageUrl: "https://i.ibb.co/3ykQp7fC/Untitled-design-3.png", registrationOpen: true }
        ];
        seedEvents.forEach(event => {
            const id = this.currentId++;
            this.events.set(id, { ...event, id });
        });
        // --- Seed Announcements ---
        const seedAnnouncements = [
            { title: "Diwali Celebration Planning", description: "Join us...", category: "Club News", categoryColor: "bg-orange-500", icon: "fas fa-bullhorn", date: "2 days ago", link: "" },
            { title: "Temple Volunteer Opportunity", description: "Local Hindu temple...", category: "Community Service", categoryColor: "bg-green-500", icon: "fas fa-hands-helping", date: "5 days ago", link: "https://www.hindutempleatlanta.org/volunteer" }
        ];
        seedAnnouncements.forEach(announcement => {
            const id = this.currentId++;
            this.announcements.set(id, { ...announcement, id });
        });
        // --- Seed Member Spotlights ---
        const seedMembers = [
            { name: "Raj Mehta", classYear: "Class of 2024", major: "CS", quote: "Being part of SAC...", achievement: "Dean's List", joinedDate: "Fall 2021", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" }
        ];
        seedMembers.forEach(member => {
            const id = this.currentId++;
            this.memberSpotlights.set(id, { ...member, id });
        });
        // --- Seed Gallery Images ---
        const seedGallery = [
            { title: "SEA Club Colab Meeting", description: "", imageUrl: "https://i.ibb.co/bMvp2v4j/saseaclub.png", category: "Club Meeting", eventDate: "" }
        ];
        seedGallery.forEach(image => {
            const id = this.currentId++;
            this.galleryImages.set(id, { ...image, id });
        });
    }
    // ------------------- Storage Methods -------------------
    async getUser(id) { return this.users.get(id); }
    async getUserByUsername(username) { return Array.from(this.users.values()).find(u => u.username === username); }
    async createUser(insertUser) { const id = this.currentId++; const user = { ...insertUser, id }; this.users.set(id, user); return user; }
    async getEvents() { return Array.from(this.events.values()); }
    async getEvent(id) { return this.events.get(id); }
    async createEvent(event) { const id = this.currentId++; const newEvent = { ...event, id }; this.events.set(id, newEvent); return newEvent; }
    async getOfficers() { return Array.from(this.officers.values()); }
    async getOfficer(id) { return this.officers.get(id); }
    async createOfficer(officer) { const id = this.currentId++; const newOfficer = { ...officer, id }; this.officers.set(id, newOfficer); return newOfficer; }
    async getMemberSpotlights() { return Array.from(this.memberSpotlights.values()); }
    async getMemberSpotlight(id) { return this.memberSpotlights.get(id); }
    async createMemberSpotlight(memberSpotlight) { const id = this.currentId++; const newMember = { ...memberSpotlight, id }; this.memberSpotlights.set(id, newMember); return newMember; }
    async getAnnouncements() { return Array.from(this.announcements.values()); }
    async getAnnouncement(id) { return this.announcements.get(id); }
    async createAnnouncement(announcement) { const id = this.currentId++; const newAnnouncement = { ...announcement, id }; this.announcements.set(id, newAnnouncement); return newAnnouncement; }
    async getGalleryImages() { return Array.from(this.galleryImages.values()); }
    async getGalleryImage(id) { return this.galleryImages.get(id); }
    async createGalleryImage(image) { const id = this.currentId++; const newImage = { ...image, id }; this.galleryImages.set(id, newImage); return newImage; }
    async getContactMessages() { return Array.from(this.contactMessages.values()); }
    async createContactMessage(msg) { const id = this.currentId++; const newMsg = { ...msg, id }; this.contactMessages.set(id, newMsg); return newMsg; }
    async getSuggestions() { return Array.from(this.suggestions.values()); }
    async createSuggestion(suggestion) { const id = this.currentId++; const newSuggestion = { ...suggestion, id }; this.suggestions.set(id, newSuggestion); return newSuggestion; }
    async getNewsletterSubscribers() { return Array.from(this.newsletterSubscribers.values()); }
    async createNewsletterSubscriber(subscriber) { const id = this.currentId++; const newSubscriber = { ...subscriber, id }; this.newsletterSubscribers.set(id, newSubscriber); return newSubscriber; }
}
// Export singleton
export const storage = new MemStorage();
//# sourceMappingURL=storage.js.map