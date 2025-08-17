import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertEventSchema, 
  insertOfficerSchema, 
  insertMemberSpotlightSchema, 
  insertAnnouncementSchema, 
  insertGalleryImageSchema, 
  insertContactMessageSchema, 
  insertSuggestionSchema, 
  insertNewsletterSubscriberSchema 
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Events routes
  app.get("/api/events", async (req, res) => {
    try {
      const events = await storage.getEvents();
      res.json(events);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch events" });
    }
  });

  app.get("/api/events/:id", async (req, res) => {
    try {
      const event = await storage.getEvent(parseInt(req.params.id));
      if (!event) {
        return res.status(404).json({ message: "Event not found" });
      }
      res.json(event);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch event" });
    }
  });

  app.post("/api/events", async (req, res) => {
    try {
      const eventData = insertEventSchema.parse(req.body);
      const event = await storage.createEvent(eventData);
      res.status(201).json(event);
    } catch (error) {
      res.status(400).json({ message: "Invalid event data" });
    }
  });

  // Officers routes
  app.get("/api/officers", async (req, res) => {
    try {
      const officers = await storage.getOfficers();
      res.json(officers);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch officers" });
    }
  });

  app.post("/api/officers", async (req, res) => {
    try {
      const officerData = insertOfficerSchema.parse(req.body);
      const officer = await storage.createOfficer(officerData);
      res.status(201).json(officer);
    } catch (error) {
      res.status(400).json({ message: "Invalid officer data" });
    }
  });

  // Member spotlights routes
  app.get("/api/member-spotlights", async (req, res) => {
    try {
      const memberSpotlights = await storage.getMemberSpotlights();
      res.json(memberSpotlights);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch member spotlights" });
    }
  });

  app.post("/api/member-spotlights", async (req, res) => {
    try {
      const memberSpotlightData = insertMemberSpotlightSchema.parse(req.body);
      const memberSpotlight = await storage.createMemberSpotlight(memberSpotlightData);
      res.status(201).json(memberSpotlight);
    } catch (error) {
      res.status(400).json({ message: "Invalid member spotlight data" });
    }
  });

  // Announcements routes
  app.get("/api/announcements", async (req, res) => {
    try {
      const announcements = await storage.getAnnouncements();
      res.json(announcements);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch announcements" });
    }
  });

  app.post("/api/announcements", async (req, res) => {
    try {
      const announcementData = insertAnnouncementSchema.parse(req.body);
      const announcement = await storage.createAnnouncement(announcementData);
      res.status(201).json(announcement);
    } catch (error) {
      res.status(400).json({ message: "Invalid announcement data" });
    }
  });

  // Gallery images routes
  app.get("/api/gallery-images", async (req, res) => {
    try {
      const galleryImages = await storage.getGalleryImages();
      res.json(galleryImages);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch gallery images" });
    }
  });

  app.post("/api/gallery-images", async (req, res) => {
    try {
      const galleryImageData = insertGalleryImageSchema.parse(req.body);
      const galleryImage = await storage.createGalleryImage(galleryImageData);
      res.status(201).json(galleryImage);
    } catch (error) {
      res.status(400).json({ message: "Invalid gallery image data" });
    }
  });

  // Contact messages routes
  app.get("/api/contact-messages", async (req, res) => {
    try {
      const contactMessages = await storage.getContactMessages();
      res.json(contactMessages);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contact messages" });
    }
  });

  app.post("/api/contact-messages", async (req, res) => {
    try {
      const contactMessageData = insertContactMessageSchema.parse({
        ...req.body,
        submittedAt: new Date().toISOString(),
      });
      const contactMessage = await storage.createContactMessage(contactMessageData);
      res.status(201).json(contactMessage);
    } catch (error) {
      res.status(400).json({ message: "Invalid contact message data" });
    }
  });

  // Suggestions routes
  app.get("/api/suggestions", async (req, res) => {
    try {
      const suggestions = await storage.getSuggestions();
      res.json(suggestions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch suggestions" });
    }
  });

  app.post("/api/suggestions", async (req, res) => {
    try {
      const suggestionData = insertSuggestionSchema.parse({
        ...req.body,
        submittedAt: new Date().toISOString(),
      });
      const suggestion = await storage.createSuggestion(suggestionData);
      res.status(201).json(suggestion);
    } catch (error) {
      res.status(400).json({ message: "Invalid suggestion data" });
    }
  });

  // Newsletter subscribers routes
  app.get("/api/newsletter-subscribers", async (req, res) => {
    try {
      const subscribers = await storage.getNewsletterSubscribers();
      res.json(subscribers);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch newsletter subscribers" });
    }
  });

  app.post("/api/newsletter-subscribers", async (req, res) => {
    try {
      const subscriberData = insertNewsletterSubscriberSchema.parse({
        ...req.body,
        subscribedAt: new Date().toISOString(),
      });
      const subscriber = await storage.createNewsletterSubscriber(subscriberData);
      res.status(201).json(subscriber);
    } catch (error) {
      res.status(400).json({ message: "Invalid newsletter subscriber data" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
