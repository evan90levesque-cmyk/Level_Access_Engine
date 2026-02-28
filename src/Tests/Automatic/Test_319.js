import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-319
 * @returns {AutoTestShell} testShell
 */
export function test319() {
	aeKernel.addAutomaticTest("319", {
		bestPractice:1626,
		testId:319,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more ol elements, excluding those with a role='list' attribute, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to a value that is not: 'directory | group | listbox | menu | menubar | radiogroup | tablist | toolbar | tree'.",
		metaText: "The role attribute value given to this element is not allowed.  This element's role attribute can be set to one of the following text values: directory | group | listbox | menu | menubar | radiogroup | tablist | toolbar | tree; or the role attribute can be removed",
		metaTextDetail: "The role attribute value given to this {{tag-name}} is not allowed.  This element's role attribute can be set to one of the following text values: directory | group | listbox | menu | menubar | radiogroup | tablist | toolbar | tree; or the role attribute can be removed",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'ol[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"]):not([data-ae_ar="list"])',
				'ol[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"]):not([data-ae_ar="list"]):not([data-ae_ar="directory"]):not([data-ae_ar="group"]):not([data-ae_ar="listbox"]):not([data-ae_ar="menu"]):not([data-ae_ar="menubar"]):not([data-ae_ar="radiogroup"]):not([data-ae_ar="tablist"]):not([data-ae_ar="toolbar"]):not([data-ae_ar="tree"])'
			);
		}
	});
}
