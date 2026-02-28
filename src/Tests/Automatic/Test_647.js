import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {ACCEPTED_LANGUAGE_SUBTAGS, mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-647
 * @returns {AutoTestShell} testShell
 */
export function test647() {
	aeKernel.addAutomaticTest("647", {
		bestPractice: 429,
		testId: 647,
		introduced: "2.9",
		mediaType: mediaTypes.WEB,
		description: "The root html element does not have a lang attribute set to a text value that starts with an IANA primary language value.",
		metaText: "This element does not have a lang attribute set to a text value that start with an IANA Language Subtag Registry language value",
		metaTextDetail: 'This {{tag-name}} has a lang attribute of "{{lang}}", which is not a text value that start with an IANA Language Subtag Registry language value',
		fixType: "",
		testFunc: function() {
			const testShell = new AutoTestShell(
				'html[lang]'
			);

			testShell.set_candidateSetNodesFunc(function() {
				const notProper = [];

				const htmlElement = this.querySelector('html[lang]');
				let lang = htmlElement.getAttribute("lang");
				if (lang !== "") {
					//We only care about the main language attribute before the first dash, if there is one
					lang = lang.split("-")[0].toLowerCase();
					if (lang.length < 2 || lang.length > 3 || !ACCEPTED_LANGUAGE_SUBTAGS[lang]) {
						notProper.push(htmlElement);
					}
				} else {
					notProper.push(htmlElement);
				}

				return notProper;
			});
			
			return testShell;
		}
	});
}
