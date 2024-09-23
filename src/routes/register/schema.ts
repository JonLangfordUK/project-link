import { z } from "zod";

export const formSchema = z
  .object({
    email: z.string().email(),
    emailConfirm: z.string().email(),
    password: z.string().min(8),
    passwordConfirm: z.string().min(8),
  })
  .refine((data) => data.email === data.emailConfirm, {
    message: "Emails do not match",
    path: ["emailConfirm"],
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords do not match",
    path: ["passwordConfirm"],
  });

export type FormSchema = typeof formSchema;
