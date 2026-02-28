import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-194
 * @returns {AutoTestShell} testShell
 */
export function test194() {
	aeKernel.addAdvisoryAutomaticTest("194", {
		bestPractice:1626,
		testId:194,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more table elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'table...'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'table[data-ae_vis][data-ae_avat]',
				'table[data-ae_vis][data-ae_avat][data-ae_ar="table"]'
			);
		}
	});
}
