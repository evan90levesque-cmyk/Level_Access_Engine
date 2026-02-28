describe('String N/A: no canvas nodes', function() {
    it('no canvas nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("253");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("253");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("253");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: canvas node with style set to a "display:none" text value', function() {
    it('canvas node with style set to a "display:none" text value should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<canvas controls src='#' style='display:none'></canvas>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("253");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("253");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("253");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: canvas node with a role set to a text value that starts with presentation', function() {
    it('canvas node with a role set to a text value that starts with presentation should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<canvas controls src='#' role='presentation'></canvas>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("253");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("253");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("253");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: canvas node with an aria-labelledby attribute', function() {
    it('canvas node with an aria-labelledby attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='label1'>Label</span><canvas controls src='#' aria-labelledby='label1'></canvas>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("253");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("253");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("253");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: canvas node with an aria-label attribute', function() {
    it('canvas node with an aria-label attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<canvas controls src='#' aria-label='label1'></canvas>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("253");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("253");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("253");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: canvas node with a title attribute', function() {
    it('canvas node with a title attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<canvas controls src='#' title='label1'></canvas>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("253");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("253");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("253");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: canvas node inside button or meter elements', function() {
    const testCases = [
        { element: "button", snippet: "<button><canvas controls src='#'></canvas></button>" },
        { element: "meter", snippet: "<meter><canvas controls src='#'></canvas></meter>" }
    ];

    for (const { element, snippet } of testCases) {
        it(`canvas node inside ${element} element should be equal to na`, function() {
            document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
            document.querySelector("#testing").contentWindow.document.body.innerHTML = snippet;
            LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
            // <variant1>
            var res = LevelAccess_AccessEngine.runTest_returnOutcome("253");
            expect(res).toBe('na');
            // </variant1>
            // <variant2>
            res = LevelAccess_AccessEngine.runTest_returnNumbers("253");
            expect(res).toBe("");
            // </variant2>
            // <variant3>
            res = LevelAccess_AccessEngine.runTest_returnInstances("253");
            expect(res).toBe(null);
            // </variant3>
        });
    }
});

describe('String N/A: canvas node inside element with role role specified as exclusion', function() {
    const testCases = [
        { role: "button", snippet: "<div role='button'><canvas controls src='#'></canvas></div>" },
        { role: "checkbox", snippet: "<div role='checkbox'><canvas controls src='#'></canvas></div>" },
        { role: "img", snippet: "<div role='img'><canvas controls src='#'></canvas></div>" },
        { role: "menuitemcheckbox", snippet: "<div role='menuitemcheckbox'><canvas controls src='#'></canvas></div>" },
        { role: "menuitemradio", snippet: "<div role='menuitemradio'><canvas controls src='#'></canvas></div>" },
        { role: "meter", snippet: "<div role='meter'><canvas controls src='#'></canvas></div>" },
        { role: "option", snippet: "<div role='option'><canvas controls src='#'></canvas></div>" },
        { role: "progressbar", snippet: "<div role='progressbar'><canvas controls src='#'></canvas></div>" },
        { role: "radio", snippet: "<div role='radio'><canvas controls src='#'></canvas></div>" },
        { role: "separator", snippet: "<div role='separator'><canvas controls src='#'></canvas></div>" },
        { role: "scrollbar", snippet: "<div role='scrollbar'><canvas controls src='#'></canvas></div>" },
        { role: "slider", snippet: "<div role='slider'><canvas controls src='#'></canvas></div>" },
        { role: "switch", snippet: "<div role='switch'><canvas controls src='#'></canvas></div>" },
        { role: "tab", snippet: "<div role='tab'><canvas controls src='#'></canvas></div>" },
    ];

    for (const { role, snippet } of testCases) {
        it(`canvas node inside element with role="${role}" should be equal to na`, function() {
            document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
            document.querySelector("#testing").contentWindow.document.body.innerHTML = snippet;
            LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
            // <variant1>
            var res = LevelAccess_AccessEngine.runTest_returnOutcome("253");
            expect(res).toBe('na');
            // </variant1>
            // <variant2>
            res = LevelAccess_AccessEngine.runTest_returnNumbers("253");
            expect(res).toBe("");
            // </variant2>
            // <variant3>
            res = LevelAccess_AccessEngine.runTest_returnInstances("253");
            expect(res).toBe(null);
            // </variant3>
         });
    }
});

describe('String Fail: canvas node without an aria-labelledby, aria-label, text in its body or title attribute', function() {
    it('canvas node without an aria-labelledby, aria-label, text in its body or title attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<canvas controls src='#'></canvas>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("253");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("253");
       expect(res).toBe("253,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("253");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});