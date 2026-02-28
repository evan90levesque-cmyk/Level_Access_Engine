import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-828
 * @returns {AutoTestShell} testShell
 */
export function test828() {
	aeKernel.addAutomaticTest("828", {
		bestPractice: 361,
		testId: 828,
		introduced: "2.15",
		mediaType: mediaTypes.WEB,
		description: "One or more elements in a table, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has a headers attribute value that includes one or more valid ids that point to an element that is not a td, th or element with a role of cell, gridcell, columnheader or rowheader.",
		metaText: "This element has a headers attribute that points to an element which is not a table cell",
		metaTextDetail: "This {{tag-name}} has a headers attribute that points to an element which is not a table cell",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = "td[data-ae_ar='null'][data-ae_vis][data-ae_avat][headers]:not([headers='']), th[data-ae_ar='null'][data-ae_vis][data-ae_avat][headers]:not([headers=''])";
			const testShell = new AutoTestShell(
				relevantCssSelector
			);

			testShell.set_candidateSetNodesFunc(function() {
				const badNodes = [];

				const relevantTableDataAndHeaderElements = aeKernel.rootTestNode.querySelectorAll(relevantCssSelector);
				for (let i = 0; i < relevantTableDataAndHeaderElements.length; i++) {
					const relevantTableDataAndHeaderElement = relevantTableDataAndHeaderElements[i];

					const headerIds = relevantTableDataAndHeaderElement.getAttribute("headers").trim().split(/\s+/);
					for (let j = 0; j < headerIds.length; j++) {
						const headerId = headerIds[j];

						// "[id=" is used in place of "#" + id as ids can included colons which breaks css selector, although is valid html
						const headerReferenceTableCellNode = aeKernel.rootTestNode.querySelector(`td[id='${headerId.replace(/'/g, "\\'")}'], th[id='${headerId.replace(/'/g, "\\'")}'], *[id='${headerId.replace(/'/g, "\\'")}'][data-ae_ar="cell"], *[id='${headerId.replace(/'/g, "\\'")}'][data-ae_ar="gridcell"], *[id='${headerId.replace(/'/g, "\\'")}'][data-ae_ar="columnheader"], *[id='${headerId.replace(/'/g, "\\'")}'][data-ae_ar="rowheader"]`);
						if (!headerReferenceTableCellNode) {
							// flag elements that reference a header (by ID) that exists, but is not a table cell;
							// don't flag elements that reference a header that doesn't exist, as that's beyond the scope of this test
							const headerReferenceNode = aeKernel.rootTestNode.querySelector(`[id='${headerId.replace(/'/g, "\\'")}']`);
							if (headerReferenceNode) {
								badNodes.push(relevantTableDataAndHeaderElement);
								break;
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
