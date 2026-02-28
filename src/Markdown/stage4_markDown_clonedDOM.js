import {logger} from "../Utils/Logger.js";
import {isRunningTooLong, getRuntimeExceededMessage} from "./MarkdownUtils/mdUtils";

export let stage4_markDownFunc_errors = {};

/*
 * Pre-Testing: Finds elements that have role attribute and adds an "data-ae_ar" attribute.
 * Note" this does not add null value to all elements without a role, or a role='' - which is needed.  That happens in stage2_runoff.
 * @returns {Number}
 */
function addRoleAtt(rootTestNode) {
	try {
		var els = rootTestNode.querySelectorAll("*[role]:not([role=''])");
		for (var i = els.length; i--;) {
			if (isRunningTooLong()) {
				throw getRuntimeExceededMessage();
			}

			var el            = els[i];
			var roleAttribute = el.getAttribute("role").trim();
			var firstRole     = roleAttribute.split(/\s+/)[0];
			el.setAttribute("data-ae_ar", firstRole.toLowerCase());
		}
		return rootTestNode;
	}
	catch (err) {
		logger.error('Error', 'stage4_addRoleAtt', err);
		stage4_markDownFunc_errors["stage4_addRoleAtt"] = err;
		return null;
	}
}

/*
 * Pre-Testing: Check if it's running inside iframe. Set data-ae_iniframe=true attribute if it's in iframe.
 * @returns {Node | null}
 */
function addInIframeAtt(rootTestNode, aeKernal) {
	try {
		const attributeName = "data-ae_iniframe";
		if (aeKernal.isInIframe()) {
			//Assumes top element is the HTML element
			rootTestNode.setAttribute(attributeName, "true");

			const elements = rootTestNode.querySelectorAll('head, body');
			for (const element of elements) {
				element.setAttribute(attributeName, "true");
			}
		}
		return rootTestNode;
	}
	catch(err) {
		logger.error('Error', 'stage4_addInIframeAtt', err);
		stage4_markDownFunc_errors['stage4_addInIframeAtt'] = err;
		return null;
	}
}

/*
 * Pre-Testing: Finds elements that are display:none / visibility:hidden data-ae_invis=true attribute.
 * exclude "datalist, param, script, template" as they are display:none by default.
 * @returns {Number}
 */
function invisEls(rootTestNode) {
	try {
		var els = rootTestNode.querySelectorAll("*[data-ae_styles*='visibility;hidden'], *[data-ae_styles*='display;none']:not(datalist):not(param):not(script):not(template), noscript");
		for (var i = els.length; i--;) {
			if (isRunningTooLong()) {
				throw getRuntimeExceededMessage();
			}

			els[i].setAttribute("data-ae_invis", "true");
		}
		return rootTestNode;
	}
	catch (err) {
		logger.error('Error', 'stage4_invisEls', err);
		stage4_markDownFunc_errors["stage4_invisEls"] = err;
		return null;
	}
}

function anyAncestorHasDisplayNone(child) {
	let parentNode = child.parentNode;
	while (parentNode != null && parentNode.nodeName !== '#document') {
		const parentNodeAeStyles = parentNode.getAttribute("data-ae_styles") ?? '';
		if (parentNodeAeStyles.includes("display;none")) {
			return true;
		}
		parentNode = parentNode.parentNode;
	}
	return false;
}

function checkIfParentHasVisibilityVisibleAttr(child) {
    let parentNode = child.parentNode;
    while (parentNode != null && parentNode.nodeName !== '#document') {
		if (parentNode.getAttribute("data-ae_styles") && parentNode.getAttribute("data-ae_styles").includes("visibility;visible")) {
            return true;
        }
		if (parentNode.getAttribute("data-ae_styles") && parentNode.getAttribute("data-ae_styles").includes("visibility;hidden")) {
            return false;
        }
    	parentNode = parentNode.parentNode;
	}
   return false;
}

/*
 * Pre-Testing: Finds elements that are descendants of elements marked as data-ae_invis.
 * @returns {Number}
 */
