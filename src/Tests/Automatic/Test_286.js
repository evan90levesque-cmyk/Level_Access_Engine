import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-286
 * @returns {AutoTestShell} testShell
 */
export function test286() {
	aeKernel.addAutomaticTest("286", {
		bestPractice:1626,
		testId:286,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more dl elements, excluding role='list' attributes, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to a value that is not: 'group'.",
		metaText: "The role attribute value given to this element is not allowed.  This element's role attribute can be set to the text value: group; or the role attribute can be removed",
		metaTextDetail: "The role of '{{data-ae_ar}}' given to this {{tag-name}} is not allowed.  This element's role attribute can be set to the text value: group; or the role attribute can be removed",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'dl[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"]):not([data-ae_ar="list"])',
				'dl[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"]):not([data-ae_ar="list"]):not([data-ae_ar="group"])'
			);
		}
	});
}
