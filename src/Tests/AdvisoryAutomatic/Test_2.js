import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * NOTE: area element is available to screen-reader users and keyboard users even if it is "display:none"
 * Jira: https://ssbbart.atlassian.net/browse/ENG-2
 * @returns {AutoTestShell} testShell
 */
export function test2() {
	aeKernel.addAdvisoryAutomaticTest("2", {
		bestPractice:1626,
		testId:2,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more area elements with an href attribute, available to assistive technologies, has a role attribute set to the value: 'link...'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'area[data-ae_avat][href]',
				'area[data-ae_avat][href][data-ae_ar="link"]'
			);
		}
	});
}
