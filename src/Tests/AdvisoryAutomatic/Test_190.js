import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-190
 * @returns {AutoTestShell} testShell
 */
export function test190() {
	aeKernel.addAdvisoryAutomaticTest("190", {
		bestPractice:1626,
		testId:190,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more section elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'region...'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'section[data-ae_vis][data-ae_avat]',
				'section[data-ae_vis][data-ae_avat][data-ae_ar="region"]'
			);
		}
	});
}
