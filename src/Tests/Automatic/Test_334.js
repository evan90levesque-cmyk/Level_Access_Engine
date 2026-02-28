import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-334
 * @returns {AutoTestShell} testShell
 */
export function test334() {
	aeKernel.addAutomaticTest("334", {
		bestPractice:1626,
		testId:334,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more elements with a role='searchbox' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-owns attribute set to a non-null value.",
		metaText: "This element (role=searchbox) should not have an aria-owns attribute set to a non-null value",
		metaTextDetail: "This {{tag-name}} (role=searchbox) should not have an aria-owns attribute set to a non-null value",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][data-ae_ar="searchbox"]',
				'*[data-ae_vis][data-ae_avat][data-ae_ar="searchbox"][aria-owns]:not([aria-owns=""])'
			);
		}
	});
}
