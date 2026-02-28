import { aeKernel } from "../../Kernel/AEKernel.js";
import { AutoTestShell } from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";

/**
 * Jira: https://levelaccess.atlassian.net/browse/ENG-1409
 * @returns {AutoTestShell} testShell
 */
export function test1409() {
    aeKernel.addAutomaticTest("1409", {
        bestPractice: 967,
        testId: 1409,
        introduced: "2.28",
        mediaType: mediaTypes.WEB,
        description: "One or more elements that has a role='tree' attribute, not intentionally hidden in the DOM, contained one or more input elements (without an assigned ARIA role and not type=hidden), button elements (without an assigned ARIA role), textarea elements (without an assigned ARIA role), select elements (without an assigned ARIA role) or A elements (without an assigned ARIA role) that are not in an ancestor element with role='treeitem'.",
        metaText: "This element (role=tree) should not contain input elements (without an assigned ARIA role), button elements (without an assigned ARIA role), textarea elements (without an assigned ARIA role), select elements (without an assigned ARIA role) or A elements (without an assigned ARIA role) unless they are contained in an ancestor element with role=’treeitem'",
        metaTextDetail: "This {{tag-name}} (role=tree) should not contain input elements (without an assigned ARIA role), button elements (without an assigned ARIA role), textarea elements (without an assigned ARIA role), select elements (without an assigned ARIA role) or A elements (without an assigned ARIA role) unless they are contained in an ancestor element with role=’treeitem'",
        fixType: "",
        testFunc: function () {
            const selector = '*[data-ae_ar="tree"][data-ae_vis]';
            const testShell = new AutoTestShell(selector);
            testShell.set_candidateSetNodesFunc(() => {
                const results = [];

                const trees = aeKernel.rootTestNode.querySelectorAll(selector);

                for (const tree of trees) {
                    const elements = tree.querySelectorAll(':is(input:not([type="hidden"]), button, textarea, select, a)[data-ae_ar="null"]');
                    for (const el of elements) {
                        // Isn't inside a treeitem -> violation
                        if (!el.closest('[data-ae_ar="treeitem"]')) {
                            results.push(tree);
                            break;
                        }
                    }
                }

                return results;
            });
            return testShell;
        }
    });
}
