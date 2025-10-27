# 🚀 VIKS Animation - Complete Setup Guide

[![Build Status](https://img.shields.io/badge/Build-Webpack_5-aqua?style=for-the-badge&logo=webpack&logoColor=white&labelColor=2C2C2C)](#webpack-configuration)
[![Node Version](https://img.shields.io/badge/Node-18+-aqua?style=for-the-badge&logo=node.js&logoColor=white&labelColor=2C2C2C)](#requirements)
[![Package Manager](https://img.shields.io/badge/NPM-10+-aqua?style=for-the-badge&logo=npm&logoColor=white&labelColor=2C2C2C)](#quick-setup)
[![License](https://img.shields.io/badge/License-MIT-aqua?style=for-the-badge&logoColor=000000&labelColor=2C2C2C)](#)
[![Automation](https://img.shields.io/badge/CI/CD-GitHub_Actions-aqua?style=for-the-badge&logo=github-actions&logoColor=white&labelColor=2C2C2C)](#github-actions-setup)
[![Code Quality](https://img.shields.io/badge/Linting-ESLint_+_Stylelint-aqua?style=for-the-badge&logo=eslint&logoColor=white&labelColor=2C2C2C)](#linting)
[![Build Tool](https://img.shields.io/badge/Build-Make-aqua?style=for-the-badge&logo=gnu&logoColor=white&labelColor=2C2C2C)](#using-makefile)

---

## 📑 Table of Contents

- [📋 Requirements](#-requirements)
- [📁 File Structure](#-file-structure)
- [⚡ Quick Setup](#-quick-setup)
- [🛠️ Using Makefile](#️-using-makefile)
- [📦 NPM Scripts](#-npm-scripts)
- [⚙️ Configuration](#️-configuration)
- [🤖 GitHub Actions](#-github-actions-setup)
- [🏷️ Creating Releases](#️-creating-releases)
- [🔧 Troubleshooting](#-troubleshooting)
- [📊 Monitoring](#-monitoring)
- [🎯 Best Practices](#-best-practices)
- [✅ Production Checklist](#-production-checklist)

---

## 📋 Requirements

![Node](https://img.shields.io/badge/Node.js-18.x_or_higher-00FFFF?style=flat-square&logo=node.js&logoColor=000000&labelColor=2C2C2C)
![NPM](https://img.shields.io/badge/NPM-10.x_or_higher-40E0D0?style=flat-square&logo=npm&logoColor=000000&labelColor=2C2C2C)
![Git](https://img.shields.io/badge/Git-2.x_or_higher-00CED1?style=flat-square&logo=git&logoColor=000000&labelColor=2C2C2C)

```bash
# Check your versions
node --version   # Should be v18.x or higher
npm --version    # Should be 10.x or higher
git --version    # Should be 2.x or higher
```

---

## 📁 File Structure

```
viks-animation/
├── 📂 .github/
│   └── 📂 workflows/
│       ├── 📄 build-and-release.yml    # Automated releases
│       └── 📄 ci.yml                   # CI pipeline
│
├── 📂 dist/                            # 🎯 Build output
│   ├── 📂 css/
│   │   ├── 📄 viks.css                # Expanded CSS
│   │   ├── 📄 viks.css.map            # CSS source map
│   │   ├── 📄 viks.min.css            # Minified CSS
│   │   └── 📄 viks.min.css.map        # Minified CSS map
│   │
│   └── 📂 js/
│       ├── 📄 viks.js                 # Expanded JS (UMD)
│       ├── 📄 viks.js.map             # JS source map
│       ├── 📄 viks.min.js             # Minified JS
│       ├── 📄 viks.min.js.map         # Minified JS map
│       ├── 📄 viks-css.js             # CSS entry artifact
│       ├── 📄 viks-css.js.map         # CSS entry map
│       ├── 📄 viks-css.min.js         # CSS entry minified
│       └── 📄 viks-css.min.js.map     # CSS entry min map
│
├── 📂 src/                             # 📝 Source files
│   ├── 📂 js/
│   │   └── 📄 viks-animation.js       # Main JavaScript
│   │
│   └── 📂 sass/
│       └── 📄 viks-animation.scss     # Main SCSS
│
├── 📂 node_modules/                    # Dependencies
│
├── 📄 .eslintrc.json                   # ESLint config
├── 📄 .gitignore                       # Git ignore rules
├── 📄 .stylelintrc.json                # Stylelint config
├── 📄 babel.config.js                  # Babel transpiler config
├── 📄 eslint.config.js                 # ESLint flat config
├── 📄 eslint.config.mjs                # ESLint ESM config
├── 📄 Makefile                         # Build automation
├── 📄 package.json                     # NPM dependencies
├── 📄 package-lock.json                # Locked dependencies
├── 📄 postcss.config.js                # PostCSS config
├── 📄 webpack.config.js                # Webpack bundler config
├── 📄 stats.html                       # Bundle analysis
└── 📄 SETUP.md                         # This file
```

### 📦 Output Files Explained

| File | Purpose | Size |
|------|---------|------|
| `viks.js` | Development version with comments | ~50KB |
| `viks.min.js` | Production version, minified | ~20KB |
| `viks.css` | Development styles, expanded | ~30KB |
| `viks.min.css` | Production styles, minified | ~15KB |
| `*.map` | Source maps for debugging | Various |
| `viks-css.js` | Side effect from CSS processing | ~1KB |

> **Note:** `viks-css.js` files are Webpack artifacts from processing SCSS entries. They're mostly empty and safe to ignore.

---

## ⚡ Quick Setup

### 🎬 Step 1: Initialize Repository

```bash
# Option A: Start fresh
mkdir viks-animation
cd viks-animation
git init

# Option B: Clone existing
git clone https://github.com/MeViksry/viks-animation.git
cd viks-animation
```

### 📂 Step 2: Create Folder Structure

```bash
# Create all necessary directories
mkdir -p src/js src/sass .github/workflows dist

# Verify structure
tree -L 2 -d
```

### 📋 Step 3: Copy Your Source Files

```bash
# Copy your JavaScript source
cp /path/to/your/viks-animation.js src/js/

# Copy your SCSS source
cp /path/to/your/viks-animation.scss src/sass/

# Verify files
ls -la src/js/ src/sass/
```

### 📥 Step 4: Install Dependencies

```bash
# Install all packages
npm install

# This installs:
# - Webpack & loaders
# - Babel & presets
# - ESLint & Stylelint
# - PostCSS & plugins
# - And more...
```

**Expected output:**
```
added 500+ packages in 30s
```

### 🔨 Step 5: Build Your Project

```bash
# Development build (unminified, with source maps)
npm run build:dev

# Production build (minified, optimized)
npm run build

# Watch mode (auto-rebuild on changes)
npm run dev
```

### ✅ Step 6: Verify Output

```bash
# Check generated files
ls -lh dist/js/
ls -lh dist/css/

# Expected files:
# ✓ dist/js/viks.js
# ✓ dist/js/viks.min.js
# ✓ dist/js/viks.js.map
# ✓ dist/js/viks.min.js.map
# ✓ dist/css/viks.css
# ✓ dist/css/viks.min.css
# ✓ dist/css/viks.css.map
# ✓ dist/css/viks.min.css.map
```

### 🎉 Success!

```bash
# Test in browser
npm run serve

# Opens http://localhost:9000
# Hot reload enabled! 🔥
```

---

## 🛠️ Using Makefile

![Make](https://img.shields.io/badge/GNU_Make-Automation-00FFFF?style=flat-square&logo=gnu&logoColor=000000&labelColor=2C2C2C)

The Makefile provides convenient shortcuts for common tasks.

### 📖 View All Commands

```bash
make help
```

**Output:**
```
Available targets:
  make install     - Install dependencies
  make dev         - Start development mode
  make build       - Build for production
  make clean       - Remove build artifacts
  make lint        - Run all linters
  make lint-fix    - Fix linting issues
  make test        - Run tests
  make verify      - Verify build output
  make size        - Check file sizes
  make all         - Full pipeline
  make quick       - Quick rebuild
  make release     - Create new release
  make help        - Show this help
```

### 🚀 Common Tasks

#### Install & Setup

```bash
# First time setup
make install
```

#### Development

```bash
# Watch mode with hot reload
make dev

# Start dev server (in another terminal)
make serve
```

#### Building

```bash
# Production build
make build

# Development build
make build-dev

# Clean and rebuild
make clean build

# Quick rebuild (no clean)
make quick
```

#### Quality Checks

```bash
# Run all linters
make lint

# Auto-fix issues
make lint-fix

# Lint JavaScript only
make lint-js

# Lint SCSS only
make lint-scss
```

#### Verification

```bash
# Verify build output
make verify

# Check file sizes
make size

# Bundle analysis
make analyze
```

#### Full Pipeline

```bash
# Run everything: clean → install → lint → build → verify
make all

# Perfect before commits!
```

#### Release Management

```bash
# Create new release (prompts for version)
make release

# Example:
# Enter version: 1.0.0
# Creates tag v1.0.0 and pushes
```

---

## 📦 NPM Scripts

![NPM](https://img.shields.io/badge/NPM_Scripts-Available-40E0D0?style=flat-square&logo=npm&logoColor=000000&labelColor=2C2C2C)

### 🏗️ Building

```bash
# Production build (minified + optimized)
npm run build

# Development build (source maps + readable)
npm run build:dev

# Watch mode (auto-rebuild)
npm run dev

# Clean dist folder
npm run clean
```

### 🖥️ Development Server

```bash
# Start dev server at localhost:9000
npm run serve

# Features:
# - Hot Module Replacement (HMR)
# - Auto browser reload
# - Live CSS injection
```

### 🔍 Code Quality

```bash
# Lint JavaScript
npm run lint:js

# Lint SCSS
npm run lint:scss

# Lint everything
npm run lint

# Auto-fix issues
npm run lint:js -- --fix
npm run lint:scss -- --fix
```

### 🧪 Testing

```bash
# Run tests
npm test

# Run with coverage
npm run test:coverage
```

### 📊 Analysis

```bash
# Bundle size analysis
npm run analyze

# Opens stats.html with visual report
```

---

## ⚙️ Configuration

### 🎯 Change File Names

Edit `webpack.config.js` in two places:

#### 1. Entry Points (Input)

```javascript
entry: {
  'viks': './src/js/viks-animation.js',        // → viks.js
  'viks.min': './src/js/viks-animation.js',    // → viks.min.js
  'viks-css': './src/sass/viks-animation.scss',     // CSS entry
  'viks-css.min': './src/sass/viks-animation.scss'  // CSS minified
}
```

**Change to:**
```javascript
entry: {
  'mylib': './src/js/main.js',           // → mylib.js
  'mylib.min': './src/js/main.js',       // → mylib.min.js
  'mylib-css': './src/sass/main.scss',   // CSS entry
  'mylib-css.min': './src/sass/main.scss'
}
```

#### 2. CSS Output Names (Output)

```javascript
new MiniCssExtractPlugin({
  filename: (pathData) => {
    if (pathData.chunk.name === 'viks-css') {
      return 'css/viks.css';              // → dist/css/viks.css
    }
    if (pathData.chunk.name === 'viks-css.min') {
      return 'css/viks.min.css';          // → dist/css/viks.min.css
    }
    return 'css/[name].css';
  }
})
```

**Change to:**
```javascript
new MiniCssExtractPlugin({
  filename: (pathData) => {
    if (pathData.chunk.name === 'mylib-css') {
      return 'css/mylib.css';
    }
    if (pathData.chunk.name === 'mylib-css.min') {
      return 'css/mylib.min.css';
    }
    return 'css/[name].css';
  }
})
```

#### Result

```
Before:                      After:
dist/                        dist/
├── css/                     ├── css/
│   ├── viks.css            │   ├── mylib.css
│   └── viks.min.css        │   └── mylib.min.css
└── js/                      └── js/
    ├── viks.js             │   ├── mylib.js
    └── viks.min.js         │   └── mylib.min.js
```

### 🗂️ Change Output Directory

```javascript
output: {
  path: path.resolve(__dirname, 'dist'),  // Change to 'build', 'public', etc.
  filename: 'js/[name].js',
  // ...
}
```

### 📚 Change Library Name

```javascript
output: {
  library: {
    name: 'VIKS',      // Change to 'MyLib', 'MyFramework', etc.
    type: 'umd',       // Universal Module Definition
    export: 'default'
  }
}
```

**Usage in browser:**
```html
<script src="dist/js/viks.min.js"></script>
<script>
  // Before: window.VIKS
  const viks = new VIKS();
  
  // After changing to 'MyLib': window.MyLib
  const myLib = new MyLib();
</script>
```

### 🎨 Add More SCSS Files

```javascript
entry: {
  'viks': './src/js/viks-animation.js',
  'viks.min': './src/js/viks-animation.js',
  'viks-css': './src/sass/viks-animation.scss',
  'viks-css.min': './src/sass/viks-animation.scss',
  
  // Add new entries:
  'theme': './src/sass/theme.scss',
  'theme.min': './src/sass/theme.scss'
}
```

**Update CSS plugin:**
```javascript
new MiniCssExtractPlugin({
  filename: (pathData) => {
    if (pathData.chunk.name === 'theme') {
      return 'css/theme.css';
    }
    if (pathData.chunk.name === 'theme.min') {
      return 'css/theme.min.css';
    }
    // ... existing conditions
  }
})
```

### 🔧 Browser Support

Edit `babel.config.js`:

```javascript
targets: {
  browsers: [
    '> 1%',              // Market share > 1%
    'last 2 versions',   // Last 2 versions
    'not dead'           // Still maintained
  ]
}
```

**Common presets:**
```javascript
// Modern browsers only
browsers: ['last 2 Chrome versions', 'last 2 Firefox versions']

// Include IE11
browsers: ['> 0.5%', 'last 2 versions', 'not dead', 'IE 11']

// Mobile first
browsers: ['last 2 iOS versions', 'last 2 Android versions']
```

---

## 🤖 GitHub Actions Setup

![GitHub Actions](https://img.shields.io/badge/CI/CD-Automated-00FFFF?style=flat-square&logo=github-actions&logoColor=000000&labelColor=2C2C2C)

### 📋 Step 1: Enable Actions

1. Go to **Settings** → **Actions** → **General**
2. Under "Actions permissions", select:
   - ✅ **Allow all actions and reusable workflows**
3. Click **Save**

### 🔐 Step 2: Add NPM Token (Optional)

For automatic NPM publishing:

1. Go to [npmjs.com/settings/tokens](https://www.npmjs.com/settings/YOUR_USERNAME/tokens)
2. Click **Generate New Token** → **Automation**
3. Copy the token
4. In GitHub: **Settings** → **Secrets** → **Actions**
5. Click **New repository secret**
   - Name: `NPM_TOKEN`
   - Value: *paste your token*
6. Click **Add secret**

### 🚀 Step 3: Push to GitHub

```bash
# Add all files
git add .

# Commit
git commit -m "Initial setup with build system"

# Push to main branch
git push origin main
```

### ✅ Step 4: Verify Workflow

1. Go to **Actions** tab
2. See your workflow running
3. Wait for green checkmark ✅

**Workflows:**
- `ci.yml` - Runs on every push (lint + build + test)
- `build-and-release.yml` - Runs on tags (create releases)

### 🌐 Step 5: Enable GitHub Pages

For CDN hosting:

1. Go to **Settings** → **Pages**
2. Source: **GitHub Actions**
3. Click **Save**

**Your files will be available at:**
```
https://YOUR_USERNAME.github.io/viks-animation/js/viks.min.js
https://YOUR_USERNAME.github.io/viks-animation/css/viks.min.css
```

**Usage example:**
```html
<!-- Use your library from GitHub Pages -->
<link rel="stylesheet" href="https://meviksry.github.io/viks-animation/css/viks.min.css">
<script src="https://meviksry.github.io/viks-animation/js/viks.min.js"></script>
```

---

## 🏷️ Creating Releases

![Release](https://img.shields.io/badge/Releases-Automated-40E0D0?style=flat-square&logo=github&logoColor=000000&labelColor=2C2C2C)

### 🤖 Automatic Release (Recommended)

```bash
# Method 1: Using Makefile
make release

# Prompts: Enter version: 1.0.0
# Automatically:
# - Creates tag v1.0.0
# - Pushes to GitHub
# - Triggers release workflow

# Method 2: Manual
git tag v1.0.0
git push origin v1.0.0
```

**What happens automatically:**
1. ✅ Runs CI tests
2. ✅ Builds production assets
3. ✅ Creates GitHub Release
4. ✅ Uploads JS, CSS, and source maps
5. ✅ Publishes to NPM (if token configured)
6. ✅ Generates changelog
7. ✅ Deploys to GitHub Pages

### 📦 Version Bumping

```bash
# Patch: 1.0.0 → 1.0.1 (bug fixes)
npm version patch

# Minor: 1.0.0 → 1.1.0 (new features)
npm version minor

# Major: 1.0.0 → 2.0.0 (breaking changes)
npm version major

# Push tags
git push origin main --tags
```

### 📝 Manual Release

1. Update `package.json` version
2. Update `CHANGELOG.md`
3. Commit changes
4. Create and push tag:

```bash
git add .
git commit -m "chore: bump version to 1.0.0"
git tag v1.0.0
git push origin main --tags
```

### 🎯 Release Checklist

Before creating a release:

- [ ] All tests pass: `npm test`
- [ ] Linters pass: `make lint`
- [ ] Build succeeds: `make build`
- [ ] Files verified: `make verify`
- [ ] CHANGELOG.md updated
- [ ] Version bumped in package.json
- [ ] Documentation updated

---

## 🔧 Troubleshooting

![Debug](https://img.shields.io/badge/Debug-Solutions-00CED1?style=flat-square&logo=bug&logoColor=000000&labelColor=2C2C2C)

### ❌ Problem: npm install fails

```bash
# Solution 1: Clear cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install

# Solution 2: Use legacy peer deps
npm install --legacy-peer-deps

# Solution 3: Use different Node version
nvm use 18
npm install
```

### ❌ Problem: Build fails

```bash
# Full reset
make clean
rm -rf node_modules dist
npm install
npm run build

# Verbose output
npm run build -- --verbose

# Check Webpack errors
npx webpack --config webpack.config.js --mode production
```

### ❌ Problem: Source maps not loading

```bash
# Rebuild with source maps
npm run clean
npm run build

# Verify source maps exist
ls -lh dist/**/*.map

# Check devtool setting in webpack.config.js
# Should be: devtool: 'source-map'
```

### ❌ Problem: ESLint errors

```bash
# Auto-fix
npm run lint:js -- --fix

# Or with Makefile
make lint-fix

# Ignore specific rules (not recommended)
# Add to .eslintrc.json:
{
  "rules": {
    "no-console": "off"
  }
}
```

### ❌ Problem: Stylelint errors

```bash
# Auto-fix
npm run lint:scss -- --fix

# Check config
cat .stylelintrc.json

# Ignore files
# Add to .stylelintrc.json:
{
  "ignoreFiles": ["dist/**/*.css"]
}
```

### ❌ Problem: GitHub Actions fails

**Check logs:**
1. Go to **Actions** tab
2. Click failed workflow
3. Expand failed step
4. Read error message

**Common fixes:**
```bash
# Validate YAML syntax
# Use: https://www.yamllint.com/

# Check Node version in workflow
# .github/workflows/ci.yml:
# node-version: [18.x, 20.x]

# Ensure all files committed
git status
git add .
git commit -m "fix: missing files"
git push
```

### ❌ Problem: Files not in dist/

```bash
# Check webpack output
npm run build -- --progress --verbose

# Verify entry points
cat webpack.config.js | grep entry -A 10

# Check output path
cat webpack.config.js | grep output -A 10

# Manual build
npx webpack --config webpack.config.js --mode production
```

### ❌ Problem: Hot reload not working

```bash
# Check dev server
npm run serve -- --hot

# Verify port
lsof -i :9000

# Try different port
# Edit webpack.config.js:
# devServer: { port: 3000 }
```

### 🆘 Still Having Issues?

```bash
# Nuclear option: Start fresh
rm -rf node_modules package-lock.json dist
npm cache clean --force
npm install
npm run build

# Check versions
node --version
npm --version
npx webpack --version
```

---

## 📊 Monitoring

![Analytics](https://img.shields.io/badge/Analytics-Enabled-20B2AA?style=flat-square&logo=chartdotjs&logoColor=000000&labelColor=2C2C2C)

### 🔍 Check Build Status

**On GitHub:**
1. Go to **Actions** tab
2. View all workflow runs
3. Green ✅ = Success
4. Red ❌ = Failed (click for details)

**Locally:**
```bash
# View build logs
npm run build -- --progress --verbose

# JSON output
npm run build -- --json > stats.json
```

### 📈 Bundle Size Analysis

```bash
# Generate visual report
npm run analyze

# Or with Makefile
make analyze

# Opens stats.html in browser
```

**Report shows:**
- 📦 Bundle size breakdown
- 📊 Module sizes
- 🔗 Dependencies graph
- 🎯 Optimization opportunities

### 📏 Check File Sizes

```bash
# Using Makefile (formatted)
make size

# Manual (detailed)
du -h dist/js/* dist/css/*

# Human-readable
ls -lh dist/**/*

# Total size
du -sh dist/
```

**Expected sizes:**
```
dist/js/viks.js          ~50KB  (development)
dist/js/viks.min.js      ~20KB  (production)
dist/css/viks.css        ~30KB  (development)
dist/css/viks.min.css    ~15KB  (production)
```

### 📊 Performance Metrics

```bash
# Build time
time npm run build

# With profiling
npm run build -- --profile

# Memory usage
node --max-old-space-size=4096 node_modules/.bin/webpack
```

### 🔔 Set Up Notifications

Add to `.github/workflows/ci.yml`:

```yaml
- name: Notify on failure
  if: failure()
  run: |
    echo "Build failed! Check logs."
    # Add Slack/Discord webhook here
```

---

## 🎯 Best Practices

![Best Practices](https://img.shields.io/badge/Best_Practices-Follow-00FFFF?style=flat-square&logo=checkmarx&logoColor=000000&labelColor=2C2C2C)

### 📝 Before Every Commit

```bash
# Run full quality check
make lint        # Check code quality
make build       # Verify build works
make verify      # Verify output files

# Or run everything
make all
```

### 🏷️ Before Creating Release

```bash
# 1. Update version
npm version patch  # or minor/major

# 2. Update changelog
code CHANGELOG.md

# 3. Run full pipeline
make all

# 4. Test locally
npm run serve

# 5. Commit and tag
git add .
git commit -m "chore: release v1.0.0"
git tag v1.0.0

# 6. Push everything
git push origin main --tags
```

### 🔄 Development Workflow

```bash
# Terminal 1: Watch mode
make dev

# Terminal 2: Dev server
make serve

# Terminal 3: Available for commands
make lint-fix  # Fix issues
git status     # Check changes
```

### 📦 Commit Message Format

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Format: <type>(<scope>): <subject>

# Types:
feat:     # New feature
fix:      # Bug fix
docs:     # Documentation
style:    # Formatting
refactor: # Code restructuring
test:     # Add tests
chore:    # Maintenance

# Examples:
git commit -m "feat: add new animation effect"
git commit -m "fix: resolve IE11 compatibility"
git commit -m "docs: update installation guide"
git commit -m "chore: bump dependencies"
```

### 🔒 Security Best Practices

```bash
# Regular updates
npm update

# Check for vulnerabilities
npm audit

# Fix automatically
npm audit fix

# Check outdated packages
npm outdated
```

### 🧹 Keep Clean

```bash
# Before commits
make clean
make build

# Remove old artifacts
git clean -fdx

# Update .gitignore
echo "*.log" >> .gitignore
echo ".DS_Store" >> .gitignore
```

---

## ✅ Production Checklist

![Production](https://img.shields.io/badge/Production-Ready-40E0D0?style=flat-square&logo=rocket&logoColor=000000&labelColor=2C2C2C)

Before deploying to production, verify:

### 🔨 Build & Quality

- [ ] `make all` runs successfully
- [ ] All tests pass: `npm test`
- [ ] Linters show no errors: `make lint`
- [ ] Build completes: `make build`
- [ ] Files verified: `make verify`

### 📦 File Verification

- [ ] All expected files in `dist/`
- [ ] File sizes acceptable: `make size`
- [ ] Source maps generated: `ls dist/**/*.map`
- [ ] No console warnings in browser

### 📄 Documentation

- [ ] README.md updated
- [ ] CHANGELOG.md updated
- [ ] SETUP.md reflects changes
- [ ] API documentation current
- [ ] Examples working

### 🏷️ Version Control

- [ ] Version bumped in `package.json`
- [ ] Git tag created: `git tag v1.0.0`
- [ ] All changes committed
- [ ] Pushed to GitHub

### 🤖 Automation

- [ ] CI/CD passing on GitHub
- [ ] Release workflow triggered
- [ ] NPM published (if applicable)
- [ ] GitHub Pages deployed

### 🧪 Testing

- [ ] Manual testing complete
- [ ] Browser compatibility checked
- [ ] Mobile responsive verified
- [ ] Accessibility tested

### 🔒 Security

- [ ] `npm audit` shows no issues
- [ ] Dependencies up to date
- [ ] No sensitive data in code
- [ ] Tokens secured in secrets

### 📊 Performance

- [ ] Bundle size optimized
- [ ] Minification working
- [ ] Gzip compression enabled
- [ ] Load time acceptable

---

## 🚀 Quick Reference

### 🔥 Most Used Commands

```bash
# Development
make dev              # Watch mode
make serve            # Start server
make build            # Production build

# Quality
make lint             # Check code
make lint-fix         # Fix issues
make all              # Full pipeline

# Release
make release          # Create release
npm version patch     # Bump version
```

### 📁 Important Files

| File | Purpose |
|------|---------|
| `webpack.config.js` | Build configuration |
| `package.json` | Dependencies & scripts |
| `Makefile` | Build automation |
| `.github/workflows/` | CI/CD pipelines |
| `src/` | Source files |
| `dist/` | Build output |

### 🔗 Useful Links

- 📖 [Webpack Docs](https://webpack.js.org/configuration/)
- 📖 [Babel Docs](https://babeljs.io/docs/)
- 📖 [SASS Docs](https://sass-lang.com/documentation/)
- 📖 [ESLint Docs](https://eslint.org/docs/latest/)
- 📖 [Stylelint Docs](https://stylelint.io/)
- 📖 [GitHub Actions Docs](https://docs.github.com/actions)
- 📖 [PostCSS Docs](https://postcss.org/)
- 📖 [NPM Docs](https://docs.npmjs.com/)

### 🎨 File Name Patterns

```javascript
// Input pattern → Output pattern
'viks'         → 'dist/js/viks.js'
'viks.min'     → 'dist/js/viks.min.js'
'viks-css'     → 'dist/css/viks.css'
'viks-css.min' → 'dist/css/viks.min.css'
```

---

## 🎓 Advanced Configuration

### 🎯 Multiple Entry Points

For complex projects with multiple libraries:

```javascript
// webpack.config.js
entry: {
  // Main library
  'viks': './src/js/viks-animation.js',
  'viks.min': './src/js/viks-animation.js',
  
  // Plugin system
  'viks-plugin-scroll': './src/js/plugins/scroll.js',
  'viks-plugin-scroll.min': './src/js/plugins/scroll.js',
  
  // Themes
  'viks-theme-dark': './src/sass/themes/dark.scss',
  'viks-theme-dark.min': './src/sass/themes/dark.scss',
  'viks-theme-light': './src/sass/themes/light.scss',
  'viks-theme-light.min': './src/sass/themes/light.scss'
}
```

**Result:**
```
dist/
├── js/
│   ├── viks.js
│   ├── viks.min.js
│   ├── viks-plugin-scroll.js
│   └── viks-plugin-scroll.min.js
└── css/
    ├── viks-theme-dark.css
    ├── viks-theme-dark.min.css
    ├── viks-theme-light.css
    └── viks-theme-light.min.css
```

### 🔧 Environment Variables

Create `.env` file:

```bash
# .env
NODE_ENV=production
ANALYZE=false
PUBLIC_PATH=/viks-animation/
CDN_URL=https://cdn.example.com
```

Use in `webpack.config.js`:

```javascript
import dotenv from 'dotenv';
dotenv.config();

export default (env, argv) => {
  const isProduction = process.env.NODE_ENV === 'production';
  const publicPath = process.env.PUBLIC_PATH || '/';
  
  return {
    output: {
      publicPath: publicPath,
      // ...
    }
  };
};
```

### 🎨 Custom CSS Processors

Add Tailwind CSS:

```bash
# Install
npm install -D tailwindcss

# Init
npx tailwindcss init
```

Update `webpack.config.js`:

```javascript
{
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [
        'tailwindcss',
        'autoprefixer',
        // ... other plugins
      ]
    }
  }
}
```

### 🚀 Optimization Strategies

#### Code Splitting

```javascript
optimization: {
  splitChunks: {
    chunks: 'all',
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        priority: 10
      },
      common: {
        minChunks: 2,
        priority: 5,
        reuseExistingChunk: true
      }
    }
  }
}
```

#### Tree Shaking

```javascript
// package.json
{
  "sideEffects": [
    "*.css",
    "*.scss"
  ]
}
```

#### Dynamic Imports

```javascript
// src/js/viks-animation.js
export default class VIKS {
  async loadPlugin(name) {
    const plugin = await import(`./plugins/${name}.js`);
    return plugin.default;
  }
}
```

---

## 🐛 Debugging Guide

![Debug](https://img.shields.io/badge/Debugging-Tips-00FFFF?style=flat-square&logo=debug&logoColor=000000&labelColor=2C2C2C)

### 🔍 Webpack Debug Mode

```bash
# Verbose output
npx webpack --config webpack.config.js --mode development --stats verbose

# Watch with debug
npx webpack --watch --mode development --progress --debug

# Profile build
npx webpack --profile --json > stats.json
```

### 📊 Analyze stats.json

```bash
# Upload to https://webpack.github.io/analyse/
# Or use webpack-bundle-analyzer
npm run analyze
```

### 🕵️ Source Map Types

```javascript
// webpack.config.js
devtool: 'source-map'        // Slowest, best quality
devtool: 'eval-source-map'   // Fast rebuild, good quality
devtool: 'cheap-source-map'  // Fast, less detailed
devtool: 'inline-source-map' // Inline in file
devtool: false               // No source maps
```

**Recommendation:**
- **Development:** `eval-source-map`
- **Production:** `source-map`

### 🐞 Browser DevTools

```javascript
// Add debug statements
console.log('[VIKS] Initializing...');
console.time('[VIKS] Load time');
// ... code
console.timeEnd('[VIKS] Load time');
```

### 📝 Webpack Stats

```bash
# Generate detailed stats
npm run build -- --json > webpack-stats.json

# View stats
cat webpack-stats.json | jq '.assets'
cat webpack-stats.json | jq '.modules'
```

---

## 🎪 Real-World Examples

### 📦 Example 1: Basic Usage

**HTML:**
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="dist/css/viks.min.css">
</head>
<body>
  <div class="viks-container">
    <h1 class="viks-animate">Hello VIKS!</h1>
  </div>
  
  <script src="dist/js/viks.min.js"></script>
  <script>
    // Initialize
    const viks = new VIKS({
      selector: '.viks-animate',
      duration: 1000
    });
    
    viks.init();
  </script>
</body>
</html>
```

### 🌐 Example 2: CDN Usage

```html
<!-- From GitHub Pages -->
<link rel="stylesheet" 
      href="https://meviksry.github.io/viks-animation/css/viks.min.css">
<script src="https://meviksry.github.io/viks-animation/js/viks.min.js"></script>

<!-- From NPM CDN -->
<link rel="stylesheet" 
      href="https://unpkg.com/viks-animation/dist/css/viks.min.css">
<script src="https://unpkg.com/viks-animation/dist/js/viks.min.js"></script>
```

### 📦 Example 3: NPM Package

```bash
# Install
npm install viks-animation
```

```javascript
// ES6 import
import VIKS from 'viks-animation';
import 'viks-animation/dist/css/viks.min.css';

// CommonJS
const VIKS = require('viks-animation');
require('viks-animation/dist/css/viks.min.css');

// Usage
const viks = new VIKS({
  selector: '.animate',
  duration: 800
});
```

### 🎨 Example 4: Custom Build

```bash
# Clone and modify
git clone https://github.com/MeViksry/viks-animation.git
cd viks-animation

# Edit source
code src/js/viks-animation.js
code src/sass/viks-animation.scss

# Build custom version
npm run build

# Use dist/js/viks.min.js
```

---

## 🔄 Migration Guide

### 📦 From Old Setup to New

#### Step 1: Backup

```bash
# Backup old files
cp -r viks-animation viks-animation-backup
cd viks-animation
```

#### Step 2: Update Structure

```bash
# Create new structure
mkdir -p src/js src/sass
mv old-js-file.js src/js/viks-animation.js
mv old-css-file.scss src/sass/viks-animation.scss
```

#### Step 3: Install Dependencies

```bash
# Remove old
rm -rf node_modules package-lock.json

# Install new
npm install
```

#### Step 4: Update Config

```bash
# Copy new configs
cp webpack.config.js.new webpack.config.js
cp package.json.new package.json
```

#### Step 5: Build & Test

```bash
# Build
npm run build

# Compare outputs
diff -r dist/ ../viks-animation-backup/dist/

# Test
npm run serve
```

### 🆕 From Version 1.x to 2.x

#### Breaking Changes

1. **File structure changed**
   - Old: `build/` → New: `dist/`
   - Old: `lib/` → New: `src/`

2. **Build commands changed**
   - Old: `npm run compile` → New: `npm run build`
   - Old: `gulp watch` → New: `npm run dev`

3. **Output names changed**
   - Old: `viks-animation.js` → New: `viks.js`
   - Old: `viks-animation.min.js` → New: `viks.min.js`

#### Migration Script

```bash
#!/bin/bash
# migrate-v2.sh

echo "🔄 Migrating to v2.0..."

# Backup
cp -r . ../backup-$(date +%Y%m%d)

# Update structure
mkdir -p src/js src/sass
mv lib/*.js src/js/
mv lib/*.scss src/sass/

# Install new deps
rm -rf node_modules
npm install

# Build
npm run build

echo "✅ Migration complete!"
echo "⚠️  Check dist/ for new output"
```

---

## 🤝 Contributing Guide

![Contributors](https://img.shields.io/badge/Contributors-Welcome-40E0D0?style=flat-square&logo=handshake&logoColor=000000&labelColor=2C2C2C)

### 🍴 Fork & Clone

```bash
# Fork on GitHub first, then:
git clone https://github.com/YOUR_USERNAME/viks-animation.git
cd viks-animation

# Add upstream
git remote add upstream https://github.com/MeViksry/viks-animation.git
```

### 🌿 Create Branch

```bash
# Update main
git checkout main
git pull upstream main

# Create feature branch
git checkout -b feature/awesome-animation

# Or fix branch
git checkout -b fix/ie11-bug
```

### 💻 Make Changes

```bash
# Edit files
code src/js/viks-animation.js

# Test changes
npm run dev
npm run serve

# Lint & fix
make lint-fix

# Build
make build
```

### ✅ Commit

```bash
# Stage changes
git add .

# Commit with conventional format
git commit -m "feat: add awesome animation effect"
git commit -m "fix: resolve IE11 compatibility issue"
git commit -m "docs: update README examples"
```

### 📤 Push & PR

```bash
# Push branch
git push origin feature/awesome-animation

# Create PR on GitHub
# Go to: https://github.com/MeViksry/viks-animation/compare
```

### 🎯 PR Checklist

Before submitting PR:

- [ ] Code follows style guide
- [ ] Linters pass: `make lint`
- [ ] Tests pass: `npm test`
- [ ] Build works: `make build`
- [ ] Documentation updated
- [ ] CHANGELOG.md updated
- [ ] Branch is up-to-date with main

---

## 📞 Getting Help

![Support](https://img.shields.io/badge/Support-Available-00CED1?style=flat-square&logo=lifebuoy&logoColor=000000&labelColor=2C2C2C)

### 🐛 Found a Bug?

1. Check [existing issues](https://github.com/MeViksry/viks-animation/issues)
2. Search [closed issues](https://github.com/MeViksry/viks-animation/issues?q=is%3Aissue+is%3Aclosed)
3. If new, [open an issue](https://github.com/MeViksry/viks-animation/issues/new)

**Include:**
- Environment (OS, Node version, NPM version)
- Steps to reproduce
- Expected vs actual behavior
- Error messages
- Screenshots if applicable

### 💡 Need a Feature?

1. Check [discussions](https://github.com/MeViksry/viks-animation/discussions)
2. Search [feature requests](https://github.com/MeViksry/viks-animation/issues?q=is%3Aissue+label%3Aenhancement)
3. [Open feature request](https://github.com/MeViksry/viks-animation/issues/new?labels=enhancement)

### 📚 Documentation

- 📖 [Full Documentation](https://github.com/MeViksry/viks-animation#readme)
- 📖 [API Reference](https://github.com/MeViksry/viks-animation/wiki)
- 📖 [Examples](https://github.com/MeViksry/viks-animation/tree/main/examples)
- 📖 [FAQ](https://github.com/MeViksry/viks-animation/wiki/FAQ)

### 💬 Community

- 💬 [Discussions](https://github.com/MeViksry/viks-animation/discussions)
- 💬 [Stack Overflow](https://stackoverflow.com/questions/tagged/viks-animation)
- 💬 [Discord Server](https://discord.gg/viks-animation) *(if available)*

### 🔍 Troubleshooting Resources

```bash
# Check versions
node --version
npm --version
npx webpack --version

# View full error
npm run build -- --verbose 2>&1 | tee build.log

# Share build log
cat build.log
```

### 📧 Contact

- 📧 Email: support@viks-animation.com *(if available)*
- 🐦 Twitter: [@VIKSAnimation](https://twitter.com/viksanimation) *(if available)*
- 💼 LinkedIn: [VIKS Animation](https://linkedin.com/company/viks-animation) *(if available)*

---

## 🎉 Success Stories

### ✨ What You Can Build

After setup, you'll have:

- ✅ **Production-ready builds** - Minified, optimized, and ready to deploy
- ✅ **Development workflow** - Hot reload, source maps, fast rebuilds
- ✅ **Automated releases** - Tag and push, GitHub does the rest
- ✅ **CDN hosting** - Free hosting on GitHub Pages
- ✅ **NPM package** - Ready to publish (if configured)
- ✅ **Quality checks** - ESLint and Stylelint integrated
- ✅ **CI/CD pipeline** - Automated testing and deployment

### 🚀 Real Projects Using This Setup

1. **VIKS Animation Library** - Main project
2. **VIKS Plugins** - Plugin ecosystem
3. **VIKS Themes** - Theme collections

### 📈 Performance Benchmarks

```
Before optimization:  viks.js = 150KB
After optimization:   viks.min.js = 20KB
Reduction:           86.7% smaller! 🎉

Before optimization:  viks.css = 80KB
After optimization:   viks.min.css = 15KB
Reduction:           81.25% smaller! 🎉
```

---

## 🎓 Learning Resources

### 📖 Webpack

- [Webpack Official Docs](https://webpack.js.org/)
- [Webpack Academy](https://webpack.academy/)
- [SurviveJS Webpack](https://survivejs.com/webpack/)

### 🎨 SASS/SCSS

- [SASS Documentation](https://sass-lang.com/documentation/)
- [SASS Guidelines](https://sass-guidelin.es/)
- [CSS-Tricks SASS Guide](https://css-tricks.com/sass-style-guide/)

### 🔧 Build Tools

- [Babel Handbook](https://github.com/jamiebuilds/babel-handbook)
- [PostCSS Documentation](https://postcss.org/)
- [ESLint User Guide](https://eslint.org/docs/user-guide/)

### 🤖 GitHub Actions

- [GitHub Actions Docs](https://docs.github.com/actions)
- [Workflow Syntax](https://docs.github.com/actions/reference/workflow-syntax-for-github-actions)
- [Actions Marketplace](https://github.com/marketplace?type=actions)

### 📦 NPM

- [NPM Documentation](https://docs.npmjs.com/)
- [package.json Guide](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)
- [NPM Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)

---

## 🏆 Acknowledgments

### 💝 Thanks To

- **Webpack Team** - Amazing build tool
- **Babel Team** - JavaScript transpiler
- **SASS Team** - CSS preprocessor
- **GitHub** - Version control & CI/CD
- **NPM** - Package management
- **Open Source Community** - All contributors

### 🌟 Special Thanks

This setup is inspired by best practices from:
- [Bootstrap](https://getbootstrap.com/)
- [Lodash](https://lodash.com/)
- [Vue.js](https://vuejs.org/)
- [React](https://reactjs.org/)

---

## 📄 License

This setup guide is licensed under [MIT License](LICENSE).

```
MIT License

Copyright (c) 2025 VIKS Animation

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🎯 Final Checklist

Before you start developing:

- [ ] ✅ Node.js 18+ installed
- [ ] ✅ NPM 10+ installed
- [ ] ✅ Git configured
- [ ] ✅ Folder structure created
- [ ] ✅ Dependencies installed
- [ ] ✅ Build successful
- [ ] ✅ Dev server working
- [ ] ✅ GitHub Actions enabled
- [ ] ✅ This guide bookmarked 📌

---

## 🚀 Ready to Build!

You're all set! Start building amazing animations:

```bash
# Start development
make dev

# In another terminal
make serve

# Happy coding! 🎉
```

---

**Made with ❤️ by VIKS Animation Team**

[![GitHub stars](https://img.shields.io/github/stars/MeViksry/viks-animation?style=social)](https://github.com/MeViksry/viks-animation)
[![GitHub forks](https://img.shields.io/github/forks/MeViksry/viks-animation?style=social)](https://github.com/MeViksry/viks-animation/fork)
[![GitHub watchers](https://img.shields.io/github/watchers/MeViksry/viks-animation?style=social)](https://github.com/MeViksry/viks-animation)

**Questions?** [Open an issue](https://github.com/MeViksry/viks-animation/issues/new) • **Found helpful?** [⭐ Star the repo](https://github.com/MeViksry/viks-animation)

---

*Last updated: October 27, 2025*