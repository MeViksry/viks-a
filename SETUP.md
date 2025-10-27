# 🚀 VIKS Animation - Complete Setup Guide

## 📁 Required File Structure

Create this exact folder structure:

```
viks-animation/
├── .github/
│   └── workflows/
│       ├── build-and-release.yml    # Main workflow
│       └── ci.yml                   # CI workflow
├── dist/
│   ├── css/
│   │   ├── viks.css
│   │   ├── viks.css.map
│   │   ├── viks.min.css
│   │   └── viks.min.css.map
│   └── js/
│       ├── viks-css.js
│       ├── viks-css.js.map
│       ├── viks-css.min.js
│       ├── viks-css.min.js.map
│       ├── viks.js
│       ├── viks.js.map
│       ├── viks.min.js
│       └── viks.min.js.map
├── node_modules/
├── src/
│   ├── js/
│   │   └── viks-animation.js        # Your JS file here
│   └── sass/
│       └── viks-animation.scss      # Your SCSS file here
├── .eslintrc.json                   # ESLint config
├── .gitignore                       # Git ignore
├── .stylelintrc.json                # Stylelint config
├── babel.config.js                  # Babel config
├── eslint.config.js
├── eslint.config.mjs
├── Makefile                         # Build automation
├── package-lock.json
├── package.json                     # NPM config
├── postcss.config.js                # PostCSS config
├── SETUP.md                         # Setup docs
├── stats.html
└── webpack.config.js                # Webpack config

```

## ⚡ Quick Setup (5 Minutes)

### 1. Clone or Initialize Repository

```bash
# If starting fresh
mkdir viks-animation
cd viks-animation
git init

# Or clone existing
git clone https://github.com/MeViksry/viks-animation.git
cd viks-animation
```

### 2. Create Folder Structure

```bash
mkdir -p src/js src/sass .github/workflows dist
```

### 3. Copy Your Files

```bash
# Copy your JavaScript
cp path/to/your/viks-animation.js src/js/

# Copy your SCSS
cp path/to/your/viks-animation.scss src/sass/
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Build

```bash
# Development build
npm run build:dev

# Production build
npm run build
```

### 6. Verify Output

```bash
# Check if files exist
ls -la dist/js/
ls -la dist/css/

# Expected output:
# - viks.js
# - viks.min.js
# - viks.js.map
# - viks.min.js.map
# - viks.css
# - viks.min.css
# - viks.css.map
# - viks.min.css.map
```

## 🛠️ Using Makefile (Recommended)

The Makefile provides easy commands:

```bash
# See all available commands
make help

# Install dependencies
make install

# Start development mode
make dev

# Build production
make build

# Clean and rebuild
make clean build

# Run linters
make lint

# Fix linting issues
make lint-fix

# Verify build
make verify

# Check file sizes
make size

# Full pipeline (clean + install + lint + build + verify)
make all

# Quick rebuild
make quick
```

## 📦 NPM Scripts

All available NPM commands:

```bash
# Development
npm run dev              # Watch mode
npm run serve            # Dev server at localhost:9000

# Building
npm run build            # Production build
npm run build:dev        # Development build
npm run clean            # Remove dist/

# Linting
npm run lint:js          # Lint JavaScript
npm run lint:scss        # Lint SCSS

# Testing
npm test                 # Run tests

# Analysis
npm run analyze          # Bundle size analysis
```

## 🤖 GitHub Actions Setup

### Step 1: Enable GitHub Actions

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Actions** → **General**
4. Under "Actions permissions", select **Allow all actions**
5. Click **Save**

### Step 2: Add Secrets (Optional but Recommended)

For NPM publishing:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Name: `NPM_TOKEN`
4. Value: Your NPM automation token
   - Get from: https://www.npmjs.com/settings/YOUR_USERNAME/tokens
   - Type: **Automation**
5. Click **Add secret**

### Step 3: Push to GitHub

```bash
git add .
git commit -m "Initial setup with build system"
git push origin main
```

The workflow will automatically run!

### Step 4: Enable GitHub Pages (for CDN)

1. Go to **Settings** → **Pages**
2. Source: **GitHub Actions**
3. Click **Save**

Your files will be available at:
```
https://YOUR_USERNAME.github.io/viks-animation/js/viks.min.js
https://YOUR_USERNAME.github.io/viks-animation/css/viks.min.css
```

## 🏷️ Creating Releases

### Automatic Release

```bash
# Create a version tag
git tag v1.0.0
git push origin v1.0.0
```

GitHub Actions will automatically:
- ✅ Build all assets
- ✅ Create GitHub Release
- ✅ Upload files (JS, CSS, maps)
- ✅ Publish to NPM (if token configured)
- ✅ Generate changelog

### Manual Release

```bash
# Bump version
npm version patch    # 1.0.0 → 1.0.1
npm version minor    # 1.0.0 → 1.1.0
npm version major    # 1.0.0 → 2.0.0

