describe('String N/A: no meta node', function() {
    it('no meta node should be equal to n/a', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("182");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("182");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("182");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a meta node with no role or aria- attributes', function() {
    it('a meta node with no role or aria- attributes should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "<meta>";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("182");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("182");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("182");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: two meta nodes with no role or aria- attributes', function() {
    it('two meta nodes with no role or aria- attributes should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "<meta><meta>";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("182");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("182");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("182");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: a meta node with a role="figure" attribute', function() {
    it('a meta node with a role="figure" attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "<meta role='figure'>";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("182");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("182");
       expect(res).toBe("182,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("182");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a meta node with an aria-expanded="true" attribute', function() {
    it('a meta node with an aria-expanded="true" attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "<meta aria-expanded='true'>";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("182");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("182");
       expect(res).toBe("182,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("182");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a meta node with a role="figure" attribute and a meta node with an aria-expanded="true" attribute', function() {
    it('a meta node with a role="figure" attribute and a meta node with an aria-expanded="true" attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "<meta role='figure'><meta aria-expanded='true'>";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("182");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("182");
       expect(res).toBe("182,2");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("182");
       expect(res.instances.length).toBe(2);
       // </variant3>
    });
});