describe('String N/A: no nodes', function() {
   it('no nodes should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("1113");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("1113");
      expect(res).toBe("");       
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("1113");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: a foo node with no tabindex set', function() {
   it('a foo node with no tabindex set should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<foo>Bonjour</foo>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("1113");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("1113");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("1113");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: a foo-bar node with a negative tabindex set', function() {
  it('a foo-bar node with a negative tabindex set should be equal to na', function() {
     document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
     document.querySelector("#testing").contentWindow.document.body.innerHTML = "<foo-bar tabindex='-1'>Bonjour</foo-bar>";
     LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
     // <variant1>
     var res = LevelAccess_AccessEngine.runTest_returnOutcome("1113");
     expect(res).toBe('na');
     // </variant1>
     // <variant2>
     res = LevelAccess_AccessEngine.runTest_returnNumbers("1113");
     expect(res).toBe("");
     // </variant2>
     // <variant3>
     res = LevelAccess_AccessEngine.runTest_returnInstances("1113");
     expect(res).toBe(null);
     // </variant3>
  });
});

describe('String N/A: a foo node with a 0 tabindex set and a style attribute set to the text value "display:none;"', function() {
  it('a foo node with a 0 tabindex set and a style attribute set to the text value "display:none;" should be equal to na', function() {
     document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
     document.querySelector("#testing").contentWindow.document.body.innerHTML = "<foo tabindex='0' style='display:none;'>Bonjour</foo>";
     LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
     // <variant1>
     var res = LevelAccess_AccessEngine.runTest_returnOutcome("1113");
     expect(res).toBe('na');
     // </variant1>
     // <variant2>
     res = LevelAccess_AccessEngine.runTest_returnNumbers("1113");
     expect(res).toBe("");
     // </variant2>
     // <variant3>
     res = LevelAccess_AccessEngine.runTest_returnInstances("1113");
     expect(res).toBe(null);
     // </variant3>
  });
});

describe('String N/A: a foo node with a 0 tabindex set and aria-hidden="true"', function() {
  it('a foo node with a 0 tabindex set and aria-hidden="true" should be equal to na', function() {
     document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
     document.querySelector("#testing").contentWindow.document.body.innerHTML = "<foo tabindex='0' aria-hidden='true'>Bonjour</foo>";
     LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
     // <variant1>
     var res = LevelAccess_AccessEngine.runTest_returnOutcome("1113");
     expect(res).toBe('na');
     // </variant1>
     // <variant2>
     res = LevelAccess_AccessEngine.runTest_returnNumbers("1113");
     expect(res).toBe("");
     // </variant2>
     // <variant3>
     res = LevelAccess_AccessEngine.runTest_returnInstances("1113");
     expect(res).toBe(null);
     // </variant3>
  });
});

describe('String Pass: a word-count tag with a 0 tabindex set and role="link"', function() {
   it('a word-count tag with a 0 tabindex set and role="link" should be a pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<word-count tabindex='0' role='link'>Test</word-count>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("1113");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("1113");
      expect(res).toBe("");       
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("1113");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: a foo tag with a tabindex set to 8 and role="link"', function() {
  it('a foo tag with a tabindex set to 8 and role="link" should be a pass', function() {
     document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
     document.querySelector("#testing").contentWindow.document.body.innerHTML = "<foo tabindex='8' role='link'>Test</foo>";
     LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
     // <variant1>
     var res = LevelAccess_AccessEngine.runTest_returnOutcome("1113");
     expect(res).toBe('pass');
     // </variant1>
     // <variant2>
     res = LevelAccess_AccessEngine.runTest_returnNumbers("1113");
     expect(res).toBe("");       
     // </variant2>
     // <variant3>
     res = LevelAccess_AccessEngine.runTest_returnInstances("1113");
     expect(res).toBe(null);
     // </variant3>
  });
});

describe('String Fail: a foo node with a 0 tabindex and no role set', function() {
  it('a foo node with a 0 tabindex and no role set should be equal to fail', function() {
     document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
     document.querySelector("#testing").contentWindow.document.body.innerHTML = "<foo tabindex='0'>Bonjour</foo>";
     LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
     // <variant1>
     var res = LevelAccess_AccessEngine.runTest_returnOutcome("1113");
     expect(res).toBe('fail');
     // </variant1>
     // <variant2>
     res = LevelAccess_AccessEngine.runTest_returnNumbers("1113");
     expect(res).toBe("1113,1");
     // </variant2>
     // <variant3>
     res = LevelAccess_AccessEngine.runTest_returnInstances("1113");
     expect(res.instances.length).toBe(1);
     // </variant3>
  });
});

describe('String Fail: a foo node with a tabindex set to 8 and no role set', function() {
  it('a foo node with a tabindex set to 8 and no role set should be equal to fail', function() {
     document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
     document.querySelector("#testing").contentWindow.document.body.innerHTML = "<foo tabindex='8'>Bonjour</foo>";
     LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
     // <variant1>
     var res = LevelAccess_AccessEngine.runTest_returnOutcome("1113");
     expect(res).toBe('fail');
     // </variant1>
     // <variant2>
     res = LevelAccess_AccessEngine.runTest_returnNumbers("1113");
     expect(res).toBe("1113,1");
     // </variant2>
     // <variant3>
     res = LevelAccess_AccessEngine.runTest_returnInstances("1113");
     expect(res.instances.length).toBe(1);
     // </variant3>
  });
});