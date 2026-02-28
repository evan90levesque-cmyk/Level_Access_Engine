import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-610
 * @returns {AutoTestShell} testShell
 */
export function test610() {
	aeKernel.addAutomaticTest("610", {
		bestPractice:1626,
		testId:610,
		introduced: "2.6",
		mediaType: mediaTypes.WEB,
		description:"One or more elements, excluding INPUT type=radio, LI elements, TR elements, ARTICLE elements and elements with a role='article | listitem | option | menuitem | menuitemcheckbox | menuitemradio | radio | row | tab | treeitem' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-setsize attribute.",
		metaText: "The aria-setsize attribute is not allowed on this element because it is either not the correct element type or role attribute",
		metaTextDetail: "The aria-setsize attribute is not allowed on this {{tag-name}} because it is either not the correct element type or role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][aria-setsize]',
				'*[data-ae_vis][data-ae_avat]:not(input[type="radio"], li, tr, article):not([data-ae_ar="article"], [data-ae_ar="listitem"], [data-ae_ar="menuitem"], [data-ae_ar="menuitemcheckbox"], [data-ae_ar="menuitemradio"], [data-ae_ar="option"], [data-ae_ar="radio"], [data-ae_ar="tab"], [data-ae_ar="treeitem"], [data-ae_ar="row"])[aria-setsize]'
			);
		}
	});
}