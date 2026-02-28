import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-1039
 * @returns {AutoTestShell} testShell
 */
export function test1039() {
	aeKernel.addAutomaticTest("1039", {
		bestPractice:1626,
		testId:1039,
		introduced: "2.20",
		mediaType: mediaTypes.WEB,
		description:"One or more elements that has a role='checkbox' attribute, excluding input type='checkbox' elements, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-checked attribute.",
		metaText: "This element (role=checkbox) does not have an aria-checked attribute",
		metaTextDetail: "This {{tag-name}} (role=checkbox) does not have an aria-checked attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][data-ae_ar="checkbox"]:not(input[type="checkbox"])',
				'*[data-ae_vis][data-ae_avat][data-ae_ar="checkbox"]:not(input[type="checkbox"]):not([aria-checked])'
			);
		}
	});
}
