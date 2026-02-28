import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-177
 * @returns {AutoTestShell} testShell
 */
export function test177() {
	aeKernel.addAdvisoryAutomaticTest("177", {
		bestPractice:1626,
		testId:177,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more li elements with a parent that is an ol element (without an ARIA-assigned role) or a ul element (without an ARIA-assigned role), not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'listitem...'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'ol[data-ae_vis][data-ae_avat][data-ae_ar="null"] > li[data-ae_vis][data-ae_avat], ul[data-ae_vis][data-ae_avat][data-ae_ar="null"] > li[data-ae_vis][data-ae_avat]',
				'ol[data-ae_vis][data-ae_avat][data-ae_ar="null"] > li[data-ae_vis][data-ae_avat][data-ae_ar="listitem"], ul[data-ae_vis][data-ae_avat][data-ae_ar="null"] > li[data-ae_vis][data-ae_avat][data-ae_ar="listitem"]'
			);
		}
	});
}
