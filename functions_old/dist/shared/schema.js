// @ts-ignore: unused import
import { pgTable, text, serial, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
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
//# sourceMappingURL=schema.js.map