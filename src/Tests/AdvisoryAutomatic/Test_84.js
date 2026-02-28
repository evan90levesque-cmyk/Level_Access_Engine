import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-84
 * datalist is display:none by default
 * @returns {AutoTestShell} testShell
 */
export function test84() {
	aeKernel.addAdvisoryAutomaticTest("84", {
		bestPractice:1626,
		testId:84,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more dl elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'list...'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'dl[data-ae_vis][data-ae_avat]',
				'dl[data-ae_vis][data-ae_avat][data-ae_ar="list"]'
			);
		}
	});
}
