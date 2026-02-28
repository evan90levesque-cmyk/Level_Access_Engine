import {aeKernel} from "../../Kernel/AEKernel.js";
import {uelAccurate_FromRoot} from "../../Utils/aeUtils.js";

/**
 * Returns variant 3 test result for failed tests - as a JSON object
 * @param {Node} node to test - this should only be web components which are in the DOM (e.g. on the top level = BODY Web Component)
 * @returns {Node} The node (representing the web component) with its expanded - properly formed - content
 */
export function ast_runMarkDown_GetExpandedShadDOM_ForNode(node) {
	// testType = testType || testTypes.AUTOMATIC;
	
	aeKernel.markdownFuncs_failedToRun = []; // for resilience
	aeKernel.tests_failedToRun         = []; // for resilience
	
	// build the Virtualised DOM
	if (aeKernel.captureDOM()) { // this should ideally be a stripped version of captureDOM, but the additional overhead in the toolbar context is small.  Also, maintainability is is improved, and code reduced.
		// css selectors don't work on :root e.g. an A element placed as rootTestNode would not be able to be located.
		// This means we have to get the parent element; then remove all other contents apart from captured node
		// The selector done in this manner works in environments that have non-html tags e.g. <tile:importantattribute
		var nodeCapture_DOMUEL = uelAccurate_FromRoot(node);

		// it is important to use the quote types as shown to avoid syntax errors e.g. [data-ae_uel='[id='main']>*:nth-child(2)']
		// IMPORTANT: (need to add to test writing doc) we have to use [data-ae_uel=] format in selectors, as nodeCapture will change the DOM structure and stop the ids from working directly
		var cssSelectorForCapturedNode = '[data-ae_domuel="' + nodeCapture_DOMUEL.replace(/"/g, '\\"') + '"]';

		return aeKernel.rootTestNode.querySelector(cssSelectorForCapturedNode);
	} else {
		return null;
	}
}
