import { aeKernel } from "../../Kernel/AEKernel.js";
import { mediaTypes, testTypes } from "../../Utils/aeUtils.js";
import { formatNextGenResultForAndroid } from "./formatNextGenResultForAndroid";
import { resultsAsJSON } from "../ApiUtils/resultsAsJSON";
import { logger } from "../../Utils/Logger";

export function nextgen_runAllTests_Android_returnInstances_JSON(testTypeArray = [testTypes.AUTOMATIC]) {
	aeKernel.updateSuccess();
	aeKernel.markdownFuncs_failedToRun = {};
	aeKernel.tests_failedToRun = {};

	const assertions = [];

	if (!aeKernel.captureDOM()) {
		return resultsAsJSON.stringify(assertions);
	}

	for (const testType of testTypeArray) {
		const tests = aeKernel.getTestsToRun(testType);

		for (const [testId, test] of Object.entries(tests)) {
			if (test.mediaType !== mediaTypes.ANDROID) {
				continue;
			}

			try {
				const testFunc = test.testFunc();
				testFunc.rootTestNode = aeKernel.rootTestNode;

				const resultsMetadata = testFunc.getNextGenResultsMetadata();
				const testTypeName = Object.keys(testTypes).find(key => testTypes[key] === testType);
				const assertion = buildAssertion(test, testId, testTypeName, resultsMetadata);

				assertions.push(assertion);
			} catch (err) {
				aeKernel.tests_failedToRun[testId] = err;
			}
		}
	}

	aeKernel.updateSuccess();

	return resultsAsJSON.stringify(assertions);
}

function buildAssertion(test, testId, testTypeName, resultsMetadata) {
	const results = [];

	for (const failingNode of resultsMetadata.failingNodes) {
		try {
			results.push(formatNextGenResultForAndroid(failingNode, test));
		} catch (err) {
			logger.error(err);
		}
	}

	return {
		testId: testId,
		testType: testTypeName,
		outcome: resultsMetadata.outcome,
		results: results
	};
}
