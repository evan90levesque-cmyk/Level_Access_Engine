import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-82
 * datalist is display:none by default
 * @returns {AutoTestShell} testShell
 */
export function test82() {
	aeKernel.addAdvisoryAutomaticTest("82", {
		bestPractice:1626,
		testId:82,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more figure elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'figure...'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'figure[data-ae_vis][data-ae_avat]',
				'figure[data-ae_vis][data-ae_avat][data-ae_ar="figure"]'
			);
		}
	});
}
