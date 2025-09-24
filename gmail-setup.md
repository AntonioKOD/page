# Gmail Setup Guide - Step by Step

## Prerequisites
- A Gmail account (any Gmail address)
- Access to that Gmail account

## Step 1: Enable 2-Factor Authentication
1. Go to https://myaccount.google.com/security
2. Sign in with your Gmail account
3. Under "Signing in to Google", find "2-Step Verification"
4. Click "Get started" if not already enabled
5. Follow the setup process (you'll need your phone)

## Step 2: Generate App Password
1. Still on https://myaccount.google.com/security
2. Under "Signing in to Google", find "App passwords"
3. Click "App passwords"
4. You might need to sign in again
5. Select "Mail" from the dropdown
6. Select "Other (custom name)" from device dropdown
7. Type "Spells Website" as the name
8. Click "Generate"
9. Copy the 16-character password (like: abcd efgh ijkl mnop)
10. IMPORTANT: Remove all spaces when using it

## Step 3: Update .env.local
Create/update your .env.local file:
```
EMAIL_USER=your-actual-gmail@gmail.com
EMAIL_PASS=your16characterpassword
```

## Step 4: Test
Run: node test-email.js

## Common Issues:
❌ "Username and Password not accepted"
✅ Make sure 2FA is enabled
✅ Make sure you're using App Password (not regular password)
✅ Make sure no spaces in App Password
✅ Make sure EMAIL_USER is full Gmail address

## Still having issues?
Try creating a new Gmail account specifically for this project.
