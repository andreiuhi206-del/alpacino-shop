# Al Pacino - Italian E-commerce Landing Page

A modern, responsive React-based landing page for an Italian products e-commerce store.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/andreiuhi206-del/alpacino-shop.git
cd alpacino-shop
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser to `http://localhost:3000`

## 📦 Build for Production

```bash
npm run build
```

## 🛠️ Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **React Scripts** - Build tool

## 📂 Project Structure

```
src/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProductShowcase.tsx
│   ├── CustomerReviews.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── App.tsx
├── index.tsx
└── index.css
```

## 🎨 Features

- Responsive design (mobile, tablet, desktop)
- Smooth scrolling navigation
- Product showcase with ratings
- Customer testimonials
- Contact form
- Italian-themed color scheme
- Modern UI components

## 🌐 Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### GitHub Pages

1. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/alpacino-shop"
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add to scripts in `package.json`:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

4. Deploy:
```bash
npm run deploy
```

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.
