import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-295
 * @returns {AutoTestShell} testShell
 */
export function test295() {
	aeKernel.addAdvisoryAutomaticTest("295", {
		bestPractice:1626,
		testId:295,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more form elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'form'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'form[data-ae_vis][data-ae_avat]',
				'form[data-ae_vis][data-ae_avat][data-ae_ar="form"]'
			);
		}
	});
}
