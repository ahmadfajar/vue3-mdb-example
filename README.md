# Vue MDBootstrap Examples

This repository contains demos and/or examples on how to use the **Vue MDBootstrap** v2.2 components,
and integrate Bootstrap v5 or TailwindCSS v4 framework.

The example pages is separated in two parts:
1. `src/bootstrap`, which shows how to leverage the Bootstrap v5 CSS framework 
2. `src/tailwind`, which shows how to leverage the TailwindCSS v4 CSS framework 

## IDE Setup

### Recommended Setup

[VSCode](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar). 

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` 
CLI with `vue-tsc` for type checking. In editors, we need [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the 
TypeScript language service aware of `.vue` file types.


## Configuration Adjustment

See [Vite Configuration Reference](https://vite.dev/config/).


## Components Documentation

For full documentation, please visit [Vue MDBootstrap](https://ahmadfajar.github.io/) website.


## Quick Start

### Project Setup

Clone this repository and runs command below.

```sh
# with npm
npm install

# with yarn
yarn install
```

### Compile and Hot-Reload for Development

**Running examples with Bootstrap v5 CSS framework.**

```sh
# with npm
npm run bootstrap:dev

# with yarn
yarn bootstrap:dev
```

**Running examples with Tailwind v4 CSS framework.**

```sh
# with npm
npm run tailwind:dev

# with yarn
yarn tailwind:dev
```

Then open your browser and point to: http://localhost:5175/ 

### Type-Check, Compile and Minify for Production

**Build examples with Bootstrap v5 CSS framework.**

```sh
# with npm
npm run bootstrap:prod

# with yarn
yarn bootstrap:prod
```

**Build examples with Tailwind v4 CSS framework.**

```sh
# with npm
npm run tailwind:prod

# with yarn
yarn tailwind:prod
```
