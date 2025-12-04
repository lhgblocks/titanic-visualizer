# Titanic Visualizer

Aplicação React para visualização de dados do Titanic, desenvolvida com Vite, React Router e ApexCharts.

## 📋 Pré-requisitos

- Node.js 20.19+ ou 22.12+
- npm 10.7.0+

## 🚀 Instalação

1. Clone o repositório ou navegue até a pasta do projeto:
```bash
cd titanic-visualizer
```

2. Instale as dependências:
```bash
npm install
```

## 🏃 Executando o Projeto

### Modo Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173` (ou outra porta indicada pelo Vite).

### Build de Produção

Para criar uma build de produção:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

### Preview da Build

Para visualizar a build de produção localmente:

```bash
npm run preview
```

### Linting

Para verificar o código com ESLint:

```bash
npm run lint
```

## 📁 Estrutura do Projeto

```
titanic-visualizer/
├── public/                 # Arquivos estáticos públicos
├── src/
│   ├── components/        # Componentes reutilizáveis
│   │   └── Sidebar/       # Componente de navegação lateral
│   ├── data/              # Dados e mocks
│   │   └── mock/          # Dados mockados
│   ├── layouts/           # Layouts da aplicação
│   │   └── MainLayout.jsx # Layout principal com Sidebar
│   ├── pages/             # Páginas da aplicação
│   │   ├── TablePage.jsx  # Página de tabela
│   │   ├── LineChartPage.jsx # Página de gráfico de linha
│   │   └── HistogramPage.jsx  # Página de histograma
│   ├── router/            # Configuração de rotas
│   │   ├── AppRouter.jsx  # Router principal
│   │   └── routesConfig.jsx # Configuração de rotas
│   ├── styles/            # Estilos globais
│   │   ├── global.scss    # Estilos globais
│   │   ├── variables.scss # Variáveis SCSS
│   │   └── mixins.scss    # Mixins SCSS
│   ├── App.jsx            # Componente raiz
│   └── main.jsx           # Ponto de entrada
├── index.html
├── package.json
└── vite.config.js
```

## 🛠 Tecnologias Utilizadas

- **React 19.2.0** - Biblioteca JavaScript para interfaces
- **Vite 7.2.4** - Build tool e dev server
- **React Router DOM 6.20.0** - Roteamento
- **React Bootstrap 2.9.1** - Componentes UI baseados em Bootstrap
- **Bootstrap 5.3.2** - Framework CSS
- **ApexCharts 4.0.0** - Biblioteca de gráficos
- **React ApexCharts 1.9.0** - Wrapper React para ApexCharts
- **Sass 1.69.5** - Pré-processador CSS

## 🎯 Funcionalidades

### Rotas Disponíveis

- `/` - Redireciona para `/table`
- `/table` - Página de tabela com dados brutos (paginação e busca)
- `/line-chart` - Gráfico de linha Age × Fare
- `/histogram` - Histograma de sobreviventes por classe
- `*` - Página 404 para rotas não encontradas

### Componentes Principais

- **Sidebar**: Navegação lateral fixa com dropdown para trocar de rota
- **MainLayout**: Layout principal com grid responsivo (Sidebar + Content)
- **AppRouter**: Configuração de rotas aninhadas com React Router v6+

## 🎨 Estilos

O projeto utiliza **SCSS modular** com a sintaxe moderna (`@use` em vez de `@import`):

- Variáveis globais em `src/styles/variables.scss`
- Mixins reutilizáveis em `src/styles/mixins.scss`
- Estilos globais em `src/styles/global.scss`
- Cada componente/página possui seu próprio arquivo `.scss`

## 📝 Padrões de Código

- **Clean Code**: Componentes pequenos com responsabilidade única
- **Performance**: Uso de `React.memo`, `useCallback` e `useMemo`
- **SCSS Modular**: Estilos separados por componente
- **Imports Organizados**: React → libs → components → styles
- **Sem CSS Inline**: Todos os estilos em arquivos SCSS

## 🔧 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Cria build de produção |
| `npm run preview` | Visualiza a build de produção |
| `npm run lint` | Executa o ESLint |

## 📄 Licença

Este projeto é privado.

---

**Desenvolvido com ❤️ usando React + Vite**
