/* **********************************************************
 𝙏𝙃𝙍𝙊𝙏𝙏𝙇𝙀
 Function execution restrictions ensure that a function is
 not executed too often, even if it is called repeatedly
 within a short period of time.
* **********************************************************/
const throttle = (func, wait) => {
  let timeout;
  let previous = 0;

  return function () {
    const now = Date.now();
    const remaining = wait - (now - previous);
    const context = this;
    const args = arguments;

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
    } else if (!timeout) {
      timeout = setTimeout(() => {
        previous = Date.now();
        timeout = null;
        func.apply(context, args);
      }, remaining);
    }
  };
};

/* **********************************************************
 𝘿𝙀𝘽𝙊𝙐𝙉𝘾𝙀
 A function execution delay that ensures a function only
 executed after repeated invocations have stopped for
 certain period of time.
* **********************************************************/
const debounce = (func, wait, immediate) => {
  let timeout;

  return function () {
    const context = this;
    const args = arguments;
    const later = () => {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    const callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
};

/* **********************************************************
 𝙊𝙁𝙁𝙎𝙀𝙏
 The absolute position counter for an element relative to
 the document (page viewport).
* **********************************************************/
const offset = function (el) {
  let _x = 0;
  let _y = 0;

  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - (el.tagName != 'BODY' ? el.scrollLeft : 0);
    _y += el.offsetTop - (el.tagName != 'BODY' ? el.scrollTop : 0);
    el = el.offsetParent;
  }

  return {
    top: _y,
    left: _x
  };
};

/* **********************************************************
 𝘿𝙀𝙑𝙄𝘾𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝙊𝙍
 Detects the device and browser used by the user using
 modern and accurate methods using feature detection and
 the User Agent Hints API.
* **********************************************************/

class Detector {
  constructor() {
    this.ua = navigator.userAgent || navigator.vendor || window.opera || '';
    this.platform = navigator.platform || '';
    this.maxTouchPoints = navigator.maxTouchPoints || 0;

    // Cache detection results
    this._isMobileCache = null;
    this._isPhoneCache = null;
    this._isTabletCache = null;
  }

  /**
   * Modern mobile detection using multiple signals
   * More reliable than regex-only approach
   */
  mobile() {
    if (this._isMobileCache !== null) {
      return this._isMobileCache;
    }

    // Method 1: Check touch points (modern approach)
    const hasTouchPoints = this.maxTouchPoints > 0;

    // Method 2: Check screen size (mobile typically < 768px)
    const hasSmallScreen = window.innerWidth <= 768;

    // Method 3: Check User Agent for mobile indicators
    const mobileKeywords =
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile|tablet|silk|kindle/i;
    const hasMobileUA = mobileKeywords.test(this.ua);

    // Method 4: Check for mobile platform
    const mobilePlatforms = /android|iphone|ipad|ipod/i;
    const hasMobilePlatform = mobilePlatforms.test(this.platform);

    // Method 5: Check window.orientation (exists on mobile)
    const hasOrientation = typeof window.orientation !== 'undefined';

    // Combine signals (at least 2 should match for mobile)
    const signals = [
      hasTouchPoints && hasSmallScreen,
      hasMobileUA,
      hasMobilePlatform,
      hasOrientation && hasSmallScreen
    ];

    this._isMobileCache = signals.filter(Boolean).length >= 2;
    return this._isMobileCache;
  }

  /**
   * Phone detection (smaller mobile devices)
   * Distinguishes phones from tablets
   */
  phone() {
    if (this._isPhoneCache !== null) {
      return this._isPhoneCache;
    }

    if (!this.mobile()) {
      this._isPhoneCache = false;
      return false;
    }

    // Method 1: Screen size check (phones typically < 768px)
    const isSmallScreen = window.innerWidth < 768;

    // Method 2: Check aspect ratio (phones are typically portrait)
    const isPortraitOriented = window.innerHeight > window.innerWidth;

    // Method 3: Check for phone-specific UA strings
    const phoneKeywords = /iphone|android.*mobile|windows phone|blackberry.*mobile/i;
    const hasPhoneUA = phoneKeywords.test(this.ua);

    // Method 4: Exclude tablets from UA
    const tabletKeywords = /ipad|android(?!.*mobile)|tablet|kindle|silk|playbook/i;
    const isNotTablet = !tabletKeywords.test(this.ua);

    // Method 5: Check screen pixel density (phones typically have higher DPI)
    const pixelRatio = window.devicePixelRatio || 1;
    const hasHighDPI = pixelRatio >= 2;

    // Combine signals
    const isPhone =
      isSmallScreen && isNotTablet && (hasPhoneUA || (isPortraitOriented && hasHighDPI));

    this._isPhoneCache = isPhone;
    return this._isPhoneCache;
  }

  /**
   * Tablet detection
   * Devices that are mobile but not phones
   */
  tablet() {
    if (this._isTabletCache !== null) {
      return this._isTabletCache;
    }

    // Method 1: Is mobile but not phone
    const isMobileNotPhone = this.mobile() && !this.phone();

    // Method 2: Check for tablet-specific UA strings
    const tabletKeywords = /ipad|android(?!.*mobile)|tablet|kindle|silk|playbook/i;
    const hasTabletUA = tabletKeywords.test(this.ua);

    // Method 3: Screen size check (tablets typically 768px - 1024px)
    const isTabletSize = window.innerWidth >= 768 && window.innerWidth <= 1024;

    // Method 4: Touch points check (tablets typically have more)
    const hasMultipleTouchPoints = this.maxTouchPoints >= 5;

    // Combine signals
    this._isTabletCache =
      isMobileNotPhone || (hasTabletUA && (isTabletSize || hasMultipleTouchPoints));
    return this._isTabletCache;
  }

  /**
   * IE11 detection (legacy support)
   */
  ie11() {
    return (
      ('-ms-scroll-limit' in document.documentElement.style &&
        '-ms-ime-align' in document.documentElement.style) ||
      this.ua.indexOf('Trident/') > -1
    );
  }

  /**
   * Get device type as string
   * Returns: 'desktop', 'phone', 'tablet', or 'unknown'
   */
  getDeviceType() {
    if (this.phone()) {
      return 'phone';
    }
    if (this.tablet()) {
      return 'tablet';
    }
    if (!this.mobile()) {
      return 'desktop';
    }
    return 'unknown';
  }

  /**
   * Get browser info
   * Returns object with browser name and version
   */
  getBrowserInfo() {
    const ua = this.ua;
    let browser = 'Unknown';
    let version = 'Unknown';

    // Chrome
    if (/chrome|crios|crmo/i.test(ua) && !/edge|edg/i.test(ua)) {
      browser = 'Chrome';
      const match = ua.match(/(?:chrome|crios|crmo)\/(\d+)/i);
      version = match ? match[1] : version;
    }
    // Safari (must check before Chrome as it contains 'safari')
    else if (/safari/i.test(ua) && !/chrome|crios|crmo|android/i.test(ua)) {
      browser = 'Safari';
      const match = ua.match(/version\/(\d+)/i);
      version = match ? match[1] : version;
    }
    // Firefox
    else if (/firefox|fxios/i.test(ua)) {
      browser = 'Firefox';
      const match = ua.match(/(?:firefox|fxios)\/(\d+)/i);
      version = match ? match[1] : version;
    }
    // Edge
    else if (/edg/i.test(ua)) {
      browser = 'Edge';
      const match = ua.match(/edg\/(\d+)/i);
      version = match ? match[1] : version;
    }
    // IE
    else if (/msie|trident/i.test(ua)) {
      browser = 'Internet Explorer';
      const match = ua.match(/(?:msie |rv:)(\d+)/i);
      version = match ? match[1] : version;
    }
    // Opera
    else if (/opera|opr/i.test(ua)) {
      browser = 'Opera';
      const match = ua.match(/(?:opera|opr)\/(\d+)/i);
      version = match ? match[1] : version;
    }

    return { browser, version };
  }

  /**
   * Get OS info
   * Returns object with OS name and version
   */
  getOSInfo() {
    const ua = this.ua;
    const platform = this.platform;
    let os = 'Unknown';
    let version = 'Unknown';

    // iOS
    if (/iphone|ipad|ipod/i.test(ua)) {
      os = 'iOS';
      const match = ua.match(/os (\d+)_(\d+)/i);
      version = match ? `${match[1]}.${match[2]}` : version;
    }
    // Android
    else if (/android/i.test(ua)) {
      os = 'Android';
      const match = ua.match(/android (\d+(?:\.\d+)?)/i);
      version = match ? match[1] : version;
    }
    // Windows
    else if (/windows/i.test(ua) || /win/i.test(platform)) {
      os = 'Windows';
      if (/windows nt 10/i.test(ua)) {
        version = '10/11';
      } else if (/windows nt 6.3/i.test(ua)) {
        version = '8.1';
      } else if (/windows nt 6.2/i.test(ua)) {
        version = '8';
      } else if (/windows nt 6.1/i.test(ua)) {
        version = '7';
      }
    }
    // macOS
    else if (/mac/i.test(platform) && !/iphone|ipad|ipod/i.test(ua)) {
      os = 'macOS';
      const match = ua.match(/mac os x (\d+)[._](\d+)/i);
      version = match ? `${match[1]}.${match[2]}` : version;
    }
    // Linux
    else if (/linux/i.test(platform) || /linux/i.test(ua)) {
      os = 'Linux';
    }

    return { os, version };
  }

  /**
   * Check if device supports touch
   */
  isTouchDevice() {
    return (
      this.maxTouchPoints > 0 ||
      'ontouchstart' in window ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)
    );
  }

  /**
   * Get screen info
   */
  getScreenInfo() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      availWidth: screen.availWidth,
      availHeight: screen.availHeight,
      pixelRatio: window.devicePixelRatio || 1,
      orientation: window.innerWidth > window.innerHeight ? 'landscape' : 'portrait',
      touchPoints: this.maxTouchPoints
    };
  }

  /**
   * Clear detection cache (useful after orientation change)
   */
  clearCache() {
    this._isMobileCache = null;
    this._isPhoneCache = null;
    this._isTabletCache = null;
  }

  /**
   * Get complete device info
   */
  getDeviceInfo() {
    return {
      type: this.getDeviceType(),
      isMobile: this.mobile(),
      isPhone: this.phone(),
      isTablet: this.tablet(),
      isTouch: this.isTouchDevice(),
      browser: this.getBrowserInfo(),
      os: this.getOSInfo(),
      screen: this.getScreenInfo()
    };
  }
}

