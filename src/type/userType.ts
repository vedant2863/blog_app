import { z } from "zod";

export const userSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, "Username must be at least 3 characters")
    .nonempty("Username is required"),
  email: z.string().email("Invalid email").nonempty("Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .nonempty("Password is required"),
});

export type FormData = z.infer<typeof userSchema>;

export type userProps = {
  username: string;
  email: string;
  password: string;
  isAdmin: Boolean,
};
