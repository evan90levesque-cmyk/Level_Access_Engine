describe('String Pass: no nodes, available to assistive technologies, has an aria-pressed attribute', function() {
    it('no nodes, available to assistive technologies, has an aria-pressed attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p>Hello</p>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("38");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("38");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("38");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding button nodes, available to assistive technologies, has an aria-pressed attribute', function() {
    it('no node, excluding button nodes, available to assistive technologies, has an aria-pressed attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<button aria-pressed='true'>Hello</button>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("38");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("38");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("38");
       expect(res).toBe(null);
       // </variant3>
    });
});

// input type="button | submit | reset | image" nodes,

describe('String Pass: no node, excluding input type="button | submit | reset | image" nodes nodes, available to assistive technologies, has an aria-pressed attribute', function() {
    it('no node, excluding input type="button | submit | reset | image" nodes nodes, available to assistive technologies, has an aria-pressed attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='button' aria-pressed='true'><input type='submit' aria-pressed='true'><input type='reset' aria-pressed='true'><input type='image' aria-pressed='true'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("38");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("38");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("38");
       expect(res).toBe(null);
       // </variant3>
    });
});

// nodes with a role="button" attribute,

describe('String Pass: no node, excluding nodes with a role attribute that starts with "button", available to assistive technologies, has an aria-pressed attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "button", available to assistive technologies, has an aria-pressed attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='button' aria-pressed='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("38");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("38");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("38");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: a span node, available in the DOM, has an aria-pressed attribute', function() {
    it('a span node, available in the DOM, has an aria-pressed attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span aria-pressed='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("38");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("38");
       expect(res).toBe("38,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("38");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});