describe('String N/A: frame node with style set to a "display:none" text value', function() {
    it('frame node with style set to a "display:none" text value should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<frameset cols="*" contenteditable="false"><frame id="test" style="display:none" src="#"></frameset>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("227");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("227");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("227");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: frame node with a role set to a text value that starts with presentation', function() {
    it('frame node with a role set to a text value that starts with presentation should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<frameset cols="*" contenteditable="false"><frame id="test" role="presentation" src="#"></frameset>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("227");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("227");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("227");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: frame node with an aria-label attribute', function() {
    it('frame node with an aria-label attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<frameset cols="*" contenteditable="false"><frame id="test" aria-label="label1" src="#"></frameset>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("227");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("227");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("227");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: frame node with a title attribute', function() {
    it('frame node with a title attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<frameset cols="*" contenteditable="false"><frame id="test" title="label1" src="#"></frameset>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("227");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("227");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("227");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: frame node without an aria-label or title attribute', function() {
    it('frame node without an aria-label or title attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<frameset cols="*" contenteditable="false"><frame id="test" src="#"></frameset>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("227");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("227");
       expect(res).toBe("227,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("227");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

// IMPORTANT: N/A is here for a reason
// as outerHTML is changed - we need to reset it in the test below

describe('String N/A: no frame nodes', function() {
    it('no frame nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = "<body></body>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("227");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("227");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("227");
       expect(res).toBe(null);
       // </variant3>
    });
});
