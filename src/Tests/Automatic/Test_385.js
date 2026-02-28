import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {testUtil_ifDiff} from "../../Tests/TestUtils/testUtil_ifDiff.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-385
 * @returns {AutoTestShell} testShell
 */
export function test385() {
	aeKernel.addAutomaticTest("385", {
		bestPractice: 464,
		testId: 385,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description: "One or more elements with a role='listitem' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have a parent that is a UL element (without an ARIA-assigned role), OL element (without an ARIA-assigned role), MENU element (without an ARIA-assigned role), an element with a role='list' or an element with a role='group'; or a UL element (without an ARIA-assigned role), OL element (without an ARIA-assigned role), MENU element (without an ARIA-assigned role), element with a role='list' or element with a role='group' with an aria-owns attribute set to the ID of the element with a role='listitem' in the same DOM.",
		metaText: "This element does not have a parent that is a UL element (without an ARIA-assigned role), OL element (without an ARIA-assigned role), MENU element (without an ARIA-assigned role), an element with a role='list' or an element with a role='group'; or a UL element (without an ARIA-assigned role), OL element (without an ARIA-assigned role), MENU element (without an ARIA-assigned role), element with a role='list' or element with a role='group' with an aria-owns attribute set to the ID of the element with a role='listitem' in the same DOM",
		metaTextDetail: "This {{tag-name}} does not have a parent that is a UL element (without an ARIA-assigned role), OL element (without an ARIA-assigned role), MENU element (without an ARIA-assigned role), an element with a role='list' or an element with a role='group'; or a UL element (without an ARIA-assigned role), OL element (without an ARIA-assigned role), MENU element (without an ARIA-assigned role), element with a role='list' or element with a role='group' with an aria-owns attribute set to the ID of the element with a role='listitem' in the same DOM",
		fixType: "",
		testFunc: function() {
			const listItemCssSelector = '*[data-ae_ar="listitem"][data-ae_vis][data-ae_avat]';

			const testShell = new AutoTestShell(
				listItemCssSelector
			);

			testShell.set_candidateSetNodesFunc(function() {
				const badNodes = [];

				const ulNoRoleCssSelector = 'ul[data-ae_ar="null"][data-ae_vis][data-ae_avat]';
				const olNoRoleCssSelector = 'ol[data-ae_ar="null"][data-ae_vis][data-ae_avat]';
				const menuNoRoleCssSelector = 'menu[data-ae_ar="null"][data-ae_vis][data-ae_avat]';

				const elementListRoleCssSelector = '*[data-ae_ar="list"][data-ae_vis][data-ae_avat]';
				const elementGroupRoleCssSelector = '*[data-ae_ar="group"][data-ae_vis][data-ae_avat]';

				const badNodeCandidates = testUtil_ifDiff(aeKernel.rootTestNode, [listItemCssSelector, `${ulNoRoleCssSelector} > ${listItemCssSelector}, ${olNoRoleCssSelector} > ${listItemCssSelector}, ${elementListRoleCssSelector} > ${listItemCssSelector}, ${menuNoRoleCssSelector} > ${listItemCssSelector}, ${elementGroupRoleCssSelector} > ${listItemCssSelector}`]);
				for (let i = 0; i < badNodeCandidates.length; i++) {
					const badNodeCandidate = badNodeCandidates[i];

					let isBadNode = true;

					const badNodeCandidateId = badNodeCandidate.getAttribute('id');
					if (badNodeCandidateId) {
						const isBadNodeNotInShadowDOM = aeKernel.rootTestNode.querySelector(`[id='${badNodeCandidateId.replace(/'/g, "\\'")}']:not([data-ae_inshdw])`);
						if (isBadNodeNotInShadowDOM) {
							// value for aria-owns can include multiple IDs in a space-delimited list
							const ariaOwnsStartCssSelectorPostfix = `[aria-owns^='${badNodeCandidateId.replace(/'/g, "\\'")}']`;
							const ariaOwnsMiddleCssSelectorPostfix = `[aria-owns*='${" " + badNodeCandidateId.replace(/'/g, "\\'")}']`;
							const ariaOwnsEndCssSelectorPostfix = `[aria-owns$='${badNodeCandidateId.replace(/'/g, "\\'")}']`;

							const ulNoRoleAriaOwnsCssSelector = `${ulNoRoleCssSelector}${ariaOwnsStartCssSelectorPostfix}, ${ulNoRoleCssSelector}${ariaOwnsMiddleCssSelectorPostfix}, ${ulNoRoleCssSelector}${ariaOwnsEndCssSelectorPostfix}`;
							const olNoRoleAriaOwnsCssSelector = `${olNoRoleCssSelector}${ariaOwnsStartCssSelectorPostfix}, ${olNoRoleCssSelector}${ariaOwnsMiddleCssSelectorPostfix}, ${olNoRoleCssSelector}${ariaOwnsEndCssSelectorPostfix}`;
							const menuNoRoleAriaOwnsCssSelector = `${menuNoRoleCssSelector}${ariaOwnsStartCssSelectorPostfix}, ${menuNoRoleCssSelector}${ariaOwnsMiddleCssSelectorPostfix}, ${menuNoRoleCssSelector}${ariaOwnsEndCssSelectorPostfix}`;

							const elementListRoleAriaOwnsCssSelector = `${elementListRoleCssSelector}${ariaOwnsStartCssSelectorPostfix}, ${elementListRoleCssSelector}${ariaOwnsMiddleCssSelectorPostfix}, ${elementListRoleCssSelector}${ariaOwnsEndCssSelectorPostfix}`;
							const elementGroupRoleAriaOwnsCssSelector = `${elementGroupRoleCssSelector}${ariaOwnsStartCssSelectorPostfix}, ${elementGroupRoleCssSelector}${ariaOwnsMiddleCssSelectorPostfix}, ${elementGroupRoleCssSelector}${ariaOwnsEndCssSelectorPostfix}`;

							const badNodeCandidateOwner = aeKernel.rootTestNode.querySelector(`${ulNoRoleAriaOwnsCssSelector}, ${olNoRoleAriaOwnsCssSelector}, ${menuNoRoleAriaOwnsCssSelector}, ${elementListRoleAriaOwnsCssSelector}, ${elementGroupRoleAriaOwnsCssSelector}`);
							if (badNodeCandidateOwner) {
								isBadNode = false;
							}
						}
					}

					if (isBadNode) {
						badNodes.push(badNodeCandidate)
					}
				}

				return badNodes;
			});

			return testShell;
		}
	});
}