# 👦🏻 Dens - Portfolio V3

Welcome to the source code for my personal portfolio (Version 3). This project is a modern, high-performance, and fully dynamic portfolio built to showcase my experience as a Full-Stack Web Developer. 

**Live Site:** [https://dens-cm.onrender.com/](https://dens-cm.onrender.com/)

---

## ✨ Features

- **Linear "Document" Design:** A clean, professional UI designed to look like a premium, interactive document.
- **Dynamic Content Management (CMS):** The entire site's content (Work History, Education, Projects, Skills) is driven by a `resume.json` file hosted in a **Supabase** bucket.
- **Admin Panel:** A secured, authenticated Admin route that allows for live editing of the portfolio JSON without needing to push code changes.
- **ATS-Friendly Resume Generation:** Includes a "Quick Action" that compiles the visual portfolio data into a machine-readable, plain-text format optimized for Applicant Tracking Systems (ATS).
- **Integrated Contact Form:** A built-in developer console powered by **EmailJS** that sends direct inquiries straight to my email.
- **Scroll Reveal Animations:** Custom, lightweight `IntersectionObserver` hooks to smoothly slide and fade elements into view as the user scrolls.
- **SEO Optimized:** Fully configured Open Graph (OG) and Twitter meta tags for beautiful social media link unfurling, plus Schema.org structured data.
- **Google Analytics (GA4):** Silent tracking implemented for monitoring site traffic and engagement.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 18 + Vite
- **Language:** TypeScript
- **UI Library:** [Chakra UI (v3)](https://chakra-ui.com/)
- **Icons:** `react-icons`

### Backend & Integrations
- **Database / Storage / Auth:** Supabase
- **Email Delivery:** EmailJS
- **Analytics:** Google Analytics (gtag)
- **Hosting:** Render

---

## 🚀 Getting Started

To run this project locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio-v3.git
cd portfolio-v3
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory and add your keys:
```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Admin Authentication
VITE_ADMIN_PASSWORD=your_admin_password

# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_EMAILJS_TEMPLATE_ID_PDF=your_emailjs_pdf_template_id

# Google Analytics
VITE_GA_MEASUREMENT_ID=your_ga_measurement_id
```

### 4. Run the development server
```bash
npm run dev
```

---

## 📝 License

Designed and developed by **Dens Maltos**. All rights reserved.
