import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-46
 * datalist is display:none by default
 * @returns {AutoTestShell} testShell
 */
export function test46() {
	aeKernel.addAdvisoryAutomaticTest("46", {
		bestPractice:1626,
		testId:46,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more img elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'img...'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'img[data-ae_vis][data-ae_avat]',
				'img[data-ae_vis][data-ae_avat][data-ae_ar="img"]'
			);
		}
	});
}
