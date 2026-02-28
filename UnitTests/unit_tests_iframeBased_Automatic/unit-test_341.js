describe('String N/A: no nodes', function() {
    it('no nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("341");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("341");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("341");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a node with a role="link" attribute not visible in the displayed content, that has a disabled attribute and a tabindex set to "2"', function() {
    it('a node with a role="link" attribute not visible in the displayed content, that has a disabled attribute and a tabindex set to "2" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='link' style='display:none' disabled></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("341");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("341");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("341");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a node with a role="link" attribute not visible in the displayed content, that has an aria-disabled attribute set to "true" and a tabindex set to "2"', function() {
    it('a node with a role="link" attribute not visible in the displayed content, that has an aria-disabled attribute set to "true" and a tabindex set to "2" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='link' style='display:none' aria-disabled='true'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("341");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("341");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("341");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a node with a role="link" attribute not available to assistive technology, that has a disabled attribute and a tabindex set to "2"', function() {
    it('a node with a role="link" attribute not available to assistive technology, that has an disabled attribute and a tabindex set to "2" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='link' aria-hidden='true' disabled></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("341");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("341");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("341");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a node with a role="link" attribute not available to assistive technology, that has an aria-disabled attribute set to "true" and a tabindex set to "2"', function() {
    it('a node with a role="link" attribute not available to assistive technology, that has an aria-disabled attribute set to "true" and a tabindex set to "2" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='link' aria-hidden='true' aria-disabled='true'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("341");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("341");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("341");
       expect(res).toBe(null);
       // </variant3>
    });
});

//

describe('String Pass: a node with a role="link" attribute, that does not have a disabled attribute and has a tabindex set to "-1"', function() {
    it('a node with a role="link" attribute, that does not have a disabled attribute and has a tabindex set to "-1" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='link' tabindex='-1'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("341");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("341");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("341");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a node with a role="link" attribute, that has a disabled attribute and has a tabindex set to "0"', function() {
    it('a node with a role="link" attribute, that has a disabled attribute and has a tabindex set to "0" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='link' disabled tabindex='0'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("341");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("341");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("341");
       expect(res).toBe(null);
       // </variant3>
    });
});

//

describe('String N/A: a node with a role="link" attribute, that has a disabled attribute and has a tabindex set to "2"', function() {
    it('a node with a role="link" attribute, that has a disabled attribute and has a tabindex set to "2" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='link' disabled tabindex='2'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("341");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("341");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("341");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a node with a role="link" attribute, that has a disabled attribute and has a tabindex set to "2"', function() {
    it('a node with a role="link" attribute, that has a disabled attribute and has a tabindex set to "2" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='link' tabindex='2' disabled></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("341");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("341");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("341");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a node with a role="link" attribute, that has aria-disabled attribute set to true and has a tabindex set to "2"', function() {
    it('a node with a role="link" attribute, that has aria-disabled attribute set to true and has a tabindex set to "2" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='link' tabindex='2' aria-disabled='true'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("341");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("341");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("341");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a node with a role="link" attribute, that has an aria-disabled attribute set to false and has a tabindex set to "-2"', function() {
    it('a node with a role="link" attribute, that has an aria-disabled attribute set to false and has a tabindex set to "-2" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='link' aria-disabled='false' tabindex='-2'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("341");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("341");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("341");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: a node with a role="link" attribute, that has an aria-disabled attribute set to false and has a tabindex set to "2"', function() {
    it('a node with a role="link" attribute, that has an aria-disabled attribute set to false and has a tabindex set to "2" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='link' aria-disabled='false' tabindex='2'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("341");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("341");
       expect(res).toBe("341,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("341");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});