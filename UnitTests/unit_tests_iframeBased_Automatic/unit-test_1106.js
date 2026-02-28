describe('String N/A: no img nodes', function() {
    it('no img nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1106");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1106");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1106");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: li node with role="presentation" and aria-hidden="true"', function() {
    it('li node with role="presentation", aria-hidden="true" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<li role='presentation' aria-hidden='true'>test</li>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1106");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1106");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1106");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: li node with role="presentation", aria-labelledby="foo" and aria-hidden="true"', function() {
    it('li node with role="presentation", aria-labelledby="foo" and aria-hidden="true" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<li role='presentation' aria-labelledby='foo' aria-hidden='true'>test</li><div id='foo'>description</div>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1106");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1106");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1106");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: li node with role="presentation", aria-labelledby="foo" and display:none', function() {
    it('li node with role="presentation", aria-labelledby="foo" and display:none should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<li role='presentation' aria-labelledby='foo' style='display:none'>test</li><div id='foo'>description</div>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1106");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1106");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1106");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: li node with role="none" and aria-hidden="true"', function() {
    it('li node with role="none", aria-hidden="true" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<li role='none' aria-hidden='true'>test</li>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1106");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1106");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1106");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: li node with role="none", aria-labelledby="foo" and aria-hidden="true"', function() {
    it('li node with role="none", aria-labelledby="foo" and aria-hidden="true" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<li role='none' aria-labelledby='foo' aria-hidden='true'>test</li><div id='foo'>description</div>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1106");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1106");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1106");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: li node with role="none", aria-labelledby="foo" and display:none', function() {
    it('li node with role="none", aria-labelledby="foo" and display:none should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<li role='none' aria-labelledby='foo' style='display:none'>test</li><div id='foo'>description</div>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1106");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1106");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1106");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: li node with role="bar", aria-labelledby="foo"', function() {
    it('li node with role="bar", aria-labelledby="foo" and display:none should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<li role='bar' aria-labelledby='foo'>test</li><div id='foo'>description</div>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1106");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1106");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1106");
       expect(res).toBe(null);
       // </variant3>
    });
});


describe('String Pass: li node with role="presentation"', function() {
    it('li node with role="presentation" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<li role='presentation'>test</li>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1106");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1106");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1106");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: li node with role="none"', function() {
    it('li node with role="none" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<li role='none'>test</li>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1106");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1106");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1106");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: li node with role="presentation" and an aria-labelledby="foo"', function() {
    it('li node with role="presentation" and an aria-labelledby="foo" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<li role='presentation' aria-labelledby='foo'>test</li><div id='foo'>description</div>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1106");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1106");
       expect(res).toBe("1106,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1106");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: li node with role="presentation" and an aria-labelledby=""', function() {
    it('li node with role="presentation" and an aria-labelledby="" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<li role='presentation' aria-labelledby=''>test</li><div id='foo'>description</div>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1106");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1106");
       expect(res).toBe("1106,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1106");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: li node with role="none" and an aria-labelledby="foo"', function() {
    it('li node with role="none" and an aria-labelledby="foo" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<li role='none' aria-labelledby='foo'>test</li><div id='foo'>description</div>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1106");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1106");
       expect(res).toBe("1106,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1106");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: li node with role="none" and an aria-labelledby=""', function() {
    it('li node with role="none" and an aria-labelledby="" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<li role='none' aria-labelledby=''>test</li><div id='foo'>description</div>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1106");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1106");
       expect(res).toBe("1106,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1106");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});
