# REACT + TYPESCRIPT

## Instalar node
Diferentes versiones de NodeJs instaladas mediante Node Version Manager (NVM) o Fast Node Manager (FNM) 
* https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/ 
* https://github.com/Schniz/fnm

Las versiones de NodeJs que deben estar instaladas son:
* 22.14.0
* 20.18.3
* 18.20.7
* 16.20.0

## IDE Recomendado Visual Studio Code
https://code.visualstudio.com/
Se recomiendan las siguientes extensiones:
* Tailwind CSS IntelliSense: https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss
* ES7+ React/Redux/React-Native snippets: https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

## Crear proyecto
npm create vite

## Instalar paquetes
npm install

## Ejecutar proyecto
npm run dev

## Estructura del proyecto

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
│   ├── componentes/
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

La base está escrita en App.txs.
Cada componente debe escribirse en su propio fichero txs dentro de una carpeta llamada "components" dentro de la carpeta "src".



