# Mahlatse Rabothata — Personal Portfolio Website

A fast, responsive, and modern personal portfolio website built with pure semantic HTML5, CSS3, and modular vanilla JavaScript.

- **Author:** Mahlatse Rabothata
- **Headline:** Computer Science Graduate &mdash; AI, Data &amp; Software Engineering
- **GitHub:** [https://github.com/p4ntomath](https://github.com/p4ntomath)
- **Live Links:**
  - **DropSto:** [https://dropsto-123.web.app/](https://dropsto-123.web.app/)
  - **AI Cover Letter Generator:** [https://ai-cover-letter-390046968827.europe-west1.run.app/](https://ai-cover-letter-390046968827.europe-west1.run.app/)
  - **HxH Portfolio:** [https://mahlatse-rabothata.netlify.app/](https://mahlatse-rabothata.netlify.app/)
  - **GLS Research Repo:** [https://github.com/p4ntomath/gls-lesion-segmentation](https://github.com/p4ntomath/gls-lesion-segmentation)
  - **N-Link Pendulum Simulation:** [https://github.com/p4ntomath/Mechanics-n-link-pendulum](https://github.com/p4ntomath/Mechanics-n-link-pendulum)

---

## 🚀 Key Features

- **Zero-Dependency Architecture:** Pure static files without Node.js or bundlers. Deploys instantly to GitHub Pages, Netlify, or Vercel.
- **Dark Mode Support:** Auto-detects system color scheme preference and persists user preference across visits via `localStorage` with zero flash of unstyled content (FOUC).
- **Responsive Theme Toggle:** Sleek circular toggle button integrated into `<site-navbar>` with tailored mobile proportions.
- **Contact Form Popup:** Direct message popup powered by FormSubmit sending directly to `morwawarabothata5@gmail.com`.
- **Deduplicated Content:** Clear separation between software projects, scientific research, education, and campus leadership.
- **Up-to-Date Resume:** Direct link to your latest CV (`data/Mahlatse_Rabothata_CV.pdf`).

---

## 📁 Directory Structure

```
portfolio/
├── index.html                   # Main portfolio landing page
├── social.html                  # Curated social media links page
├── social/
│   └── index.html               # Clean /social routing support
├── .nojekyll                    # Ensures fast, direct GitHub Pages static serving
├── site.webmanifest             # PWA Web manifest
├── sitemap.xml                  # XML sitemap for search engines
├── robots.txt                   # Search crawler directives
├── css/
│   ├── stylesheet.css           # Full source stylesheet
│   ├── stylesheet.min.css       # Minified production stylesheet
│   └── mail.css                 # Contact popup modal styles
├── js/
│   ├── components.js            # Custom web components (<site-navbar>, <site-footer>)
│   ├── dark_mode.js             # Theme toggle logic & system sync
│   ├── mail.js                  # FormSubmit modal handler
│   ├── navbar_active.js         # Scroll spy for active navbar section
│   ├── navbar_scroll.js         # Navbar hide/show on scroll
│   ├── hamburger.js             # Mobile menu toggle
│   ├── smooth_scroll.js         # Smooth internal link scrolling
│   ├── bio_scroll.js            # Hero scroll behavior
│   ├── cross_page_scroll.js     # Page transition animations
│   └── last_modified.js         # Dynamic footer last modified date
├── images/
│   ├── avatar.webp              # Optimized recent portrait
│   ├── avatar.png               # High-res source portrait
│   └── ...                      # App icons and favicons
└── data/
    └── Mahlatse_Rabothata_CV.pdf # Updated PDF resume
```

---

## 🌐 Deploying to GitHub Pages (Step-by-Step)

### Option A: If your repo is `p4ntomath.github.io` (Recommended)

1. Open PowerShell or Terminal inside the `portfolio` folder:
   ```powershell
   cd C:\Users\morwa\Desktop\new-portfolio\portfolio
   ```
2. Initialize Git and commit all files:
   ```powershell
   git init
   git add .
   git commit -m "Launch new personal portfolio website"
   git branch -M main
   ```
3. Link your GitHub repository:
   ```powershell
   git remote add origin https://github.com/p4ntomath/p4ntomath.github.io.git
   git push -u origin main --force
   ```
4. On GitHub, navigate to **Settings** > **Pages**:
   - Source: **Deploy from a branch**
   - Branch: **main** / **/(root)**
   - Click **Save**.
5. Your website will be live in 1–2 minutes at:
   **`https://p4ntomath.github.io/`** (or your custom domain if configured).

### Option B: If deploying to a project repo (e.g. `portfolio`)

If your repo is named something like `portfolio`, your site will be live at `https://p4ntomath.github.io/portfolio/`. Everything is configured with relative paths, so it will work right out of the box!
