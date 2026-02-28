import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-1043
 * @returns {AutoTestShell} testShell
 */
export function test1043() {
	aeKernel.addAutomaticTest("1043", {
		bestPractice:1626,
		testId:1043,
		introduced: "2.20",
		mediaType: mediaTypes.WEB,
		description:"One or more elements that has a role='radio' attribute, excluding input type='radio' elements, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-checked attribute.",
		metaText: "This element (role=radio) does not have an aria-checked attribute",
		metaTextDetail: "This {{tag-name}} (role=radio) does not have an aria-checked attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][data-ae_ar="radio"]:not(input[type="radio"])',
				'*[data-ae_vis][data-ae_avat][data-ae_ar="radio"]:not(input[type="radio"]):not([aria-checked])'
			);
		}
	});
}
