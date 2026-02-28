import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-202
 * @returns {AutoTestShell} testShell
 */
export function test202() {
	aeKernel.addAdvisoryAutomaticTest("202", {
		bestPractice:1626,
		testId:202,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more tr elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'row'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'tr[data-ae_vis][data-ae_avat]',
				'tr[data-ae_vis][data-ae_avat][data-ae_ar="row"]'
			);
		}
	});
}
