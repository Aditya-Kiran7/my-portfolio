# React + Vite
## Introduction
Hi, this is my personal portfolio website which demostrates some basics of css and reactJS. Let me quickly summarise about this website and how I built it.

1. Used component folder which includes different sections of the website
2. the folder contains files of type .jsx which returns functions as a whole to the main "App.jsx"
3. ReactJS makes it easy to code any website by making long html/javascript files into single .jsx files. It also contains its own animation/transition libraries as well things like useState etc. which are used for recording data of previous like in dark mode etc.
4. The website IS responsive. This is done by updating the style.css part.

# About the design
1. Used a basic white and black with purple colour coding which is one of the most attractive colour combinations.
2. The navbar remains static even if we scroll down.
3. Scroll is smooth.
4. Added hover effects on cards and buttons with shadow effects.
5. Added cursor highlight as well which can be toggled on/off.
6. Added a mode switch button which uses {useState} and remembers previous mode.


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
