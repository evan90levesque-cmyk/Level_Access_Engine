import {aeKernel} from "../Kernel/AEKernel.js";
import {testTypes, mediaTypes} from "../Utils/aeUtils.js";

/**
 * Returns variant 2 test result for all failing tests
 * For use in analytics
 * @param {Number} testType
 * @returns {Object} The outcomes object holds results for each test that has one or more failing instances in terms of "bp id, number of issues", with check name as a key
 */
export function runAllTests_returnFailedNumbers(testType = testTypes.AUTOMATIC) {
	aeKernel.markdownFuncs_failedToRun = {}; // for resilience
	aeKernel.tests_failedToRun         = {}; // for resilience
	
	var outcomes = {};

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
					// needed to add this
					testFunc.rootTestNode = aeKernel.rootTestNode;
					var testRes = testFunc.getResult("numbers");
					if (testRes.outcome === "fail") {
						outcomes[key] = testRes.numberOfIssues;
					}
				} catch (err) {
					aeKernel.tests_failedToRun[key] = err;
				}
			}
		}
	}

	return outcomes;
}