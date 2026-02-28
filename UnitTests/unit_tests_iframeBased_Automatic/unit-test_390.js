describe('String N/A: no th nodes', function() {
    it('no th nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("390");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("390");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("390");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: th element with a colspan attribute set to "2" not visible in the displayed content', function() {
    it('th element with a colspan attribute set to "2" not visible in the displayed content should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th colspan='2' style='display:none'>Hello</th></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("390");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("390");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("390");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: th element with a colspan attribute set to "2" not available to assistive technology', function() {
    it('th element with a colspan attribute set to "2" not available to assistive technology should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th colspan='2' aria-hidden='true'>Hello</th><td aria-hidden='true'>Hello</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("390");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("390");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("390");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: th element with a colspan attribute set to "1"', function() {
    it('th element with a colspan attribute set to "1" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th colspan='1'>Hello</th><td>Hello</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("390");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("390");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("390");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: th element with a colspan attribute set to ""', function() {
    it('th element with a colspan attribute set to "" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th colspan=''>Hello</th><td>Hello</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("390");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("390");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("390");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: th element with a colspan attribute set to "2" and a scope attribute set to "colgroup"', function() {
    it('th element with a colspan attribute set to "2" and a scope attribute set to "colgroup" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th colspan='2' scope='colgroup'>Hello</th><td>Hello</td><td>Hello</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("390");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("390");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("390");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: th element with a colspan attribute set to "2" and an id attribute set to a non-null value', function() {
    it('th element with a colspan attribute set to "2" and an id attribute set to a non-null value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th colspan='2' id='hello'>Hello</th><td>Hello</td><td>Hello</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("390");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("390");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("390");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: th element with a colspan attribute set to "2" without a scope attribute set to "colgroup"; or an id set to a non-null value', function() {
    it('th element with a colspan attribute set to "2" without a scope attribute set to "colgroup"; or an id set to a non-null value should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th colspan='2'>Hello</th><td>Hello</td><td>Hello</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("390");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("390");
       expect(res).toBe("390,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("390");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: th element with a colspan attribute set to "2" with a scope attribute set to ""; and no id attribute', function() {
    it('th element with a colspan attribute set to "2" with a scope attribute set to ""; and no id attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th colspan='2' scope=''>Hello</th><td>Hello</td><td>Hello</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("390");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("390");
       expect(res).toBe("390,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("390");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: th element with a colspan attribute set to "2" with an id attribute set to ""; and no scope attribute', function() {
    it('th element with a colspan attribute set to "2" with an id attribute set to ""; and no scope attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th colspan='2' id=''>Hello</th><td>Hello</td><td>Hello</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("390");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("390");
       expect(res).toBe("390,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("390");
       expect(res.instances.length).toBe(1);
       expect(res.instances[0].tagName).toBe("TH");
       // </variant3>
    });
});
