describe('String N/A: no input nodes', function() {
    it('no input nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("716");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("716");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("716");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: an input with a type="radio" attribute and a role="presentation" attribute', function() {
    it('an input with a type="radio" attribute and a role="presentation" attribute should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='radio' role='presentation'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("716");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("716");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("716");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: an input with a type="radio" attribute and a style attribute set to "display:none;"', function() {
    it('an input with a type="radio" attribute and a style attribute set to "display:none;" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='radio' style='display:none;'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("716");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("716");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("716");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: an input with a type="radio" attribute that lacks an accessible name', function() {
    it('an input with a type="radio" attribute that lacks an accessible name should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='radio'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("716");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("716");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("716");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: an input with a type="radio" attribute that has an accessible name (explicit label)', function() {
    it('an input with a type="radio" attribute that has an accessible name (explicit label) should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<label for='test'>test</label><input type='radio' id='test'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("716");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("716");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("716");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: an input with a type="radio" attribute that has an accessible name (implicit label)', function() {
    it('an input with a type="radio" attribute that has an accessible name (implicit label) should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<label>test<input type='radio' id='test'></label>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("716");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("716");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("716");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: an input with a type="radio" attribute and an aria-labelledby attribute that is more than 3 characters', function() {
    it('an input with a type="radio" attribute and an aria-labelledby attribute that is more than 3 characters should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='label1'>test</span><input type='radio' aria-labelledby='label1'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("716");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("716");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("716");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: an input with a type="radio" attribute and an aria-label attribute that is more than 3 characters', function() {
    it('an input with a type="radio" attribute and an aria-label attribute that is more than 3 characters should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='radio' aria-label='test'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("716");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("716");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("716");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: an input with a type="radio" attribute and a title attribute that is more than 3 characters', function() {
    it('an input with a type="radio" attribute and a title attribute that is more than 3 characters should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='radio' title='test'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("716");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("716");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("716");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: an input with a type="radio" attribute and an accessible name that is less than 4 characters', function() {
    it('an input with a type="radio" attribute and an accessible name that is less than 4 characters should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='radio' aria-label='go'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("716");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("716");
       expect(res).toBe("716,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("716");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});