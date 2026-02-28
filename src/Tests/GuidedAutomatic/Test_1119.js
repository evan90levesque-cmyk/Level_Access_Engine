import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-1119
 * @returns {AutoTestShell} testShell
 */
export function test1119() {
	aeKernel.addGuidedAutomaticTest("1119", {
		bestPractice: 490,
		testId: 1119,
		introduced: "2.21",
		mediaType: mediaTypes.WEB,
		description: "One or more A elements, not intentionally hidden in the DOM and available to assistive technologies, lacks an href or a tabindex set to 0 or a positive value.",
		metaText: "This A lacks an href or a tabindex set to 0 or a positive value.",
		fixType: "",
		testFunc: function() {
			const baseCssSelector = 'a[data-ae_avat][data-ae_vis]';

			//Fail Cases
			//No href and has negative tabindex
			//No href and has empty tabindex
			//No href and has no tabindex

			return new AutoTestShell(
				`${baseCssSelector}`,
				`${baseCssSelector}:not([href])[tabindex^="-"],${baseCssSelector}:not([href])[tabindex=""],${baseCssSelector}:not([href]):not([tabindex])`
			);
		}
	});
}
