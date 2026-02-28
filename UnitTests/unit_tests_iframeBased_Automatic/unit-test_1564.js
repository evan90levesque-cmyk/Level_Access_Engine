describe("String N/A: no tree elements", function () {
  it("no tree elements should be equal to na", function () {
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      "";
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );
    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1564");
    expect(res).toBe("na");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1564");
    expect(res).toBe("");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1564");
    expect(res).toBe(null);
  });
});

describe("String Pass: tree with only aria-selected treeitems", function () {
  it("tree with only aria-selected treeitems should be equal to pass", function () {
    document.querySelector("#testing").contentWindow.document.body.innerHTML = `
         <div role="tree" >
           <div role="treeitem" aria-selected="true" >Item 1</div>
           <div role="treeitem" aria-selected="false" >Item 2</div>
         </div>
       `;
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1564");
    expect(res).toBe("pass");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1564");
    expect(res).toBe("");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1564");
    expect(res).toBe(null);
  });
});

describe("String Pass: tree with only aria-checked treeitems", function () {
  it("tree with only aria-checked treeitems should be equal to pass", function () {
    document.querySelector("#testing").contentWindow.document.body.innerHTML = `
         <div role="tree" >
           <div role="treeitem" aria-checked="true" >Item A</div>
           <div role="treeitem" aria-checked="false" >Item B</div>
         </div>
       `;
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1564");
    expect(res).toBe("pass");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1564");
    expect(res).toBe("");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1564");
    expect(res).toBe(null);
  });
});

describe("String Fail: tree with mixed aria-selected and aria-checked treeitems", function () {
  it("tree with mixed aria-selected and aria-checked treeitems should be equal to fail", function () {
    document.querySelector("#testing").contentWindow.document.body.innerHTML = `
         <div role="tree" >
           <div role="treeitem" aria-selected="true" >Item 1</div>
           <div role="treeitem" aria-checked="false" >Item 2</div>
         </div>
       `;
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1564");
    expect(res).toBe("fail");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1564");
    expect(res).toBe("1564,2"); // Both treeitems should be reported
    res = LevelAccess_AccessEngine.runTest_returnInstances("1564");
    expect(res.instances.length).toBe(2);
  });
});

describe("String Fail: multiple trees, one with mixed attributes", function () {
  it("multiple trees, one with mixed attributes should be equal to fail", function () {
    document.querySelector("#testing").contentWindow.document.body.innerHTML = `
         <div role="tree" >
           <div role="treeitem" aria-selected="true" >Item A</div>
           <div role="treeitem" aria-selected="false" >Item B</div>
         </div>
         <div role="tree" >
           <div role="treeitem" aria-selected="true" >Item C</div>
           <div role="treeitem" aria-checked="false" >Item D</div>
         </div>
       `;
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1564");
    expect(res).toBe("fail");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1564");
    expect(res).toBe("1564,2"); // Only the treeitems from the *failing* tree
    res = LevelAccess_AccessEngine.runTest_returnInstances("1564");
    expect(res.instances.length).toBe(2);
  });
});

describe("String Pass: mixed attributes but treeitems are not visible", function () {
  it("mixed attributes but treeitems are not visible should be equal to pass", function () {
    document.querySelector("#testing").contentWindow.document.body.innerHTML = `
         <div role="tree">
           <div role="treeitem" aria-selected="true" style="display: none;">Item 1</div>
           <div role="treeitem" aria-checked="false" style="display: none;" >Item 2</div>
         </div>
       `;
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1564");
    expect(res).toBe("pass");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1564");
    expect(res).toBe("");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1564");
    expect(res).toBe(null);
  });
});

describe("String Fail: nested trees with mixed attributes in inner tree", function () {
  it("nested trees with mixed attributes in inner tree should be equal to fail", function () {
    document.querySelector("#testing").contentWindow.document.body.innerHTML = `
         <div role="tree" >
           <div role="treeitem" aria-selected="true" >Outer Item 1</div>
           <div role="treeitem" aria-checked="false" >Outer Item 2
             <div role="tree" >
               <div role="treeitem" aria-selected="true" >Inner Item A</div>
               <div role="treeitem" aria-checked="true" >Inner Item B</div>
             </div>
           </div>
         </div>
       `;
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1564");
    expect(res).toBe("fail");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1564");
    expect(res).toBe("1564,4");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1564");
    expect(res.instances.length).toBe(4);
  });
});
