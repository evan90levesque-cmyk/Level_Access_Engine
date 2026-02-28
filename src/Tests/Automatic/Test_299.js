import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-299
 * @returns {AutoTestShell} testShell
 */
export function test299() {
	aeKernel.addAutomaticTest("299", {
		bestPractice:1626,
		testId:299,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more input type='checkbox' elements that has an aria-pressed attribute, excluding those with a role='checkbox' attribute, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to a value that is not: 'button'.",
		metaText: "The role attribute value given to this element is not allowed.   This element's role attribute can be set to the following text value: button; or the role attribute can be removed",
		metaTextDetail: "The role attribute value given to this {{tag-name}} is not allowed. This element's role attribute can be set to the following text value: button; or the role attribute can be removed",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'input[data-ae_vis][data-ae_avat][type="checkbox"][aria-pressed]:not([data-ae_ar="null"]):not([data-ae_ar="checkbox"])',
				'input[data-ae_vis][data-ae_avat][type="checkbox"][aria-pressed]:not([data-ae_ar="null"]):not([data-ae_ar="checkbox"]):not([data-ae_ar="button"])'
			);
		}
	});
}
