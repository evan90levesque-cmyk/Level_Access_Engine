import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-77
 * datalist is display:none by default
 * @returns {AutoTestShell} testShell
 */
export function test77() {
	aeKernel.addAdvisoryAutomaticTest("77", {
		bestPractice:1626,
		testId:77,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more details elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'group...'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'details[data-ae_vis][data-ae_avat]',
				'details[data-ae_vis][data-ae_avat][data-ae_ar="group"]'
			);
		}
	});
}
