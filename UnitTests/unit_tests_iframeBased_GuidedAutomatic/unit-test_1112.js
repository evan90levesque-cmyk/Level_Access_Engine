describe('String N/A: no nodes', function() {
   it('no nodes should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("1112");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("1112");
      expect(res).toBe("");       
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("1112");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: an anchor with no tabindex set', function() {
   it('a anchor with no tabindex set should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a>Bonjour</a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("1112");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("1112");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("1112");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: an anchor with a negative tabindex set', function() {
  it('an anchor with a negative tabindex set should be equal to na', function() {
     document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
     document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a tabindex='-1'>Bonjour</a>";
     LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
     // <variant1>
     var res = LevelAccess_AccessEngine.runTest_returnOutcome("1112");
     expect(res).toBe('na');
     // </variant1>
     // <variant2>
     res = LevelAccess_AccessEngine.runTest_returnNumbers("1112");
     expect(res).toBe("");
     // </variant2>
     // <variant3>
     res = LevelAccess_AccessEngine.runTest_returnInstances("1112");
     expect(res).toBe(null);
     // </variant3>
  });
});

describe('String N/A: an anchor with a 0 tabindex set and a style attribute set to the text value "display:none;"', function() {
  it('an anchor with a 0 tabindex set and a style attribute set to the text value "display:none;" should be equal to na', function() {
     document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
     document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a tabindex='0' style='display:none;'>Bonjour</a>";
     LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
     // <variant1>
     var res = LevelAccess_AccessEngine.runTest_returnOutcome("1112");
     expect(res).toBe('na');
     // </variant1>
     // <variant2>
     res = LevelAccess_AccessEngine.runTest_returnNumbers("1112");
     expect(res).toBe("");
     // </variant2>
     // <variant3>
     res = LevelAccess_AccessEngine.runTest_returnInstances("1112");
     expect(res).toBe(null);
     // </variant3>
  });
});

describe('String N/A: an anchor with a 0 tabindex set and aria-hidden="true"', function() {
  it('an anchor with a 0 tabindex set and aria-hidden="true" should be equal to na', function() {
     document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
     document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a tabindex='0' aria-hidden='true'>Bonjour</a>";
     LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
     // <variant1>
     var res = LevelAccess_AccessEngine.runTest_returnOutcome("1112");
     expect(res).toBe('na');
     // </variant1>
     // <variant2>
     res = LevelAccess_AccessEngine.runTest_returnNumbers("1112");
     expect(res).toBe("");
     // </variant2>
     // <variant3>
     res = LevelAccess_AccessEngine.runTest_returnInstances("1112");
     expect(res).toBe(null);
     // </variant3>
  });
});

describe('String N/A: an anchor with a 0 tabindex set and an href set to a text value', function() {
   it('an anchor with a 0 tabindex set and an href set to a text value should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a tabindex='0' href='foo'>Bonjour</a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("1112");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("1112");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("1112");
      expect(res).toBe(null);
      // </variant3>
   });
 });

describe('String Pass: a nachor with a 0 tabindex set and role="link"', function() {
   it('an anchor with a 0 tabindex set and role="link" should be a pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a tabindex='0' role='link'>Test</a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("1112");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("1112");
      expect(res).toBe("");       
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("1112");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: an anchor with a tabindex set to 8 and role="link"', function() {
  it('an anchor with a tabindex set to 8 and role="link" should be a pass', function() {
     document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
     document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a tabindex='8' role='link'>Test</a>";
     LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
     // <variant1>
     var res = LevelAccess_AccessEngine.runTest_returnOutcome("1112");
     expect(res).toBe('pass');
     // </variant1>
     // <variant2>
     res = LevelAccess_AccessEngine.runTest_returnNumbers("1112");
     expect(res).toBe("");       
     // </variant2>
     // <variant3>
     res = LevelAccess_AccessEngine.runTest_returnInstances("1112");
     expect(res).toBe(null);
     // </variant3>
  });
});

describe('String Fail: an anchor with a 0 tabindex and no role set', function() {
  it('an anchor with a 0 tabindex and no role set should be equal to fail', function() {
     document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
     document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a tabindex='0'>Bonjour</a>";
     LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
     // <variant1>
     var res = LevelAccess_AccessEngine.runTest_returnOutcome("1112");
     expect(res).toBe('fail');
     // </variant1>
     // <variant2>
     res = LevelAccess_AccessEngine.runTest_returnNumbers("1112");
     expect(res).toBe("1112,1");
     // </variant2>
     // <variant3>
     res = LevelAccess_AccessEngine.runTest_returnInstances("1112");
     expect(res.instances.length).toBe(1);
     // </variant3>
  });
});

describe('String Fail: an anchor with a tabindex set to 8 and no role set', function() {
  it('an anchor with a tabindex set to 8 and no role set should be equal to fail', function() {
     document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
     document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a tabindex='8'>Bonjour</a>";
     LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
     // <variant1>
     var res = LevelAccess_AccessEngine.runTest_returnOutcome("1112");
     expect(res).toBe('fail');
     // </variant1>
     // <variant2>
     res = LevelAccess_AccessEngine.runTest_returnNumbers("1112");
     expect(res).toBe("1112,1");
     // </variant2>
     // <variant3>
     res = LevelAccess_AccessEngine.runTest_returnInstances("1112");
     expect(res.instances.length).toBe(1);
     // </variant3>
  });
});

describe('String Fail: an anchor with a tabindex set to 8, no role set and an href set to blank', function() {
   it('an anchor with a tabindex set to 8, no role and an href set to blank set should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a tabindex='8' href=''>Bonjour</a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("1112");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("1112");
      expect(res).toBe("1112,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("1112");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
 });