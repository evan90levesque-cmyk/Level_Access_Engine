import {aeKernel} from "../../Kernel/AEKernel.js";
import {mediaTypes, testTypes} from "../../Utils/aeUtils.js";
import {formatOutcomeForToolbar} from "../ApiUtils/resultsFormatter_Toolbar";
import {resultsAsJSON} from "../ApiUtils/resultsAsJSON";
import {logger} from "../../Utils/Logger.js";

/**
 * API needed in AMP Firefox extension
 * not using an amp_ for api prefix as it is refd in AMP
 * runAllTests_returnXPathFilteredInstances_JSON is only called if an exclusion is registered in AMP
 * @param {number[]} testTypeArray
 * @param {string} exclusionsJSON
 */
export function runAllTests_returnXPathFilteredInstances_JSON(testTypeArray = [testTypes.AUTOMATIC, testTypes.GUIDED_AUTOMATIC], exclusionsJSON) {
	const excludes = JSON.parse(exclusionsJSON);
	aeKernel.markdownFuncs_failedToRun = {};// for resilience
	aeKernel.tests_failedToRun         = {};// for resilience

	const outcomes = [];//Get a list of all elements matching all supplied xpaths

	if (aeKernel.captureDOM()) {
		const xpathSet = [];
		for (let i = 0; i < excludes.length; i++) {
			const x = aeKernel.rootTestNode.ownerDocument.evaluate(excludes[i], aeKernel.rootTestNode.ownerDocument, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
			try {
				let node = x.iterateNext();
				while (node) {//Does the set already contain the element?
					if (!xpathSet.some(cv => cv === node)) {
						xpathSet.push(node);
					}
					node = x.iterateNext();
				}
			} catch (e) {
				logger.error(e);
			}
		}

		for (let i = 0; i < testTypeArray.length; i++) {
			const testType = testTypeArray[i];

			const tests = aeKernel.getTestsToRun(testType);
			const keys = Object.keys(tests);
			for (let j = 0; j < keys.length; j++) {
				const key = keys[j];
				const test = tests[key];

				//This is a web API so only run tests of type WEB
				if (test.mediaType === mediaTypes.WEB) {
					try {
						const testFunc = test.testFunc();// added in break-up
						testFunc.rootTestNode = aeKernel.rootTestNode;
						const testRes = testFunc.getResult("instances");
						if (testRes.outcome === "fail") {
							const instances = testRes.instances;
							for (let k = 0; k < instances.length; k++) {
								const instance = instances[k];

								try {
									let shouldExclude = false;
									for (let l = 0; l < xpathSet.length; l++) {
										const comparableInstance = xpathSet[l];

										const path_1 = LevelAccess_AccessEngine.uelAccurate_FromRoot(instance);
										const path_2 = LevelAccess_AccessEngine.uelAccurate_FromRoot(comparableInstance);

										if (path_1.includes(path_2)) {
											shouldExclude = true;
											break;
										}
									}
									if (!shouldExclude) {
										const outcome = formatOutcomeForToolbar(instances[k], test, testType);
										outcomes.push(outcome);
									}
								} catch (err) {
									logger.error(err);
								}
							}
						}
					} catch (err) {
						aeKernel.tests_failedToRun[key] = err;
					}
				}
			}
		}
	}

	return resultsAsJSON.stringify(outcomes);
}