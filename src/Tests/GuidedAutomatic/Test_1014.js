import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-1014
 * @returns {AutoTestShell} testShell
 */
export function test1014() {
	aeKernel.addGuidedAutomaticTest("1014", {
		bestPractice: 389,
		testId: 1014,
		introduced: "2.19",
		mediaType: mediaTypes.WEB,
		description: "One or more elements, excluding the root html node, not intentionally hidden in the DOM and available to assistive technologies, has a lang attribute set to a null value.",
		metaText: "This element has a lang attribute set to a null value",
		metaTextDetail: 'This {{tag-name}} has a lang attribute set to a null value',
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = '*:not(:root)[data-ae_vis][data-ae_avat][lang]';

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[lang=""]`
			);
		}
	});
}
