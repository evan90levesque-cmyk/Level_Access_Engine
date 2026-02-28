describe('String N/A: no nodes with an aria-activedescendant attribute', function() {
    it('no nodes with an aria-activedescendant attribute should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("290");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("290");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("290");
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
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("290");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("290");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("290");
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
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("290");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("290");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("290");
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
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("290");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("290");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("290");
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
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("290");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("290");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("290");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a span node with an aria-activedescendant attribute set to "alt1" that is available in the DOM multiple times', function() {
   it('a span nodes with an aria-activedescendant attribute set to "alt1" that is available in the DOM mutiple times should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='alt1'>Alternative1</span><span id='alt1'>Alternative2</span><img src='test.gif' aria-activedescendant='alt1'>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("290");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("290");
      expect(res).toBe("");       
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("290");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: two span nodes with an aria-activedescendant attribute set to "alt1" that is available in the DOM', function() {
    it('two span nodes with an aria-activedescendant attribute set to "alt1" that is available in the DOM should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='alt1'>Alternative</span><img src='test.gif' aria-activedescendant='alt1'><span id='alt2'>Alternative</span><img src='test.gif' aria-activedescendant='alt2'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("290");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("290");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("290");
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
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("290");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("290");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("290");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Fail: an img node with an aria-activedescendant attribute set to "alt" that is available in the DOM; "alt1" is not an id value', function() {
    it('an img node with an aria-activedescendant attribute set to "alt" that is available in the DOM; "alt1" is not an id value - should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span>Alternative</span><img src='test.gif' aria-activedescendant='alt'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("290");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("290");
       expect(res).toBe("290,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("290");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: an img node with an aria-activedescendant attribute set to "2alt" that is available in the DOM; "2alt" is not an id value', function() {
    it('an img node with an aria-activedescendant attribute set to "2alt" that is available in the DOM; "2alt1" is not an id value - should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span>Alternative</span><img src='test.gif' aria-activedescendant='2alt'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("290");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("290");
       expect(res).toBe("290,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("290");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: two img nodes with an aria-activedescendant attribute set to "alt" that is available in the DOM; "alt" is not an id value', function() {
    it('two img nodes with an aria-activedescendant attribute set to "alt" that is available in the DOM; "alt" is not an id value - should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span>Alternative</span><img src='test.gif' aria-activedescendant='alt'><img src='test.gif' aria-activedescendant='alt'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("290");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("290");
       expect(res).toBe("290,2");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("290");
       expect(res.instances.length).toBe(2);
       // </variant3>
    });
});