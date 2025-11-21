# 🛡️ CyberSecure - Modern SaaS Landing Page

A modern, professional, and fully responsive landing page for a cybersecurity SaaS platform built with React, Vite, and Tailwind CSS.

## 🌟 Features

This landing page showcases a complete cybersecurity SaaS platform with:

- **Hero Section** - Compelling headline and value proposition with dual CTAs
- **Features Section** - Highlighting key capabilities:
  - Automated Assessments
  - Readiness Scoring
  - Compliance Tools
  - Cyber Insurance Guidance
- **Pricing Section** - Three-tier pricing (Basic, Pro, Enterprise)
- **Footer** - Company info, navigation links, and social media

## 🚀 Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code quality and consistency

## 🎨 Design Features

- Modern, professional cybersecurity theme
- Fully responsive (mobile, tablet, desktop)
- Gradient backgrounds and smooth animations
- Accessible and semantic HTML
- Optimized for performance

## 📦 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/varfmx21/demo-cyber.git
   cd demo-cyber
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
demo-cyber/
├── src/
│   ├── components/
│   │   ├── Hero.jsx       # Hero section with CTA
│   │   ├── Features.jsx   # Features/benefits showcase
│   │   ├── Pricing.jsx    # Pricing plans
│   │   └── Footer.jsx     # Footer with links
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Tailwind directives
├── public/                # Static assets
├── index.html             # HTML template
├── package.json           # Dependencies
├── vite.config.js         # Vite configuration
└── tailwind.config.js     # Tailwind configuration
```

## 🎯 Key Sections

### Hero Section
- Attention-grabbing headline about automating cybersecurity
- Clear value proposition for small businesses
- Dual CTAs: "Get Started Free" and "Learn More"
- Trust indicators (no credit card, 14-day trial, cancel anytime)

### Features Section
- Four key features with icons and descriptions
- Additional benefits section with statistics
- Clean card-based layout

### Pricing Section
- Three pricing tiers (Basic, Pro, Enterprise)
- Feature comparison
- Highlighted "Most Popular" plan
- Clear CTAs for each plan

### Footer
- Company information and branding
- Social media links
- Product and company navigation
- Legal links (Privacy, Terms, Cookies)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Customization

### Colors
Modify the Tailwind config (`tailwind.config.js`) to change the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      primary: { ... }
    }
  }
}
```

### Content
Edit the component files in `src/components/` to customize text, features, and pricing.

## 📄 License

This is a demonstration project for educational purposes.

## 🤝 Contributing

Feel free to fork and customize for your own use.

---

Built with ❤️ using React, Vite, and Tailwind CSS
