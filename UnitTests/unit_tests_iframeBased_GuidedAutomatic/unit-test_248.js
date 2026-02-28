describe('String Pass: frameset with cols attribute set to the relative value "*"', function() {
    it('frameset with cols attribute set to the relative value "*" should be pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<html><head></head><frameset cols="*" contenteditable="false"><frame id="test" aria-label="this is a descriptive title" src="#"></frameset></html>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("248");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("248");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("248");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: two framesets with cols attribute set to the relative value "*"', function() {
    it('two framesets with cols attribute set to the relative value "*" should be pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<html><head></head><frameset cols="*" contenteditable="false"><frame id="test" aria-label="this is a descriptive title" src="#"></frameset></html>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("248");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("248");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("248");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: frameset with cols attribute set to the relative value "100%"', function() {
    it('frameset with cols attribute set to the relative value "100%" should be pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<html><head></head><frameset cols="100%" contenteditable="false"><frame id="test" aria-label="this is a descriptive title" src="#"></frameset></html>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("248");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("248");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("248");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: frameset with cols attribute set to the relative value "25%, *, 25%"', function() {
    it('frameset with cols attribute set to the relative value "25%, *, 25%" should be pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<html><head></head><frameset cols="25%, *, 25%" contenteditable="false"><frame id="test1" aria-label="this is a descriptive title" src="#"><frame id="test2" aria-label="this is a descriptive title" src="#"><frame id="test3" aria-label="this is a descriptive title" src="#"></frameset></html>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("248");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("248");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("248");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: frameset with cols attribute set to the relative value "     25%   ,   *   ,   25% ", with extraneous spaces', function() {
    it('frameset with cols attribute set to the relative value "     25%   ,   *   ,   25% ", with extraneous spaces should be pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<html><head></head><frameset cols="     25%   ,   *   ,   25% " contenteditable="false"><frame id="test1" aria-label="this is a descriptive title" src="#"><frame id="test2" aria-label="this is a descriptive title" src="#"><frame id="test3" aria-label="this is a descriptive title" src="#"></frameset></html>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("248");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("248");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("248");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: frameset with cols attribute set to absolute unit value "98"', function() {
    it('frame node with an aria-label attribute set to absolute unit value "98" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<html><head></head><frameset cols="98" contenteditable="false"><frame aria-label="title" id="test" src="#"></frameset></html>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("248");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("248");
       expect(res).toBe("248,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("248");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: frameset with cols attribute set to absolute unit value "75px"', function() {
    it('frame node with an aria-label attribute set to absolute unit value "75px" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<html><head></head><frameset cols="75px" contenteditable="false"><frame aria-label="title" id="test" src="#"></frameset></html>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("248");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("248");
       expect(res).toBe("248,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("248");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

// IMPORTANT: N/A is here for a reason
// as outerHTML is changed - we need to reset it in the test below

describe('String N/A: no frameset nodes', function() {
    it('no frameset nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = "<body></body>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("248");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("248");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("248");
       expect(res).toBe(null);
       // </variant3>
    });
});
