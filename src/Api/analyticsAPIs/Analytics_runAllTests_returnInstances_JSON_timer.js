import {aeKernel} from "../../Kernel/AEKernel.js";
import {testTypes, mediaTypes} from "../../Utils/aeUtils.js";
import {formatOutcomeForAnalytics} from "../../Api/ApiUtils/resultsFormatter_Analytics.js";
import {logger} from "../../Utils/Logger.js";
import {timer_api_shell} from "../../Api/ApiUtils/timerAPIShell.js";

/**
 * We need to expose test_analytics_outcomes through the api, but not by importing and exposing aeKernel
 * Hence this step
 */
export let test_analytics_outcomes = aeKernel.test_analytics_outcomes;

/**
 * Returns variant 3 test result for all tests - tests are run asyncronously using timers so they are non-blocking
 * @param {Number} testType
 * @param {function} callback
 * @returns {Object} The outcomes object holds results for each "fail" test that has instances in terms of "bp id, [array of failing node instances]", with test name as a key
 */
export function analytics_runAllTests_returnInstances_JSON_timer(callback) {
	aeKernel.markdownFuncs_failedToRun = {}; // for resilience
	aeKernel.tests_failedToRun         = {}; // for resilience
	test_analytics_outcomes 		   = [];
	var testType                       = testTypes.AUTOMATIC;

	var processTest = function (test) {

		//This is a web API so only run tests of type WEB
		if(test.mediaType==mediaTypes.WEB){

			//var outcome = [];
			var testId  = test.testId;
			try {
				var testFunc = test.testFunc();
				// needed to add this
				testFunc.rootTestNode = aeKernel.rootTestNode;
				var testRes = testFunc.getResult("instances");
				if (testRes.instances) {
					var instances = testRes.instances;
					for (var j = 0, len_instances = instances.length; j < len_instances; j++) {
						try {
							var outcome = formatOutcomeForAnalytics(instances[j], test, testType);
							test_analytics_outcomes.push(outcome);
						}
						catch (err) {
							logger.error(err);
						}
					}
				}
			}
			catch (err) {
				aeKernel.tests_failedToRun[testId] = err; // for resilience
			}
		}
	};
	
	timer_api_shell(testType, processTest, callback)
}
