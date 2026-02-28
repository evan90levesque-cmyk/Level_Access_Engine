import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://levelaccess.atlassian.net/browse/ENG-1108
 * @returns {AutoTestShell} testShell
 */
export function test1108() {
	aeKernel.addAutomaticTest("1108", {
		bestPractice:1456,
		testId:1108,
		introduced: "2.21",
		mediaType: mediaTypes.WEB,
		description:"One or more img elements with an alt attribute set to a null value, without an ARIA-assigned role other than img, not intentionally hidden in the DOM and available to assistive technologies, has an aria-labelledby attribute.",
		metaText: "This IMG with an alt='' has an aria-labelledby attribute.",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'img[alt=""][data-ae_ar="null"][data-ae_vis][data-ae_avat],img[alt=""][data-ae_ar="img"][data-ae_vis][data-ae_avat]',
				'img[alt=""][data-ae_ar="null"][data-ae_vis][data-ae_avat][aria-labelledby],img[alt=""][data-ae_ar="img"][data-ae_vis][data-ae_avat][aria-labelledby]'
			);
		}
	});
}
