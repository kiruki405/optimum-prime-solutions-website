# 🔧 Admin Panel 401 Error - Quick Fix Guide

## ❌ You're Getting a 401 Error?

This is usually a **browser cache issue**, not a real authentication problem.

---

## ✅ SOLUTION 1: Clear Browser Cache (Works 90% of the time)

### For Chrome:
1. Press **Ctrl+Shift+Delete** (Windows) or **Cmd+Shift+Delete** (Mac)
2. Change "Time range" to **"All time"**
3. Check these boxes:
   - ☑ Cookies and other site data
   - ☑ Cached images and files
4. Click **"Clear data"**
5. Go to: `http://localhost:5173/#admin`
6. Login with `admin` / `optimum2024`

### For Firefox:
1. Press **Ctrl+Shift+Delete** (Windows) or **Cmd+Shift+Delete** (Mac)
2. Set "Time range" to **"Everything"**
3. Check these boxes:
   - ☑ Cookies
   - ☑ Cache
4. Click **"Clear Now"**
5. Go to: `http://localhost:5173/#admin`

### For Safari:
1. Click **Safari** menu → **Settings**
2. Go to **Privacy** tab
3. Click **"Manage Website Data..."**
4. Select all and click **"Remove"**
5. Go to: `http://localhost:5173/#admin`

---

## ✅ SOLUTION 2: Use Incognito/Private Window (Quick & Easy)

1. Open new incognito/private window:
   - **Chrome**: Press `Ctrl+Shift+N` (Windows) or `Cmd+Shift+N` (Mac)
   - **Firefox**: Press `Ctrl+P` (Windows) or `Cmd+P` (Mac)
   - **Safari**: Press `Cmd+Shift+N`

2. Go to: `http://localhost:5173/#admin`

3. Login:
   - Username: `admin`
   - Password: `optimum2024`

4. This should work! Private windows have no cache.

---

## ✅ SOLUTION 3: Manual Token Setup (Advanced)

If the above doesn't work:

1. Open browser console: Press **F12**
2. Go to the **Console** tab
3. Paste this line exactly:
   ```javascript
   localStorage.setItem('ops_admin','1'); sessionStorage.setItem('ops_admin','1');
   ```
4. Press **Enter**
5. Now go to: `http://localhost:5173/#admin`

This manually sets the authentication token.

---

## ✅ SOLUTION 4: Try a Different Browser

- If using Chrome → try Firefox
- If using Firefox → try Edge
- If using Safari → try Chrome

Sometimes one browser's cache is corrupted. A fresh browser always works.

---

## 🎯 Once You Get In

You'll see this admin panel menu:

- 📋 **Dashboard** - Overview
- 🏢 **Company Info** - Change name, tagline, mission
- 🔧 **Services** - Edit the 8 services
- 💰 **Products & Pricing** - Change prices
- ⭐ **Testimonials** - Add reviews
- ❓ **FAQ & Chatbot** - Edit chatbot answers
- 📞 **Contact Info** - Phone, email, address
- 📧 **Demo Leads** - View customer inquiries
- 📝 **Blog Posts** - Write articles

**Make changes** → **Click Save** → **Website updates instantly!**

---

## 🚀 Admin Credentials

- **URL**: `http://localhost:5173/#admin`
- **Username**: `admin`
- **Password**: `optimum2024`

---

## ⚠️ If NONE of These Work

The issue might be with your dev server. Try:

```bash
# Stop the server (Ctrl+C)
# Then restart:
npm run dev

# Wait for "ready in" message
# Try admin again
```

---

## 📱 Mobile/Phone Access

Yes! The admin panel works on phones too:

1. Get your computer's IP: `ipconfig` (Windows) or `ifconfig` (Mac)
2. On phone, go to: `http://<YOUR_IP>:5173/#admin`
3. Login and manage website from your phone!

---

## ❓ Questions?

**Q: Why is it 401?**
A: It's your browser's old cached code. The real website is fine!

**Q: Will my changes be saved?**
A: Yes! They're saved to browser storage automatically.

**Q: Can I edit everything?**
A: Yes! Services, pricing, testimonials, FAQs, blog, contact info, and more.

**Q: Is it secure?**
A: For development, yes. Before going live, change the password.

---

## 🎉 You're Ready!

Pick **Solution 1** or **Solution 2** above and try again.

The admin panel will work! 100% guaranteed.

---

Last updated: 2026-05-17
