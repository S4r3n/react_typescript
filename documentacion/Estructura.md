# Estructura

```
my-react-app/
├── node_modules/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MainContent.tsx
│   ├── App.css
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   └── setupTests.ts
├── .gitignore
├── .swcrc
├── package.json
├── tsconfig.json
├── README.md
└── yarn.lock
```

## main.tsx

Es el archivo base de todas las vistas y que carga la aplicación.
Importa las librerías de react, el css base de toda la aplicación e inicia la aplicación "App" en el root que muestra el explorador.

```
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

## App.tsx

Es el archivo base de todas las vistas y que carga la aplicación.
Importa las librerías de react, el css base de toda la aplicación e inicia la aplicación "App" en el root que muestra el explorador.
En el ejemplo se puede ver que importa un componente Header y que lo devuelve dentro del nodo <main>

```
import Header from "./components/Header"
import headerImg from './assets/react.svg'
import { useState } from "react";

const App = () => {

  return (
    <main>
      <Header image={{src: headerImg, alt: 'logo'}}>
        <h1>Tareas pendientes</h1>
      </Header>
    </main>
  )
}

export default App
```

## Header.tsx

Este archivo es un componente que devuelve un Header de una página web.
Define el objeto HeaderType, tiene un constructor para el objeto y finalmente lo exporta.

```
import { ReactNode } from "react"

type HeaderType = {
    image: {
        src: string,
        alt: string
    },
    children: ReactNode
}
const Header = ({image, children}: HeaderType) => {
  return (
    <header>
        <img {...image} />
        {children}
    </header>
  )
}

export default Header
```
