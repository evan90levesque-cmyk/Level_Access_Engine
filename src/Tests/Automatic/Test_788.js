import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-788
 * @returns {AutoTestShell} testShell
 */
export function test788() {
	aeKernel.addAutomaticTest("788", {
		bestPractice: 3112,
		testId: 788,
		introduced: "2.13",
		mediaType: mediaTypes.ANDROID,
		description: "This application is locked from changing its orientation.",
		metaText: "This application is locked from changing its orientation",
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
