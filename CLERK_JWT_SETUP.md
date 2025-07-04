# 🚀 Code Craft - Complete Setup & Error Resolution Guide

## Current Status
✅ **Environment Variables**: Valid Clerk and Convex keys are configured  
✅ **Convex Backend**: Properly deployed and generated files are present  
✅ **Next.js App**: Running successfully on localhost  
⚠️ **Clerk/Convex Integration**: Missing JWT template causing authentication errors

## 🔧 **CRITICAL FIX REQUIRED: Clerk JWT Template Setup**

### The Main Issue
The error `"No JWT template exists with name: convex"` occurs because Clerk requires a specific JWT template to integrate with Convex.

### Step-by-Step Solution

#### 1. **Access Clerk Dashboard**
- Go to [https://dashboard.clerk.com](https://dashboard.clerk.com)
- Sign in to your account
- Select your application: "capable-thrush-45" (based on your domain)

#### 2. **Create JWT Template**
- In the left sidebar, go to **"JWT Templates"**
- Click **"+ New template"**
- **Template Name**: `convex` (EXACTLY this name)
- **Template Type**: Select "Custom"

#### 3. **Configure JWT Claims**
Add these claims to the JWT template:
```json
{
  "iss": "https://enabling-alien-47.clerk.accounts.dev",
  "sub": "{{user.id}}",
  "aud": "convex",
  "iat": {{date.now}},
  "exp": {{date.now_plus_5_minutes}},
  "name": "{{user.first_name}} {{user.last_name}}",
  "given_name": "{{user.first_name}}",
  "family_name": "{{user.last_name}}",
  "email": "{{user.primary_email_address}}",
  "email_verified": {{user.primary_email_address.verification.status == "verified"}},
  "image": "{{user.image_url}}"
}
```

#### 4. **Save and Deploy**
- Click **"Apply changes"**
- The template will be immediately available

### Alternative: Quick Template Creation
If the above seems complex, you can use Clerk's Convex integration:
1. In Clerk Dashboard → **"Integrations"**
2. Look for **"Convex"** integration
3. Click **"Connect"** and follow the guided setup

## 🔍 **After JWT Template Fix**

### 1. **Restart Your Application**
```bash
# Stop the current server (Ctrl+C)
npm run dev
```

### 2. **Verify the Fix**
- The app should load without authentication errors
- User login/logout should work properly
- Convex queries should execute successfully

### 3. **Test Authentication Flow**
- Click "Sign In" button
- Complete authentication
- Verify that user data appears in the header
- Test code execution (requires Pro subscription for non-JavaScript)

## 🛠️ **Additional Troubleshooting**

### Clear Next.js Cache (if chunk loading errors persist)
```bash
rm -rf .next
npm run dev
```

### Verify Convex Deployment
```bash
npx convex dashboard
# This should open your Convex dashboard showing your deployment
```

### Check Environment Variables
Your `.env.local` should have valid values (✅ already configured):
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_Y2FwYWJsZS10aHJ1c2gtNDUuY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY=sk_test_n8KjBsy5B1iGOaQo0LG15WSUOzwn7OReLsrArxSazQ
CONVEX_DEPLOYMENT=dev:pleasant-rhinoceros-58
NEXT_PUBLIC_CONVEX_URL=https://pleasant-rhinoceros-58.convex.cloud
```

## 📋 **Convex Setup Process (Already Complete)**

You've already completed the Convex setup correctly:

1. ✅ **Account Created**: Convex account with team "pratyush-kumar-pandey"
2. ✅ **Project Created**: "careercoach-90a4c" project
3. ✅ **Deployment Active**: `dev:pleasant-rhinoceros-58`
4. ✅ **Schema Defined**: Users, code executions, snippets tables
5. ✅ **Generated Files**: API types and server functions are current
6. ✅ **Integration Code**: Proper ConvexProviderWithClerk setup

## 🎯 **Expected Behavior After Fix**

Once the JWT template is created:
- ✅ No more "JWT template not found" errors
- ✅ Smooth user authentication flow
- ✅ User data synced between Clerk and Convex
- ✅ Code execution works (Pro features require subscription)
- ✅ Profile and snippets pages function properly

## 🚨 **If Issues Persist**

1. **Double-check JWT template name**: Must be exactly "convex"
2. **Verify Clerk application**: Should match your domain
3. **Check browser console**: For any remaining JavaScript errors
4. **Restart development server**: After any Clerk dashboard changes

## 📞 **Support Resources**

- **Clerk Documentation**: [Convex Integration](https://clerk.com/docs/integrations/databases/convex)
- **Convex Documentation**: [Clerk Auth](https://docs.convex.dev/auth/clerk)
- **GitHub Issues**: Check the project repository for known issues

---

**Next Steps**: Create the JWT template in Clerk dashboard, then restart your app. The authentication errors should be completely resolved.
