describe('String N/A: no nodes', function() {
    it('no nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1119");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1119");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1119");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: an A node with display:none set', function() {
    it('an A node with no display:none set should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a style='display:none'>Bonjour</a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1119");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1119");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1119");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: an A node with a aria-hidden=true', function() {
   it('an A node with aria-hidden=true should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a aria-hidden='true'>Bonjour</a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("1119");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("1119");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("1119");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: an A node with role=presentation', function() {
   it('an A node with role=presentation should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a role='presentation'>Bonjour</a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("1119");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("1119");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("1119");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: an A tag with a 0 tabindex set', function() {
    it('an A tag with a 0 tabindex set should be a pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a tabindex='0'>Test</a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1119");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1119");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1119");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: an A tag with a tabindex set to 8', function() {
   it('an A tag with a tabindex set to 8 should be a pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a tabindex='8'>Test</a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("1119");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("1119");
      expect(res).toBe("");       
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("1119");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: an A tag with an href', function() {
   it('an A tag with an href should be a pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href>Test</a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("1119");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("1119");
      expect(res).toBe("");       
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("1119");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Fail: an A node with a -1 tabindex', function() {
   it('an A node with a -1 tabindex should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a tabindex='-1'>Bonjour</a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("1119");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("1119");
      expect(res).toBe("1119,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("1119");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: an A node with an empty tabindex', function() {
   it('an A node with an empty tabindex should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a tabindex>Bonjour</a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("1119");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("1119");
      expect(res).toBe("1119,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("1119");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: an A node with no tabindex or href', function() {
   it('an A node with no tabindex or href should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a>Bonjour</a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("1119");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("1119");
      expect(res).toBe("1119,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("1119");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});