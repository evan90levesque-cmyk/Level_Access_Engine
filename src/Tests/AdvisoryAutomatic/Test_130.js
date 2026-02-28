import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-130
 * @returns {AutoTestShell} testShell
 */
export function test130() {
	aeKernel.addAdvisoryAutomaticTest("130", {
		bestPractice:387,
		testId:130,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more h1 elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, is empty.",
		metaText: "This h1 element should not be empty",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'h1[data-ae_ar="null"][data-ae_vis][data-ae_avat]',
				'h1[data-ae_ar="null"][data-ae_vis][data-ae_avat]:empty'
			);
		}
	});
}
