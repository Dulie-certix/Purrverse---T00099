# Technology Stack

## Programming Languages and Versions

### Primary Languages
- **TypeScript**: ~5.7.2 (strict mode enabled)
- **JavaScript**: ES Modules (type: "module")
- **CSS**: Tailwind CSS v4 utility classes

### Runtime
- **React**: ^19.0.0
- **React DOM**: ^19.0.0
- **Node.js**: Required for build tools (version specified in @types/node ^22.15.30)

## Build System and Tools

### Build Tools
- **Vite**: ^6.2.0 - Fast build tool and dev server
- **TypeScript Compiler**: ~5.7.2 - Type checking and compilation
- **@vitejs/plugin-react**: ^4.3.4 - React Fast Refresh support

### Development Server
- **Vite Dev Server**: Hot Module Replacement (HMR)
- **Auto-open**: Browser opens automatically on server start
- **Path Aliases**: `@/` mapped to `src/` directory

## Core Dependencies

### UI Framework
- **react**: ^19.0.0 - Core React library
- **react-dom**: ^19.0.0 - React DOM rendering
- **react-router**: ^7.4.1 - Client-side routing

### Styling
- **tailwindcss**: ^4.1.1 - Utility-first CSS framework
- **@tailwindcss/vite**: ^4.1.1 - Vite integration
- **tailwind-merge**: ^3.3.0 - Merge Tailwind classes intelligently
- **class-variance-authority**: ^0.7.1 - Component variant management
- **clsx**: ^2.1.1 - Conditional className utility

### UI Components
- **@radix-ui/react-slot**: ^1.2.3 - Composition primitive
- **lucide-react**: ^0.553.0 - Icon library
- **react-icons**: ^5.5.0 - Additional icon sets

## Development Dependencies

### Code Quality
- **ESLint**: ^9.21.0 - JavaScript/TypeScript linting
  - eslint-plugin-react-hooks: ^5.2.0
  - eslint-plugin-react-refresh: ^0.4.19
  - eslint-plugin-unused-imports: ^4.1.4
  - typescript-eslint: ^8.24.1
- **Prettier**: ^3.5.3 - Code formatting
  - prettier-plugin-tailwindcss: ^0.6.11
  - eslint-config-prettier: ^10.1.1
  - eslint-plugin-prettier: ^5.2.6

### Git Hooks
- **Husky**: ^8.0.0 - Git hooks management
- **lint-staged**: ^15.5.0 - Run linters on staged files
- **@commitlint/cli**: ^19.8.0 - Commit message linting
- **@commitlint/config-conventional**: ^19.8.0 - Conventional commits

### Type Definitions
- **@types/react**: ^19.0.10
- **@types/react-dom**: ^19.0.4
- **@types/node**: ^22.15.30

### Additional Tools
- **tw-animate-css**: ^1.3.4 - Tailwind animation utilities
- **globals**: ^15.15.0 - Global type definitions for ESLint

## Package Manager
- **Yarn**: v4.9.2 (Berry)
- **Configuration**: .yarnrc.yml
- **Lock File**: yarn.lock

## Development Commands

### Core Commands
```bash
yarn dev              # Start development server with HMR
yarn build            # Type check and build for production
yarn build:check      # Build with production mode validation
yarn build:ts         # TypeScript compilation only
yarn preview          # Preview production build locally
```

### Code Quality
```bash
yarn type-check       # Run TypeScript type checking (no emit)
yarn lint             # Run ESLint on all files
yarn lint:fix         # Run ESLint and auto-fix issues
yarn format           # Check code formatting with Prettier
yarn format:write     # Format code with Prettier
```

### Validation
```bash
yarn validate         # Run format check, lint, and build
yarn validate:fix     # Format, fix lint issues, and build
```

### Git Hooks (Automated)
```bash
yarn pre-commit       # Runs on commit: lint-staged + TypeScript build
yarn pre-push         # Runs on push: production build check
yarn prepare          # Initialize Husky hooks
```

## Configuration Files

### TypeScript
- **tsconfig.json**: Base TypeScript configuration
- **tsconfig.app.json**: Application-specific config
- **tsconfig.node.json**: Node.js tooling config

### Build
- **vite.config.ts**: Vite configuration with plugins and aliases
- **components.json**: shadcn/ui component configuration

### Code Quality
- **eslint.config.js**: ESLint flat config format
- **.prettierrc**: Prettier formatting rules
- **.prettierignore**: Files to exclude from formatting
- **commitlint.config.js**: Commit message rules
- **.commitlintrc.json**: Commitlint configuration

### Git
- **.gitignore**: Files excluded from version control
- **.husky/**: Git hook scripts (commit-msg, pre-commit, pre-push)

### Package Manager
- **.yarnrc.yml**: Yarn v4 configuration
- **yarn.lock**: Dependency lock file
