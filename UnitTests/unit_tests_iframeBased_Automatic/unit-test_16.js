describe('String Pass: no node, available in the DOM, has an aria-multiline attribute', function() {
    it('no node, available in the DOM, has an aria-multiline attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p>Hello</p>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("16");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("16");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("16");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding textarea nodes, available in the DOM, has an aria-multiline attribute', function() {
    it('no node, excluding textarea nodes, available in the DOM, has an aria-multiline attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<textarea aria-multiline='true'>Hello</textarea>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("16");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("16");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("16");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding nodes with a role="textbox" attribute, available in the DOM, has an aria-multiline attribute', function() {
    it('no node, excluding nodes with a role="textbox" attribute, available in the DOM, has an aria-multiline attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='textbox button' aria-multiline='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("16");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("16");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("16");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: a span node, available in the DOM, has an aria-multiline attribute', function() {
    it('a span node, available in the DOM, has an aria-multiline attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span aria-multiline='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("16");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("16");
       expect(res).toBe("16,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("16");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});