import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-1078
 * @returns {AutoTestShell} testShell
 */
export function test1078() {
	aeKernel.addAutomaticTest("1078", {
		bestPractice:1626,
		testId:1078,
		introduced: "2.21",
		mediaType:mediaTypes.WEB,
		description:"One or more elements that has a role='treeitem' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-checked attribute set to one of the text values: 'true | false'.",
		metaText: "This element (role=treeitem) does not have an aria-checked attribute set to one of the text values: true | false",
		metaTextDetail: "This {{tag-name}} (role=treeitem) does not have an aria-checked attribute set to one of the text values: true | false",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][data-ae_ar="treeitem"]',
				'*[data-ae_vis][data-ae_avat][data-ae_ar="treeitem"][aria-checked]:not([aria-checked="true"]):not([aria-checked="false"])'
			);
		}
	});
}
