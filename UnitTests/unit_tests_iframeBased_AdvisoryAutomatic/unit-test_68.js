describe('String N/A: no nodes', function() {
    it('no nodes should be a na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("68");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("68");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("68");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: an s node with a style attribute set to the text value "display:none;"', function() {
    it('an s node with a style attribute set to the text value "display:none;" should be a pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<s style='display:none;'>FAB</s>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("68");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("68");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("68");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: an s tag', function() {
    it('an s tag should be a fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<s>FAB</s>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("68");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("68");
       expect(res).toBe("68,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("68");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});