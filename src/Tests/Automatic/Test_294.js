import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-294
 * @returns {AutoTestShell} testShell
 */
export function test294() {
	aeKernel.addAutomaticTest("294", {
		bestPractice:1626,
		testId:294,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more form elements, excluding those with a role='form' attribute, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to a value that is not: 'search | region'.",
		metaText: "The role attribute value given to this element is not allowed.  This element's role attribute can be set to one of the following text values: search | region; or the role attribute can be removed",
		metaTextDetail: "The role attribute value given to this {{tag-name}} is not allowed.  This element's role attribute can be set to one of the following text values: search | region; or the role attribute can be removed",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'form[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"]):not([data-ae_ar="form"])',
				'form[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"]):not([data-ae_ar="form"]):not([data-ae_ar="search"]):not([data-ae_ar="region"])'
			);
		}
	});
}
