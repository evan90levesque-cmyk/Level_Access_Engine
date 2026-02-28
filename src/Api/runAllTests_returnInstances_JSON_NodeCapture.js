import {aeKernel} from "../Kernel/AEKernel.js";
import {testTypes, mediaTypes, uelAccurate_FromRoot, getParent} from "../Utils/aeUtils.js";
import {formatOutcomeForToolbar} from "../Api/ApiUtils/resultsFormatter_Toolbar.js";
import {resultsAsJSON} from "../Api/ApiUtils/resultsAsJSON.js";

/**
 * Returns variant 3 test result for failed tests - as a JSON object
 * @param {Node} node to test
 * @param {Number} testType to use for gathering tests
 * @returns {Object} The outcomes object holds results for each "fail" in accordance with AMP data model
 */
export function runAllTests_returnInstances_JSON_NodeCapture(node, testType = testTypes.AUTOMATIC) {
	testType = testType || testTypes.AUTOMATIC;
	
	aeKernel.markdownFuncs_failedToRun = {}; // for resilience
	aeKernel.tests_failedToRun         = {}; // for resilience

	var outcomes = [];

	if (aeKernel.captureDOM()) {
		// css selectors don't work on :root e.g. an A element placed as rootTestNode would not be able to be located.
		// This means we have to get the parent element; then remove all other contents apart from captured node
		// The selector done in this manner works in environments that have non-html tags e.g. <tile:importantattribute

		var nodeCapture_UEL = uelAccurate_FromRoot(node);
		// it is important to use the quote types as shown to avoid syntax errors e.g. [data-ae_uel='[id='main']>*:nth-child(2)']
		// IMPORTANT: (need to add to test writing doc) we have to use [data-ae_uel=] format in selectors, as nodeCapture will change the DOM structure and stop the ids from working directly
		var cssSelectorForCapturedNode = '[data-ae_uel="' + nodeCapture_UEL.replace(/"/g, '\\"') + '"]';

		var capturedNode = aeKernel.rootTestNode.querySelector(cssSelectorForCapturedNode);
		var parentElementOfCapturedNode = getParent(capturedNode);

		var children = parentElementOfCapturedNode.children;
		for (var j = children.length; j--;) {
			if (children[j] !== capturedNode) {
				parentElementOfCapturedNode.removeChild(children[j]);
			}
		}

		aeKernel.rootTestNode = parentElementOfCapturedNode;

		var tests = aeKernel.getTestsToRun(testType);
		var keys = Object.keys(tests);

		for (var i = 0, len_keys = keys.length; i < len_keys; i++) {
			var key = keys[i];
			var test = tests[key];

			//This is a web API so only run tests of type WEB
			if (test.mediaType == mediaTypes.WEB) {

				try {
					var testFunc = test.testFunc();
					// added in break-up
					testFunc.rootTestNode = aeKernel.rootTestNode;
					var testRes = testFunc.getResult("instances");

					if (testRes.outcome === "fail") {
						var instances = testRes.instances;
						for (var j = 0, len_instances = instances.length; j < len_instances; j++) {
							var outcome = formatOutcomeForToolbar(instances[j], test, testType);
							outcomes.push(outcome);
						}
					}
				} catch (err) {
					aeKernel.tests_failedToRun[key] = err;
				}
			}
		}
	}
	
	return resultsAsJSON.stringify(outcomes);
}
