import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {correctChildren} from "../../Tests/TestUtils/testUtil_correctChildren.js";
import { mediaTypes } from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-244
 * @returns {AutoTestShell} testShell
 */
export function test244() {
	aeKernel.addAutomaticTest("244", {
		bestPractice: 393,
		testId: 244,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description: "One or more dl elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not contain only elements with a role='listitem' attribute, dt, dd, script, template elements (without an ARIA-assigned role); or only div, script, template elements (without an ARIA-assigned role); as direct child elements.",
		metaText: "This element should only contain elements with a role='listitem' attribute, dt, dd, script, template elements (without an ARIA-assigned role); or only div, script, template elements (without an ARIA-assigned role); as direct child elements",
		metaTextDetail: "This {{tag-name}} should only contain elements with a role='listitem' attribute, dt, dd, script, template elements (without an ARIA-assigned role); or only div, script, template elements (without an ARIA-assigned role); as direct child elements",
		fixType: "",
		testFunc: function() {
			const testShell = new AutoTestShell(
				'dl[data-ae_vis][data-ae_avat][data-ae_ar="null"]:not(:empty)'
			);
			testShell.set_candidateSetNodesFunc(function() {
				return correctChildren("dl", { DT: 1, DD: 1, DIV: 1, SCRIPT: 1, TEMPLATE: 1 }, aeKernel.rootTestNode, function(tagChildren, testChild) {
					// under this test, dl can have dt and dd as children, or div as children, but not both, e.g. dt and/or dd and div as children

					let hasDtDd = false;
					let hasDiv = false;
					for (let i = 0; i < tagChildren.length; i++) {
						let tagChild = tagChildren[i];
						if (tagChild.tagName === 'DT' || tagChild.tagName === 'DD') {
							hasDtDd = true;
						} else if (tagChild.tagName === 'DIV') {
							hasDiv = true;
						}
						if (hasDtDd && hasDiv) {
							// optimization
							break;
						}
					}

					if (hasDtDd && hasDiv) {
						return (testChild.tagName !== 'DT' && testChild.tagName !== 'DD' && testChild.tagName !== 'DIV');
					} else if (hasDtDd) {
						return (testChild.tagName !== 'DIV');
					} else if (hasDiv) {
						return (testChild.tagName !== 'DT' && testChild.tagName !== 'DD');
					} else {
						return true;
					}
				});
			});
			return testShell;
		}
	});
}
