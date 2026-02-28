describe('String N/A: iframe node with style set to a "display:none" text value', function() {
    it('iframe node with style set to a "display:none" text value should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<iframe id="test" style="display:none" src="#">';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("228");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("228");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("228");
       expect(res).toBe(null);
       // </variant3>
    });

   it('iframe node with the style set to "display: none" should be treated as "n/a" in the DOM tree, including when shadow DOM is detected on the page', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.outerHTML = '<iframe id="test" style="display:none" src="#">';

      const target = document.querySelector("#testing").contentWindow.document.body;
      const host = document.createElement("div");
      target.appendChild(host);

      const shadow = host.attachShadow({ mode: "open" });
      const span = document.createElement("span");
      span.textContent = "I'm in the shadow DOM";
      shadow.appendChild(span);

      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("228");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("228");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("228");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Fail: iframe node with a role set to a text value that starts with presentation without an aria-label or title attribute', function() {
    it('iframe node with a role set to a text value that starts with presentation without an aria-label or title attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<iframe id="test" role="presentation" src="#">';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("228");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("228");
       expect(res).toBe("228,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("228");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Pass: iframe node with an aria-label attribute', function() {
    it('iframe node with an aria-label attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<iframe id="test" aria-label="label1" src="#">';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("228");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("228");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("228");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: iframe node with a title attribute', function() {
    it('iframe node with a title attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<iframe id="test" title="label1" src="#">';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("228");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("228");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("228");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: iframe node without an aria-label or title attribute', function() {
    it('iframe node without an aria-label or title attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<iframe id="test" src="#">';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("228");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("228");
       expect(res).toBe("228,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("228");
       expect(res.instances.length).toBe(1);
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
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("228");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("228");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("228");
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
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("228");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("228");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("228");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: an iframe with aria-hidden set to "true"', function() {
   it('an iframe with aria-hidden set to "true" should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.outerHTML = '<iframe id="test" aria-hidden="true" src="#">';
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("228");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("228");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("228");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: an iframe with tabindex set to "-1"', function() {
   it('an iframe with tabindex set to "-1" should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.outerHTML = '<iframe id="test" tabindex="-1" src="#">';
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("228");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("228");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("228");
      expect(res).toBe(null);
      // </variant3>
   });
});