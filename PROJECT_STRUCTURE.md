# 📁 Project Structure

Complete file structure for the Viks Animation library.

```
viks-a/
│
├── 📁 src/                          # Source files
│   ├── viks-animation.js            # Main JavaScript file
│   └── viks-animation.scss          # Main SCSS file
│
├── 📁 dist/                         # Compiled/built files
│   ├── viks-animation.js            # UMD build
│   ├── viks-animation.min.js        # Minified UMD build
│   ├── viks-animation.min.js.map    # Source map
│   ├── viks-animation.esm.js        # ES Module build
│   ├── viks-animation.cjs.js        # CommonJS build
│   ├── viks-animation.css           # Compiled CSS
│   ├── viks-animation.min.css       # Minified CSS
│   └── viks-animation.d.ts          # TypeScript definitions
│
├── 📁 examples/                     # Example implementations
│   ├── index.html                   # Main demo page
│   ├── basic.html                   # Basic usage example
│   ├── advanced.html                # Advanced features
│   ├── staggered.html               # Staggered animations
│   ├── gallery.html                 # Image gallery
│   └── 📁 assets/                   # Example assets
│       ├── 📁 css/
│       ├── 📁 js/
│       └── 📁 images/
│
├── 📁 test/                         # Test files
│   ├── setup.js                     # Test setup
│   ├── animations.test.js           # Animation tests
│   ├── core.test.js                 # Core functionality tests
│   ├── helpers.test.js              # Helper function tests
│   ├── events.test.js               # Event tests
│   └── 📁 __mocks__/                # Mock files
│       └── styleMock.js
│
├── 📁 docs/                         # Documentation
│   ├── 📁 api/                      # API documentation
│   │   ├── init.md
│   │   ├── refresh.md
│   │   └── events.md
│   ├── 📁 guides/                   # User guides
│   │   ├── getting-started.md
│   │   ├── animations.md
│   │   ├── configuration.md
│   │   └── best-practices.md
│   └── 📁 examples/                 # Code examples
│       ├── basic-usage.md
│       └── advanced-usage.md
│
├── 📁 .github/                      # GitHub specific files
│   ├── 📁 workflows/                # GitHub Actions
│   │   ├── ci.yml                   # CI workflow
│   │   ├── release.yml              # Release workflow
│   │   └── test.yml                 # Test workflow
│   ├── 📁 ISSUE_TEMPLATE/           # Issue templates
│   │   ├── bug_report.md
│   │   ├── feature_request.md
│   │   └── question.md
│   ├── 📁 PULL_REQUEST_TEMPLATE/   # PR templates
│   │   └── pull_request_template.md
│   ├── FUNDING.yml                  # Funding info
│   └── CODEOWNERS                   # Code owners
│
├── 📄 README.md                     # ⭐ Main documentation
├── 📄 QUICKSTART.md                 # Quick start guide
├── 📄 CONTRIBUTING.md               # Contributing guidelines
├── 📄 CODE_OF_CONDUCT.md            # Code of conduct
├── 📄 CHANGELOG.md                  # Version history
├── 📄 LICENSE                       # MIT License
├── 📄 SECURITY.md                   # Security policy
│
├── 📄 package.json                  # NPM package config
├── 📄 package-lock.json             # NPM lock file
│
├── 📄 rollup.config.js              # Rollup build config
├── 📄 .babelrc                      # Babel configuration
├── 📄 .eslintrc.js                  # ESLint configuration
├── 📄 .prettierrc                   # Prettier configuration
├── 📄 .prettierignore               # Prettier ignore
├── 📄 jest.config.js                # Jest test config
│
├── 📄 .gitignore                    # Git ignore rules
├── 📄 .npmignore                    # NPM ignore rules
├── 📄 .editorconfig                 # Editor configuration
│
└── 📄 .nvmrc                        # Node version
```

---

## 📋 File Descriptions

### 📂 Root Files

