import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-279
 * @returns {AutoTestShell} testShell
 */
export function test279() {
	aeKernel.addAutomaticTest("279", {
		bestPractice:1626,
		testId:279,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more elements, excluding INPUT type=radio elements, LI elements, TR elements , ARTICLE elements and elements with a role='article | listitem | option | menuitem | menuitemcheckbox | menuitemradio | radio | row | tab | treeitem' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-posinset attribute.",
		metaText: "The aria-posinset attribute is not allowed on this element because it is either not the correct element type or role attribute",
		metaTextDetail: "The aria-posinset attribute is not allowed on this {{tag-name}} because it is either not the correct element type or role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][aria-posinset]',
				'*[data-ae_vis][data-ae_avat]:not(input[type="radio"]):not(li):not(tr):not(article):not([data-ae_ar="article"]):not([data-ae_ar="listitem"]):not([data-ae_ar="menuitem"]):not([data-ae_ar="menuitemcheckbox"]):not([data-ae_ar="menuitemradio"]):not([data-ae_ar="option"]):not([data-ae_ar="radio"]):not([data-ae_ar="treegrid"] [data-ae_ar="row"]):not([data-ae_ar="tab"]):not([data-ae_ar="treeitem"])[aria-posinset]'
			);
		}
	});
}