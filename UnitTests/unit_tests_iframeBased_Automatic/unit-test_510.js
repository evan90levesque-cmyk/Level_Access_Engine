describe('String N/A: no node with a role attribute set to a text value that starts with "combobox"', function() {
    it('node with a role attribute set to a text value that starts with "combobox" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("510");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("510");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("510");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: node with a role attribute set to a text value that starts with "combobox" that is not available to assistive technologies', function() {
    it('node with a role attribute set to a text value that starts with "combobox" that is not available to assistive technologies should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div aria-hidden='true'><span role='combobox' src='test.gif' aria-labelledby='label1'></div>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("510");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("510");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("510");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: node with a role attribute set to a text value that starts with "combobox" and an aria-labelledby attribute', function() {
    it('node with a role attribute set to a text value that starts with "combobox" and an aria-labelledby attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='label1'>Label</span><span role='combobox' src='test.gif' aria-labelledby='label1'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("510");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("510");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("510");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: node with a role attribute set to a text value that starts with "combobox" and an aria-label attribute', function() {
    it('node with a role attribute set to a text value that starts with "combobox" and an aria-label attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='combobox' src='test.gif' aria-label='label1'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("510");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("510");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("510");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: node with a role attribute set to a text value that starts with "combobox" and a title attribute', function() {
    it('node with a role attribute set to a text value that starts with "combobox" and a title attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='combobox' src='test.gif' title='label1'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("510");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("510");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("510");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: node with a role attribute set to a text value that starts with "combobox" and without an aria-labelledby, aria-label, alt or title attribute', function() {
    it('node with a role attribute set to a text value that starts with "combobox" and without an aria-labelledby, aria-label, alt or title attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='combobox' src='test.gif'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("510");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("510");
       expect(res).toBe("510,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("510");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});