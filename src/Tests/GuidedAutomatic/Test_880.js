import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";
import {ACCEPTED_LANGUAGE_SUBTAGS, ACCEPTED_LANGUAGE_FULLTAGS} from "../../Utils/aeUtils";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-880
 * @returns {AutoTestShell} testShell
 */
export function test880() {
	aeKernel.addGuidedAutomaticTest("880", {
		bestPractice: 429,
		testId: 880,
		introduced: "2.16",
		mediaType: mediaTypes.WEB,
		description: "The root html element with a lang attribute set to a text value that starts with an IANA primary language has an extended language or region subtag.",
		metaText: "This element has a lang attribute containing an extended language or region subtag which needs to be verified as valid",
		metaTextDetail: 'This {{tag-name}} has a lang attribute of "{{lang}}" containing an extended language or region subtag which needs to be verified as valid',
		fixType: "",
		testFunc: function() {
			const testShell = new AutoTestShell();

			const relevantCssSelector = 'html[lang]:not([lang=""])';

			testShell.set_applicabilityTest(function() {
				return (this.applicableNodesFunc(this._applicableNodesFuncArgs).length > 0);
			});

			testShell.set_applicableNodesFunc(function() {
				const applicableNodes = [];

				const nodesWithLang = this.querySelectorAll(relevantCssSelector);
				for (let i = 0; i < nodesWithLang.length; i++) {
					const nodeWithLang = nodesWithLang[i];

					let lang = nodeWithLang.getAttribute("lang");
					if (lang && !ACCEPTED_LANGUAGE_FULLTAGS[lang.toLowerCase()]) {
						const splitLang = lang.split("-");
						const subtag = splitLang[0].toLowerCase();

						if (ACCEPTED_LANGUAGE_SUBTAGS[subtag]) {
							applicableNodes.push(nodeWithLang);
						}
					}
				}

				return applicableNodes;
			});

			testShell.set_candidateSetNodesFunc(function() {
				const nodes = [];

				const nodesWithLang = this.querySelectorAll(relevantCssSelector);
				for (let i = 0; i < nodesWithLang.length; i++) {
					const nodeWithLang = nodesWithLang[i];

					let lang = nodeWithLang.getAttribute("lang");
					if (lang && !ACCEPTED_LANGUAGE_FULLTAGS[lang.toLowerCase()]) {
						let langExtendedPart = "";

						const splitLang = lang.split("-");
						const subtag = splitLang[0].toLowerCase();
						if (splitLang.length > 1) {
							langExtendedPart = splitLang[1].toLowerCase();
						}

						if (ACCEPTED_LANGUAGE_SUBTAGS[subtag] && langExtendedPart.length > 0) {
							nodes.push(nodeWithLang);
						}
					}
				}

				return nodes;
			});

			return testShell;
		}
	});
}
