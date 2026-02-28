import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-193
 * @returns {AutoTestShell} testShell
 */
export function test193() {
	aeKernel.addAdvisoryAutomaticTest("193", {
		bestPractice:1626,
		testId:193,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more summary elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'button...'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'summary[data-ae_vis][data-ae_avat]',
				'summary[data-ae_vis][data-ae_avat][data-ae_ar="button"]'
			);
		}
	});
}
