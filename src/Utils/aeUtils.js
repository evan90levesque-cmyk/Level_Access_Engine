import {logger} from "./Logger.js";
import {detectShadowDOM} from "../Markdown/stage1_markDown_liveDOM_copyInfo.js";
import {isRunningTooLong, getRuntimeExceededMessage} from "../Markdown/MarkdownUtils/mdUtils";

// the below is required for CalcNames
// this is here as opposed to somewhere later in the import chain because we need to ensure modifying the window object is done prior to importing CalcNames
export const AccNamePrototypeNameSpace = 'LevelAccess_CalcNames';
window.AccNamePrototypeNameSpace = AccNamePrototypeNameSpace;

/**
 * Enum for AMP test types
 * @type {{GLOBAL: number, IMPLIED_GLOBAL: number, AUTOMATIC: number, GUIDED_AUTOMATIC: number, MANUAL: number, GUIDED_MANUAL: number, ADVISORY: number, PREVIEW_MODE: number}}
 */
export const testTypes = {
	GLOBAL          : 2,
	IMPLIED_GLOBAL  : 3,
	AUTOMATIC       : 4,
	GUIDED_AUTOMATIC: 5,
	MANUAL          : 6,
	GUIDED_MANUAL   : 30,
	ADVISORY        : 31,
	PREVIEW_MODE    : -2 // There is no corresponding AMP value for these
};

/**
 * Enum for MediaTypes to filter tests
 * @type {{WEB:number, IOS:number, ANDROID:number}}
 */
export const mediaTypes = {
	WEB		:1,
	IOS		:2,
	ANDROID	:3
};

/**
 * Enum for Alchemy fix types
 * @type {{ATTRIBUTE: number, TAG: number, INNERHTML: number}}
 */
export const fixTypes = {
    ATTRIBUTE   : 1,
    TAG         : 2,
    INNERHTML   : 3
};

/**
 * 1x1 gif
 * @type {string}
 */
export const dummyImage = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

/**
 * An object of accepted IANA language subtags with regions codes whose keys are are the subtags and values are always 'true'.
 * 
 * @type {Object}
 * 
 */
export const ACCEPTED_LANGUAGE_FULLTAGS={
	"en-au": true,
	"en-ca": true,
	"en-gb": true,
	"en-us": true,
	"es-es": true,
	"es-mx": true,
	"fr-ca": true,
	"fr-fr": true
};

/**
 * An object of accepted IANA language subtags whose keys are the subtags and values are always 'true'.
 * (An object is used here rather than an array or set or something for both computational complexity and browser support purposes.)
 *
 * @type {Object}
 */