function invisElsDescendants(rootTestNode) {
	try {
		var els = rootTestNode.querySelectorAll("*[data-ae_invis] *");
		for (var i = els.length; i--;) {
			if (isRunningTooLong()) {
				throw getRuntimeExceededMessage();
			}

			if (anyAncestorHasDisplayNone(els[i])) {
				els[i].setAttribute("data-ae_invis", "true");
				continue;
			}

			if ((checkIfParentHasVisibilityVisibleAttr(els[i]) || (els[i].getAttribute("data-ae_styles") && els[i].getAttribute("data-ae_styles").includes("visibility;visible")))) {
				if ((els[i].getAttribute("data-ae_styles") && els[i].getAttribute("data-ae_styles").includes("visibility;hidden"))) {
					els[i].setAttribute("data-ae_invis", "true");
				} else {
					els[i].removeAttribute("data-ae_invis")
				}
			} else {
				els[i].setAttribute("data-ae_invis", "true");
			}
		}
		return rootTestNode;
	}
	catch (err) {
		logger.error('Error', 'stage4_invisElsDescendants', err);
		stage4_markDownFunc_errors["stage4_invisElsDescendants"] = err;
		return null;
	}
}

/*
 * Pre-Testing: Finds elements that are aria-hidden and sets data-ae_at_hidden=true attribute.
 * @returns {Number}
 */
function ariaHiddenEls(rootTestNode) {
	try {
		var els = rootTestNode.querySelectorAll("*[aria-hidden='true']");
		for (var i = els.length; i--;) {
			if (isRunningTooLong()) {
				throw getRuntimeExceededMessage();
			}

			els[i].setAttribute("data-ae_at_hidden", "true");
		}
		return rootTestNode;
	}
	catch (err) {
		logger.error('Error', 'stage4_ariaHiddenEls', err);
		stage4_markDownFunc_errors["stage4_ariaHiddenEls"] = err;
		return null;
	}
}

/*
 * Pre-Testing: Finds elements that are descendants of elements marked as data-ae_at_hidden.
 * @returns {Number}
 */
function ariaHiddenElsDescendants(rootTestNode) {
	try {
		var els = rootTestNode.querySelectorAll("*[data-ae_at_hidden] *");
		for (var i = els.length; i--;) {
			if (isRunningTooLong()) {
				throw getRuntimeExceededMessage();
			}

			els[i].setAttribute("data-ae_at_hidden", "true");
		}
		return rootTestNode;
	}
	catch (err) {
		logger.error('Error', 'stage4_ariaHiddenElsDescendants', err);
		stage4_markDownFunc_errors["stage4_ariaHiddenElsDescendants"] = err;
		return null;
	}
}

/*
 * Pre-Testing: Finds elements that marked data-ae_ar=none; or data-ae_ar=presentation.
 * @returns {Number}
 */
function ariaRolePreNone(rootTestNode) {
	try {
		var els = rootTestNode.querySelectorAll("*[data-ae_ar='none'], *[data-ae_ar='presentation']");
		for (var i = els.length; i--;) {
			if (isRunningTooLong()) {
				throw getRuntimeExceededMessage();
			}

			els[i].setAttribute("data-ae_at_none", "true");
		}
		return rootTestNode;
	}
	catch (err) {
		logger.error('Error', 'stage4_ariaRolePreNone', err);
		stage4_markDownFunc_errors["stage4_ariaRolePreNone"] = err;
		return null;
	}
}

/*
 * Pre-Testing: Finds elements impacted from having a parent marked data-ae_at_none=true.
 * @returns {Number}
 */
function affectedByParentsAria(rootTestNode) {
	try {
		var els = rootTestNode.querySelectorAll("*[data-ae_at_none] *[data-ae_ar='columnheader'], *[data-ae_at_none] *[data-ae_ar='gridcell'], *[data-ae_at_none] *[data-ae_ar='rowheader'], *[data-ae_at_none] *[data-ae_ar='row'], *[data-ae_at_none] *[data-ae_ar='listitem'], *[data-ae_at_none] *[data-ae_ar='menuitem'], *[data-ae_at_none] *[data-ae_ar='menuitemcheckbox'], *[data-ae_at_none] *[data-ae_ar='menuitemradio'], *[data-ae_at_none] *[data-ae_ar='option'], *[data-ae_at_none] *[data-ae_ar='rowgroup'], *[data-ae_at_none] *[data-ae_ar='tab'], *[data-ae_at_none] *[data-ae_ar='treeitem'], *[data-ae_at_none] *[data-ae_ar='menubar'], *[data-ae_at_none] *[data-ae_ar='grid'], *[data-ae_at_none] thead:not([data-ae_ar]), *[data-ae_at_none] tbody:not([data-ae_ar]), *[data-ae_at_none] tfoot:not([data-ae_ar]), *[data-ae_at_none] tr:not([data-ae_ar]), *[data-ae_at_none] th:not([data-ae_ar]), *[data-ae_at_none] td:not([data-ae_ar]), *[data-ae_at_none] caption:not([data-ae_ar]), *[data-ae_at_none] li:not([data-ae_ar]), *[data-ae_at_none] dt:not([data-ae_ar]), *[data-ae_at_none] dd:not([data-ae_ar]), *[data-ae_at_none] option:not([data-ae_ar]), *[data-ae_at_none] menuitem:not([data-ae_ar])");
		for (var i = els.length; i--;) {
			if (isRunningTooLong()) {
				throw getRuntimeExceededMessage();
			}

			els[i].setAttribute("data-ae_at_none", "true");
		}
		return rootTestNode;
	}
	catch (err) {
		logger.error('Error', 'stage4_affectedByParentsAria', err);
		stage4_markDownFunc_errors["stage4_affectedByParentsAria"] = err;
		return null;
	}
}

