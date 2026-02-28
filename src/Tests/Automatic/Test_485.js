import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-485
 * @returns {AutoTestShell} testShell
 */
export function test485() {
	aeKernel.addAutomaticTest("485", {
		bestPractice:2049,
		testId:485,
		introduced: "2.2",
		mediaType: mediaTypes.WEB,
		description:"One or more track elements with a kind='captions' attribute, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a src attribute set to a text value.",
		metaText: "This track element does not have a src attribute or it is set to a null text value",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'track[kind="captions"][data-ae_vis][data-ae_avat][data-ae_ar="null"]',
				'track[kind="captions"][data-ae_vis][data-ae_avat][data-ae_ar="null"]:not([src]),track[kind="captions"][data-ae_vis][data-ae_avat][data-ae_ar="null"][src=""]'
			);
		}
	});
}
