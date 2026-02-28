import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-779
 * @returns {AutoTestShell} testShell
 */
export function test779() {
	aeKernel.addAutomaticTest("779", {
		bestPractice: 2900,
		testId: 779,
		introduced: "2.13",
		mediaType: mediaTypes.WEB,
		description: "One or more meta elements, in the head element, has a content attribute set to a value that includes an instruction that stops a user rotating the viewport size i.e. 'autoRotate:disabled'.",
		metaText: "This element has a content attribute set to a value that includes an instruction that stops a user rotating the viewport",
		metaTextDetail: "This {{tag-name}} has a content attribute set to a value that includes an instruction that stops a user rotating the viewport",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = 'head meta[http-equiv="ScreenOrientation"]';

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[content~="autoRotate:disabled"]`
			);
		}
	});
}
