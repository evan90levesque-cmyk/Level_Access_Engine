import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-331
 * @returns {AutoTestShell} testShell
 */
export function test331() {
	aeKernel.addAutomaticTest("331", {
		bestPractice:1626,
		testId:331,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more input elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has an aria-owns attribute set to a non-null value.",
		metaText: "This element should not have an aria-owns attribute set to a non-null value",
		metaTextDetail: "This {{tag-name}} should not have an aria-owns attribute set to a non-null value",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'input[data-ae_vis][data-ae_avat][data-ae_ar="null"]',
				'input[data-ae_vis][data-ae_avat][data-ae_ar="null"][aria-owns]:not([aria-owns=""])'
			);
		}
	});
}
