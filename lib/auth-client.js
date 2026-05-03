import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({

    baseURL: process.env.NODE_ENV === 'https://assigment-8-t64x.onrender.com' ? "http://localhost:3000" : "https://আপনার-লাইভ-লিংক.vercel.app",
    fetchOptions: {
        cache: "no-store", 
    }
});