import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-320
 * @returns {AutoTestShell} testShell
 */
export function test320() {
	aeKernel.addAdvisoryAutomaticTest("320", {
		bestPractice:1626,
		testId:320,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more optgroup elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'group'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'optgroup[data-ae_vis][data-ae_avat]',
				'optgroup[data-ae_vis][data-ae_avat][data-ae_ar="group"]'
			);
		}
	});
}
