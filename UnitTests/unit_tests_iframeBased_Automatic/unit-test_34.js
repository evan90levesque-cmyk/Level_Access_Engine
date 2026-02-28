describe('String N/A: blink node not available in the DOM', function() {
    it('no blink nodes not available in the DOM should be equal to na', function() {
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("34");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("34");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("34");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: blink node available in the DOM', function() {
    it('a blink node available in the DOM should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<blink>Hello</blink>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("34");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("34");
       expect(res).toBe("34,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("34");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

// Deque

describe('Deque Pass: blink node not available in the DOM', function() {
    it('no blink nodes not available in the DOM should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<p style="display:none;"><blink id="pass1">text</blink></p>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("34");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("34");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("34");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('Deque Fail: blink node available in the DOM', function() {
    it('a blink node available in the DOM should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<p><blink id="fail1">text</blink></p>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("34");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("34");
       expect(res).toBe("34,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("34");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('Deque Fail: blink node available in the DOM, even though it is hidden to screen-readers', function() {
    it('blink node available in the DOM, even though it is hidden to screen-readers, should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<p aria-hidden="true"><blink id="fail2">text</blink></p>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("34");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("34");
       expect(res).toBe("34,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("34");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});