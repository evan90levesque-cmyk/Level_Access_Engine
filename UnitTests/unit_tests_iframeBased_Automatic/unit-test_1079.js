describe('String N/A: no nodes with a role attribute set to the value "option"', function() {
    it('no nodes with a role attribute set to the value "option" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("1079");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1079");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1079");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a span node with a role attribute set to a null value', function() {
    it('a span node with a role attribute set to a null value should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role=''></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("1079");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1079");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1079");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a span node with a role attribute value that starts with the text "presentation"', function() {
    it('a span node with a value that starts with the text "presentation" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='presentation'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("1079");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1079");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1079");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a span node with a role attribute set to "option" that is not available in the DOM', function() {
    it('a span node with a role attribute set to "option" that is not available in the DOM should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span style='display:none;' role='option'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("1079");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1079");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1079");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: an option node with a role attribute set to "option" that is available in the DOM', function() {
    it('an option node with a role attribute set to "option" that is available in the DOM should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<option role='option'></option>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("1079");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1079");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1079");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: an option node with a role attribute set to "option" and an aria-checked attribute that is available in the DOM', function() {
    it('an option node with a role attribute set to "option" and an aria-checked attribute that is available in the DOM should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<option role='option' aria-checked='true'></option>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("1079");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1079");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1079");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a li node with a role attribute set to "option" and an aria-checked attribute that is available in the DOM', function() {
    it('a li node with a role attribute set to "option" and an aria-checked attribute that is available in the DOM should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<li role='option' aria-checked='true'></li>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("1079");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1079");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1079");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a span node with a role attribute set to "option", that is available in the DOM, and an aria-checked attribute', function() {
    it('a span node with a role attribute set to "option", that is available in the DOM, and an aria-checked attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='option' aria-checked='true'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("1079");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1079");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1079");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: a li node with a role attribute set to "option", that is available in the DOM, and no aria-checked attribute', function() {
    it('a li node with a role attribute set to "option", that is available in the DOM, and no aria-checked attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<li role='option'></li>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("1079");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1079");
       expect(res).toBe("1079,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1079");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a span node with a role attribute set to "option", that is available in the DOM, and no aria-checked attribute', function() {
    it('a span node with a role attribute set to "option", that is available in the DOM, and no aria-checked attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='option'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("1079");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1079");
       expect(res).toBe("1079,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1079");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});