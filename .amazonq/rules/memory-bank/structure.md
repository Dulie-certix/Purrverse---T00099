# Project Structure

## Directory Organization

```
Purrverse/
├── .amazonq/rules/memory-bank/    # AI assistant memory and documentation
├── .husky/                         # Git hooks for code quality enforcement
├── .yarn/                          # Yarn v4 package manager files
├── public/                         # Static assets served directly
├── src/                            # Source code
│   ├── apis/                       # API integration layer
│   ├── assets/                     # Media files (images, videos, GIFs)
│   │   ├── Hero/                   # Hero section assets
│   │   └── Section 01/             # Section-specific assets
│   ├── components/                 # React components
│   │   ├── customUi/               # Custom UI components
│   │   ├── Hero/                   # Hero section components
│   │   ├── navbar/                 # Navigation components
│   │   ├── Section 01/             # Section-specific components
│   │   └── ui/                     # Reusable UI primitives (shadcn/ui)
│   ├── constants/                  # Application constants
│   ├── data/                       # Static data and mock data
│   ├── hooks/                      # Custom React hooks
│   ├── lib/                        # Third-party library configurations
│   ├── libs/                       # Custom library wrappers (Axios)
│   ├── pages/                      # Page-level components
│   │   └── pageA/                  # Page A with sections
│   ├── types/                      # TypeScript type definitions
│   └── utils/                      # Utility functions and helpers
└── Configuration files              # Build, lint, format configs
```

## Core Components and Relationships

### Component Hierarchy
```
App.tsx (Root)
└── Pages (pageA/)
    ├── Hero Section
    ├── Section1
    └── Additional Sections
        ├── Navbar (Global)
        ├── Custom UI Components
        └── UI Primitives (buttons, etc.)
```

### Data Flow
```
APIs (user.ts) → Hooks (useUser.ts) → Components → UI
                      ↓
                  Utils/Helpers
```

### Asset Management
- **Organized by Section**: Assets grouped by their usage context (Hero/, Section 01/)
- **Component Co-location**: Section-specific components near their assets
- **Centralized Utilities**: Shared utilities (shadows, functions, helpers) in utils/

## Architectural Patterns

### Feature-Based Organization
- Pages contain sections as subdirectories
- Each section has dedicated components and assets
- Promotes modularity and maintainability

### Separation of Concerns
- **APIs**: Backend communication logic
- **Hooks**: Stateful logic and side effects
- **Components**: Presentation and UI
- **Utils**: Pure functions and helpers
- **Constants**: Configuration and static values
- **Types**: Type definitions and interfaces

### Configuration Layer
- **lib/**: Third-party library setup (utils.ts for cn() helper)
- **libs/**: Custom wrappers (axios.ts for API client)
- Clear distinction between library config and custom implementations

### UI Component Strategy
- **ui/**: Base components from shadcn/ui (button.tsx, etc.)
- **customUi/**: Project-specific composite components
- **Section Components**: Feature-specific implementations
- Follows atomic design principles (atoms → molecules → organisms)

### Styling Architecture
- **Tailwind CSS**: Utility-first styling
- **Shadow Utilities**: Centralized shadow definitions (shadows.ts)
- **Component Variants**: class-variance-authority for component variations
- **Merge Utilities**: tailwind-merge for className conflicts

### Type Safety
- Dedicated types/ directory for shared types
- Co-located types with complex components
- TypeScript strict mode enabled across project
