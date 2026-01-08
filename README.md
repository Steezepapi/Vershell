# Elite Consultancy Agency - Next.js

A modern, professional consultancy agency website built with Next.js 14, React, and modern web technologies.

## Features

- **Next.js 14** with App Router
- **React Components** - Modular and reusable
- **API Routes** - Built-in contact form handling
- **Responsive Design** - Mobile-first approach
- **Modern UI/UX** - Professional branding and animations
- **Contact System** - Functional contact form with backend processing

## Services Offered

- Strategy Consulting
- Digital Transformation
- Process Optimization
- Market Analysis

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Start Production Server**
   ```bash
   npm run build
   npm start
   ```

4. **Open Browser**
   Navigate to `http://localhost:3000`

## Project Structure

```
consultancy-agency-nextjs/
├── app/
│   ├── layout.js           # Root layout
│   ├── page.js             # Home page
│   ├── globals.css         # Global styles
│   └── api/
│       └── contact/
│           └── route.js    # Contact API endpoint
├── components/
│   ├── Navbar.js           # Navigation component
│   ├── Hero.js             # Hero section
│   ├── Services.js         # Services showcase
│   ├── About.js            # About section
│   ├── Team.js             # Team profiles
│   ├── Contact.js          # Contact form
│   └── Footer.js           # Footer component
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies
```

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/contact` - View all contacts (admin)

## Customization

1. **Branding**: Update company name in components
2. **Services**: Modify services array in Services.js
3. **Team**: Update team data in Team.js
4. **Styling**: Adjust CSS in globals.css
5. **Content**: Update text content in components

## Technologies Used

- **Frontend**: Next.js 14, React 18
- **Styling**: CSS3 with modern features
- **API**: Next.js API Routes
- **Architecture**: Component-based with App Router

Ready to help businesses transform and grow! 🚀