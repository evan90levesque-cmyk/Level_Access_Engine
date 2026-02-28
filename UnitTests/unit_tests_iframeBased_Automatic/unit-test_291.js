describe('String N/A: no nodes with an aria-activedescendant attribute', function() {
    it('no nodes with an aria-activedescendant attribute should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("291");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("291");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("291");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a span node with an aria-activedescendant attribute set to a null value', function() {
    it('a span node with an aria-activedescendant attribute set to a null value should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span aria-activedescendant=''></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("291");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("291");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("291");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a span node with a role attribute value that starts with the text "presentation" and an aria-activedescendant attribute set to a valid id', function() {
    it('a span node with a value that starts with the text "presentation" and an aria-activedescendant attribute set to a valid id should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test'>Test</span><span aria-activedescendant='test' role='presentation'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("291");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("291");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("291");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a span node with an aria-activedescendant attribute set to "alt1" that is not available in the DOM', function() {
    it('a span node with an aria-activedescendant attribute set to "alternative" that is not available in the DOM should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='alt1'>Alternative</span><img style='display:none' src='test.gif' aria-activedescendant='alt1'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("291");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("291");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("291");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a span node with an aria-activedescendant attribute set to "alt1" that is available in the DOM', function() {
    it('a span node with an aria-activedescendant attribute set to "alt1" that is available in the DOM should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='alt1'>Alternative</span><img src='test.gif' aria-activedescendant='alt1'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("291");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("291");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("291");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: two span node with an aria-activedescendant attribute set to "alt1" that is available in the DOM', function() {
    it('two span node with an aria-activedescendant attribute set to "alt1" that is available in the DOM should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='alt1'>Alternative</span><img src='test.gif' aria-activedescendant='alt1'><span id='alt2'>Alternative</span><img src='test.gif' aria-activedescendant='alt2'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("291");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("291");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("291");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: two span nodes, one with an aria-activedescendant attribute set to "alt1\'", that is available in the DOM', function() {
   it('two span nodes, one with an aria-activedescendant attribute set to "alt1\'", that is available in the DOM should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id=\"alt1'\">Alternative</span><img src='test.gif' aria-activedescendant=\"alt1'\"><span id='alt2'>Alternative</span><img src='test.gif' aria-activedescendant='alt2'>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("291");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("291");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("291");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: a span node with an aria-activedescendant attribute set to "alt1" that is available in the DOM, the span element has an aria-activedescendant attribute set to a null value', function() {
    it('a span node with an aria-activedescendant attribute set to "alt1" that is available in the DOM, the span element has an aria-activedescendant attribute set to a null value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='alt1' aria-activedescendant=''>Alternative</span><img src='test.gif' aria-activedescendant='alt1'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("291");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("291");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("291");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: a span node with an aria-activedescendant attribute set to "alt1" that is available in the DOM; the target has an aria-activedescendant attribute set to a non-null value', function() {
    it('a span node with an aria-activedescendant attribute set to "alt1" that is available in the DOM; the target has an aria-activedescendant attribute set to a non-null value - should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span aria-activedescendant='alt2' id='alt1'>Alternative</span><img src='test.gif' aria-activedescendant='alt1'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("291");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("291");
       expect(res).toBe("291,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("291");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a span node with an aria-activedescendant attribute set to "alt1" that is available in the DOM; the target has an aria-activedescendant attribute set to a non-null value', function() {
    it('a span node with an aria-activedescendant attribute set to "alt1" that is available in the DOM; the target has an aria-activedescendant attribute set to a non-null value - should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span aria-activedescendant='alt2' id='alt1'>Alternative</span><img src='test.gif' aria-activedescendant='alt1'><span aria-activedescendant='alt4' id='alt3'>Alternative</span><img src='test.gif' aria-activedescendant='alt3'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("291");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("291");
       expect(res).toBe("291,2");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("291");
       expect(res.instances.length).toBe(2);
       // </variant3>
    });
});