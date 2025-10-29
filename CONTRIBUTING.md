<div align="center">

# Contributing to VIKS Animation

<img src="https://img.shields.io/badge/contributions-welcome-aqua?style=for-the-badge" alt="Contributions Welcome">

<p>
  <img src="https://img.shields.io/github/contributors/MeViksry/viks-animation?style=flat-square&color=aqua" alt="Contributors">
  <img src="https://img.shields.io/github/issues/MeViksry/viks-animation?style=flat-square&color=black" alt="Issues">
  <img src="https://img.shields.io/github/issues-pr/MeViksry/viks-animation?style=flat-square&color=aqua" alt="Pull Requests">
</p>

**Thank you for considering contributing to VIKS Animation! 🎉**

We love your input! We want to make contributing to VIKS Animation as easy and transparent as possible, whether it's:

- 🐛 Reporting a bug
- 💬 Discussing the current state of the code
- 📝 Submitting a fix
- 🎨 Proposing new features
- 🤝 Becoming a maintainer

</div>

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## 📑 Table of Contents

- [Code of Conduct](#-code-of-conduct)
- [Getting Started](#-getting-started)
- [Development Setup](#-development-setup)
- [How Can I Contribute?](#-how-can-i-contribute)
  - [Reporting Bugs](#-reporting-bugs)
  - [Suggesting Features](#-suggesting-features)
  - [Code Contributions](#-code-contributions)
  - [Documentation](#-documentation)
- [Pull Request Process](#-pull-request-process)
- [Coding Guidelines](#-coding-guidelines)
- [Project Structure](#-project-structure)
- [Testing](#-testing)
- [Commit Message Guidelines](#-commit-message-guidelines)
- [Community](#-community)

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## 📜 Code of Conduct

### Our Pledge

We pledge to make participation in our project and our community a harassment-free experience for everyone, regardless of:

- Age, body size, disability
- Ethnicity, gender identity and expression
- Level of experience, education
- Nationality, personal appearance
- Race, religion, sexual identity and orientation

### Our Standards

**Examples of behavior that contributes to a positive environment:**

✅ Using welcoming and inclusive language  
✅ Being respectful of differing viewpoints  
✅ Gracefully accepting constructive criticism  
✅ Focusing on what is best for the community  
✅ Showing empathy towards other community members

**Examples of unacceptable behavior:**

❌ Trolling, insulting/derogatory comments, personal attacks  
❌ Public or private harassment  
❌ Publishing others' private information  
❌ Other conduct which could be considered inappropriate

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team at **kingvikvik25@gmail.com**. All complaints will be reviewed and investigated promptly and fairly.

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git** (v2.0.0 or higher)
- A code editor (we recommend **VS Code**)

### Recommended VS Code Extensions

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "sysoev.language-stylus",
    "ritwickdey.liveserver",
    "eamodio.gitlens"
  ]
}
```

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## 💻 Development Setup

### 1. Fork the Repository

Click the **Fork** button at the top right of the [repository page](https://github.com/MeViksry/viks-animation).

### 2. Clone Your Fork

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/viks-animation.git

# Navigate to the directory
cd viks-animation

# Add upstream remote
git remote add upstream https://github.com/MeViksry/viks-animation.git
```

### 3. Install Dependencies

```bash
# Using npm
npm install

# Or using yarn
yarn install
```

### 4. Create a Branch

```bash
# Create and checkout a new branch
git checkout -b feature/your-feature-name

# Or for bug fixes
git checkout -b fix/bug-description
```

### 5. Start Development Server

```bash
# Start dev server with hot reload
npm run dev

# Or using yarn
yarn dev
```

The development server will start at `http://localhost:3000`

### 6. Build for Production

```bash
# Build minified files
npm run build

# Or using yarn
yarn build
```

### 7. Run Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## 🤝 How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check the [issue list](https://github.com/MeViksry/viks-animation/issues) to avoid duplicates.

#### How to Submit a Good Bug Report

Use the bug report template and include:

**Required Information:**
- **Clear title** - Describe the issue in one sentence
- **Description** - Detailed explanation of the problem
- **Steps to reproduce** - Exact steps to reproduce the behavior
- **Expected behavior** - What you expected to happen
- **Actual behavior** - What actually happened
- **Screenshots/GIFs** - If applicable
- **Environment details:**
  - Browser name and version
  - OS name and version
  - VIKS Animation version
  - Device (desktop/mobile)

**Example Bug Report:**

```markdown
### Bug: Animations not triggering on iOS Safari 14

**Description:**
Fade-up animations don't trigger when scrolling on iOS Safari 14.5.1

**Steps to Reproduce:**
1. Open demo page on iPhone 12 with iOS 14.5.1
2. Scroll down to "Features" section
3. Observe that cards don't animate

**Expected Behavior:**
Cards should fade up when scrolled into view

**Actual Behavior:**
Cards appear instantly without animation

**Environment:**
- Browser: Safari 14.5.1
- OS: iOS 14.5.1
- Device: iPhone 12
- VIKS Version: 2.3.1

**Screenshots:**
[Attach screenshot]

**Additional Context:**
Works correctly on Chrome iOS
```

### 💡 Suggesting Features

We love feature suggestions! Here's how to submit a good one:

#### Before Suggesting a Feature

- Check the [roadmap](https://github.com/MeViksry/viks-animation/projects)
- Check [existing feature requests](https://github.com/MeViksry/viks-animation/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement)
- Consider if it fits the project scope

#### How to Submit a Feature Request

**Include:**
- **Clear title** - Describe the feature concisely
- **Problem statement** - What problem does this solve?
- **Proposed solution** - How should it work?
- **Alternatives considered** - What other solutions did you think about?
- **Use cases** - Real-world examples
- **Implementation ideas** - Technical approach (optional)

**Example Feature Request:**

```markdown
### Feature: Custom Easing Curve Editor

**Problem:**
Users want to create custom easing functions beyond the 21 presets

**Proposed Solution:**
Add support for custom cubic-bezier values in inline syntax:
`data-viks="fade-up easing-custom(0.68, -0.55, 0.265, 1.55)"`

**Alternatives Considered:**
1. CSS custom properties
2. JavaScript configuration object
3. Visual curve editor tool

**Use Cases:**
- Brand-specific animation timing
- Matching existing design systems
- Fine-tuning animation feel

**Implementation:**
Parse custom easing syntax in parseVIKSAttribute()
Validate cubic-bezier values
Apply to element's transition-timing-function
```

### 🔧 Code Contributions

#### Types of Contributions We're Looking For

**High Priority:**
- 🐛 Bug fixes
- 📱 Mobile/browser compatibility improvements
- ⚡ Performance optimizations
- ♿ Accessibility enhancements
- 📝 Documentation improvements

**Welcome:**
- ✨ New animation types
- 🎨 New easing functions
- 🔧 API improvements
- 🧪 Test coverage expansion

**Please Discuss First:**
- 🏗️ Major architecture changes
- 💥 Breaking changes
- 🎯 Significant feature additions

#### Your First Code Contribution

Not sure where to start? Look for issues labeled:

- `good first issue` - Easy issues for beginners
- `help wanted` - Issues where we need help
- `documentation` - Docs that need improvement

### 📖 Documentation

Documentation is just as important as code! Help us improve:

**Areas to Contribute:**
- Fix typos and grammar
- Add missing examples
- Clarify confusing sections
- Translate documentation
- Create video tutorials
- Write blog posts

**Documentation Files:**
- `README.md` - Main documentation
- `CONTRIBUTING.md` - This file
- `docs/` - Detailed guides
- Code comments - Inline documentation

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## 🔄 Pull Request Process

### 1. Keep Your Fork Updated

```bash
# Fetch upstream changes
git fetch upstream

# Merge upstream main into your branch
git merge upstream/main
```

### 2. Make Your Changes

- Write clean, readable code
- Follow the [coding guidelines](#-coding-guidelines)
- Add/update tests if needed
- Update documentation if needed

### 3. Test Your Changes

```bash
# Run all tests
npm test

# Build to ensure no errors
npm run build

# Test in different browsers
# - Chrome
# - Firefox
# - Safari
# - Edge
```

### 4. Commit Your Changes

Follow our [commit message guidelines](#-commit-message-guidelines):

```bash
# Stage your changes
git add .

# Commit with descriptive message
git commit -m "feat: add custom easing support"
```

### 5. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 6. Create Pull Request

1. Go to your fork on GitHub
2. Click **"New Pull Request"**
3. Select your branch
4. Fill out the PR template
5. Submit!

### Pull Request Template

```markdown
## Description
Brief description of what this PR does

## Type of Change
- [ ] Bug fix (non-breaking change)
- [ ] New feature (non-breaking change)
- [ ] Breaking change (fix or feature that would break existing functionality)
- [ ] Documentation update

## Testing
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on Safari
- [ ] Tested on Edge
- [ ] Tested on mobile devices
- [ ] All tests pass (`npm test`)
- [ ] Build succeeds (`npm run build`)

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests added/updated
- [ ] All tests pass

## Related Issues
Closes #123
Related to #456

## Screenshots (if applicable)
[Add screenshots/GIFs]

## Additional Notes
Any additional context
```

### 7. Review Process

**What Happens Next:**

1. **Automated Checks** - CI/CD runs tests
2. **Code Review** - Maintainers review your code
3. **Feedback** - You may need to make changes
4. **Approval** - Once approved, we'll merge!
5. **Celebration** - You're now a contributor! 🎉

**Review Timeline:**
- Small PRs: 1-3 days
- Medium PRs: 3-7 days
- Large PRs: 1-2 weeks

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## 📐 Coding Guidelines

### JavaScript Style Guide

**General Principles:**
- Write clean, readable code
- Prefer readability over cleverness
- Keep functions small and focused
- Use meaningful variable names
- Comment complex logic

**Code Style:**

```javascript
// ✅ GOOD: Clear, descriptive naming
const parseVIKSAttribute = (element) => {
  const viksValue = element.getAttribute('data-viks');
  if (!viksValue) return {};
  
  const parts = viksValue.trim().split(/\s+/);
  // Parse each part...
};

// ❌ BAD: Unclear naming, no comments
const p = (e) => {
  const v = e.getAttribute('data-viks');
  if (!v) return {};
  const p = v.trim().split(/\s+/);
};
```

**Naming Conventions:**

```javascript
// Variables: camelCase
const animationName = 'fade-up';
const customDuration = 1000;

// Constants: UPPER_SNAKE_CASE
const DEFAULT_DURATION = 400;
const MAX_OFFSET = 1000;

// Functions: camelCase (descriptive verbs)
function getInlineOption() {}
function parseVIKSAttribute() {}
function applyClasses() {}

// Classes: PascalCase
class Detector {}
class MutationObserver {}

// Private methods: _leadingUnderscore
function _calculatePosition() {}
```

**Code Structure:**

```javascript
// 1. Imports (if using modules)
import { throttle } from './utils';

// 2. Constants
const DEFAULT_CONFIG = {
  duration: 400,
  easing: 'ease'
};

// 3. Helper functions
const helperFunction = () => {};

// 4. Main functions
const mainFunction = () => {};

// 5. Initialization
const init = () => {};

// 6. Exports
export { init, mainFunction };
```

**Comments:**

```javascript
// ✅ GOOD: Explain WHY, not WHAT
// Convert inline format to separate attributes for CSS compatibility
if (originalViks.includes(' ')) {
  el.node.setAttribute('data-viks', animationName);
}

// ❌ BAD: Stating the obvious
// Set the data-viks attribute
el.node.setAttribute('data-viks', animationName);

/* **********************************************************
 Section headers for major code blocks
 Brief description of what this section does and why it exists
* **********************************************************/
```

**Avoid:**
- ❌ Global variables (use closures)
- ❌ Magic numbers (use constants)
- ❌ Deep nesting (max 3 levels)
- ❌ Long functions (max 50 lines)
- ❌ console.log in production code

### SCSS Style Guide

**File Organization:**

```scss
// 1. Variables
$viks-distance: 100px;
$viks-easing: (...);

// 2. Mixins (if any)
@mixin animation-base { ... }

// 3. Base styles
[data-viks] { ... }

// 4. Animation definitions
[data-viks='fade-up'] { ... }
```

**Naming:**

```scss
// Variables: kebab-case with prefix
$viks-distance: 100px;
$viks-duration: 400ms;

// Classes: kebab-case
.viks-animate { }
.viks-init { }
```

**Code Style:**

```scss
// ✅ GOOD: Organized, readable
[data-viks='fade-up'] {
  opacity: 0;
  transform: translate3d(0, $viks-distance, 0);
  transition-property: opacity, transform;
  
  &.viks-animate {
    opacity: 1;
    transform: none;
  }
}

// ❌ BAD: Messy, hard to read
[data-viks='fade-up']{opacity:0;transform:translate3d(0,100px,0);transition-property:opacity,transform;&.viks-animate{opacity:1;transform:none;}}
```

### File Naming

```
src/
├── js/
│   ├── viks.js              # Main library file
│   ├── utils/
│   │   ├── throttle.js      # Utility functions
│   │   └── debounce.js
│   └── detectors/
│       └── device.js        # Device detection
├── scss/
│   ├── viks.scss            # Main styles
│   ├── _variables.scss      # SCSS variables
│   └── animations/
│       ├── _fade.scss       # Fade animations
│       ├── _zoom.scss       # Zoom animations
│       └── _slide.scss      # Slide animations
└── examples/
    └── basic.html           # Example files
```

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## 📁 Project Structure

```
viks-animation/
├── 📁 .github/                           # GitHub configuration files
│   └── 📁 workflows/                     # GitHub automation workflows
│       ├── 🔧 build-and-release.yml      # Build and release pipeline
│       └── 🔧 ci.yml                     # Continuous integration pipeline
│
├── 📁 dist/                              # Distribution files (built assets)
│   ├── 📁 css/                           # Compiled CSS files
│   │   ├── 🎨 viks.css                   # Development CSS (unminified)
│   │   ├── 🗺️ viks.css.map               # Source map for development CSS
│   │   ├── 🎨 viks.min.css               # Production CSS (minified)
│   │   └── 🗺️ viks.min.css.map           # Source map for production CSS
│   └── 📁 js/                            # Compiled JavaScript files
│       ├── ⚡ viks-css.js                 # CSS utilities JavaScript
│       ├── 🗺️ viks-css.js.map            # Source map for viks-css.js
│       ├── ⚡ viks-css.min.js             # Minified viks-css.js
│       ├── 🗺️ viks-css.min.js.map        # Source map for minified version
│       ├── ⚡ viks.js                     # Main JavaScript library
│       ├── 🗺️ viks.js.map                # Source map for viks.js
│       ├── ⚡ viks.min.js                 # Minified viks.js
│       └── 🗺️ viks.min.js.map            # Source map for minified version
│
├── 📁 node_modules/                      # npm dependencies (auto-generated)
│
├── 📁 scripts/                           # Custom utility scripts
│   └── 🔧 format-viks-css.js             # Script for formatting CSS
│
├── 📁 src/                               # Source code directory
│   ├── 📁 js/                            # JavaScript source files
│   │   └── ⚡ viks-animation.js           # Main animation library source
│   └── 📁 sass/                          # Sass/SCSS source files
│       └── 🎨 viks-animation.scss         # Main Sass stylesheet source
│
├── 📄 .eslintrc.json                     # ESLint configuration (legacy)
├── 📄 .gitignore                         # Git ignore patterns
├── 📄 .prettierignore                    # Prettier ignore patterns
├── 📄 .prettierrc.json                   # Prettier code formatter config
├── 📄 .stylelintrc.json                  # Stylelint CSS/SCSS linting config
├── 📄 babel.config.js                    # Babel transpiler configuration
├── 📄 eslint.config.js                   # ESLint configuration (modern)
├── 📄 eslint.config.mjs                  # ESLint ES6 module configuration
├── 📄 jest.config.js                     # Jest testing framework configuration
├── 📄 Makefile                           # Automation tasks using Make
├── 📄 package-lock.json                  # Locked npm dependencies versions
├── 📄 package.json                       # npm dependencies and scripts
├── 📄 postcss.config.js                  # PostCSS processor configuration
├── 📄 SETUP.md                           # Project setup documentation
├── 📄 stats.html                         # Build statistics (auto-generated)
├── 📄 webpack.config.js                  # Webpack module bundler configuration
├── 📖 README.md                          # Main project documentation
└── 🤝 CONTRIBUTING.md                    # This file
```

### 📂 Directory Breakdown

#### `.github/workflows/` - CI/CD Automation
Contains GitHub Actions workflows for automated testing, building, and deployment.

**Files:**
- `build-and-release.yml` - Automates build process and creates releases
- `ci.yml` - Runs tests and linting on every commit

#### `dist/` - Distribution Files
**⚠️ Do not edit directly!** Auto-generated by build process.

Contains compiled, minified, and production-ready files:
- **CSS files** - Compiled from Sass with autoprefixer
- **JS files** - Transpiled with Babel, bundled with Webpack
- **Source maps** - For debugging minified code
- **viks-css.js** - CSS utility helpers

#### `scripts/` - Build Utilities
Custom Node.js scripts for build automation and tooling.

**Files:**
- `format-viks-css.js` - Post-processing for CSS output

#### `src/` - Source Code
**✏️ Edit these files** for development.

**Structure:**
- `js/viks-animation.js` - Main library source code
- `sass/viks-animation.scss` - Main stylesheet source

#### Configuration Files
- **ESLint** - JavaScript linting (`.eslintrc.json`, `eslint.config.js`)
- **Prettier** - Code formatting (`.prettierrc.json`)
- **Stylelint** - CSS/SCSS linting (`.stylelintrc.json`)
- **Babel** - JavaScript transpilation (`babel.config.js`)
- **Webpack** - Module bundling (`webpack.config.js`)
- **PostCSS** - CSS processing (`postcss.config.js`)
- **Jest** - Testing framework (`jest.config.js`)
- **Makefile** - Build automation commands

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## 🧪 Testing

### Writing Tests

```javascript
// Example test structure
describe('VIKS Animation', () => {
  describe('parseVIKSAttribute', () => {
    it('should parse inline duration', () => {
      const element = document.createElement('div');
      element.setAttribute('data-viks', 'fade-up duration-1000');
      
      const parsed = parseVIKSAttribute(element);
      
      expect(parsed.duration).toBe('1000');
      expect(parsed.animation).toBe('fade-up');
    });
    
    it('should handle multiple parameters', () => {
      const element = document.createElement('div');
      element.setAttribute('data-viks', 'fade-up duration-1000 delay-500 easing-ease-out');
      
      const parsed = parseVIKSAttribute(element);
      
      expect(parsed.duration).toBe('1000');
      expect(parsed.delay).toBe('500');
      expect(parsed.easing).toBe('ease-out');
    });
  });
});
```

### Running Tests

```bash
# Run all tests
npm test

# Run specific test file
npm test -- parseVIKSAttribute.test.js

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Test Coverage

We aim for:
- **80%** overall coverage
- **90%** coverage for core functionality
- **100%** coverage for critical paths

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## 💬 Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding/updating tests
- `chore`: Build process, dependencies, etc.
- `ci`: CI/CD changes

### Examples

**Good Commit Messages:**

```bash
feat(inline): add support for custom easing functions

Added parsing for custom cubic-bezier easing in inline syntax.
Users can now use: data-viks="fade-up easing-custom(0.1,0.2,0.3,0.4)"

Closes #123

---

fix(mobile): resolve animation jank on iOS Safari

Fixed throttle timing that caused animations to stutter
on iOS devices. Increased throttleDelay to 150ms for mobile.

Fixes #456

---

docs(readme): update installation instructions

Added pnpm installation method and clarified CDN usage

---

perf(scroll): optimize scroll event handler

Reduced scroll handler execution time by 30% through
better element caching and conditional checks

---

test(parser): add tests for inline parameter parsing

Added 15 new test cases covering all inline parameters
including edge cases and invalid input
```

**Bad Commit Messages:**

```bash
❌ update code
❌ fix bug
❌ changes
❌ wip
❌ more stuff
```

### Commit Message Tips

- Use imperative mood ("add" not "added")
- Capitalize first letter
- No period at the end of subject
- Keep subject under 50 characters
- Separate subject from body with blank line
- Wrap body at 72 characters
- Explain **what** and **why**, not **how**

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## 🌐 Community

### Get Help

- 💬 **Discussions**: [GitHub Discussions](https://github.com/MeViksry/viks-animation/discussions)
- 🐛 **Issues**: [GitHub Issues](https://github.com/MeViksry/viks-animation/issues)
- 📧 **Email**: kingvikvik25@gmail.com
- 🔗 **Discord**: [Join our server](https://discord.gg/viks-animation)

### Stay Updated

- ⭐ **Star the repo** to show support
- 👁️ **Watch the repo** for updates
- 🐦 **Follow on Twitter**: [@viksry](https://twitter.com/viksry)
- 📱 **Follow on Instagram**: [@meviksry](https://instagram.com/meviksry)

### Contributors

<a href="https://github.com/MeViksry/viks-animation/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=MeViksry/viks-animation" />
</a>

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## 🎓 Learning Resources

### Recommended Reading

- [JavaScript: The Good Parts](https://www.oreilly.com/library/view/javascript-the-good/9780596517748/)
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
- [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)

### Useful Tools

- **Code Formatter**: [Prettier](https://prettier.io/)
- **Linter**: [ESLint](https://eslint.org/)
- **Browser Testing**: [BrowserStack](https://www.browserstack.com/)
- **Performance Testing**: [Lighthouse](https://developers.google.com/web/tools/lighthouse)

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## 📋 Checklist for Contributors

Before submitting a PR, ensure:

- [ ] Code follows style guidelines
- [ ] Comments added for complex logic
- [ ] Documentation updated (if needed)
- [ ] Tests added/updated (if needed)
- [ ] All tests pass (`npm test`)
- [ ] Build succeeds (`npm run build`)
- [ ] No console errors/warnings
- [ ] Tested on multiple browsers
- [ ] Commit messages follow guidelines
- [ ] PR description is clear and complete

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## 🙏 Recognition

All contributors will be:

- ✨ Listed in our README
- 🎉 Featured in release notes
- 🏆 Added to contributors page
- 💝 Mentioned on social media

**Special recognition for:**
- 🥇 First-time contributors
- 🚀 Major feature contributors
- 🐛 Bug bounty hunters
- 📚 Documentation heroes

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## ❓ Questions?

Don't hesitate to ask! We're here to help:

- Open a [Discussion](https://github.com/MeViksry/viks-animation/discussions)
- Email us at kingvikvik25@gmail.com
- Join our [Discord](https://discord.gg/viks-animation)

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

<div align="center">
  <h2>Thank You! 🎉</h2>
  <p>Your contributions make VIKS Animation better for everyone!</p>
  
  <img src="https://contrib.rocks/image?repo=MeViksry/viks-animation" alt="Contributors" />
  
  <p>
    <strong>Made with ❤️ by the VIKS Animation community</strong>
  </p>
</div>

---

<div align="center">
  <sub>Questions? Contact <a href="mailto:kingvikvik25@gmail.com">kingvikvik25@gmail.com</a></sub>
</div>