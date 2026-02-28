describe('String N/A: no nodes', function() {
    it('no nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("360");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("360");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("360");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a node with a role="button" attribute not visible in the displayed content, that has an aria-owns attribute set to a non-null value', function() {
    it('a node with a role="button" attribute not visible in the displayed content, that has an aria-owns attribute set to a non-null value should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='button' style='display:none' aria-owns='hello'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("360");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("360");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("360");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a node with a role="button" attribute not available to assistive technology, that has an aria-owns attribute set to a non-null value', function() {
    it('a node with a role="button" attribute not available to assistive technology, that has an aria-owns attribute set to a non-null value should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='button' aria-hidden='true' aria-owns='hello'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("360");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("360");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("360");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a node with a role="button" attribute, that has an aria-owns attribute set to a null value', function() {
    it('a node with a role="button" attribute, that has an aria-owns attribute set to a null value should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='button' aria-owns=''></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("360");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("360");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("360");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a node with a role="button" attribute, that does not have an aria-owns attribute', function() {
    it('a node with a role="button" attribute, that does not have an aria-owns attribute should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='button'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("360");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("360");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("360");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a single node with a role="button" attribute, that has an aria-owns attribute set to a non-null value', function() {
    it('a single node with a role="button" attribute, that has an aria-owns attribute set to a non-null value should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='button' aria-owns=''></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("360");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("360");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("360");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a single node with a role="button" attribute, that has an aria-owns attribute set to a value with a double quotation mark', function() {
   it('a single node with a role="button" attribute, that has an aria-owns attribute set to a value with a double quotation mark should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='button' aria-owns='\"test'></span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("360");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("360");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("360");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: two nodes with a role="button" attribute, that both have an aria-owns attribute set to a different non-null value, but one is null', function() {
    it('two nodes with a role="button" attribute, that both have an aria-owns attribute set to a different non-null value, but one is null should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='button' aria-owns='hello1'></span><span role='button' aria-owns=''></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("360");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("360");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("360");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: two nodes with a role="button" attribute, that both have an aria-owns attribute set to a different non-null value', function() {
    it('two nodes with a role="button" attribute, that both have an aria-owns attribute set to a different non-null value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='button' aria-owns='hello1'></span><span role='button' aria-owns='hello2'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("360");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("360");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("360");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: four nodes with a role="button" attribute, that both have an aria-owns attribute set to a different non-null value', function() {
    it('four nodes with a role="button" attribute, that both have an aria-owns attribute set to a different non-null value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='button' aria-owns='hello1'></span><span role='button' aria-owns='hello2'></span><span role='button' aria-owns='hello3'></span><span role='button' aria-owns='hello4'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("360");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("360");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("360");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: two nodes with a role="button" attribute, that both have an aria-owns attribute set to the same non-null value', function() {
    it('two nodes with a role="button" attribute, that both have an aria-owns attribute set to the same non-null value should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='button' aria-owns='hello'></span><span role='button' aria-owns='hello'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("360");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("360");
       expect(res).toBe("360,2");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("360");
       expect(res.instances.length).toBe(2);
       // </variant3>
    });
});

describe('String Fail: four nodes with a role="button" attribute, that both have an aria-owns attribute set to the same non-null value', function() {
    it('four nodes with a role="button" attribute, that both have an aria-owns attribute set to the same non-null value should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='button' aria-owns='hello'></span><span role='button' aria-owns='hello'></span><span role='button' aria-owns='hello'></span><span role='button' aria-owns='hello'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("360");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("360");
       expect(res).toBe("360,4");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("360");
       expect(res.instances.length).toBe(4);
       // </variant3>
    });
});