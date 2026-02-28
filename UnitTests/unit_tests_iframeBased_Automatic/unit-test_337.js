describe('String N/A: no nodes', function() {
    it('no nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("337");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("337");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("337");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a node with a role="button" attribute not visible in the displayed content, that has a disabled attribute and a tabindex set to "2"', function() {
    it('a node with a role="button" attribute not visible in the displayed content, that has a disabled attribute and a tabindex set to "2" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='button' style='display:none' disabled></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("337");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("337");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("337");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a node with a role="button" attribute not visible in the displayed content, that has an aria-disabled attribute set to "true" and a tabindex set to "2"', function() {
    it('a node with a role="button" attribute not visible in the displayed content, that has an aria-disabled attribute set to "true" and a tabindex set to "2" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='button' style='display:none' aria-disabled='true'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("337");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("337");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("337");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a node with a role="button" attribute not available to assistive technology, that has a disabled attribute and a tabindex set to "2"', function() {
    it('a node with a role="button" attribute not available to assistive technology, that has an disabled attribute and a tabindex set to "2" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='button' aria-hidden='true' disabled></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("337");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("337");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("337");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a node with a role="button" attribute not available to assistive technology, that has an aria-disabled attribute set to "true" and a tabindex set to "2"', function() {
    it('a node with a role="button" attribute not available to assistive technology, that has an aria-disabled attribute set to "true" and a tabindex set to "2" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='button' aria-hidden='true' aria-disabled='true'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("337");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("337");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("337");
       expect(res).toBe(null);
       // </variant3>
    });
});

//

describe('String Pass: a node with a role="button" attribute, that does not have a disabled attribute and has a tabindex set to "-1"', function() {
    it('a node with a role="button" attribute, that does not have a disabled attribute and has a tabindex set to "-1" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='button' tabindex='-1'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("337");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("337");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("337");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a node with a role="button" attribute, that has a disabled attribute and has a tabindex set to "0"', function() {
    it('a node with a role="button" attribute, that has a disabled attribute and has a tabindex set to "0" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='button' disabled tabindex='0'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("337");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("337");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("337");
       expect(res).toBe(null);
       // </variant3>
    });
});

//

describe('String N/A: a node with a role="button" attribute, that has a disabled attribute and has a tabindex set to "2"', function() {
    it('a node with a role="button" attribute, that has a disabled attribute and has a tabindex set to "2" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='button' disabled tabindex='2'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("337");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("337");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("337");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a node with a role="button" attribute, that has an aria-disabled attribute set to false and has a tabindex set to "-2"', function() {
    it('a node with a role="button" attribute, that has an aria-disabled attribute set to false and has a tabindex set to "-2" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='button' aria-disabled='false' tabindex='-2'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("337");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("337");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("337");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a node with a role="button" attribute, that has aria-disabled set to true and has a tabindex set to "2"', function() {
    it('a node with a role="button" attribute, that has aria-disabled set to true and has a tabindex set to "2" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='button' aria-disabled='true' tabindex='2'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("337");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("337");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("337");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a node with a role="button" attribute, that has a disabled attribute and a tabindex set to "2"', function() {
    it('a node with a role="button" attribute, that has a disabled attribute and a tabindex set to "2" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='button' disabled tabindex='2'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("337");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("337");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("337");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: a node with a role="button" attribute, that has a tabindex set to "2"', function() {
    it('a node with a role="button" attribute, that has a tabindex set to "2" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='button' tabindex='2'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("337");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("337");
       expect(res).toBe("337,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("337");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String N/A: an a with a role="button" attribute, that has a tabindex set to "2"', function() {
   it('an a with a role="button" attribute, that has a tabindex set to "2" should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#' role='button' tabindex='2'/>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("337");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("337");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("337");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: an area with a role="button" attribute, that has a tabindex set to "2"', function() {
   it('an area with a role="button" attribute, that has a tabindex set to "2" should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<area role='button' tabindex='2'/>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("337");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("337");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("337");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: an input with a role="button" attribute, that has a tabindex set to "2"', function() {
   it('a input with a role="button" attribute, that has a tabindex set to "2" should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input role='button' tabindex='2'/>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("337");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("337");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("337");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: a button with a role="button" attribute, that has a tabindex set to "2"', function() {
   it('a button with a role="button" attribute, that has a tabindex set to "2" should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<button role='button' tabindex='2'/>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("337");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("337");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("337");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: a textarea with a role="button" attribute, that has a tabindex set to "2"', function() {
   it('a textarea with a role="button" attribute, that has a tabindex set to "2" should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<textarea role='button' tabindex='2'/>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("337");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("337");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("337");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: a node with a role="button" attribute, that has a tabindex set to "2", referenced by an ancestor via aria-activedescendant', function() {
   it('a node with a role="button" attribute, that has a tabindex set to "2", referenced by an ancestor via aria-activedescendant should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div aria-activedescendant='test337Input'><div><span id='test337Input' role='button' tabindex='2'/></div></div>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("337");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("337");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("337");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: a node with a role="button" attribute, that has a tabindex set to "2", referenced by an ancestor via aria-activedescendant with a quotation mark', function() {
   it('a node with a role="button" attribute, that has a tabindex set to "2", referenced by an ancestor via aria-activedescendant with a quotation mark should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div aria-activedescendant=\"test337Input'\"><div><span id=\"test337Input'\" role='button' tabindex='2'/></div></div>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("337");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("337");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("337");
      expect(res).toBe(null);
      // </variant3>
   });
});
