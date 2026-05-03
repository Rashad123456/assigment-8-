import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    baseURL: "http://localhost:3000" // আপনার ওয়েবসাইটের লোকাল এড্রেস
});