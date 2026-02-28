import {aeKernel} from "../Kernel/AEKernel.js";
import {logger} from "../Utils/Logger.js";

/**
 * Returns variant 1 test result (na | pass | fail) for a specified test
 * For use in BDD testing
 * @param {string} testId The specified test id
 * @returns {string} The outcome of the specified test
 */
export function runTest_returnOutcome(testId) {
	aeKernel.markdownFuncs_failedToRun = {}; // for resilience
	aeKernel.tests_failedToRun         = {}; // for resilience
	var result                         = "failed to run";
	if (aeKernel.captureDOM()) {
		try {
			var testFunc = aeKernel.getTestToRun(testId).testFunc();
			// added in break-up
			testFunc.rootTestNode = aeKernel.rootTestNode;
			var testRes = testFunc.getResult();
			result = testRes.outcome;
		} catch (err) {
			console.error('Error runTest_returnOutcome', err);
			aeKernel.tests_failedToRun[testId] = err;
		}
	} else {
		console.log("runTest_returnOutcome: captureDOM failed");
	}
	return result;
}
