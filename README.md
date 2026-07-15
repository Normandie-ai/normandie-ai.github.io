# Normandie AI Website

A moder website built with Astro.js for the Normandie AI initiative.
<img width="1512" height="823" alt="Capture d’écran 2025-07-16 à 23 44 28" src="https://github.com/user-attachments/assets/5ab4e6a9-9156-4fed-ab6c-c7cda9bb14d9" />

## 🏗️ Project Structure

This project consists of one main parts:

```
normandie-ai-website/
├── astro/          # Frontend (Astro.js)
```

### Frontend (Astro)

- **Framework**: Astro.js with TypeScript
- **Styling**: TailwindCSS with custom design system
- **Fonts**: Custom typography (Avega, Maax)
- **Monitoring**: Sentry integration
- **Deployment**: GitHub Pages ready

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Yarn package manager

### 1. Clone the Repository

```bash
git clone <repository-url>
cd normandie-ai-website
```

### 2. Setup Frontend (Astro)

```bash
cd astro
yarn install
yarn dev
```

The website will be available at `http://localhost:4321`

## 🔧 Development

### Frontend Commands (from `astro/` directory)

| Command         | Action                                       |
| --------------- | -------------------------------------------- |
| `yarn dev`      | Start development server at `localhost:4321` |
| `yarn build`    | Build production site to `./dist/`           |
| `yarn preview`  | Preview production build locally             |
| `yarn lint`     | Run Biome linter                             |
| `yarn lint:fix` | Fix linting issues automatically             |

## 🎨 Design System

### Typography

- **Avega**: Display font for headings
- **Maax**: Body text font

### Colors

- Primary: `#725CFA` (Purple)
- Accent: `#6336E4` (Dark Purple)
- Background gradients available

### Components

The design system includes reusable components:

- `AvegaTitle`: Custom styled headings
- `Button`: Multiple variants (default, shadow, outline)
- `Card`: Content cards with background images
- `DayCounter`: Countdown timer component

## 🌍 Environment Configuration

### Astro Environment Variables

Create `astro/.env` file:

```env
STRAPI_URL=http://localhost:1337
```

## 🚀 Deployment

### Frontend (GitHub Pages)

The site is configured for automatic deployment to GitHub Pages:

- Deploys to: `https://normandie-ai.github.io`
- Automatic builds on push to main branch
- Base URL configuration handled automatically

## 🛠️ Development Tools

### Code Quality

- **Biome**: Linting and formatting
- **TypeScript**: Type safety
- **Lefthook**: Git hooks for quality assurance

### Monitoring

- **Sentry**: Error tracking and performance monitoring
- **Spotlight**: Development debugging tools

## 📁 Key Directories

### Frontend Structure

```
astro/src/
├── components/
│   ├── blocks/          # Page building blocks
│   ├── shared/          # Reusable components
│   ├── Header.astro     # Site header
│   └── Footer.astro     # Site footer
├── layouts/             # Page layouts
├── pages/               # Route pages
├── lib/                 # Utility functions
└── styles/              # Global styles
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `yarn lint:fix`
5. Submit a pull request

## 📚 Documentation

- [Astro Documentation](https://docs.astro.build)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
