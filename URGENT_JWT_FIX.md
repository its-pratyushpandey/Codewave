# 🚨 CRITICAL: Clerk JWT Template Setup Required

## ❌ Current Error
```
No JWT template exists with name: convex
```

## ✅ Solution: Create JWT Template in Clerk Dashboard

### Step 1: Access Clerk Dashboard
1. Go to **https://dashboard.clerk.com**
2. Select your application: **"capable-thrush-45"**

### Step 2: Create JWT Template
1. In left sidebar → **"JWT Templates"**
2. Click **"+ New template"**
3. **Template Name**: `convex` (exactly this name!)
4. **Template Type**: "Custom"

### Step 3: Configure JWT Claims
Copy and paste this JSON:
```json
{
  "iss": "https://capable-thrush-45.clerk.accounts.dev",
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

### Step 4: Save & Restart
1. Click **"Apply changes"**
2. Restart your app: `npm run dev`

## 🎯 After Fix
- ✅ No authentication errors
- ✅ User login/logout works
- ✅ Convex queries execute
- ✅ App functions properly

**This is the ONLY missing piece - everything else is configured correctly!**
