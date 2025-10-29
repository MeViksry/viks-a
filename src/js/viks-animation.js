/* **********************************************************
 𝙏𝙃𝙍𝙊𝙏𝙏𝙇𝙀
Pembatas eksekusi fungsi yang memastikan sebuah fungsi
tidak dieksekusi terlalu sering, bahkan jika dipanggil 
berulang kali dalam waktu singkat.
* **********************************************************/
const throttle = (func, wait) => {
  let timeout;
  let previous = 0;
  
  return function() {
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
 Penunda eksekusi fungsi yang memastikan sebuah fungsi hanya
 dieksekusi setelah pemanggilan berulang telah berhenti untuk
 jangka waktu tertentu.
* **********************************************************/
const debounce = (func, wait, immediate) => {
  let timeout;
  
  return function() {
    const context = this;
    const args = arguments;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    
    if (callNow) func.apply(context, args);
  };
};

/* **********************************************************
 𝙊𝙁𝙁𝙎𝙀𝙏
 Penghitung posisi absolut sebuah elemen relatif terhadap
 dokumen (viewport halaman).
* **********************************************************/
const offset = function(el) {
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
 Pendeteksi perangkat dan browser yang digunakan user
 berdasarkan User Agent string.
* **********************************************************/
const fullNameRe = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;
const prefixRe = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
const fullNameMobileRe = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i;
const prefixMobileRe = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;

function ua() {
  return navigator.userAgent || navigator.vendor || window.opera || '';
}

class Detector {
  phone() {
    const a = ua();
    return !!(fullNameRe.test(a) || prefixRe.test(a.substr(0, 4)));
  }

  mobile() {
    const a = ua();
    return !!(fullNameMobileRe.test(a) || prefixMobileRe.test(a.substr(0, 4)));
  }

  tablet() {
    return this.mobile() && !this.phone();
  }

  ie11() {
    return (
      '-ms-scroll-limit' in document.documentElement.style &&
      '-ms-ime-align' in document.documentElement.style
    );
  }
}

const detect = new Detector();

/* **********************************************************
 𝙊𝘽𝙎𝙀𝙍𝙑𝙀𝙍
 Pemantau perubahan DOM yang secara otomatis mendeteksi 
 ketika elemen dengan atribut data-viks ditambahkan atau
 dihapus dari halaman.
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
  if (!mutations) return;

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
  return (
    win.MutationObserver ||
    win['WebKitMutationObserver'] ||
    win['MozMutationObserver']
  );
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

// ============================================
// HELPER: Parse Inline Attributes
// ============================================
const parseVIKSAttribute = (el) => {
  const viksValue = el.getAttribute('data-viks');
  if (!viksValue) return {};
  
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

// ============================================
// HELPER: Get Inline Option
// ============================================
const getInlineOption = (el, key, fallback) => {
  // First try to get from parsed data-viks attribute
  const parsed = parseVIKSAttribute(el);
  
  if (parsed[key] !== null && parsed[key] !== undefined) {
    if (parsed[key] === 'true') return true;
    if (parsed[key] === 'false') return false;
    return parsed[key];
  }
  
  // Fallback to separate data-viks-* attributes (old format)
  const attr = el.getAttribute('data-viks-' + key);
  
  if (typeof attr !== 'undefined' && attr !== null) {
    if (attr === 'true') return true;
    if (attr === 'false') return false;
    return attr;
  }
  
  return fallback;
};

// ============================================
// HELPER: Classes and Events
// ============================================
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

// ============================================
// HELPER: Position Calculator
// ============================================
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

const prepare = function($elements, options) {
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
    
    // CRITICAL: Jika format baru (ada spasi), set data-viks HANYA dengan animation name
    // Agar CSS selector [data-viks='fade-up'] tetap match
    if (originalViks.includes(' ')) {
      el.node.setAttribute('data-viks', animationName);
      
      // Set parameter lain ke attribute terpisah
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
      // Format lama, set attributes seperti biasa
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

// ============================================
// HELPER: Handle Scroll
// ============================================
const applyClasses = (el, top) => {
  const { options, position, node } = el;

  const hide = () => {
    if (!el.animated) return;

    removeClasses(node, options.animatedClassNames);
    fireEvent('viks:out', node);

    if (el.options.id) {
      fireEvent(`viks:out:${el.options.id}`, node);
    }

    el.animated = false;
  };

  const show = () => {
    if (el.animated) return;

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

const handleScroll = $elements =>
  $elements.forEach(el => applyClasses(el, window.pageYOffset));

// ============================================
// MAIN: VIKS
// ============================================
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
  if (initialize) initialized = true;
  if (initialized) initializeScroll();
};

const refreshHard = function refreshHard() {
  $VIKSElements = elements();

  if (isDisabled(options.disable) || isBrowserNotSupported()) {
    return disable();
  }

  refresh();
};

const disable = function() {
  $VIKSElements.forEach(function(el) {
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

const isDisabled = function(optionDisable) {
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
    document.addEventListener(options.startEvent, function() {
      refresh(true);
    });
  } else {
    window.addEventListener('load', function() {
      refresh(true);
    });
  }

  if (
    options.startEvent === 'DOMContentLoaded' &&
    ['complete', 'interactive'].indexOf(document.readyState) > -1
  ) {
    refresh(true);
  }

  window.addEventListener(
    'resize',
    debounce(refresh, options.debounceDelay, true)
  );

  window.addEventListener(
    'orientationchange',
    debounce(refresh, options.debounceDelay, true)
  );

  return $VIKSElements;
};

// ============================================
// Export Public API
// ============================================
const VIKS = {
  init,
  refresh,
  refreshHard
};

// Jika menggunakan module system
if (typeof module !== 'undefined' && module.exports) {
  module.exports = VIKS;
}

// Jika ingin sebagai global variable
if (typeof window !== 'undefined') {
  window.viks = VIKS;
}

// Export default untuk ES6 modules
export default VIKS;