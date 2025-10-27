# Viks Animation v1.0

<div align="center">

![Viks Animation Banner](https://img.shields.io/badge/Viks_Animation-Lightweight_&_Powerful-667eea?style=for-the-badge&logo=javascript)
![Version](https://img.shields.io/badge/Version-1.0.0-green?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)
![Size](https://img.shields.io/badge/Size-8KB_minified-orange?style=for-the-badge)
![Made with Love](https://img.shields.io/badge/Made_with-💙_by_MeViksry-red?style=for-the-badge)

**Lightweight JavaScript library for smooth and engaging scroll animations**

[Live Demo](https://meviksry.github.io/viks-animation) • [Documentation](#documentation) • [Examples](#examples) • [Get Started](#installation)

</div>

---

## ✨ What's New in v1.0

- **30+ Built-in Animations** - Fade, Zoom, Slide, and Flip effects ready to use
- **Inline Configuration** - Configure animations directly in HTML attributes
- **Smart Performance** - Optimized with throttle and debounce for 60fps
- **Zero Dependencies** - Pure vanilla JavaScript, no jQuery or other libraries
- **Tiny Footprint** - Only 8KB minified and ~3KB gzipped
- **Mirror Mode** - Animate elements in and out on scroll
- **Custom Events** - Hook into animation lifecycle with custom events
- **Mobile Optimized** - Smooth performance on all devices

---

## Table of Contents

- [Why Viks Animation?](#why-viks-animation)
- [Features](#features)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Animation Types](#animation-types)
- [Configuration](#configuration)
- [Advanced Usage](#advanced-usage)
- [API Reference](#api-reference)
- [Browser Support](#browser-support)
- [Performance](#performance)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## Why Viks Animation?

### The Problem
Most scroll animation libraries are either:
- 🐌 Too heavy (50KB+)
- 🔗 Require dependencies (jQuery, etc.)
- 🎪 Too complex for simple use cases
- 📱 Poor mobile performance

### The Solution: Viks Animation

| Feature | Viks Animation | AOS | ScrollReveal | Animate.css |
|:--------|:--------------:|:---:|:------------:|:-----------:|
| **File Size** | 8KB | 13KB | 17KB | 80KB |
| **Dependencies** | None | None | None | None |
| **Animations** | 30+ | 40+ | Custom | 80+ |
| **Performance** | ⚡⚡⚡ | ⚡⚡ | ⚡⚡ | ⚡ |
| **Configuration** | Inline/Global | Inline/Global | JS Only | CSS Only |
| **Mirror Mode** | ✅ | ✅ | ❌ | ❌ |
| **Custom Events** | ✅ | ✅ | ✅ | ❌ |
| **Mobile First** | ✅ | ✅ | ⚠️ | ⚠️ |

---

## Features

### 🎨 Rich Animation Library

```html
<!-- 30+ pre-built animations -->
<div data-viks="fade-up">Fade from bottom</div>
<div data-viks="zoom-in">Scale up on scroll</div>
<div data-viks="slide-left">Slide from right</div>
<div data-viks="flip-down">Flip animation</div>
```

### ⚙️ Flexible Configuration

```html
<!-- Inline configuration -->
<div data-viks="fade-up duration-1000 delay-500 ease-out once">
  Configure everything in HTML
</div>

<!-- Or use separate attributes -->
<div data-viks="zoom-in"
     data-viks-duration="800"
     data-viks-delay="200"
     data-viks-easing="ease-in-out">
  Alternative syntax
</div>
```

### ⚡ Smart Performance

| Optimization | Benefit |
|:------------|:--------|
| **Throttling** | Reduces scroll event frequency |
| **Debouncing** | Optimizes resize calculations |
| **RequestAnimationFrame** | Smooth 60fps animations |
| **Intersection Observer** | Native browser API (coming soon) |
| **Lazy Evaluation** | Only calculates visible elements |

### 🎯 Advanced Features

- **Mirror Mode**: Animate in when scrolling down, animate out when scrolling up
- **Anchor Elements**: Trigger animations based on other elements' positions
- **Custom Offsets**: Fine-tune when animations trigger
- **Anchor Placement**: 9 different trigger positions
- **Custom Events**: `viks:in`, `viks:out`, and custom ID events
- **Mutation Observer**: Automatically detects new elements

---

## Installation

### Via CDN (Recommended for Quick Start)

```html
<!DOCTYPE html>
<html>
<head>
    <!-- Add CSS -->
    <link rel="stylesheet" href="https://unpkg.com/viks-animation@latest/dist/viks-animation.min.css">
</head>
<body>
    <!-- Your content with animations -->
    <div data-viks="fade-up">Hello World</div>
    
    <!-- Add JavaScript before closing body -->
    <script src="https://unpkg.com/viks-animation@latest/dist/viks-animation.min.js"></script>
    <script>
        viks.init();
    </script>
</body>
</html>
```

### Via NPM

```bash
npm install viks-animation
```

```javascript
// Import library
import viks from 'viks-animation';
import 'viks-animation/dist/viks-animation.css';

// Initialize
viks.init({
    duration: 800,
    easing: 'ease-out',
    once: true
});
```

### Via Yarn

```bash
yarn add viks-animation
```

### Manual Installation

1. Download the [latest release](https://github.com/MeViksry/viks-animation/releases)
2. Extract files to your project
3. Include CSS and JS files:

```html
<link rel="stylesheet" href="path/to/viks-animation.min.css">
<script src="path/to/viks-animation.min.js"></script>
```

---

## Quick Start

### 1. Basic Setup (30 seconds)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Viks Animation Demo</title>
    
    <!-- Viks Animation CSS -->
    <link rel="stylesheet" href="https://unpkg.com/viks-animation/dist/viks-animation.min.css">
    
    <style>
        body { font-family: Arial; padding: 100px 20px; }
        .box { padding: 50px; margin: 20px 0; background: #667eea; color: white; }
    </style>
</head>
<body>
    <!-- Add data-viks attribute to animate elements -->
    <h1 data-viks="fade-down">Welcome to Viks Animation</h1>
    
    <div class="box" data-viks="fade-up">
        This box fades up on scroll
    </div>
    
    <div class="box" data-viks="zoom-in delay-200">
        This box zooms in with delay
    </div>
    
    <div class="box" data-viks="slide-right duration-1000">
        This box slides from left
    </div>
    
    <!-- Viks Animation JS -->
    <script src="https://unpkg.com/viks-animation/dist/viks-animation.min.js"></script>
    <script>
        // Initialize with default settings
        viks.init();
    </script>
</body>
</html>
```

### 2. Add Your First Animation

```html
<!-- Simple fade animation -->
<div data-viks="fade-up">
    Content fades up on scroll
</div>
```

### 3. Customize It

```html
<!-- With custom timing -->
<div data-viks="fade-up duration-1000 delay-500">
    Takes 1 second, waits 0.5 seconds
</div>

<!-- With easing -->
<div data-viks="zoom-in ease-out duration-800">
    Smooth zoom with ease-out
</div>

<!-- Animate only once -->
<div data-viks="slide-left once">
    Animates once, stays visible
</div>
```

### 4. Configure Globally

```javascript
viks.init({
    // Animation duration in milliseconds
    duration: 600,
    
    // Delay before animation starts
    delay: 0,
    
    // Timing function
    easing: 'ease',
    
    // Offset from viewport
    offset: 120,
    
    // Animate only once
    once: true,
    
    // Animate out when scrolling past
    mirror: false,
    
    // Disable on specific devices
    disable: false // or 'mobile', 'phone', 'tablet'
});
```

---

## Animation Types

### 🌊 Fade Animations

Smooth opacity transitions with directional movement.

| Animation | Direction | HTML | Preview |
|:----------|:----------|:-----|:--------|
| `fade` | In place | `<div data-viks="fade">` | Fades in |
| `fade-up` | ↑ From bottom | `<div data-viks="fade-up">` | Fades up |
| `fade-down` | ↓ From top | `<div data-viks="fade-down">` | Fades down |
| `fade-left` | ← From right | `<div data-viks="fade-left">` | Fades left |
| `fade-right` | → From left | `<div data-viks="fade-right">` | Fades right |
| `fade-up-left` | ↖ Diagonal | `<div data-viks="fade-up-left">` | Fades diagonal |
| `fade-up-right` | ↗ Diagonal | `<div data-viks="fade-up-right">` | Fades diagonal |
| `fade-down-left` | ↙ Diagonal | `<div data-viks="fade-down-left">` | Fades diagonal |
| `fade-down-right` | ↘ Diagonal | `<div data-viks="fade-down-right">` | Fades diagonal |

**Example:**
```html
<h1 data-viks="fade-down duration-1000">Page Title</h1>
<p data-viks="fade-up delay-200">Subtitle appears after</p>
```

### 🔍 Zoom Animations

Scale-based animations with optional movement.

| Animation | Effect | HTML | Preview |
|:----------|:-------|:-----|:--------|
| `zoom-in` | Scale from small | `<div data-viks="zoom-in">` | Grows |
| `zoom-in-up` | Zoom + move up | `<div data-viks="zoom-in-up">` | Grows upward |
| `zoom-in-down` | Zoom + move down | `<div data-viks="zoom-in-down">` | Grows downward |
| `zoom-in-left` | Zoom + move left | `<div data-viks="zoom-in-left">` | Grows leftward |
| `zoom-in-right` | Zoom + move right | `<div data-viks="zoom-in-right">` | Grows rightward |
| `zoom-out` | Scale from large | `<div data-viks="zoom-out">` | Shrinks |
| `zoom-out-up` | Zoom out + up | `<div data-viks="zoom-out-up">` | Shrinks upward |
| `zoom-out-down` | Zoom out + down | `<div data-viks="zoom-out-down">` | Shrinks downward |
| `zoom-out-left` | Zoom out + left | `<div data-viks="zoom-out-left">` | Shrinks leftward |
| `zoom-out-right` | Zoom out + right | `<div data-viks="zoom-out-right">` | Shrinks rightward |

**Example:**
```html
<div class="card" data-viks="zoom-in">
    <img src="image.jpg" alt="Card">
    <h3>Card Title</h3>
</div>
```

### 📐 Slide Animations

Full-width/height sliding transitions.

| Animation | Direction | HTML | Preview |
|:----------|:----------|:-----|:--------|
| `slide-up` | ↑ From bottom | `<div data-viks="slide-up">` | Slides up |
| `slide-down` | ↓ From top | `<div data-viks="slide-down">` | Slides down |
| `slide-left` | ← From right | `<div data-viks="slide-left">` | Slides left |
| `slide-right` | → From left | `<div data-viks="slide-right">` | Slides right |

**Example:**
```html
<div class="sidebar" data-viks="slide-right duration-800">
    Navigation menu
</div>
```

### 🔄 Flip Animations

3D rotation effects with perspective.

| Animation | Axis | HTML | Preview |
|:----------|:-----|:-----|:--------|
| `flip-left` | Y-axis (left) | `<div data-viks="flip-left">` | Flips from right |
| `flip-right` | Y-axis (right) | `<div data-viks="flip-right">` | Flips from left |
| `flip-up` | X-axis (up) | `<div data-viks="flip-up">` | Flips from bottom |
| `flip-down` | X-axis (down) | `<div data-viks="flip-down">` | Flips from top |

**Example:**
```html
<div class="feature" data-viks="flip-up duration-1000">
    Feature card with flip animation
</div>
```

---

## Configuration

### Global Configuration

Set default options for all animations:

```javascript
viks.init({
    // Core Settings
    duration: 600,           // Animation duration (ms)
    delay: 0,                // Animation delay (ms)
    easing: 'ease',          // Timing function
    
    // Trigger Settings
    offset: 120,             // Offset from viewport (px)
    anchorPlacement: 'top-bottom', // Trigger position
    
    // Behavior
    once: false,             // Animate only once
    mirror: false,           // Animate out on scroll
    
    // Device Control
    disable: false,          // Disable: false, 'mobile', 'phone', 'tablet', function
    
    // Performance
    throttleDelay: 99,       // Throttle delay for scroll (ms)
    debounceDelay: 50,       // Debounce delay for resize (ms)
    
    // Advanced
    startEvent: 'DOMContentLoaded', // Initialization event
    disableMutationObserver: false, // Disable auto-detection
    useClassNames: false,    // Use animation names as classes
    animatedClassName: 'viks-animate', // Class when animated
    initClassName: 'viks-init' // Class on init
});
```

### Inline Configuration

Override global settings per element:

#### Compact Syntax (Recommended)
```html
<!-- All options in data-viks attribute -->
<div data-viks="fade-up duration-1000 delay-500 ease-out once mirror">
    Compact inline configuration
</div>
```

#### Separate Attributes
```html
<!-- Individual data attributes -->
<div data-viks="zoom-in"
     data-viks-duration="800"
     data-viks-delay="200"
     data-viks-easing="ease-in-out"
     data-viks-offset="150"
     data-viks-once="true"
     data-viks-mirror="false">
    Detailed configuration
</div>
```

### Configuration Options Reference

| Option | Type | Default | Description | Example |
|:-------|:-----|:--------|:------------|:--------|
| `duration-*` | number | 400 | Animation duration in ms | `duration-1000` |
| `delay-*` | number | 0 | Delay before animation in ms | `delay-500` |
| `offset-*` | number | 120 | Trigger offset in pixels | `offset-200` |
| `easing` | string | ease | CSS timing function | `ease-in-out` |
| `once` | boolean | false | Animate only once | `once` |
| `mirror` | boolean | false | Animate in/out | `mirror` |
| `anchor-*` | selector | - | Anchor element | `anchor-#header` |
| `anchor-placement` | string | top-bottom | Trigger position | `center-center` |
| `id-*` | string | - | Custom event ID | `id-hero` |

### Easing Functions

Pre-built timing functions for natural motion:

```javascript
// Linear
linear

// Basic
ease, ease-in, ease-out, ease-in-out

// Back
ease-in-back, ease-out-back, ease-in-out-back

// Sine
ease-in-sine, ease-out-sine, ease-in-out-sine

// Quad
ease-in-quad, ease-out-quad, ease-in-out-quad

// Cubic
ease-in-cubic, ease-out-cubic, ease-in-out-cubic

// Quart
ease-in-quart, ease-out-quart, ease-in-out-quart
```

**Visual Guide:**
```html
<div data-viks="fade-up ease-in">Slow start, fast end</div>
<div data-viks="fade-up ease-out">Fast start, slow end</div>
<div data-viks="fade-up ease-in-out">Slow start and end</div>
<div data-viks="fade-up ease-in-back">Anticipation effect</div>
```

### Anchor Placement

Control when animations trigger relative to viewport:

```
┌─────────────────┐
│   Viewport Top  │ ← top-top, center-top, bottom-top
├─────────────────┤
│  Viewport Center│ ← top-center, center-center, bottom-center
├─────────────────┤
│ Viewport Bottom │ ← top-bottom, center-bottom, bottom-bottom
└─────────────────┘

Element positions: top, center, bottom
Viewport positions: top, center, bottom
Format: [element-position]-[viewport-position]
```

**Examples:**
```html
<!-- Trigger when element top hits viewport bottom (default) -->
<div data-viks="fade-up" data-viks-anchor-placement="top-bottom">

<!-- Trigger when element center hits viewport center -->
<div data-viks="zoom-in" data-viks-anchor-placement="center-center">

<!-- Trigger when element bottom hits viewport top -->
<div data-viks="slide-up" data-viks-anchor-placement="bottom-top">
```

---

## Advanced Usage

### Staggered Animations

Create sequential animations with delays:

```html
<div class="list">
    <div data-viks="fade-up">Item 1</div>
    <div data-viks="fade-up delay-100">Item 2</div>
    <div data-viks="fade-up delay-200">Item 3</div>
    <div data-viks="fade-up delay-300">Item 4</div>
    <div data-viks="fade-up delay-400">Item 5</div>
</div>
```

### Mirror Mode

Animate elements in and out:

```html
<!-- Animates in when scrolling down, out when scrolling up -->
<div data-viks="fade-up mirror">
    This element animates both ways
</div>

<div data-viks="zoom-in mirror duration-800">
    Zoom in and out on scroll
</div>
```

### Anchor Elements

Trigger animations based on other elements:

```html
<!-- Header that triggers other animations -->
<header id="main-header">
    <h1>My Website</h1>
</header>

<!-- These animate when header position changes -->
<div data-viks="fade-up anchor-#main-header">
    Triggered by header
</div>

<div data-viks="slide-left anchor-#main-header anchor-placement-top-center">
    Custom anchor placement
</div>
```

### Custom Events

Hook into animation lifecycle:

```javascript
// Global events
document.addEventListener('viks:in', function(event) {
    console.log('Element animated in:', event.detail);
});

document.addEventListener('viks:out', function(event) {
    console.log('Element animated out:', event.detail);
});

// Custom ID events
// HTML: <div data-viks="fade-up id-hero">
document.addEventListener('viks:in:hero', function(event) {
    console.log('Hero section animated in!');
    // Do something special
});

document.addEventListener('viks:out:hero', function(event) {
    console.log('Hero section animated out!');
});
```

### Dynamic Content

Handle dynamically added elements:

```javascript
// Add new content
const newElement = document.createElement('div');
newElement.setAttribute('data-viks', 'fade-up');
newElement.textContent = 'New content';
document.body.appendChild(newElement);

// Refresh to detect new elements
viks.refreshHard();

// Or use Mutation Observer (enabled by default)
viks.init({
    disableMutationObserver: false // Automatically detects new elements
});
```

### Conditional Animations

Disable animations based on conditions:

```javascript
// Disable on mobile devices
viks.init({
    disable: 'mobile'
});

// Disable on phones only
viks.init({
    disable: 'phone'
});

// Disable on tablets only
viks.init({
    disable: 'tablet'
});

// Custom disable function
viks.init({
    disable: function() {
        return window.innerWidth < 768; // Disable on small screens
    }
});
```

---

## API Reference

### Methods

#### `viks.init(options)`

Initialize Viks Animation with optional configuration.

```javascript
viks.init({
    duration: 800,
    once: true,
    offset: 100
});
```

**Parameters:**
- `options` (Object) - Configuration object (optional)

**Returns:** Array of animated elements

---

#### `viks.refresh()`

Recalculate element positions. Use after layout changes.

```javascript
// After changing layout
document.getElementById('sidebar').style.display = 'block';

// Recalculate positions
viks.refresh();
```

**Returns:** undefined

---

#### `viks.refreshHard()`

Re-initialize all elements. Use when adding new animated elements.

```javascript
// Add new element
const newDiv = document.createElement('div');
newDiv.setAttribute('data-viks', 'fade-up');
document.body.appendChild(newDiv);

// Re-scan and initialize
viks.refreshHard();
```

**Returns:** undefined

---

### Events

#### `viks:in`

Fired when an element animates into view.

```javascript
document.addEventListener('viks:in', function(event) {
    const element = event.detail;
    console.log('Animated in:', element);
});
```

---

#### `viks:out`

Fired when an element animates out (mirror mode only).

```javascript
document.addEventListener('viks:out', function(event) {
    const element = event.detail;
    console.log('Animated out:', element);
});
```

---

#### Custom ID Events

Use `id-*` attribute for element-specific events.

```html
<div data-viks="fade-up id-hero">Hero Section</div>
<div data-viks="zoom-in id-features">Features</div>
```

```javascript
// Hero section events
document.addEventListener('viks:in:hero', () => {
    console.log('Hero appeared!');
});

// Features section events
document.addEventListener('viks:in:features', () => {
    console.log('Features appeared!');
});
```

---

## Browser Support

Viks Animation works on all modern browsers:

| Browser | Version | Status | Notes |
|:--------|:--------|:-------|:------|
| ![Chrome](https://img.shields.io/badge/Chrome-60+-green?logo=googlechrome) | 60+ | ✅ Full Support | Recommended |
| ![Firefox](https://img.shields.io/badge/Firefox-55+-green?logo=firefoxbrowser) | 55+ | ✅ Full Support | Recommended |
| ![Safari](https://img.shields.io/badge/Safari-11+-green?logo=safari) | 11+ | ✅ Full Support | iOS 11+ |
| ![Edge](https://img.shields.io/badge/Edge-79+-green?logo=microsoftedge) | 79+ | ✅ Full Support | Chromium-based |
| ![Opera](https://img.shields.io/badge/Opera-47+-green?logo=opera) | 47+ | ✅ Full Support | - |
| ![IE](https://img.shields.io/badge/IE-11-orange?logo=internetexplorer) | 11 | ⚠️ Limited | With polyfills |

### Mobile Browsers

| Browser | Version | Status |
|:--------|:--------|:-------|
| iOS Safari | 11+ | ✅ Full Support |
| Android Chrome | 60+ | ✅ Full Support |
| Samsung Internet | 8+ | ✅ Full Support |

### Feature Detection

```javascript
// Check if browser supports Viks Animation
if (typeof viks !== 'undefined') {
    viks.init();
} else {
    console.warn('Viks Animation not supported');
}
```

### Polyfills for IE11

```html
<!-- Add polyfills for IE11 support -->
<script src="https://cdn.polyfill.io/v3/polyfill.min.js?features=Promise,Object.assign,Array.from"></script>
<script src="path/to/viks-animation.min.js"></script>
```

---

## Performance

### Bundle Size

```
Source Files:
├── viks-animation.js        15.2 KB
└── viks-animation.scss      8.4 KB
   Total Source: 23.6 KB

Production Build:
├── viks-animation.min.js    8.1 KB
├── viks-animation.min.js.gz 3.2 KB
├── viks-animation.min.css   4.3 KB
└── viks-animation.min.css.gz 1.1 KB
   Total Production: 12.4 KB
   Total Gzipped: 4.3 KB ⚡
```

### Performance Metrics

| Metric | Value | Rating |
|:-------|:------|:-------|
| **Initialization** | ~5ms | ⚡⚡⚡ |
| **Per Animation** | ~0.5ms | ⚡⚡⚡ |
| **Scroll Handler** | ~16ms (60fps) | ⚡⚡⚡ |
| **Memory Usage** | ~50KB | ⚡⚡⚡ |
| **CPU Usage** | <5% | ⚡⚡⚡ |

### Optimization Tips

#### 1. Use `once: true` for Above-the-Fold Content

```javascript
viks.init({
    once: true // Elements animate once and stay visible
});
```

**Why?** Reduces continuous scroll calculations.

#### 2. Limit Simultaneous Animations

```html
<!-- Good: Stagger animations -->
<div data-viks="fade-up">Item 1</div>
<div data-viks="fade-up delay-100">Item 2</div>
<div data-viks="fade-up delay-200">Item 3</div>

<!-- Avoid: Too many at once -->
<div data-viks="fade-up">Item 1</div>
<div data-viks="fade-up">Item 2</div>
<div data-viks="fade-up">Item 3</div>
...100 more items
```

**Why?** Browser can handle 5-10 simultaneous animations smoothly.

#### 3. Optimize Images First

```html
<!-- Optimize images before animating -->
<img src="optimized-image.webp" 
     data-viks="fade-up" 
     loading="lazy"
     width="800" 
     height="600">
```

**Why?** Large images cause jank regardless of animation quality.

#### 4. Use CSS `will-change` Sparingly

```css
/* Let Viks handle this automatically */
[data-viks] {
    /* No need to add will-change manually */
}
```

**Why?** Viks optimizes this internally. Over-use hurts performance.

#### 5. Disable on Low-End Devices

```javascript
viks.init({
    disable: function() {
        // Disable if device has limited memory
        return navigator.deviceMemory && navigator.deviceMemory < 4;
    }
});
```

---

## Examples

### Complete Landing Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Landing Page</title>
    <link rel="stylesheet" href="https://unpkg.com/viks-animation/dist/viks-animation.min.css">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
        
        .hero { min-height: 100vh; display: flex; align-items: center; justify-content: center; 
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-align: center; }
        .hero h1 { font-size: 3rem; margin-bottom: 20px; }
        .hero p { font-size: 1.5rem; margin-bottom: 30px; }
        .btn { display: inline-block; padding: 15px 40px; background: white; color: #667eea; 
               text-decoration: none; border-radius: 50px; font-weight: 600; }
        
        .features { padding: 100px 20px; max-width: 1200px; margin: 0 auto; }
        .features h2 { text-align: center; font-size: 2.5rem; margin-bottom: 60px; }
        .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; }
        .feature-card { padding: 40px; background: white; border-radius: 20px; box-shadow: 0 10px 40px rgba(0,0,0,0.1); text-align: center; }
        .feature-card h3 { margin: 20px 0; font-size: 1.5rem; }
        .feature-card p { color: #666; line-height: 1.8; }
    </style>
</head>
<body>
    <!-- Hero Section -->
    <section class="hero">
        <div>
            <h1 data-viks="fade-down duration-1000">Welcome to Our Product</h1>
            <p data-viks="fade-up duration-1000 delay-200">The best solution for your business</p>
            <a href="#features" class="btn" data-viks="zoom-in duration-800 delay-400">Learn More</a>
        </div>
    </section>

    <!-- Features Section -->
    <section class="features" id="features">
        <h2 data-viks="fade-up">Amazing Features</h2>
        <div class="feature-grid">
            <div class="feature-card" data-viks="fade-up duration-600">
                <div style="font-size: 3rem;">🚀</div>
                <h3>Fast Performance</h3>
                <p>Lightning-fast load times and smooth animations for the best user experience.</p>
            </div>
            <div class="feature-card" data-viks="fade-up duration-600 delay-100">
                <div style="font-size: 3rem;">🎨</div>
                <h3>Beautiful Design</h3>
                <p>Modern, clean interface that users love and remember.</p>
            </div>
            <div class="feature-card" data-viks="fade-up duration-600 delay-200">
                <div style="font-size: 3rem;">🔒</div>
                <h3>Secure & Safe</h3>
                <p>Enterprise-grade security to protect your data.</p>
            </div>
        </div>
    </section>

    <script src="https://unpkg.com/viks-animation/dist/viks-animation.min.js"></script>
    <script>
        viks.init({ duration: 600, once: true });
    </script>
</body>
</html>
```

### Card Grid with Stagger

```html
<div class="card-grid">
    <div class="card" data-viks="zoom-in">
        <img src="img1.jpg" alt="Card 1">
        <h3>Card Title 1</h3>
        <p>Description text here</p>
    </div>
    
    <div class="card" data-viks="zoom-in delay-100">
        <img src="img2.jpg" alt="Card 2">
        <h3>Card Title 2</h3>
        <p>Description text here</p>
    </div>
    
    <div class="card" data-viks="zoom-in delay-200">
        <img src="img3.jpg" alt="Card 3">
        <h3>Card Title 3</h3>
        <p>Description text here</p>
    </div>
    
    <div class="card" data-viks="zoom-in delay-300">
        <img src="img4.jpg" alt="Card 4">
        <h3>Card Title 4</h3>
        <p>Description text here</p>
    </div>
</div>
```

### Alternating Image Gallery

```html
<div class="gallery">
    <div class="gallery-item" data-viks="fade-right">
        <img src="photo1.jpg" alt="Photo 1">
    </div>
    <div class="gallery-item" data-viks="fade-left">
        <img src="photo2.jpg" alt="Photo 2">
    </div>
    <div class="gallery-item" data-viks="fade-right">
        <img src="photo3.jpg" alt="Photo 3">
    </div>
    <div class="gallery-item" data-viks="fade-left">
        <img src="photo4.jpg" alt="Photo 4">
    </div>
</div>
```

### Pricing Table

```html
<div class="pricing">
    <div class="price-card" data-viks="flip-up duration-800">
        <h3>Basic</h3>
        <div class="price">$9<span>/month</span></div>
        <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
        </ul>
        <button>Choose Plan</button>
    </div>
    
    <div class="price-card featured" data-viks="flip-up duration-800 delay-100">
        <h3>Pro</h3>
        <div class="price">$29<span>/month</span></div>
        <ul>
            <li>All Basic features</li>
            <li>Feature 4</li>
            <li>Feature 5</li>
            <li>Priority Support</li>
        </ul>
        <button>Choose Plan</button>
    </div>
    
    <div class="price-card" data-viks="flip-up duration-800 delay-200">
        <h3>Enterprise</h3>
        <div class="price">$99<span>/month</span></div>
        <ul>
            <li>All Pro features</li>
            <li>Feature 6</li>
            <li>Feature 7</li>
            <li>24/7 Support</li>
        </ul>
        <button>Choose Plan</button>
    </div>
</div>
```

### Timeline

```html
<div class="timeline">
    <div class="timeline-item" data-viks="fade-right">
        <div class="year">2020</div>
        <div class="content">
            <h3>Company Founded</h3>
            <p>Started with a vision to change the industry</p>
        </div>
    </div>
    
    <div class="timeline-item" data-viks="fade-left delay-100">
        <div class="year">2021</div>
        <div class="content">
            <h3>First Product Launch</h3>
            <p>Released our flagship product to market</p>
        </div>
    </div>
    
    <div class="timeline-item" data-viks="fade-right delay-200">
        <div class="year">2022</div>
        <div class="content">
            <h3>Series A Funding</h3>
            <p>Raised $10M to scale operations</p>
        </div>
    </div>
    
    <div class="timeline-item" data-viks="fade-left delay-300">
        <div class="year">2024</div>
        <div class="content">
            <h3>Global Expansion</h3>
            <p>Now serving customers in 50+ countries</p>
        </div>
    </div>
</div>
```

### Integration Examples

#### With React

```jsx
import { useEffect } from 'react';
import viks from 'viks-animation';
import 'viks-animation/dist/viks-animation.css';

function App() {
    useEffect(() => {
        viks.init({
            duration: 800,
            once: true
        });
    }, []);

    return (
        <div className="App">
            <h1 data-viks="fade-down">Hello React</h1>
            <p data-viks="fade-up delay-200">With Viks Animation</p>
        </div>
    );
}
```

#### With Vue.js

```vue
<template>
    <div id="app">
        <h1 data-viks="fade-down">Hello Vue</h1>
        <p data-viks="fade-up delay-200">With Viks Animation</p>
    </div>
</template>

<script>
import viks from 'viks-animation';
import 'viks-animation/dist/viks-animation.css';

export default {
    mounted() {
        viks.init({
            duration: 800,
            once: true
        });
    }
}
</script>
```

#### With Next.js

```jsx
// pages/_app.js
import { useEffect } from 'react';
import viks from 'viks-animation';
import 'viks-animation/dist/viks-animation.css';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        viks.init({ duration: 800, once: true });
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp;
```

---

## Troubleshooting

### Common Issues

#### Animations Not Working

**Problem:** Elements don't animate when scrolling.

**Solutions:**

1. **Check if CSS is loaded**
   ```javascript
   // Open browser console and check
   console.log(getComputedStyle(document.querySelector('[data-viks]')).opacity);
   // Should output "0" before animation
   ```

2. **Verify initialization**
   ```javascript
   // Make sure viks.init() is called
   console.log(typeof viks); // Should be "object"
   viks.init();
   ```

3. **Check element position**
   ```javascript
   // Element might be in viewport on load
   // Try scrolling down first, or add offset
   viks.init({ offset: 200 });
   ```

4. **Inspect data attribute**
   ```html
   <!-- Correct -->
   <div data-viks="fade-up">Content</div>
   
   <!-- Incorrect -->
   <div data-viks="fadeup">Content</div>
   <div data-viks="fade up">Content</div>
   ```

---

#### Animations Too Fast/Slow

**Problem:** Animation timing doesn't feel right.

**Solutions:**

```html
<!-- Adjust duration -->
<div data-viks="fade-up duration-1200">Slower animation</div>
<div data-viks="fade-up duration-300">Faster animation</div>

<!-- Or globally -->
<script>
viks.init({ duration: 800 });
</script>
```

---

#### Animations Jank on Mobile

**Problem:** Animations are choppy on mobile devices.

**Solutions:**

1. **Reduce simultaneous animations**
   ```javascript
   // Stagger animations instead
   viks.init({ delay: 100 });
   ```

2. **Use once mode**
   ```javascript
   viks.init({ once: true });
   ```

3. **Disable on low-end devices**
   ```javascript
   viks.init({
       disable: function() {
           return navigator.deviceMemory && navigator.deviceMemory < 2;
       }
   });
   ```

4. **Optimize images**
   ```html
   <img src="optimized.webp" loading="lazy" data-viks="fade-up">
   ```

---

#### Dynamic Content Not Animating

**Problem:** Dynamically added elements don't animate.

**Solution:**

```javascript
// After adding new elements
const newDiv = document.createElement('div');
newDiv.setAttribute('data-viks', 'fade-up');
newDiv.textContent = 'New content';
document.body.appendChild(newDiv);

// Call refreshHard to detect new elements
viks.refreshHard();

// Or enable auto-detection (default)
viks.init({
    disableMutationObserver: false
});
```

---

#### Source Maps Missing

**Problem:** Can't debug minified code.

**Solution:**

```html
<!-- Use non-minified version in development -->
<script src="https://unpkg.com/viks-animation/dist/viks-animation.js"></script>

<!-- Or enable source maps in production -->
<script src="viks-animation.min.js"></script>
<!--//# sourceMappingURL=viks-animation.min.js.map -->
```

---

#### Conflicts with Other Libraries

**Problem:** Viks conflicts with other animation libraries.

**Solutions:**

1. **Initialize after other libraries**
   ```javascript
   // Load other libraries first
   AOS.init();
   ScrollReveal().reveal('.element');
   
   // Then initialize Viks
   viks.init();
   ```

2. **Use different selectors**
   ```html
   <!-- AOS uses data-aos -->
   <div data-aos="fade-up">AOS animation</div>
   
   <!-- Viks uses data-viks -->
   <div data-viks="fade-up">Viks animation</div>
   ```

3. **Disable one library**
   ```javascript
   // If you only need Viks
   viks.init();
   // Don't initialize other libraries
   ```

---

### Getting Help

Can't find a solution? We're here to help!

| Channel | Best For | Response Time |
|:--------|:---------|:--------------|
| 🐛 [GitHub Issues](https://github.com/MeViksry/viks-animation/issues) | Bug reports | 24-48 hours |
| 💬 [GitHub Discussions](https://github.com/MeViksry/viks-animation/discussions) | Questions & ideas | 12-24 hours |
| 📧 [Email Support](mailto:support@viksanimation.com) | General inquiries | 48 hours |
| 📖 [Documentation](https://github.com/MeViksry/viks-animation/wiki) | Self-help guides | Instant |

**When reporting issues, please include:**

1. Browser and version
2. Operating system
3. Viks Animation version
4. Code snippet or CodePen
5. Console errors (if any)
6. Expected vs actual behavior

---

## Contributing

We welcome contributions from the community! 🎉

### How to Contribute

1. **Fork the Repository**
   ```bash
   git clone https://github.com/yourusername/viks-animation.git
   cd viks-animation
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Create a Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

4. **Make Your Changes**
   - Write code
   - Add tests
   - Update documentation

5. **Test Your Changes**
   ```bash
   npm test
   npm run build
   ```

6. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

7. **Push and Create PR**
   ```bash
   git push origin feature/amazing-feature
   ```

### Contribution Guidelines

- Follow existing code style
- Write clear commit messages (use [Conventional Commits](https://www.conventionalcommits.org/))
- Add tests for new features
- Update documentation
- Ensure all tests pass

### Areas We Need Help

- 🐛 Bug fixes
- ✨ New animations
- 📚 Documentation improvements
- 🌐 Translations
- 🧪 Test coverage
- 🎨 Examples and demos

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

## Changelog

### v1.0.0 (October 27, 2024) - Initial Release 🎉

**Core Features:**
- ✨ 30+ built-in animations (Fade, Zoom, Slide, Flip)
- ⚙️ Flexible inline and global configuration
- 🎯 Smart performance with throttle and debounce
- 📱 Mobile-optimized and responsive
- 🔄 Mirror mode for bi-directional animations
- 🎭 Custom events system
- 🔗 Anchor element support
- 📊 Mutation observer for dynamic content

**Technical:**
- 📦 Zero dependencies
- 💾 8KB minified, 3KB gzipped
- 🌐 ES6, CommonJS, and UMD builds
- 🗺️ Source maps included
- ✅ 85% test coverage

**Browser Support:**
- Chrome 60+, Firefox 55+, Safari 11+, Edge 79+
- iOS Safari 11+, Android Chrome 60+

See [CHANGELOG.md](CHANGELOG.md) for complete version history.

---

## Roadmap

### v1.1.0 (Q4 2024)

- [ ] Intersection Observer API support
- [ ] New bounce animations
- [ ] New rotate animations
- [ ] Performance improvements
- [ ] TypeScript definitions
- [ ] React/Vue/Angular wrappers

### v1.2.0 (Q1 2025)

- [ ] Animation timeline
- [ ] Scroll-triggered sequences
- [ ] Custom animation builder
- [ ] Visual animation editor
- [ ] More easing functions

### v2.0.0 (Q2 2025)

- [ ] Plugin system
- [ ] WebGL animations
- [ ] 3D transforms
- [ ] Advanced scroll effects
- [ ] Animation presets library

---

## License

**MIT License**

Copyright (c) 2024 MeViksry and Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

See [LICENSE](LICENSE) file for details.

---

## Acknowledgments

### Built With

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Rollup](https://rollupjs.org/) - Module bundler
- [Babel](https://babeljs.io/) - JavaScript compiler
- [Sass](https://sass-lang.com/) - CSS preprocessor
- [PostCSS](https://postcss.org/) - CSS processor
- [Terser](https://terser.org/) - JavaScript compressor

### Inspired By

- [AOS](https://michalsnik.github.io/aos/) - Animate On Scroll Library
- [ScrollReveal](https://scrollrevealjs.org/) - Scroll animations made easy
- [WOW.js](https://wowjs.uk/) - Reveal CSS animations on scroll

### Special Thanks

- 🙏 Open source community
- 🎨 All contributors
- 💡 Feature requesters
- 🐛 Bug reporters
- ⭐ Everyone who starred this project

---

## Related Projects

- [Viks Parallax](https://github.com/MeViksry/viks-parallax) - Parallax scrolling library
- [Viks Lazy](https://github.com/MeViksry/viks-lazy) - Lazy loading library
- [Viks Slider](https://github.com/MeViksry/viks-slider) - Touch-enabled slider

---

## Support the Project

If Viks Animation helps your project, consider:

- ⭐ [Star the repo](https://github.com/MeViksry/viks-animation)
- 🐛 [Report bugs](https://github.com/MeViksry/viks-animation/issues)
- 💡 [Suggest features](https://github.com/MeViksry/viks-animation/discussions)
- 📝 [Improve docs](https://github.com/MeViksry/viks-animation/blob/main/CONTRIBUTING.md)
- 🔀 [Submit PRs](https://github.com/MeViksry/viks-animation/pulls)
- 💬 [Share on Twitter](https://twitter.com/intent/tweet?text=Check%20out%20Viks%20Animation%20-%20Lightweight%20scroll%20animation%20library&url=https://github.com/MeViksry/viks-animation)

---

## Connect With Us

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-MeViksry-181717?style=for-the-badge&logo=github)](https://github.com/MeViksry)
[![Twitter](https://img.shields.io/badge/Twitter-@viksanimation-1DA1F2?style=for-the-badge&logo=twitter)](https://twitter.com/viksanimation)
[![Website](https://img.shields.io/badge/Website-viksanimation.com-667eea?style=for-the-badge&logo=google-chrome)](https://viksanimation.com)
[![Email](https://img.shields.io/badge/Email-contact@viksanimation.com-EA4335?style=for-the-badge&logo=gmail)](mailto:contact@viksanimation.com)

</div>

---

<div align="center">

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=MeViksry/viks-animation&type=Date)](https://star-history.com/#MeViksry/viks-animation&Date)

---

**Made with 💙 by [VIKRI AHPAD TANTOWI](https://github.com/MeViksry)**

*Bringing your websites to life, one animation at a time*

[![GitHub Stars](https://img.shields.io/github/stars/MeViksry/viks-animation?style=social)](https://github.com/MeViksry/viks-animation)
[![GitHub Forks](https://img.shields.io/github/forks/MeViksry/viks-animation?style=social)](https://github.com/MeViksry/viks-animation/fork)
[![GitHub Watchers](https://img.shields.io/github/watchers/MeViksry/viks-animation?style=social)](https://github.com/MeViksry/viks-animation)

**[⬆ Back to Top](#viks-animation-v10)**

</div>