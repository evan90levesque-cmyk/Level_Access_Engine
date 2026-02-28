import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-200
 * @returns {AutoTestShell} testShell
 */
export function test200() {
	aeKernel.addAdvisoryAutomaticTest("200", {
		bestPractice:1626,
		testId:200,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more td elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'cell...'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'td[data-ae_vis][data-ae_avat]',
				'td[data-ae_vis][data-ae_avat][data-ae_ar="cell"]'
			);
		}
	});
}
