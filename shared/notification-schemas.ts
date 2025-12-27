// Minimal notification schemas placeholder
import { z } from "zod";

export const sendTestNotificationSchema = z.object({
  title: z.string(),
  body: z.string(),
  userId: z.number().optional(),
});

export const broadcastNotificationSchema = z.object({
  title: z.string(),
  body: z.string(),
  icon: z.string().optional(),
  badge: z.string().optional(),
});

// WARNING: This is a minimal placeholder
// The complete notification-schemas.ts should be restored from the original Replit deployment
