import {aeKernel} from "../Kernel/AEKernel.js";
import {testTypes, mediaTypes} from "../Utils/aeUtils.js";
import {logger} from "../Utils/Logger.js";

/**
 * Returns variant 1 test result (na | pass | fail) for a specified test
 * For use in BDD testing
 * @param {string} testType
 * @returns {string} The outcome of the specified test
 */
export function runAllTests_returnFailedTests(testType = testTypes.AUTOMATIC) {
	aeKernel.markdownFuncs_failedToRun = {}; // for resilience
	aeKernel.tests_failedToRun         = {}; // for resilience
	
	var outcomes = [];

	if (aeKernel.captureDOM()) {
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
						var len = outcomes.length;
						outcomes[len] = key;
					}
				} catch (err) {
					logger.error('Error', err);
					aeKernel.tests_failedToRun[key] = err;
				}
			}
		}
	}

	return outcomes;
}