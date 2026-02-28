import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-825
 * @returns {AutoTestShell} testShell
 */
export function test825() {
	aeKernel.addAutomaticTest("825", {
		bestPractice: 361,
		testId: 825,
		introduced: "2.15",
		mediaType: mediaTypes.WEB,
		description: "One or more elements in a table, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has a headers attribute value that includes one or more valid ids that point to an element outside the table.",
		metaText: "This element has a headers attribute that includes one or more ids which point to an element outside the table",
		metaTextDetail: "This {{tag-name}} has a headers attribute value of {{headers}} that includes one or more ids which point to an element outside the table",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = "td[data-ae_ar='null'][data-ae_vis][data-ae_avat][headers]:not([headers='']), th[data-ae_ar='null'][data-ae_vis][data-ae_avat][headers]:not([headers=''])";
			const testShell = new AutoTestShell(
				relevantCssSelector
			);

			testShell.set_candidateSetNodesFunc(function() {
				const badNodes = [];

				const tableElements = aeKernel.rootTestNode.querySelectorAll("table");
				for (let i = 0; i < tableElements.length; i++) {
					const relevantTableElement = tableElements[i];

					const relevantTableDataAndHeaderElements = relevantTableElement.querySelectorAll(relevantCssSelector);
					for (let j = 0; j < relevantTableDataAndHeaderElements.length; j++) {
						const relevantTableDataAndHeaderElement = relevantTableDataAndHeaderElements[j];

						const headerIds = relevantTableDataAndHeaderElement.getAttribute("headers").trim().split(/\s+/);
						for (let k = 0; k < headerIds.length; k++) {
							const headerId = headerIds[k];

							// "[id=" is used in place of "#" + id as ids can included colons which breaks css selector, although is valid html
							const headerReferenceNodeInTable = relevantTableElement.querySelector(`[id='${headerId.replace(/'/g, "\\'")}']`);
							if (!headerReferenceNodeInTable) {
								// flag elements that reference a header (by ID) that exists, but is not an ancestor of this table;
								// don't flag elements that reference a header that doesn't exist, as that's beyond the scope of this test
								const headerReferenceNode = aeKernel.rootTestNode.querySelector(`[id='${headerId.replace(/'/g, "\\'")}']`);
								if (headerReferenceNode) {
									badNodes.push(relevantTableDataAndHeaderElement);
									break;
								}
							}
						}
					}
				}

				return badNodes;
			});

			return testShell;
		}
	});
}
