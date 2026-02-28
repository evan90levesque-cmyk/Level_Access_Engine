describe('String N/A: no node with a role attribute set to a text value that starts with "checkbox"', function() {
    it('node with a role attribute set to a text value that starts with "checkbox" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("505");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("505");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("505");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: node with a role attribute set to a text value that starts with "checkbox" that is not available to assistive technologies', function() {
    it('node with a role attribute set to a text value that starts with "checkbox" that is not available to assistive technologies should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div aria-hidden='true'><span role='checkbox' src='test.gif' aria-labelledby='label1'></div>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("505");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("505");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("505");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: node with a role attribute set to a text value that starts with "checkbox" and an aria-labelledby attribute', function() {
    it('node with a role attribute set to a text value that starts with "checkbox" and an aria-labelledby attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='label1'>Label</span><span role='checkbox' src='test.gif' aria-labelledby='label1'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("505");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("505");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("505");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: node with a role attribute set to a text value that starts with "checkbox" and an aria-label attribute', function() {
    it('node with a role attribute set to a text value that starts with "checkbox" and an aria-label attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='checkbox' src='test.gif' aria-label='label1'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("505");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("505");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("505");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: node with a role attribute set to a text value that starts with "checkbox" and a title attribute', function() {
    it('node with a role attribute set to a text value that starts with "checkbox" and a title attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='checkbox' src='test.gif' title='label1'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("505");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("505");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("505");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: node with a role attribute set to a text value that starts with "checkbox" and inner text', function() {
    it('node with a role attribute set to a text value that starts with "checkbox" and a inner text should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='checkbox'>This is some text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("505");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("505");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("505");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: node with a role attribute set to a text value that starts with "checkbox" and without an aria-labelledby, aria-label or title attribute', function() {
    it('node with a role attribute set to a text value that starts with "checkbox" and without an aria-labelledby, aria-label or title attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='checkbox' src='test.gif'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("505");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("505");
       expect(res).toBe("505,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("505");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: node with a role attribute set to a text value that starts with "checkbox" and a label for pointing to it', function() {
    it('node with a role attribute set to a text value that starts with "checkbox" and a label for pointing to it should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<label for='bob'>another label</label><span id='bob' role='checkbox'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("505");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("505");
       expect(res).toBe("505,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("505");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});