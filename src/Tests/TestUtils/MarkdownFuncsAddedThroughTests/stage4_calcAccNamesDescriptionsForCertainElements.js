import {logger} from "../../../Utils/Logger.js";
import {retrieveComputedCssStyles, AccNamePrototypeNameSpace} from "../../../Utils/aeUtils.js";
import {isRunningTooLong, getRuntimeExceededMessage} from "../../../Markdown/MarkdownUtils/mdUtils";

// your IDE may say the import below isn't used, but don't believe its lies
import * as CalcNames from "../../../Lib/AccName.js";
const calcNames = window[AccNamePrototypeNameSpace].calcNames;

/**
 *
 */
export let stage4_calcAccNamesForCertainElements_errors = [];
export let stage4_calcAccDescriptionsForCertainElements_errors = [];

export let visibilityCache = new WeakMap();

function invokeCalcNames(rootTestDocument, node) {
	return calcNames(node, null, false, {
		document: rootTestDocument,
		isHidden: function(node, refNode) {
			if (!node || node.nodeType !== 1 || node === refNode) {
				return false;
			}

			if (visibilityCache.has(node)) {
        return visibilityCache.get(node);
      }

      const hasExplicitlyVisibleChildren =
        node.querySelector('[data-ae_styles*="visibility;visible"]') !== null;

      if (hasExplicitlyVisibleChildren) {
        visibilityCache.set(node, false);
        return false;
      }

      const hasInvisibleAttribute = node.hasAttribute("data-ae_invis");
      visibilityCache.set(node, hasInvisibleAttribute);

      return hasInvisibleAttribute;
		},
		getStyleObject: function(node) {
			return retrieveComputedCssStyles(node);
		},
		getPseudoElStyleObj: function(node, position) {
			return retrieveComputedCssStyles(node, position);
		}
	});
}

/*
 * Pre-Testing: Finds elements that need an accessible name calculating, then calculates the value and sets their date-ae_an attribute.
 * @returns {Number}
 */
export function calcAccNamesForCertainElements(rootTestNode) {
	try {
		const els = rootTestNode.querySelectorAll("a:not([data-ae_ar]), area:not([data-ae_ar]), audio:not([data-ae_ar]), button:not([data-ae_ar]), canvas:not([data-ae_ar]), embed:not([data-ae_ar]), fieldset:not([data-ae_ar]), frame:not([data-ae_ar]), iframe, img:not([data-ae_ar]), input:not([data-ae_ar]), meter:not([data-ae_ar]), object:not([data-ae_ar]), optgroup:not([data-ae_ar]), progress:not([data-ae_ar]), select:not([data-ae_ar]), svg:not([data-ae_ar]), svg[data-ae_ar*='graphics-'], textarea:not([data-ae_ar]), video:not([data-ae_ar]), *[data-ae_ar^='img'], *[data-ae_ar='link'], *[data-ae_ar='radiogroup'], *[data-ae_ar='checkbox'], *[data-ae_ar='radio'], *[data-ae_ar='slider'], *[data-ae_ar='textbox'], *[data-ae_ar='combobox'], *[data-ae_ar='searchbox'], *[data-ae_ar='button'], *[data-ae_ar='spinbutton'], aside:not([data-ae_ar]), main:not([data-ae_ar]), nav:not([data-ae_ar]), *[data-ae_ar='dialog'], dialog:not([data-ae_ar]), picture:not([data-ae_ar]), figure:not([data-ae_ar]), summary:not([data-ae_ar]), *[data-ae_ar^='graphics'], *[data-ae_ar='region'], *[data-ae_ar='progressbar']");
		for (let i = els.length; i--;) {
			if (isRunningTooLong()) {
				throw getRuntimeExceededMessage();
			}

			const el = els[i];

			const payload = invokeCalcNames(rootTestNode.ownerDocument, el);
			if (payload.error) {
				throw payload.error;
			}

			const accessibleName = payload.name || null;
			if (accessibleName !== null) {
				el.setAttribute("data-ae_an", accessibleName.toLowerCase());

				if (payload.placeholder) {
					el.setAttribute("data-ae_anp", "true");
				}

				if (payload.userAgent) {
					el.setAttribute("data-ae_anua", "true");
				}
			}
		}
		return rootTestNode;
	} catch (err) {
		logger.error("stage4_calcAccNamesForCertainElements", err);
		stage4_calcAccNamesForCertainElements_errors.push("stage4_calcAccNamesForCertainElements");
		return null;
	}
}

/*
 * Pre-Testing: Finds elements that need an accessible description calculating, then calculates the value and sets their date-ae_ad attribute.
 * @returns {Number}
 */
export function calcAccDescriptionsForCertainElements(rootTestNode) {
	try {
		const els = rootTestNode.querySelectorAll("a[target='_blank']:not([data-ae_ar])");
		for (let i = els.length; i--;) {
			if (isRunningTooLong()) {
				throw getRuntimeExceededMessage();
			}

			const el = els[i];

			const payload = invokeCalcNames(rootTestNode.ownerDocument, el);
			if (payload.error) {
				throw payload.error;
			}

			const accessibleDescription = payload.desc || null;
			if (accessibleDescription !== null) {
				el.setAttribute("data-ae_ad", accessibleDescription);
			}
		}
		return rootTestNode;
	} catch (err) {
		logger.error(err);
		stage4_calcAccDescriptionsForCertainElements_errors.push("stage4_calcAccDescriptionsForCertainElements");
		return null;
	}
}