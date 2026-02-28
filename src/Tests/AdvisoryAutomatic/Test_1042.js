import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-1042
 * @returns {AutoTestShell} testShell
 */
export function test1042() {
	aeKernel.addAdvisoryAutomaticTest("1042", {
		bestPractice:1626,
		testId:1042,
		introduced: "2.20",
		mediaType: mediaTypes.WEB,
		description:"One or more elements that has a role='option' attribute, excluding option elements, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-selected attribute.",
		metaText: "This element (role=option) does not have an aria-selected attribute",
		metaTextDetail: "This {{tag-name}} (role=option) does not have an aria-selected attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][data-ae_ar="option"]:not(option)',
				'*[data-ae_vis][data-ae_avat][data-ae_ar="option"]:not(option):not([aria-selected])'
			);
		}
	});
}
