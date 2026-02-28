import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-693
 * @returns {AutoTestShell} testShell
 */
export function test693() {
	aeKernel.addAutomaticTest("693", {
		bestPractice:1973,
		testId:693,
		introduced: "2.10",
		mediaType: mediaTypes.ANDROID,
		description:"One or more CheckBox or ToggleButton elements is neither checked nor unchecked.",
		metaText:"This [[object]] element does not have a checked attribute set to one of the text values: 'true | false | mixed'.",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][data-ae_ar="checkbox"]',
				'*[data-ae_vis][data-ae_avat][data-ae_ar="checkbox"][aria-checked]:not([aria-checked="true"]):not([aria-checked="false"]):not([aria-checked="mixed"])'
			);
		}
	});
}
