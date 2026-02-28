import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-55
 * @returns {AutoTestShell} testShell
 */
export function test55() {
	aeKernel.addAutomaticTest("55", {
		bestPractice:410,
		testId:55,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more meta elements, in the head element, has a content attribute set to a value that includes an instruction that stops a user scaling the viewport size i.e. 'user-scalable=no'.",
		metaText: "This element has a content attribute set to a value that includes an instruction that stops a user scaling the viewport size",
		metaTextDetail: "This {{tag-name}} has a content attribute set to a value that includes an instruction that stops a user scaling the viewport size",
		fixType: {
			"fixType":1,
			"domSpec":false,
			"helperText":'Select "Save" to change the viewport content attribute to "width=device-width, initial-scale=1.0", or "Cancel" if the fix should not be applied.',
			"fix":{
				"content":"width=device-width, initial-scale=1.0"
			}
		},
		testFunc: function() {
			const relevantCssSelector = 'head meta[content]';

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[content~="user-scalable=no"]`
			);
		}
	});
}
