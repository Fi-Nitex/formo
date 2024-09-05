# Formo Release Notes

### Apr 12, 2024
# Release: Initial Project Setup
This release marks the initial setup of the project, establishing the foundational files and configurations required to start development.
- **Create LICENSE**
    
    Added a LICENSE file to define the usage rights for the project.

- **Add initial project files**

    Committed the core project files to initiate the project repository.

- **Add index.html with basic HTML structure and script tag**

    Implemented the main index.html file with a basic structure and necessary script tag to prepare for future development.

- **Add .gitignore file to ignore logs, editor directories, and files**
    
    Configured a .gitignore file to prevent unnecessary files and directories (like logs and editor-specific files) from being tracked in the repository.

- **Add ESLint configuration file**
    
    Set up ESLint to ensure code quality and consistency across the project by enforcing coding standards.

- **Add PostCSS, Tailwind CSS, TypeScript, and Vite configuration files**
    
    Integrated PostCSS, Tailwind CSS, and TypeScript along with Vite configuration to enhance development efficiency and optimize the workflow.

### April 13, 2024
# Release: Authentication and Dashboard Setup
This release introduces essential components and authentication features to the project, alongside some structural changes. Below are the key updates:
- **Add Login Component**
    
    Implemented a basic login component to handle user authentication.

- **Add Login and Dashboard Components**
    
    Added both login and dashboard components to structure user interaction and navigation after authentication.

- **Add Hero Component**
    
    Created a hero section component for a prominent and visually appealing introductory section of the UI.

- **Add Dashboard and Header Components**
    
    Introduced dashboard and header components to manage the authenticated user's navigation and main content display.

- **Refactor `main.tsx` to add BrowserRouter and ClerkProvider**
    
    Updated `main.tsx` to include `BrowserRouter` for routing and `ClerkProvider` for managing authentication.

- **Refactor App Component to Include Authentication and Dashboard Components**
    
    Refactored the main App component to integrate authentication and dashboard features more seamlessly.

- **Add `@clerk/clerk-react` and `react-router-dom` dependencies**
    
    Installed necessary dependencies to manage authentication (`@clerk/clerk-react`) and routing (`react-router-dom`).

- **Add `.env` and `.env.local` to `.gitignore`**
    
    Added `.env` and `.env.local` files to `.gitignore` to prevent sensitive information from being committed to the repository.

### September 6, 2024
# Release: Project Transition to Next.js
This release reflects a significant shift in the project's framework from React.js to Next.js, along with some structural updates. Below are the key changes:
- **Added Next.js**
    
    Transitioned the project to use the Next.js framework, enhancing server-side rendering and improving performance for complex applications.

- **Removed React.js**
    
    React.js was removed from the project as the framework was migrated to Next.js for improved development and functionality.