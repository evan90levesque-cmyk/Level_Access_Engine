describe('String N/A: no nodes with an aria-errormessage attribute', function() {
    it('no nodes with an aria-errormessage attribute should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("51");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("51");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("51");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a span node with an aria-errormessage attribute set to a null value', function() {
    it('a span node with an aria-errormessage attribute set to a null value should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span aria-errormessage=''></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("51");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("51");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("51");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a span node with a role attribute value that starts with the text "presentation" and an aria-errormessage attribute set to a valid id', function() {
    it('a span node with a value that starts with the text "presentation" and an aria-errormessage attribute set to a valid id should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test'>Test</span><span aria-errormessage='test' role='presentation'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("51");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("51");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("51");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a span node with an aria-errormessage attribute set to "alt1" that is not available in the DOM', function() {
    it('a span node with an aria-errormessage attribute set to "alternative" that is not available in the DOM should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='alt1'>Alternative</span><img style='display:none' src='test.gif' aria-errormessage='alt1'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("51");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("51");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("51");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a span node with an aria-errormessage attribute set to "alt1" that is available in the DOM', function() {
    it('a span node with an aria-errormessage attribute set to "alt1" that is available in the DOM should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='alt1'>Alternative</span><img src='test.gif' aria-errormessage='alt1'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("51");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("51");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("51");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: two span nodes with an aria-errormessage attribute set to "alt1" that is available in the DOM', function() {
    it('two span nodes with an aria-errormessage attribute set to "alt1" that is available in the DOM should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='alt1'>Alternative</span><img src='test.gif' aria-errormessage='alt1'><span id='alt2'>Alternative</span><img src='test.gif' aria-errormessage='alt2'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("51");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("51");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("51");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: two span nodes, one with an aria-errormessage attribute set to "alt1\'", that is available in the DOM', function() {
   it('two span nodes, one with an aria-errormessage attribute set to "alt1\'", that is available in the DOM should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id=\"alt1'\">Alternative</span><img src='test.gif' aria-errormessage=\"alt1'\"><span id='alt2'>Alternative</span><img src='test.gif' aria-errormessage='alt2'>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("51");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("51");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("51");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Fail: a span node with an aria-errormessage attribute set to "alt1" that is available in the DOM; "alt1" is not an id value', function() {
    it('a span node with an aria-errormessage attribute set to "alt1" that is available in the DOM; "alt1" is not an id value - should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span>Alternative</span><img src='test.gif' aria-errormessage='alt1'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("51");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("51");
       expect(res).toBe("51,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("51");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Pass: a span node with an aria-errormessage attribute set to "alt" that is available multiple times in the DOM', function() {
   it('a span node with an aria-errormessage attribute set to "alt" that is available multiple times in the DOM; "alt" is an id value - should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id=\"alt\">Alternative</span><img src='test.gif' aria-errormessage='alt'><span id=\"alt\">Alternative to the alternative</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("51");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("51");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("51");
      expect(res).toBeNull();
      // </variant3>
   });
});

describe('String Fail: a span node with an aria-errormessage attribute set to "2alt" that is available in the DOM; "2alt" is not an id value', function() {
    it('a span node with an aria-errormessage attribute set to "2alt" that is available in the DOM; "2alt" is not an id value - should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span>Alternative</span><img src='test.gif' aria-errormessage='2alt'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("51");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("51");
       expect(res).toBe("51,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("51");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: two span nodes with an aria-errormessage attribute set to "alt1" that is available in the DOM; "alt1" is not an id value', function() {
    it('two span nodes with an aria-errormessage attribute set to "alt1" that is available in the DOM; "alt1" is not an id value - should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span>Alternative</span><img src='test.gif' aria-errormessage='alt1'><img src='test.gif' aria-errormessage='alt1'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("51");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("51");
       expect(res).toBe("51,2");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("51");
       expect(res.instances.length).toBe(2);
       // </variant3>
    });
});