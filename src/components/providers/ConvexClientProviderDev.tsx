"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

// Check if environment variables are properly set
const CLERK_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL;

// Check if we have valid environment variables
const hasValidClerkKey = CLERK_PUBLISHABLE_KEY && 
  CLERK_PUBLISHABLE_KEY.startsWith('pk_') && 
  !CLERK_PUBLISHABLE_KEY.includes('your_') && 
  !CLERK_PUBLISHABLE_KEY.includes('xxxxxxx') &&
  CLERK_PUBLISHABLE_KEY.length > 50; // Real Clerk keys are much longer

const hasValidConvexUrl = CONVEX_URL && 
  CONVEX_URL.startsWith('https://') && 
  !CONVEX_URL.includes('your_') && 
  !CONVEX_URL.includes('happy-animal') &&
  CONVEX_URL.includes('.convex.cloud');

// Development fallback when environment variables are not set
function SetupInstructions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100 flex items-center justify-center p-8">
      <div className="max-w-2xl mx-auto bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-blue-400 mb-6">🚀 Code Craft Setup Required</h1>
        
        <div className="space-y-6">
          <div className="bg-red-900/20 border border-red-600 rounded-lg p-4">
            <h2 className="text-red-400 font-semibold mb-2">⚠️ Missing Environment Variables</h2>
            <p className="text-gray-300">The application requires authentication and database setup to work properly.</p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-blue-400 font-semibold mb-2">🔐 1. Clerk Authentication</h3>
              <ul className="text-gray-300 space-y-1 text-sm ml-4">
                <li>• Go to <a href="https://clerk.com" target="_blank" className="text-blue-400 hover:underline">https://clerk.com</a></li>
                <li>• Create a free account and application</li>
                <li>• Get your API keys from the dashboard</li>
                <li>• Update NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY in .env.local</li>
              </ul>
            </div>

            <div>
              <h3 className="text-blue-400 font-semibold mb-2">🗄️ 2. Convex Database</h3>
              <ul className="text-gray-300 space-y-1 text-sm ml-4">
                <li>• Go to <a href="https://convex.dev" target="_blank" className="text-blue-400 hover:underline">https://convex.dev</a></li>
                <li>• Create a free account and project</li>
                <li>• Run: <code className="bg-gray-700 px-2 py-1 rounded">npx convex dev</code></li>
                <li>• Update CONVEX_DEPLOYMENT and NEXT_PUBLIC_CONVEX_URL in .env.local</li>
              </ul>
            </div>

            <div className="bg-blue-900/20 border border-blue-600 rounded-lg p-4">
              <h3 className="text-blue-400 font-semibold mb-2">📁 Environment File</h3>
              <p className="text-gray-300 text-sm mb-2">Update your .env.local file with valid keys:</p>
              <pre className="bg-gray-900 p-3 rounded text-xs text-gray-300 overflow-x-auto">
{`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_actual_key
CLERK_SECRET_KEY=sk_test_your_actual_key
CONVEX_DEPLOYMENT=your-deployment-name
NEXT_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud`}
              </pre>
            </div>

            <div className="bg-green-900/20 border border-green-600 rounded-lg p-4">
              <h3 className="text-green-400 font-semibold mb-2">✅ After Setup</h3>
              <p className="text-gray-300 text-sm">Restart the development server with <code className="bg-gray-700 px-2 py-1 rounded">npm run dev</code></p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm">Need help? Check SETUP_GUIDE.md in your project directory</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConvexClientProvider({ children }: { children: React.ReactNode }) {
  // Show setup instructions if environment variables are missing or invalid
  if (!hasValidClerkKey || !hasValidConvexUrl) {
    return <SetupInstructions />;
  }

  // Create Convex client only if we have a valid URL
  const convex = new ConvexReactClient(CONVEX_URL);

  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}

export default ConvexClientProvider;
