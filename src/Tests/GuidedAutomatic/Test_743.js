import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-743
 * @returns {AutoTestShell} testShell
 */
export function test743() {
	aeKernel.addGuidedAutomaticTest("743", {
		bestPractice:2617,
		testId:743,
		introduced: "2.11",
		mediaType:mediaTypes.ANDROID,
		description: "One or more ListView elements is focusable.",
		metaText: "This [[object]] element is focusable, and this may cause its sub-elements to not be focusable by a keyboard. Ignore this error if the element is used as a compound control.",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'div[data-xmlnodetype="android.widget.ListView"]',
				'div[data-xmlnodetype="android.widget.ListView"]:not([disabled])'
			);
		}
	});
}