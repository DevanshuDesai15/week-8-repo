import { z } from "zod";
export const signupInput = z.object({
    username: z.string().min(1).max(10),
    password: z.string().min(8)
})
console.log("hi there");

export type SignupParams = z.infer<typeof signupInput>;
