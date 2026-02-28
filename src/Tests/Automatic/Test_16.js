import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-16
 * @returns {AutoTestShell} testShell
 */
export function test16() {
	aeKernel.addAutomaticTest("16", {
		bestPractice:1626,
		testId:16,
		introduced: "0.9",
		mediaType:mediaTypes.WEB,
		description:"One or more elements, excluding textarea elements (without an ARIA-assigned role) and elements with a role='textbox...' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-multiline attribute.",
		metaText: "The aria-multiline attribute is not allowed on this element",
		metaTextDetail: "The aria-multiline attribute is not allowed on this {{tag-name}}",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = '*:not(textarea[data-ae_ar="null"]):not([data-ae_ar="textbox"])[data-ae_vis][data-ae_avat]';

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[aria-multiline]`
			);
		}
	});
}
