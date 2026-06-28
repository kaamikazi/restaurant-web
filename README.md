# Wok On the Wild Side — Redesign Concept

This is a premium, mobile-first website redesign concept for **Wok On the Wild Side** Chinese restaurant in Inglewood, CA. 

> [!IMPORTANT]
> **Unofficial Redesign Concept:** This website is a portfolio and demonstration project. It is not the official website of Wok On the Wild Side. A disclaimer is visible in the footer of all pages.

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the local development server:**
   ```bash
   npm run dev
   ```

3. **Open the browser:**
   Go to [http://localhost:3000](http://localhost:3000) to view the homepage. Navigate to [http://localhost:3000/menu](http://localhost:3000/menu) to view the interactive full menu page.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🍽️ How to Update Menu Items

All menu data is stored inside a single TypeScript file:
👉 **[src/data/menu.ts](file:///e:/antigravity%20youtube/agent/wok%20chinese%20restaurant/src/data/menu.ts)**

To modify dishes, add new items, or update pricing:
- Open `src/data/menu.ts`.
- Edit the `MENU_ITEMS` array.
- Each item follows the `MenuItem` interface:
  ```typescript
  export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number | null; // Set to null to show "Ask for today's price"
    priceDisplay: string;  // Text displayed in UI (e.g. "$13.95")
    category: 'fried-rice' | 'chow-mein' | 'chicken' | 'beef' | 'shrimp' | 'vegetarian' | 'sides' | 'drinks';
    isFeatured: boolean;   // If true, it displays in the homepage Favorites section
    isSpicy: boolean;      // Displays red hot chili badge
    isSignature: boolean;  // Displays golden star badge
    imageUrl: string;      // Image link (stable Unsplash placeholders used by default)
  }
  ```

---

## 🔍 Verification Needed (Before Showing to the Owner)

Since this is a concept demo, the following details should be manually verified with the owner before launching officially:
1. **Menu Pricing:** Several items contain estimated prices or are marked with "Ask for today's price" (represented as `price: null` in the data). Real, current menu prices must be confirmed.
2. **Operating Hours:** The hours displayed in [LocationHours.tsx](file:///e:/antigravity%20youtube/agent/wok%20chinese%20restaurant/src/components/LocationHours.tsx) were compiled from online public directories. Confirm if they match their current operating schedule (especially the split shift hours on weekdays and Saturday timings).
3. **Catering Options:** Confirm if they actively take catering events, or if the dropdown option in the Contact Form should be adjusted.

---

## 🔮 Suggested Upgrades (Future Phases)

To transition this from a static design concept to a fully functional restaurant hub, we suggest these upgrades:
1. **Real Online Ordering Integration:** Replace mock button calls with an ordering integration (e.g. ChowNow, Toast, DoorDash, or a custom Stripe checkout cart).
2. **Google Maps API Key:** Replace the free search iframe in `LocationHours.tsx` with a stylized vector Map using Google Maps API for custom dark-mode maps.
3. **Admin Menu Editor:** Create an authentication route and dashboard (using Next.js Server Actions and a database like Vercel Postgres or Supabase) so the owner can add/edit dishes and update prices in real time.
4. **AI Receptionist / Chatbot:** Build a custom AI chatbot trained on their menu and FAQs to answer food ingredient questions, recommend popular dishes, and handle booking queries.
5. **SMS / WhatsApp Order Inquiries:** Integrate Twilio or WhatsApp Business APIs to instantly text contact form submissions or pickup alerts directly to the kitchen staff.
