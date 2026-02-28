describe('String N/A: no heading nodes', function() {
    it('no heading nodes', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("384");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("384");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("384");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a node with a role="heading" attribute and an aria-level="1" attribute that is not available in the DOM', function() {
    it('a node with a role="heading" attribute and an aria-level="1" attribute not available in the DOM should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='heading' aria-level='1' style='display:none'>Heading level-1</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("384");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("384");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("384");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a node with a role="heading" attribute and an aria-level="1" attribute not available to AT', function() {
    it('a node with a role="heading" attribute and an aria-level="1" attribute not available to AT should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='heading' aria-level='1' aria-hidden='true'>Heading level-1</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("384");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("384");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("384");
       expect(res).toBe(null);
       // </variant3>
    });
});

// Pass

describe('String Pass: the body node contains a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "1" which contains text', function() {
    it('the body node contains a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "1" which contains text should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='heading' aria-level='1'>Level 1 Heading</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("384");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("384");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("384");
       expect(res).toBe(null);
       // </variant3>
    });
});

// Fail

describe('String Fail: the body node contains a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "1" which does not contain text', function() {
    it('the body node contains a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "1" which does not contain text should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='heading' aria-level='1'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("384");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("384");
       expect(res).toBe("384,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("384");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});