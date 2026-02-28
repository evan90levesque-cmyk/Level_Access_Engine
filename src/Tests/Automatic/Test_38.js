import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-38
 * @returns {AutoTestShell} testShell
 */
export function test38() {
	aeKernel.addAutomaticTest("38", {
		bestPractice:1626,
		testId:38,
		introduced: "0.9",
		mediaType:mediaTypes.WEB,
		description:"One or more elements, excluding button elements (without an ARIA-assigned role), input type='button | submit | reset | image' elements (without an ARIA-assigned role), and elements with a role='button...' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-pressed attribute.",
		metaText: "This element should not have an aria-pressed attribute",
		metaTextDetail: "This {{tag-name}} with a role of '{{data-ae_ar}}' should not have an aria-pressed attribute",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = '*:not(button[data-ae_ar="null"]):not(input[type="button"][data-ae_ar="null"]):not(input[type="submit"][data-ae_ar="null"]):not(input[type="reset"][data-ae_ar="null"]):not(input[type="image"][data-ae_ar="null"]):not([data-ae_ar="button"])';

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[aria-pressed]`
			);
		}
	});
}
