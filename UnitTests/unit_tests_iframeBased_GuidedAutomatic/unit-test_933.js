describe('String N/A: no nodes', function() {
    it('no nodes should be equal to na', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("933");
        expect(res).toBe('na');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("933");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("933");
        expect(res).toBe(null);
        // </variant3>
    });
});

// Safari always uses 'display: inline' whether the dialog has an open attribute or not, so we treat this as a fail across all browsers given this is a GA test
describe('String Fail: an empty dialog node with an open attribute not visible in the displayed content', function() {
    it('an empty dialog node with an open attribute not visible in the displayed content should be equal to fail', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<dialog open style='display:none'></dialog>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("933");
        expect(res).toBe('fail');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("933");
        expect(res).toBe("933,1");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("933");
        expect(res.instances.length).toBe(1);
        // </variant3>
    });
});

describe('String N/A: an empty dialog node with an open attribute not available to assistive technology', function() {
    it('an empty dialog node with an open attribute not available to assistive technology should be equal to na', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<dialog open aria-hidden='true'></dialog>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("933");
        expect(res).toBe('na');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("933");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("933");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String N/A: an empty dialog node without an open attribute', function() {
    it('an empty dialog node without an open attribute should be equal to na', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<dialog></dialog>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("933");
        expect(res).toBe('na');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("933");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("933");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String N/A: an empty dialog node with an open attribute and a hidden attribute', function() {
    it('an empty dialog node with an open attribute and a hidden attribute should be equal to na', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<dialog open hidden></dialog>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("933");
        expect(res).toBe('na');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("933");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("933");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String Pass: a dialog node with an open attribute', function() {
    it('a dialog node with an open attribute should be equal to pass', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<dialog open>Hello</dialog>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("933");
        expect(res).toBe('pass');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("933");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("933");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String Fail: an empty dialog node with an open attribute', function() {
    it('an empty dialog node with an open attribute should be equal to fail', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<dialog open></dialog>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("933");
        expect(res).toBe('fail');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("933");
        expect(res).toBe("933,1");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("933");
        expect(res.instances.length).toBe(1);
        // </variant3>
    });
});