// Create singleton instance
const detect = new Detector();

// Clear cache on orientation change for accurate detection
window.addEventListener('orientationchange', () => {
  detect.clearCache();
});

// Clear cache on resize (for responsive testing)
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    detect.clearCache();
  }, 250);
});

/* **********************************************************
 𝙊𝘽𝙎𝙀𝙍𝙑𝙀𝙍
 A DOM change monitor that automatically detects when
 elements with the data-viks attribute are added or
 removed from the page.
 * **********************************************************/
let observerCallback = () => {};

function containsVIKSNode(nodes) {
  let currentNode, result;

  for (let i = 0; i < nodes.length; i += 1) {
    currentNode = nodes[i];

    if (currentNode.dataset && currentNode.dataset.viks) {
      return true;
    }

    result = currentNode.children && containsVIKSNode(currentNode.children);

    if (result) {
      return true;
    }
  }

  return false;
}

function check(mutations) {
  if (!mutations) {
    return;
  }

  mutations.forEach(mutation => {
    const addedNodes = Array.prototype.slice.call(mutation.addedNodes);
    const removedNodes = Array.prototype.slice.call(mutation.removedNodes);
    const allNodes = addedNodes.concat(removedNodes);

    if (containsVIKSNode(allNodes)) {
      return observerCallback();
    }
  });
}

