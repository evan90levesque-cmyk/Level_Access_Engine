import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-381
 * @returns {AutoTestShell} testShell
 */
export function test381() {
	aeKernel.addAdvisoryAutomaticTest("381", {
		bestPractice:387,
		testId:381,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more h4 elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, is empty.",
		metaText: "This h4 element should not be empty",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'h4[data-ae_ar="null"][data-ae_vis][data-ae_avat]',
				'h4[data-ae_ar="null"][data-ae_vis][data-ae_avat]:empty'
			);
		}
	});
}
