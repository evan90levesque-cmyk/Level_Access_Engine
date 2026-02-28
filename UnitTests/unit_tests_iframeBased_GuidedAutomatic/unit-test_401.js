describe('String N/A: the body node contains no heading nodes', function() {
    it('the body node contains an h1 node which contains text should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("401");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("401");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("401");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: the body node contains a single h1 heading in an article node', function() {
    it('the body node contains a single h1 heading in an article node should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<article><h1>Level 1 Heading</h1></article>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("401");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("401");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("401");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: the body node contains an h1 node which contains text', function() {
    it('the body node contains an h1 node which contains text should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h1>Level 1 Heading</h1>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("401");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("401");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("401");
       expect(res).toBe(null);
       // </variant3>
    });

   it('the body node contains an h1 node which contains text should be equal to pass using node capture', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h1>Level 1 Heading</h1>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      const results = JSON.parse(LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON_NodeCapture(document.querySelector("#testing").contentWindow.document.body.firstChild));
      const relevantResults = results.filter(result => result.engineTestId === 401);
      expect(relevantResults.length).toBe(0);
   });
});

describe('String Fail: no h1 node in the body node; and an h2 in the body node', function() {
    it('no h1 node in the body node; and an h2 in the body node should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h2>Level 2 Heading</h2>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("401");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("401");
       expect(res).toBe("401,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("401");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });

   it('no h1 node in the body node; and an h2 in the body node should be equal to fail using node capture', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h2>Level 2 Heading</h2>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      const results = JSON.parse(LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON_NodeCapture(document.querySelector("#testing").contentWindow.document.body.firstChild));
      const relevantResults = results.filter(result => result.engineTestId === 401);
      expect(relevantResults.length).toBe(1);
   });
});

describe('String Fail: no h1 node in the body node; and a span role=heading aria-level=3 in the body node', function() {
    it('no h1 node in the body node; and a span role=heading aria-level=3 in the body node should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='heading' aria-level='3'>Level 3 Heading</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("401");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("401");
       expect(res).toBe("401,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("401");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});