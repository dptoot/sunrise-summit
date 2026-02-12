# Sunrise Summit Website Development Plan

## Project Overview
- **Property:** Sunrise Summit — 4BR/3.5BA mountain cabin, Waynesville, NC
- **Style:** Mid-century modern aesthetic with mountain/sunrise brand
- **Tech Stack:** Next.js 14 (App Router), Tailwind CSS, Vercel hosting
- **Current Phase:** Static informational site with future booking potential

---

## Color Palette (from logo)

```javascript
// tailwind.config.js colors
colors: {
  navy: '#1E2A5E',      // Primary - headers, text
  mountain: '#5B6B9E',  // Secondary - cards, accents
  coral: '#E8927C',     // Warm accent - buttons, highlights
  sunrise: '#F28B50',   // Pop accent - CTAs, hover
  cream: '#FAF6F1',     // Background
  sand: '#E8DFD4',      // Borders, subtle elements
}
```

---

## Site Structure

```
/                       → Home
/about                  → About the Property
/instructions           → Instructions Hub
/instructions/check-in  → Check-in / Check-out
/instructions/guide     → House Guide (WiFi, appliances, etc.)
/instructions/rules     → House Rules
/gallery                → Photo Gallery
/attractions            → Local Attractions
/contact                → Contact Form
```

---

## Phase 1: Project Setup & Foundation

### Prompt for Claude Code:
```
Create a new Next.js 14 project called "sunrise-summit" with:
- App Router
- Tailwind CSS
- TypeScript
- The following color palette in tailwind.config.js:
  navy: '#1E2A5E', mountain: '#5B6B9E', coral: '#E8927C', 
  sunrise: '#F28B50', cream: '#FAF6F1', sand: '#E8DFD4'
- A clean folder structure with /components, /lib, /public/images
- Basic layout.tsx with cream background
- Set up for static export (output: 'export' in next.config.js)
```

### Deliverables:
- [x] Next.js project initialized
- [x] Tailwind configured with custom colors
- [x] Folder structure created
- [x] Basic layout wrapper

### Completed:
- Next.js 14.2.35 with App Router, TypeScript, Tailwind CSS
- Custom color palette configured in `tailwind.config.ts`
- Inter font from Google Fonts
- Folder structure: `/components`, `/lib`, `/public/images`
- Layout with cream background and metadata for "Sunrise Summit | Mountain Cabin Rental"
- Static export configured (`output: 'export'` in `next.config.mjs`)
- Build verified successfully with output to `/out` directory

---

## Phase 2: Core Components

### Prompt for Claude Code:
```
Create reusable components for the Sunrise Summit website:

1. Header/Navigation
   - Logo on left (link to home)
   - Nav links: About, Instructions (dropdown), Gallery, Attractions, Contact
   - Mobile hamburger menu
   - Sticky on scroll with subtle shadow
   - Use navy text, cream background

2. Footer
   - Logo, copyright, contact email link
   - Simple, clean design

3. Hero Section (for home page)
   - Full-width image background capability
   - Overlay with gradient (navy to transparent)
   - Large headline + subheadline
   - CTA button in coral

4. Section Wrapper
   - Consistent padding/max-width
   - Alternating cream/white backgrounds option

5. Amenity Card
   - Icon, title, short description
   - For displaying property features

6. YouTube Embed Component
   - Responsive 16:9 wrapper
   - Accepts video ID prop
```

### Deliverables:
- [x] Header with mobile nav
- [x] Footer
- [x] Hero component
- [x] Section wrapper
- [x] Amenity card
- [x] Video embed component

### Completed:
- `Header.tsx` - Sticky nav with mobile hamburger menu, Instructions dropdown
- `Footer.tsx` - Navy background, cream text, contact email link
- `Hero.tsx` - Full-width with gradient overlay, optional background image
- `Section.tsx` - Consistent padding, cream/white variants
- `AmenityCard.tsx` - Icon, title, description with hover effects
- `YouTubeEmbed.tsx` - Responsive 16:9, lazy loading with IntersectionObserver
- `index.ts` - Barrel export for easy imports

---

## Phase 3: Home Page

### Prompt for Claude Code:
```
Build the home page for Sunrise Summit with these sections:

1. Hero
   - Headline: "Wake Up Above the Clouds"
   - Subheadline: "A mid-century modern retreat in the heart of the Smokies"
   - CTA: "Explore the Property" → links to /about
   - (Placeholder for hero image)

2. Quick Stats Bar
   - 4 Bedrooms | 3.5 Baths | Sleeps 8 | Mountain Top Views
   - Clean horizontal layout, navy background, cream text

3. Property Highlights (3-4 cards)
   - Indoor hot tub with fireplace
   - Breathtaking sunrise views
   - Game rooms for all ages
   - Mid-century modern comfort

4. Image Preview Section
   - Grid of 4-6 placeholder images
   - "View Full Gallery" link

5. Location Teaser
   - Brief text about Waynesville/Smokies location
   - Link to attractions page
```

