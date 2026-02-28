import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://levelaccess.atlassian.net/browse/ENG-1126
 * @returns {AutoTestShell} testShell
 */
export function test1126() {
	aeKernel.addGuidedAutomaticTest("1126", {
		bestPractice:1626,
		testId:1126,
		introduced: "2.29",
		mediaType: mediaTypes.WEB,
		description:"One or more OPTION elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has an aria-selected attribute.",
		metaText: "This OPTION element has an aria-selected attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'option[data-ae_ar="null"][data-ae_vis][data-ae_avat]',
				'option[data-ae_ar="null"][data-ae_vis][data-ae_avat][aria-selected]',
			);
		}
	});
}
