# Vite + Vue 3 + TypeScript Starter

A modern and minimal starter template for building Vue 3 applications with TypeScript. This template comes pre-configured with Vite for lightning-fast development, TypeScript for type safety, ESLint for code quality, and Vue SFC (Single File Component) support.

## Features

- ⚡️ [Vite](https://vitejs.dev/) - Lightning fast frontend tooling
- 🖖 [Vue 3](https://vuejs.org/) - The Progressive JavaScript Framework
- 📝 [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- 🔍 [ESLint](https://eslint.org/) - Code linting for better quality
- 📑 [Vue SFC](https://vuejs.org/guide/scaling-up/sfc.html) - Single File Components support
- 🔧 Modern configuration out of the box

## Prerequisites

- Node.js (version 16.0 or higher)
- npm or yarn or pnpm

## Getting Started

1. Clone this repository:
```bash
git clone <your-repo-url>
cd vite-vue-starter
```

2. Install dependencies:
```bash
npm install
# or
yarn
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
vite-vue-starter/
├── public/              # Static assets
├── src/                 # Source files
│   ├── assets/         # Project assets
│   ├── components/     # Vue components
│   ├── App.vue         # Root component
│   ├── main.ts         # Application entry point
│   └── vite-env.d.ts   # Vite environment declarations
├── index.html          # Entry HTML file
├── package.json        # Project metadata and dependencies
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── .eslintrc.js        # ESLint configuration
```

## Customization

### ESLint Configuration

The project comes with a default ESLint configuration. You can modify the rules in `.eslintrc.js` to match your coding style preferences.

### TypeScript Configuration

TypeScript settings can be adjusted in `tsconfig.json`. The default configuration provides a good balance of type safety and development experience.

### Vite Configuration

The Vite configuration is located in `vite.config.ts`. You can customize build options, add plugins, and modify the development server settings here.

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
