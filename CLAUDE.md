# CLAUDE.md

## Project Overview

React + TypeScript single-page application bootstrapped with Vite and SWC.

## Tech Stack

- **React 19** with functional components and hooks
- **TypeScript 5.9** in strict mode
- **Vite 7** with `@vitejs/plugin-react-swc` (SWC-based fast compilation)
- **ESLint 9** with flat config format

## Commands

```bash
npm run dev       # Start dev server with HMR
npm run build     # Type-check (tsc -b) then production build
npm run lint      # Run ESLint
npm run preview   # Preview production build locally
```

## Project Structure

```
src/
  main.tsx        # Entry point, mounts <App /> in React.StrictMode
  App.tsx         # Root component
  App.css         # App-specific styles
  index.css       # Global styles
  assets/         # Static assets
public/           # Public assets (served as-is)
index.html        # HTML entry point (#root)
```

## Code Conventions

- Functional components only, no class components
- Automatic JSX transform — no need to `import React`
- ES modules (`"type": "module"` in package.json)
- TypeScript strict mode: `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`
- CSS imported directly as files (no CSS Modules)

## TypeScript

- App code targets **ES2022**, node/build tools target **ES2023**
- Bundler mode module resolution (`moduleResolution: "bundler"`)
- Non-null assertions (`!`) acceptable for known DOM elements (e.g., `getElementById('root')!`)

## Notes

- SWC is incompatible with the React Compiler — do not add `babel-plugin-react-compiler`
- To enable type-aware ESLint rules, add `parserOptions.projectService` and switch to `recommendedTypeChecked` or `strictTypeChecked` configs


## Code standards
- Always use TypeScript strict mode
- Functional components only (no class components)
- Keep files under 200 lines
- Write JSDoc for all exported functions

## Things to avoid
- Never commit .env files
- Don't use `any` type in TypeScript
- Don't modify /server/auth — it's sensitive