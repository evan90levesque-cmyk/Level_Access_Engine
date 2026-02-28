import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {ACCEPTED_LANGUAGE_SUBTAGS, mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-65
 * @returns {AutoTestShell} testShell
 */
export function test65() {
	aeKernel.addAutomaticTest("65", {
		bestPractice: 389,
		testId: 65,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description: "One or more elements, excluding the root html node, not intentionally hidden in the DOM and available to assistive technologies, has a lang attribute set to a text value that is not empty and does not start with an IANA primary language value.",
		metaText: "This element has a lang attribute set to a text value that does not start with an IANA Language Subtag Registry language",
		metaTextDetail: 'This {{tag-name}} has a lang attribute set to a text value of "{{lang}}", which does not start with an IANA Language Subtag Registry language',
		fixType: "",
		testFunc: function() {
			var testShell = new AutoTestShell(
				'*:not(:root)[data-ae_vis][data-ae_avat][lang]:not([lang=""])'
			);
			
			testShell.set_candidateSetNodesFunc(function() {
				const notProper = [];
				const res = aeKernel.rootTestNode.querySelectorAll('*[data-ae_vis][data-ae_avat][lang]:not(:root):not([lang=""])');
				for (let i = 0, len_res = res.length; i < len_res; i++) {
					const result = res[i];
					let lang = result.getAttribute("lang");
					// We only care about the main language attribute before the first dash, if there is one
					lang = lang.split("-")[0].toLowerCase();
					if (lang.length < 2 || lang.length > 3 || !ACCEPTED_LANGUAGE_SUBTAGS[lang]) {
						notProper.push(result);
					}
				}
				return notProper;
			});
			
			return testShell;
		}
	});
}
