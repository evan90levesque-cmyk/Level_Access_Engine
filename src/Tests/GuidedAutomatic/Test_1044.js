import { aeKernel } from "../../Kernel/AEKernel.js";
import { AutoTestShell } from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://levelaccess.atlassian.net/browse/ENG-1044
 * @returns {AutoTestShell} testShell
 */
export function test1044() {
  aeKernel.addGuidedAutomaticTest("1044", {
    bestPractice: 1626,
    testId: 1044,
    introduced: "2.29",
    mediaType: mediaTypes.WEB,
    description:
      "One or more elements that has a role='separator' attribute with a tabindex attribute set to a value greater than or equal to 0, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-valuemax attribute, an aria-valuemin attribute and an aria-valuenow attribute.",
    metaText:
      "This element (role=separator) must have all of the following attributes: aria-valuemax | aria-valuemin | aria-valuenow",
    metaTextDetail:
      "This {{tag-name}} (role=separator) must have all of the following attributes: aria-valuemax | aria-valuemin | aria-valuenow",
    fixType: "",
    testFunc: function () {
      return new AutoTestShell(
        '*[data-ae_vis][data-ae_avat][data-ae_ar="separator"]:not([tabindex^="-"])',
        '*[data-ae_vis][data-ae_avat][data-ae_ar="separator"]:not([tabindex^="-"]):not([aria-valuemax]), *[data-ae_vis][data-ae_avat][data-ae_ar="separator"]:not([tabindex^="-"]):not([aria-valuemin]), *[data-ae_vis][data-ae_avat][data-ae_ar="separator"]:not([tabindex^="-"]):not([aria-valuenow])'
      );
    },
  });
}
