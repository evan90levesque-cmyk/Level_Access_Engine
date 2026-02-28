import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-169
 * @returns {AutoTestShell} testShell
 */
export function test169() {
	aeKernel.addAutomaticTest("169", {
		bestPractice:1626,
		testId:169,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more input type='image' elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'button...'.",
		metaText: "This element has a redundant role attribute",
		metaTextDetail: "This {{tag-name}} with type=image has a redundant role attribute of {{data-ae_ar}}",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'input[data-ae_vis][data-ae_avat][type="image"]',
				'input[data-ae_vis][data-ae_avat][type="image"][data-ae_ar="button"]'
			);
		}
	});
}
