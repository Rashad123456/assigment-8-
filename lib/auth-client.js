import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    // নিচে আপনার Vercel এর লাইভ লিংকটা বসাবেন
    baseURL: process.env.NODE_ENV === 'development' ? "http://localhost:3000" : "https://আপনার-লাইভ-লিংক.vercel.app",
    fetchOptions: {
        cache: "no-store", 
    }
});