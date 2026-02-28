import { aeKernel } from "../../Kernel/AEKernel.js";
import { AutoTestShell } from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";

export function test1565() {
  aeKernel.addAutomaticTest("1565", {
    bestPractice: 1626,
    testId: 1565,
    introduced: "2.28",
    mediaType: mediaTypes.WEB,
    description:
      "One or more elements with a role='combobox' attribute and an aria-exapnded='true' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-controls attribute value that includes one or more invalid ids.",
    metaText:
      "This element (role=combobox) has an aria-controls attribute value that includes one or more invalid ids",
    metaTextDetail:
      "This {{tag-name}} (role=combobox) has an aria-controls attribute value of '{{aria-controls}}', which includes one or more invalid ids",
    fixType: "",
    testFunc: function () {
      const selector =
        '*[data-ae_ar="combobox"][data-ae_vis][data-ae_avat][aria-expanded="true"][aria-controls]:not([aria-controls=""])';

      const testShell = new AutoTestShell(selector);

      testShell.set_candidateSetNodesFunc(() => {
        const results = [];

        const comboboxElements = Array.from(
          aeKernel.rootTestNode.querySelectorAll(selector)
        );
        comboboxElements.forEach((comboboxElement) => {
          const labelIds = comboboxElement
            .getAttribute("aria-controls")
            .split(/\s+/);

          const isElementWithBadId = labelIds.some((labelId) => {
            try {
              const targetElement = aeKernel.rootTestNode.querySelector(
                `#${labelId}`
              );
              if (!targetElement) {
                return true;
              }
            } catch (error) {
              // Invalid id
              return true;
            }
          });

          if (isElementWithBadId) {
            results.push(comboboxElement);
          }
        });
        return results;
      });
      return testShell;
    },
  });
}
