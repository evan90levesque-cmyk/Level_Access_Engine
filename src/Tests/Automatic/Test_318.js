import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-318
 * @returns {AutoTestShell} testShell
 */
export function test318() {
	aeKernel.addAutomaticTest("318", {
		bestPractice:1626,
		testId:318,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more object elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to a value that is not: 'application | document | img'.",
		metaText: "The role attribute value given to this element is not allowed.  This element's role attribute can be set to one of the following text values: application | document | img; or the role attribute can be removed",
		metaTextDetail: "The role attribute value given to this {{tag-name}} is not allowed.  This element's role attribute can be set to one of the following text values: application | document | img; or the role attribute can be removed",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'object[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"])',
				'object[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"]):not([data-ae_ar="application"]):not([data-ae_ar="document"]):not([data-ae_ar="img"])'
			);
		}
	});
}
