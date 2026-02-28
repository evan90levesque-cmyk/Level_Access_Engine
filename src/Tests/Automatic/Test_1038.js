import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-1038
 * @returns {AutoTestShell} testShell
 */
export function test1038() {
	aeKernel.addAutomaticTest("1038", {
		bestPractice:1626,
		testId:1038,
		introduced: "2.20",
		mediaType: mediaTypes.WEB,
		description:"One or more elements that has a role='switch' attribute, excluding input type='checkbox' elements, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-checked attribute.",
		metaText: "This element (role=switch) does not have an aria-checked attribute",
		metaTextDetail: "This {{tag-name}} (role=switch) does not have an aria-checked attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][data-ae_ar="switch"]:not(input[type="checkbox"])',
				'*[data-ae_vis][data-ae_avat][data-ae_ar="switch"]:not(input[type="checkbox"]):not([aria-checked])'
			);
		}
	});
}
