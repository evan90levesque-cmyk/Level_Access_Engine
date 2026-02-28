import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-71
 * @returns {AutoTestShell} testShell
 */
export function test71() {
	aeKernel.addAutomaticTest("71", {
		bestPractice:1626,
		testId:71,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more elements that has a role='heading' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-level attribute.",
		metaText: "This element (role=heading) does not have an aria-level attribute",
		metaTextDetail: "This {{tag-name}} (role=heading) does not have an aria-level attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][data-ae_ar="heading"]',
				'*[data-ae_vis][data-ae_avat][data-ae_ar="heading"]:not([aria-level])'
			);
		}
	});
}
