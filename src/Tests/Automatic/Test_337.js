import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-337
 * @returns {AutoTestShell} testShell
 */
export function test337() {
	aeKernel.addAutomaticTest("337", {
		bestPractice: 1626,
		testId: 337,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description: "One or more elements that has a role='button' excluding a, area, input, button and textarea elements, elements with a disabled attribute; or aria-disabled attribute set to a 'true' value; or referenced by aria-activedescendant, not intentionally hidden in the DOM and available to assistive technologies lacks a tabindex attribute set to 0 or a negative value.",
		metaText: "This element (role=button) does not have a tabindex attribute set to 0 or a negative value",
		metaTextDetail: "This {{tag-name}} (role=button) does not have a tabindex attribute set to 0 or a negative value",
		fixType: "",
		testFunc: function() {
			const baseCssSelector = '*[data-ae_vis][data-ae_avat][data-ae_ar="button"]:not(a):not(area):not(input):not(button):not(textarea):not([disabled]):not([aria-disabled="true"])';

			const testShell = new AutoTestShell(
				baseCssSelector
			);

			testShell.set_candidateSetNodesFunc(function() {
				const badNodes = [];

				const badNodeCandidates = aeKernel.rootTestNode.querySelectorAll(`${baseCssSelector}[tabindex]:not([tabindex=""]):not([tabindex="0"]):not([tabindex^="-"])`);
				for (let i = 0; i < badNodeCandidates.length; i++) {
					const badNodeCandidate = badNodeCandidates[i];

					let isBadNode = true;

					// nodes whose ID is referenced by another node's aria-activedescendant attribute are not bad nodes
					const badNodeCandidateId = badNodeCandidate.getAttribute('id');
					if (badNodeCandidateId) {
						const isBadNodeCandidateActiveDescendant = aeKernel.rootTestNode.querySelector("[aria-activedescendant='" + badNodeCandidateId.replace(/'/g, "\\'") + "']");
						if (isBadNodeCandidateActiveDescendant) {
							isBadNode = false;
						}
					}

					if (isBadNode) {
						badNodes.push(badNodeCandidate);
					}
				}

				return badNodes;
			});

			return testShell;
		}
	});
}
