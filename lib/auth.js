import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "sqlite",
    }),
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
       google: {
        clientId: process.env.GOOGLE_CLIENT_ID || "dummy_client_id",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || "dummy_client_secret",
       }
    },
    // এখানেও আপনার Vercel এর লাইভ লিংকটা বসাবেন
    baseURL: process.env.NODE_ENV === 'development' ? "http://localhost:3000" : "https://আপনার-লাইভ-লিংক.vercel.app",
});