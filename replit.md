# South Asian Cultural Club Website

## Overview

This is a full-stack web application for a South Asian Cultural Club built with React, Express, and PostgreSQL. The application features a modern, responsive design with comprehensive content management capabilities for events, officers, member spotlights, announcements, and more.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom South Asian cultural themes
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL session store
- **Development**: Hot reload with Vite middleware integration

## Key Components

### Database Schema
The application uses a comprehensive schema with the following main entities:
- **Users**: Authentication and user management
- **Events**: Cultural events, workshops, and meetings with categories
- **Officers**: Club leadership profiles with contact information
- **Member Spotlights**: Featuring outstanding community members
- **Announcements**: Club news and updates with categorization
- **Gallery Images**: Photo collections from events and activities
- **Contact Messages**: User inquiries and communications
- **Suggestions**: Community feedback and improvement ideas
- **Newsletter Subscribers**: Email subscription management

### UI Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Featured banner with call-to-action buttons
- **Event Management**: Calendar view and event registration
- **Photo Gallery**: Lightbox-enabled image gallery
- **Contact Forms**: Multi-purpose contact and suggestion forms
- **Responsive Design**: Mobile-first approach with breakpoint optimization

### API Structure
RESTful API endpoints organized by resource:
- `/api/events` - Event management
- `/api/officers` - Leadership profiles
- `/api/member-spotlights` - Community member features
- `/api/announcements` - News and updates
- `/api/gallery-images` - Photo management
- `/api/contact-messages` - User communications
- `/api/suggestions` - Community feedback
- `/api/newsletter-subscribers` - Email subscriptions

## Data Flow

1. **Client Requests**: React components use TanStack Query for API calls
2. **API Layer**: Express routes handle HTTP requests with validation
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: JSON responses with proper error handling
5. **UI Updates**: React Query automatically updates UI on data changes

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **drizzle-orm**: Type-safe database operations
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **wouter**: Lightweight React router

### Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Type safety and enhanced developer experience
- **@replit/vite-plugin-***: Replit-specific development enhancements

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with hot reload
- **Database**: Neon serverless PostgreSQL
- **Environment Variables**: DATABASE_URL configuration
- **Build Process**: TypeScript compilation and Vite bundling

### Production Deployment
- **Frontend**: Static files served from `/dist/public`
- **Backend**: Node.js server with Express
- **Database**: PostgreSQL with connection pooling
- **Build Command**: `npm run build` compiles both frontend and backend
- **Start Command**: `npm start` runs the production server

### Database Management
- **Migrations**: Drizzle Kit for schema management
- **Schema Location**: `/shared/schema.ts` for type sharing
- **Migration Files**: Generated in `/migrations` directory
- **Push Command**: `npm run db:push` for schema updates

The application follows a modern full-stack architecture with strong type safety, responsive design, and comprehensive content management capabilities specifically tailored for cultural organization needs.