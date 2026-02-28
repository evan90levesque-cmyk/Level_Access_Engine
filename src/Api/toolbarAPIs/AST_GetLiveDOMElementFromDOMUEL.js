import {aeKernel} from "../../Kernel/AEKernel.js";
import {getElementFromOrigShadowRoot} from "../../Utils/aeUtils.js";

/**
 * Gets the liveDOM element using the locator - supporting Web Components
 * @param {*} locator
 */
export function ast_GetLiveDOMElementFromDOMUEL(locator) {
	return getElementFromOrigShadowRoot(locator, aeKernel.document);
}
