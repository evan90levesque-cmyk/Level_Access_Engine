import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-697
 * @returns {AutoTestShell} testShell
 */
export function test697() {
	aeKernel.addAutomaticTest("697", {
		bestPractice:1973,
		testId:697,
		introduced: "2.10",
		mediaType:mediaTypes.ANDROID,
		description:"One or more RadioButton elements is neither checked nor unchecked.",
		metaText: "This [[object]] element does not have a checked attribute set to one of the text values: 'true | false | mixed'.",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][data-ae_ar="radio"]',
				'*[data-ae_vis][data-ae_avat][data-ae_ar="radio"][aria-checked]:not([aria-checked="true"]):not([aria-checked="false"])'
			);
		}
	});
}