export const ACCEPTED_LANGUAGE_SUBTAGS = {
	// two-character tags
	aa: true,
	ab: true,
	ae: true,
	af: true,
	ak: true,
	am: true,
	an: true,
	ar: true,
	as: true,
	av: true,
	ay: true,
	az: true,
	ba: true,
	be: true,
	bg: true,
	bh: true,
	bi: true,
	bm: true,
	bn: true,
	bo: true,
	br: true,
	bs: true,
	ca: true,
	ce: true,
	ch: true,
	co: true,
	cr: true,
	cs: true,
	cu: true,
	cv: true,
	cy: true,
	da: true,
	de: true,
	dv: true,
	dz: true,
	ee: true,
	el: true,
	en: true,
	eo: true,
	es: true,
	et: true,
	eu: true,
	fa: true,
	ff: true,
	fi: true,
	fj: true,
	fo: true,
	fr: true,
	fy: true,
	ga: true,
	gd: true,
	gl: true,
	gn: true,
	gu: true,
	gv: true,
	ha: true,
	he: true,
	hi: true,
	ho: true,
	hr: true,
	ht: true,
	hu: true,
	hy: true,
	hz: true,
	ia: true,
	id: true,
	ie: true,
	ig: true,
	ii: true,
	ik: true,
	in: true,
	io: true,
	is: true,
	it: true,
	iu: true,
	iw: true,
	ja: true,
	ji: true,
	jv: true,
	jw: true,
	ka: true,
	kg: true,
	ki: true,
	kj: true,
	kk: true,
	kl: true,
	km: true,
	kn: true,
	ko: true,
	kr: true,
	ks: true,
	ku: true,
	kv: true,
	kw: true,
	ky: true,
	la: true,
	lb: true,
	lg: true,
	li: true,
	ln: true,
	lo: true,
	lt: true,
	lu: true,
	lv: true,
	mg: true,
	mh: true,
	mi: true,
	mk: true,
	ml: true,
	mn: true,
	mo: true,
	mr: true,
	ms: true,
	mt: true,
	my: true,
	na: true,
	nb: true,
	nd: true,
	ne: true,
	ng: true,
	nl: true,
	nn: true,
	no: true,
	nr: true,
	nv: true,
	ny: true,
	oc: true,
	oj: true,
	om: true,
	or: true,
	os: true,
	pa: true,
	pi: true,
	pl: true,
	ps: true,
	pt: true,
	qu: true,
	rm: true,
	rn: true,
	ro: true,
	ru: true,
	rw: true,
	sa: true,
	sc: true,
	sd: true,
	se: true,
	sg: true,
	sh: true,
	si: true,
	sk: true,
	sl: true,
	sm: true,
	sn: true,
	so: true,
	sq: true,
	sr: true,
	ss: true,
	st: true,
	su: true,
	sv: true,
	sw: true,
	ta: true,
	te: true,
	tg: true,
	th: true,
	ti: true,
	tk: true,
	tl: true,
	tn: true,
	to: true,
	tr: true,
	ts: true,
	tt: true,
	tw: true,
	ty: true,
	ug: true,
	uk: true,
	ur: true,
	uz: true,
	ve: true,
	vi: true,
	vo: true,
	wa: true,
	wo: true,
	xh: true,
	yi: true,
	yo: true,
	za: true,
	zh: true,
	zu: true,
	
	// three-character tags
	arc: true,
	bsq: true,
	cdo: true,
	chk: true,
	cho: true,
	chr: true,
	cjy: true,
	cmn: true,
	cpx: true,
	czh: true,
	czo: true,
	din: true,
	fil: true,
	gan: true,
	hak: true,
	haw: true,
	hmn: true,
	hsn: true,
	kar: true,
	khw: true,
	lzh: true,
	mnp: true,
	nan: true,
	pon: true,
	syr: true,
	wuu: true,
	yue: true,
	zhx: true
};

export const IMG_SUSPICIOUS_TEXT_CSS_SELECTOR_POSTFIXES = [
	'[data-ae_an*=".gif"]',
	'[data-ae_an*=".jpg"]',
	'[data-ae_an*=".png"]',
	'[data-ae_an="img"]',
	'[data-ae_an="spacer"]',
	'[data-ae_an="alt"]',
	'[data-ae_an="blank"]',
	'[data-ae_an="_"]',
	'[data-ae_an="null"]',
	'[data-ae_an="photo"]',
	'[data-ae_an="image"]',
	'[data-ae_an="corner"]',
	'[data-ae_an="tag"]',
	'[data-ae_an="picture"]',
	'[data-ae_an="header"]',
	'[data-ae_an="histogram"]',
	'[data-ae_an="chart"]',
	'[data-ae_an="undefined"]'
];

const specialTagNames = ["HTML", "HEAD", "BODY", "FRAMESET"];

/**
 * Replaces the native cloneNode function, as cloneNode causes isses in pages with elements which contain shadowRoots
 * @param {*} node
 * @param {*} deep
 */
