/**
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @version 0.6.9
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */

/*jslint browser:true, node:true*/
/*global define, Event, Node*/


/**
 * Instantiate fast-clicking listeners on the specificed layer.
 *
 * @constructor
 * @param {Element} layer The layer to listen on
 */
function FastClick(layer) {
    'use strict';
	var oldOnClick, self = this;


	/**
	 * Whether a click is currently being tracked.
	 *
	 * @type boolean
	 */
	this.trackingClick = false;


	/**
	 * Timestamp for when when click tracking started.
	 *
	 * @type number
	 */
	this.trackingClickStart = 0;


	/**
	 * The element being tracked for a click.
	 *
	 * @type EventTarget
	 */
	this.targetElement = null;


	/**
	 * X-coordinate of touch start event.
	 *
	 * @type number
	 */
	this.touchStartX = 0;


	/**
	 * Y-coordinate of touch start event.
	 *
	 * @type number
	 */
	this.touchStartY = 0;


	/**
	 * ID of the last touch, retrieved from Touch.identifier.
	 *
	 * @type number
	 */
	this.lastTouchIdentifier = 0;


	/**
	 * Touchmove boundary, beyond which a click will be cancelled.
	 *
	 * @type number
	 */
	this.touchBoundary = 10;


	/**
	 * The FastClick layer.
	 *
	 * @type Element
	 */
	this.layer = layer;

	if (!layer || !layer.nodeType) {
		throw new TypeError('Layer must be a document node');
	}

	/** @type function() */
	this.onClick = function() { return FastClick.prototype.onClick.apply(self, arguments); };

	/** @type function() */
	this.onMouse = function() { return FastClick.prototype.onMouse.apply(self, arguments); };

	/** @type function() */
	this.onTouchStart = function() { return FastClick.prototype.onTouchStart.apply(self, arguments); };

	/** @type function() */
	this.onTouchMove = function() { return FastClick.prototype.onTouchMove.apply(self, arguments); };

	/** @type function() */
	this.onTouchEnd = function() { return FastClick.prototype.onTouchEnd.apply(self, arguments); };

	/** @type function() */
	this.onTouchCancel = function() { return FastClick.prototype.onTouchCancel.apply(self, arguments); };

	if (FastClick.notNeeded(layer)) {
		return;
	}

	// Set up event handlers as required
	if (this.deviceIsAndroid) {
		layer.addEventListener('mouseover', this.onMouse, true);
		layer.addEventListener('mousedown', this.onMouse, true);
		layer.addEventListener('mouseup', this.onMouse, true);
	}

	layer.addEventListener('click', this.onClick, true);
	layer.addEventListener('touchstart', this.onTouchStart, false);
	layer.addEventListener('touchmove', this.onTouchMove, false);
	layer.addEventListener('touchend', this.onTouchEnd, false);
	layer.addEventListener('touchcancel', this.onTouchCancel, false);

	// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
	// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
	// layer when they are cancelled.
	if (!Event.prototype.stopImmediatePropagation) {
		layer.removeEventListener = function(type, callback, capture) {
			var rmv = Node.prototype.removeEventListener;
			if (type === 'click') {
				rmv.call(layer, type, callback.hijacked || callback, capture);
			} else {
				rmv.call(layer, type, callback, capture);
			}
		};

		layer.addEventListener = function(type, callback, capture) {
			var adv = Node.prototype.addEventListener;
			if (type === 'click') {
				adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
					if (!event.propagationStopped) {
						callback(event);
					}
				}), capture);
			} else {
				adv.call(layer, type, callback, capture);
			}
		};
	}

	// If a handler is already declared in the element's onclick attribute, it will be fired before
	// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
	// adding it as listener.
	if (typeof layer.onclick === 'function') {

		// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
		// - the old one won't work if passed to addEventListener directly.
		oldOnClick = layer.onclick;
		layer.addEventListener('click', function(event) {
			oldOnClick(event);
		}, false);
		layer.onclick = null;
	}
}


/**
 * Android requires exceptions.
 *
 * @type boolean
 */
FastClick.prototype.deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0;


/**
 * iOS requires exceptions.
 *
 * @type boolean
 */
FastClick.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent);


/**
 * iOS 4 requires an exception for select elements.
 *
 * @type boolean
 */
FastClick.prototype.deviceIsIOS4 = FastClick.prototype.deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


/**
 * iOS 6.0(+?) requires the target element to be manually derived
 *
 * @type boolean
 */
FastClick.prototype.deviceIsIOSWithBadTarget = FastClick.prototype.deviceIsIOS && (/OS ([6-9]|\d{2})_\d/).test(navigator.userAgent);


/**
 * Determine whether a given element requires a native click.
 *
 * @param {EventTarget|Element} target Target DOM element
 * @returns {boolean} Returns true if the element needs a native click
 */
FastClick.prototype.needsClick = function(target) {
	'use strict';
	switch (target.nodeName.toLowerCase()) {

	// Don't send a synthetic click to disabled inputs (issue #62)
	case 'button':
	case 'select':
	case 'textarea':
		if (target.disabled) {
			return true;
		}

		break;
	case 'input':

		// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
		if ((this.deviceIsIOS && target.type === 'file') || target.disabled) {
			return true;
		}

		break;
	case 'label':
	case 'video':
		return true;
	}

	return (/\bneedsclick\b/).test(target.className);
};


