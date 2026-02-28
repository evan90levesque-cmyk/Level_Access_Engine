import {aeKernel} from "../Kernel/AEKernel.js";
import {logger} from "../Utils/Logger.js";

/**
 * Returns variant 3 test result for a specified test
 * @param {string} testId The specified test id
 * @returns {Array} The outcome of the specified test in terms of "bp id, [array of failing node instances]"
 */
export function runTest_returnInstances(testId) {
	aeKernel.markdownFuncs_failedToRun = {}; // for resilience
	aeKernel.tests_failedToRun         = {}; // for resilience
	var result                         = ["failed to run"];
	if (aeKernel.captureDOM()) {
		try {
			var outcome = null;
			var testFunc = aeKernel.getTestToRun(testId).testFunc();
			// added in break-up
			testFunc.rootTestNode = aeKernel.rootTestNode;
			var testRes = testFunc.getResult("instances");
			if (testRes.outcome === "fail") {
				outcome = testRes;
			}
			result = outcome;
		} catch (err) {
			console.error('Error runTest_returnInstances', err);
			aeKernel.tests_failedToRun[testId] = err;
		}
	} else {
		console.log("runTest_returnInstances: captureDOM failed");
	}
	return result;
}