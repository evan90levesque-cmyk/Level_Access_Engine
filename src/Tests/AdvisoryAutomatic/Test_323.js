import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-323
 * @returns {AutoTestShell} testShell
 */
export function test323() {
	aeKernel.addAdvisoryAutomaticTest("323", {
		bestPractice:1626,
		testId:323,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more select elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'listbox'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'select[data-ae_vis][data-ae_avat]',
				'select[data-ae_vis][data-ae_avat][data-ae_ar="listbox"]'
			);
		}
	});
}
