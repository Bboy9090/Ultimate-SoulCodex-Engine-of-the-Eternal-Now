// Minimal schema placeholder - This file needs to be restored from the original Replit deployment
// The complete schema.ts file should define all database tables, types, and Zod schemas

import { pgTable, text, serial, timestamp, integer, boolean, json } from "drizzle-orm/pg-core";
import { z } from "zod";

// Placeholder table definitions - these need to match the actual database schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const localUsers = pgTable("local_users", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  hashedPassword: text("hashed_password").notNull(),
});

export const profiles = pgTable("soul_profiles", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  data: json("data"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const persons = pgTable("persons", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const compatibilityAnalyses = pgTable("compatibility_analyses", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const assessmentResponses = pgTable("assessment_responses", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const dailyInsights = pgTable("daily_insights", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const accessCodes = pgTable("access_codes", {
  id: serial("id").primaryKey(),
  code: text("code").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const accessCodeRedemptions = pgTable("access_code_redemptions", {
  id: serial("id").primaryKey(),
  codeId: integer("code_id").references(() => accessCodes.id).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const pushSubscriptions = pgTable("push_subscriptions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const frequencyLogs = pgTable("frequency_logs", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const webhookEvents = pgTable("webhook_events", {
  id: serial("id").primaryKey(),
  eventType: text("event_type").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const passwordResetTokens = pgTable("password_reset_tokens", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  token: text("token").notNull().unique(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Placeholder Zod schemas
export const birthDataSchema = z.object({
  name: z.string().min(1),
  birthDate: z.string(),
  birthTime: z.string().optional(),
  birthPlace: z.string().min(1),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  timezone: z.string().optional(),
});

export const signupSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(8),
  accessCode: z.string().optional(),
});

export const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export const enneagramAssessmentSchema = z.object({
  responses: z.array(z.number()),
});

export const mbtiAssessmentSchema = z.object({
  responses: z.array(z.string()),
});

// Placeholder types
export type User = typeof users.$inferSelect;
export type UpsertUser = typeof users.$inferInsert;
export type LocalUser = typeof localUsers.$inferSelect;
export type Profile = typeof profiles.$inferSelect & { data?: any };
export type InsertProfile = typeof profiles.$inferInsert;
export type Person = typeof persons.$inferSelect;
export type InsertPerson = typeof persons.$inferInsert;
export type Assessment = typeof assessmentResponses.$inferSelect;
export type InsertAssessment = typeof assessmentResponses.$inferInsert;
export type AccessCode = typeof accessCodes.$inferSelect;
export type InsertAccessCode = typeof accessCodes.$inferInsert;
export type AccessCodeRedemption = typeof accessCodeRedemptions.$inferSelect;
export type DailyInsight = typeof dailyInsights.$inferSelect;
export type InsertDailyInsight = typeof dailyInsights.$inferInsert;
export type CompatibilityAnalysis = typeof compatibilityAnalyses.$inferSelect;
export type InsertCompatibility = typeof compatibilityAnalyses.$inferInsert;
export type PushSubscription = typeof pushSubscriptions.$inferSelect;
export type InsertPushSubscription = typeof pushSubscriptions.$inferInsert;
export type FrequencyLog = typeof frequencyLogs.$inferSelect;
export type InsertFrequencyLog = typeof frequencyLogs.$inferInsert;
export type WebhookEvent = typeof webhookEvents.$inferSelect;
export type InsertWebhookEvent = typeof webhookEvents.$inferInsert;
export type BirthData = z.infer<typeof birthDataSchema>;

// WARNING: This is a minimal placeholder schema file
// The complete schema.ts should be restored from the original Replit deployment
// This file is missing many table definitions, columns, and validation schemas
