import {aeKernel} from "../../Kernel/AEKernel.js";
import {getParent, mediaTypes, testTypes, uelAccurate_FromRoot} from "../../Utils/aeUtils.js";
import {formatResultForElevin} from './formatResultForElevin';
import {resultsAsJSON} from "../ApiUtils/resultsAsJSON";
import {logger} from "../../Utils/Logger";

let nextUniqueId;

/**
 * @param {Element} node
 */
function winnowTestNode (node) {
	// css selectors don't work on :root e.g. an A element placed as rootTestNode would not be able to be located.
	// This means we have to get the parent element; then remove all other contents apart from captured node
	// The selector done in this manner works in environments that have non-html tags e.g. <tile:importantattribute
	let cssSelectorForCapturedNode = "";
	
	if (node.hasAttribute("data-ae_domuel")) {
		const domUel = node.getAttribute("data-ae_domuel");
		cssSelectorForCapturedNode = '[data-ae_domuel="' + domUel.replace(/"/g, '\\"') + '"]';
	} else {
		const nodeCapture_UEL = uelAccurate_FromRoot(node);
		cssSelectorForCapturedNode = '[data-ae_uel="' + nodeCapture_UEL.replace(/"/g, '\\"') + '"]';
	}
	
	// it is important to use the quote types as shown to avoid syntax errors e.g. [data-ae_uel='[id='main']>*:nth-child(2)']
	// IMPORTANT: (need to add to test writing doc) we have to use [data-ae_uel=] format in selectors, as nodeCapture will change the DOM structure and stop the ids from working directly
	
	const capturedNode = aeKernel.rootTestNode.querySelector(cssSelectorForCapturedNode);
	const parentElementOfCapturedNode = getParent(capturedNode);
	
	const children = parentElementOfCapturedNode.children;
	for (let j = children.length; j--;) {
		if (children[j] !== capturedNode) {
			parentElementOfCapturedNode.removeChild(children[j]);
		}
	}
	
	return parentElementOfCapturedNode;
}

/**
 * @param {Element} node to test
 * @param {Array} testTypeArray
 * @param {boolean?} shouldIncludeElement
 * @return {*|string}
 */
export function nextgen_runAllTests_returnInstances_JSON_NodeCapture(node, testTypeArray = [testTypes.AUTOMATIC, testTypes.GUIDED_AUTOMATIC], shouldIncludeElement = false) {
	aeKernel.updateSuccess(null);
	
	aeKernel.markdownFuncs_failedToRun = {};
	aeKernel.tests_failedToRun = {};
	
	const assertions = [];
	
	if (!aeKernel.captureDOM()) {
		return resultsAsJSON.stringify(assertions);
	}
	
	// Remove everything that isn't the node we want to test and set to root node
	aeKernel.rootTestNode = winnowTestNode(node);
	
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
					result = formatResultForElevin(failingNode, test.fixType, shouldIncludeElement);
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