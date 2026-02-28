import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-15
 * @returns {AutoTestShell} testShell
 */
export function test15() {
	aeKernel.addAutomaticTest("15", {
		bestPractice:338,
		testId:15,
		introduced: "0.9",
		mediaType:mediaTypes.WEB,
		description:"One or more input elements, excluding input type='image' elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has an alt attribute.",
		metaText: "The alt attribute is not allowed on this element",
		metaTextDetail: "The alt attribute is not allowed on this {{tag-name}}",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'input[data-ae_vis][data-ae_avat][data-ae_ar="null"]:not([type="image"])',
				'input[data-ae_vis][data-ae_avat][data-ae_ar="null"]:not([type="image"])[alt]'
			);
		}
	});
}
