your-project/
├── app/                      # App Router
│   ├── (auth)/              # Auth related routes (grouped)
│   │   ├── login/
│   │   ├── signup/
│   │   └── layout.tsx
│   ├── (main)/              # Main features (grouped)
│   │   ├── feed/
│   │   ├── profile/
│   │   └── layout.tsx
│   ├── api/                 # API routes
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/              # Shared components
│   ├── ui/                  # UI components (buttons, inputs, etc)
│   └── shared/             # Shared feature components
├── lib/                     # Library code
│   ├── firebase/           # Firebase configuration
│   │   ├── config.ts       # Firebase configuration
│   │   ├── auth.ts         # Auth related functions
│   │   └── db.ts           # Firestore related functions
│   └── utils/              # Utility functions
├── hooks/                   # Custom hooks
│   ├── useAuth.ts         # Auth related hooks
│   └── useFirestore.ts    # Firestore related hooks
├── types/                   # TypeScript type definitions
├── styles/                  # Global styles
└── public/                 # Static files