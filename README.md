museum-attendance
│   README.md
│   .gitignore
│   package.json
│   docker-compose.yml
│
└───backend
│   │   package.json
│   │   tsconfig.json
│   │   server.ts
│   │
│   └───api
│   │   │   routes.ts
│   │   │   controllers
│   │   │   │   visitorController.ts
│   │   │   │   exhibitController.ts
│   │   │
│   │   └───models
│   │       │   visitor.ts
│   │       │   exhibit.ts
│   │       │   visit.ts
│   │
│   └───database
│       │   db.ts
│       │   schema.sql
│       │   seed.ts
│       │   seed.sql
│
└───frontend
│   │   package.json
│   │   vite.config.ts
│   │
│   └───public
│   │   │   index.html
│   │
│   └───src
│       │   App.vue
│       │   main.ts
│       │
│       └───components
│           │   VisitorList.vue
│           │   ExhibitList.vue
│           │   VisitorForm.vue
│           │   ExhibitForm.vue
│
└───docker
    │   Dockerfile.backend
    │   Dockerfile.frontend