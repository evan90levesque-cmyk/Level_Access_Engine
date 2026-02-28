import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-4
 * datalist is display:none by default
 * @returns {AutoTestShell} testShell
 */
export function test4() {
	aeKernel.addAdvisoryAutomaticTest("4", {
		bestPractice:1626,
		testId:4,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more dd elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'definition...'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'dd[data-ae_vis][data-ae_avat]',
				'dd[data-ae_vis][data-ae_avat][data-ae_ar="definition"]'
			);
		}
	});
}
