# 🛡️ CyberGuard - Cybersecurity for Small Business

A modern SaaS landing page for a cybersecurity platform targeting small businesses. Built with React and Tailwind CSS, featuring a clean, professional design with trustworthy blue and teal color scheme.

## 🌟 Features

### Hero Section
- **Compelling Headline**: "Automate Your Cybersecurity, Protect Your Business"
- **Value Proposition**: Enterprise-grade security made simple for small businesses
- **Clear CTAs**: "Get Started" and "Learn More" buttons
- **Trust Indicators**: SOC 2, GDPR, ISO 27001, HIPAA compliance badges

### Features Section
- **Automated Assessments**: Continuous vulnerability scanning with 24/7 protection
- **Readiness Scoring**: Real-time security posture rating and health tracking
- **Compliance Tools**: Simplified frameworks for GDPR, SOC 2, and industry standards
- **Cyber Insurance Path**: Guided steps to qualify for and obtain cyber insurance

### Pricing Section
- **3-Tier Pricing**: Starter ($99/mo), Growth ($299/mo), Secure ($599/mo)
- **Feature Comparison**: Detailed feature lists for each plan
- **Highlighted Plan**: Growth plan featured as "Most Popular"
- **Free Trial**: All plans include 14-day free trial

### Design Features
- **Responsive Design**: Mobile-first approach, fully responsive across all devices
- **Modern Aesthetic**: Clean, professional design with gradient backgrounds
- **Trustworthy Colors**: Blue and teal color scheme conveying security and trust
- **Smooth Interactions**: Hover effects and transitions for better UX

## 📸 Screenshot

![CyberGuard Landing Page](https://github.com/user-attachments/assets/e445612e-3e21-4b33-875a-162439f8d77a)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Modern web browser (Chrome, Firefox, Safari, Edge)

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

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## 🏗️ Project Structure

```
demo-cyber/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Hero section with CTA
│   │   ├── Features.jsx      # Features showcase
│   │   ├── Pricing.jsx       # Pricing tiers
│   │   └── Footer.jsx        # Footer with links
│   ├── App.jsx               # Main app component
│   ├── index.css             # Tailwind CSS styles
│   └── main.jsx              # App entry point
├── public/                   # Static assets
├── index.html               # HTML template
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── vite.config.js           # Vite configuration
```

## 🔧 Technical Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Icons**: Heroicons (via SVG)
- **Deployment**: Static site (can be deployed to Vercel, Netlify, etc.)

## 🎨 Customization

### Colors

The color scheme can be customized in `src/index.css`:

```css
@theme {
  --color-cyber-blue-500: #0ea5e9;
  --color-cyber-teal-500: #14b8a6;
  /* ... more colors */
}
```

### Content

- **Hero Section**: Edit `src/components/Hero.jsx`
- **Features**: Modify the features array in `src/components/Features.jsx`
- **Pricing Plans**: Update the plans array in `src/components/Pricing.jsx`
- **Footer Links**: Customize `src/components/Footer.jsx`

## 🌐 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is a demonstration application created for educational purposes.

## 🤝 Contributing

This is a demo project. Feel free to fork and customize for your own use.

---

**Built with React + Tailwind CSS** | Modern, responsive, and production-ready