export function cloneThisNode(node, deep) {
	try {
		if (node.nodeType === 3) {
			var textNode = document.createTextNode(node.textContent);
			return textNode;
		}

		// if rootNode is a web component - we create a div in its place

		var tree        = null;
		var treeTagName = node.tagName.toLowerCase();

		const createDiv = () => {
			// likely tried to create a non-standard HTML element
			// fall back to creating a div instead
			tree = document.createElement("div");
			tree.setAttribute("data-ae_origTagName", treeTagName);
		};

		if (treeTagName.indexOf("-") !== -1) {
			// might be a web component
			createDiv();
		} else {
			try {
				tree = document.createElement(treeTagName);
			} catch (err) {
				if (err instanceof DOMException) {
					createDiv();
				} else {
					throw err;
				}
			}
		}

		// copy across all the attributes
		var attrs = node.attributes;
		for (var j = attrs.length; j--;) {
			var attr = attrs[j];

			if (attr.name !== "is") {
				// if this is href or src - we need to change that
				try {
					// catches invalid attributes, and prevents copying them
					if ( attr.name === "muted" ) {
						tree.muted = ( attr.value !== false && attr.value !== "false" );
					}
					tree.setAttribute(attr.name, attr.value);
				}
				catch (err) {
					// do nothing
				}
			}
		}

		// deal with shallow clone
		if ((deep === undefined) || (deep === false)) {
			return tree;
		}

		// deal with deep clone

		// initially
		var parentEl    = tree;
		var x           = 0;
		var origTagName = false;

		let markEach = function(n) {
			do {
				if (n.nodeType === 1) {
					let tagName = n.tagName;

					const createChildDiv = () => {
						// likely tried to create a non-standard HTML element
						// fall back to creating a div instead
						origTagName = tagName.toLowerCase();
						tagName = "div";
						childElement = document.createElement(tagName);
					};

					let childElement;
					if (tagName.indexOf("-") !== -1) {
						// might be a web component
						createChildDiv();
					} else {
						try {
							childElement = document.createElement(tagName);
						} catch (err) {
							if (err instanceof DOMException) {
								createChildDiv();
							} else {
								throw err;
							}
						}
					}
					
					var attrs = n.attributes;
					for (var j = attrs.length; j--;) {
						var attr = attrs[j];
						var attrName = attr.name;
						var attrValue = attr.value;
						
						// if this is href or src - we need to change that
						if (attrName !== "is") {
							try {
								// catches invalid attributes, and prevents copying them
								if ( attrName === "muted" ) {
									childElement.muted = ( attrValue !== false && attrValue !== "false" );
								}
								childElement.setAttribute(attrName, attrValue);
							}
							catch (err) {
								// do nothing
							}
						}
					}

					if ((n.childNodes) && (n.childNodes.length > 0)) {
							childElement.setAttribute("data-ae_uel", n.getAttribute("data-ae_uel"));
						if (origTagName !== false) {
							childElement.setAttribute("data-ae_origTagName", origTagName);
							origTagName = false;
						}

						parentEl.appendChild(childElement);
						parentEl = childElement;
						x = x + 1;
						var firstChild = n.childNodes[0];
						if (firstChild) {
							markEach(firstChild);
						}
					}
					else {
						// no child elements, but could contain text
						if (origTagName !== false) {
							childElement.setAttribute("data-ae_origTagName", origTagName);
							origTagName = false;
						}
						
						childElement.innerHTML = n.innerHTML;
						parentEl.appendChild(childElement);
					}
				}
				if (n.nodeType === 3) {
					// just append that value to parentEl
					var textNode = document.createTextNode(n.textContent);
					parentEl.appendChild(textNode);
				}
				if (n.nextSibling === null) {
					x        = x - 1;
					parentEl = getParent(parentEl);
				}
			} while (n = n.nextSibling)
		};
		
		var firstChild = node.firstChild;
		if (firstChild) {
			markEach(firstChild);
		}
		else {
			tree.innerHTML = node.innerHTML;
			return tree;
		}
		return tree;
	}
	catch (err) {
		logger.error(err);
		return null;
	}
}

/**
 * Specific version used in markdown stages - Replaces the native cloneNode function, as cloneNode causes isses in pages with elements which contain shadowRoots
 * @param {*} node
 * @param {*} deep
 */
