import { z } from "zod";

export const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    password_confirm: z.string().min(8),
}).refine((data) => data.password === data.password_confirm, {
    message: "Passwords do not match",
    path: ["password_confirm"]
});

export type FormSchema = typeof formSchema;