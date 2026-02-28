describe('String N/A: no area nodes', function() {
    it('no area nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("230");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("230");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("230");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: area node with a role set to a text value that starts with presentation', function() {
    it('area node with a role set to a text value that starts with presentation should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<area href='#' role='presentation'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("230");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("230");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("230");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: area node with an aria-labelledby attribute', function() {
    it('area node with an aria-labelledby attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='label1'>Label</span><area href='#' aria-labelledby='label1'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("230");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("230");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("230");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: area node with an aria-label attribute', function() {
    it('area node with an aria-label attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<area href='#' aria-label='label1'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("230");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("230");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("230");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: area node with an alt attribute', function() {
    it('area node with an alt attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<area href='#' alt='label1'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("230");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("230");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("230");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: area node with a title attribute', function() {
    it('area node with a title attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<area href='#' title='label1'></area>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("230");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("230");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("230");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: area node without an aria-labelledby, aria-label, alt or title attribute', function() {
    it('area node without an aria-labelledby, aria-label, alt or title attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<area href='#'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("230");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("230");
       expect(res).toBe("230,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("230");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: area node with an aria-labelledby attribute set to a null value', function() {
    it('area node with an aria-labelledby attribute set to a null value should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<area href='#' aria-labelledby=''>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("230");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("230");
       expect(res).toBe("230,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("230");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

// Deque 

describe('Deque Pass: area node with an alt attribute', function() {
    it('area node with an alt attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<map><area href="#" id="pass1" alt="monkeys"></map>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("230");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("230");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("230");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('Deque Pass: area node with an aria-label attribute', function() {
    it('area node with an aria-label attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<map><area href="#" id="pass2" aria-label="monkeys"></map>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("230");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("230");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("230");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('Deque Pass: area node with an aria-labelledby attribute', function() {
    it('area node with an aria-labelledby attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div id="monkeys">Bananas</div><map><area href="#" id="pass3" aria-labelledby="monkeys"></map>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("230");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("230");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("230");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: area node with an href attribute with a null alt attribute', function() {
    it('area node with an href attribute with a null alt attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<map><area href="#" id="violation1" alt=""></map>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("230");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("230");
       expect(res).toBe("230,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("230");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: area node with an href attribute with a null aria-label attribute', function() {
    it('area node with an href attribute with a null aria-label attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<map><area href="#" id="violation2" aria-label=""></map>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("230");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("230");
       expect(res).toBe("230,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("230");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: area node with an href attribute with an invalid aria-labelledby attribute', function() {
    it('area node with an href attribute with an invalid aria-labelledby attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<map><area href="#" id="violation4" aria-labelledby=""></map>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("230");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("230");
       expect(res).toBe("230,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("230");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: area node with an href attribute with a null aria-labelledby attribute', function() {
    it('area node with an href attribute with a null aria-labelledby attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<map><area href="#" id="violation3" aria-labelledby="nomatchy"></map>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("230");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("230");
       expect(res).toBe("230,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("230");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: area node with a null alt attribute', function() {
    it('area node with a null alt attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<map><area alt=""></map>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("230");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("230");
       expect(res).toBe("230,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("230");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: area node with a null aria-label attribute', function() {
    it('area node with a null aria-label attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<map><area aria-label=""></map>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("230");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("230");
       expect(res).toBe("230,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("230");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: area node with an invalid aria-labelledby attribute', function() {
    it('area node with an invalid aria-labelledby attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<map><area aria-labelledby=""></map>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("230");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("230");
       expect(res).toBe("230,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("230");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String N/A: area node inside button or meter elements', function() {
    const testCases = [
        { element: "button", snippet: "<button><map><area shape='rect' coords='0,0,100,100' href='#'></area></map></button>" },
        { element: "meter", snippet: "<meter><map><area shape='rect' coords='0,0,100,100' href='#'></area></map></meter>" }
    ];

    for (const { element, snippet } of testCases) {
        it(`area node inside ${element} element should be equal to na`, function() {
            document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
            document.querySelector("#testing").contentWindow.document.body.innerHTML = snippet;
            LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
            var res = LevelAccess_AccessEngine.runTest_returnOutcome("230");
            expect(res).toBe('na');
            res = LevelAccess_AccessEngine.runTest_returnNumbers("230");
            expect(res).toBe("");
            res = LevelAccess_AccessEngine.runTest_returnInstances("230");
            expect(res).toBe(null);
        });
    }
});

describe('String N/A: area node inside element with role specified as exclusion', function() {
    const testCases = [
        { role: "button", snippet: "<div role='button'><map><area shape='rect' coords='0,0,100,100' href='#'></area></map></div>" },
        { role: "checkbox", snippet: "<div role='checkbox'><map><area shape='rect' coords='0,0,100,100' href='#'></area></map></div>" },
        { role: "img", snippet: "<div role='img'><map><area shape='rect' coords='0,0,100,100' href='#'></area></map></div>" },
        { role: "menuitemcheckbox", snippet: "<div role='menuitemcheckbox'><map><area shape='rect' coords='0,0,100,100' href='#'></area></map></div>" },
        { role: "menuitemradio", snippet: "<div role='menuitemradio'><map><area shape='rect' coords='0,0,100,100' href='#'></area></map></div>" },
        { role: "meter", snippet: "<div role='meter'><map><area shape='rect' coords='0,0,100,100' href='#'></area></map></div>" },
        { role: "option", snippet: "<div role='option'><map><area shape='rect' coords='0,0,100,100' href='#'></area></map></div>" },
        { role: "progressbar", snippet: "<div role='progressbar'><map><area shape='rect' coords='0,0,100,100' href='#'></area></map></div>" },
        { role: "radio", snippet: "<div role='radio'><map><area shape='rect' coords='0,0,100,100' href='#'></area></map></div>" },
        { role: "separator", snippet: "<div role='separator'><map><area shape='rect' coords='0,0,100,100' href='#'></area></map></div>" },
        { role: "scrollbar", snippet: "<div role='scrollbar'><map><area shape='rect' coords='0,0,100,100' href='#'></area></map></div>" },
        { role: "slider", snippet: "<div role='slider'><map><area shape='rect' coords='0,0,100,100' href='#'></area></map></div>" },
        { role: "switch", snippet: "<div role='switch'><map><area shape='rect' coords='0,0,100,100' href='#'></area></map></div>" },
        { role: "tab", snippet: "<div role='tab'><map><area shape='rect' coords='0,0,100,100' href='#'></area></map></div>" }
    ];

    for (const { role, snippet } of testCases) {
        it(`area node inside element with role="${role}" should be equal to na`, function() {
            document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
            document.querySelector("#testing").contentWindow.document.body.innerHTML = snippet;
            LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
            var res = LevelAccess_AccessEngine.runTest_returnOutcome("230");
            expect(res).toBe('na');
            res = LevelAccess_AccessEngine.runTest_returnNumbers("230");
            expect(res).toBe("");
            res = LevelAccess_AccessEngine.runTest_returnInstances("230");
            expect(res).toBe(null);
        });
    }
});

describe('String Fail: area node with a null aria-labelledby attribute', function() {
    it('area node with a null aria-labelledby attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<map><area aria-labelledby="nomatchy"></map>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("230");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("230");
       expect(res).toBe("230,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("230");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});