import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-181
 * @returns {AutoTestShell} testShell
 */
export function test181() {
	aeKernel.addAdvisoryAutomaticTest("181", {
		bestPractice:1626,
		testId:181,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more menu type='toolbar' elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value:'toolbar...'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'menu[data-ae_vis][data-ae_avat][type="toolbar"]',
				'menu[data-ae_vis][data-ae_avat][type="toolbar"][data-ae_ar="toolbar"]'
			);
		}
	});
}
