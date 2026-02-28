import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-333
 * @returns {AutoTestShell} testShell
 */
export function test333() {
	aeKernel.addAutomaticTest("333", {
		bestPractice:1626,
		testId:333,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more elements with a role='textbox' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-owns attribute set to a non-null value.",
		metaText: "This element (role=textbox) should not have an aria-owns attribute set to a non-null value",
		metaTextDetail: "This {{tag-name}} (role=textbox) should not have an aria-owns attribute set to a non-null value",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][data-ae_ar="textbox"]',
				'*[data-ae_vis][data-ae_avat][data-ae_ar="textbox"][aria-owns]:not([aria-owns=""])'
			);
		}
	});
}
