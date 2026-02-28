import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-598
 * @returns {AutoTestShell} testShell
 */
export function test598() {
	aeKernel.addGuidedAutomaticTest("598", {
		bestPractice:2895,
		testId:598,
		introduced: "2.11",
		mediaType: mediaTypes.WEB,
		description:"One or more track elements, without an ARIA-assigned role, not intentionally hidden in the DOM, with a kind attribute set to 'descriptions' were found to have a src attribute that does not end in .vtt.",
		metaText: "This descriptions track element src should end in .vtt",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
					'track[data-ae_vis][data-ae_avat][data-ae_ar="null"][kind="descriptions"][src]:not([src=""])',
					'track[data-ae_vis][data-ae_avat][data-ae_ar="null"][kind="descriptions"][src]:not([src=""]):not([src$=".vtt"]):not([src$=".Vtt"]):not([src$=".vTt"]):not([src$=".vtt"]):not([src$=".VTt"]):not([src$=".vtT"]):not([src$=".VtT"]):not([src$=".vTT"]):not([src$=".VTT"])'
			);
		}
	});
}
