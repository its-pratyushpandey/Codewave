# Contributing to Code Craft

Thank you for your interest in contributing to Code Craft! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn
- Git
- Basic knowledge of React, Next.js, and TypeScript

### Development Setup

1. **Fork the repository**
   ```bash
   # Fork the repo on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/Codewave.git
   cd Codewave
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🎯 How to Contribute

### 🐛 Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates.

**Bug Report Template:**
```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
 - OS: [e.g. Windows, macOS, Linux]
 - Browser: [e.g. Chrome, Firefox, Safari]
 - Version: [e.g. 1.0.0]
```

### 💡 Suggesting Features

Feature requests are welcome! Please provide:

1. **Clear description** of the feature
2. **Use case** - why would this be useful?
3. **Implementation ideas** - if you have any
4. **Mockups or examples** - if applicable

### 🔧 Code Contributions

#### Branch Naming Convention
- `feature/description` - for new features
- `fix/description` - for bug fixes
- `docs/description` - for documentation updates
- `refactor/description` - for code refactoring

#### Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the coding standards
   - Add tests if applicable
   - Update documentation

3. **Test your changes**
   ```bash
   npm run lint
   npm run build
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

#### Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - new feature
- `fix:` - bug fix
- `docs:` - documentation changes
- `style:` - formatting, missing semicolons, etc.
- `refactor:` - code change that neither fixes a bug nor adds a feature
- `test:` - adding missing tests
- `chore:` - changes to build process or auxiliary tools

Examples:
```bash
feat: add syntax highlighting for Python
fix: resolve authentication timeout issue
docs: update setup instructions in README
```

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── (root)/            # Main editor pages
│   ├── pricing/           # Pricing pages
│   ├── profile/           # User profile
│   └── snippets/          # Code snippets
├── components/            # Reusable UI components
├── hooks/                 # Custom React hooks
├── store/                 # Zustand state management
├── types/                 # TypeScript type definitions
└── utils/                 # Utility functions

convex/                    # Convex backend functions
├── auth.config.ts         # Authentication configuration
├── codeExecutions.ts      # Code execution logic
├── snippets.ts            # Snippet management
└── users.ts               # User management
```

## 📏 Coding Standards

### TypeScript
- Use TypeScript for all new files
- Define proper types and interfaces
- Avoid `any` type when possible

### React Components
- Use functional components with hooks
- Implement proper error boundaries
- Follow React best practices

### Styling
- Use Tailwind CSS for styling
- Follow the existing design system
- Ensure responsive design

### Code Quality
- Write clean, readable code
- Add comments for complex logic
- Follow the existing code style

## 🧪 Testing

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Writing Tests
- Write tests for new features
- Test edge cases
- Use descriptive test names

## 📖 Documentation

### Code Documentation
- Document complex functions and classes
- Use JSDoc comments for public APIs
- Update README when adding new features

### User Documentation
- Update setup instructions if needed
- Add examples for new features
- Keep documentation current

## 🚀 Deployment

### Production Build
```bash
npm run build
npm start
```

### Environment Variables
Ensure all required environment variables are documented in `.env.example`

## 🎨 Design Guidelines

### UI/UX Principles
- **Consistency** - Follow established patterns
- **Accessibility** - Support screen readers and keyboard navigation
- **Performance** - Optimize for speed and efficiency
- **Mobile-first** - Ensure mobile compatibility

### Color Scheme
- Primary: Blue (#3B82F6)
- Secondary: Purple (#8B5CF6)
- Success: Green (#10B981)
- Warning: Yellow (#F59E0B)
- Error: Red (#EF4444)

## 🐛 Debugging

### Common Issues
1. **Environment Variables** - Check `.env.local` configuration
2. **Authentication** - Verify Clerk JWT template setup
3. **Database** - Ensure Convex is properly configured

### Debug Tools
- React Developer Tools
- Convex Dashboard
- Browser DevTools
- Next.js Development Mode

## 📋 Code Review Checklist

Before submitting a PR, ensure:

- [ ] Code follows project standards
- [ ] Tests pass locally
- [ ] Documentation is updated
- [ ] No console errors or warnings
- [ ] Responsive design works
- [ ] Accessibility considerations
- [ ] Performance impact assessed

## 🎖️ Recognition

Contributors will be recognized in:
- GitHub contributors list
- Project documentation
- Release notes (for significant contributions)

## 📞 Getting Help

- 💬 **Discord**: [Join our community](https://discord.gg/codecraft)
- 📧 **Email**: dev@codecraft.dev
- 🐛 **Issues**: [GitHub Issues](https://github.com/its-pratyushpandey/Codewave/issues)
- 📖 **Docs**: [Documentation](https://docs.codecraft.dev)

## 📄 License

By contributing to Code Craft, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Code Craft! 🎉
