import { 
  users, 
  events, 
  officers, 
  memberSpotlights, 
  announcements, 
  galleryImages, 
  contactMessages, 
  suggestions, 
  newsletterSubscribers,
  type User, 
  type InsertUser, 
  type Event, 
  type InsertEvent, 
  type Officer, 
  type InsertOfficer, 
  type MemberSpotlight, 
  type InsertMemberSpotlight, 
  type Announcement, 
  type InsertAnnouncement, 
  type GalleryImage, 
  type InsertGalleryImage, 
  type ContactMessage, 
  type InsertContactMessage, 
  type Suggestion, 
  type InsertSuggestion, 
  type NewsletterSubscriber, 
  type InsertNewsletterSubscriber 
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getEvents(): Promise<Event[]>;
  getEvent(id: number): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;
  
  getOfficers(): Promise<Officer[]>;
  getOfficer(id: number): Promise<Officer | undefined>;
  createOfficer(officer: InsertOfficer): Promise<Officer>;
  
  getMemberSpotlights(): Promise<MemberSpotlight[]>;
  getMemberSpotlight(id: number): Promise<MemberSpotlight | undefined>;
  createMemberSpotlight(memberSpotlight: InsertMemberSpotlight): Promise<MemberSpotlight>;
  
  getAnnouncements(): Promise<Announcement[]>;
  getAnnouncement(id: number): Promise<Announcement | undefined>;
  createAnnouncement(announcement: InsertAnnouncement): Promise<Announcement>;
  
  getGalleryImages(): Promise<GalleryImage[]>;
  getGalleryImage(id: number): Promise<GalleryImage | undefined>;
  createGalleryImage(galleryImage: InsertGalleryImage): Promise<GalleryImage>;
  
  getContactMessages(): Promise<ContactMessage[]>;
  createContactMessage(contactMessage: InsertContactMessage): Promise<ContactMessage>;
  
  getSuggestions(): Promise<Suggestion[]>;
  createSuggestion(suggestion: InsertSuggestion): Promise<Suggestion>;
  
  getNewsletterSubscribers(): Promise<NewsletterSubscriber[]>;
  createNewsletterSubscriber(subscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private events: Map<number, Event>;
  private officers: Map<number, Officer>;
  private memberSpotlights: Map<number, MemberSpotlight>;
  private announcements: Map<number, Announcement>;
  private galleryImages: Map<number, GalleryImage>;
  private contactMessages: Map<number, ContactMessage>;
  private suggestions: Map<number, Suggestion>;
  private newsletterSubscribers: Map<number, NewsletterSubscriber>;
  private currentId: number;

  constructor() {
    this.users = new Map();
    this.events = new Map();
    this.officers = new Map();
    this.memberSpotlights = new Map();
    this.announcements = new Map();
    this.galleryImages = new Map();
    this.contactMessages = new Map();
    this.suggestions = new Map();
    this.newsletterSubscribers = new Map();
    this.currentId = 1;
    this.seedData();
  }

  private seedData() {
    // Seed officers
    const seedOfficers = [
      {
        name: "Priya Sharma",
        position: "President",
        bio: "Computer Science major passionate about bridging cultures and creating inclusive spaces for South Asian students.",
        imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b66639c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
        linkedinUrl: "#",
        email: "priya.sharma@university.edu",
        major: "Computer Science"
      },
      {
        name: "Arjun Patel",
        position: "Vice President",
        bio: "Business Administration student with a focus on event planning and community outreach programs.",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
        linkedinUrl: "#",
        email: "arjun.patel@university.edu",
        major: "Business Administration"
      },
      {
        name: "Kavya Reddy",
        position: "Secretary",
        bio: "Psychology major dedicated to fostering mental health awareness and cultural identity within our community.",
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
        linkedinUrl: "#",
        email: "kavya.reddy@university.edu",
        major: "Psychology"
      }
    ];

    seedOfficers.forEach(officer => {
      this.officers.set(this.currentId, { ...officer, id: this.currentId });
      this.currentId++;
    });

    // Seed events
    const seedEvents = [
      {
        title: "Holi Festival Celebration",
        description: "Join us for the festival of colors! Traditional music, dance, and authentic Indian cuisine.",
        date: "2024-03-15",
        time: "6:00 PM - 9:00 PM",
        location: "Student Union Building",
        category: "Cultural Event",
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200",
        registrationOpen: true
      },
      {
        title: "Bollywood Dance Workshop",
        description: "Learn traditional Bollywood dance moves from professional instructors. All skill levels welcome!",
        date: "2024-03-22",
        time: "7:00 PM - 9:00 PM",
        location: "Dance Studio A",
        category: "Workshop",
        imageUrl: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200",
        registrationOpen: true
      },
      {
        title: "Traditional Cooking Class",
        description: "Learn to cook authentic South Asian dishes with traditional spices and techniques.",
        date: "2024-03-29",
        time: "5:00 PM - 8:00 PM",
        location: "Culinary Arts Center",
        category: "Cultural Food",
        imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200",
        registrationOpen: true
      }
    ];

    seedEvents.forEach(event => {
      this.events.set(this.currentId, { ...event, id: this.currentId });
      this.currentId++;
    });

    // Seed announcements
    const seedAnnouncements = [
      {
        title: "Diwali Celebration Planning",
        description: "Join us for our annual Diwali celebration planning meeting. We need volunteers for decorations, food coordination, and cultural performances.",
        category: "Club News",
        categoryColor: "bg-orange-500",
        icon: "fas fa-bullhorn",
        date: "2 days ago",
        link: "#"
      },
      {
        title: "Temple Volunteer Opportunity",
        description: "Local Hindu temple needs volunteers for weekend community service. Great opportunity to give back and earn service hours.",
        category: "Community Service",
        categoryColor: "bg-green-500",
        icon: "fas fa-hands-helping",
        date: "5 days ago",
        link: "#"
      },
      {
        title: "Share Your Ideas",
        description: "Have suggestions for future events or activities? Use our suggestion box to share your ideas with the club leadership.",
        category: "Suggestions",
        categoryColor: "bg-purple-500",
        icon: "fas fa-lightbulb",
        date: "1 week ago",
        link: "#"
      }
    ];

    seedAnnouncements.forEach(announcement => {
      this.announcements.set(this.currentId, { ...announcement, id: this.currentId });
      this.currentId++;
    });

    // Seed member spotlights
    const seedMemberSpotlights = [
      {
        name: "Raj Mehta",
        classYear: "Class of 2024",
        major: "Computer Science",
        quote: "Being part of the South Asian Club has been transformative for me. It's helped me connect with my roots while building lasting friendships. The cultural events and workshops have enriched my college experience immensely.",
        achievement: "Dean's List",
        joinedDate: "Fall 2021",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
      },
      {
        name: "Sana Khan",
        classYear: "Class of 2025",
        major: "Pre-Med",
        quote: "The South Asian Club provided me with a supportive community during my challenging pre-med journey. The mentorship program and study groups have been invaluable for my academic success.",
        achievement: "Research Award",
        joinedDate: "Spring 2022",
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
      }
    ];

    seedMemberSpotlights.forEach(member => {
      this.memberSpotlights.set(this.currentId, { ...member, id: this.currentId });
      this.currentId++;
    });

    // Seed gallery images
    const seedGalleryImages = [
      {
        title: "Diwali Celebration",
        description: "Beautiful moments from our Diwali celebration with diyas and rangoli",
        imageUrl: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
        category: "Cultural Event",
        eventDate: "2023-11-12"
      },
      {
        title: "Club Meeting",
        description: "Students engaged in cultural club activities and discussions",
        imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
        category: "Club Meeting",
        eventDate: "2023-10-15"
      },
      {
        title: "Traditional Dance Performance",
        description: "Beautiful traditional dance performance with colorful costumes",
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
        category: "Cultural Performance",
        eventDate: "2023-09-20"
      },
      {
        title: "Temple Visit",
        description: "Community service at local Hindu temple",
        imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
        category: "Community Service",
        eventDate: "2023-08-25"
      }
    ];

    seedGalleryImages.forEach(image => {
      this.galleryImages.set(this.currentId, { ...image, id: this.currentId });
      this.currentId++;
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getEvents(): Promise<Event[]> {
    return Array.from(this.events.values());
  }

  async getEvent(id: number): Promise<Event | undefined> {
    return this.events.get(id);
  }

  async createEvent(event: InsertEvent): Promise<Event> {
    const id = this.currentId++;
    const newEvent: Event = { ...event, id };
    this.events.set(id, newEvent);
    return newEvent;
  }

  async getOfficers(): Promise<Officer[]> {
    return Array.from(this.officers.values());
  }

  async getOfficer(id: number): Promise<Officer | undefined> {
    return this.officers.get(id);
  }

  async createOfficer(officer: InsertOfficer): Promise<Officer> {
    const id = this.currentId++;
    const newOfficer: Officer = { ...officer, id };
    this.officers.set(id, newOfficer);
    return newOfficer;
  }

  async getMemberSpotlights(): Promise<MemberSpotlight[]> {
    return Array.from(this.memberSpotlights.values());
  }

  async getMemberSpotlight(id: number): Promise<MemberSpotlight | undefined> {
    return this.memberSpotlights.get(id);
  }

  async createMemberSpotlight(memberSpotlight: InsertMemberSpotlight): Promise<MemberSpotlight> {
    const id = this.currentId++;
    const newMemberSpotlight: MemberSpotlight = { ...memberSpotlight, id };
    this.memberSpotlights.set(id, newMemberSpotlight);
    return newMemberSpotlight;
  }

  async getAnnouncements(): Promise<Announcement[]> {
    return Array.from(this.announcements.values());
  }

  async getAnnouncement(id: number): Promise<Announcement | undefined> {
    return this.announcements.get(id);
  }

  async createAnnouncement(announcement: InsertAnnouncement): Promise<Announcement> {
    const id = this.currentId++;
    const newAnnouncement: Announcement = { ...announcement, id };
    this.announcements.set(id, newAnnouncement);
    return newAnnouncement;
  }

  async getGalleryImages(): Promise<GalleryImage[]> {
    return Array.from(this.galleryImages.values());
  }

  async getGalleryImage(id: number): Promise<GalleryImage | undefined> {
    return this.galleryImages.get(id);
  }

  async createGalleryImage(galleryImage: InsertGalleryImage): Promise<GalleryImage> {
    const id = this.currentId++;
    const newGalleryImage: GalleryImage = { ...galleryImage, id };
    this.galleryImages.set(id, newGalleryImage);
    return newGalleryImage;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }

  async createContactMessage(contactMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentId++;
    const newContactMessage: ContactMessage = { ...contactMessage, id };
    this.contactMessages.set(id, newContactMessage);
    return newContactMessage;
  }

  async getSuggestions(): Promise<Suggestion[]> {
    return Array.from(this.suggestions.values());
  }

  async createSuggestion(suggestion: InsertSuggestion): Promise<Suggestion> {
    const id = this.currentId++;
    const newSuggestion: Suggestion = { ...suggestion, id };
    this.suggestions.set(id, newSuggestion);
    return newSuggestion;
  }

  async getNewsletterSubscribers(): Promise<NewsletterSubscriber[]> {
    return Array.from(this.newsletterSubscribers.values());
  }

  async createNewsletterSubscriber(subscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber> {
    const id = this.currentId++;
    const newSubscriber: NewsletterSubscriber = { ...subscriber, id };
    this.newsletterSubscribers.set(id, newSubscriber);
    return newSubscriber;
  }
}

export const storage = new MemStorage();
