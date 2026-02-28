import { aeKernel } from "../../Kernel/AEKernel.js";
import { AutoTestShell } from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-33
 * @returns {AutoTestShell} testShell
 */
export function test33() {
  aeKernel.addGuidedAutomaticTest("33", {
    bestPractice: 1626,
    testId: 33,
    introduced: "0.9",
    mediaType: mediaTypes.WEB,
    description:
      "One or more elements that has a role='spinbutton' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-valuemax attribute, an aria-valuemin attribute and an aria-valuenow attribute.",
    metaText:
      "This element (role=spinbutton) does not have an aria-valuemax attribute, an aria-valuemin attribute and an aria-valuenow attribute",
    metaTextDetail:
      "This {{tag-name}} (role=spinbutton) does not have an aria-valuemax attribute, an aria-valuemin attribute and an aria-valuenow attribute",
    fixType: "",
    testFunc: function () {
      return new AutoTestShell(
        '*[data-ae_vis][data-ae_avat][data-ae_ar="spinbutton"]',
        '*[data-ae_vis][data-ae_avat][data-ae_ar="spinbutton"]:not([aria-valuemax]), *[data-ae_vis][data-ae_avat][data-ae_ar="spinbutton"]:not([aria-valuemin]), *[data-ae_vis][data-ae_avat][data-ae_ar="spinbutton"]:not([aria-valuenow])'
      );
    },
  });
}