export function cloneThisNodeForMarkDown(node, deep) {

	if (detectShadowDOM === false || node.nodeType === Node.COMMENT_NODE) {
		return node.cloneNode(deep);
	}

	if (node.nodeType === 3) {
		var textNode = document.createTextNode(node.textContent);
		return textNode;
	}
	
	// issue - certain pure HTML elements are not able to have a shadowRoot - but if they are created using the "is" attribute they can have
	// we create a div in its place, whatever the element - then record it's original tagName
	
	var tree        = null;
	var treeTagName = node.tagName.toLowerCase();
	tree            = document.createElement("div");
	tree.setAttribute("data-ae_origTagName", treeTagName);
	
	// we need to record all element tagNames now, set everything to a div which can have a shadowRoot, then convert everything back in 3d - to its original tag name, so the tests work
	// if "is" attribute is used, we use the original tagName instead of the "is" as the is is only extending base functionality.
	
	// copy across all the attributes
	var attrs = node.attributes;
	for (var j = attrs.length; j--;) {
		if (isRunningTooLong()) {
			throw getRuntimeExceededMessage();
		}

		var attr = attrs[j];
		if (attr.name !== "is") {
			// if this is href or src - we need to change that
			try {
				// catches invalid attributes, and prevents copying them
				tree.setAttribute(attr.name, attr.value);
			}
			catch (err) {
				// do nothing
			}
		}
	}
	
	// deal with shallow clone
	if ((deep === undefined) || (deep === false)) {
		return tree;
	}
	
	// deal with deep clone
	
	// initially
	var parentEl    = tree;
	var x           = 0;
	var origTagName = false;
	
	try {
		let markEach = function(n) {
			do {
				if (isRunningTooLong()) {
					throw getRuntimeExceededMessage();
				}

				if (n.nodeType === 1) {
					
					var tagName = n.tagName;
					origTagName = tagName.toLowerCase();
					
					var childElement = document.createElement("div");
					childElement.setAttribute("data-ae_origTagName", origTagName);
					
					var attrs = n.attributes;
					for (var j = attrs.length; j--;) {
						var attr = attrs[j];
						var attrName = attr.name;
						var attrValue = attr.value;
						// if this is href or src - we need to change that
						if (attrName !== "is") {
							// if this is href or src - we need to change that
							try {
								// catches invalid attributes, and prevents copying them
								childElement.setAttribute(attrName, attrValue);
							}
							catch (err) {
								// do nothing
							}
						}
					}

					if ((n.childNodes) && (n.childNodes.length > 0)) {
						childElement.setAttribute("data-ae_uel", n.getAttribute("data-ae_uel"));
						parentEl.appendChild(childElement);
						parentEl = childElement;
						x = x + 1;
						var firstChild = n.childNodes[0];
						if (firstChild) {
							markEach(firstChild);
						}
					}
					else {
						// strip contents of script and style elements
						if ((origTagName !== "script") && (origTagName !== "style") && (origTagName !== "template") && (origTagName !== "noscript")) {
							childElement.innerHTML = n.innerHTML;
						}
						parentEl.appendChild(childElement);
					}
				}
				if (n.nodeType === 3) {
					// just append that value to parentEl
					var textNode = document.createTextNode(n.textContent);
					parentEl.appendChild(textNode);
				}
				if (n.nextSibling === null) {
					x        = x - 1;
					parentEl = getParent(parentEl);
				}
			} while (n = n.nextSibling)
		};

		if (node.childNodes.length > 0) {
			markEach(node.childNodes[0]);
		}
		else {
			// copy across innerHTML
			if ((origTagName !== "script") && (origTagName !== "style") && (origTagName !== "template") && (origTagName !== "noscript")) {
				tree.innerHTML = node.innerHTML;
			}
		}
		return tree;
	}
	catch (err) {
		logger.error(err);
		return null;
	}
}

/*
 * Pre-Testing: retrieves computed styles copied over from css in original into an object
 * @returns {Obj}
 */
