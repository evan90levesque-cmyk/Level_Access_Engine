import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-161
 * @returns {AutoTestShell} testShell
 */
export function test161() {
	aeKernel.addAdvisoryAutomaticTest("161", {
		bestPractice:2518,
		testId:161,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more elements, not intentionally hidden in the DOM, has a color; bgcolor; alink; link; vlink; or text attribute set to a text value.",
		metaText: "This element should not have a color; bgcolor; alink; link; vlink; or text attribute set to a text value",
		fixType: "",
		testFunc: function() {
			// TODO: test applicability seems too broad here
			const relevantCssSelector = '*[data-ae_vis]';

			const failConditionSubSelectors = [
				'[color]:not([color=""])',
				'[bgcolor]:not([bgcolor=""])',
				'[alink]:not([alink=""])',
				'[link]:not([link=""])',
				'[vlink]:not([vlink=""])',
				'[text]:not([text=""])'
			];

			return new AutoTestShell(
				relevantCssSelector,
				failConditionSubSelectors.map(subSelector => `${relevantCssSelector}${subSelector}`).join(', ')
			);
		}
	});
}
