describe('String N/A: iframe node with tabindex=-1 and style set to a "display:none" text value', function() {
    it('iframe node with tabindex=-1 and style set to a "display:none" text value should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<iframe tabindex="-1"  style="display:none" src="#">';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("993");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("993");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("993");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: iframe node with tabindex=-1 and aria-hidden=true', function() {
   it('iframe node with tabindex=-1 and aria-hidden=true should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.outerHTML = '<iframe tabindex="-1" aria-hidden="true" src="#">';
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("993");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("993");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("993");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: iframe node without a tabindex=-1 or aria-hidden=true', function() {
   it('iframe node with tabindex=-1 and aria-hidden=true should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.outerHTML = '<iframe src="#">';
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("993");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("993");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("993");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Fail: iframe node with a tabindex=-1 without an aria-label or title attribute', function() {
   it('iframe node with a tabindex=-1 without an aria-label or title attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.outerHTML = '<iframe tabindex="-1" src="#">';
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("993");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("993");
      expect(res).toBe("993,1");       // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("993");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});


describe('String Fail: iframe node with a tabindex=-1 and a role set to a text value that starts with presentation without an aria-label or title attribute', function() {
    it('iframe node with a tabindex=-1 and a role set to a text value that starts with presentation without an aria-label or title attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<iframe tabindex="-1" role="presentation" src="#">';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("993");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("993");
       expect(res).toBe("993,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("993");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Pass: iframe node with a tabindex=-1 and an aria-label attribute', function() {
    it('iframe node with a tabindex=-1 and an aria-label attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<iframe tabindex="-1" aria-label="label1" src="#">';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("993");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("993");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("993");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: iframe node with a tabindex=-1 and a title attribute', function() {
    it('iframe node with a tabindex=-1 and a title attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<iframe tabindex="-1" title="label1" src="#">';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("993");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("993");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("993");
       expect(res).toBe(null);
       // </variant3>
    });
});

// IMPORTANT: N/A is here for a reason
// as outerHTML is changed - we need to reset it in the test below

describe('String N/A: no iframe nodes', function() {
    it('no iframe nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = "<body></body>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("993");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("993");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("993");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: an iframe with an empty title inside the head node', function() {
   it('an iframe with an empty title inside the head node should be equal to na', function() {
      // (N/A because the iframe in the head should be removed from the clone DOM during markdown stage execution)
      document.querySelector("#testing").contentWindow.document.head.innerHTML = '<iframe src="javascript:void(0)" title=""></iframe>';
      document.querySelector("#testing").contentWindow.document.body.innerHTML = '';
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("993");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("993");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("993");
      expect(res).toBe(null);
      // </variant3>
   });
});