export function retrieveComputedCssStyles(node, pseudoElt) {
	const oIAttributes = node.getAttribute("data-ae_styles");
	const oI = (oIAttributes !== null) ? oIAttributes.split(";") : [];

	const originalInformation = {};
	for (let j = oI.length; j--;) {
		if (j % 2 !== 0) {
			continue;
		}

		let propName = null;

		if (pseudoElt) {
			if (oI[j].indexOf(pseudoElt) !== -1) {
				propName = oI[j].replace(pseudoElt, "");
			} else {
				continue;
			}
		} else if (oI[j].indexOf(':before') === -1 && oI[j].indexOf(':after') === -1) {
			propName = oI[j];
		} else {
			continue;
		}

		if (propName) {
			let propValue = oI[j + 1];
			if (propName === 'content') {
				propValue = propValue.replace(/^"|\\|"$/g, "");
			}
			originalInformation[propName] = propValue;
		}
	}
	return originalInformation;
}

/**
 * Stage 3b markdown function + stage 5
 * @param {Element} node
 */
export function aeSibFunc(node) {
	// previous sibling - due to branch search generating previous id is tricky without attribute
	var sib             = "1";
	var previousSibling = node.previousElementSibling;
	if (previousSibling) {
		var prevSib = previousSibling.getAttribute("data-ae_sib");
		if (prevSib) {
			sib = parseInt(prevSib) + 1;
		}
	}
	return sib;
}

/**
 * Stage 3b markdown function + stage 5
 * This is the sibling position of the element in the actual DOM, rather than the Virtual DOM created for testing
 * @param {Element} node
 */
export function aeDOMSibFunc(node) {
	// previous sibling - due to branch search generating previous id is tricky without attribute
	var sib             = "1";
	var previousSibling = node.previousElementSibling;
	if (previousSibling) {
		var prevSib = previousSibling.getAttribute("data-ae_domsib");
		if (prevSib) {
			sib = parseInt(prevSib) + 1;
		}
	}
	return sib;
}

/**
 * parentElement is not natively supported on a number of elements
 * @param {Element} element
 */
export function getParent(element) {
	let parentElement = element.parentElement;
	if (parentElement === undefined) {
		parentElement = element.parentNode;
	}

	return parentElement;
}

/**
 * Used in uelAccurate_FromRoot
 * @param {Element} element
 * @param {boolean} tagSpecific
 * @returns {Number}
 */
function getPositionInParent(element, tagSpecific = false) {
	let position = 1;
	let selectedElement = element;
	while ((selectedElement = selectedElement.previousElementSibling) !== null) {
		if (!tagSpecific || (selectedElement.tagName === element.tagName)) {
			position++;
		}
	}

	return position;
}

/**
 * Calculates a long CSS selector (UEL = Unique Element Locator) for finding that unique element from root node
 * Use *:nth-child chain until we hit the body
 * @param {Element} element
 * @returns {String}
 */
export function uelAccurate_FromRoot(element) {
	// use lowercase tag names in locators;
	// the use of uppercase tag names in selectors means elements (svg, math) get missed in IE

	if (specialTagNames.includes(element.tagName)) {
		return element.tagName.toLowerCase();
	}
	
	let locator = `*:nth-child(${getPositionInParent(element)})`;
	let parent = getParent(element);
	let previousParent = element;
	
	while (parent.tagName !== "HTML") {
		const parentTagName = parent.tagName;
		if (specialTagNames.includes(parentTagName)) {
			const posSecondBracket = locator.indexOf(")") + 1;
			const locatorSecondPart = locator.slice(posSecondBracket, locator.length);
			const locatorFirstPart = `${previousParent.tagName.toLowerCase()}:nth-of-type(${getPositionInParent(previousParent, true)})`;
			locator = `${parentTagName.toLowerCase()}>${locatorFirstPart}${locatorSecondPart}`;
		} else {
			locator = `*:nth-child(${getPositionInParent(parent)})>${locator}`;
		}

		previousParent = parent;
		parent = getParent(parent);
	}

	return locator;
}

/**
 * Stage 5, 6 markdown function, which sets data-ae_uel
 * @param {Element} node
 */
