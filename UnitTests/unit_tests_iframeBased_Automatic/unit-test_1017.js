describe('String N/A: no node with a role attribute set to a text value that starts with "progressbar"', function() {
    it('node with a role attribute set to a text value that starts with "progressbar" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1017");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1017");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1017");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: node with a role attribute set to a text value that starts with "progressbar" that is not available to assistive technologies', function() {
    it('node with a role attribute set to a text value that starts with "progressbar" that is not available to assistive technologies should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div aria-hidden='true'><div role='progressbar' aria-valuenow='70' aria-valuemin='0' aria-valuemax='100' aria-labelledby='label1'></div></div>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1017");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1017");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1017");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: node with a role attribute set to a text value that starts with "progressbar" and an aria-labelledby attribute', function() {
    it('node with a role attribute set to a text value that starts with "progressbar" and an aria-labelledby attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='label1'>Label</span><div role='progressbar' aria-valuenow='70' aria-valuemin='0' aria-valuemax='100' aria-labelledby='label1'></div>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1017");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1017");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1017");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: node with a role attribute set to a text value that starts with "progressbar" and an aria-label attribute', function() {
    it('node with a role attribute set to a text value that starts with "progressbar" and an aria-label attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div role='progressbar' aria-valuenow='70' aria-valuemin='0' aria-valuemax='100' aria-label='label1'></div>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1017");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1017");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1017");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: node with a role attribute set to a text value that starts with "progressbar" and a title attribute', function() {
    it('node with a role attribute set to a text value that starts with "progressbar" and a title attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div role='progressbar' aria-valuenow='70' aria-valuemin='0' aria-valuemax='100' title='label1'></div>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1017");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1017");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1017");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: node with a role attribute set to a text value that starts with "progressbar" and inner text', function() {
    it('node with a role attribute set to a text value that starts with "progressbar" and inner text should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div role='progressbar' aria-valuenow='70' aria-valuemin='0' aria-valuemax='100'>This is some text</div>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1017");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1017");
       expect(res).toBe("1017,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1017");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: node with a role attribute set to a text value that starts with "progressbar" and without an aria-labelledby, aria-label, alt or title attribute', function() {
    it('node with a role attribute set to a text value that starts with "progressbar" and without an aria-labelledby, aria-label, alt or title attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div role='progressbar' aria-valuenow='70' aria-valuemin='0' aria-valuemax='100'></div>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1017");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1017");
       expect(res).toBe("1017,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1017");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});