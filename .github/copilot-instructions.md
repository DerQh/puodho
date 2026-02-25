# Copilot Instructions for the Puodho Project

## Project Overview

This project is a React application built using Vite, designed for fast development and optimized builds. The architecture is component-based, leveraging React's state management and hooks for interactivity.

## Key Components

- **App.jsx**: The main application component that renders the UI and manages state.
- **main.jsx**: The entry point for the React application, where the root component is rendered.
- **vite.config.js**: Configuration file for Vite, specifying plugins and build options.

## Developer Workflows

- **Development**: Run `npm run dev` to start the development server with hot module replacement (HMR).
- **Build**: Use `npm run build` to create an optimized production build.
- **Linting**: Execute `npm run lint` to check for code quality and style issues using ESLint.
- **Preview**: After building, run `npm run preview` to serve the production build locally.

## Project Conventions

- **File Structure**: Components are organized in the `src` directory, with assets stored in the `assets` folder.
- **Styling**: CSS is imported directly into components, and global styles are defined in `index.css`.

## Integration Points

- **React and Vite**: The project uses `@vitejs/plugin-react` for React support, enabling features like Fast Refresh.
- **ESLint**: The project includes ESLint for maintaining code quality, with recommended rules for React.

## External Dependencies

- **React**: The core library for building user interfaces.
- **Vite**: A build tool that provides a fast development environment and optimized builds.

## Communication Patterns

Components communicate through props and state management, utilizing React's hooks for managing local state and effects.

---

This document serves as a guide for AI coding agents to understand the structure and workflows of the Puodho project, enabling them to assist effectively in development tasks.
