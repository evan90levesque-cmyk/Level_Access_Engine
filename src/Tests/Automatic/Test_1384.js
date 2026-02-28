import { aeKernel } from "../../Kernel/AEKernel.js";
import { AutoTestShell } from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";

/**
 * Jira: https://levelaccess.atlassian.net/browse/ENG-1384
 * @returns {AutoTestShell} testShell
 */
export function test1384() {
  aeKernel.addAutomaticTest("1384", {
    bestPractice: 967,
    testId: 1384,
    introduced: "2.28",
    mediaType: mediaTypes.WEB,
    description:
      "One or more elements that has a role='combobox' attribute and aria-expanded='true' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-controls attribute",
    metaText:
      "This element (role=combobox) does not have an aria-controls attribute",
    metaTextDetail:
      "This {{tag-name}} (role=combobox) does not have an aria-controls attribute",
    fixType: "",
    testFunc: function () {
      return new AutoTestShell(
        `*[data-ae_ar="combobox"][aria-expanded="true"][data-ae_vis]`,
        `*[data-ae_ar="combobox"][aria-expanded="true"][data-ae_vis]:not([aria-controls])`
      );
    },
  });
}
