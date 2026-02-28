import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-479
 * @returns {AutoTestShell} testShell
 */
export function test479() {
	aeKernel.addGuidedAutomaticTest("479", {
		bestPractice:2049,
		testId:479,
		introduced: "2.1",
		mediaType: mediaTypes.WEB,
		description:"One or more track elements, without an ARIA-assigned role, not intentionally hidden in the DOM, with a kind attribute set to 'captions' were found to have a src attribute that does not end in .vtt.",
		metaText: "This captions track element src should end in .vtt",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
					'track[data-ae_vis][data-ae_avat][data-ae_ar="null"][kind="captions"][src]:not([src=""])',
					'track[data-ae_vis][data-ae_avat][data-ae_ar="null"][kind="captions"][src]:not([src=""]):not([src$=".vtt"]):not([src$=".Vtt"]):not([src$=".vTt"]):not([src$=".vtt"]):not([src$=".VTt"]):not([src$=".vtT"]):not([src$=".VtT"]):not([src$=".vTT"]):not([src$=".VTT"])'
			);
		}
	});
}
