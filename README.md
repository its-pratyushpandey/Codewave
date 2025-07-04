# 🚀 Code Craft - SaaS Code Editor

<div align="center">



[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Convex](https://img.shields.io/badge/Convex-Database-orange?style=for-the-badge)](https://convex.dev/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-purple?style=for-the-badge)](https://clerk.com/)

**A modern, full-stack online code editor with multi-language support, real-time collaboration, and professional deployment features.**

[🔗 Live Demo](https://your-demo-url.vercel.app) • [📹 Video Tutorial](https://youtu.be/fGkRQgf6Scw) • [📖 Documentation](#documentation)

</div>

## ✨ Features

### 🎯 Core Features
- **💻 Multi-Language Support**: Execute code in 10+ programming languages (JavaScript, Python, Java, C++, Go, Rust, Swift, C#, Ruby, PHP)
- **🎨 Customizable Interface**: 5 beautiful VSCode themes with adjustable font sizes
- **⚡ Real-time Execution**: Instant code execution with smart output handling
- **🔄 Auto-save**: Automatic code persistence across sessions
- **📱 Responsive Design**: Perfect experience on desktop, tablet, and mobile

### 🤝 Collaboration & Sharing
- **🔗 Code Snippets**: Share and discover community code snippets
- **⭐ Favorites System**: Star and bookmark useful snippets
- **💬 Comments**: Discuss and collaborate on shared code
- **👥 User Profiles**: Track execution history and showcase contributions

### 💎 Pro Features
- **🚀 Premium Languages**: Access to advanced programming languages
- **📊 Analytics Dashboard**: Detailed statistics and usage insights
- **☁️ Cloud Storage**: Unlimited snippet storage
- **🎯 Priority Support**: Dedicated support channel

### 🔧 Technical Excellence
- **🏗️ Modern Architecture**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **🔐 Secure Authentication**: Clerk-powered authentication with JWT
- **🗄️ Real-time Database**: Convex for instant data synchronization
- **🌐 Edge Deployment**: Optimized for global performance
- **📈 Scalable Infrastructure**: Ready for enterprise-level usage

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | Next.js 15, React 18, TypeScript |
| **Styling** | Tailwind CSS, Framer Motion |
| **Editor** | Monaco Editor (VS Code) |
| **Authentication** | Clerk |
| **Database** | Convex (Real-time) |
| **Code Execution** | Piston API |
| **Deployment** | Vercel |
| **State Management** | Zustand |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### 1. Clone & Install
```bash
git clone https://github.com/its-pratyushpandey/Codewave.git
cd Codewave
npm install
```

### 2. Environment Setup
Create a `.env.local` file in the root directory:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
CLERK_SECRET_KEY=sk_test_your_key_here

# Convex Database
CONVEX_DEPLOYMENT=your-deployment-name
NEXT_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud

# Optional: Webhooks
CLERK_WEBHOOK_SECRET=your_webhook_secret
```

### 3. Database Setup
```bash
# Install Convex CLI
npm install -g convex

# Initialize Convex
npx convex dev

# Follow the setup prompts and update your .env.local with the generated values
```

### 4. Authentication Setup
1. Visit [Clerk Dashboard](https://dashboard.clerk.com)
2. Create a new application
3. Get your API keys from the dashboard
4. **Important**: Create a JWT template named "convex" in Clerk dashboard:
   - Go to JWT Templates → New Template
   - Name: `convex`
   - Configure claims as per documentation

### 5. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` and start coding! 🎉

## 📖 Documentation

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

### Supported Languages

| Language | Version | Runtime |
|----------|---------|---------|
| JavaScript | 18.15.0 | Node.js |
| TypeScript | 5.0.0 | Node.js |
| Python | 3.10.0 | CPython |
| Java | 15.0.2 | OpenJDK |
| C++ | 10.2.0 | GCC |
| Go | 1.16.2 | Go |
| Rust | 1.68.0 | Cargo |
| C# | 6.12.0 | Mono |
| Ruby | 3.0.1 | Ruby |
| Swift | 5.3.3 | Swift |

### API Endpoints

- `POST /api/execute` - Execute code
- `GET /api/snippets` - Get public snippets
- `POST /api/snippets` - Create snippet
- `GET /api/user/stats` - Get user statistics

## 🎨 Screenshots

<details>
<summary>Click to view screenshots</summary>

### Main Editor
![Main Editor](./docs/screenshots/editor.png)

### Snippet Gallery
![Snippet Gallery](./docs/screenshots/snippets.png)

### User Profile
![User Profile](./docs/screenshots/profile.png)

### Themes
![Themes](./docs/screenshots/themes.png)

</details>

## 🤝 Contributing

We love contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `npm test`
5. Commit: `git commit -m 'Add amazing feature'`
6. Push: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Code Style
- Use TypeScript for all new files
- Follow the existing code style
- Add tests for new features
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Monaco Editor](https://microsoft.github.io/monaco-editor/) - The code editor that powers VS Code
- [Piston](https://github.com/engineer-man/piston) - Code execution engine
- [Lucide](https://lucide.dev/) - Beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## 📞 Support

- 📧 Email: support@codecraft.dev
- 💬 Discord: [Join our community](https://discord.gg/codecraft)
- 🐛 Issues: [GitHub Issues](https://github.com/its-pratyushpandey/Codewave/issues)
- 📖 Docs: [Documentation](https://docs.codecraft.dev)

## 🗺️ Roadmap

- [ ] **Q1 2025**
  - [ ] Real-time collaborative editing
  - [ ] Git integration
  - [ ] Custom themes builder
  
- [ ] **Q2 2025**
  - [ ] AI-powered code suggestions
  - [ ] Jupyter notebook support
  - [ ] Mobile app (React Native)
  
- [ ] **Q3 2025**
  - [ ] Enterprise features
  - [ ] Advanced debugging tools
  - [ ] Plugin system

---

<div align="center">

**Made with ❤️ by [Pratyush Pandey](https://github.com/its-pratyushpandey)**

If this project helped you, please ⭐ star the repository!

[⬆ Back to Top](#-code-craft---saas-code-editor)

</div>
