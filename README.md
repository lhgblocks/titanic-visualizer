# Titanic Visualizer

A comprehensive React application for visualizing real Titanic passenger data, built with Vite, React Router, and ApexCharts. This project provides interactive data visualization including a searchable table, line charts, and histograms.

## 📋 Prerequisites

- Node.js 20.19+ or 22.12+
- npm 10.7.0+

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone <repository-url>
cd titanic-visualizer
npm install
```

### 2. Convert CSV Data

The project includes a CSV file with real Titanic passenger data. Convert it to JSON format:

```bash
npm run convert-data
```

This will generate `src/data/titanic.json` with 891 passenger records.

### 3. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port indicated by Vite).

## 📁 Project Structure

```
titanic-visualizer/
├── public/                 # Public static files
├── scripts/                # Utility scripts
│   └── convertCsvToJson.js # CSV to JSON converter
├── src/
│   ├── components/         # Reusable components
│   │   ├── Charts/         # Chart components
│   │   │   ├── LineChartView.jsx
│   │   │   ├── LineChartView.scss
│   │   │   ├── HistogramView.jsx
│   │   │   └── HistogramView.scss
│   │   └── Sidebar/        # Side navigation
│   │       ├── Sidebar.jsx
│   │       └── Sidebar.scss
│   ├── data/               # Data files and processors
│   │   ├── titanic.csv     # Source CSV file
│   │   ├── titanic.json    # Generated JSON (run convert-data)
│   │   └── processData.js  # Data processing functions
│   ├── hooks/              # Custom React hooks
│   │   ├── useSearch.js    # Search functionality
│   │   └── usePagination.js # Pagination logic
│   ├── layouts/            # Application layouts
│   │   ├── MainLayout.jsx
│   │   └── MainLayout.scss
│   ├── pages/              # Page components
│   │   ├── TablePage.jsx   # Data table with search
│   │   ├── TablePage.scss
│   │   ├── LineChartPage.jsx
│   │   ├── LineChartPage.scss
│   │   ├── HistogramPage.jsx
│   │   └── HistogramPage.scss
│   ├── router/             # Route configuration
│   │   ├── AppRouter.jsx
│   │   └── routesConfig.jsx
│   ├── styles/             # Global styles
│   │   ├── global.scss
│   │   ├── variables.scss
│   │   └── mixins.scss
│   ├── App.jsx             # Root component
│   └── main.jsx            # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## 🛠 Technologies Used

- **React 19.2.0** - JavaScript library for building user interfaces
- **Vite 7.2.4** - Next-generation frontend build tool
- **React Router DOM 6.20.0** - Declarative routing for React
- **React Bootstrap 2.9.1** - Bootstrap components built with React
- **Bootstrap 5.3.2** - Popular CSS framework
- **ApexCharts 4.0.0** - Modern charting library
- **React ApexCharts 1.9.0** - React wrapper for ApexCharts
- **Sass 1.69.5** - CSS preprocessor with advanced features

## 🎯 Features

### 📊 Data Visualization

- **Raw Table Page** (`/table`)
  - Displays all 891 passenger records
  - Real-time search by name, sex, or age
  - Pagination with 10 items per page
  - Responsive table design
  - Handles null values gracefully

- **Line Chart Page** (`/line-chart`)
  - Age × Fare relationship visualization
  - Data grouped by 10-year age bins
  - Average fare calculation per age group
  - Smooth line chart with interactive features

- **Histogram Page** (`/histogram`)
  - Survivors by passenger class (1st, 2nd, 3rd)
  - Bar chart visualization
  - Real data from Titanic dataset

### 🧭 Navigation

- **Sidebar**: Fixed side navigation with dropdown selector
- **Responsive Layout**: Adapts to different screen sizes
- **Route Management**: Clean URL routing with React Router v6+

### ⚡ Performance Optimizations

- Custom hooks for search and pagination
- `useMemo` for expensive calculations
- `useCallback` for event handlers
- `React.memo` for component memoization
- Efficient data processing

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Starts the development server with HMR |
| `npm run build` | Creates optimized production build |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint to check code quality |
| `npm run convert-data` | Converts `titanic.csv` to `titanic.json` |

## 📊 Data Processing

The project includes a data processing module (`src/data/processData.js`) with three main functions:

- **`getTableData(json)`**: Returns the complete dataset for table display
- **`getLineChartData(json)`**: Processes data for line chart (groups by age, calculates average fare)
- **`getHistogramData(json)`**: Calculates survivors count by passenger class

### CSV to JSON Conversion

The `convert-data` script:
- Reads `src/data/titanic.csv`
- Parses CSV with proper quote handling
- Converts to JSON with normalized structure
- Handles null/empty values correctly
- Generates `src/data/titanic.json`

**Data Fields:**
- `PassengerId` - Unique passenger identifier
- `Survived` - Survival status (0 = No, 1 = Yes)
- `Pclass` - Passenger class (1, 2, or 3)
- `Name` - Passenger name
- `Sex` - Gender (male/female)
- `Age` - Age in years (can be null)
- `Fare` - Ticket fare (can be null)

## 🎨 Styling

The project uses **modular SCSS** with modern syntax:

- **Variables**: Centralized color and sizing variables
- **Mixins**: Reusable style patterns
- **Component Styles**: Each component has its own `.scss` file
- **Modern Syntax**: Uses `@use` instead of deprecated `@import`

## 📝 Code Standards

- ✅ **Clean Code**: Small, focused components with single responsibility
- ✅ **Performance**: Strategic use of React hooks for optimization
- ✅ **Modular Architecture**: Separation of concerns
- ✅ **Organized Imports**: Consistent import order (React → libs → hooks → components → styles)
- ✅ **No Inline Styles**: All styling in SCSS files
- ✅ **Type Safety**: Proper null handling and data validation

## 🧩 Custom Hooks

### `useSearch(data, query, keys)`
Optimized search hook that filters data based on query string across specified keys.

```javascript
const filteredData = useSearch(data, searchQuery, ["Name", "Sex", "Age"]);
```

### `usePagination(data, itemsPerPage)`
Pagination hook with page navigation controls.

```javascript
const { currentPage, totalPages, paginatedData, next, prev, goTo } = 
  usePagination(data, 10);
```

## 🚀 Production Build

To create a production build:

```bash
npm run build
```

Optimized files will be generated in the `dist/` folder. The build includes:
- Code minification
- Tree shaking
- Asset optimization
- CSS extraction

## 📄 License

This project is private.

## 🤝 Contributing

This is a private project. For questions or suggestions, please contact the repository owner.

---

**Developed with ❤️ using React + Vite**

*Visualizing history, one data point at a time.*
