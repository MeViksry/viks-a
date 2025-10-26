# 🎨 Viks Animation

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Size](https://img.shields.io/badge/size-8KB-orange.svg)
![Downloads](https://img.shields.io/badge/downloads-1k+-brightgreen.svg)

**Lightweight JavaScript library for smooth and engaging scroll animations**

[Demo](https://viksry.github.io/viks-animation) • [Documentation](#-documentation) • [Examples](#-examples) • [Contributing](CONTRIBUTING.md)

</div>

---

## 📖 Table of Contents

- [✨ Features](#-features)
- [🚀 Installation](#-installation)
- [📚 Quick Start](#-quick-start)
- [🎯 Usage](#-usage)
- [⚙️ Configuration](#️-configuration)
- [🎬 Animation Types](#-animation-types)
- [🔧 API Reference](#-api-reference)
- [📱 Browser Support](#-browser-support)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Features

- 🪶 **Lightweight** - Only 8KB minified
- ⚡ **Performance** - Optimized with throttle and debounce
- 🎨 **Rich Animations** - 30+ built-in animation effects
- 📱 **Responsive** - Works perfectly on all devices
- 🔧 **Easy Setup** - Simple data attributes
- 🎯 **Customizable** - Flexible configuration options
- 🔄 **Mirror Mode** - Animate in and out
- 🎭 **Multiple Triggers** - Various anchor placements
- 🌐 **No Dependencies** - Pure vanilla JavaScript
- 📦 **Module Support** - ES6, CommonJS, and UMD

---

## 🚀 Installation

### Via NPM

```bash
npm install viks-animation
```

### Via Yarn

```bash
yarn add viks-animation
```

### Via CDN

```html
<!-- JavaScript -->
<script src="https://unpkg.com/viks-animation@latest/dist/viks-animation.min.js"></script>

<!-- CSS -->
<link rel="stylesheet" href="https://unpkg.com/viks-animation@latest/dist/viks-animation.min.css">
```

### Manual Download

Download the latest release from [GitHub Releases](https://github.com/MeViksry/viks-animation/releases)

---

## 📚 Quick Start

### 1. Include Files

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="path/to/viks-animation.css">
</head>
<body>
    <!-- Your content here -->
    <script src="path/to/viks-animation.js"></script>
</body>
</html>
```

### 2. Initialize

```javascript
// Simple initialization
viks.init();

// With custom options
viks.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 120
});
```

### 3. Add Animations

```html
<!-- Basic fade animation -->
<div data-viks="fade-up">
    Content fades up on scroll
</div>

<!-- With custom duration and delay -->
<div data-viks="zoom-in duration-1000 delay-200">
    Zooms in with custom timing
</div>

<!-- Multiple properties -->
<div data-viks="slide-right duration-600 delay-100 ease-in-out once">
    Slides right with easing
</div>
```

---

## 🎯 Usage

### Basic Syntax

```html
<div data-viks="ANIMATION_NAME">Content</div>
```

### With Inline Options

```html
<div data-viks="fade-up duration-1000 delay-500 ease-out once">
    Content with inline options
</div>
```

### With Separate Attributes

```html
<div data-viks="fade-up"
     data-viks-duration="1000"
     data-viks-delay="500"
     data-viks-easing="ease-out"
     data-viks-once="true">
    Content with separate attributes
</div>
```

### Advanced Examples

#### Mirror Animation

```html
<div data-viks="fade-up mirror">
    Animates in when scrolling down, animates out when scrolling up
</div>
```

#### Custom Anchor

```html
<div data-viks="fade-right anchor-#custom-element">
    Triggers based on another element's position
</div>
```

#### Anchor Placement

```html
<!-- Trigger when element's top reaches viewport bottom -->
<div data-viks="zoom-in" data-viks-anchor-placement="top-bottom">
    Content
</div>

<!-- Trigger when element's center reaches viewport center -->
<div data-viks="slide-up" data-viks-anchor-placement="center-center">
    Content
</div>
```

---

## ⚙️ Configuration

### Global Options

```javascript
viks.init({
    // Offset from original trigger point
    offset: 120,
    
    // Animation delay (ms)
    delay: 0,
    
    // Animation duration (ms)
    duration: 400,
    
    // Timing function
    easing: 'ease',
    
    // Animate only once
    once: false,
    
    // Animate out when scrolling past
    mirror: false,
    
    // Placement of element relative to window
    anchorPlacement: 'top-bottom',
    
    // Start event name
    startEvent: 'DOMContentLoaded',
    
    // Class added when animated
    animatedClassName: 'viks-animate',
    
    // Class added on initialization
    initClassName: 'viks-init',
    
    // Use animation names as classes
    useClassNames: false,
    
    // Disable for specific devices
    disable: false, // or 'mobile', 'phone', 'tablet', function() { return true; }
    
    // Disable mutation observer
    disableMutationObserver: false,
    
    // Throttle delay for scroll event
    throttleDelay: 99,
    
    // Debounce delay for resize event
    debounceDelay: 50
});
```

### Inline Options

| Option | Values | Example |
|--------|--------|---------|
| `duration-*` | 50-3000 (ms) | `duration-1000` |
| `delay-*` | 0-3000 (ms) | `delay-500` |
| `offset-*` | Any number | `offset-200` |
| `easing` | See easing types | `ease-in-out` |
| `anchor-*` | CSS selector | `anchor-#header` |
| `anchor-placement` | See placements | `top-center` |
| `once` | boolean | `once` |
| `mirror` | boolean | `mirror` |
| `id-*` | Custom ID | `id-my-animation` |

### Anchor Placements

```
top-bottom    ↓ Element top     → Viewport bottom
top-center    ↓ Element top     → Viewport center
top-top       ↓ Element top     → Viewport top
center-bottom ↓ Element center  → Viewport bottom
center-center ↓ Element center  → Viewport center
center-top    ↓ Element center  → Viewport top
bottom-bottom ↓ Element bottom  → Viewport bottom
bottom-center ↓ Element bottom  → Viewport center
bottom-top    ↓ Element bottom  → Viewport top
```

---

## 🎬 Animation Types

### 🌊 Fade Animations

| Animation | Direction | Example |
|-----------|-----------|---------|
| `fade` | In place | `data-viks="fade"` |
| `fade-up` | ↑ Up | `data-viks="fade-up"` |
| `fade-down` | ↓ Down | `data-viks="fade-down"` |
| `fade-left` | ← Left | `data-viks="fade-left"` |
| `fade-right` | → Right | `data-viks="fade-right"` |
| `fade-up-left` | ↖ Up Left | `data-viks="fade-up-left"` |
| `fade-up-right` | ↗ Up Right | `data-viks="fade-up-right"` |
| `fade-down-left` | ↙ Down Left | `data-viks="fade-down-left"` |
| `fade-down-right` | ↘ Down Right | `data-viks="fade-down-right"` |

### 🔍 Zoom Animations

| Animation | Effect | Example |
|-----------|--------|---------|
| `zoom-in` | Scale up from small | `data-viks="zoom-in"` |
| `zoom-in-up` | Zoom in + move up | `data-viks="zoom-in-up"` |
| `zoom-in-down` | Zoom in + move down | `data-viks="zoom-in-down"` |
| `zoom-in-left` | Zoom in + move left | `data-viks="zoom-in-left"` |
| `zoom-in-right` | Zoom in + move right | `data-viks="zoom-in-right"` |
| `zoom-out` | Scale down from large | `data-viks="zoom-out"` |
| `zoom-out-up` | Zoom out + move up | `data-viks="zoom-out-up"` |
| `zoom-out-down` | Zoom out + move down | `data-viks="zoom-out-down"` |
| `zoom-out-left` | Zoom out + move left | `data-viks="zoom-out-left"` |
| `zoom-out-right` | Zoom out + move right | `data-viks="zoom-out-right"` |

### 📐 Slide Animations

| Animation | Direction | Example |
|-----------|-----------|---------|
| `slide-up` | ↑ From bottom | `data-viks="slide-up"` |
| `slide-down` | ↓ From top | `data-viks="slide-down"` |
| `slide-left` | ← From right | `data-viks="slide-left"` |
| `slide-right` | → From left | `data-viks="slide-right"` |

### 🔄 Flip Animations

| Animation | Axis | Example |
|-----------|------|---------|
| `flip-left` | Y-axis left | `data-viks="flip-left"` |
| `flip-right` | Y-axis right | `data-viks="flip-right"` |
| `flip-up` | X-axis up | `data-viks="flip-up"` |
| `flip-down` | X-axis down | `data-viks="flip-down"` |

### ⏱️ Easing Functions

```javascript
linear
ease, ease-in, ease-out, ease-in-out
ease-in-back, ease-out-back, ease-in-out-back
ease-in-sine, ease-out-sine, ease-in-out-sine
ease-in-quad, ease-out-quad, ease-in-out-quad
ease-in-cubic, ease-out-cubic, ease-in-out-cubic
ease-in-quart, ease-out-quart, ease-in-out-quart
```

---

## 🔧 API Reference

### Methods

#### `viks.init(options)`

Initialize Viks Animation with optional configuration.

```javascript
viks.init({
    duration: 600,
    once: true
});
```

#### `viks.refresh()`

Recalculate element positions. Useful after DOM changes.

```javascript
viks.refresh();
```

#### `viks.refreshHard()`

Re-initialize all elements. Use when adding new animated elements dynamically.

```javascript
// Add new element
document.body.innerHTML += '<div data-viks="fade-up">New Content</div>';

// Refresh
viks.refreshHard();
```

### Events

#### `viks:in`

Fired when element animates in.

```javascript
document.addEventListener('viks:in', (event) => {
    console.log('Animated in:', event.detail);
});
```

#### `viks:out`

Fired when element animates out (mirror mode only).

```javascript
document.addEventListener('viks:out', (event) => {
    console.log('Animated out:', event.detail);
});
```

#### Custom ID Events

```html
<div data-viks="fade-up id-hero">Hero Section</div>
```

```javascript
document.addEventListener('viks:in:hero', (event) => {
    console.log('Hero animated in!');
});

document.addEventListener('viks:out:hero', (event) => {
    console.log('Hero animated out!');
});
```

---

## 💡 Examples

### Staggered Animation

```html
<div data-viks="fade-up">First</div>
<div data-viks="fade-up delay-100">Second</div>
<div data-viks="fade-up delay-200">Third</div>
<div data-viks="fade-up delay-300">Fourth</div>
```

### Card Grid

```html
<div class="grid">
    <div data-viks="zoom-in duration-600">Card 1</div>
    <div data-viks="zoom-in duration-600 delay-100">Card 2</div>
    <div data-viks="zoom-in duration-600 delay-200">Card 3</div>
    <div data-viks="zoom-in duration-600 delay-300">Card 4</div>
</div>
```

### Hero Section

```html
<section class="hero">
    <h1 data-viks="fade-down duration-1000">Welcome to Viks</h1>
    <p data-viks="fade-up duration-1000 delay-200">Smooth scroll animations</p>
    <button data-viks="zoom-in duration-800 delay-400">Get Started</button>
</section>
```

### Image Gallery

```html
<div class="gallery">
    <img data-viks="fade-right" src="image1.jpg" alt="Image 1">
    <img data-viks="fade-left" src="image2.jpg" alt="Image 2">
    <img data-viks="fade-right" src="image3.jpg" alt="Image 3">
    <img data-viks="fade-left" src="image4.jpg" alt="Image 4">
</div>
```

---

## 📱 Browser Support

| Browser | Version |
|---------|---------|
| 🌐 Chrome | ✅ 60+ |
| 🦊 Firefox | ✅ 55+ |
| 🧭 Safari | ✅ 11+ |
| 📘 Edge | ✅ 79+ |
| 🌍 Opera | ✅ 47+ |
| 📱 iOS Safari | ✅ 11+ |
| 🤖 Android Chrome | ✅ 60+ |

---

## 🎓 Best Practices

### Performance Tips

1. **Use `once: true`** for above-the-fold content
2. **Limit simultaneous animations** to 5-10 elements
3. **Use appropriate easing** for natural motion
4. **Avoid animating large images** without optimization
5. **Test on mobile devices** for smooth performance

### Accessibility

```html
<!-- Add reduced motion support -->
<style>
@media (prefers-reduced-motion: reduce) {
    [data-viks] {
        animation: none !important;
        transition: none !important;
    }
}
</style>
```

---

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

---

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Credits

Created with ❤️ by [MeViksry](https://github.com/MeViksry)

### Special Thanks

- Inspired by AOS (Animate On Scroll)
- Community contributors
- All users and testers

---

## 🔗 Links

- 🌐 [Website](https://viksry.github.io/viks-animation)
- 📖 [Documentation](https://github.com/MeViksry/viks-animation/wiki)
- 🐛 [Issue Tracker](https://github.com/MeViksry/viks-animation/issues)
- 💬 [Discussions](https://github.com/MeViksry/viks-animation/discussions)
- 📧 [Email](mailto:support@viksanimation.com)

---

<div align="center">

**[⬆ back to top](#-viks-animation)**

Made with 💙 by developers, for developers

</div>