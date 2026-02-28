import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-187
 * @returns {AutoTestShell} testShell
 */
export function test187() {
	aeKernel.addAdvisoryAutomaticTest("187", {
		bestPractice:1626,
		testId:187,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more output elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'status...'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'output[data-ae_vis][data-ae_avat]',
				'output[data-ae_vis][data-ae_avat][data-ae_ar="status"]'
			);
		}
	});
}