function getMutationObserver() {
  const win = window;
  return win.MutationObserver || win['WebKitMutationObserver'] || win['MozMutationObserver'];
}

function isSupported() {
  return !!getMutationObserver();
}

function ready(selector, fn) {
  const doc = window.document;
  const MutationObserver = getMutationObserver();

  const observer = new MutationObserver(check);
  observerCallback = fn;

  observer.observe(doc.documentElement, {
    childList: true,
    subtree: true,
    removedNodes: true
  });
}

const observer = { isSupported, ready };

//  Elements
const elements = () => {
  const elementsList = document.querySelectorAll('[data-viks]');
  return Array.prototype.map.call(elementsList, node => ({ node }));
};

/* **********************************************************
 𝙋𝘼𝙍𝙎𝙀 𝙑𝙄𝙆𝙎 𝘼𝙏𝙏𝙍𝙄𝘽𝙐𝙏𝙀
 Reads HTML attributes using the VIKS format, then converts
 them into neat JavaScript objects.
* **********************************************************/
const parseVIKSAttribute = el => {
  const viksValue = el.getAttribute('data-viks');
  if (!viksValue) {
    return {};
  }

  const parts = viksValue.trim().split(/\s+/);
  const parsed = {
    animation: null,
    duration: null,
    delay: null,
    easing: null,
    offset: null,
    once: null,
    mirror: null,
    anchor: null,
    anchorPlacement: null,
    id: null
  };

  parts.forEach(part => {
    // Check for offset-XXX
    if (part.startsWith('offset-')) {
      parsed.offset = part.replace('offset-', '');
    }
    // Check for delay-XXX
    else if (part.startsWith('delay-')) {
      parsed.delay = part.replace('delay-', '');
    }
    // Check for duration-XXX
    else if (part.startsWith('duration-')) {
      parsed.duration = part.replace('duration-', '');
    }
    // Check for easing-XXX
    else if (part.startsWith('easing-')) {
      parsed.easing = part.replace('easing-', '');
    }
    // Check for mirror-true or mirror-false
    else if (part.startsWith('mirror-')) {
      const value = part.replace('mirror-', '');
      parsed.mirror = value;
    }
    // Check for once-true or once-false
    else if (part.startsWith('once-')) {
      const value = part.replace('once-', '');
      parsed.once = value;
    }
    // Check for anchor-XXX (NOT anchor-placement)
    else if (part.startsWith('anchor-') && !part.startsWith('anchor-placement-')) {
      parsed.anchor = part.replace('anchor-', '');
    }
    // Check for anchor-placement-XXX
    else if (part.startsWith('anchor-placement-')) {
      parsed.anchorPlacement = part.replace('anchor-placement-', '');
    }
    // Check for id-XXX
    else if (part.startsWith('id-')) {
      parsed.id = part.replace('id-', '');
    }
    // Otherwise, it's the animation name
    else {
      if (!parsed.animation) {
        parsed.animation = part;
      }
    }
  });

  return parsed;
};

