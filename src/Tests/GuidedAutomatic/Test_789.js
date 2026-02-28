import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-789
 * @returns {AutoTestShell} testShell
 */
export function test789() {
	aeKernel.addGuidedAutomaticTest("789", {
		bestPractice: 3115,
		testId: 789,
		introduced: "2.13",
		mediaType: mediaTypes.IOS,
		description: "This application, or the device it was tested on, is locked from changing its orientation.",
		metaText: "This application, or the device it was tested on, is locked from changing its orientation",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = "meta[http-equiv='ScreenOrientation']";
			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[content='autoRotate:disabled']`
			);
		}
	});
}