export function aeUELFunc(node) {
	return aeBaseUELFunc(node, "data-ae_uel", "data-ae_sib");
}

/**
 * Stage 5, 6 markdown function, which sets data-ae_domuel
 * @param {Element} node
 */
export function aeDOMUELFunc(node) {
	return aeBaseUELFunc(node, "data-ae_domuel", "data-ae_domsib");
}

/**
 * Stage 5, 6 markdown function, which sets data-ae_domuel
 * @param {Element} node
 * @param attUel
 * @param attSib
 * @returns {*}
 */
export function aeBaseUELFunc(node, attUel, attSib) {
	let uel = null;

	const parent = getParent(node);

	let host;
	try {
		host = node.getRootNode().host;
	} catch (err) {
		host = undefined;
	}

	if ((parent === null) && (typeof(host) !== "undefined")) {
		// top level child in a web component
		uel = host.getAttribute(attUel) + "|"; // indicates that we are now in a web component
	}

	const nameTagName = node.tagName;
	if (specialTagNames.includes(nameTagName)) {
		uel = nameTagName.toLowerCase();
	} else {
		if (parent !== null) {
			uel = parent.getAttribute(attUel);
		}

		if (uel === null) {
			uel = uelAccurate_FromRoot(node);
		} else {
			// we also have to place the web component locator in the uel
			// e.g. if uel element has data-ae_shdwrt then break uel and start it with [data-ae_shdwrt='']

			if (uel.charAt(uel.length - 1) === "|") {
				uel = `${uel}:host>*:nth-child(${node.getAttribute(attSib)})`;
			} else if (specialTagNames.includes(uel.toUpperCase())) {
				uel = `${uel}>${node.tagName.toLowerCase()}:nth-of-type(${getPositionInParent(node, true)})`;
			} else {
				uel = `${uel}>*:nth-child(${node.getAttribute(attSib)})`;
			}
		}
	}

	return uel;
}

    /**
     * CSS breaks down as a locator within ShadowDOM in some older browsers
	 * @param {Element} startNode
	 * @param locator
     */
    function findElementThroughTreeBranch(startNode, locator) {
        var locatedNode = null;
        var markEach = function markEach(n) {
            do {
                if (n.nodeType === 1) {
                    
                    if (n.getAttribute("data-ae_domuel") === locator) {
                        locatedNode = n;
                        break;
                    }

                    if (n.shadowRoot) {
                        // need to paint all nodes in all shadowRoots.
                        // this makes it recursive
                        var firstChild = n.shadowRoot.firstElementChild;
                        if (firstChild !== null) {
                            markEach(n.shadowRoot.firstElementChild);
                        }
                    }

                    if (n.hasChildNodes()) {
                        if (n.firstChild !== null) {
                            markEach(n.firstChild);
                        }
                    }
                    // slot - even if it has children returns false
                    else {
                        if (n.childNodes) {
                            if (n.childNodes.length > 0) {
                                markEach(n.childNodes[0]);
                            }
                        }
                    }
                }
            } while (n = n.nextSibling);
        };

        markEach(startNode);
        return locatedNode;
    }


/**
 * Get element information from original shadowRoot
 * @param {*} elementShdwrtLocation
 * @param {HTMLDocument} testDoc
 */
