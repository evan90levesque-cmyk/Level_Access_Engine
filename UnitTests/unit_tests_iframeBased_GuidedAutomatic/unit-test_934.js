describe('String N/A: no nodes', function() {
    it('no nodes should be equal to na', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("934");
        expect(res).toBe('na');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("934");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("934");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String N/A: an empty span node role="dialog" not visible in the displayed content', function() {
    it('an empty span node role="dialog" not visible in the displayed content should be equal to na', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='dialog' style='display:none'></span>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("934");
        expect(res).toBe('na');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("934");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("934");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String N/A: an empty span node role="dialog" not available to assistive technology', function() {
    it('an empty span node role="dialog" not available to assistive technology should be equal to na', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='dialog' aria-hidden='true'></span>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("934");
        expect(res).toBe('na');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("934");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("934");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String N/A: an empty span node role="dialog" with a hidden attribute', function() {
    it('an empty span node role="dialog" with a hidden attribute should be equal to na', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='dialog' hidden></span>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("934");
        expect(res).toBe('na');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("934");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("934");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String Pass: a span node role="dialog" with an open attribute', function() {
    it('a span node role="dialog" with an open attribute should be equal to pass', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='dialog'>Hello</span>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("934");
        expect(res).toBe('pass');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("934");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("934");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String Fail: an empty span node role="dialog"', function() {
    it('an empty span node role="dialog" should be equal to fail', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='dialog'></span>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("934");
        expect(res).toBe('fail');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("934");
        expect(res).toBe("934,1");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("934");
        expect(res.instances.length).toBe(1);
        // </variant3>
    });
});