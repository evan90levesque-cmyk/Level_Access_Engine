import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-81
 * @returns {AutoTestShell} testShell
 */
export function test81() {
	aeKernel.addAutomaticTest("81", {
		bestPractice:358,
		testId:81,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more img elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has an ismap attribute.",
		metaText: "This img element has an ismap attribute. Server side image maps are not keyboard accessible and the regions cannot be given accessible names",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'img[data-ae_vis][data-ae_avat][data-ae_ar="null"]',
				'img[data-ae_vis][data-ae_avat][data-ae_ar="null"][ismap]'
			);
		}
	});
}
