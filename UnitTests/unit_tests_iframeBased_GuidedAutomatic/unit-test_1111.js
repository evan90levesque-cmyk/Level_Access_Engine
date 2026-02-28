describe('String N/A: no nodes', function() {
   it('no nodes should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("1111");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("1111");
      expect(res).toBe("");       
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("1111");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: a p node with no tabindex set', function() {
   it('a p node with no tabindex set should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p>Bonjour</p>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("1111");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("1111");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("1111");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: a p node with a negative tabindex set', function() {
  it('a p node with a negative tabindex set should be equal to na', function() {
     document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
     document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p tabindex='-1'>Bonjour</p>";
     LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
     // <variant1>
     var res = LevelAccess_AccessEngine.runTest_returnOutcome("1111");
     expect(res).toBe('na');
     // </variant1>
     // <variant2>
     res = LevelAccess_AccessEngine.runTest_returnNumbers("1111");
     expect(res).toBe("");
     // </variant2>
     // <variant3>
     res = LevelAccess_AccessEngine.runTest_returnInstances("1111");
     expect(res).toBe(null);
     // </variant3>
  });
});

describe('String N/A: a p node with a 0 tabindex set and a style attribute set to the text value "display:none;"', function() {
  it('a p node with a 0 tabindex set and a style attribute set to the text value "display:none;" should be equal to na', function() {
     document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
     document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p tabindex='0' style='display:none;'>Bonjour</p>";
     LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
     // <variant1>
     var res = LevelAccess_AccessEngine.runTest_returnOutcome("1111");
     expect(res).toBe('na');
     // </variant1>
     // <variant2>
     res = LevelAccess_AccessEngine.runTest_returnNumbers("1111");
     expect(res).toBe("");
     // </variant2>
     // <variant3>
     res = LevelAccess_AccessEngine.runTest_returnInstances("1111");
     expect(res).toBe(null);
     // </variant3>
  });
});

describe('String N/A: a p node with a 0 tabindex set and aria-hidden="true"', function() {
  it('a p node with a 0 tabindex set and aria-hidden="true" should be equal to na', function() {
     document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
     document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p tabindex='0' aria-hidden='true'>Bonjour</p>";
     LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
     // <variant1>
     var res = LevelAccess_AccessEngine.runTest_returnOutcome("1111");
     expect(res).toBe('na');
     // </variant1>
     // <variant2>
     res = LevelAccess_AccessEngine.runTest_returnNumbers("1111");
     expect(res).toBe("");
     // </variant2>
     // <variant3>
     res = LevelAccess_AccessEngine.runTest_returnInstances("1111");
     expect(res).toBe(null);
     // </variant3>
  });
});

describe('String Pass: a p tag with a 0 tabindex set and role="link"', function() {
   it('a p tag with a 0 tabindex set and role="link" should be a pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p tabindex='0' role='link'>Test</p>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("1111");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("1111");
      expect(res).toBe("");       
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("1111");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: a p tag with a tabindex set to 8 and role="link"', function() {
  it('a p tag with a tabindex set to 8 and role="link" should be a pass', function() {
     document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
     document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p tabindex='8' role='link'>Test</p>";
     LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
     // <variant1>
     var res = LevelAccess_AccessEngine.runTest_returnOutcome("1111");
     expect(res).toBe('pass');
     // </variant1>
     // <variant2>
     res = LevelAccess_AccessEngine.runTest_returnNumbers("1111");
     expect(res).toBe("");       
     // </variant2>
     // <variant3>
     res = LevelAccess_AccessEngine.runTest_returnInstances("1111");
     expect(res).toBe(null);
     // </variant3>
  });
});

describe('String Fail: a p node with a 0 tabindex and no role set', function() {
  it('a p node with a 0 tabindex and no role set should be equal to fail', function() {
     document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
     document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p tabindex='0'>Bonjour</p>";
     LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
     // <variant1>
     var res = LevelAccess_AccessEngine.runTest_returnOutcome("1111");
     expect(res).toBe('fail');
     // </variant1>
     // <variant2>
     res = LevelAccess_AccessEngine.runTest_returnNumbers("1111");
     expect(res).toBe("1111,1");
     // </variant2>
     // <variant3>
     res = LevelAccess_AccessEngine.runTest_returnInstances("1111");
     expect(res.instances.length).toBe(1);
     // </variant3>
  });
});

describe('String Fail: a p node with a tabindex set to 8 and no role set', function() {
  it('a p node with a tabindex set to 8 and no role set should be equal to fail', function() {
     document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
     document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p tabindex='8'>Bonjour</p>";
     LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
     // <variant1>
     var res = LevelAccess_AccessEngine.runTest_returnOutcome("1111");
     expect(res).toBe('fail');
     // </variant1>
     // <variant2>
     res = LevelAccess_AccessEngine.runTest_returnNumbers("1111");
     expect(res).toBe("1111,1");
     // </variant2>
     // <variant3>
     res = LevelAccess_AccessEngine.runTest_returnInstances("1111");
     expect(res.instances.length).toBe(1);
     // </variant3>
  });
});