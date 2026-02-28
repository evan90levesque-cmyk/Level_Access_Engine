import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-1100
 * @returns {AutoTestShell} testShell
 */
export function test1100() {
	aeKernel.addAutomaticTest("1100", {
		bestPractice: 967,
		testId: 1100,
		introduced: "2.21",
		mediaType: mediaTypes.WEB,
		description:"One or more elements that has a role='button' attribute, not intentionally hidden in the DOM, contained one or more input elements (without an assigned ARIA role and not type=hidden), select elements (without an assigned ARIA role), textarea elements (without an assigned ARIA role) or A elements (without an assigned ARIA role).",
		metaText: "This element (role=button) should not contain input elements (without an assigned ARIA role and not type=hidden), select elements (without an assigned ARIA role), textarea elements (without an assigned ARIA role) or A elements (without an assigned ARIA role).",
		metaTextDetail: "This {{tag-name}} (role=button) should not contain input elements (without an assigned ARIA role and not type=hidden), select elements (without an assigned ARIA role), textarea elements (without an assigned ARIA role) or A elements (without an assigned ARIA role).",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = '*[data-ae_ar="button"][data-ae_vis]';

			const testShell = new AutoTestShell(
				relevantCssSelector
			);
			
			testShell.set_candidateSetNodesFunc(function() {
				const notProper = [];

				const res = aeKernel.rootTestNode.querySelectorAll(relevantCssSelector);
				for (let i = 0; i < res.length; i++) {
					const result = res[i];
					const res1 = result.querySelector('input[data-ae_ar="null"]:not([type="hidden"]), select[data-ae_ar="null"], textarea[data-ae_ar="null"], a[data-ae_ar="null"]');
					if (res1) {
						notProper.push(result);
					}
				}
				
				return notProper;
			});
			
			return testShell;
		}
	});
}
