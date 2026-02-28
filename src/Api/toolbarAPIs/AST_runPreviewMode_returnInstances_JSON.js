import {aeKernel} from "../../Kernel/AEKernel.js";
import {testTypes} from "../../Utils/aeUtils.js";
import {formatOutcomeForToolbar} from "../../Api/ApiUtils/resultsFormatter_Toolbar.js";
import {logger} from "../../Utils/Logger.js";

/**
 * Returns JSON stringified array of nmr tests with content to check
 * For use with ACCESS Assistant
 * @returns {Array} of nmr tests with content to check
 */
export function ast_runPreviewMode_returnInstances_JSON(testId, testType = testTypes.PREVIEW_MODE) {
	aeKernel.markdownFuncs_failedToRun = {}; // for resilience
	aeKernel.tests_failedToRun         = {}; // for resilience
	
	var outcomes = [];

	if (aeKernel.captureDOM()) {
		try {
			var test = aeKernel.getTestToRun(testId);
			var instances = test.testFunc();
			for (var j = 0, len_instances = instances.length; j < len_instances; j++) {
				var instance = instances[j];
				var outcome = formatOutcomeForToolbar(instance, test, testType);
				outcomes.push(outcome);
			}
		} catch (err) {
			logger.error('Error', err);
			aeKernel.tests_failedToRun[testId] = err;
		}
	}

	return JSON.stringify(outcomes);
}



