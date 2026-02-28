describe('String N/A: no ol nodes', function() {
    it('no ol nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("75");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("75");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("75");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a ol node with a role attribute set to the text value "presentation"', function() {
    it('a ol node with a role attribute set to the text value "presentation" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<ol role='presentation'>Hello</ol>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("75");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("75");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("75");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a tr node with a style attribute set to the text value "display:none;"', function() {
    it('a tr node with a style attribute set to the text value "display:none;" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<ol style='display:none;'>Hello</ol>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("75");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("75");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("75");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a ol node with content', function() {
    it('a ol node with content should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<ol>Hello</ol>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("75");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("75");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("75");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: a ol node without content', function() {
    it('a ol node without content should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<ol></ol>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("75");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("75");
       expect(res).toBe("75,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("75");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});