/* **********************************************************
  𝙂𝙀𝙏 𝙄𝙉𝙇𝙄𝙉𝙀 𝙊𝙋𝙏𝙄𝙊𝙉
  Get animation options from HTML elements, with a
  fallback/priority system.
* **********************************************************/
const getInlineOption = (el, key, fallback) => {
  // First try to get from parsed data-viks attribute
  const parsed = parseVIKSAttribute(el);

  if (parsed[key] !== null && parsed[key] !== undefined) {
    if (parsed[key] === 'true') {
      return true;
    }
    if (parsed[key] === 'false') {
      return false;
    }
    return parsed[key];
  }

  // Fallback to separate data-viks-* attributes (old format)
  const attr = el.getAttribute(`data-viks-${key}`);

  if (typeof attr !== 'undefined' && attr !== null) {
    if (attr === 'true') {
      return true;
    }
    if (attr === 'false') {
      return false;
    }
    return attr;
  }

  return fallback;
};

/* **********************************************************
 𝘾𝙇𝘼𝙎𝙎𝙀𝙎 𝘼𝙉𝘿 𝙀𝙑𝙀𝙉𝙏
Manipulating CSS classes and custom events.
* **********************************************************/
const addClasses = (node, classes) =>
  classes && classes.forEach(className => node.classList.add(className));

const removeClasses = (node, classes) =>
  classes && classes.forEach(className => node.classList.remove(className));

const fireEvent = (eventName, data) => {
  let customEvent;

  if (detect.ie11()) {
    customEvent = document.createEvent('CustomEvent');
    customEvent.initCustomEvent(eventName, true, true, { detail: data });
  } else {
    customEvent = new CustomEvent(eventName, {
      detail: data
    });
  }

  return document.dispatchEvent(customEvent);
};

/* **********************************************************
 𝙂𝙀𝙏 𝙋𝙊𝙎𝙄𝙏𝙄𝙊𝙉 𝘾𝘼𝙇𝘾𝙐𝙇𝘼𝙏𝙊𝙍
 Position calculation triggers animation and preparation.
* **********************************************************/
const getPositionIn = (el, defaultOffset, defaultAnchorPlacement) => {
  const windowHeight = window.innerHeight;
  const anchor = getInlineOption(el, 'anchor');
  const inlineAnchorPlacement = getInlineOption(el, 'anchorPlacement');
  const additionalOffset = Number(
    getInlineOption(el, 'offset', inlineAnchorPlacement ? 0 : defaultOffset)
  );
  const anchorPlacement = inlineAnchorPlacement || defaultAnchorPlacement;
  let finalEl = el;

  if (anchor && document.querySelectorAll(anchor)) {
    finalEl = document.querySelectorAll(anchor)[0];
  }

  let triggerPoint = offset(finalEl).top - windowHeight;

  switch (anchorPlacement) {
    case 'top-bottom':
      break;
    case 'center-bottom':
      triggerPoint += finalEl.offsetHeight / 2;
      break;
    case 'bottom-bottom':
      triggerPoint += finalEl.offsetHeight;
      break;
    case 'top-center':
      triggerPoint += windowHeight / 2;
      break;
    case 'center-center':
      triggerPoint += windowHeight / 2 + finalEl.offsetHeight / 2;
      break;
    case 'bottom-center':
      triggerPoint += windowHeight / 2 + finalEl.offsetHeight;
      break;
    case 'top-top':
      triggerPoint += windowHeight;
      break;
    case 'bottom-top':
      triggerPoint += windowHeight + finalEl.offsetHeight;
      break;
    case 'center-top':
      triggerPoint += windowHeight + finalEl.offsetHeight / 2;
      break;
  }

  return triggerPoint + additionalOffset;
};

