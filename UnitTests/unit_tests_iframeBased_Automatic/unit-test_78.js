describe('String N/A: no nodes with an aria-flowto attribute', function() {
    it('no nodes with an aria-flowto attribute should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("78");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("78");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("78");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a span node with an aria-flowto attribute set to a null value', function() {
    it('a span node with an aria-flowto attribute set to a null value should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span aria-flowto=''></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("78");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("78");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("78");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a span node with a role attribute value that starts with the text "presentation"', function() {
    it('a span node with a value that starts with the text "presentation" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='presentation'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("78");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("78");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("78");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a span node with an aria-flowto attribute set to "alt1" that is not available in the DOM', function() {
    it('a span node with an aria-flowto attribute set to "alternative" that is not available in the DOM should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='alt1'>Alternative</span><img style='display:none' src='test.gif' aria-flowto='alt1'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("78");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("78");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("78");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a span node with an aria-flowto attribute set to "alt1" that is available in the DOM', function() {
    it('a span node with an aria-flowto attribute set to "alt1" that is available in the DOM should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='alt1'>Alternative</span><img src='test.gif' aria-flowto='alt1'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("78");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("78");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("78");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a span node with an aria-flowto attribute set to " alt1 " that is available in the DOM as "alt1"', function() {
   it('a span node with an aria-flowto attribute set to " alt1 " that is available in the DOM as "alt1" should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='alt1'>Alternative</span><img src='test.gif' aria-flowto=' alt1 '>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("78");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("78");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("78");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: two span nodes with an aria-flowto attribute set to "alt1" that is available in the DOM', function() {
    it('two span nodes with an aria-flowto attribute set to "alt1" that is available in the DOM should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='alt1'>Alternative</span><img src='test.gif' aria-flowto='alt1'><img src='test.gif' aria-flowto='alt1'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("78");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("78");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("78");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: two span nodes with an aria-flowto attribute set to "alt1 alt2" that is available in the DOM', function() {
   it('a span nodes with an aria-flowto attribute set to "alt1 alt2" that is available in the DOM should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='alt1'>Alternative</span><span id='alt2'>Alternative 2</span><img src='test.gif' aria-flowto='alt1 alt2'>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("78");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("78");
      expect(res).toBe("");       
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("78");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: two span nodes with an aria-flowto attribute set to "   alt1    alt2  " that is available in the DOM', function() {
   it('a span nodes with an aria-flowto attribute set to "   alt1    alt2  " that is available in the DOM should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='alt1'>Alternative</span><span id='alt2'>Alternative 2</span><img src='test.gif' aria-flowto='alt1 alt2'>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("78");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("78");
      expect(res).toBe("");       
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("78");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: two span nodes, one with an aria-flowto attribute set to "alt1\'", that is available in the DOM', function() {
   it('two span nodes, one with an aria-flowto attribute set to "alt1\'", that is available in the DOM should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id=\"alt1'\">Alternative</span><img src='test.gif' aria-flowto=\"alt1'\"><img src='test.gif' aria-flowto=\"alt1'\">";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("78");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("78");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("78");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Fail: a span node with an aria-flowto attribute set to "alt1" that is available in the DOM; "alt1" is not an id value', function() {
    it('a span node with an aria-flowto attribute set to "alt1" that is available in the DOM; "alt1" is not an id value - should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span>Alternative</span><img src='test.gif' aria-flowto='alt'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("78");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("78");
       expect(res).toBe("78,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("78");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Pass: a span node with an aria-flowto attribute set to "alt" that is available multiple times in the DOM', function() {
   it('a span node with an aria-flowto attribute set to "alt" that is available multiple times in the DOM; "alt" is an id value - should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id=\"alt\">Alternative</span><img src='test.gif' aria-flowto='alt'><span id=\"alt\">Alternative to the alternative</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("78");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("78");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("78");
      expect(res).toBeNull();
      // </variant3>
   });
});

describe('String Fail: a span node with an aria-flowto attribute set to "2alt" that is available in the DOM; "2alt" is not a valid id value', function() {
    it('a span node with an aria-flowto attribute set to "2alt" that is available in the DOM; "2alt" is not a valid id value - should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span>Alternative</span><img src='test.gif' aria-flowto='2alt'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("78");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("78");
       expect(res).toBe("78,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("78");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a span node with an aria-flowto attribute set to "alt1 alt2" that is available in the DOM; "alt2" is not an id value', function() {
    it('a span node with an aria-flowto attribute set to "alt1 alt2" that is available in the DOM; "alt2" is not an id value - should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='alt1'>Alternative</span><img src='test.gif' aria-flowto='alt1 alt2'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("78");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("78");
       expect(res).toBe("78,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("78");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a span node with an aria-flowto attribute set to "alt1 alt2" that is available in the DOM; "alt1" is used twice as an id value', function() {
    it('a span node with an aria-flowto attribute set to "alt1 alt2" that is available in the DOM; "alt1" is used twice as an id value - should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='alt1'>Alternative1</span><span id='alt1'>Alternative2</span><img src='test.gif' aria-flowto='alt1 alt2'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("78");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("78");
       expect(res).toBe("78,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("78");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a span node with an aria-flowto attribute set to "alt1 alt2" that is available in the DOM; "alt1" is used twice as an id value; there are two img nodes', function() {
    it('a span node with an aria-flowto attribute set to "alt1 alt2" that is available in the DOM; "alt1" is used twice as an id value; there are two img nodes - should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='alt1'>Alternative1</span><span id='alt1'>Alternative2</span><img src='test.gif' aria-flowto='alt1 alt2'><img src='test.gif' aria-flowto='alt1 alt2'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("78");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("78");
       expect(res).toBe("78,2");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("78");
       expect(res.instances.length).toBe(2);
       // </variant3>
    });
});