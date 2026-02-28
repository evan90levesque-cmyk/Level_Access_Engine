import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-380
 * @returns {AutoTestShell} testShell
 */
export function test380() {
	aeKernel.addAdvisoryAutomaticTest("380", {
		bestPractice:387,
		testId:380,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more h3 elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, is empty.",
		metaText: "This h3 element should not be empty",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'h3[data-ae_ar="null"][data-ae_vis][data-ae_avat]',
				'h3[data-ae_ar="null"][data-ae_vis][data-ae_avat]:empty'
			);
		}
	});
}
