import { aeKernel } from "../../Kernel/AEKernel.js";
import { mediaTypes, testTypes } from "../../Utils/aeUtils.js";
import { formatResultForElevin } from './formatResultForElevin';
import { resultsAsJSON } from "../ApiUtils/resultsAsJSON";
import { logger } from "../../Utils/Logger";

let nextUniqueId;

/**
 *
 * @param {Array} testTypeArray
 * @param {boolean?} shouldIncludeElement
 * @return {*|string}
 */
export function nextgen_runAllTests_returnInstances_JSON(testTypeArray = [testTypes.AUTOMATIC], shouldIncludeElement = false) {
	aeKernel.updateSuccess(null);

	aeKernel.markdownFuncs_failedToRun = {};
	aeKernel.tests_failedToRun = {};

	const assertions = [];

	if (!aeKernel.captureDOM()) {
		return resultsAsJSON.stringify(assertions);
	}

	// assign unique IDs to all elements prior to building results
	nextUniqueId = 0;  // reset unique ID generator from any previous invocation of this function
	const allElements = aeKernel.rootTestNode.querySelectorAll("*");
	for (const element of allElements) {
		let uniqueId = element.getAttribute("data-ae_uid");
		if (!uniqueId) {
			// element has not yet been assigned a unique ID, so assign one
			uniqueId = nextUniqueId++;
			element.setAttribute("data-ae_uid", uniqueId);
		}
	}

	for (let i = 0; i < testTypeArray.length; i++) {
		const testType = testTypeArray[i];
		const testTypeName = Object.keys(testTypes).find(key => testTypes[key] === testType);
		const tests = aeKernel.getTestsToRun(testType);
		const testIds = Object.keys(tests);

		for (let j = 0; j < testIds.length; j++) {
			const testId = testIds[j];
			const test = tests[testId];

			if (test.mediaType !== mediaTypes.WEB) {
				continue;
			}

			let outcome, failingNodes;
			try {
				const testFunc = test.testFunc();
				testFunc.rootTestNode = aeKernel.rootTestNode;
				const results = testFunc.getNextGenResultsMetadata();

				outcome = results.outcome;
				failingNodes = results.failingNodes;
			} catch (err) {
				aeKernel.tests_failedToRun[testId] = err;
				continue;
			}

			const results = [];

			for (let k = 0; k < failingNodes.length; k++) {
				const failingNode = failingNodes[k];

				let result;
				try {
					//Passing in test instead of just test.fixType as we need to pull more values out of the test
					result = formatResultForElevin(failingNode, test, shouldIncludeElement);
				} catch (err) {
					logger.error(err);
					continue;
				}
				results.push(result);
			}

			const assertion = {
				testId: testId,
				testType: testTypeName,
				outcome: outcome,
				results: results
			};

			assertions.push(assertion);
		}
	}

	aeKernel.updateSuccess();

	return resultsAsJSON.stringify(assertions);
}