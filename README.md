# 🌟 Raintor Assessment

A modern, feature-rich Next.js application showcasing real-time communication, interactive maps, and beautiful UI components. Built with the latest web technologies and optimized for performance.

## 🚀 Live Demo

**[View Live Application](https://raintor-assessment-ruby.vercel.app/)**

Experience the full-featured application deployed on Vercel with real-time capabilities and interactive features.

## ✨ Features

### 🏠 Portfolio Sections

- **Hero Section** - Eye-catching landing with smooth animations
- **About** - Personal/professional information
- **Skills** - Technical expertise showcase
- **Process** - Step-by-step workflow visualization
- **Work Experience** - Professional background
- **Contact** - Get in touch functionality

### 🗺️ Interactive Maps

- **Location Tracking** - Real-time location visualization
- **Interactive Leaflet Maps** - Smooth map interactions
- **User Positioning** - Sender/Receiver location management

### 👥 User Management

- **Infinite Scroll** - Seamless user list loading
- **Real-time Updates** - Live user data with SignalR
- **User Cards** - Beautiful user profile displays

### 🎨 Modern UI/UX

- **Framer Motion Animations** - Smooth, performant animations
- **Responsive Design** - Perfect on all devices
- **Custom Fonts** - Sporting Grotesque typography
- **Dark/Light Theme** - Theme switching support
- **Intersection Observer** - Optimized scroll-based animations

## 🛠️ Tech Stack

### Frontend

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - Latest React with concurrent features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first styling

### State & Data

- **[TanStack Query](https://tanstack.com/query)** - Powerful data fetching & caching
- **[SignalR](https://dotnet.microsoft.com/apps/aspnet/signalr)** - Real-time communication

### Maps & Location

- **[Leaflet](https://leafletjs.com/)** - Interactive maps
- **[React-Leaflet](https://react-leaflet.js.org/)** - React bindings for Leaflet

### UI & Animation

- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animations
- **[Lucide React](https://lucide.dev/)** - Beautiful icons
- **[Clsx](https://github.com/lukeed/clsx)** - Conditional class names

### Development & Testing

- **[Jest](https://jestjs.io/)** - JavaScript testing framework
- **[Testing Library](https://testing-library.com/)** - Simple testing utilities
- **[ESLint](https://eslint.org/)** - Code linting and formatting

## 🚀 Quick Start

### Prerequisites

- **[Bun](https://bun.sh/)** - Fast JavaScript runtime & package manager
- **Node.js** 18+ (for compatibility)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Md-Rijwan-Jannat/raintor-assessment.git
   cd raintor-assessment
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Start development server**

   ```bash
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

| Command     | Description              |
| ----------- | ------------------------ |
| `bun dev`   | Start development server |
| `bun build` | Build for production     |
| `bun start` | Start production server  |
| `bun lint`  | Run ESLint               |
| `bun test`  | Run tests                |

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (WithHomeLAyout)/        # Layout group
│   │   ├── _components/         # Page-specific components
│   │   │   ├── module/         # Feature modules
│   │   │   │   ├── home/       # Home page components
│   │   │   │   ├── location/   # Location features
│   │   │   │   └── users/      # User management
│   │   │   └── ui/             # Reusable UI components
│   │   ├── location/           # Location page
│   │   ├── users/              # Users page
│   │   └── layout.tsx          # Layout component
│   ├── globals.css             # Global styles
│   └── layout.tsx              # Root layout
├── hooks/                       # Custom React hooks
│   ├── useInfiniteUsers.ts     # Infinite scroll for users
│   └── useSignalR.ts           # SignalR connection
├── provider/                   # Context providers
│   ├── QueryProvider.tsx      # TanStack Query setup
│   └── ThemeProvider.tsx      # Theme management
├── utils/                      # Utility functions
│   ├── cn.ts                  # Class name utilities
│   └── smoothScroll.ts        # Smooth scrolling
└── types/                     # TypeScript type definitions
```

## 🎨 Styling & Design

### Custom Fonts

- **Sporting Grotesque Regular** - Body text
- **Sporting Grotesque Bold** - Headers and emphasis

### Tailwind Configuration

- Custom color palette
- Responsive breakpoints
- Animation utilities
- Typography scale

## 🔧 Development Features

### Performance Optimizations

- **Code Splitting** - Automatic route-based splitting
- **Image Optimization** - Next.js Image component
- **Bundle Analysis** - Webpack bundle analyzer ready

### Developer Experience

- **TypeScript** - Full type safety
- **ESLint** - Code quality enforcement
- **Hot Reload** - Instant feedback during development
- **Error Boundaries** - Graceful error handling

## 🧪 Testing

Run the test suite:

```bash
bun test
```

Run tests in watch mode:

```bash
bun test --watch
```

## 🌐 Deployment

### Live Application

The application is currently deployed on Vercel and accessible at:
**https://raintor-assessment-ruby.vercel.app/**

### Production Build

```bash
bun build
bun start
```

### Deployment Platforms

- **Vercel** ✅ (Currently deployed)
- **Netlify**
- **AWS Amplify**
- **Docker**

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For questions or support, please reach out through the contact form on the website.

---

<div align="center">
  <strong>Built with ❤️ using Bun and Next.js</strong>
</div>
