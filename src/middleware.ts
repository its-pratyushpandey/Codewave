import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Check if we have valid Clerk environment variables
const hasValidClerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && 
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.startsWith('pk_') && 
  !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes('your_') && 
  !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes('xxxxxxx') &&
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.length > 50;

// Export middleware based on whether we have valid keys
const middleware = hasValidClerkKey 
  ? clerkMiddleware() 
  : function() { return NextResponse.next(); };

export default middleware;

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
