# Resend Email Setup (Much Easier than Gmail!)

## Step 1: Get Resend API Key
1. Go to https://resend.com
2. Click "Sign Up" (it's free)
3. Sign up with your email
4. Go to "API Keys" in the dashboard
5. Click "Create API Key"
6. Name it "Spells Website"
7. Copy the API key (starts with `re_`)

## Step 2: Update .env.local
Add this line to your .env.local file:
```
RESEND_API_KEY=re_your_actual_api_key_here
```

## Step 3: Test
Restart your server and test a form submission!

## Why Resend is Better:
✅ No complex Gmail setup
✅ No 2-factor authentication needed
✅ No app passwords
✅ Just one API key
✅ More reliable delivery
✅ Professional email service

That's it! Much simpler than Gmail.
