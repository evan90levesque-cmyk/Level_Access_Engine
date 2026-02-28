import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-288
 * @returns {AutoTestShell} testShell
 */
export function test288() {
	aeKernel.addAutomaticTest("288", {
		bestPractice: 1626,
		testId: 288,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description: "One or more fieldset elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to a value that is not: 'group | radiogroup'.",
		metaText: "The role attribute value given to this element is not allowed. This element's role attribute can be set to one of the following text values: group | radiogroup; or the role attribute can be removed",
		metaTextDetail: "The role '{{data-ae_ar}}' given to this {{tag-name}} is not allowed. This element's role attribute can be set to one of the following text values: group | radiogroup; or the role attribute can be removed",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'fieldset[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"])',
				'fieldset[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"]):not([data-ae_ar="group"]):not([data-ae_ar="radiogroup"])'
			);
		}
	});
}
