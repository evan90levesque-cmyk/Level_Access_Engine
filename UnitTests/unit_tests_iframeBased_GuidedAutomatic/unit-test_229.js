describe('String N/A: frame node with style set to a "display:none" text value', function() {
    it('frame node with style set to a "display:none" text value should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<html><head></head><frameset cols="*" contenteditable="false"><frame id="test" style="display:none" src="#"></frameset></html>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("229");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("229");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("229");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: frame node with a role set to a text value that starts with presentation', function() {
    it('frame node with a role set to a text value that starts with presentation should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<html><head></head><frameset cols="*" contenteditable="false"><frame id="test" role="presentation" src="#"></frameset></html>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("229");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("229");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("229");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: frame node with an aria-label attribute set to the text value "this is a descriptive title"', function() {
    it('frame node with an aria-label attribute set to the text value "this is a descriptive title"', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<html><head></head><frameset cols="*" contenteditable="false"><frame id="test" aria-label="this is a descriptive title" src="#"></frameset></html>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("229");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("229");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("229");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: frame node with an aria-label attribute set to the text value "this is a descriptive title"', function() {
    it('frame node with an aria-label attribute set to the text value "this is a descriptive title" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<html><head></head><frameset cols="*" contenteditable="false"><frame id="test" title="this is a descriptive title" src="#"></frameset></html>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("229");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("229");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("229");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: frame node with an aria-label attribute set to the text value "title"', function() {
    it('frame node with an aria-label attribute set to the text value "title" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<html><head></head><frameset cols="*" contenteditable="false"><frame aria-label="title" id="test" src="#"></frameset></html>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("229");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("229");
       expect(res).toBe("229,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("229");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: frame node with an aria-label attribute set to the text value "frame"', function() {
    it('frame node with an aria-label attribute set to the text value "frame" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<html><head></head><frameset cols="*" contenteditable="false"><frame aria-label="frame" id="test" src="#"></frameset></html>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("229");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("229");
       expect(res).toBe("229,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("229");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: frame node with an aria-label attribute set to the text value "top"', function() {
    it('frame node with an aria-label attribute set to the text value "top" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<html><head></head><frameset cols="*" contenteditable="false"><frame aria-label="top" id="test" src="#"></frameset></html>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("229");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("229");
       expect(res).toBe("229,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("229");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: frame node with a title attribute set to the text value "bottom"', function() {
    it('frame node with a title attribute set to the text value "bottom" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<html><head></head><frameset cols="*" contenteditable="false"><frame title="bottom" id="test" src="#"></frameset></html>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("229");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("229");
       expect(res).toBe("229,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("229");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: frame node with a title attribute set to the text value "left"', function() {
    it('frame node with a title attribute set to the text value "left" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<html><head></head><frameset cols="*" contenteditable="false"><frame title="left" id="test" src="#"></frameset></html>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("229");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("229");
       expect(res).toBe("229,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("229");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: frame node with a title attribute set to the text value "right"', function() {
    it('frame node with a title attribute set to the text value "right" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<html><head></head><frameset cols="*" contenteditable="false"><frame title="right" id="test" src="#"></frameset></html>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("229");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("229");
       expect(res).toBe("229,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("229");
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
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("229");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("229");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("229");
       expect(res).toBe(null);
       // </variant3>
    });
});