# Titanic Visualizer

React application for visualizing Titanic data, built with Vite, React Router, and ApexCharts.

## 📋 Prerequisites

- Node.js 20.19+ or 22.12+
- npm 10.7.0+

## 🚀 Installation

1. Clone the repository or navigate to the project folder:
```bash
cd titanic-visualizer
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Running the Project

### Development Mode

To start the development server:

```bash
npm run dev
```

The project will be available at `http://localhost:5173` (or another port indicated by Vite).

### Production Build

To create a production build:

```bash
npm run build
```

Optimized files will be generated in the `dist/` folder.

### Preview Build

To preview the production build locally:

```bash
npm run preview
```

### Linting

To check the code with ESLint:

```bash
npm run lint
```

## 📁 Project Structure

```
titanic-visualizer/
├── public/                 # Public static files
├── src/
│   ├── components/        # Reusable components
│   │   └── Sidebar/       # Side navigation component
│   ├── data/              # Data and mocks
│   │   └── mock/          # Mock data
│   ├── layouts/           # Application layouts
│   │   └── MainLayout.jsx # Main layout with Sidebar
│   ├── pages/             # Application pages
│   │   ├── TablePage.jsx  # Table page
│   │   ├── LineChartPage.jsx # Line chart page
│   │   └── HistogramPage.jsx  # Histogram page
│   ├── router/            # Route configuration
│   │   ├── AppRouter.jsx  # Main router
│   │   └── routesConfig.jsx # Route configuration
│   ├── styles/            # Global styles
│   │   ├── global.scss    # Global styles
│   │   ├── variables.scss # SCSS variables
│   │   └── mixins.scss    # SCSS mixins
│   ├── App.jsx            # Root component
│   └── main.jsx           # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## 🛠 Technologies Used

- **React 19.2.0** - JavaScript library for user interfaces
- **Vite 7.2.4** - Build tool and dev server
- **React Router DOM 6.20.0** - Routing
- **React Bootstrap 2.9.1** - Bootstrap-based UI components
- **Bootstrap 5.3.2** - CSS framework
- **ApexCharts 4.0.0** - Charting library
- **React ApexCharts 1.9.0** - React wrapper for ApexCharts
- **Sass 1.69.5** - CSS preprocessor

## 🎯 Features

### Available Routes

- `/` - Redirects to `/table`
- `/table` - Table page with raw data (pagination and search)
- `/line-chart` - Line chart Age × Fare
- `/histogram` - Histogram of survivors by class
- `*` - 404 page for routes not found

### Main Components

- **Sidebar**: Fixed side navigation with dropdown to switch routes
- **MainLayout**: Main layout with responsive grid (Sidebar + Content)
- **AppRouter**: Nested route configuration with React Router v6+

## 🎨 Styles

The project uses **modular SCSS** with modern syntax (`@use` instead of `@import`):

- Global variables in `src/styles/variables.scss`
- Reusable mixins in `src/styles/mixins.scss`
- Global styles in `src/styles/global.scss`
- Each component/page has its own `.scss` file

## 📝 Code Standards

- **Clean Code**: Small components with single responsibility
- **Performance**: Use of `React.memo`, `useCallback` and `useMemo`
- **Modular SCSS**: Styles separated by component
- **Organized Imports**: React → libs → components → styles
- **No Inline CSS**: All styles in SCSS files

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates production build |
| `npm run preview` | Previews the production build |
| `npm run lint` | Runs ESLint |

## 📄 License

This project is private.

---

**Developed with ❤️ using React + Vite**