const getPositionOut = (el, defaultOffset) => {
  const anchor = getInlineOption(el, 'anchor');
  const additionalOffset = getInlineOption(el, 'offset', defaultOffset);
  let finalEl = el;

  if (anchor && document.querySelectorAll(anchor)) {
    finalEl = document.querySelectorAll(anchor)[0];
  }

  const elementOffsetTop = offset(finalEl).top;

  return elementOffsetTop + finalEl.offsetHeight - additionalOffset;
};

const prepare = function ($elements, options) {
  $elements.forEach(el => {
    const originalViks = el.node.getAttribute('data-viks');
    const parsed = parseVIKSAttribute(el.node);

    const mirror = getInlineOption(el.node, 'mirror', options.mirror);
    const once = getInlineOption(el.node, 'once', options.once);
    const id = getInlineOption(el.node, 'id');
    const customDuration = getInlineOption(el.node, 'duration');
    const customDelay = getInlineOption(el.node, 'delay');
    const customEasing = getInlineOption(el.node, 'easing');

    // Get animation name
    const animationName = parsed.animation || originalViks.split(/\s+/)[0];

    if (originalViks.includes(' ')) {
      el.node.setAttribute('data-viks', animationName);
      if (customDuration) {
        el.node.setAttribute('data-viks-duration', customDuration);
      }
      if (customDelay) {
        el.node.setAttribute('data-viks-delay', customDelay);
      }
      if (customEasing) {
        el.node.setAttribute('data-viks-easing', customEasing);
      }
      if (parsed.offset) {
        el.node.setAttribute('data-viks-offset', parsed.offset);
      }
      if (parsed.anchor) {
        el.node.setAttribute('data-viks-anchor', parsed.anchor);
      }
      if (parsed.anchorPlacement) {
        el.node.setAttribute('data-viks-anchor-placement', parsed.anchorPlacement);
      }
      if (parsed.once !== null) {
        el.node.setAttribute('data-viks-once', parsed.once);
      }
      if (parsed.mirror !== null) {
        el.node.setAttribute('data-viks-mirror', parsed.mirror);
      }
      if (parsed.id) {
        el.node.setAttribute('data-viks-id', parsed.id);
      }
    } else {
      if (customDuration) {
        el.node.setAttribute('data-viks-duration', customDuration);
      }
      if (customDelay) {
        el.node.setAttribute('data-viks-delay', customDelay);
      }
      if (customEasing) {
        el.node.setAttribute('data-viks-easing', customEasing);
      }
    }

    const customClassNames = options.useClassNames && animationName;

    const animatedClassNames = [options.animatedClassName]
      .concat(customClassNames ? [animationName] : [])
      .filter(className => typeof className === 'string');

    if (options.initClassName) {
      el.node.classList.add(options.initClassName);
    }

    el.position = {
      in: getPositionIn(el.node, options.offset, options.anchorPlacement),
      out: mirror && getPositionOut(el.node, options.offset)
    };

    el.options = {
      once,
      mirror,
      animatedClassNames,
      id
    };
  });

  return $elements;
};

/* **********************************************************
  𝙃𝘼𝙉𝘿𝙇𝙀 𝙎𝘾𝙍𝙊𝙇𝙇
  VIKS's CORE SYSTEM - which handles scroll logic
  based animations!
* **********************************************************/
const applyClasses = (el, top) => {
  const { options, position, node } = el;

  const hide = () => {
    if (!el.animated) {
      return;
    }

    removeClasses(node, options.animatedClassNames);
    fireEvent('viks:out', node);

    if (el.options.id) {
      fireEvent(`viks:out:${el.options.id}`, node);
    }

    el.animated = false;
  };

  const show = () => {
    if (el.animated) {
      return;
    }

    addClasses(node, options.animatedClassNames);

    fireEvent('viks:in', node);
    if (el.options.id) {
      fireEvent(`viks:in:${el.options.id}`, node);
    }

    el.animated = true;
  };

  if (options.mirror && top >= position.out && !options.once) {
    hide();
  } else if (top >= position.in) {
    show();
  } else if (el.animated && !options.once) {
    hide();
  }
};