### Deliverables:
- [x] Complete home page
- [x] All sections responsive
- [x] Placeholder images ready for replacement

### Completed:
- Hero with headline, subheadline, and CTA to /about
- Quick Stats bar (navy bg) with 4 Bedrooms | 3.5 Baths | Sleeps 8 | Mountain Top Views
- Property Highlights section with 4 AmenityCards
- Image Preview grid (6 placeholders) with "View Full Gallery" link
- Location Teaser section with "Explore the Area" link to /attractions

---

## Phase 4: About Page

### Prompt for Claude Code:
```
Build the About page with:

1. Hero image section (smaller than home)
   - Title: "About Sunrise Summit"

2. Property Description
   - 2-column layout: text left, image right (mobile: stacked)
   - Describe the cabin, the views, the MCM style

3. Amenities Grid
   - Use amenity cards
   - Categories: Bedrooms & Baths, Living Spaces, Entertainment, Outdoor

4. The Experience Section
   - What makes this property special
   - The sunrise views, the elevation, the escape
```

### Property Details for Content:
- 4 bedrooms, 3.5 bathrooms
- Sleeps 8 guests
- Indoor hot tub with adjacent fireplace
- Large deck with panoramic mountain views
- Game room + kids game room
- 2 fireplaces total
- Located on Heaths Peak
- Mid-century modern décor

### Deliverables:
- [x] About page with all sections
- [x] 2-column property description (responsive)
- [x] Amenities grid with categorized cards
- [x] "The Experience" section

### Completed:
- `/app/about/page.tsx` created
- Hero: "About Sunrise Summit" with subtitle
- 2-column layout: description text + placeholder image (stacks on mobile)
- Amenities organized into 4 categories with 12 AmenityCards
- "More Than a Stay" experience section with gradient background

---

## Phase 5: Instructions Section

### Prompt for Claude Code:
```
Create the Instructions section with:

1. Instructions Hub (/instructions)
   - Card grid linking to sub-pages
   - Cards for: Check-in/out, House Guide, House Rules
   - Clean iconography

2. Check-in/Check-out Page (/instructions/check-in)
   - Step-by-step instructions layout
   - Sections for: Before Arrival, Check-in Process, Check-out Process
   - YouTube video embed slots
   - Expandable/accordion sections optional

3. House Guide Page (/instructions/guide)
   - Sections: WiFi, Kitchen Appliances, Hot Tub, Fireplaces, 
     Thermostat, TV/Entertainment, Washer/Dryer
   - Each section: title, instructions, optional video embed

4. House Rules Page (/instructions/rules)
   - Clean list format
   - Sections: General Rules, Noise/Quiet Hours, Parking, 
     Smoking Policy, Pet Policy, etc.
```

### Deliverables:
- [x] Instructions hub page
- [x] Check-in/out page with video slots
- [x] House guide page
- [x] House rules page

### Completed:
- `/app/instructions/page.tsx` - Hub with 3 cards linking to sub-pages
- `/app/instructions/check-in/page.tsx` - Before Arrival, Check-in (4 PM), Check-out (11 AM) sections
- `/app/instructions/guide/page.tsx` - 7 sections: WiFi, Kitchen, Hot Tub, Fireplaces, Thermostat, TV, Washer/Dryer
- `/app/instructions/rules/page.tsx` - General Rules, Quiet Hours, Parking, Smoking, Pets, Hot Tub Rules
- YouTubeEmbed placeholder slots included in relevant pages
- Header navigation updated to match new URL structure

---

## Phase 6: Gallery Page

### Prompt for Claude Code:
```
Build a photo gallery page:

1. Grid layout (responsive)
   - 3 columns desktop, 2 tablet, 1 mobile
   - Consistent aspect ratio thumbnails

2. Lightbox functionality
   - Click to expand image
   - Navigate between images
   - Close on click outside or X button
   - Use a lightweight solution (CSS + minimal JS, or a small library)

3. Optional: Category filters
   - All, Exterior, Living Spaces, Bedrooms, Views, Amenities

Start with placeholder images, make it easy to swap in real photos.
```

### Deliverables:
- [x] Responsive image grid
- [x] Lightbox with navigation
- [x] Category filters