/*
 * Pre-Testing: Finds elements that do not have a data-ae_at_hidden and data-ae_at_none attribute.
 * @returns {Number}
 */
function availableToAT(rootTestNode) {
	try {
		var els = rootTestNode.querySelectorAll("*:not([data-ae_at_hidden]):not([data-ae_at_none]):not(template):not(script):not(style)");
		for (var i = els.length; i--;) {
			if (isRunningTooLong()) {
				throw getRuntimeExceededMessage();
			}

			els[i].setAttribute("data-ae_avat", "true");
		}
		return rootTestNode;
	}
	catch (err) {
		logger.error('Error', 'stage4_availableToAT', err);
		stage4_markDownFunc_errors["stage4_availableToAT"] = err;
		return null;
	}
}

/*
 * Pre-Testing: Finds elements that are descendants of elements marked as data-ae_invis.
 * @returns {Number}
 */
function shadowElsDescendants(rootTestNode) {
	try {
		const els = rootTestNode.querySelectorAll("*[data-ae_shdwrt] *");
		for (let i = els.length; i--;) {
			if (isRunningTooLong()) {
				throw getRuntimeExceededMessage();
			}

			els[i].setAttribute("data-ae_inshdw", "true");
		}
		return rootTestNode;
	} catch (err) {
		logger.error('Error', 'stage4_shadowElsDescendants', err);
		stage4_markDownFunc_errors["stage4_shadowElsDescendants"] = err;
		return null;
	}
}

function emptyOpenDialogs(rootTestNode) {
	try {
		const els = rootTestNode.querySelectorAll('dialog[open]:not([hidden])[data-ae_avat], *[data-ae_ar="dialog"]:not([hidden]):not([data-ae_invis])[data-ae_avat]');
		for (let i = els.length; i--;) {
			if (isRunningTooLong()) {
				throw getRuntimeExceededMessage();
			}

			const el = els[i];
			if (el.innerHTML.trim().length <= 0) {
				el.setAttribute("data-ae_emptyopendialog", "true");
			}
		}
		return rootTestNode;
	} catch (err) {
		logger.error('Error', 'stage4_emptyOpenDialogs', err);
		stage4_markDownFunc_errors["stage4_emptyOpenDialogs"] = err;
		return null;
	}
}

/**
 *
 */
export function stage4_markDown_clonedDOM(rootTestNode, stage4MarkdownFuncs, aeKernal) {
	stage4_markDownFunc_errors = {};

	// standard functions used in a large number of tests
	
	// rootTestNode = removeShadowRootsInVirtualDOM(rootTestNode);
	// The following is removed, as in a DOM where the ShadowDOM models have already been registered
	// changing the innerHTML will recreate the elements - with their DOM model
	// rootTestNode = replaceHTMLEntitiesInBody(rootTestNode);
	rootTestNode = addInIframeAtt(rootTestNode, aeKernal);
	rootTestNode = addRoleAtt(rootTestNode);
	rootTestNode = invisEls(rootTestNode);
	rootTestNode = invisElsDescendants(rootTestNode);
	rootTestNode = ariaHiddenEls(rootTestNode);
	rootTestNode = ariaHiddenElsDescendants(rootTestNode);
	rootTestNode = ariaRolePreNone(rootTestNode);
	rootTestNode = affectedByParentsAria(rootTestNode);
	rootTestNode = availableToAT(rootTestNode);
	rootTestNode = shadowElsDescendants(rootTestNode);

	if (__ACCESS_ENGINE_TYPE__ === "professional") {
		rootTestNode = emptyOpenDialogs(rootTestNode);
	}
	
	// collect all functions added from tests
	let addedStage4Funcs = Object.keys(stage4MarkdownFuncs);
	// each added stage2 func must be standalone, and not rely on any other
	// so, they can be run in any order
	for (let i=addedStage4Funcs.length; i--;) {
		rootTestNode = stage4MarkdownFuncs[addedStage4Funcs[i]](rootTestNode);
	}
	return rootTestNode;
}