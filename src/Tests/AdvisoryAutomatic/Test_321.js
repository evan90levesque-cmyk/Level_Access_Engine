import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-321
 * @returns {AutoTestShell} testShell
 */
export function test321() {
	aeKernel.addAdvisoryAutomaticTest("321", {
		bestPractice:1626,
		testId:321,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more option elements, that is a child of a select element (without an ARIA-assigned role); an optgroup element (without an ARIA-assigned role) or a datalist element (without an ARIA-assigned role), not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'option'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'select[data-ae_ar="null"] option[data-ae_vis][data-ae_avat], optgroup[data-ae_ar="null"] option[data-ae_vis][data-ae_avat], datalist[data-ae_ar="null"] option[data-ae_vis][data-ae_avat]',
				'select[data-ae_ar="null"] option[data-ae_vis][data-ae_avat][data-ae_ar="option"], optgroup[data-ae_ar="null"] option[data-ae_vis][data-ae_avat][data-ae_ar="option"], datalist[data-ae_ar="null"] option[data-ae_vis][data-ae_avat][data-ae_ar="option"]'
			);
		}
	});
}
