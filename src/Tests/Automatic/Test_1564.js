import { aeKernel } from "../../Kernel/AEKernel.js";
import { AutoTestShell } from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";

export function test1564() {
  aeKernel.addAutomaticTest("1564", {
    bestPractice: 967,
    testId: 1564,
    introduced: "2.27",
    mediaType: mediaTypes.WEB,
    description:
      "One or more elements with role='treeitem' attribute in the same parent with role='tree', not intentionally hidden in the DOM and available to assistive technologies, are using a mix of aria-checked and aria-selected attributes.",
    metaText:
      "This element (role=treeitem) is part of a set that is using a mix of aria-checked and aria-selected attributes.",
    metaTextDetail:
      "This {{tag-name}} (role=treeitem) is part of a set that is using a mix of aria-checked and aria-selected attributes.",
    fixType: "",
    testFunc: function () {
      const selector = '*[data-ae_ar="tree"][data-ae_vis]';
      const testShell = new AutoTestShell(selector);
      testShell.set_candidateSetNodesFunc(() => {
        const results = [];

        const trees = aeKernel.rootTestNode.querySelectorAll(selector);

        const filterTreeItems = (tree, treeItems) => {
          return Array.from(treeItems).filter((treeitem) => {
            return tree.isSameNode(
              treeitem.closest('[data-ae_ar="tree"][data-ae_vis]')
            );
          });
        };

        for (const tree of trees) {
          const treeItemsWithAriaSelected = filterTreeItems(
            tree,
            tree.querySelectorAll("[role='treeitem'][aria-selected][data-ae_vis]")
          );
          const treeItemsWithAriaChecked = filterTreeItems(
            tree,
            tree.querySelectorAll("[role='treeitem'][aria-checked][data-ae_vis]")
          );
          if (
            treeItemsWithAriaSelected.length > 0 &&
            treeItemsWithAriaChecked.length > 0
          ) {
            const allTreeItems = filterTreeItems(
              tree,
              tree.querySelectorAll("[role='treeitem'][data-ae_vis]")
            );
            results.push(...allTreeItems);
          }
        }

        return results;
      });
      return testShell;
    },
  });
}