| File | Purpose |
|------|---------|
| `README.md` | Main project documentation with examples and API reference |
| `QUICKSTART.md` | Quick start guide for new users |
| `CONTRIBUTING.md` | Guidelines for contributing to the project |
| `CODE_OF_CONDUCT.md` | Community guidelines and behavior standards |
| `CHANGELOG.md` | Version history and release notes |
| `LICENSE` | MIT License terms |
| `SECURITY.md` | Security policy and vulnerability reporting |

### 📂 Source Files (`src/`)

| File | Purpose |
|------|---------|
| `viks-animation.js` | Main JavaScript source with all animation logic |
| `viks-animation.scss` | SCSS source with animation styles and variables |

### 📂 Distribution Files (`dist/`)

| File | Purpose |
|------|---------|
| `viks-animation.js` | UMD build for browsers (not minified) |
| `viks-animation.min.js` | Minified UMD build for production |
| `viks-animation.esm.js` | ES Module build for modern bundlers |
| `viks-animation.cjs.js` | CommonJS build for Node.js |
| `viks-animation.css` | Compiled CSS from SCSS |
| `viks-animation.min.css` | Minified CSS for production |

### 📂 Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | NPM package configuration and scripts |
| `rollup.config.js` | Rollup bundler configuration |
| `.babelrc` | Babel transpiler settings |
| `.eslintrc.js` | Code linting rules |
| `.prettierrc` | Code formatting rules |
| `jest.config.js` | Test runner configuration |
| `.gitignore` | Files to ignore in Git |
| `.npmignore` | Files to ignore in NPM package |

---

## 🔨 Build Process

### Input → Output Flow

```
src/viks-animation.js
    ↓ (Rollup + Babel)
    ├── dist/viks-animation.js (UMD)
    ├── dist/viks-animation.min.js (UMD Minified)
    ├── dist/viks-animation.esm.js (ES Module)
    └── dist/viks-animation.cjs.js (CommonJS)

src/viks-animation.scss
    ↓ (Sass Compiler)
    ├── dist/viks-animation.css
    └── dist/viks-animation.min.css (CleanCSS)
```

---

## 🚀 Development Workflow

### 1. Clone & Setup

```bash
git clone https://github.com/MeViksry/viks-animation.git
cd viks-animation
npm install
```

### 2. Development

```bash
npm run dev          # Watch mode for development
npm run serve        # Start local server
```

### 3. Testing

```bash
npm test             # Run all tests
npm run test:watch   # Watch mode
npm run test:coverage # Generate coverage report
```

### 4. Linting & Formatting

```bash
npm run lint         # Check code style
npm run lint:fix     # Auto-fix issues
npm run format       # Format code
```

### 5. Build

```bash
npm run build        # Build all formats
npm run build:js     # Build JavaScript only
npm run build:css    # Build CSS only
```

### 6. Release

```bash
npm run release      # Create new release
```

---

## 📦 Package Distribution

### NPM Package Contents

When published to NPM, the package includes:

```
viks-animation@1.0.0
├── dist/                    # All built files
├── src/                     # Source files (optional)
├── README.md
├── LICENSE
└── package.json
```

### CDN Distribution

Available via multiple CDNs:

```
unpkg.com/viks-animation@1.0.0/
└── dist/
    ├── viks-animation.min.js
    └── viks-animation.min.css

jsdelivr.net/npm/viks-animation@1.0.0/
└── dist/
    ├── viks-animation.min.js
    └── viks-animation.min.css
```

---

## 🧪 Testing Structure

### Test Organization

```
test/
├── setup.js                    # Global test setup
├── animations.test.js          # Animation functionality
│   ├── ✅ Fade animations
│   ├── ✅ Zoom animations
│   ├── ✅ Slide animations
│   └── ✅ Flip animations
├── core.test.js                # Core features
│   ├── ✅ Initialization
│   ├── ✅ Configuration
│   ├── ✅ Scroll detection
│   └── ✅ Element tracking
├── helpers.test.js             # Helper functions
│   ├── ✅ Throttle
│   ├── ✅ Debounce
│   ├── ✅ Offset calculation
│   └── ✅ Device detection
└── events.test.js              # Event system
    ├── ✅ viks:in event
    ├── ✅ viks:out event
    └── ✅ Custom ID events
```

