# 🚀 Code Craft — SaaS Code Editor

<div align="center">

<!-- Icon Bar -->
<span>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" width="32" title="Next.js" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="32" title="TypeScript" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width="32" title="Tailwind" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="32" title="React" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clerk/clerk-original.svg" width="32" title="Clerk" />
  <img src="https://raw.githubusercontent.com/convex-dev/convex-brand/main/convex-logo.svg" width="32" title="Convex" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" width="32" title="Vercel" />
</span>

<br/><br/>

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Convex](https://img.shields.io/badge/Convex-Database-orange?style=for-the-badge)](https://convex.dev/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-purple?style=for-the-badge)](https://clerk.com/)

---

<h2>🧑‍💻 Modern, Professional Online Code Editor</h2>

**Multi-language. Real-time Collaboration. Professional Features.**

[🔗 **Live Demo**](https://your-demo-url.vercel.app) • [🎬 **Video Tutorial**](https://youtu.be/fGkRQgf6Scw) • [📚 **Documentation**](#documentation)

</div>

---

## ✨ Features

### 🎯 Core
- 💻 **Multi-Language Execution** — 10+ languages (JS, Python, Java, C++, Go, Rust, Swift, C#, Ruby, PHP)
- 🎨 **Customizable UI** — 5 VSCode themes, adjustable font sizes, color schemes
- ⚡ **Instant Output** — Real-time code execution, smart display
- 🔄 **Auto-Save** — Persist your code across sessions, never lose work
- 📱 **Responsive Design** — Seamless across desktop, tablet, mobile

### 🤝 Collaboration
- 🔗 **Shareable Snippets** — Discover, star, and share code with the community
- 💬 **Comments** — Discuss and work together on shared code
- 🏅 **User Profiles** — Showcase contributions, execution history

### 💎 Pro
- 🚀 **Premium Languages** — Advanced runtime & tooling
- 📊 **Analytics Dashboard** — Usage stats, performance insights
- ☁️ **Cloud Storage** — Unlimited snippets, secure backups
- 🎯 **Priority Support** — Dedicated help channel

---

## 🛠️ Tech Stack

| Category         | Technology & Icon |
|------------------|------------------|
| **Frontend**     | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" width="22" /> Next.js 15, <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="22" /> React 18, <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="22" /> TypeScript |
| **Styling**      | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width="22" /> Tailwind CSS, Framer Motion |
| **Editor**       | Monaco Editor (VS Code) |
| **Authentication** | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clerk/clerk-original.svg" width="22" /> Clerk |
| **Database**     | <img src="https://raw.githubusercontent.com/convex-dev/convex-brand/main/convex-logo.svg" width="22" /> Convex (Real-time) |
| **Code Execution** | Piston API |
| **Deployment**   | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" width="22" /> Vercel |
| **State Management** | Zustand |

---

## 🚀 Quick Start

### Prerequisites
- 🟢 Node.js 18+
- 🟣 npm or yarn
- 🔵 Git

### 1. Clone & Install
```bash
git clone https://github.com/its-pratyushpandey/Codewave.git
cd Codewave
npm install
```

### 2. Environment Setup

Create `.env.local` in root:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
CLERK_SECRET_KEY=sk_test_your_key_here

CONVEX_DEPLOYMENT=your-deployment-name
NEXT_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud

CLERK_WEBHOOK_SECRET=your_webhook_secret
```

### 3. Database Setup

```bash
npm install -g convex
npx convex dev
```
Follow prompts and update `.env.local`.

### 4. Authentication Setup

- Go to [Clerk Dashboard](https://dashboard.clerk.com)
- Create app, copy API keys
- Create JWT template named `convex` per [docs](https://docs.clerk.dev)
- Configure claims as described

### 5. Start Dev Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and start coding!

---

## 📖 Documentation

### Scripts

| Command          | Description              |
|------------------|-------------------------|
| `npm run dev`    | Start dev server        |
| `npm run build`  | Build for production    |
| `npm run start`  | Start prod server       |
| `npm run lint`   | Run ESLint              |

### Supported Languages

| Language    | Version   | Runtime    |
|-------------|-----------|------------|
| JavaScript  | 18.15.0   | Node.js    |
| TypeScript  | 5.0.0     | Node.js    |
| Python      | 3.10.0    | CPython    |
| Java        | 15.0.2    | OpenJDK    |
| C++         | 10.2.0    | GCC        |
| Go          | 1.16.2    | Go         |
| Rust        | 1.68.0    | Cargo      |
| C#          | 6.12.0    | Mono       |
| Ruby        | 3.0.1     | Ruby       |
| Swift       | 5.3.3     | Swift      |

### API Endpoints

- `POST /api/execute` — Run code
- `GET /api/snippets` — Public snippets
- `POST /api/snippets` — Create snippet
- `GET /api/user/stats` — User statistics

---

## 🎨 Screenshots

<details>
<summary>Click to view screenshots</summary>

| Main Editor | Snippet Gallery | User Profile | Themes |
|-------------|----------------|-------------|--------|
| ![Main Editor](./docs/screenshots/editor.png) | ![Snippet Gallery](./docs/screenshots/snippets.png) | ![User Profile](./docs/screenshots/profile.png) | ![Themes](./docs/screenshots/themes.png) |

</details>

---

## 🤝 Contributing

We welcome all contributions!
- See [CONTRIBUTING.md](CONTRIBUTING.md)
- Fork → Branch → Code → Test → Commit → PR

### Guidelines
- TypeScript for all new files
- Follow code style
- Add tests for new features
- Update docs as needed

---

## 📝 License

MIT — see [LICENSE](LICENSE).

---

## 🙏 Acknowledgments

- [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- [Piston](https://github.com/engineer-man/piston)
- [Lucide](https://lucide.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 📞 Support

- 📧 Email: support@codecraft.dev
- 💬 Discord: [Join community](https://discord.gg/codecraft)
- 🐛 Issues: [GitHub Issues](https://github.com/its-pratyushpandey/Codewave/issues)
- 📖 Docs: [Documentation](https://docs.codecraft.dev)

---

## 🗺️ Roadmap

| Timeline   | Features                                           |
|------------|---------------------------------------------------|
| Q1 2025    | Real-time collaboration, Git integration, Theme builder |
| Q2 2025    | AI code suggestions, Jupyter notebooks, Mobile app      |
| Q3 2025    | Enterprise features, Debugging tools, Plugin system     |

---

<div align="center">

❤️ Made by [Pratyush Pandey](https://github.com/its-pratyushpandey)  
If this project helped you, please ⭐ star the repository!

[⬆ Back to Top](#-code-craft---saas-code-editor)

</div>
