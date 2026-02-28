import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-201
 * @returns {AutoTestShell} testShell
 */
export function test201() {
	aeKernel.addAdvisoryAutomaticTest("201", {
		bestPractice:1626,
		testId:201,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more th elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'columnheader... | rowheader...'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'th[data-ae_vis][data-ae_avat]',
				'th[data-ae_vis][data-ae_avat][data-ae_ar="columnheader"], th[data-ae_vis][data-ae_avat][data-ae_ar="rowheader"]'
			);
		}
	});
}