---

## 📚 Documentation Structure

### Docs Organization

```
docs/
├── README.md                   # Docs home
├── api/                        # API Reference
│   ├── init.md                 # viks.init()
│   ├── refresh.md              # viks.refresh()
│   ├── refreshHard.md          # viks.refreshHard()
│   └── events.md               # Event system
├── guides/                     # User Guides
│   ├── getting-started.md      # Installation & setup
│   ├── animations.md           # Animation types
│   ├── configuration.md        # Config options
│   ├── best-practices.md       # Tips & tricks
│   ├── performance.md          # Performance tips
│   └── troubleshooting.md      # Common issues
└── examples/                   # Code Examples
    ├── basic-usage.md          # Simple examples
    ├── advanced-usage.md       # Complex examples
    ├── react-integration.md    # React examples
    ├── vue-integration.md      # Vue examples
    └── angular-integration.md  # Angular examples
```

---

## 🎨 Examples Structure

### Example Pages

```
examples/
├── index.html                  # 🏠 Main demo page
│   ├── Hero section
│   ├── Feature showcase
│   ├── All animation types
│   └── Interactive examples
│
├── basic.html                  # 🎯 Basic usage
│   ├── Simple fade
│   ├── Simple zoom
│   └── Simple slide
│
├── advanced.html               # 🚀 Advanced features
│   ├── Custom timing
│   ├── Anchor placement
│   ├── Mirror mode
│   └── Custom events
│
├── staggered.html              # ⏱️ Staggered animations
│   ├── List items
│   ├── Card grids
│   └── Timeline
│
├── gallery.html                # 🖼️ Image gallery
│   ├── Masonry layout
│   ├── Lightbox effect
│   └── Lazy loading
│
└── assets/
    ├── css/
    │   └── examples.css
    ├── js/
    │   └── examples.js
    └── images/
        └── *.jpg, *.png
```

---

## 🔧 Configuration Files Explained

### `.babelrc`

```json
{
  "presets": [
    ["@babel/preset-env", {
      "targets": "> 0.25%, not dead"
    }]
  ]
}
```

**Purpose**: Transpile modern JS to compatible versions

### `.eslintrc.js`

**Purpose**: Enforce code quality and style
- No console.log in production
- Prefer const over let
- Use arrow functions
- Consistent spacing

### `.prettierrc`

**Purpose**: Auto-format code consistently
- Single quotes
- 2 space indentation
- Semicolons required
- 80 char line width

### `jest.config.js`

**Purpose**: Configure testing environment
- JSDOM environment for browser APIs
- 80% coverage threshold
- Collect coverage from src/

### `rollup.config.js`

**Purpose**: Bundle JavaScript for distribution
- UMD for browsers
- ES Modules for modern tools
- CommonJS for Node.js
- Minified versions

---

## 🌳 Git Workflow

### Branch Structure

```
main                    # 🌟 Production-ready code
  ├── develop           # 🔨 Development branch
  │   ├── feature/*     # ✨ New features
  │   ├── fix/*         # 🐛 Bug fixes
  │   └── docs/*        # 📝 Documentation
  └── release/*         # 🚀 Release branches
```

### Commit Convention

```
feat: add rotation animation
fix: resolve scroll jank on iOS
docs: update API reference
style: format code with prettier
refactor: optimize scroll handler
perf: reduce bundle size
test: add flip animation tests
chore: update dependencies
```

---

## 📊 File Size Overview

### Source Files

```
src/viks-animation.js       ~15 KB (uncompressed)
src/viks-animation.scss     ~8 KB (uncompressed)
Total Source:               ~23 KB
```

### Distribution Files

