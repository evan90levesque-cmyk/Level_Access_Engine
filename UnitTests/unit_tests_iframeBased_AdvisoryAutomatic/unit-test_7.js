describe('String Pass: an body node', function() {
    it('an body node should be equal to pass', function() {
       var iframe = document.querySelector("#testing");
       LevelAccess_AccessEngine.setWindowUnderTest(iframe.contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("7");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("7");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("7");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: an body node with a role="document"', function() {
    it('an body node with a role="document" should be equal to fail', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.body.setAttribute("role", "document");
       LevelAccess_AccessEngine.setWindowUnderTest(iframe.contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("7");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("7");
       expect(res).toBe("7,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("7");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});