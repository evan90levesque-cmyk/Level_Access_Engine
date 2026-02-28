describe('String N/A: no summary nodes', function() {
   it('no summary nodes should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("874");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("874");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("874");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: summary node with style set to a "display:none" text value', function() {
    it('summary node with style set to a "display:none" text value should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<details><summary style="display:none">This is a summary</summary></details>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("874");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("874");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("874");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: summary node with a role set to a text value that starts with presentation', function() {
    it('summary node with a role set to a text value that starts with presentation should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<details><summary role="presentation">This is a summary</summary></details>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("874");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("874");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("874");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: summary node with an aria-label attribute', function() {
    it('summary node with an aria-label attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<details><summary aria-label="label"></summary></details>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("874");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("874");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("874");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: summary node with a title attribute', function() {
    it('summary node with a title attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<details><summary title="label"></summary></details>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("874");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("874");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("874");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: summary node without an aria-label or title attribute', function() {
    it('summary node without an aria-label or title attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<details><summary>This is a summary</summary></details>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("874");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("874");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("874");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: summary node without inner text', function() {
   it('summary node without inner text should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.outerHTML = '<details><summary></summary></details>';
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("874");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("874");
      expect(res).toBe("874,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("874");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});