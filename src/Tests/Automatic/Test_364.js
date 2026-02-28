import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-364
 * @returns {AutoTestShell} testShell
 */
export function test364() {
	aeKernel.addAutomaticTest("364", {
		bestPractice:389,
		testId:364,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more track elements with a kind='descriptions' attribute, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a srclang attribute set to a text value.",
		metaText: "This element does not have a srclang attribute set to a text value",
		metaTextDetail: "This {{tag-name}} does not have a srclang attribute set to a text value",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'track[data-ae_ar="null"][data-ae_vis][data-ae_avat][kind="descriptions"]',
				'track[data-ae_ar="null"][data-ae_vis][data-ae_avat][kind="descriptions"]:not([srclang]),track[data-ae_ar="null"][data-ae_vis][data-ae_avat][kind="descriptions"][srclang=""]'
			);
		}
	});
}