# Push with tags
git push origin main --tags
```

Or using Makefile:

```bash
make release VERSION=1.0.0
```

## 🔧 Troubleshooting

### Issue: npm install fails

```bash
# Solution 1: Clear cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install

# Solution 2: Use legacy peer deps
npm install --legacy-peer-deps
```

### Issue: Build fails

```bash
# Clear everything
make clean
rm -rf node_modules
npm install
npm run build
```

### Issue: GitHub Actions fails

1. Check workflow file syntax at: https://www.yamllint.com/
2. Verify Node.js version compatibility
3. Check logs in **Actions** tab
4. Ensure all files are committed

### Issue: Source maps not loading

```bash
# Rebuild with source maps
npm run clean
npm run build
```

Make sure your web server serves `.map` files correctly.

### Issue: ESLint errors

```bash
# Auto-fix
npm run lint:js -- --fix

# Or with Makefile
make lint-fix
```

## 📊 Monitoring

### Check Build on GitHub

1. Go to **Actions** tab
2. See all workflow runs
3. Click any run to see details
4. Download artifacts if needed

### Check Bundle Size

```bash
# Generate visual report
npm run analyze

# Or with Makefile
make analyze
```

Opens `stats.html` in your browser.

### Check File Sizes

```bash
# Using Makefile
make size

# Manual
du -h dist/js/* dist/css/*
```

## 🎯 Best Practices

### Before Every Commit

```bash
# Run this
make lint
make build
make verify

# Or all in one
make all
```

### Before Creating Release

```bash
# 1. Update version in package.json
# 2. Run full pipeline
make all

# 3. Test locally
npm run serve

# 4. Create tag
git tag v1.0.0

# 5. Push
git push origin main --tags
```

### Development Workflow

```bash
# Start watching
make dev

# In another terminal, start server
make serve

# Edit files in src/
# Browser auto-reloads!
```

## 📝 Customization

### Change Output Paths

Edit `webpack.config.js`:

```javascript
output: {
  path: path.resolve(__dirname, 'dist'), // Change this
  // ...
}
```

### Change File Names

Edit `webpack.config.js`:

```javascript
entry: {
  viks: {
    import: './src/js/viks-animation.js',
    filename: 'js/your-name.min.js' // Change this
  },
  // ...
}
```

### Add More SCSS Files

Edit `webpack.config.js`:

```javascript
entry: {
  // ... existing entries
  'your-styles': {
    import: './src/sass/your-file.scss',
    filename: 'js/temp.js'
  }
}
```

## 🚀 Production Checklist

Before deploying:

- [ ] Run `make all` successfully
- [ ] All tests pass
- [ ] Linters show no errors
- [ ] File sizes are acceptable
- [ ] Source maps generated
- [ ] Documentation updated
- [ ] Version bumped
- [ ] Changelog updated
- [ ] Git tag created

## 📞 Getting Help

### Check Logs

```bash
# Build logs
npm run build -- --verbose

# Webpack logs
npm run build -- --progress
```

### Common Commands

```bash
# Reset everything
git clean -fdx
npm install
npm run build

# Update dependencies
npm update
npm outdated
```

### Resources

- 📖 [Webpack Docs](https://webpack.js.org/)
- 📖 [Babel Docs](https://babeljs.io/)
- 📖 [SASS Docs](https://sass-lang.com/)
- 📖 [GitHub Actions Docs](https://docs.github.com/actions)

## ✅ Verification Commands

Run these to verify everything works:

```bash
# 1. Dependencies
npm ls

# 2. Lint
make lint

# 3. Build
make build

# 4. Verify files
make verify

# 5. Check sizes
make size

# 6. Test locally
make serve
```

## 🎉 Success!

If all commands run without errors, you're ready to go!

```bash
# Push to GitHub
git add .
git commit -m "Setup complete"
git push origin main

# Create first release
git tag v1.0.0
git push origin v1.0.0
```

---

**Need help?** Open an issue: https://github.com/MeViksry/viks-animation/issues
