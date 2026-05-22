# Firebase Integration Setup Guide

## Step 1: Get Your Web API Key

1. Visit: https://console.firebase.google.com/project/optimum-website-1a60b/settings/general
2. Scroll down to **"Your apps"** section
3. If you see a web app icon, click it to view the config
4. If NO web app exists, click **"Add app"** → select **Web** → follow the steps
5. You'll see a config snippet like:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "...",
  ...
}
```
6. Copy the **`apiKey`** value

## Step 2: Update config.ts
Replace `YOUR_API_KEY_HERE` in `/src/firebase/config.ts` with your actual API key

## Step 3: Set Firebase Security Rules

Go to: https://console.firebase.google.com/project/optimum-website-1a60b/database/optimum-website-1a60b-default-rtdb/rules

Replace the rules with:
```json
{
  "rules": {
    "siteData": {
      ".read": true,
      ".write": "auth != null"
    }
  }
}
```

## Step 4: Enable Anonymous Authentication

1. Go to: https://console.firebase.google.com/project/optimum-website-1a60b/authentication/providers
2. Click **"Anonymous"**
3. Toggle it **ON**
4. Click **"Save"**

This allows users to authenticate without login!
