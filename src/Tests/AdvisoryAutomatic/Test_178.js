import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-178
 * @returns {AutoTestShell} testShell
 */
export function test178() {
	aeKernel.addAdvisoryAutomaticTest("178", {
		bestPractice: 1626,
		testId: 178,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description: "A main element, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute.",
		metaText: "The role attribute is not allowed on this element",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'main[data-ae_vis][data-ae_avat]',
				'main[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"])'
			);
		}
	});
}