### Completed:
- `/app/gallery/page.tsx` created
- 15 placeholder images with categories (Exterior, Living Spaces, Bedrooms, Views, Amenities)
- Category filter buttons with active state
- Full lightbox: dark overlay, close button, prev/next arrows, keyboard navigation (Escape, Arrow keys)
- Responsive grid: 3 cols desktop, 2 tablet, 1 mobile

---

## Phase 7: Attractions Page

### Prompt for Claude Code:
```
Build Local Attractions page:

1. Hero section with title

2. Attractions organized by category:
   - Outdoor Activities (hiking, waterfalls, Blue Ridge Parkway)
   - Downtown Waynesville (shops, restaurants, breweries)  
   - Nearby Towns (Asheville, Cherokee, Maggie Valley)
   - Seasonal Activities

3. Each attraction: name, brief description, optional link
   - Card or list format
   - Consider distance/drive time from property
```

### Deliverables:
- [x] Attractions page with categorized listings
- [x] Drive times included
- [x] External links to attraction websites

### Completed:
- `/app/attractions/page.tsx` created
- Outdoor Activities: 5 cards (GSMNP, Blue Ridge Parkway, Cataloochee, Sliding Rock, Looking Glass Falls)
- Downtown Waynesville section with highlights
- Nearby Towns: Asheville, Cherokee, Maggie Valley, Sylva
- Seasonal Activities grid (Spring, Summer, Fall, Winter)
- Hover effects and external link icons

---

## Phase 8: Contact Page

### Prompt for Claude Code:
```
Build Contact page with:

1. Simple contact form:
   - Name, Email, Phone (optional), Message
   - Submit button (coral)
   - Form validation

2. For now, use Formspree or similar for form handling
   - Easy to set up, free tier available
   - Sends to: gracethisplacellc@gmail.com

3. Below form:
   - Brief text: "We typically respond within 24 hours"
   - Property address or general location (optional)
```

### Deliverables:
- [x] Contact form with validation
- [x] Formspree integration ready
- [x] Response time and location info

### Completed:
- `/app/contact/page.tsx` created
- Form fields: Name, Email (validated), Phone (optional), Message
- Client-side validation with error messages
- Formspree action URL (placeholder ID to be replaced)
- 2-column layout: form left, info right (stacks on mobile)
- "We typically respond within 24 hours" + Waynesville, NC location
- Success state after submission

---

## Phase 9: Polish & Optimization

### Prompt for Claude Code:
```
Final polish tasks:

1. Add page transitions/animations (subtle fade-ins)
2. Optimize images setup (next/image with proper sizing)
3. Add metadata/SEO to all pages (title, description, Open Graph)
4. Create favicon from logo
5. 404 page with navigation back home
6. Test all responsive breakpoints
7. Accessibility check (alt tags, focus states, contrast)
8. Loading states for images
```

### Deliverables:
- [x] Page animations added
- [x] SEO metadata on all pages
- [x] Custom 404 page
- [x] Accessibility improvements
- [x] Loading skeleton component

### Completed:
- `globals.css`: fade-in animations (`animate-fade-in`, `animate-fade-in-up`, delay variants)
- SEO metadata with Open Graph for all 9 pages
- `/app/not-found.tsx`: Custom 404 with Header/Footer, mountain illustration, home link
- Enhanced focus states (coral outline) for all interactive elements
- `/components/Skeleton.tsx`: Shimmer loading placeholders (text, circular, rectangular, card variants)
- All pages have `animate-fade-in` on main content

---

## Phase 10: Deployment

### Steps:
1. Push code to GitHub repository
2. Connect repo to Vercel
3. Configure build settings (should auto-detect Next.js)
4. Deploy and test
5. Later: Connect custom domain

---

## Image Checklist

When ready, you'll need:
- [ ] Hero image (sunrise/view shot) - high res, landscape
- [ ] Property exterior (2-3 angles)
- [ ] Each bedroom (4 images minimum)
- [ ] Bathrooms
- [ ] Living room / main spaces
- [ ] Kitchen
- [ ] Hot tub + fireplace area
- [ ] Deck views (sunrise if possible!)
- [ ] Game room
- [ ] Kids game room
- [ ] Detail shots (MCM décor elements)

Recommended: 20-30 images minimum for a good gallery

---

## Future Enhancements (Phase 2)

- Direct booking integration (Lodgify, Hostaway, or custom)
- Availability calendar
- Pricing display
- Guest reviews section
- Blog (local tips, seasonal content)
- Integration with Airbnb/VRBO listings