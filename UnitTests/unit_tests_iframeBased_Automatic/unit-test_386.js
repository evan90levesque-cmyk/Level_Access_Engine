describe('String N/A: no nodes with an headers attribute', function() {
    it('no nodes with an headers attribute should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("386");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("386");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("386");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a td node with an headers attribute set to a null value', function() {
    it('a td node with an headers attribute set to a null value should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><td headers=''></td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("386");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("386");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("386");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a td node with a role attribute value that starts with the text "presentation"', function() {
    it('a td node with a value that starts with the text "presentation" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><td role='presentation'></td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("386");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("386");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("386");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a td node with an headers attribute set to "alt1" that is not available in the DOM', function() {
    it('a td node with an headers attribute set to "alternative" that is not available in the DOM should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th id='alt1'>Alternative</th><td style='display:none' headers='alt1'></td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("386");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("386");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("386");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a td node with an headers attribute set to "alt1" that is available in the DOM', function() {
    it('a td node with an headers attribute set to "alt1" that is available in the DOM should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th id='alt1'>Alternative</th><td headers='alt1'></td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("386");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("386");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("386");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a td node with an headers attribute set to " alt1 " that is available in the DOM as "alt1"', function() {
   it('a td node with an headers attribute set to " alt1 " that is available in the DOM as "alt1" should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th id='alt1'>Alternative</th><td headers=' alt1 '></td></tr></table>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("386");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("386");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("386");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: a td node with an headers attribute set to "   alt1    alt2   " that is available in the DOM as "alt1"', function() {
   it('a td node with an headers attribute set to "   alt1    alt2   " that is available in the DOM as "alt1" should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th id='alt1'>Alternative</th><th id='alt2'>Alternative</th><td headers='   alt1    alt2   '></td></tr></table>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("386");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("386");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("386");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: a td node with an headers attribute set to "alt1" that is available multiple times in the DOM', function() {
   it('a td node with an headers attribute set to "alt1" that is available multiple times in the DOM - should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th id='alt1'>Alternative1</th><th id='alt1'>Alternative2</th><td headers='alt1'></td></tr></table>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("386");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("386");
      expect(res).toBe("");       
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("386");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: two td nodes with an headers attribute set to "alt1" that is available in the DOM', function() {
    it('two td nodes with an headers attribute set to "alt1" that is available in the DOM should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th id='alt1'>Alternative</th><td headers='alt1'></td><td headers='alt1'></td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("386");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("386");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("386");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: two td nodes, one with an headers attribute set to "alt1\'", that is available in the DOM', function() {
   it('two td nodes, one with an headers attribute set to "alt1\'", that is available in the DOM should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th id=\"alt1'\">Alternative</th><td headers=\"alt1'\"></td><td headers=\"alt1'\"></td></tr></table>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("386");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("386");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("386");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Fail: a td node with an headers attribute set to "alt1" that is available in the DOM; "alt1" is not an id value', function() {
    it('a td node with an headers attribute set to "alt1" that is available in the DOM; "alt1" is not an id value - should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th>Alternative</th><td headers='alt'></td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("386");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("386");
       expect(res).toBe("386,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("386");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a td node with an headers attribute set to "2alt" that is available in the DOM; "2alt" is not an id value', function() {
    it('a td node with an headers attribute set to "2alt" that is available in the DOM; "2alt" is not an id value - should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th>Alternative</th><td headers='2alt'></td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("386");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("386");
       expect(res).toBe("386,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("386");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: two td nodes with an headers attribute set to "alt1" that is available in the DOM; "alt1" is not an id value', function() {
    it('two td nodes with an headers attribute set to "alt1" that is available in the DOM; "alt1" is not an id value - should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th>Alternative</th><td headers='alt'></td><td headers='alt'></td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("386");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("386");
       expect(res).toBe("386,2");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("386");
       expect(res.instances.length).toBe(2);
       // </variant3>
    });
});

describe('String Fail: a td node with an headers attribute set to "alt1 alt2" that is available in the DOM; "alt2" is not an id value', function() {
    it('a td node with an headers attribute set to "alt1 alt2" that is available in the DOM; "alt2" is not an id value - should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th id='alt1'>Alternative</th><td headers='alt1 alt2'></td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("386");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("386");
       expect(res).toBe("386,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("386");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a td node with an headers attribute set to "alt1 alt2" that is available in the DOM; "alt1" is used twice as an id value', function() {
    it('a td node with an headers attribute set to "alt1 alt2" that is available in the DOM; "alt1" is used twice as an id value - should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th id='alt1'>Alternative1</th><th id='alt1'>Alternative2</th><td headers='alt1 alt2'></td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("386");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("386");
       expect(res).toBe("386,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("386");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});