import { pgTable, text, serial, integer, boolean, timestamp, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  date: text("date").notNull(),
  time: text("time").notNull(),
  location: text("location").notNull(),
  category: text("category").notNull(),
  imageUrl: text("image_url").notNull(),
  registrationOpen: boolean("registration_open").default(true),
});

export const officers = pgTable("officers", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  position: text("position").notNull(),
  bio: text("bio").notNull(),
  imageUrl: text("image_url").notNull(),
  linkedinUrl: text("linkedin_url"),
  email: text("email"),
  major: text("major"),
});

export const memberSpotlights = pgTable("member_spotlights", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  classYear: text("class_year").notNull(),
  major: text("major").notNull(),
  quote: text("quote").notNull(),
  achievement: text("achievement").notNull(),
  joinedDate: text("joined_date").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const announcements = pgTable("announcements", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  categoryColor: text("category_color").notNull(),
  icon: text("icon").notNull(),
  date: text("date").notNull(),
  link: text("link"),
});

export const galleryImages = pgTable("gallery_images", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  imageUrl: text("image_url").notNull(),
  category: text("category").notNull(),
  eventDate: text("event_date"),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  submittedAt: text("submitted_at").notNull(),
});

export const suggestions = pgTable("suggestions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  suggestion: text("suggestion").notNull(),
  category: text("category").notNull(),
  submittedAt: text("submitted_at").notNull(),
});

export const newsletterSubscribers = pgTable("newsletter_subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  subscribedAt: text("subscribed_at").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertEventSchema = createInsertSchema(events).omit({
  id: true,
});

export const insertOfficerSchema = createInsertSchema(officers).omit({
  id: true,
});

export const insertMemberSpotlightSchema = createInsertSchema(memberSpotlights).omit({
  id: true,
});

export const insertAnnouncementSchema = createInsertSchema(announcements).omit({
  id: true,
});

export const insertGalleryImageSchema = createInsertSchema(galleryImages).omit({
  id: true,
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
});

export const insertSuggestionSchema = createInsertSchema(suggestions).omit({
  id: true,
});

export const insertNewsletterSubscriberSchema = createInsertSchema(newsletterSubscribers).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertEvent = z.infer<typeof insertEventSchema>;
export type Event = typeof events.$inferSelect;

export type InsertOfficer = z.infer<typeof insertOfficerSchema>;
export type Officer = typeof officers.$inferSelect;

export type InsertMemberSpotlight = z.infer<typeof insertMemberSpotlightSchema>;
export type MemberSpotlight = typeof memberSpotlights.$inferSelect;

export type InsertAnnouncement = z.infer<typeof insertAnnouncementSchema>;
export type Announcement = typeof announcements.$inferSelect;

export type InsertGalleryImage = z.infer<typeof insertGalleryImageSchema>;
export type GalleryImage = typeof galleryImages.$inferSelect;

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;

export type InsertSuggestion = z.infer<typeof insertSuggestionSchema>;
export type Suggestion = typeof suggestions.$inferSelect;

export type InsertNewsletterSubscriber = z.infer<typeof insertNewsletterSubscriberSchema>;
export type NewsletterSubscriber = typeof newsletterSubscribers.$inferSelect;
