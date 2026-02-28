describe('String Pass: no nodes, available to assistive technologies, has an aria-rowcount attribute', function() {
    it('no nodes, available to assistive technologies, has an aria-rowcount attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p>Hello</p>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("271");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("271");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("271");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a node with a style attribute set to "display:none", available to assistive technologies, has an aria-rowcount attribute', function() {
    it('a node with a style attribute set to "display:none", has an aria-rowcount attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p style='display:none' aria-rowcount='true'>Hello</p>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("271");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("271");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("271");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a node with a role attribute set to "presentation", available to assistive technologies, has an aria-rowcount attribute', function() {
    it('a node with a role attribute set to "presentation", has an aria-rowcount attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p role='presentation' aria-rowcount='true'>Hello</p>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("271");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("271");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("271");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding table nodes, available to assistive technologies, has an aria-rowcount attribute', function() {
    it('no node, excluding table nodes, available to assistive technologies, has an aria-rowcount attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table aria-rowcount='6'><tr><th>foo</th></tr><tr><td>bob</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("271");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("271");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("271");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "table", available to assistive technologies, has an aria-rowcount attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "table", available to assistive technologies, has an aria-rowcount attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='table' aria-rowcount='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("271");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("271");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("271");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "grid", available to assistive technologies, has an aria-rowcount attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "grid", available to assistive technologies, has an aria-rowcount attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='grid' aria-rowcount='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("271");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("271");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("271");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "treegrid", available to assistive technologies, has an aria-rowcount attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "treegrid", available to assistive technologies, has an aria-rowcount attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='treegrid' aria-rowcount='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("271");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("271");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("271");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: a span node, available in the DOM, has an aria-rowcount attribute', function() {
    it('a span node, available in the DOM, has an aria-rowcount attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span aria-rowcount='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("271");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("271");
       expect(res).toBe("271,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("271");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a span node role="button", available in the DOM, has an aria-rowcount attribute', function() {
    it('a span node role="button", available in the DOM, has an aria-rowcount attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='button' aria-rowcount='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("271");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("271");
       expect(res).toBe("271,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("271");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});