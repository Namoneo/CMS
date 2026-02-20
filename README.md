# CMS - Content Management System

A full-stack Content Management System built with Angular 17 (frontend) and NestJS (backend).

## 🚧 Status: Under Development

This project is currently being built. See [Issues](https://github.com/Namoneo/CMS/issues) for progress.

## 🛠️ Tech Stack

- **Frontend**: Angular 17
- **Backend**: NestJS
- **Database**: PostgreSQL (planned)
- **Authentication**: JWT (planned)

## 📁 Project Structure

```
CMS/
├── backend/           # NestJS API
│   ├── src/
│   │   ├── modules/ # Feature modules
│   │   ├── common/   # Shared utilities
│   │   └── main.ts
│   └── package.json
├── frontend/         # Angular App
│   ├── src/
│   │   ├── app/
│   │   │   ├── features/  # Feature modules
│   │   │   ├── shared/     # Shared components
│   │   │   └── core/      # Core services
│   │   └── main.ts
│   └── package.json
└── README.md
```

## 🚀 Quick Start (TBD)

```bash
# Clone the repository
git clone https://github.com/Namoneo/CMS.git
cd CMS

# Install dependencies
cd backend && npm install
cd ../frontend && npm install

# Run backend
cd ../backend && npm run start:dev

# Run frontend (new terminal)
cd ../frontend && npm start
```

## 📋 Features (Planned)

- [ ] User Authentication
- [ ] Content CRUD (Pages, Posts)
- [ ] Media Library
- [ ] Categories & Tags
- [ ] SEO Settings
- [ ] Theme Customization
- [ ] Multi-language Support

## 🤝 Contributing

Contributions are welcome! Please open an issue first to discuss what you would like to change.

## 📄 License

MIT
