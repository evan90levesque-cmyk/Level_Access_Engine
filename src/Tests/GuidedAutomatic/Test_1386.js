import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://levelaccess.atlassian.net/browse/ENG-1386
 */
export function test1386() {
    aeKernel.addGuidedAutomaticTest("1386", {
        bestPractice: 362,
        testId: 1386,
        introduced: "2.28.0",
        mediaType: mediaTypes.WEB,
        description: "One or more img elements without a mechanism that allows an accessible name to be calculated that is a child of an A element (without an ARIA-assigned role), button element (without an ARIA-assigned role), option (without an ARIA-assigned role), or an element with role='button | checkbox | link | menuitemcheckbox | menuitemradio | option | radio | switch | tab', not intentionally hidden in the DOM and available to assistive technologies, does not have an alt=\"\"",
        metaText: "One or more img elements without an accessible name, contained within elements whose children can only be presentational, is missing an accessible name and is not hidden from assistive technology.",
        fixType: "",
        testFunc: function() {
            const interactiveElements = [
                "a[data-ae_vis]:not([role])",
                "button[data-ae_vis]:not([role])",
                "option[data-ae_vis]:not([role])",
                "[data-ae_vis][role='button']",
                "[data-ae_vis][role='checkbox']",
                "[data-ae_vis][role='link']",
                "[data-ae_vis][role='menuitemcheckbox']",
                "[data-ae_vis][role='menuitemradio']",
                "[data-ae_vis][role='option']",
                "[data-ae_vis][role='radio']",
                "[data-ae_vis][role='switch']",
                "[data-ae_vis][role='tab']"
            ]
            const imgElements = [
                "img:not([data-ae_an]):not([alt=''])",
            ];
            const applicabilitySelectorParts = [];
            const findingsSelectorParts = [];
            for (const element of interactiveElements) {
                for (const img of imgElements) {
                    findingsSelectorParts.push(`${element} ${img}`);
                }
                applicabilitySelectorParts.push(`${element} img:not([data-ae_an])`);
            }
            const applicabilitySelector = applicabilitySelectorParts.join(', ');
            const findingsSelector = findingsSelectorParts.join(', ');

            return new AutoTestShell(applicabilitySelector, findingsSelector);
        }
    });
}
