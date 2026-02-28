import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-36
 * @returns {AutoTestShell} testShell
 */
export function test36() {
	aeKernel.addAdvisoryAutomaticTest("36", {
		bestPractice:332,
		testId:36,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more legend elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, were found to be empty.",
		metaText: "This legend element should not be empty",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'legend[data-ae_ar="null"][data-ae_vis][data-ae_avat]',
				'legend[data-ae_ar="null"][data-ae_vis][data-ae_avat]:empty'
			);
		}
	});
}
