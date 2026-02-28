import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://levelaccess.atlassian.net/browse/ENG-1079
 * @returns {AutoTestShell} testShell
 */
export function test1079() {
	aeKernel.addAutomaticTest("1079", {
		bestPractice:1626,
		testId:1079,
		introduced: "2.29",
		mediaType: mediaTypes.WEB,
		description:"One or more elements that has a role='option' attribute, excluding option elements, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-checked attribute.",
		metaText: "This element (role=option) does not have an aria-checked attribute",
		metaTextDetail: "This {{tag-name}} (role=option) does not have an aria-checked attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][data-ae_ar="option"]:not(option)',
				'*[data-ae_vis][data-ae_avat][data-ae_ar="option"]:not(option):not([aria-checked])'
			);
		}
	});
}