/**
 * Determine whether a given element requires a call to focus to simulate click into element.
 *
 * @param {EventTarget|Element} target Target DOM element
 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
 */
FastClick.prototype.needsFocus = function(target) {
	'use strict';
	switch (target.nodeName.toLowerCase()) {
	case 'textarea':
	case 'select':
		return true;
	case 'input':
		switch (target.type) {
		case 'button':
		case 'checkbox':
		case 'file':
		case 'image':
		case 'radio':
		case 'submit':
			return false;
		}

		// No point in attempting to focus disabled inputs
		return !target.disabled && !target.readOnly;
	default:
		return (/\bneedsfocus\b/).test(target.className);
	}
};


/**
 * Send a click event to the specified element.
 *
 * @param {EventTarget|Element} targetElement
 * @param {Event} event
 */
FastClick.prototype.sendClick = function(targetElement, event) {
	'use strict';
	var clickEvent, touch;

	// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
	if (document.activeElement && document.activeElement !== targetElement) {
		document.activeElement.blur();
	}

	touch = event.changedTouches[0];

	// Synthesise a click event, with an extra attribute so it can be tracked
	clickEvent = document.createEvent('MouseEvents');
	clickEvent.initMouseEvent('click', true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
	clickEvent.forwardedTouchEvent = true;
	targetElement.dispatchEvent(clickEvent);
};


/**
 * @param {EventTarget|Element} targetElement
 */
FastClick.prototype.focus = function(targetElement) {
	'use strict';
	var length;

	if (this.deviceIsIOS && targetElement.setSelectionRange) {
		length = targetElement.value.length;
		targetElement.setSelectionRange(length, length);
	} else {
		targetElement.focus();
	}
};


/**
 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
 *
 * @param {EventTarget|Element} targetElement
 */
FastClick.prototype.updateScrollParent = function(targetElement) {
	'use strict';
	var scrollParent, parentElement;

	scrollParent = targetElement.fastClickScrollParent;

	// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
	// target element was moved to another parent.
	if (!scrollParent || !scrollParent.contains(targetElement)) {
		parentElement = targetElement;
		do {
			if (parentElement.scrollHeight > parentElement.offsetHeight) {
				scrollParent = parentElement;
				targetElement.fastClickScrollParent = parentElement;
				break;
			}

			parentElement = parentElement.parentElement;
		} while (parentElement);
	}

	// Always update the scroll top tracker if possible.
	if (scrollParent) {
		scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
	}
};


/**
 * @param {EventTarget} targetElement
 * @returns {Element|EventTarget}
 */
FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {
	'use strict';

	// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
	if (eventTarget.nodeType === Node.TEXT_NODE) {
		return eventTarget.parentNode;
	}

	return eventTarget;
};


/**
 * On touch start, record the position and scroll offset.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onTouchStart = function(event) {
	'use strict';
	var targetElement, touch, selection;

	// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
	if (event.targetTouches.length > 1) {
		return true;
	}

	targetElement = this.getTargetElementFromEventTarget(event.target);
	touch = event.targetTouches[0];

	if (this.deviceIsIOS) {

		// Only trusted events will deselect text on iOS (issue #49)
		selection = window.getSelection();
		if (selection.rangeCount && !selection.isCollapsed) {
			return true;
		}

		if (!this.deviceIsIOS4) {

			// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
			// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
			// with the same identifier as the touch event that previously triggered the click that triggered the alert.
			// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
			// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
			if (touch.identifier === this.lastTouchIdentifier) {
				event.preventDefault();
				return false;
			}

			this.lastTouchIdentifier = touch.identifier;

			// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
			// 1) the user does a fling scroll on the scrollable layer
			// 2) the user stops the fling scroll with another tap
			// then the event.target of the last 'touchend' event will be the element that was under the user's finger
			// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
			// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
			this.updateScrollParent(targetElement);
		}
	}

	this.trackingClick = true;
	this.trackingClickStart = event.timeStamp;
	this.targetElement = targetElement;

	this.touchStartX = touch.pageX;
	this.touchStartY = touch.pageY;

	// Prevent phantom clicks on fast double-tap (issue #36)
	if ((event.timeStamp - this.lastClickTime) < 200) {
		event.preventDefault();
	}

	return true;
};


/**
 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.touchHasMoved = function(event) {
	'use strict';
	var touch = event.changedTouches[0], boundary = this.touchBoundary;

	if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
		return true;
	}

	return false;
};


/**
 * Update the last position.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onTouchMove = function(event) {
	'use strict';
	if (!this.trackingClick) {
		return true;
	}

	// If the touch has moved, cancel the click tracking
	if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
		this.trackingClick = false;
		this.targetElement = null;
	}

	return true;
};


/**
 * Attempt to find the labelled control for the given label element.
 *
 * @param {EventTarget|HTMLLabelElement} labelElement
 * @returns {Element|null}
 */
FastClick.prototype.findControl = function(labelElement) {
	'use strict';

	// Fast path for newer browsers supporting the HTML5 control attribute
	if (labelElement.control !== undefined) {
		return labelElement.control;
	}

	// All browsers under test that support touch events also support the HTML5 htmlFor attribute
	if (labelElement.htmlFor) {
		return document.getElementById(labelElement.htmlFor);
	}

	// If no for attribute exists, attempt to retrieve the first labellable descendant element
	// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
	return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
};


/**
 * On touch end, determine whether to send a click event at once.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onTouchEnd = function(event) {
	'use strict';
	var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

	if (!this.trackingClick) {
		return true;
	}

	// Prevent phantom clicks on fast double-tap (issue #36)
	if ((event.timeStamp - this.lastClickTime) < 200) {
		this.cancelNextClick = true;
		return true;
	}

	this.lastClickTime = event.timeStamp;

	trackingClickStart = this.trackingClickStart;
	this.trackingClick = false;
	this.trackingClickStart = 0;

	// On some iOS devices, the targetElement supplied with the event is invalid if the layer
	// is performing a transition or scroll, and has to be re-detected manually. Note that
	// for this to function correctly, it must be called *after* the event target is checked!
	// See issue #57; also filed as rdar://13048589 .
	if (this.deviceIsIOSWithBadTarget) {
		touch = event.changedTouches[0];

		// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
		targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
		targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
	}

	targetTagName = targetElement.tagName.toLowerCase();
	if (targetTagName === 'label') {
		forElement = this.findControl(targetElement);
		if (forElement) {
			this.focus(targetElement);
			if (this.deviceIsAndroid) {
				return false;
			}

			targetElement = forElement;
		}
	} else if (this.needsFocus(targetElement)) {

		// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
		// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
		if ((event.timeStamp - trackingClickStart) > 100 || (this.deviceIsIOS && window.top !== window && targetTagName === 'input')) {
			this.targetElement = null;
			return false;
		}

		this.focus(targetElement);

		// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
		if (!this.deviceIsIOS4 || targetTagName !== 'select') {
			this.targetElement = null;
			event.preventDefault();
		}

		return false;
	}

	if (this.deviceIsIOS && !this.deviceIsIOS4) {

		// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
		// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
		scrollParent = targetElement.fastClickScrollParent;
		if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
			return true;
		}
	}

	// Prevent the actual click from going though - unless the target node is marked as requiring
	// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
	if (!this.needsClick(targetElement)) {
		event.preventDefault();
		this.sendClick(targetElement, event);
	}

	return false;
};


/**
 * On touch cancel, stop tracking the click.
 *
 * @returns {void}
 */
FastClick.prototype.onTouchCancel = function() {
	'use strict';
	this.trackingClick = false;
	this.targetElement = null;
};


/**
 * Determine mouse events which should be permitted.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onMouse = function(event) {
	'use strict';

	// If a target element was never set (because a touch event was never fired) allow the event
	if (!this.targetElement) {
		return true;
	}

	if (event.forwardedTouchEvent) {
		return true;
	}

	// Programmatically generated events targeting a specific element should be permitted
	if (!event.cancelable) {
		return true;
	}

	// Derive and check the target element to see whether the mouse event needs to be permitted;
	// unless explicitly enabled, prevent non-touch click events from triggering actions,
	// to prevent ghost/doubleclicks.
	if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

		// Prevent any user-added listeners declared on FastClick element from being fired.
		if (event.stopImmediatePropagation) {
			event.stopImmediatePropagation();
		} else {

			// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
			event.propagationStopped = true;
		}

		// Cancel the event
		event.stopPropagation();
		event.preventDefault();

		return false;
	}

	// If the mouse event is permitted, return true for the action to go through.
	return true;
};


/**
 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
 * an actual click which should be permitted.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onClick = function(event) {
	'use strict';
	var permitted;

	// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
	if (this.trackingClick) {
		this.targetElement = null;
		this.trackingClick = false;
		return true;
	}

	// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
	if (event.target.type === 'submit' && event.detail === 0) {
		return true;
	}

	permitted = this.onMouse(event);

	// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
	if (!permitted) {
		this.targetElement = null;
	}

	// If clicks are permitted, return true for the action to go through.
	return permitted;
};


/**
 * Remove all FastClick's event listeners.
 *
 * @returns {void}
 */
FastClick.prototype.destroy = function() {
	'use strict';
	var layer = this.layer;

	if (this.deviceIsAndroid) {
		layer.removeEventListener('mouseover', this.onMouse, true);
		layer.removeEventListener('mousedown', this.onMouse, true);
		layer.removeEventListener('mouseup', this.onMouse, true);
	}

	layer.removeEventListener('click', this.onClick, true);
	layer.removeEventListener('touchstart', this.onTouchStart, false);
	layer.removeEventListener('touchmove', this.onTouchMove, false);
	layer.removeEventListener('touchend', this.onTouchEnd, false);
	layer.removeEventListener('touchcancel', this.onTouchCancel, false);
};


/**
 * Check whether FastClick is needed.
 *
 * @param {Element} layer The layer to listen on
 */
FastClick.notNeeded = function(layer) {
	'use strict';
	var metaViewport;

	// Devices that don't support touch don't need FastClick
	if (typeof window.ontouchstart === 'undefined') {
		return true;
	}

	if ((/Chrome\/[0-9]+/).test(navigator.userAgent)) {

		// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
		if (FastClick.prototype.deviceIsAndroid) {
			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && metaViewport.content.indexOf('user-scalable=no') !== -1) {
				return true;
			}

		// Chrome desktop doesn't need FastClick (issue #15)
		} else {
			return true;
		}
	}

	// IE10 with -ms-touch-action: none, which disables double-tap-to-zoom (issue #97)
	if (layer.style.msTouchAction === 'none') {
		return true;
	}

	return false;
};


