import {aeKernel} from "../../Kernel/AEKernel.js";
import {testTypes, mediaTypes} from "../../Utils/aeUtils.js";
import {formatOutcomeForAnalytics} from "../../Api/ApiUtils/resultsFormatter_Analytics.js";
import {resultsAsJSON} from "../../Api/ApiUtils/resultsAsJSON.js";
import {logger} from "../../Utils/Logger.js";

/**
 * Returns variant 3 test result for failed tests - as a JSON object
 * @param {Array} testTypeArray
 * @returns {Object} The outcomes object holds results for each "fail" in accordance with AMP data model
 */
export function analytics_runAllTests_returnInstances_JSON(testTypeArray = [testTypes.AUTOMATIC]) {
	aeKernel.updateSuccess(null);

	aeKernel.markdownFuncs_failedToRun = {}; // for resilience
	aeKernel.tests_failedToRun         = {}; // for resilience

	var tests = null;
	var outcomes = [];
	if (aeKernel.captureDOM()) {
		// runs through each test type specified - for toolbar [testTypes.AUTOMATIC, testTypes.GUIDED_AUTOMATIC]
		for (var k = testTypeArray.length; k--;) {
			let testType = testTypeArray[k];
			tests = aeKernel.getTestsToRun(testType);
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
								var outcome = formatOutcomeForAnalytics(instances[j], test, testType);
								outcomes.push(outcome);
							}
						}
					} catch (err) {
						logger.error(err);
						aeKernel.tests_failedToRun[key] = err;
					}
				}
			}
		}
	}

	aeKernel.updateSuccess();

	return resultsAsJSON.stringify(outcomes);
}