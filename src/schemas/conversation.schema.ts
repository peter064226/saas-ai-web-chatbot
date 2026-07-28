import { ZodType, z } from "zod";
import { ACCEPTED_FILE_TYPES, MAX_UPLOAD_SIZE } from "./settings.schema";

export const ConversationSearchSchema = z.object({
  query: z.string().min(1, { message: "You must entery a search query" }),
  domain: z.string().min(1, { message: "You must select a domain" }),
});

export type ConversationSearchProps = z.infer<typeof ConversationSearchSchema>;

export const ChatBotMessageSchema = z
  .object({
    content: z.string().min(1),
    image: z.any().optional(),
  })
  .refine((schema) => {
    if (schema.image?.length) {
      if (
        ACCEPTED_FILE_TYPES.includes(schema.image?.[0].type!) &&
        schema.image?.[0].size <= MAX_UPLOAD_SIZE
      ) {
        return true;
      }
    }
    if (!schema.image?.length) {
      return true;
    }
  });

export type ChatBotMessageProps = z.infer<typeof ChatBotMessageSchema>;
