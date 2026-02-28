import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-183
 * @returns {AutoTestShell} testShell
 */
export function test183() {
	aeKernel.addAdvisoryAutomaticTest("183", {
		bestPractice:1626,
		testId:183,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more meter elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'progressbar...'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'meter[data-ae_vis][data-ae_avat]',
				'meter[data-ae_vis][data-ae_avat][data-ae_ar="progressbar"]'
			);
		}
	});
}
