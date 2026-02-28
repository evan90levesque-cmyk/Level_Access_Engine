import {aeKernel} from "../Kernel/AEKernel.js";

/**
 * Returns variant 2 test result for a specified test
 * @param {string} testId The specified test id
 * @returns {string} The outcome of the specified test in terms of "bp id, number of issues located"
 */
export function runTest_returnNumbers(testId) {
	aeKernel.markdownFuncs_failedToRun = {}; // for resilience
	aeKernel.tests_failedToRun         = {}; // for resilience
	var result                         = "failed to run";
	if (aeKernel.captureDOM()) {
		try {
			var outcome = [];
			var testFunc = aeKernel.getTestToRun(testId).testFunc();
			// added in break-up
			testFunc.rootTestNode = aeKernel.rootTestNode;
			var testRes = testFunc.getResult("numbers");
			if (testRes.outcome === "fail") {
				outcome[0] = testId;
				outcome[1] = testRes.numberOfIssues;
			}
			result = outcome.toString()
		} catch (err) {
			console.error('Error runTest_returnNumbers', err);
			aeKernel.tests_failedToRun[testId] = err;
		}
	} else {
		console.log("runTest_returnNumbers: captureDOM failed");
	} 
	return result;
}