export function getElementFromOrigShadowRoot(elementShdwrtLocation, testDoc) {
	// [id='app']|[id='footer']|>*:nth-child(2)>*:nth-child(3)>*:nth-child(6)>*:nth-child(1)
	// we split the locator on "|". The piece before this is the web component which indicates 
	// recursively in web components
	var element = null;
	try {

		var levels = elementShdwrtLocation.split("|");
		// IMPORTANT: we need to reduce the length by 1 
		// as the last piece of the locator is the css selector within the lowest level of web components
		var currentShadowDOMHost = null;
		for (var i = 0, len = levels.length; i < len; i++) {
			// recursively find, and move to each shadowDOMHost
			var locator = levels[i];
			if (i !== len - 1) {
				// this is handling locating subsequent shadowDOMs
				// if the locator looks like *:nth-child(5) it is easy for other content to be located instead of the direct child needed
				// as the direct child could be located after other matching content has been located
				// so we recognise *:nth-child(x) 
				// and if we match it - we move other to using direct children instead.
				// noting that there is no :root css locator in a shadowDOM seemingly.
				if (currentShadowDOMHost === null) {
					currentShadowDOMHost = testDoc.querySelector(locator);
				}
				else {
					// here is the main issue for the *:nth-child(x) locator
					// if the locator starts with *:nth-child( and there is no > then we'll have recognised the issue
					if ((locator.indexOf("*:nth-child(") === 0) && (locator.indexOf(">") === -1)) {
						var number           = parseInt(locator.substring(12, locator.indexOf(")")));
						//IE11 lacks .children method so we fake one if needed
						fixChildren(currentShadowDOMHost);
						currentShadowDOMHost = currentShadowDOMHost.shadowRoot.children[number - 1];
					}
					else {
						currentShadowDOMHost = currentShadowDOMHost.shadowRoot.querySelector(locator);
					}
				}
			}
			else {
				if (currentShadowDOMHost === null) {
					element = testDoc.querySelector(locator);
				}
				else {
					// here is the main issue for the *:nth-child(x) locator
					// if the locator starts with *:nth-child( and there is no > then we'll have recognised the issue
					if ((locator.indexOf("*:nth-child(") === 0) && (locator.indexOf(">") === -1)) {
						var number = parseInt(locator.substring(12, locator.indexOf(")")));
						//IE11 lacks .children method so we fake one if needed
						fixChildren(currentShadowDOMHost);
						element    = currentShadowDOMHost.shadowRoot.children[number - 1];
					}
					else {
						element = currentShadowDOMHost.shadowRoot.querySelector(locator);
					}
				}
			}
		}
		if (element === null) {
			// needs to be made more efficient - this is a brute force way to find the elements when css does not work e.g. FF59
			element = findElementThroughTreeBranch(testDoc.querySelector("body, frameset"), elementShdwrtLocation);
    	}
	}

	catch (err) {
		logger.error('Error', "aeUtils: getElementFromOrigShadowRoot", err);
	}
	
	return element;
}

/**
 * To be moved to aeUtils as it is used in 3c also
 * @param {Element} n
 * @param {HTMLDocument} testDoc
 */
export function rebuildShadowDOMFromOrig(n, testDoc) {
	// domuel should be available from the clone
	try {
		const domuel = n.getAttribute("data-ae_domuel");
		// use domuel to get the shadowDOM element 
	
		const origElement = getElementFromOrigShadowRoot(domuel, testDoc);
		if (origElement) {
			const origShadRoot = origElement.shadowRoot;
			
			if (origShadRoot) {
				if (n.shadowRoot) {
					// remove all content from existing shadowRoot as it will be partial
					n.shadowRoot.innerHTML = "";
					
					// copy across and append children from original shadowRoot
					//IE11 lacks .children method so we fake one if needed
					fixChildren(origShadRoot);
					const childrenOfOrigElementShadowRoot = origShadRoot.childNodes;
					for (let c = 0, len = childrenOfOrigElementShadowRoot.length; c < len; c++) {
						n.shadowRoot.appendChild(cloneThisNodeForMarkDown(childrenOfOrigElementShadowRoot[c], true));
					}
				} else {
					// we create a shadow root on the element which was meant to have one
					// then we copy across the shadowRoot from the original element
					const addedShadowRoot = n.attachShadow({mode: 'open'});
					//IE11 lacks .children method so we fake one if needed
					fixChildren(origShadRoot);
					const childrenOfOrigElementShadowRoot = origShadRoot.childNodes;
					for (let c = 0, len = childrenOfOrigElementShadowRoot.length; c < len; c++) {
						addedShadowRoot.appendChild(cloneThisNodeForMarkDown(childrenOfOrigElementShadowRoot[c], true));
					}
				}
			}
		}
	} catch (err) {
		logger.error('Error', "aeUtils: rebuildShadowDOMFromOrig", err);
	}
}

