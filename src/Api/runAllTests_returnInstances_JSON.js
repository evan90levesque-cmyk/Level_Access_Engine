import {aeKernel} from "../Kernel/AEKernel.js";
import {testTypes, mediaTypes} from "../Utils/aeUtils.js";
import {formatOutcomeForToolbar} from "../Api/ApiUtils/resultsFormatter_Toolbar.js";
import {resultsAsJSON} from "../Api/ApiUtils/resultsAsJSON.js";
import {logger} from "../Utils/Logger.js";

/**
 * Returns variant 3 test result for failed tests - as a JSON object
 * @param {Number} testType
 * @returns {Object} The outcomes object holds results for each "fail" in accordance with AMP data model
 */
export function runAllTests_returnInstances_JSON(testType = testTypes.AUTOMATIC) {
	aeKernel.markdownFuncs_failedToRun = {}; // for resilience
	aeKernel.tests_failedToRun         = {}; // for resilience

	var outcomes = [];

	if (aeKernel.captureDOM()) {
		var tests    = aeKernel.getTestsToRun(testType);
		var keys     = Object.keys(tests);

		for (var i = 0, len_keys = keys.length; i < len_keys; i++) {
			var key  = keys[i];
			var test = tests[key];

			//This is a web API so only run tests of type 1
			if(test.mediaType==mediaTypes.WEB){

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
				}
				catch (err) {
					aeKernel.tests_failedToRun[key] = err;
					logger.error('Error', err);
				}
			}
		}
	}
	
	return resultsAsJSON.stringify(outcomes);
}