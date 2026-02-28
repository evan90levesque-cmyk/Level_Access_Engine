import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {getBefore_FromStyles, getAfter_FromStyles} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles.js";
import {calcAccNamesForCertainElements} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * NOTE: area element is available to screen-reader users and keyboard users even if it is "display:none", so the requirement on the area element in this test to be "not intentionally hidden in the DOM" is dropped.
 * Jira: https://ssbbart.atlassian.net/browse/ENG-230
 * @returns {AutoTestShell} testShell
 */
export function test230() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addAutomaticTest("230", {
		bestPractice:343,
		testId:230,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more area elements, excluding children of button | meter and elements with a role='button | checkbox | img | menuitemcheckbox | menuitemradio | meter | option | progressbar | radio | scrollbar | separator | slider | switch | tab', without an ARIA-assigned role and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated",
		metaText: "This area element does not have a mechanism that allows an accessible name value to be calculated",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = 'area:not(:where(button area, meter area, [data-ae_ar="button"] area, [data-ae_ar="checkbox"] area, [data-ae_ar="img"] area, [data-ae_ar="menuitemcheckbox"] area, [data-ae_ar="menuitemradio"] area, [data-ae_ar="meter"] area, [data-ae_ar="option"] area, [data-ae_ar="progressbar"] area, [data-ae_ar="radio"] area, [data-ae_ar="scrollbar"] area, [data-ae_ar="separator"] area, [data-ae_ar="slider"] area, [data-ae_ar="switch"] area, [data-ae_ar="tab"] area))[data-ae_avat][data-ae_ar="null"]';

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}:not([data-ae_an])`
			);
		}
	});
}