/**
 * Factory method for creating a FastClick object
 *
 * @param {Element} layer The layer to listen on
 */
FastClick.attach = function(layer) {
	'use strict';
	return new FastClick(layer);
};


if (typeof define !== 'undefined' && define.amd) {

	// AMD. Register as an anonymous module.
	define(function() {
		'use strict';
		return FastClick;
	});
} else if (typeof module !== 'undefined' && module.exports) {
	module.exports = FastClick.attach;
	module.exports.FastClick = FastClick;
} else {
	window.FastClick = FastClick;
}
/*!
 * Smooth Scroll - v1.4.11 - 2013-07-15
 * https://github.com/kswedberg/jquery-smooth-scroll
 * Copyright (c) 2013 Karl Swedberg
 * Licensed MIT (https://github.com/kswedberg/jquery-smooth-scroll/blob/master/LICENSE-MIT)
 */
(function(l){function t(l){return l.replace(/(:|\.)/g,"\\$1")}var e="1.4.11",o={exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficent:2,preventDefault:!0},r=function(t){var e=[],o=!1,r=t.dir&&"left"==t.dir?"scrollLeft":"scrollTop";return this.each(function(){if(this!=document&&this!=window){var t=l(this);t[r]()>0?e.push(this):(t[r](1),o=t[r]()>0,o&&e.push(this),t[r](0))}}),e.length||this.each(function(){"BODY"===this.nodeName&&(e=[this])}),"first"===t.el&&e.length>1&&(e=[e[0]]),e};l.fn.extend({scrollable:function(l){var t=r.call(this,{dir:l});return this.pushStack(t)},firstScrollable:function(l){var t=r.call(this,{el:"first",dir:l});return this.pushStack(t)},smoothScroll:function(e){e=e||{};var o=l.extend({},l.fn.smoothScroll.defaults,e),r=l.smoothScroll.filterPath(location.pathname);return this.unbind("click.smoothscroll").bind("click.smoothscroll",function(e){var n=this,s=l(this),c=o.exclude,i=o.excludeWithin,a=0,f=0,h=!0,u={},d=location.hostname===n.hostname||!n.hostname,m=o.scrollTarget||(l.smoothScroll.filterPath(n.pathname)||r)===r,p=t(n.hash);if(o.scrollTarget||d&&m&&p){for(;h&&c.length>a;)s.is(t(c[a++]))&&(h=!1);for(;h&&i.length>f;)s.closest(i[f++]).length&&(h=!1)}else h=!1;h&&(o.preventDefault&&e.preventDefault(),l.extend(u,o,{scrollTarget:o.scrollTarget||p,link:n}),l.smoothScroll(u))}),this}}),l.smoothScroll=function(t,e){var o,r,n,s,c=0,i="offset",a="scrollTop",f={},h={};"number"==typeof t?(o=l.fn.smoothScroll.defaults,n=t):(o=l.extend({},l.fn.smoothScroll.defaults,t||{}),o.scrollElement&&(i="position","static"==o.scrollElement.css("position")&&o.scrollElement.css("position","relative"))),o=l.extend({link:null},o),a="left"==o.direction?"scrollLeft":a,o.scrollElement?(r=o.scrollElement,c=r[a]()):r=l("html, body").firstScrollable(),o.beforeScroll.call(r,o),n="number"==typeof t?t:e||l(o.scrollTarget)[i]()&&l(o.scrollTarget)[i]()[o.direction]||0,f[a]=n+c+o.offset,s=o.speed,"auto"===s&&(s=f[a]||r.scrollTop(),s/=o.autoCoefficent),h={duration:s,easing:o.easing,complete:function(){o.afterScroll.call(o.link,o)}},o.step&&(h.step=o.step),r.length?r.stop().animate(f,h):o.afterScroll.call(o.link,o)},l.smoothScroll.version=e,l.smoothScroll.filterPath=function(l){return l.replace(/^\//,"").replace(/(index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},l.fn.smoothScroll.defaults=o})(jQuery);
/*
* MIXITUP - A CSS3 and JQuery Filter & Sort Plugin
* Version: 1.5.4
* License: Creative Commons Attribution-NoDerivs 3.0 Unported - CC BY-ND 3.0
* http://creativecommons.org/licenses/by-nd/3.0/
* This software may be used freely on commercial and non-commercial projects with attribution to the author/copyright holder.
* Author: Patrick Kunka
* Copyright 2012-2013 Patrick Kunka, Barrel LLC, All Rights Reserved
* 
* http://mixitup.io
*/

(function(e){function q(c,b,g,d,a){function k(){l.unbind("webkitTransitionEnd transitionend otransitionend oTransitionEnd");b&&w(b,g,d,a);a.startOrder=[];a.newOrder=[];a.origSort=[];a.checkSort=[];r.removeStyle(a.prefix+"filter, filter, "+a.prefix+"transform, transform, opacity, display").css(a.clean).removeAttr("data-checksum");window.atob||r.css({display:"none",opacity:"0"});l.removeStyle(a.prefix+"transition, transition, "+a.prefix+"perspective, perspective, "+a.prefix+"perspective-origin, perspective-origin, "+
(a.resizeContainer?"height":""));"list"==a.layoutMode?(n.css({display:a.targetDisplayList,opacity:"1"}),a.origDisplay=a.targetDisplayList):(n.css({display:a.targetDisplayGrid,opacity:"1"}),a.origDisplay=a.targetDisplayGrid);a.origLayout=a.layoutMode;setTimeout(function(){r.removeStyle(a.prefix+"transition, transition");a.mixing=!1;if("function"==typeof a.onMixEnd){var b=a.onMixEnd.call(this,a);a=b?b:a}})}clearInterval(a.failsafe);a.mixing=!0;a.filter=c;if("function"==typeof a.onMixStart){var f=a.onMixStart.call(this,
a);a=f?f:a}for(var h=a.transitionSpeed,f=0;2>f;f++){var j=0==f?j=a.prefix:"";a.transition[j+"transition"]="all "+h+"ms linear";a.transition[j+"transform"]=j+"translate3d(0,0,0)";a.perspective[j+"perspective"]=a.perspectiveDistance+"px";a.perspective[j+"perspective-origin"]=a.perspectiveOrigin}var s=a.targetSelector,r=d.find(s);r.each(function(){this.data={}});var l=r.parent();l.css(a.perspective);a.easingFallback="ease-in-out";"smooth"==a.easing&&(a.easing="cubic-bezier(0.25, 0.46, 0.45, 0.94)");
"snap"==a.easing&&(a.easing="cubic-bezier(0.77, 0, 0.175, 1)");"windback"==a.easing&&(a.easing="cubic-bezier(0.175, 0.885, 0.320, 1.275)",a.easingFallback="cubic-bezier(0.175, 0.885, 0.320, 1)");"windup"==a.easing&&(a.easing="cubic-bezier(0.6, -0.28, 0.735, 0.045)",a.easingFallback="cubic-bezier(0.6, 0.28, 0.735, 0.045)");f="list"==a.layoutMode&&null!=a.listEffects?a.listEffects:a.effects;Array.prototype.indexOf&&(a.fade=-1<f.indexOf("fade")?"0":"",a.scale=-1<f.indexOf("scale")?"scale(.01)":"",a.rotateZ=
-1<f.indexOf("rotateZ")?"rotate(180deg)":"",a.rotateY=-1<f.indexOf("rotateY")?"rotateY(90deg)":"",a.rotateX=-1<f.indexOf("rotateX")?"rotateX(90deg)":"",a.blur=-1<f.indexOf("blur")?"blur(8px)":"",a.grayscale=-1<f.indexOf("grayscale")?"grayscale(100%)":"");var n=e(),t=e(),u=[],q=!1;"string"===typeof c?u=y(c):(q=!0,e.each(c,function(a){u[a]=y(this)}));"or"==a.filterLogic?(""==u[0]&&u.shift(),1>u.length?t=t.add(d.find(s+":visible")):r.each(function(){var a=e(this);if(q){var b=0;e.each(u,function(){this.length?
a.is("."+this.join(", ."))&&b++:0<b&&b++});b==u.length?n=n.add(a):t=t.add(a)}else a.is("."+u.join(", ."))?n=n.add(a):t=t.add(a)})):(n=n.add(l.find(s+"."+u.join("."))),t=t.add(l.find(s+":not(."+u.join(".")+"):visible")));c=n.length;var v=e(),p=e(),m=e();t.each(function(){var a=e(this);"none"!=a.css("display")&&(v=v.add(a),m=m.add(a))});if(n.filter(":visible").length==c&&!v.length&&!b){if(a.origLayout==a.layoutMode)return k(),!1;if(1==n.length)return"list"==a.layoutMode?(d.addClass(a.listClass),d.removeClass(a.gridClass),
m.css("display",a.targetDisplayList)):(d.addClass(a.gridClass),d.removeClass(a.listClass),m.css("display",a.targetDisplayGrid)),k(),!1}a.origHeight=l.height();if(n.length){d.removeClass(a.failClass);n.each(function(){var a=e(this);"none"==a.css("display")?p=p.add(a):m=m.add(a)});if(a.origLayout!=a.layoutMode&&!1==a.animateGridList)return"list"==a.layoutMode?(d.addClass(a.listClass),d.removeClass(a.gridClass),m.css("display",a.targetDisplayList)):(d.addClass(a.gridClass),d.removeClass(a.listClass),
m.css("display",a.targetDisplayGrid)),k(),!1;if(!window.atob)return k(),!1;r.css(a.clean);m.each(function(){this.data.origPos=e(this).offset()});"list"==a.layoutMode?(d.addClass(a.listClass),d.removeClass(a.gridClass),p.css("display",a.targetDisplayList)):(d.addClass(a.gridClass),d.removeClass(a.listClass),p.css("display",a.targetDisplayGrid));p.each(function(){this.data.showInterPos=e(this).offset()});v.each(function(){this.data.hideInterPos=e(this).offset()});m.each(function(){this.data.preInterPos=
e(this).offset()});"list"==a.layoutMode?m.css("display",a.targetDisplayList):m.css("display",a.targetDisplayGrid);b&&w(b,g,d,a);if(c=b)a:if(c=a.origSort,f=a.checkSort,c.length!=f.length)c=!1;else{for(j=0;j<f.length;j++)if(c[j].compare&&!c[j].compare(f[j])||c[j]!==f[j]){c=!1;break a}c=!0}if(c)return k(),!1;v.hide();p.each(function(){this.data.finalPos=e(this).offset()});m.each(function(){this.data.finalPrePos=e(this).offset()});a.newHeight=l.height();b&&w("reset",null,d,a);p.hide();m.css("display",
a.origDisplay);"block"==a.origDisplay?(d.addClass(a.listClass),p.css("display",a.targetDisplayList)):(d.removeClass(a.listClass),p.css("display",a.targetDisplayGrid));a.resizeContainer&&l.css("height",a.origHeight+"px");c={};for(f=0;2>f;f++)j=0==f?j=a.prefix:"",c[j+"transform"]=a.scale+" "+a.rotateX+" "+a.rotateY+" "+a.rotateZ,c[j+"filter"]=a.blur+" "+a.grayscale;p.css(c);m.each(function(){var b=this.data,c=e(this);c.hasClass("mix_tohide")?(b.preTX=b.origPos.left-b.hideInterPos.left,b.preTY=b.origPos.top-
b.hideInterPos.top):(b.preTX=b.origPos.left-b.preInterPos.left,b.preTY=b.origPos.top-b.preInterPos.top);for(var d={},f=0;2>f;f++){var j=0==f?j=a.prefix:"";d[j+"transform"]="translate("+b.preTX+"px,"+b.preTY+"px)"}c.css(d)});"list"==a.layoutMode?(d.addClass(a.listClass),d.removeClass(a.gridClass)):(d.addClass(a.gridClass),d.removeClass(a.listClass));setTimeout(function(){if(a.resizeContainer){for(var b={},c=0;2>c;c++){var d=0==c?d=a.prefix:"";b[d+"transition"]="all "+h+"ms ease-in-out";b.height=a.newHeight+
"px"}l.css(b)}v.css("opacity",a.fade);p.css("opacity",1);p.each(function(){var b=this.data;b.tX=b.finalPos.left-b.showInterPos.left;b.tY=b.finalPos.top-b.showInterPos.top;for(var c={},d=0;2>d;d++){var f=0==d?f=a.prefix:"";c[f+"transition-property"]=f+"transform, "+f+"filter, opacity";c[f+"transition-timing-function"]=a.easing+", linear, linear";c[f+"transition-duration"]=h+"ms";c[f+"transition-delay"]="0";c[f+"transform"]="translate("+b.tX+"px,"+b.tY+"px)";c[f+"filter"]="none"}e(this).css("-webkit-transition",
"all "+h+"ms "+a.easingFallback).css(c)});m.each(function(){var b=this.data;b.tX=0!=b.finalPrePos.left?b.finalPrePos.left-b.preInterPos.left:0;b.tY=0!=b.finalPrePos.left?b.finalPrePos.top-b.preInterPos.top:0;for(var c={},d=0;2>d;d++){var f=0==d?f=a.prefix:"";c[f+"transition"]="all "+h+"ms "+a.easing;c[f+"transform"]="translate("+b.tX+"px,"+b.tY+"px)"}e(this).css("-webkit-transition","all "+h+"ms "+a.easingFallback).css(c)});b={};for(c=0;2>c;c++)d=0==c?d=a.prefix:"",b[d+"transition"]="all "+h+"ms "+
a.easing+", "+d+"filter "+h+"ms linear, opacity "+h+"ms linear",b[d+"transform"]=a.scale+" "+a.rotateX+" "+a.rotateY+" "+a.rotateZ,b[d+"filter"]=a.blur+" "+a.grayscale,b.opacity=a.fade;v.css(b);l.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd",function(b){if(-1<b.originalEvent.propertyName.indexOf("transform")||-1<b.originalEvent.propertyName.indexOf("opacity"))-1<s.indexOf(".")?e(b.target).hasClass(s.replace(".",""))&&k():e(b.target).is(s)&&k()})},10);a.failsafe=setTimeout(function(){a.mixing&&
k()},h+400)}else{a.resizeContainer&&l.css("height",a.origHeight+"px");if(!window.atob)return k(),!1;v=t;setTimeout(function(){l.css(a.perspective);if(a.resizeContainer){for(var b={},c=0;2>c;c++){var e=0==c?e=a.prefix:"";b[e+"transition"]="height "+h+"ms ease-in-out";b.height=a.minHeight+"px"}l.css(b)}r.css(a.transition);if(t.length){b={};for(c=0;2>c;c++)e=0==c?e=a.prefix:"",b[e+"transform"]=a.scale+" "+a.rotateX+" "+a.rotateY+" "+a.rotateZ,b[e+"filter"]=a.blur+" "+a.grayscale,b.opacity=a.fade;v.css(b);
l.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd",function(b){if(-1<b.originalEvent.propertyName.indexOf("transform")||-1<b.originalEvent.propertyName.indexOf("opacity"))d.addClass(a.failClass),k()})}else a.mixing=!1},10)}}function w(c,b,g,d){function a(b,a){var d=isNaN(1*b.attr(c))?b.attr(c).toLowerCase():1*b.attr(c),e=isNaN(1*a.attr(c))?a.attr(c).toLowerCase():1*a.attr(c);return d<e?-1:d>e?1:0}function k(a){"asc"==b?f.prepend(a).prepend(" "):f.append(a).append(" ")}g.find(d.targetSelector).wrapAll('<div class="mix_sorter"/>');
var f=g.find(".mix_sorter");d.origSort.length||f.find(d.targetSelector+":visible").each(function(){e(this).wrap("<s/>");d.origSort.push(e(this).parent().html().replace(/\s+/g,""));e(this).unwrap()});f.empty();if("reset"==c)e.each(d.startOrder,function(){f.append(this).append(" ")});else if("default"==c)e.each(d.origOrder,function(){k(this)});else if("random"==c){if(!d.newOrder.length){for(var h=d.startOrder.slice(),j=h.length,s=j;s--;){var r=parseInt(Math.random()*j),l=h[s];h[s]=h[r];h[r]=l}d.newOrder=
h}e.each(d.newOrder,function(){f.append(this).append(" ")})}else if("custom"==c)e.each(b,function(){k(this)});else{if("undefined"===typeof d.origOrder[0].attr(c))return console.log("No such attribute found. Terminating"),!1;d.newOrder.length||(e.each(d.origOrder,function(){d.newOrder.push(e(this))}),d.newOrder.sort(a));e.each(d.newOrder,function(){k(this)})}d.checkSort=[];f.find(d.targetSelector+":visible").each(function(b){var a=e(this);0==b&&a.attr("data-checksum","1");a.wrap("<s/>");d.checkSort.push(a.parent().html().replace(/\s+/g,
""));a.unwrap()});g.find(d.targetSelector).unwrap()}function y(c){c=c.replace(/\s{2,}/g," ");var b=c.split(" ");e.each(b,function(c){"all"==this&&(b[c]="mix_all")});""==b[0]&&b.shift();return b}var x={init:function(c){return this.each(function(){var b={targetSelector:".mix",filterSelector:".filter",sortSelector:".sort",buttonEvent:"click",effects:["fade","scale"],listEffects:null,easing:"smooth",layoutMode:"grid",targetDisplayGrid:"inline-block",targetDisplayList:"block",listClass:"",gridClass:"",
transitionSpeed:600,showOnLoad:"all",sortOnLoad:!1,multiFilter:!1,filterLogic:"or",resizeContainer:!0,minHeight:0,failClass:"fail",perspectiveDistance:"3000",perspectiveOrigin:"50% 50%",animateGridList:!0,onMixLoad:null,onMixStart:null,onMixEnd:null,container:null,origOrder:[],startOrder:[],newOrder:[],origSort:[],checkSort:[],filter:"",mixing:!1,origDisplay:"",origLayout:"",origHeight:0,newHeight:0,isTouch:!1,resetDelay:0,failsafe:null,prefix:"",easingFallback:"ease-in-out",transition:{},perspective:{},
clean:{},fade:"1",scale:"",rotateX:"",rotateY:"",rotateZ:"",blur:"",grayscale:""};c&&e.extend(b,c);this.config=b;e.support.touch="ontouchend"in document;e.support.touch&&(b.isTouch=!0,b.resetDelay=350);b.container=e(this);var g=b.container,d;a:{d=g[0];for(var a=["Webkit","Moz","O","ms"],k=0;k<a.length;k++)if(a[k]+"Transition"in d.style){d=a[k];break a}d="transition"in d.style?"":!1}b.prefix=d;b.prefix=b.prefix?"-"+b.prefix.toLowerCase()+"-":"";g.find(b.targetSelector).each(function(){b.origOrder.push(e(this))});
if(b.sortOnLoad){var f;e.isArray(b.sortOnLoad)?(d=b.sortOnLoad[0],f=b.sortOnLoad[1],e(b.sortSelector+"[data-sort="+b.sortOnLoad[0]+"][data-order="+b.sortOnLoad[1]+"]").addClass("active")):(e(b.sortSelector+"[data-sort="+b.sortOnLoad+"]").addClass("active"),d=b.sortOnLoad,b.sortOnLoad="desc");w(d,f,g,b)}for(f=0;2>f;f++)d=0==f?d=b.prefix:"",b.transition[d+"transition"]="all "+b.transitionSpeed+"ms ease-in-out",b.perspective[d+"perspective"]=b.perspectiveDistance+"px",b.perspective[d+"perspective-origin"]=
b.perspectiveOrigin;for(f=0;2>f;f++)d=0==f?d=b.prefix:"",b.clean[d+"transition"]="none";"list"==b.layoutMode?(g.addClass(b.listClass),b.origDisplay=b.targetDisplayList):(g.addClass(b.gridClass),b.origDisplay=b.targetDisplayGrid);b.origLayout=b.layoutMode;f=b.showOnLoad.split(" ");e.each(f,function(){e(b.filterSelector+'[data-filter="'+this+'"]').addClass("active")});g.find(b.targetSelector).addClass("mix_all");"all"==f[0]&&(f[0]="mix_all",b.showOnLoad="mix_all");var h=e();e.each(f,function(){h=h.add(e("."+
this))});h.each(function(){var a=e(this);"list"==b.layoutMode?a.css("display",b.targetDisplayList):a.css("display",b.targetDisplayGrid);a.css(b.transition)});setTimeout(function(){b.mixing=!0;h.css("opacity","1");setTimeout(function(){"list"==b.layoutMode?h.removeStyle(b.prefix+"transition, transition").css({display:b.targetDisplayList,opacity:1}):h.removeStyle(b.prefix+"transition, transition").css({display:b.targetDisplayGrid,opacity:1});b.mixing=!1;if("function"==typeof b.onMixLoad){var a=b.onMixLoad.call(this,
b);b=a?a:b}},b.transitionSpeed)},10);b.filter=b.showOnLoad;e(b.sortSelector).bind(b.buttonEvent,function(){if(!b.mixing){var a=e(this),c=a.attr("data-sort"),d=a.attr("data-order");if(a.hasClass("active")){if("random"!=c)return!1}else e(b.sortSelector).removeClass("active"),a.addClass("active");g.find(b.targetSelector).each(function(){b.startOrder.push(e(this))});q(b.filter,c,d,g,b)}});e(b.filterSelector).bind(b.buttonEvent,function(){if(!b.mixing){var a=e(this);if(!1==b.multiFilter)e(b.filterSelector).removeClass("active"),
a.addClass("active"),b.filter=a.attr("data-filter"),e(b.filterSelector+'[data-filter="'+b.filter+'"]').addClass("active");else{var c=a.attr("data-filter");a.hasClass("active")?(a.removeClass("active"),b.filter=b.filter.replace(RegExp("(\\s|^)"+c),"")):(a.addClass("active"),b.filter=b.filter+" "+c)}q(b.filter,null,null,g,b)}})})},toGrid:function(){return this.each(function(){var c=this.config;"grid"!=c.layoutMode&&(c.layoutMode="grid",q(c.filter,null,null,e(this),c))})},toList:function(){return this.each(function(){var c=
this.config;"list"!=c.layoutMode&&(c.layoutMode="list",q(c.filter,null,null,e(this),c))})},filter:function(c){return this.each(function(){var b=this.config;b.mixing||(e(b.filterSelector).removeClass("active"),e(b.filterSelector+'[data-filter="'+c+'"]').addClass("active"),q(c,null,null,e(this),b))})},sort:function(c){return this.each(function(){var b=this.config,g=e(this);if(!b.mixing){e(b.sortSelector).removeClass("active");if(e.isArray(c)){var d=c[0],a=c[1];e(b.sortSelector+'[data-sort="'+c[0]+'"][data-order="'+
c[1]+'"]').addClass("active")}else e(b.sortSelector+'[data-sort="'+c+'"]').addClass("active"),d=c,a="desc";g.find(b.targetSelector).each(function(){b.startOrder.push(e(this))});q(b.filter,d,a,g,b)}})},multimix:function(c){return this.each(function(){var b=this.config,g=e(this);multiOut={filter:b.filter,sort:null,order:"desc",layoutMode:b.layoutMode};e.extend(multiOut,c);b.mixing||(e(b.filterSelector).add(b.sortSelector).removeClass("active"),e(b.filterSelector+'[data-filter="'+multiOut.filter+'"]').addClass("active"),
"undefined"!==typeof multiOut.sort&&(e(b.sortSelector+'[data-sort="'+multiOut.sort+'"][data-order="'+multiOut.order+'"]').addClass("active"),g.find(b.targetSelector).each(function(){b.startOrder.push(e(this))})),b.layoutMode=multiOut.layoutMode,q(multiOut.filter,multiOut.sort,multiOut.order,g,b))})},remix:function(c){return this.each(function(){var b=this.config,g=e(this);b.origOrder=[];g.find(b.targetSelector).each(function(){var c=e(this);c.addClass("mix_all");b.origOrder.push(c)});!b.mixing&&"undefined"!==
typeof c&&(e(b.filterSelector).removeClass("active"),e(b.filterSelector+'[data-filter="'+c+'"]').addClass("active"),q(c,null,null,g,b))})}};e.fn.mixitup=function(c,b){if(x[c])return x[c].apply(this,Array.prototype.slice.call(arguments,1));if("object"===typeof c||!c)return x.init.apply(this,arguments)};e.fn.removeStyle=function(c){return this.each(function(){var b=e(this);c=c.replace(/\s+/g,"");var g=c.split(",");e.each(g,function(){var c=RegExp(this.toString()+"[^;]+;?","g");b.attr("style",function(a,
b){if(b)return b.replace(c,"")})})})}})(jQuery);
// Fastclick
// ------------------
$(function() {
    FastClick.attach(document.body);
});

// Load more
// ------------------
var loadMoreContent = "";

$("a.load-more").click(function(e){
    e.preventDefault();
    if(loadMoreContent == "")
        loadMoreContent = $(this).prev().html();
    
    $(this).prev().append(loadMoreContent);
});

// Scroll TOP
// ------------------
$("a.scroll-top").click(function(e){
    e.preventDefault();
    $.smoothScroll({offset:0});
})

// Portfolio
// ------------------
$(".item-choice a").click(function(e){
   e.preventDefault();
});
$('#Grid').mixitup();
