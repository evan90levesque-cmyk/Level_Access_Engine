import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-934
 * @returns {AutoTestShell} testShell
 */
export function test934() {
	aeKernel.addGuidedAutomaticTest("934", {
		bestPractice: 886,
		testId: 934,
		introduced: "2.17",
		mediaType: mediaTypes.WEB,
		description: "One or more elements with a role='dialog' attribute, without a hidden attribute, not intentionally hidden in the DOM and available to assistive technologies, is empty.",
		metaText: "This element (role=dialog) is open but empty",
		metaTextDetail: "This {{tag-name}} (role=dialog) is open but empty",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = "*[data-ae_ar='dialog']:not([hidden])[data-ae_vis][data-ae_avat]";
			// note that some of the relevant CSS selector above is redundant with the implementation of the 'data-ae_emptyopendialog' attribute
			return new AutoTestShell(
				`${relevantCssSelector}`,
				`${relevantCssSelector}[data-ae_emptyopendialog]`
			);
		}
	});
}
