import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-402 (supercedes 139)
 * @returns {AutoTestShell} testShell
 */
export function test402() {
	aeKernel.addGuidedAutomaticTest("402", {
		bestPractice: 387,
		testId: 402,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description: "One or more elements (created using h1 - h6 elements (without an ARIA-assigned role); or elements with a role attribute set to a value that starts with 'heading' and an aria-level attribute set to an appropriate value), excluding elements contained in modal dialog elements with an open attribute and elements with role=dialog or role=alertdialog (with aria-modal=true), not intentionally hidden in the DOM and available to assistive technologies, creates an inappropriate jump in heading levels within the document heading hierarchy.",
		metaText: "This element creates an inappropriate jump in heading levels within the document heading hierarchy",
		metaTextDetail: "This {{tag-name}} creates an inappropriate jump in heading levels within the document heading hierarchy",
		fixType: {
			"fixType":1,
			"domSpec":false,
			"helperText":"Specify the correct heading level for this element.",
			"fix":{
				"aria-level":null
			}
		},
		testFunc: function() {
			const testShell = new AutoTestShell();

			const headerCssSelector = "h1[data-ae_ar='null'][data-ae_vis]:not(:empty), h2[data-ae_ar='null'][data-ae_vis]:not(:empty), h3[data-ae_ar='null'][data-ae_vis]:not(:empty), h4[data-ae_ar='null'][data-ae_vis]:not(:empty), h5[data-ae_ar='null'][data-ae_vis]:not(:empty), h6[data-ae_ar='null'][data-ae_vis]:not(:empty), *[data-ae_ar='heading'][data-ae_vis][aria-level]:not(:empty)";

            const isInModalDialog = header =>
                !!header.closest('dialog[open]') ||
                !!header.closest('[role="dialog"][aria-modal="true"]') ||
                !!header.closest('[role="alertdialog"][aria-modal="true"]');

			testShell.set_applicabilityTest(function() {
				return (this.applicableNodesFunc(this._applicableNodesFuncArgs).length === 1);
			});

			testShell.set_applicableNodesFunc(function() {
				const applicableNodes = [];

				const res = this.querySelector('body');

                if (!res) {
                    return applicableNodes;
                }

                const firstHeader = res.querySelector(headerCssSelector);

                if (firstHeader && !isInModalDialog(firstHeader)) {
                    applicableNodes.push(firstHeader);
                }

                return applicableNodes;
			});

			testShell.set_candidateSetNodesFunc(function() {
                const res = this.querySelector('body');
                const incorrectlyNestedHeaders = [];

                if (!res) {
                    return incorrectlyNestedHeaders;
                }

                const headers = res.querySelectorAll(headerCssSelector);
                const numHeads = headers.length;

                const headersAsInts = [];
                // turn header text values into a stack of integers
                for (let i = 0; i < headers.length; i++) {
                    // skip headers in modal dialogs
                    if (isInModalDialog(headers[i])) {
                        continue;
                    }

                    const ariaLevel = headers[i].getAttribute("aria-level");
                    if (ariaLevel !== null) {
                        headersAsInts[headersAsInts.length] = parseInt(ariaLevel);
                    } else {
                        headersAsInts[headersAsInts.length] = parseInt(headers[i].tagName[1]);
                    }
                }
                let k = 0;
                // process the heading levels as integers
                if (headersAsInts[0] !== 1) {
                    incorrectlyNestedHeaders[incorrectlyNestedHeaders.length] = headers[k];
                }
                for (k = 1; k < numHeads; k++) {
                    const currHeadNum = headersAsInts[k];
                    if ((currHeadNum === 1) || ((currHeadNum > headersAsInts[k - 1]) && (currHeadNum !== headersAsInts[k - 1] + 1))) {
                        incorrectlyNestedHeaders[incorrectlyNestedHeaders.length] = headers[k];
                    }
                }
				return incorrectlyNestedHeaders;
			});

			return testShell;
		}
	});
}
