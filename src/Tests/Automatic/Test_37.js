import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-37
 * @returns {AutoTestShell} testShell
 */
export function test37() {
	aeKernel.addAutomaticTest("37", {
		bestPractice:1626,
		testId:37,
		introduced: "0.9",
		mediaType:mediaTypes.WEB,
		description:"One or more A elements with an href attribute, excluding those with a role='link...' attribute, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to a value that is not: 'button... | checkbox... | menuitem... | menuitemcheckbox... | menuitemradio... | option... | radio... | tab... | switch... | treeitem...'",
		metaText: "The role attribute value given to this element is not allowed.  The element's role attribute should be set to one of the following text values: button | checkbox | menuitem | menuitemcheckbox | menuitemradio | radio | tab | switch | treeitem; or the role attribute can be removed",
		metaTextDetail: "The role attribute value of '{{data-ae_ar}}' given to this {{tag-name}} is not allowed.  The element's role attribute should be set to one of the following text values: button | checkbox | menuitem | menuitemcheckbox | menuitemradio | radio | tab | switch | treeitem; or the role attribute can be removed",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'a[data-ae_vis][data-ae_avat][href]:not([data-ae_ar="null"]):not([data-ae_ar="link"])',
				'a[data-ae_vis][data-ae_avat][href]:not([data-ae_ar="null"]):not([data-ae_ar="link"]):not([data-ae_ar="button"]):not([data-ae_ar="checkbox"]):not([data-ae_ar="menuitem"]):not([data-ae_ar="menuitemcheckbox"]):not([data-ae_ar="menuitemradio"]):not([data-ae_ar="option"]):not([data-ae_ar="radio"]):not([data-ae_ar="tab"]):not([data-ae_ar="switch"]):not([data-ae_ar="treeitem"])'
			);
		}
	});
}
