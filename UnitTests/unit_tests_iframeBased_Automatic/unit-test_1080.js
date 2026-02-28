describe('String N/A: no nodes with a role attribute set to the value "treeitem"', function() {
    it('no nodes with a role attribute set to the value "treeitem" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1080");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1080");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1080");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a span node with a role attribute set to a null value', function() {
    it('a span node with a role attribute set to a null value should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role=''></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1080");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1080");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1080");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a span node with a role attribute value that starts with the text "presentation"', function() {
    it('a span node with a value that starts with the text "presentation" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='presentation'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1080");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1080");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1080");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a span node with a role attribute set to "treeitem" that is not available in the DOM', function() {
    it('a span node with a role attribute set to "treeitem" that is not available in the DOM should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span style='display:none;' role='treeitem'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1080");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1080");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1080");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a span node with a role attribute set to "treeitem", that is available in the DOM, and an aria-checked attribute set to "foo"', function() {
    it('a span node with a role attribute set to "treeitem", that is available in the DOM, and an aria-checked attribute set to "foo" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='treeitem' aria-checked='foo'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1080");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1080");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1080");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a span node with a role attribute set to "treeitem", that is available in the DOM, and an aria-checked attribute set to ""', function() {
    it('a span node with a role attribute set to "treeitem", that is available in the DOM, and an aria-checked attribute set to "" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='treeitem' aria-checked=''></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1080");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1080");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1080");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a span node with a role attribute set to "treeitem", that is available in the DOM, and an aria-selected attribute set to "foo"', () => {
   it('a span node with a role attribute set to "treeitem", that is available in the DOM, and an aria-selected attribute set to "foo" should be equal to pass', () => {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='treeitem' aria-selected='foo'></span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("1080");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("1080");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("1080");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: a span node with a role attribute set to "treeitem", that is available in the DOM, and an aria-selected attribute set to ""', () => {
   it('a span node with a role attribute set to "treeitem", that is available in the DOM, and an aria-selected attribute set to "" should be equal to pass', () => {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='treeitem' aria-selected=''></span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("1080");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("1080");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("1080");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Fail: a span node with a role attribute set to "treeitem", that is available in the DOM, and both aria-checked and aria-selected attributes', () => {
   it('a span node with a role attribute set to "treeitem", that is available in the DOM, and both aria-checked and aria-selected attributes should be equal to fail', () => {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='treeitem' aria-checked='true' aria-selected='true'></span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("1080");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("1080");
      expect(res).toBe("1080,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("1080");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});
