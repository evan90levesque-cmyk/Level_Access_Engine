import {aeKernel} from "../Kernel/AEKernel.js";
import {testTypes, mediaTypes} from "../Utils/aeUtils.js";
import {logger} from "../Utils/Logger.js";

/**
 * Returns variant 3 test result for all tests
 * @param {Number} testType
 * @returns {Object} The outcomes object holds results for each "fail" test that has instances in terms of "bp id, [array of failing node instances]", with test name as a key
 */
export function runAllTests_returnInstances(testType = testTypes.AUTOMATIC) {
	// need getters and setters
	aeKernel.markdownFuncs_failedToRun = {};
	aeKernel.tests_failedToRun         = {};
	
	var outcomes = {};

	if (aeKernel.captureDOM()) {
		var tests = aeKernel.getTestsToRun(testType);
		var keys = Object.keys(tests);

		for (var i = 0, len_keys = keys.length; i < len_keys; i++) {
			var outcome = [];
			var key = keys[i];
			var test = tests[key];

			//This is a web API so only run tests of type WEB
			if (test.mediaType == mediaTypes.WEB) {

				try {
					var testFunc = test.testFunc();
					// needed to add this
					testFunc.rootTestNode = aeKernel.rootTestNode;
					var testRes = testFunc.getResult("instances");
					if (testRes.outcome === "fail") {
						outcome[0] = test.testId;
						outcome[1] = testRes.instances;
						outcomes[key] = outcome;
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