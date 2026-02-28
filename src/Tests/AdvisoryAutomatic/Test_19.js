import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-19
 * @returns {AutoTestShell} testShell
 */
export function test19() {
	aeKernel.addAdvisoryAutomaticTest("19", {
		bestPractice:1626,
		testId:19,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more A elements with an href attribute, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'link...'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'a[data-ae_vis][data-ae_avat][href]',
				'a[data-ae_vis][data-ae_avat][href][data-ae_ar="link"]'
			);
		}
	});
}
