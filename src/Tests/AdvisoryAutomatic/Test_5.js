import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-5
 * datalist is display:none by default
 * @returns {AutoTestShell} testShell
 */
export function test5() {
	aeKernel.addAdvisoryAutomaticTest("5", {
		bestPractice:1626,
		testId:5,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more datalist elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'listbox...'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'datalist[data-ae_vis][data-ae_avat]',
				'datalist[data-ae_vis][data-ae_avat][data-ae_ar="listbox"]'
			);
		}
	});
}