const handleScroll = $elements => $elements.forEach(el => applyClasses(el, window.pageYOffset));

/* **********************************************************
  𝙑𝙄𝙆𝙎 𝙈𝘼𝙄𝙉 𝘼𝙉𝙄𝙈𝘼𝙏𝙄𝙊𝙉
  VIKS's CORE ENGINE - the main system that controls
  all animations!
* **********************************************************/
let $VIKSElements = [];
let initialized = false;

let options = {
  offset: 120,
  delay: 0,
  easing: 'ease',
  duration: 400,
  disable: false,
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
  startEvent: 'DOMContentLoaded',
  animatedClassName: 'viks-animate',
  initClassName: 'viks-init',
  useClassNames: false,
  disableMutationObserver: false,
  throttleDelay: 99,
  debounceDelay: 50
};

const isBrowserNotSupported = () => document.all && !window.atob;

const initializeScroll = function initializeScroll() {
  $VIKSElements = prepare($VIKSElements, options);
  handleScroll($VIKSElements);

  window.addEventListener(
    'scroll',
    throttle(() => {
      handleScroll($VIKSElements, options.once);
    }, options.throttleDelay)
  );

  return $VIKSElements;
};

const refresh = function refresh(initialize = false) {
  if (initialize) {
    initialized = true;
  }
  if (initialized) {
    initializeScroll();
  }
};

const refreshHard = function refreshHard() {
  $VIKSElements = elements();

  if (isDisabled(options.disable) || isBrowserNotSupported()) {
    return disable();
  }

  refresh();
};

const disable = function () {
  $VIKSElements.forEach(el => {
    el.node.removeAttribute('data-viks');
    el.node.removeAttribute('data-viks-easing');
    el.node.removeAttribute('data-viks-duration');
    el.node.removeAttribute('data-viks-delay');

    if (options.initClassName) {
      el.node.classList.remove(options.initClassName);
    }

    if (options.animatedClassName) {
      el.node.classList.remove(options.animatedClassName);
    }
  });
};

const isDisabled = function (optionDisable) {
  return (
    optionDisable === true ||
    (optionDisable === 'mobile' && detect.mobile()) ||
    (optionDisable === 'phone' && detect.phone()) ||
    (optionDisable === 'tablet' && detect.tablet()) ||
    (typeof optionDisable === 'function' && optionDisable() === true)
  );
};

const init = function init(settings) {
  options = Object.assign(options, settings);

  $VIKSElements = elements();

  if (!options.disableMutationObserver && !observer.isSupported()) {
    console.info(`
      viks: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `);
    options.disableMutationObserver = true;
  }

  if (!options.disableMutationObserver) {
    observer.ready('[data-viks]', refreshHard);
  }

  if (isDisabled(options.disable) || isBrowserNotSupported()) {
    return disable();
  }

  const body = document.querySelector('body') || document.body;

  if (body) {
    body.setAttribute('data-viks-easing', String(options.easing));
    body.setAttribute('data-viks-duration', String(options.duration));
    body.setAttribute('data-viks-delay', String(options.delay));
  }

  if (['DOMContentLoaded', 'load'].indexOf(options.startEvent) === -1) {
    document.addEventListener(options.startEvent, () => {
      refresh(true);
    });
  } else {
    window.addEventListener('load', () => {
      refresh(true);
    });
  }

  if (
    options.startEvent === 'DOMContentLoaded' &&
    ['complete', 'interactive'].indexOf(document.readyState) > -1
  ) {
    refresh(true);
  }

  window.addEventListener('resize', debounce(refresh, options.debounceDelay, true));

  window.addEventListener('orientationchange', debounce(refresh, options.debounceDelay, true));

  return $VIKSElements;
};

/**
 * Public API
 */
const VIKS = {
  init,
  refresh,
  refreshHard
};

/**
 * module system
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = VIKS;
}

/**
 * Global variable
 */
if (typeof window !== 'undefined') {
  window.viks = VIKS;
}
