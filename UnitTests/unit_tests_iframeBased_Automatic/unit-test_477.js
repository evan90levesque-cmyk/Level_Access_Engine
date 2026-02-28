describe('String Pass: a body node does not have an aria-hidden attribute set to true', function() {
    it('a body node does no have an aria-hidden attribute set to true should be equal to pass', function() {
       var iframe = document.querySelector("#testing");
       LevelAccess_AccessEngine.setWindowUnderTest(iframe.contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("477");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("477");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("477");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: a body node has an aria-hidden attribute set to true', function() {
    it('a body node has an aria-hidden attribute set to true should be equal to fail', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.body.setAttribute("aria-hidden", "true");
       LevelAccess_AccessEngine.setWindowUnderTest(iframe.contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("477");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("477");
       expect(res).toBe("477,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("477");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});