describe('String N/A: no nodes', function() {
    it('no nodes should be a na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("63");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("63");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("63");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: an acronym node with a role attribute set to the text value "presentation"', function() {
    it('an acronym node with a role attribute set to the text value "presentation" should be a pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<acronym role='presentation'>FAB</acronym>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("63");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("63");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("63");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: an acronym node with a style attribute set to the text value "display:none;"', function() {
    it('an acronym node with a style attribute set to the text value "display:none;" should be a pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<acronym style='display:none;'>FAB</acronym>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("63");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("63");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("63");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: an acronym tag', function() {
    it('an acronym tag should be a fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<acronym>FAB</acronym>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("63");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("63");
       expect(res).toBe("63,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("63");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});