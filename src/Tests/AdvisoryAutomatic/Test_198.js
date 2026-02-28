import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-198
 * @returns {AutoTestShell} testShell
 */
export function test198() {
	aeKernel.addAdvisoryAutomaticTest("198", {
		bestPractice:1626,
		testId:198,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more tfoot elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'rowgroup...'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'tfoot[data-ae_vis][data-ae_avat]',
				'tfoot[data-ae_vis][data-ae_avat][data-ae_ar="rowgroup"]'
			);
		}
	});
}
