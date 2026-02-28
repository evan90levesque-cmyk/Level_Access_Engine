import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-790
 * @returns {AutoTestShell} testShell
 */
export function test790() {
	aeKernel.addAutomaticTest("790", {
		bestPractice: 524,
		testId: 790,
		introduced: "2.13",
		mediaType: mediaTypes.WEB,
		description: "One or more elements with a tabindex attribute set to a value greater than or equal to 0 and any implicitly focusable elements without a tabindex set to a negative value (a elements with an href attribute set to a text value, area elements with an href attribute set to a text value, input elements without a disabled attribute, select elements without a disabled attribute, textarea elements without a disabled attribute, button elements without a disabled attribute, details elements, audio elements with a controls attribute and video elements with a controls attribute), not intentionally hidden in the DOM, has an aria-hidden attribute set to a 'true' value directly on the element.",
		metaText: "This element is focusable and has an aria-hidden attribute set to true",
		metaTextDetail: "This {{tag-name}} is focusable and has an aria-hidden attribute set to true",
		fixType: "",
		testFunc: function() {
			const baseCssSelectors = ["a[data-ae_vis][href]:not([href=''])", "area[href]:not([href=''])", "input[data-ae_vis]:not([disabled])", "select[data-ae_vis]:not([disabled])", "textarea[data-ae_vis]:not([disabled])", "button[data-ae_vis]:not([disabled])", "details[data-ae_vis]", "audio[data-ae_vis][controls]", "video[data-ae_vis][controls]"];

			const noTabIndexAttributeSuffix = ':not([tabindex])';
			const blankTabIndexAttributeValueSuffix = '[tabindex=""]';
			const positiveTabIndexAttributeValueSuffix = `[tabindex]:not([tabindex=""]):not([tabindex^="-"])`;
			const suffixes = [noTabIndexAttributeSuffix, blankTabIndexAttributeValueSuffix, positiveTabIndexAttributeValueSuffix];

			const genericCssSelector = `*[data-ae_vis]${positiveTabIndexAttributeValueSuffix}`;

			let relevantCssSelectorArray = [genericCssSelector];
			let cssSelectorArray = [`${genericCssSelector}[aria-hidden='true']`];

			for (let i = 0; i < baseCssSelectors.length; i++) {
				const baseCssSelector = baseCssSelectors[i];

				for (let l = 0; l < suffixes.length; l++) {
					const suffix = suffixes[l];

					relevantCssSelectorArray.push(`${baseCssSelector}${suffix}`);
					cssSelectorArray.push(`${baseCssSelector}${suffix}[aria-hidden='true']`);
				}
			}

			const relevantCssSelector = relevantCssSelectorArray.join(',');
			const cssSelector = cssSelectorArray.join(',');

			return new AutoTestShell(
				relevantCssSelector,
				cssSelector
			);
		}
	});
}