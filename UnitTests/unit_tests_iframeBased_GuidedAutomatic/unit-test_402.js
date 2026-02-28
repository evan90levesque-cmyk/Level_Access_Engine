describe('String N/A: the body node contains no heading nodes', function () {
    it('the body node contains an h1 node which contains text should be equal to na', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('na');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String Pass: the body node contains a single h1 heading in an article node', function () {
    it('the body node contains a single h1 heading in an article node should be equal to na', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<article><h1>Level 1 Heading</h1></article>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('pass');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String N/A: h1 node that is not available in the DOM', function () {
    it('h1 node that is not available in the DOM should be equal to na', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h1 style='display:none'>Level 1 Heading</h1>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('na');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String N/A: h2 node that is not available in the DOM', function () {
    it('h2 node that is not available in the DOM should be equal to na', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h2 style='display:none'>Level 2 Heading</h2>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('na');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String N/A: h3 node that is not available in the DOM', function () {
    it('h3 node that is not available in the DOM should be equal to na', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h3 style='display:none'>Level 3 Heading</h3>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('na');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String N/A: h4 node that is not available in the DOM', function () {
    it('h4 node that is not available in the DOM should be equal to na', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h4 style='display:none'>Level 4 Heading</h4>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('na');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String N/A: h5 node that is not available in the DOM', function () {
    it('h5 node that is not available in the DOM should be equal to na', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h5 style='display:none'>Level 5 Heading</h5>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('na');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String N/A: h6 node that is not available in the DOM', function () {
    it('h6 node that is not available in the DOM should be equal to na', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h6 style='display:none'>Level 6 Heading</h6>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('na');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String N/A: node with a role set to "heading" and an aria-level attribute set to "1" that is not available in the DOM', function () {
    it('node with a role set to "heading" and an aria-level attribute set to "1" that is not available in the DOM should be equal to na', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='heading' aria-level='1' style='display:none'>Level 1 Heading</span>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('na');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String N/A: node with a role set to "heading" and an aria-level attribute set to "2" that is not available in the DOM', function () {
    it('node with a role set to "heading" and an aria-level attribute set to "2" that is not available in the DOM should be equal to na', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='heading' aria-level='2' style='display:none'>Level 2 Heading</span>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('na');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String N/A: node with a role set to "heading" and an aria-level attribute set to "3" that is not available in the DOM', function () {
    it('node with a role set to "heading" and an aria-level attribute set to "3" that is not available in the DOM should be equal to na', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='heading' aria-level='3' style='display:none'>Level 3 Heading</span>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('na');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String N/A: node with a role set to "heading" and an aria-level attribute set to "4" that is not available in the DOM', function () {
    it('node with a role set to "heading" and an aria-level attribute set to "4" that is not available in the DOM should be equal to na', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='heading' aria-level='4' style='display:none'>Level 4 Heading</span>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('na');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String N/A: node with a role set to "heading" and an aria-level attribute set to "5" that is not available in the DOM', function () {
    it('node with a role set to "heading" and an aria-level attribute set to "5" that is not available in the DOM should be equal to na', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='heading' aria-level='5' style='display:none'>Level 5 Heading</span>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('na');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String N/A: node with a role set to "heading" and an aria-level attribute set to "6" that is not available in the DOM', function () {
    it('node with a role set to "heading" and an aria-level attribute set to "6" that is not available in the DOM should be equal to na', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='heading' aria-level='6' style='display:none'>Level 6 Heading</span>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('na');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String N/A: h1 node that has a role attribute set to a text value that starts with "presentation"', function () {
    it('h1 node that has a role attribute set to a text value that starts with "presentation" should be equal to na', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h1 role='presentation'>Level 1 Heading</h1>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('na');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String N/A: h2 node that has a role attribute set to a text value that starts with "presentation"', function () {
    it('h2 node that has a role attribute set to a text value that starts with "presentation" should be equal to na', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h2 role='presentation'>Level 2 Heading</h2>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('na');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String N/A: h3 node that has a role attribute set to a text value that starts with "presentation"', function () {
    it('h3 node that has a role attribute set to a text value that starts with "presentation" should be equal to na', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h3 role='presentation'>Level 3 Heading</h3>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('na');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String N/A: h4 node that has a role attribute set to a text value that starts with "presentation"', function () {
    it('h4 node that has a role attribute set to a text value that starts with "presentation" should be equal to na', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h4 role='presentation'>Level 4 Heading</h4>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('na');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String N/A: h5 node that has a role attribute set to a text value that starts with "presentation"', function () {
    it('h5 node that has a role attribute set to a text value that starts with "presentation" should be equal to na', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h5 role='presentation'>Level 5 Heading</h5>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('na');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String N/A: h6 node that has a role attribute set to a text value that starts with "presentation"', function () {
    it('h6 node that has a role attribute set to a text value that starts with "presentation" should be equal to na', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h6 role='presentation'>Level 6 Heading</h6>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('na');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String Pass: the body node contains an h1 node which contains text', function () {
    it('the body node contains an h1 node which contains text should be equal to pass', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h1>Level 1 Heading</h1>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('pass');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res).toBe(null);
        // </variant3>
    });

    it('the body node contains an h1 node which contains text should be equal to pass using node capture', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h1>Level 1 Heading</h1>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        const results = JSON.parse(LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON_NodeCapture(document.querySelector("#testing").contentWindow.document.body.firstChild));
        const relevantResults = results.filter(result => result.engineTestId === 402);
        expect(relevantResults.length).toBe(0);
    });
});

describe('String Pass: the body node contains an h1 node which contains text; then an h2 node that contains text', function () {
    it('the body node contains an h1 node which contains text; then an h2 node that contains text should be equal to pass', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h1>Level 1 Heading</h1><h2>Level 2 Heading</h2>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('pass');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String Pass: the body node contains an h1 node which contains text; then an h2 node that contains text; then an h2 node that contains text; then an h3 node that contains text', function () {
    it('the body node contains an h1 node which contains text; then an h2 node that contains text should be equal to pass', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h1>Level 1 Heading</h1><h2>Level 2 Heading</h2><h2>Level 2 Heading</h2><h3>Level 3 Heading</h3>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('pass');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String Pass: the body node contains an h1 node which contains text; then an h2 node that contains text; then an h2 node that contains text; then an h3 node that contains text; then an h2 node that contains text', function () {
    it('the body node contains an h1 node which contains text; then an h2 node that contains text should be equal to pass', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h1>Level 1 Heading</h1><h2>Level 2 Heading</h2><h2>Level 2 Heading</h2><h3>Level 3 Heading</h3><h2>Level 2 Heading</h2>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('pass');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String Pass: the body node contains a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "1" which contains text', function () {
    it('the body node contains a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "1" which contains text should be equal to pass', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='heading' aria-level='1'>Level 1 Heading</span>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('pass');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String Pass: the body node contains a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "1" which contains text; then a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "2" which contains text', function () {
    it('the body node contains a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "1" which contains text; then a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "2" which contains text should be equal to pass', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='heading' aria-level='1'>Level 1 Heading</span><span role='heading' aria-level='2'>Level 2 Heading</span>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('pass');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String Pass: the body node contains a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "1" which contains text; then a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "2" which contains text; then a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "2" which contains text; then a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "3" which contains text', function () {
    it('the body node contains a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "1" which contains text; then a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "2" which contains text; then a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "2" which contains text; then a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "3" which contains text should be equal to pass', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='heading' aria-level='1'>Level 1 Heading</span><span role='heading' aria-level='2'>Level 2 Heading</span><span role='heading' aria-level='2'>Level 2 Heading</span><span role='heading' aria-level='3'>Level 3 Heading</span>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('pass');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String Pass: the body node contains a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "1" which contains text; then a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "2" which contains text; then a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "2" which contains text; then a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "3" which contains text; then a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "2" which contains text', function () {
    it('the body node contains a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "1" which contains text; then a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "2" which contains text; then a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "2" which contains text; then a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "3" which contains text; then a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "2" which contains text should be equal to pass', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='heading' aria-level='1'>Level 1 Heading</span><span role='heading' aria-level='2'>Level 2 Heading</span><span role='heading' aria-level='2'>Level 2 Heading</span><span role='heading' aria-level='3'>Level 3 Heading</span><span role='heading' aria-level='2'>Level 2 Heading</span>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('pass');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe('String Fail: the body node contains a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "1" which contains text; then a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "2" which contains text; then a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "2" which contains text; then a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "3" which contains text; then an article node that contains a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "1" which contains text', function () {
    it('the body node contains a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "1" which contains text; then a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "2" which contains text; then a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "2" which contains text; then a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "3" which contains text; then an article node that contains a node with a role attribute that has a text value that starts with "heading"; and an aria-level set to "1" which contains text should be equal to pass', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='heading' aria-level='1'>Level 1 Heading</span><span role='heading' aria-level='2'>Level 2 Heading</span><span role='heading' aria-level='2'>Level 2 Heading</span><span role='heading' aria-level='3'>Level 3 Heading</span><article><span role='heading' aria-level='1'>Level 1 Heading</span></article>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('fail');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("402,1");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res.instances.length).toBe(1);
        // </variant3>
    });
});

describe('String Fail: body node contains h1 node followed by a article element contains h3 node', function () {
    it('body node contains h1 node followed by a article element contains h4 node should be equal to fail', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h1>Level 1 Heading</h1><article><h3>Level 3 Heading</h3></article>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('fail');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("402,1");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res.instances.length).toBe(1);
        // </variant3>
    });
});

describe('String Fail: no h1 node in the body node; and an h2 in the body node', function () {
    it('no h1 node in the body node; and an h2 in the body node should be equal to fail', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h2>Level 2 Heading</h2>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('fail');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("402,1");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res.instances.length).toBe(1);
        // </variant3>
    });

    it('no h1 node in the body node; and an h2 in the body node should be equal to fail using node capture', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h2>Level 2 Heading</h2>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        const results = JSON.parse(LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON_NodeCapture(document.querySelector("#testing").contentWindow.document.body.firstChild));
        const relevantResults = results.filter(result => result.engineTestId === 402);
        expect(relevantResults.length).toBe(1);
    });
});

describe('String Fail: h1 node in the body node; and an h3 in the body node', function () {
    it('h1 node in the body node; and an h3 in the body node should be equal to fail', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h1>Level 1 Heading</h1><h3>Level 3 Heading</h3>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('fail');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("402,1");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res.instances.length).toBe(1);
        // </variant3>
    });
});

describe('String Fail: h2 node in the body node; and an h4 in the body node', function () {
    it('h2 node in the body node; and an h4 in the body node should be equal to fail', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h2>Level 2 Heading</h2><h4>Level 4 Heading</h4>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('fail');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("402,2");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res.instances.length).toBe(2);
        // </variant3>
    });
});

describe('String Fail: h1, h2, h2, h4, h5 node in the body node', function () {
    it('h1, h2, h2, h4, h5 node in the body node should be equal to fail', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h1>Level 1 Heading</h1><h2>Level 2 Heading</h2><h2>Level 2 Heading</h2><h4>Level 4 Heading</h4><h5>Level 5 Heading</h5>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('fail');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("402,1");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res.instances.length).toBe(1);
        // </variant3>
    });
});

describe('String Fail: h1, h2, h2, h4, h1, h5 node in the body node', function () {
    it('h1, h2, h2, h4, h1, h5 node in the body node should be equal to fail', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h1>Level 1 Heading</h1><h2>Level 2 Heading</h2><h2>Level 2 Heading</h2><h4>Level 4 Heading</h4><h1>Level 1 Heading</h1><h5>Level 5 Heading</h5>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('fail');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("402,3");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res.instances.length).toBe(3);
        // </variant3>
    });
});

describe('String Fail: h1, h1 node in the body node', function () {
    it('h1, h1 node in the body node should be equal to fail', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h1>Level 1 Heading</h1><h1>Level 1 Heading</h1>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('fail');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("402,1");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res.instances.length).toBe(1);
        // </variant3>
    });
});

describe('String N/A: headings inside modals', function () {
    it('h2 inside <dialog open> should be na', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<dialog open><h2>Heading in dialog</h2></dialog>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('na');
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("");
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res).toBe(null);
    });

    it('h2 inside [role="dialog"][aria-modal="true"] should be na', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div role='dialog' aria-modal='true'><h2>Heading in ARIA dialog</h2></div>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('na');
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("");
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res).toBe(null);
    });

    it('h2 inside [role="alertdialog"][aria-modal="true"] should be na', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div role='alertdialog' aria-modal='true'><h2>Heading in ARIA alertdialog</h2></div>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('na');
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("");
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res).toBe(null);
    });
});

describe('String Fail: headings outside modals', function () {
    it('h2 outside modal should be fail if no h1', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h2>Heading outside modal</h2><dialog open><h3>Heading in dialog</h3></dialog>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('fail');
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("402,1");
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res.instances.length).toBe(1);
    });
});

describe('String Pass: headings outside and inside modals', function () {
    it('h1 outside modal, h1 inside modal: should be pass', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h1>Heading outside modal</h1><dialog open><h1>Heading in dialog</h1></dialog>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('pass');
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("");
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res).toBe(null);
    });
    it('h1 outside modal, h3 inside modal: should be pass', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h1>Heading outside modal</h1><dialog open><h3>Heading in dialog</h3></dialog>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('pass');
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("");
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res).toBe(null);
    });

    it('h1 and h2 outside modal, h4 inside [role="dialog"][aria-modal="true"]: should be pass', function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h1>Heading 1</h1><h2>Heading 2</h2><div role='dialog' aria-modal='true'><h4>Heading in ARIA dialog</h4></div>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        let res = LevelAccess_AccessEngine.runTest_returnOutcome("402");
        expect(res).toBe('pass');
        res = LevelAccess_AccessEngine.runTest_returnNumbers("402");
        expect(res).toBe("");
        res = LevelAccess_AccessEngine.runTest_returnInstances("402");
        expect(res).toBe(null);
    });
});
