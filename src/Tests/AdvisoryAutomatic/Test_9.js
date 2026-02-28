import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-9
 * @returns {AutoTestShell} testShell
 */
export function test9() {
	aeKernel.addAdvisoryAutomaticTest("9", {
		bestPractice:1626,
		testId:9,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more aside elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'complementary...'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'aside[data-ae_vis][data-ae_avat]',
				'aside[data-ae_vis][data-ae_avat][data-ae_ar="complementary"]'
			);
		}
	});
}
