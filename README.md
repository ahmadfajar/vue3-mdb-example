# Vue MDBootstrap Examples

This repository contains examples on how to use the Vue MDBootstrap v2.2 components,
and integrate Bootstrap v5 or TailwindCss v4 framework.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` 
CLI with `vue-tsc` for type checking. In editors, we need [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the 
TypeScript language service aware of `.vue` file types.

If the standalone TypeScript plugin doesn't feel fast enough to you, _Vue - Official_ has also 
implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

Clone this repository and runs command below.

```sh
# with npm
npm install

# with yarn
yarn install
```

### Compile and Hot-Reload for Development

**Running examples with Bootstrap v5 css framework.**

```sh
# with npm
npm run bootstrap:dev

# with yarn
yarn bootstrap:dev
```

**Running examples with TailwindCss v4 css framework.**

```sh
# with npm
npm run tailwind:dev

# with yarn
yarn tailwind:dev
```

Then open your browser and point to: http://localhost:5175/ 

### Type-Check, Compile and Minify for Production

**Build examples with Bootstrap v5 css framework.**

```sh
# with npm
npm run bootstrap:prod

# with yarn
yarn bootstrap:prod
```

**Build examples with TailwindCss v4 css framework.**

```sh
# with npm
npm run tailwind:prod

# with yarn
yarn tailwind:prod
```
