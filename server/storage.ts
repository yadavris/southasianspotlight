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
        name: "Aditi Venkataraman",
        position: "Co-President",
        bio: "Computer Science major passionate about bridging cultures and creating inclusive spaces for South Asian students.",
        imageUrl: "https://i.ibb.co/6cmwqYSr/1.png&auto=format&fit=crop&w=200&h=200",
        
      },
      {
        name: "Lekisha Nagpal",
        position: "Co-President",
        bio: "Business Administration student with a focus on event planning and community outreach programs.",
        imageUrl: "https://i.ibb.co/CXZk3dF/2.png&auto=format&fit=crop&w=200&h=200",
       
      },
      {
        name: "Vibhan Emmi",
        position: "Vice President",
        bio: "Psychology major dedicated to fostering mental health awareness and cultural identity within our community.",
        imageUrl: "https://i.ibb.co/ycbW71tF/3.png&auto=format&fit=crop&w=200&h=200",
        
      },
      {
        name: "Varun Venkataraman",
        position: "Director",
        bio: "Psychology major dedicated to fostering mental health awareness and cultural identity within our community.",
        imageUrl: "https://i.ibb.co/jvMXqMZ3/4.png&auto=format&fit=crop&w=200&h=200",
       
      },
      {
        name: "Rishabh Yadav",
        position: "Secretary",
        bio: "Psychology major dedicated to fostering mental health awareness and cultural identity within our community.",
        imageUrl: "https://i.ibb.co/LhzBFhb9/Untitled-design.jpg&auto=format&fit=crop&w=200&h=200",
        
      },
      {
        name: "Zara Arsiwala",
        position: "Outreach Manager",
        bio: "Psychology major dedicated to fostering mental health awareness and cultural identity within our community.",
        imageUrl: "https://i.ibb.co/6R91ZXdB/5.png&auto=format&fit=crop&w=200&h=200",
        
      }
      ,
      {
        name: "Karishma Parghi",
        position: "Treasurer",
        bio: "Psychology major dedicated to fostering mental health awareness and cultural identity within our community.",
        imageUrl: "https://i.ibb.co/B5bG717h/6.png&auto=format&fit=crop&w=200&h=200",
        
      }
      ,
      {
        name: "Rukshara Premkumar",
        position: "Historian",
        bio: "Psychology major dedicated to fostering mental health awareness and cultural identity within our community.",
        imageUrl: "https://i.ibb.co/Z6HwZyQX/7.png&auto=format&fit=crop&w=200&h=200",
        
      }
    ];

    seedOfficers.forEach(officer => {
      this.officers.set(this.currentId, { ...officer, id: this.currentId });
      this.currentId++;
    });

    // Seed events
    const seedEvents = [
      {
        title: "Camp Cavalier Showcase",
        description: "Come learn about our club and our mission! We'll have a booth with fun games, food, and information about our events! ",
        date: "2025-08-02",
        time: "5:00 - 8:00 PM",
        location: "College Park High School",
        category: "Club showcase",
        imageUrl: "https://i.ibb.co/3ykQp7fC/Untitled-design-3.png&auto=format&fit=crop&w=400&h=200",
        registrationOpen: true as boolean
      },
      {
        title: "Mental Health Workshop",
        description: "Hear from and engage with various licensed professionals in the wellness and mental health field, enjoy interactive activities and sessions exploring mental health from a cultural perspective - $5",
        date: "2025-08-24",
        time: "4:00 PM - 6:00 PM",
        location: "Hindu Temple Woodlands",
        category: "Workshop",
        imageUrl: "https://i.ibb.co/cKS5LZsH/Camp-Cav-Design.png&auto=format&fit=crop&w=400&h=200",
        registrationOpen: true as boolean
      },
      
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
        link: "#" as string | null
      },
      {
        title: "Temple Volunteer Opportunity",
        description: "Local Hindu temple needs volunteers for weekend community service. Great opportunity to give back and earn service hours.",
        category: "Community Service",
        categoryColor: "bg-green-500",
        icon: "fas fa-hands-helping",
        date: "5 days ago",
        link: "https://www.hindutempleatlanta.org/volunteer" as string | null
      },
      {
        title: "Share Your Ideas",
        description: "Have suggestions for future events or activities? Use our suggestion box to share your ideas with the club leadership.",
        category: "Suggestions",
        categoryColor: "bg-purple-500",
        icon: "fas fa-lightbulb",
        date: "1 week ago",
        link: "#" as string | null
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
        title: "SEA Club Colab Meeting",
        description: "Pictures from our meeting in collaboration with Southeast Asian Club!" as string | null,
        imageUrl: "https://i.ibb.co/bMvp2v4j/saseaclub.png&auto=format&fit=crop&w=400&h=400",
        category: "Club Meeting",
        
      },
      {
        title: "Valentine's Day Celebration Meeting",
        description: "Valentine's Day here at South Asian Club!" as string | null,
        imageUrl: "https://i.ibb.co/nqHPFM2R/valentines.png&auto=format&fit=crop&w=400&h=400",
        category: "Club Meeting",
        
      },
      {
        title: "Yoga Fun and Tasty Chaat",
        description: "First meeting of 2025! We had a great time learning new yoga tricks and eating yummy chaat!" as string | null,
        imageUrl: "https://i.ibb.co/35D1GjZW/Screenshot-2025-07-26-182920.png&auto=format&fit=crop&w=400&h=400",
        category: "Club Meeting",
        
      },
      {
        title: "Holiday Meeting",
        description: "Students celebrated the holiday season through cards, food, and fun!" as string | null,
        imageUrl: "https://i.ibb.co/20m0vLVD/Screenshot-2025-07-26-183526.png&auto=format&fit=crop&w=400&h=400",
        category: "Club Meeting",
        eventDate: "2024-12-06" as string | null
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