```
dist/viks-animation.js          ~25 KB (UMD)
dist/viks-animation.min.js      ~8 KB (minified)
dist/viks-animation.min.js.gz   ~3 KB (gzipped)

dist/viks-animation.css         ~12 KB
dist/viks-animation.min.css     ~4 KB (minified)
dist/viks-animation.min.css.gz  ~1 KB (gzipped)

Total Production (gzipped):     ~4 KB 🎉
```

---

## 🎯 Key Directories Explained

### `/src` - Source Code

**Contains**: Original, uncompiled source code
**Purpose**: Development and contribution
**Ignored in**: NPM package (optional)

### `/dist` - Distribution

**Contains**: Compiled, ready-to-use files
**Purpose**: Production use
**Included in**: NPM package, Git

### `/examples` - Demonstrations

**Contains**: HTML pages with live demos
**Purpose**: Learning and testing
**Ignored in**: NPM package

### `/test` - Tests

**Contains**: Unit and integration tests
**Purpose**: Quality assurance
**Ignored in**: NPM package

### `/docs` - Documentation

**Contains**: Detailed guides and API docs
**Purpose**: User education
**Ignored in**: NPM package

### `/.github` - GitHub Config

**Contains**: CI/CD workflows, issue templates
**Purpose**: GitHub automation
**Ignored in**: NPM package

---

## 🚦 CI/CD Pipeline

### GitHub Actions Workflows

```
.github/workflows/
├── ci.yml              # 🔄 Continuous Integration
│   ├── Lint code
│   ├── Run tests
│   ├── Check coverage
│   └── Build project
│
├── test.yml            # 🧪 Test Suite
│   ├── Unit tests
│   ├── Integration tests
│   └── Browser tests
│
└── release.yml         # 🚀 Release Process
    ├── Version bump
    ├── Build distribution
    ├── Create git tag
    ├── Publish to NPM
    └── Create GitHub release
```

---

## 📱 Browser Testing Matrix

### Supported Browsers

```
Desktop:
├── Chrome 60+          ✅
├── Firefox 55+         ✅
├── Safari 11+          ✅
├── Edge 79+            ✅
└── Opera 47+           ✅

Mobile:
├── iOS Safari 11+      ✅
├── Android Chrome 60+  ✅
└── Samsung Internet    ✅
```

---

## 🔐 Security & Quality

### Code Quality Tools

```
ESLint              → Code linting
Prettier            → Code formatting
Jest                → Testing framework
Babel               → JS transpilation
Rollup              → Module bundling
Sass                → CSS preprocessing
```

### Security Scanning

```
npm audit           → Dependency vulnerabilities
Snyk                → Security monitoring
CodeQL              → Code analysis
Dependabot          → Dependency updates
```

---

## 📈 Metrics & Analytics

### Package Stats

- **Bundle Size**: ~4KB gzipped
- **Load Time**: < 50ms
- **Parse Time**: < 10ms
- **Downloads**: Track on NPM
- **GitHub Stars**: Track on GitHub

---

## 🎓 Learning Path

### For New Users

1. Read `QUICKSTART.md`
2. Try `examples/basic.html`
3. Explore `examples/index.html`
4. Read `README.md` for details

### For Contributors

1. Read `CONTRIBUTING.md`
2. Review `CODE_OF_CONDUCT.md`
3. Check existing issues
4. Set up development environment
5. Run tests locally

---

## 🔗 Related Files

- 📖 Main README: [README.md](README.md)
- 🚀 Quick Start: [QUICKSTART.md](QUICKSTART.md)
- 🤝 Contributing: [CONTRIBUTING.md](CONTRIBUTING.md)
- 📜 Code of Conduct: [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)
- 📝 Changelog: [CHANGELOG.md](CHANGELOG.md)
- 🔒 Security: [SECURITY.md](SECURITY.md)
- ⚖️ License: [LICENSE](LICENSE)

---

<div align="center">

**[⬆ back to top](#-project-structure)**

📁 Well-organized project structure for better development

Made with 💙 by [MeViksry](https://github.com/MeViksry)

</div>