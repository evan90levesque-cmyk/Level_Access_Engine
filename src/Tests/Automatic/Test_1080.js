import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-1080
 * @returns {AutoTestShell} testShell
 */
export function test1080() {
	aeKernel.addAutomaticTest("1080", {
		bestPractice:1626,
		testId:1080,
		introduced: "2.21",
		mediaType: mediaTypes.WEB,
		description:"One or more elements that has a role='treeitem' attribute and an aria-checked attribute, not intentionally hidden in the DOM and available to assistive technologies, also has an aria-selected attribute.",
		metaText: "This element (role=treeitem) has both aria-checked and aria-selected attributes",
		metaTextDetail: "This {{tag-name}} (role=treeitem) has both aria-checked and aria-selected attributes",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][data-ae_ar="treeitem"]',
				'*[data-ae_vis][data-ae_avat][data-ae_ar="treeitem"][aria-checked][aria-selected]',
			);
		}
	});
}
