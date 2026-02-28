describe('String N/A: no a nodes', function() {
    it('no a nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1097");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1097");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1097");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a node with href="test.html" and a style set to display:none', function() {
    it('a node with href="test.html" and a style set to display:none should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='test.html' style='display:none'>foo</a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1097");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1097");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1097");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a node with an empty href', function() {
    it('a node with an empty href should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href=''>foo</a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1097");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1097");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1097");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a node with an empty href and role="presentation"', function() {
    it('a node with an empty href and role="presentation" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='' role='presentation'>foo</a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1097");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1097");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1097");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a node with an href="test.html"', function() {
    it('a node with an href="test.html" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='test.html'>foo</a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1097");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1097");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1097");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a node with an href="test.html" and role="none"', function() {
    it('a node with an href="test.html" and role="none" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='test.html' role='none'>foo</a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1097");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1097");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1097");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: a node with href="test.html" and role="presentation"', function() {
    it('a node with href="test.html" and role="presentation" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='test.html' role='presentation'>foo</a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1097");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1097");
       expect(res).toBe("1097,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1097");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});


describe('String Fail: a node with href="test.html", aria-hidden="true" and role="presentation"', function() {
    it('a node with href="test.html", aria-hidden="true" and role="presentation" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='test.html' aria-hidden='true' role='presentation'>foo</a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1097");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1097");
       expect(res).toBe("1097,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1097");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a node with href="test.html", tabindex="-1" and role="presentation"', function() {
    it('a node with href="test.html", tabindex="-1" and role="presentation" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='test.html' tabindex='-1' role='presentation'>foo</a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("1097");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1097");
       expect(res).toBe("1097,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("1097");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});
