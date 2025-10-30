<div align="center">

  <h1>VIKS ANIMATION JS</h1>

[![npm](https://img.shields.io/badge/npm-CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)](https://webpack.js.org/)
[![Sass](https://img.shields.io/badge/Sass-CC6699.svg?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)

<p>
    <a href="https://github.com/MeViksry/viks-animation/blob/main/LICENSE" target="_blank">
      <img src="https://img.shields.io/badge/LICENSE-MIT-black?style=flat-square" alt="License Badge">
    </a>
    <a href="https://www.npmjs.com/package/viks-animation" target="_blank">
      <img src="https://img.shields.io/badge/DOWNLOAD-1K%2FMONTH-aqua?style=flat-square" alt="Downloads Badge">
    </a>
</p>

  <h3>✨ Modern scroll-triggered animation library with inline configuration support & zero dependencies ✨</h3>
</div>

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## 🌟 What is VIKS Animation?

VIKS Animation is a cutting-edge, lightweight JavaScript animation library designed for modern web development. Create stunning scroll-triggered animations with ease using our intuitive inline syntax or traditional attribute-based configuration. Built with vanilla JavaScript and optimized SCSS, VIKS delivers high-performance animations without compromising on features or flexibility.

### 🎯 Why Choose VIKS?

- **🚀 Modern Inline Syntax** - Configure animations in a single attribute: `data-viks="fade-up duration-1000 delay-500 easing-ease-out-back"`
- **🔄 Backward Compatible** - Traditional separate attributes still work: `data-viks="fade-up" data-viks-duration="1000"`
- **⚡ Zero Dependencies** - Pure vanilla JavaScript, no jQuery or other libraries needed
- **📦 Lightweight** - Only ~12KB gzipped, won't slow down your site
- **🎨 Rich Animation Library** - 30+ pre-built animations (fade, zoom, slide, flip)
- **🎭 21 Easing Functions** - From linear to elastic, cubic-bezier mastery
- **📱 Responsive & Smart** - Auto-detects devices, disable on mobile/tablet/phone
- **🛠️ Developer Friendly** - TypeScript support, comprehensive API, event callbacks
- **🔧 Auto-Refresh** - MutationObserver support for dynamic content

<div align="center">
  <table>
    <tr>
      <td align="center">
        <h3>Core Features</h3>
        <ul style="text-align: left;">
          <li>Scroll-Triggered Animations</li>
          <li>Inline Parameter Configuration</li>
          <li>21 Easing Functions</li>
          <li>Device-Specific Controls</li>
          <li>Dynamic Content Support</li>
          <li>Custom Event System</li>
          <li>Anchor Placement (9 positions)</li>
          <li>Mirror Mode (scroll up/down)</li>
        </ul>
      </td>
      <td align="center">
        <h3>🛠️ Technical Highlights</h3>
        <ul style="text-align: left;">
          <li>Zero Dependencies</li>
          <li>~12KB gzipped</li>
          <li>MutationObserver Support</li>
          <li>Throttle & Debounce Built-in</li>
          <li>TypeScript Ready</li>
          <li>Tree-Shakeable</li>
          <li>SSR Compatible</li>
          <li>WCAG Compliant</li>
        </ul>
      </td>
      <td align="center">
        <h3>Animation Types</h3>
        <ul style="text-align: left;">
          <li>Fade (9 variants)</li>
          <li>Zoom (10 variants)</li>
          <li>Slide (4 directions)</li>
          <li>Flip (4 directions)</li>
          <li>Custom Animations</li>
          <li>Stagger Support</li>
          <li>Parallax Effects</li>
          <li>Infinite Possibilities</li>
        </ul>
      </td>
    </tr>
  </table>
</div>

<div align="center">
  <p>
    <a href="mailto:kingvikvik25@gmail.com">
      <img src="https://img.shields.io/badge/Email-aqua?style=for-the-badge&logo=gmail&logoColor=black" alt="Email">
    </a>
    <a href="https://www.linkedin.com/in/MeViksry">
      <img src="https://img.shields.io/badge/LinkedIn-black?style=for-the-badge&logo=linkedin&logoColor=aqua" alt="LinkedIn">
    </a>
    <a href="https://www.instagram.com/meviksry">
      <img src="https://img.shields.io/badge/Instagram-aqua?style=for-the-badge&logo=instagram&logoColor=black" alt="Instagram">
    </a>
    <a href="https://www.tiktok.com/@viksry">
      <img src="https://img.shields.io/badge/TikTok-black?style=for-the-badge&logo=tiktok&logoColor=aqua" alt="TikTok">
    </a>
    <a href="https://www.threads.net/@meviksry">
      <img src="https://img.shields.io/badge/Threads-aqua?style=for-the-badge&logo=threads&logoColor=black" alt="Threads">
    </a>
    <a href="https://www.facebook.com/share/19aKzAtBeZ/">
      <img src="https://img.shields.io/badge/Facebook-black?style=for-the-badge&logo=facebook&logoColor=aqua" alt="Facebook">
    </a>
  </p>
</div>

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## 📑 Table of Contents

- [Available Animations](#-available-animations)
- [Quick Start](#-quick-start)
- [Installation](#-installation)
- [Basic Usage](#-basic-usage)
- [Inline Configuration (NEW)](#-inline-configuration-new)
- [Traditional Configuration](#-traditional-configuration)
- [Advanced Usage](#-advanced-usage)
- [Configuration Options](#️-configuration-options)
- [Animation Reference](#-animation-reference)
- [Easing Functions](#-easing-functions)
- [Anchor Placement](#-anchor-placement)
- [Events & Callbacks](#-events--callbacks)
- [API Reference](#-api-reference)
- [Performance Optimization](#-performance-optimization)
- [Examples & Demos](#-examples--demos)
- [Troubleshooting](#-troubleshooting)
- [Browser Support](#-browser-support)
- [Contributing](#-contributing)
- [License](#-license)

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

<h2 align="center">AVAILABLE ANIMATIONS</h2>

<div align="center">
  <p>
    <a href="#fade-animations">
      <img src="https://img.shields.io/badge/Fade-9_Variants-aqua?style=flat-square&logoColor=black" alt="Fade">
    </a>
    <a href="#flip-animations">
      <img src="https://img.shields.io/badge/Flip-4_Directions-black?style=flat-square&logoColor=aqua" alt="Flip">
    </a>
    <a href="#slide-animations">
      <img src="https://img.shields.io/badge/Slide-4_Directions-aqua?style=flat-square&logoColor=black" alt="Slide">
    </a>
    <a href="#zoom-animations">
      <img src="https://img.shields.io/badge/Zoom-10_Variants-black?style=flat-square&logoColor=aqua" alt="Zoom">
    </a>
  </p>
  
  <h3>30+ Pre-built Animations Ready to Use</h3>
</div>

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

<h2 align="center">⚡ QUICK START</h2>

<div align="center">
  <p>
    <a href="#npm-installation">
      <img src="https://img.shields.io/badge/NPM-black?style=for-the-badge&logo=npm&logoColor=aqua" alt="NPM">
    </a>
    <a href="#yarn-installation">
      <img src="https://img.shields.io/badge/Yarn-aqua?style=for-the-badge&logo=yarn&logoColor=black" alt="Yarn">
    </a>
    <a href="#cdn-installation">
      <img src="https://img.shields.io/badge/CDN-black?style=for-the-badge&logo=jsdelivr&logoColor=aqua" alt="CDN">
    </a>
    <a href="#manual-installation">
      <img src="https://img.shields.io/badge/Manual-aqua?style=for-the-badge&logoColor=black" alt="Manual">
    </a>
  </p>
</div>

Get started in under 30 seconds with our CDN:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>VIKS Animation - Scroll Animation Made Easy</title>
    
    <!-- VIKS Animation CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/viks-animation@latest/dist/css/viks.min.css">
  </head>
  <body>
    <!-- Your animated content -->
    <h1 data-viks="fade-up">Hello World! 👋</h1>
    <p data-viks="fade-left duration-1000 delay-500">VIKS makes animations effortless!</p>
    
    <!-- VIKS Animation JS -->
    <script src="https://cdn.jsdelivr.net/npm/viks-animation@latest/dist/js/viks.min.js"></script>
    <script>
      // Initialize VIKS
      VIKS.init();
    </script>
  </body>
</html>
```

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## 📦 Installation

### CDN Installation (Fastest)

Perfect for quick prototypes and static sites:

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/viks-animation@latest/dist/css/viks.min.css">

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/viks-animation@latest/dist/js/viks.min.js"></script>
```

**Alternative CDNs:**
```html
<!-- unpkg -->
<link rel="stylesheet" href="https://unpkg.com/viks-animation@latest/dist/css/viks.min.css">
<script src="https://unpkg.com/viks-animation@latest/dist/js/viks.min.js"></script>

<!-- cdnjs -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/viks-animation/2.3.1/viks.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/viks-animation/2.3.1/viks.min.js"></script>
```

### NPM Installation

For modern JavaScript applications:

```bash
npm install viks-animation --save
```

```javascript
// Import CSS
import 'viks-animation/dist/css/viks.min.css';

// Import JavaScript
import VIKS from 'viks-animation';

// Initialize
VIKS.init({
  duration: 1000,
  easing: 'ease-out-back'
});
```

### Yarn Installation

```bash
yarn add viks-animation
```

### PNPM Installation

```bash
pnpm add viks-animation
```

### Manual Installation

1. Download the [latest release](https://github.com/MeViksry/viks-animation/releases)
2. Extract files to your project
3. Include in your HTML:

```html
<!-- CSS -->
<link rel="stylesheet" href="path/to/viks.min.css">

<!-- JavaScript -->
<script src="path/to/viks.min.js"></script>
<script>
  VIKS.init();
</script>
```

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## 🚀 Basic Usage

### Simple Animation

Add `data-viks` attribute to any element:

```html
<div data-viks="fade-up">
  This element fades up when scrolled into view
</div>
```

That's it! VIKS will automatically:
- ✅ Detect the element
- ✅ Apply animation when scrolled into viewport
- ✅ Use default timing and easing
- ✅ Work on all modern browsers

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## ✨ Inline Configuration (NEW)

### The Modern Way

Configure animations in a single attribute using our intuitive inline syntax:

```html
<!-- All-in-one configuration -->
<div data-viks="fade-up duration-1000 delay-500 easing-ease-out-back once-true">
  Fully configured animation in one line
</div>
```

### Available Inline Parameters

| Parameter | Syntax | Example | Description |
|-----------|--------|---------|-------------|
| **Duration** | `duration-{ms}` | `duration-1000` | Animation duration in milliseconds |
| **Delay** | `delay-{ms}` | `delay-500` | Delay before animation starts |
| **Offset** | `offset-{px}` | `offset-200` | Trigger offset from viewport |
| **Easing** | `easing-{name}` | `easing-ease-out-back` | Timing function |
| **Once** | `once-{boolean}` | `once-true` | Animate only once |
| **Mirror** | `mirror-{boolean}` | `mirror-true` | Animate on scroll up/down |
| **Anchor** | `anchor-{selector}` | `anchor-#hero` | Custom trigger element |
| **Placement** | `anchor-placement-{pos}` | `anchor-placement-top-center` | Trigger position |
| **ID** | `id-{name}` | `id-hero` | Custom identifier for events |

### Real-World Examples

```html
<!-- Hero Section -->
<h1 data-viks="fade-up duration-1200 delay-0 easing-ease-out-back">
  Welcome to My Site
</h1>

<!-- Call to Action Button -->
<button data-viks="zoom-in duration-800 delay-400 easing-ease-out once-true">
  Get Started
</button>

<!-- Feature Card with Mirror -->
<div data-viks="fade-left duration-1000 mirror-true offset-100">
  Feature content that animates in and out
</div>

<!-- Complex Configuration -->
<div data-viks="slide-up duration-1500 delay-200 easing-ease-in-out-back anchor-placement-center-center once-false mirror-true id-feature1">
  Advanced animation setup
</div>
```

### Mix Inline & Attributes

You can mix inline and traditional attributes:

```html
<div data-viks="fade-up duration-1000" 
     data-viks-offset="200"
     data-viks-easing="ease-out-back">
  Hybrid configuration
</div>
```

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## 🔧 Traditional Configuration

### Separate Attributes (Still Supported)

The classic way still works perfectly:

```html
<div data-viks="fade-up"
     data-viks-duration="1000"
     data-viks-delay="500"
     data-viks-easing="ease-out-back"
     data-viks-offset="200"
     data-viks-once="true"
     data-viks-mirror="false">
  Traditional configuration
</div>
```

### Available Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `data-viks` | string | - | Animation name (required) |
| `data-viks-duration` | number | 400 | Duration in milliseconds |
| `data-viks-delay` | number | 0 | Delay in milliseconds |
| `data-viks-offset` | number | 120 | Trigger offset in pixels |
| `data-viks-easing` | string | 'ease' | CSS easing function |
| `data-viks-once` | boolean | false | Animate only once |
| `data-viks-mirror` | boolean | false | Mirror on scroll up |
| `data-viks-anchor` | string | null | CSS selector for anchor |
| `data-viks-anchor-placement` | string | 'top-bottom' | Anchor position |
| `data-viks-id` | string | null | Custom identifier |

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## 🎓 Advanced Usage

### Staggered Animations

Create beautiful cascading effects:

```html
<div class="card-grid">
  <div data-viks="fade-up delay-0">Card 1</div>
  <div data-viks="fade-up delay-100">Card 2</div>
  <div data-viks="fade-up delay-200">Card 3</div>
  <div data-viks="fade-up delay-300">Card 4</div>
  <div data-viks="fade-up delay-400">Card 5</div>
  <div data-viks="fade-up delay-500">Card 6</div>
</div>
```

### Custom Anchor Element

Trigger animation based on different element:

```html
<!-- Trigger element -->
<div id="custom-trigger" style="height: 100vh;">
  Scroll past this...
</div>

<!-- Animated element -->
<div data-viks="fade-up anchor-#custom-trigger">
  ...to trigger this animation
</div>
```

### Anchor Placement Positions

Control precisely when animations trigger:

```html
<!-- Triggers when element top hits viewport bottom -->
<div data-viks="fade-up anchor-placement-top-bottom">Element 1</div>

<!-- Triggers when element center hits viewport center -->
<div data-viks="fade-up anchor-placement-center-center">Element 2</div>

<!-- Triggers when element bottom hits viewport top -->
<div data-viks="fade-up anchor-placement-bottom-top">Element 3</div>
```

**All 9 Anchor Positions:**
```
┌─────────────────┐
│  top-bottom     │ ← Element top hits viewport bottom
│  top-center     │ ← Element top hits viewport center
│  top-top        │ ← Element top hits viewport top
│─────────────────│
│  center-bottom  │ ← Element center hits viewport bottom
│  center-center  │ ← Element center hits viewport center
│  center-top     │ ← Element center hits viewport top
│─────────────────│
│  bottom-bottom  │ ← Element bottom hits viewport bottom
│  bottom-center  │ ← Element bottom hits viewport center
│  bottom-top     │ ← Element bottom hits viewport top
└─────────────────┘
```

### Mirror Mode (Bidirectional)

Animate both on scroll down AND scroll up:

```html
<div data-viks="fade-up mirror-true">
  Fades in when scrolling down,
  fades out when scrolling up
</div>
```

### Once Mode

Animation plays only once, never repeats:

```html
<div data-viks="fade-up once-true">
  This animates once and stays visible
</div>
```

### Custom Event Tracking

Track specific elements with custom IDs:

```html
<div data-viks="fade-up id-hero-title">
  Hero Title
</div>

<script>
  document.addEventListener('viks:in:hero-title', (event) => {
    console.log('Hero title appeared!');
    // Track with analytics
    gtag('event', 'animation_view', {
      element: 'hero-title'
    });
  });
</script>
```

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## ⚙️ Configuration Options

### Global Configuration

Configure default values for all animations:

```javascript
VIKS.init({
  // Animation Settings
  duration: 400,              // Default duration (ms)
  delay: 0,                   // Default delay (ms)
  easing: 'ease',             // Default easing function
  offset: 120,                // Trigger offset from viewport (px)
  
  // Behavior
  once: false,                // Animate only once
  mirror: false,              // Mirror animation on scroll up
  anchorPlacement: 'top-bottom', // Default anchor position
  
  // Device Control
  disable: false,             // Disable animations
                              // Options: false | true | 'mobile' | 'phone' | 'tablet' | function
  
  // Advanced
  startEvent: 'DOMContentLoaded', // When to initialize
  animatedClassName: 'viks-animate', // Class added when animated
  initClassName: 'viks-init',        // Class added on init
  useClassNames: false,              // Use animation name as class
  
  // Performance
  throttleDelay: 99,          // Scroll event throttle (ms)
  debounceDelay: 50,          // Resize event debounce (ms)
  disableMutationObserver: false // Disable dynamic content detection
});
```

### Configuration Priority

Settings are applied in this order (highest to lowest):

1. **Inline parameters** - `data-viks="fade-up duration-1000"`
2. **Separate attributes** - `data-viks-duration="1000"`
3. **Global config** - `VIKS.init({ duration: 1000 })`
4. **Default values** - Built-in defaults

```html
<!-- Example: duration will be 2000ms -->
<div data-viks="fade-up duration-2000" data-viks-duration="1500">
  Inline wins: 2000ms
</div>

<!-- Example: duration will be 1500ms -->
<div data-viks="fade-up" data-viks-duration="1500">
  Attribute wins: 1500ms
</div>

<!-- Example: duration will be 1000ms (from global config) -->
<div data-viks="fade-up">
  Global config wins: 1000ms
</div>
```

### Device-Specific Control

```javascript
// Disable on all mobile devices
VIKS.init({
  disable: 'mobile'
});

// Disable on phones only
VIKS.init({
  disable: 'phone'
});

// Disable on tablets only
VIKS.init({
  disable: 'tablet'
});

// Custom disable logic
VIKS.init({
  disable: function() {
    // Disable on small screens
    return window.innerWidth < 768;
  }
});

// Disable animations completely
VIKS.init({
  disable: true
});
```

### Performance Optimization

```javascript
// Optimize for slower devices
VIKS.init({
  throttleDelay: 150,  // Increase for better performance
  debounceDelay: 100,  // Increase for better performance
  once: true           // Animations don't repeat
});

// Disable MutationObserver for static content
VIKS.init({
  disableMutationObserver: true
});
```

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## 🎭 Animation Reference

### Fade Animations

Smooth opacity transitions with directional movement.

| Animation | Effect | Use Case |
|-----------|--------|----------|
| `fade` | Simple fade in | Text, images |
| `fade-up` | Fade from bottom | Headings, cards |
| `fade-down` | Fade from top | Dropdowns, tooltips |
| `fade-left` | Fade from right | Side content |
| `fade-right` | Fade from left | Navigation items |
| `fade-up-right` | Diagonal from bottom-left | Creative layouts |
| `fade-up-left` | Diagonal from bottom-right | Gallery items |
| `fade-down-right` | Diagonal from top-left | Hero elements |
| `fade-down-left` | Diagonal from top-right | Feature cards |

```html
<div data-viks="fade-up">Fade Up Animation</div>
<div data-viks="fade-down">Fade Down Animation</div>
<div data-viks="fade-left">Fade Left Animation</div>
<div data-viks="fade-right">Fade Right Animation</div>
```

### Zoom Animations

Scale-based transitions with optional directional movement.

| Animation | Effect | Use Case |
|-----------|--------|----------|
| `zoom-in` | Scale from small | Buttons, icons |
| `zoom-in-up` | Scale from small + bottom | Feature highlights |
| `zoom-in-down` | Scale from small + top | Modals |
| `zoom-in-left` | Scale from small + right | Image galleries |
| `zoom-in-right` | Scale from small + left | Product cards |
| `zoom-out` | Scale from large | Backgrounds |
| `zoom-out-up` | Scale from large + bottom | Hero sections |
| `zoom-out-down` | Scale from large + top | Overlays |
| `zoom-out-left` | Scale from large + right | Slideouts |
| `zoom-out-right` | Scale from large + left | Sidebars |

```html
<button data-viks="zoom-in">Call to Action</button>
<img data-viks="zoom-in-up" src="product.jpg" alt="Product">
```

### Slide Animations

Full-distance slide transitions without opacity change.

| Animation | Effect | Use Case |
|-----------|--------|----------|
| `slide-up` | Slide from bottom edge | Modals, sheets |
| `slide-down` | Slide from top edge | Notifications |
| `slide-left` | Slide from right edge | Side panels |
| `slide-right` | Slide from left edge | Menus |

```html
<div data-viks="slide-up">Slide Up Panel</div>
<nav data-viks="slide-left">Navigation Menu</nav>
```

### Flip Animations

3D rotation-based transitions (requires perspective).

| Animation | Effect | Use Case |
|-----------|--------|----------|
| `flip-up` | Rotate on X-axis from bottom | Cards, tiles |
| `flip-down` | Rotate on X-axis from top | Dropdowns |
| `flip-left` | Rotate on Y-axis from right | Gallery images |
| `flip-right` | Rotate on Y-axis from left | Product reveals |

```html
<div data-viks="flip-up">Flip Card</div>
<div data-viks="flip-left">3D Rotate Effect</div>
```

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## 🎨 Easing Functions

Choose from 21 built-in easing functions for perfect timing:

### Standard Easing
- `linear` - Constant speed throughout
- `ease` - Default, slow start and end
- `ease-in` - Slow start
- `ease-out` - Slow end
- `ease-in-out` - Slow start and end (more pronounced)

### Back Easing (Overshoot)
- `ease-in-back` - Pulls back before moving
- `ease-out-back` - Overshoots then settles ⭐ Recommended
- `ease-in-out-back` - Pulls back and overshoots

### Sine Easing (Smooth)
- `ease-in-sine` - Gentle acceleration
- `ease-out-sine` - Gentle deceleration
- `ease-in-out-sine` - Smooth throughout

### Quad Easing
- `ease-in-quad` - Quadratic acceleration
- `ease-out-quad` - Quadratic deceleration
- `ease-in-out-quad` - Quadratic both ways

### Cubic Easing
- `ease-in-cubic` - Cubic acceleration
- `ease-out-cubic` - Cubic deceleration ⭐ Popular
- `ease-in-out-cubic` - Cubic both ways

### Quart Easing
- `ease-in-quart` - Strong acceleration
- `ease-out-quart` - Strong deceleration
- `ease-in-out-quart` - Strong both ways

### Usage Examples

```html
<!-- Bouncy button -->
<button data-viks="zoom-in easing-ease-out-back">
  Click Me
</button>

<!-- Smooth fade -->
<div data-viks="fade-up easing-ease-out-sine">
  Gentle content
</div>

<!-- Dramatic entrance -->
<h1 data-viks="fade-down easing-ease-out-quart">
  Big Title
</h1>
```

### Custom Cubic Bezier

Want more control? Use any CSS cubic-bezier:

```html
<div data-viks="fade-up" 
     style="transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);">
  Custom easing
</div>
```

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## 📍 Anchor Placement

Control exactly when animations trigger with 9 anchor positions:

### Visual Guide

```
Viewport               Element
┌────────────┐        ┌────────────┐
│            │        │ top        │ ← top-bottom, top-center, top-top
│            │        │            │
│   CENTER   │   ←→   │ center     │ ← center-bottom, center-center, center-top
│            │        │            │
│            │        │ bottom     │ ← bottom-bottom, bottom-center, bottom-top
└────────────┘        └────────────┘
```

### All Positions

| Position | Trigger Point |
|----------|---------------|
| `top-bottom` | Element top enters viewport bottom (default) |
| `top-center` | Element top reaches viewport center |
| `top-top` | Element top reaches viewport top |
| `center-bottom` | Element center enters viewport bottom |
| `center-center` | Element center reaches viewport center |
| `center-top` | Element center reaches viewport top |
| `bottom-bottom` | Element bottom enters viewport bottom |
| `bottom-center` | Element bottom reaches viewport center |
| `bottom-top` | Element bottom reaches viewport top |

### Usage Examples

```html
<!-- Early trigger (element barely visible) -->
<div data-viks="fade-up anchor-placement-bottom-bottom">
  Triggers early
</div>

<!-- Middle trigger (element half visible) -->
<div data-viks="fade-up anchor-placement-center-center">
  Triggers at center
</div>

<!-- Late trigger (element fully visible) -->
<div data-viks="fade-up anchor-placement-top-top">
  Triggers late
</div>
```

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## 🎯 Events & Callbacks

### Global Events

Listen to all animation events:

```javascript
// Element enters viewport (animation starts)
document.addEventListener('viks:in', (event) => {
  console.log('Animated in:', event.detail);
  const { element, animation, options } = event.detail;
});

// Element leaves viewport (animation reverses)
document.addEventListener('viks:out', (event) => {
  console.log('Animated out:', event.detail);
});
```

### Element-Specific Events

Track individual elements with custom IDs:

```html
<div data-viks="fade-up id-hero">Hero Section</div>
<div data-viks="zoom-in id-cta">Call to Action</div>
```

```javascript
// Listen to specific elements
document.addEventListener('viks:in:hero', (event) => {
  console.log('Hero appeared!');
  // Start video, trigger confetti, etc.
});

document.addEventListener('viks:out:hero', (event) => {
  console.log('Hero disappeared!');
  // Pause video, stop animations, etc.
});

document.addEventListener('viks:in:cta', (event) => {
  console.log('CTA visible!');
  // Track conversion funnel
  analytics.track('cta_viewed');
});
```

### Event Properties

```javascript
document.addEventListener('viks:in', (event) => {
  const {
    element,      // DOM element (HTMLElement)
    animation,    // Animation name (string)
    options       // Configuration object
  } = event.detail;
  
  console.log('Element:', element);
  console.log('Animation:', animation);
  console.log('Options:', options);
});
```

### Real-World Use Cases

```javascript
// Video autoplay when visible
document.addEventListener('viks:in:video-section', (e) => {
  const video = e.detail.element.querySelector('video');
  video.play();
});

document.addEventListener('viks:out:video-section', (e) => {
  const video = e.detail.element.querySelector('video');
  video.pause();
});

// Analytics tracking
document.addEventListener('viks:in', (e) => {
  gtag('event', 'scroll_animation', {
    element_id: e.detail.options.id,
    animation_type: e.detail.animation
  });
});

// Progress indicator
let visibleElements = 0;
const totalElements = document.querySelectorAll('[data-viks]').length;

document.addEventListener('viks:in', () => {
  visibleElements++;
  updateProgress(visibleElements / totalElements);
});
```

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## 🔧 API Reference

### Initialization

```javascript
// Initialize with defaults
VIKS.init();

// Initialize with custom config
VIKS.init({
  duration: 1000,
  easing: 'ease-out-back',
  offset: 200,
  once: true
});
```

### Methods

#### `VIKS.init(config)`

Initialize the library with optional configuration.

**Parameters:**
- `config` (object, optional) - Configuration object

**Returns:** Array of animated elements

```javascript
const elements = VIKS.init({
  duration: 800,
  offset: 150
});

console.log(`Initialized ${elements.length} elements`);
```

#### `VIKS.refresh(initialize)`

Soft refresh - recalculates positions for existing elements.

**Parameters:**
- `initialize` (boolean, optional) - Whether to initialize if not already done

**Returns:** Array of animated elements

```javascript
// After changing element positions
VIKS.refresh();

// Force initialization if needed
VIKS.refresh(true);
```

#### `VIKS.refreshHard()`

Hard refresh - re-queries DOM for all elements with `data-viks`.

**Returns:** Array of animated elements

```javascript
// After adding new elements to DOM
document.getElementById('container').innerHTML += `
  <div data-viks="fade-up">New content</div>
`;

// Re-scan DOM
VIKS.refreshHard();
```

### When to Refresh

| Scenario | Method | Reason |
|----------|--------|--------|
| Window resized | Automatic | Built-in debounced listener |
| Element position changed | `refresh()` | Recalculate trigger points |
| New elements added to DOM | `refreshHard()` | Re-scan entire document |
| Route change (SPA) | `refreshHard()` | New page content |
| Accordion/Tab opened | `refresh()` | Layout shift |

### Dynamic Content Example

```javascript
// React component
useEffect(() => {
  VIKS.refreshHard();
}, [items]); // Refresh when items change

// Vue component
watch(() => items.value, () => {
  VIKS.refreshHard();
});

// Vanilla JS
function loadMoreContent() {
  fetch('/api/posts')
    .then(res => res.json())
    .then(posts => {
      posts.forEach(post => {
        container.innerHTML += `
          <article data-viks="fade-up delay-${posts.indexOf(post) * 100}">
            ${post.content}
          </article>
        `;
      });
      
      // Refresh to detect new elements
      VIKS.refreshHard();
    });
}
```

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## ⚡ Performance Optimization

### Built-in Optimizations

VIKS is optimized out of the box:

- ✅ **Throttled scroll events** (99ms default)
- ✅ **Debounced resize events** (50ms default)
- ✅ **Cached element queries** (no repeated DOM access)
- ✅ **CSS transforms** (GPU-accelerated animations)
- ✅ **Efficient MutationObserver** (smart DOM monitoring)
- ✅ **Minimal reflows** (batched reads/writes)

### Bundle Size

| File | Uncompressed | Minified | Gzipped |
|------|-------------|----------|---------|
| `viks.js` | 45 KB | 25 KB | 12 KB |
| `viks.css` | 15 KB | 8 KB | 3 KB |
| **Total** | **60 KB** | **33 KB** | **15 KB** |

### Performance Tips

#### 1. Use `once: true` for One-Time Animations

```javascript
VIKS.init({
  once: true // Animations don't repeat
});
```

#### 2. Increase Throttle/Debounce for Slower Devices

```javascript
VIKS.init({
  throttleDelay: 150,  // Reduce scroll event frequency
  debounceDelay: 100   // Reduce resize event frequency
});
```

#### 3. Disable MutationObserver for Static Content

```javascript
VIKS.init({
  disableMutationObserver: true // No dynamic content? Save resources
});
```

#### 4. Disable on Low-End Devices

```javascript
VIKS.init({
  disable: function() {
    // Disable on low-end devices
    return navigator.hardwareConcurrency < 4;
  }
});
```

#### 5. Use Shorter Animations on Mobile

```javascript
// Detect mobile
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

VIKS.init({
  duration: isMobile ? 400 : 800,
  offset: isMobile ? 50 : 120
});
```

#### 6. Limit Animated Elements

```html
<!-- Good: Animate key elements -->
<section data-viks="fade-up">
  <h2>Section Title</h2>
  <p>Content here...</p>
</section>

<!-- Avoid: Animating every small element -->
<section data-viks="fade-up">
  <h2 data-viks="fade-up">Title</h2>
  <p data-viks="fade-up">Paragraph 1</p>
  <p data-viks="fade-up">Paragraph 2</p>
  <span data-viks="fade-up">Small text</span>
</section>
```

### Lighthouse Performance Impact

VIKS is designed for minimal performance impact:

- **First Contentful Paint (FCP):** No impact (CSS loads quickly)
- **Largest Contentful Paint (LCP):** No impact (animations trigger after paint)
- **Time to Interactive (TTI):** Minimal (~5-10ms initialization)
- **Total Blocking Time (TBT):** Minimal (throttled/debounced events)
- **Cumulative Layout Shift (CLS):** Zero (no layout changes)

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## 🎓 Examples & Demos

### Hero Section

```html
<section class="hero">
  <h1 data-viks="fade-up duration-1200 delay-0">
    Welcome to VIKS Animation
  </h1>
  <p data-viks="fade-up duration-1000 delay-200">
    Beautiful scroll animations made simple
  </p>
  <button data-viks="zoom-in duration-800 delay-400 easing-ease-out-back">
    Get Started
  </button>
</section>
```

### Feature Cards with Stagger

```html
<div class="features">
  <div class="card" data-viks="fade-up delay-0">
    <h3>⚡ Fast</h3>
    <p>Optimized for performance</p>
  </div>
  <div class="card" data-viks="fade-up delay-100">
    <h3>🎨 Beautiful</h3>
    <p>30+ pre-built animations</p>
  </div>
  <div class="card" data-viks="fade-up delay-200">
    <h3>🔧 Easy</h3>
    <p>Simple inline configuration</p>
  </div>
  <div class="card" data-viks="fade-up delay-300">
    <h3>📦 Lightweight</h3>
    <p>Only 15KB gzipped</p>
  </div>
</div>
```

### Image Gallery

```html
<div class="gallery">
  <img src="img1.jpg" data-viks="zoom-in duration-800 delay-0" alt="Image 1">
  <img src="img2.jpg" data-viks="zoom-in duration-800 delay-100" alt="Image 2">
  <img src="img3.jpg" data-viks="zoom-in duration-800 delay-200" alt="Image 3">
  <img src="img4.jpg" data-viks="zoom-in duration-800 delay-300" alt="Image 4">
</div>
```

### Testimonials with Mirror

```html
<div class="testimonial" data-viks="fade-left mirror-true">
  <blockquote>"VIKS Animation transformed our website!"</blockquote>
  <cite>— Happy Developer</cite>
</div>
```

### Parallax Effect

```html
<!-- Background layer -->
<div class="bg-layer" data-viks="fade duration-2000 offset-300">
  Background content
</div>

<!-- Foreground layer -->
<div class="fg-layer" data-viks="fade-up duration-1000 offset-100">
  Foreground content
</div>
```

### Pricing Cards

```html
<div class="pricing">
  <div class="plan" data-viks="flip-up delay-0">
    <h3>Basic</h3>
    <p class="price">$9/mo</p>
  </div>
  <div class="plan featured" data-viks="flip-up delay-100 duration-1000 easing-ease-out-back">
    <span class="badge">Popular</span>
    <h3>Pro</h3>
    <p class="price">$29/mo</p>
  </div>
  <div class="plan" data-viks="flip-up delay-200">
    <h3>Enterprise</h3>
    <p class="price">Custom</p>
  </div>
</div>
```

### Video Section with Events

```html
<section data-viks="fade-up id-video-section">
  <video id="promo-video" src="video.mp4" muted loop></video>
</section>

<script>
  document.addEventListener('viks:in:video-section', () => {
    document.getElementById('promo-video').play();
  });
  
  document.addEventListener('viks:out:video-section', () => {
    document.getElementById('promo-video').pause();
  });
</script>
```

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## 🐛 Troubleshooting

### Animations Not Triggering

**Problem:** Elements with `data-viks` aren't animating.

**Solutions:**

1. **Check initialization:**
```javascript
// Make sure VIKS is initialized
VIKS.init();
```

2. **Check CSS is loaded:**
```html
<!-- CSS must be loaded before animations work -->
<link rel="stylesheet" href="viks.min.css">
```

3. **Check element is in DOM:**
```javascript
// Elements must exist when VIKS initializes
document.addEventListener('DOMContentLoaded', () => {
  VIKS.init();
});
```

4. **Check for conflicts:**
```javascript
// Look for JavaScript errors in console
console.log('VIKS loaded:', typeof VIKS !== 'undefined');
```

5. **Try hard refresh:**
```javascript
VIKS.refreshHard();
```

### Animations Too Fast/Slow

**Problem:** Animations don't match desired speed.

**Solutions:**

```javascript
// Adjust global duration
VIKS.init({
  duration: 1000 // milliseconds
});

// Or per-element
<div data-viks="fade-up duration-2000">Slower</div>
<div data-viks="fade-up duration-500">Faster</div>
```

### Dynamic Content Not Animating

**Problem:** Content added after page load doesn't animate.

**Solutions:**

```javascript
// Method 1: Use MutationObserver (automatic)
VIKS.init({
  disableMutationObserver: false // default
});

// Method 2: Manual refresh after adding content
function addContent() {
  container.innerHTML += '<div data-viks="fade-up">New</div>';
  VIKS.refreshHard(); // Re-scan DOM
}
```

### Animations Janky on Mobile

**Problem:** Animations stutter or lag on mobile devices.

**Solutions:**

```javascript
// Solution 1: Increase throttle delays
VIKS.init({
  throttleDelay: 150,
  debounceDelay: 100
});

// Solution 2: Shorter durations on mobile
const isMobile = window.innerWidth < 768;
VIKS.init({
  duration: isMobile ? 400 : 800
});

// Solution 3: Disable on low-end devices
VIKS.init({
  disable: function() {
    return navigator.hardwareConcurrency < 4;
  }
});

// Solution 4: Disable entirely on mobile
VIKS.init({
  disable: 'mobile'
});
```

### Element Animates Too Early/Late

**Problem:** Animation triggers at wrong scroll position.

**Solutions:**

```javascript
// Adjust global offset
VIKS.init({
  offset: 200 // pixels from viewport
});

// Or per-element
<div data-viks="fade-up offset-300">Later trigger</div>
<div data-viks="fade-up offset-50">Earlier trigger</div>

// Or use anchor placement
<div data-viks="fade-up anchor-placement-center-center">
  Center trigger
</div>
```

### Conflicts with Other Libraries

**Problem:** VIKS conflicts with other animation libraries.

**Solutions:**

```javascript
// Use different class names
VIKS.init({
  animatedClassName: 'custom-animate',
  initClassName: 'custom-init'
});

// Or disable other libraries' scroll detection
```

### TypeScript Errors

**Problem:** TypeScript doesn't recognize VIKS types.

**Solutions:**

```typescript
// Install type definitions (if available)
npm install --save-dev @types/viks-animation

// Or declare module
declare module 'viks-animation' {
  export function init(config?: any): void;
  export function refresh(initialize?: boolean): void;
  export function refreshHard(): void;
}
```

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## 🌐 Browser Support

<table>
  <tr>
    <td align="center">
      <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />
      <br>Chrome
    </td>
    <td align="center">
      <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />
      <br>Firefox
    </td>
    <td align="center">
      <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />
      <br>Safari
    </td>
    <td align="center">
      <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />
      <br>Edge
    </td>
    <td align="center">
      <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />
      <br>Opera
    </td>
  </tr>
  <tr>
    <td align="center">Latest ✔</td>
    <td align="center">Latest ✔</td>
    <td align="center">Latest ✔</td>
    <td align="center">Latest ✔</td>
    <td align="center">Latest ✔</td>
  </tr>
  <tr>
    <td align="center">Last 2 versions</td>
    <td align="center">Last 2 versions</td>
    <td align="center">Last 2 versions</td>
    <td align="center">Last 2 versions</td>
    <td align="center">Last 2 versions</td>
  </tr>
</table>

### Mobile Support

- ✅ iOS Safari 12+
- ✅ Chrome for Android
- ✅ Samsung Internet
- ✅ UC Browser
- ✅ Opera Mini (limited)

### Legacy Browser Support

- ⚠️ IE11 - Detected but not actively supported
- ⚠️ iOS Safari 11 - Partial support

**Note:** Modern browsers recommended for best experience.

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Ways to Contribute

- 🐛 **Report bugs** - Open an issue with details
- 💡 **Suggest features** - Share your ideas
- 📝 **Improve docs** - Fix typos, add examples
- 🔧 **Submit PRs** - Add features or fix bugs
- ⭐ **Star the repo** - Show your support!

### Development Setup

```bash
# Clone the repository
git clone https://github.com/MeViksry/viks-animation.git
cd viks-animation

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

### Coding Guidelines

- Follow existing code style
- Add comments for complex logic
- Update documentation for new features
- Test on multiple browsers
- Keep bundle size small

### Submit a Pull Request

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## 📄 License

MIT License

Copyright (c) 2025 VIKRI AHPAD TANTOWI

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

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

## 🌐 Links & Resources

<div align="center">
  <p>
    <a href="https://viksanimation.my.id">
      <img src="https://img.shields.io/badge/Website-Visit_Demo-aqua?style=for-the-badge" alt="Website">
    </a>
    <a href="https://viksanimation.my.id/docs">
      <img src="https://img.shields.io/badge/Docs-Read_More-black?style=for-the-badge" alt="Documentation">
    </a>
    <a href="https://github.com/MeViksry/viks-animation">
      <img src="https://img.shields.io/badge/GitHub-Source_Code-aqua?style=for-the-badge&logo=github" alt="GitHub">
    </a>
    <a href="https://www.npmjs.com/package/viks-animation">
      <img src="https://img.shields.io/badge/NPM-Package-black?style=for-the-badge&logo=npm" alt="NPM">
    </a>
  </p>
</div>

- 🌐 **Official Website:** [viksanimation.my.id](https://viksanimation.my.id)
- 📖 **Documentation:** [viksanimation.my.id/docs](https://viksanimation.my.id/docs)
- 🐙 **GitHub:** [github.com/MeViksry/viks-animation](https://github.com/MeViksry/viks-animation)
- 📦 **NPM:** [npmjs.com/package/viks-animation](https://www.npmjs.com/package/viks-animation)
- 💬 **Discord:** [Join our community](https://discord.gg/viks-animation)
- 🐦 **Twitter:** [@viksry](https://twitter.com/viksry)

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

<div align="center">
  <h2>☕ Support My Work</h2>

  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=Buy%20Me%20A%20Coffee&fontSize=60&fontAlignY=35&animation=twinkling&fontColor=gradient" />

  <p>
    <a href="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=aqua&center=true&width=435&lines=Support+VIKS+Development;Buy+Me+A+Coffee!+☕;Thank+You+For+Your+Support!">
      <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=aqua&center=true&width=435&lines=Support+VIKS+Development;Buy+Me+A+Coffee!+☕;Thank+You+For+Your+Support!" alt="Typing SVG">
    </a>
  </p>

  <p>If VIKS Animation helped your project, consider supporting its development!</p>

  <a href="https://ko-fi.com/viksry">
    <img src="https://storage.ko-fi.com/cdn/kofi2.png?v=3" width="200" alt="Ko-fi">
  </a>

  <p>Your support helps maintain and improve VIKS Animation! ✨</p>
  
  <p>
    <img src="https://img.shields.io/badge/Supporters-Coming_Soon-aqua?style=flat-square" alt="Supporters">
    <img src="https://img.shields.io/badge/Coffee_Goal-100-black?style=flat-square" alt="Goal">
  </p>
</div>

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

<div align="center">
  <h2>⭐ Star History</h2>
  
  <a href="https://star-history.com/#MeViksry/viks-animation&Date">
    <img src="https://api.star-history.com/svg?repos=MeViksry/viks-animation&type=Date" alt="Star History Chart">
  </a>
</div>

<hr style="height: 3px; background: linear-gradient(90deg, rgba(0,0,0,0), aqua, rgba(0,0,0,0));">

<div align="center">
  <h3>Made with ❤️ by <a href="https://github.com/MeViksry">MeViksry</a></h3>
  <p>
    <img src="https://komarev.com/ghpvc/?username=viks-animation&label=Repository+views&color=aqua&style=flat-square" alt="Repository views">
  </p>
  
</div>

---

<p>

<div align="center">
    <a href="https://viksanimation.my.id">
      <img src="https://img.shields.io/badge/Website-Visit_Demo-aqua?style=for-the-badge" alt="Github">
    </a>
</div>