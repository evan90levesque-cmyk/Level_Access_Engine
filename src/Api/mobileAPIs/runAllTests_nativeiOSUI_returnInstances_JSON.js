import { aeKernel } from "../../Kernel/AEKernel.js";
import { testTypes, mediaTypes } from "../../Utils/aeUtils.js";
import { formatOutcomeForAccessContinuumMobileiOS } from "../../Api/ApiUtils/resultsFormatter_AccessContinuumMobile_iOS.js";
import { resultsAsJSON } from "../../Api/ApiUtils/resultsAsJSON.js";
import { logger } from "../../Utils/Logger.js";

/**
 * Returns variant 3 test result for failed tests - as a JSON object
 * @param {Number} testType
 * @returns {Object} The outcomes object holds results for each "fail" in accordance with AMP data model
 */
export function runAllTests_nativeiOSUI_returnInstances_JSON(testTypeArray = [testTypes.AUTOMATIC]) {
	aeKernel.markdownFuncs_failedToRun = {}; // for resilience
	aeKernel.tests_failedToRun = {}; // for resilience
	var tests = null;
	// label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;
	// css- implies its part of the style attribute value
	var outcomes = [];
	if (aeKernel.captureDOM()) {
		// runs through each test type specified - for mobile just [testTypes.AUTOMATIC]
		for (var k = testTypeArray.length; k--;) {
			let testType = testTypeArray[k];
			tests = aeKernel.getTestsToRun(testType);
			var keys = Object.keys(tests);

			for (var i = 0, len_keys = keys.length; i < len_keys; i++) {
				var key = keys[i];
				var test = tests[key];

				//This is an iOS API so only run tests of type 2
				if (test.mediaType == mediaTypes.IOS) {

					try {
						var testFunc = test.testFunc();
						// added in break-up
						testFunc.rootTestNode = aeKernel.rootTestNode;
						var testRes = testFunc.getResult("instances");
						if (testRes.outcome === "fail") {
							var instances = testRes.instances;
							for (var j = 0, len_instances = instances.length; j < len_instances; j++) {
								try {
									var outcome = formatOutcomeForAccessContinuumMobileiOS(instances[j], test, testType);
									outcomes.push(outcome);
								} catch (err) {
									logger.error(err);
								}
							}
						}
					} catch (err) {
						aeKernel.tests_failedToRun[key] = err;
						logger.error('Error', err);
					}
				}
			}
		}
	}
	return resultsAsJSON.stringify(outcomes);
}