/**
 * Determines if a name or id value is valid
 * @param {String} attValue
 * @returns {Boolean}
 */
export function isValidIdOrName(attValue) {
	// Must contain at least one character
	// Must not contain any space characters
	var id = attValue.trim();
	if (id !== "") {
		if (id.indexOf(" ") === -1) {
			return true;
		}
	}
	return false;
}

/**
 * Doctors IE11 lack of .children method on nodes by adding a fake one
 * @param {Element} node
 * @returns {Element} node
 */
export function fixChildren(node) {
	if (typeof(node.children) === "undefined") {
		var children = [];
		var theChildren = node.childNodes;
		for (var i = 0, len_theChildren = theChildren.length; i < len_theChildren; i++) {
			var nodeToCheck = theChildren[i];
			if (nodeToCheck.nodeType === 1) {
				children[children.length] = nodeToCheck;
			}
		}
		node.children = children;
	}
	return node;
}

/**
 * Returns original width, height, x, y from css styles
 * Used in Mobile
 * @returns {{width: string, height:string, x: string, y: string}}
 */
export function origPositionAttsFromStyle(styleString) {
	const stylePieces = styleString.split(";");
	const result = {
		width: "width",
		height: "height",
		x: "x",
		y: "y",
	};

	for (var i = 0, len_style = stylePieces.length; i < len_style; i++) {
		var piece = stylePieces[i].trim();
		if (piece.indexOf(":") !== -1) {
			var bits = piece.split(":");
			switch (bits[0]) {
				case "width":
					result.width = bits[1].replace("px", "").trim();
					break;
				case "height":
					result.height = bits[1].replace("px", "").trim();
					break;
				case "left":
					result.x = bits[1].replace("px", "").trim();
					break;
				case "top":
					result.y = bits[1].replace("px", "").trim();
					break;
			}
		}
	}
	return result;
}

/**
 * Returns original bounds (left, top, right, bottom) from css styles
 *
 * @param styleString
 * @returns {{top: string, left:string, bottom: string, right: string}}
 */

export function getOriginalBoundsFromStyle(styleString) {
	const position = origPositionAttsFromStyle(styleString);

	return {
		left: position.x,
		top: position.y,
		right: String(parseInt(position.x) + parseInt(position.width)),
		bottom: String(parseInt(position.y) + parseInt(position.height)),
	}
}

function decToHex(dec) {
	var hex = parseInt(dec).toString(16);
	return hex.length === 1 ? '0' + hex : hex;
}
export function rgbToHex(rgb) {
	var color = rgb.replace('rgb(', '').replace(')', '').split(',');

	for (var i = 0; i < color.length; i++) {
		color[i] = decToHex(color[i]);
	}

	return '#' + color.join('');
}

// source: https://stackoverflow.com/a/14794066
export function isInt(value) {
	let x;
	if (isNaN(value)) {
		return false;
	}
	x = parseFloat(value);
	return (x | 0) === x;
}

/**
 * Returns html of instance with ae attributes removed
 * @returns {Node}
 */
export function removeAEAttributes(node) {
	let clone = cloneThisNode(node, true);

	// remove ae data-attributes from clone
	const attributes = clone.attributes;
	for (let i = attributes.length; i--;) {
		const name = attributes[i].name;

		if (name.substring(0, 8) === "data-ae_" || name.substring(0, 8) === "data-la-") {
			clone.removeAttribute(name);
		}
	}

	// remove ae data-attributes from any children of clone
	const descends = clone.querySelectorAll("*");
	for (let j = descends.length; j--;) {
		const desc = descends[j];
		const descAttributes = desc.attributes;

		for (let k = descAttributes.length; k--;) {
			const dname = descAttributes[k].name;
			if (dname.substring(0, 8) === "data-ae_" || dname.substring(0, 8) === "data-la-") {
				desc.removeAttribute(dname);
			}
		}
	}

	return clone;
}
