import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-24
 * @returns {AutoTestShell} testShell
 */
export function test24() {
	aeKernel.addAdvisoryAutomaticTest("24", {
		bestPractice:343,
		testId:24,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more map elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not contain a name attribute set to a text value.",
		metaText: "This element does not contain a name attribute set to a text value",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'map[data-ae_vis][data-ae_avat][data-ae_ar="null"]',
				'map[data-ae_vis][data-ae_avat][data-ae_ar="null"]:not([name]),map[data-ae_vis][data-ae_avat][data-ae_ar="null"][name=""]'
			);
		}
	});
}
