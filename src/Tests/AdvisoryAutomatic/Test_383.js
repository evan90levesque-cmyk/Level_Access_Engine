import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-383
 * @returns {AutoTestShell} testShell
 */
export function test383() {
	aeKernel.addAdvisoryAutomaticTest("383", {
		bestPractice:387,
		testId:383,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more h6 elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, is empty.",
		metaText: "This h6 element should not be empty",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'h6[data-ae_ar="null"][data-ae_vis][data-ae_avat]',
				'h6[data-ae_ar="null"][data-ae_vis][data-ae_avat]:empty'
			);
		}
	});
}
