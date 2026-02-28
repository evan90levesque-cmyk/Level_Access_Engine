import { aeKernel } from "../../Kernel/AEKernel.js";
import { AutoTestShell } from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";

/**
 * Jira: https://levelaccess.atlassian.net/browse/ENG-1406
 * @returns {AutoTestShell} testShell
 */
export function test1406() {
  aeKernel.addGuidedAutomaticTest("1406", {
    bestPractice: 387,
    testId: 1406,
    introduced: "2.29",
    mediaType: mediaTypes.WEB,
    description:
      "One or more headings (created using h1 - h6 elements (without an ARIA-assigned role); or elements with a role attribute set to a value that starts with 'heading' and an aria-level attribute set to an appropriate value) contained in dialog elements (with overlay:auto) or elements with role=dialog or role=alertdialog (with aria-modal=true) (excluding the contents of any further enclosed dialog type elements), not intentionally hidden in the DOM and available to assistive technologies, are not set to a heading level that can be considered as properly nested within the dialog heading hierarchy.",
    metaText:
      "This element creates an inappropriate jump in heading levels within the open modal dialog heading hierarchy",
    metaTextDetail:
      "This {{tag-name}} creates an inappropriate jump in heading levels within the open modal dialog heading hierarchy",
    fixType: "",
    testFunc: function () {
      const testShell = new AutoTestShell(
        "dialog[open]:not([hidden])[data-ae_vis]:has(:is(h1, h2, h3, h4, h5, h6)[data-ae_ar='null'][data-ae_vis]:not(:empty):not([aria-hidden='true'])), " +
          "dialog[open]:not([hidden])[data-ae_vis]:has(*[data-ae_ar='heading'][data-ae_vis][aria-level]:not(:empty):not([aria-hidden='true'])), " +
          ":is([data-ae_ar='dialog'], [data-ae_ar='alertdialog'])[data-ae_vis][aria-modal='true']:has(:is(h1, h2, h3, h4, h5, h6)[data-ae_ar='null'][data-ae_vis]:not(:empty):not([aria-hidden='true'])), " +
          ":is([data-ae_ar='dialog'], [data-ae_ar='alertdialog'])[data-ae_vis][aria-modal='true']:has(*[data-ae_ar='heading'][data-ae_vis][aria-level]:not(:empty):not([aria-hidden='true']))"
      );

      const headerCssSelector =
        ":is(h1, h2, h3, h4, h5, h6)[data-ae_ar='null'][data-ae_vis]:not(:empty):not([aria-hidden='true']), *[data-ae_ar='heading'][data-ae_vis][aria-level]:not(:empty):not([aria-hidden='true'])";

      const dialogCssSelector =
        "dialog[open]:not([hidden])[data-ae_vis], :is([data-ae_ar='dialog'], [data-ae_ar='alertdialog'])[data-ae_vis][aria-modal='true']";

      testShell.set_candidateSetNodesFunc(function () {
        const incorrectlyNestedHeaders = [];
        const dialogs =
          aeKernel.rootTestNode.querySelectorAll(dialogCssSelector);

        for (const dialog of dialogs) {
          const dialogClone = dialog.cloneNode(true);

          const nestedDialogs = dialogClone.querySelectorAll(dialogCssSelector);
          for (const nestedDialog of nestedDialogs) {
            nestedDialog.remove();
          }

          const headers = dialogClone.querySelectorAll(headerCssSelector);

          if (headers.length > 0) {
            const headersAsInts = [];

            for (const header of headers) {
              const ariaLevel = parseInt(header.getAttribute("aria-level"), 10);
              if (!isNaN(ariaLevel) && ariaLevel >= 1) {
                headersAsInts.push(ariaLevel);
              } else {
                headersAsInts.push(parseInt(header.tagName[1]));
              }
            }

            if (headersAsInts[0] !== 1) {
              incorrectlyNestedHeaders.push(headers[0]);
            }

            for (let k = 1; k < headersAsInts.length; k++) {
              const prev = headersAsInts[k - 1];
              const curr = headersAsInts[k];
              if (curr === 1 || (curr > prev && curr !== prev + 1)) {
                incorrectlyNestedHeaders.push(headers[k]);
              }
            }
          }
        }

        return incorrectlyNestedHeaders;
      });

      return testShell;
    },
  });
}
