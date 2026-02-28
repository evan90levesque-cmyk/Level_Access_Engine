import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {getBefore_FromStyles, getAfter_FromStyles} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles.js";
import {calcAccNamesForCertainElements} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-253
 * @returns {AutoTestShell} testShell
 */
export function test253() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addGuidedAutomaticTest("253", {
		bestPractice:476,
		testId:253,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more canvas elements, excluding children of button | meter and elements with a role='button | checkbox | img | menuitemcheckbox | menuitemradio | meter | option | progressbar | radio | scrollbar | separator | slider | switch | tab', without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
		metaText: "This canvas element does not have a mechanism that allows an accessible name value to be calculated",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = 'canvas:not(:where(button canvas, meter canvas, [data-ae_ar="button"] canvas, [data-ae_ar="checkbox"] canvas, [data-ae_ar="img"] canvas, [data-ae_ar="menuitemcheckbox"] canvas, [data-ae_ar="menuitemradio"] canvas, [data-ae_ar="meter"] canvas, [data-ae_ar="option"] canvas, [data-ae_ar="progressbar"] canvas, [data-ae_ar="radio"] canvas, [data-ae_ar="scrollbar"] canvas, [data-ae_ar="separator"] canvas, [data-ae_ar="slider"] canvas, [data-ae_ar="switch"] canvas, [data-ae_ar="tab"] canvas))[data-ae_vis][data-ae_avat][data-ae_ar="null"]';

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}:not([data-ae_an])`
			);
		}
	});
}
