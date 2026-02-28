import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-379
 * @returns {AutoTestShell} testShell
 */
export function test379() {
	aeKernel.addAdvisoryAutomaticTest("379", {
		bestPractice:387,
		testId:379,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more h2 elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, is empty.",
		metaText: "This h2 element should not be empty",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'h2[data-ae_ar="null"][data-ae_vis][data-ae_avat]',
				'h2[data-ae_ar="null"][data-ae_vis][data-ae_avat]:empty'
			);
		}
	});
}
