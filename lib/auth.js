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
        // .env ফাইলে না থাকলে আপাতত ফাঁকা স্ট্রিং বা ডামি টেক্সট নেবে, যাতে ক্র্যাশ না করে
        clientId: process.env.GOOGLE_CLIENT_ID || "dummy_client_id",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || "dummy_client_secret",
       }
    },
    baseURL: "http://localhost:3000",
});