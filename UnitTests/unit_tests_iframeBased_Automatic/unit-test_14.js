describe('String Pass: no node, available in the DOM, has an aria-sort attribute', function() {
    it('no node, available in the DOM, has an aria-sort attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p>Hello</p>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("14");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("14");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("14");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding th nodes, available in the DOM, has an aria-sort attribute', function() {
    it('no node, excluding th nodes, available in the DOM, has an aria-sort attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th aria-sort=''>Hello</th></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("14");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("14");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("14");
       expect(res).toBe(null);
       // </variant3>
    });
});

// nodes with a role="button" attribute,

describe('String Pass: no node, excluding nodes with a role="rowheader" attribute, available in the DOM, has an aria-sort attribute', function() {
    it('no node, excluding nodes with a role="rowheader" attribute, available in the DOM, has an aria-sort attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='rowheader button' aria-sort='ascending'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("14");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("14");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("14");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding nodes with a role="columnheader" attribute, available in the DOM, has an aria-sort attribute', function() {
    it('no node, excluding nodes with a role="columnheader" attribute, available in the DOM, has an aria-sort attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='columnheader' aria-sort='ascending'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("14");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("14");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("14");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: a span node, available in the DOM, has an aria-sort attribute', function() {
    it('a span node, available in the DOM, has an aria-sort attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span aria-sort='ascending'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("14");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("14");
       expect(res).toBe("14,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("14");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});