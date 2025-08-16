# Portfolio Website

## Overview

This is a modern, single-page portfolio website for Harshit Shukla, an aspiring software developer. The project showcases a professional dark-themed design with sections for hero/introduction, about, projects, skills, and contact. Built with React, TypeScript, and Tailwind CSS on the frontend, with an Express.js backend for handling contact form submissions. The application follows a full-stack architecture with both client and server components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with custom CSS variables for consistent theming
- **UI Components**: Radix UI primitives with shadcn/ui component library for accessible, customizable components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and API interactions
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints for contact form submission and data retrieval
- **Data Storage**: In-memory storage implementation with interface-based design for easy database integration
- **Validation**: Zod for runtime type validation and schema enforcement

### Database Schema
- **ORM**: Drizzle ORM configured for PostgreSQL with schema definitions
- **Tables**: 
  - Users table with id, username, and password fields
  - Contacts table for storing contact form submissions with id, name, email, message, and timestamp
- **Migrations**: Drizzle Kit for database migrations and schema management

### Development Setup
- **Monorepo Structure**: Shared TypeScript configuration and schemas between client and server
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)
- **Development Server**: Integrated Vite dev server with Express backend proxy
- **Error Handling**: Runtime error overlay for development debugging

### Styling and Design System
- **Theme**: Dark theme with CSS custom properties for consistent color management
- **Typography**: Inter font family for clean, professional appearance
- **Component Variants**: Class Variance Authority (CVA) for component styling variants
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Animations**: Intersection Observer API for scroll-triggered animations

## External Dependencies

### Core Libraries
- **@neondatabase/serverless**: PostgreSQL database driver for serverless environments
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight routing library for React

### UI Framework
- **@radix-ui/***: Comprehensive set of accessible UI primitives including dialogs, dropdowns, forms, and navigation components
- **class-variance-authority**: Utility for creating component variants
- **clsx & tailwind-merge**: Conditional class name utilities

### Form Handling
- **react-hook-form**: Form state management and validation
- **@hookform/resolvers**: Integration between react-hook-form and validation libraries
- **zod**: Schema validation for both client and server

### Development Tools
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Development tooling for Replit environment

### Styling Dependencies
- **tailwindcss**: Utility-first CSS framework
- **autoprefixer**: PostCSS plugin for vendor prefixes
- **embla-carousel-react**: Carousel/slider component
- **lucide-react**: Icon library for React components