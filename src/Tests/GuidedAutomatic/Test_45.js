import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-45
 * @returns {AutoTestShell} testShell
 */
export function test45() {
	aeKernel.addGuidedAutomaticTest("45", {
		bestPractice:480,
		testId:45,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more hr elements, without an ARIA-assigned role, not intentionally hidden in the DOM, has a width attribute.",
		metaText: "The width attribute is not allowed on this element",
		metaTextDetail: "The width attribute is not allowed on this {{tag-name}}",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'hr[data-ae_vis][data-ae_ar="null"]',
				'hr[data-ae_vis][data-ae_ar="null"][width]'
			);
		}
	});
}
