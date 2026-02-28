import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-933
 * @returns {AutoTestShell} testShell
 */
export function test933() {
	aeKernel.addGuidedAutomaticTest("933", {
		bestPractice: 886,
		testId: 933,
		introduced: "2.17",
		mediaType: mediaTypes.WEB,
		description: "One or more dialog elements with an open attribute, without a hidden attribute and available to assistive technologies is empty.",
		metaText: "This dialog is open but empty",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = "dialog[open]:not([hidden])[data-ae_avat]";
			// note that some of the relevant CSS selector above is redundant with the implementation of the 'data-ae_emptyopendialog' attribute
			return new AutoTestShell(
				`${relevantCssSelector}`,
				`${relevantCssSelector}[data-ae_emptyopendialog]`
			);
		}
	});
}
