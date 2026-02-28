describe(`String N/A (main page): page with empty head and body`, function () {
    it(`page with empty head and body should be equal to na`, function () {
        document.head.innerHTML = "";
        document.body.innerHTML = "";
        LevelAccess_AccessEngine.setWindowUnderTest(window);

        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("1376");
        expect(res).toBe("na");
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("1376");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("1376");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe(`String Fail (iframe): page with empty head and body`, function () {
    it(`page with empty head and body should be equal to fail`, function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("1376");
        expect(res).toBe("fail");
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("1376");
        expect(res).toBe("1376,1");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("1376");
        expect(res.instances.length).toBe(1);
        // </variant3>
    });
});

describe(`String N/A (main page): page has a title with content`, function () {
    it(`page has a title with content should be equal to na`, function () {
        document.documentElement.innerHTML = "<title>This page has a title</title>";
        LevelAccess_AccessEngine.setWindowUnderTest(window);

        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("1376");
        expect(res).toBe("na");
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("1376");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("1376");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe(`String Pass (iframe): page has a title with content`, function () {
    it(`page has a title with content should be equal to pass`, function () {
        document.querySelector("#testing").contentWindow.document.documentElement.innerHTML = "<title>This page has a title</title>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("1376");
        expect(res).toBe("pass");
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("1376");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("1376");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe(`String N/A (main page): page title element is for the entire page, including content in the iframe without its own title`, function () {
    it(`page title element is for the entire page, including content in the iframe without its own title should be equal to na`, function () {
        document.documentElement.innerHTML = 
        `
            <title>This page gives a title to an iframe</title>
            <iframe src="#"></iframe>
        `;
        LevelAccess_AccessEngine.setWindowUnderTest(window);

        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("1376");
        expect(res).toBe("na");
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("1376");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("1376");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe(`String Pass (iframe): page title element is for the entire page, including content in the iframe without its own title`, function () {
    it(`page title element is for the entire page, including content in the iframe without its own title should be equal to pass`, function () {
        document.querySelector("#testing").contentWindow.document.documentElement.innerHTML = 
        `
            <title>This page gives a title to an iframe</title>
            <iframe src="#"></iframe>
        `;
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("1376");
        expect(res).toBe("pass");
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("1376");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("1376");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe(`String N/A (main page): page has two title elements`, function () {
    it(`page has two title elements should be equal to na`, function () {
        document.head.innerHTML = "<title>Title of the page.</title>";
        document.body.innerHTML = "<title>Title of the page.</title>";
        LevelAccess_AccessEngine.setWindowUnderTest(window);

        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("1376");
        expect(res).toBe("na");
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("1376");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("1376");
        expect(res).toBe(null);
        // </variant3>
    });
});


describe(`String Pass (iframe): page has two title elements`, function () {
    it(`page has two title elements should be equal to pass`, function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "<title>Title of the page.</title>";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<title>Title of the page.</title>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("1376");
        expect(res).toBe("pass");
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("1376");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("1376");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe(`String N/A (main page): title is in the body`, function () {
    it(`title is in the body should be equal to na`, function () {
        document.head.innerHTML = "";
        document.body.innerHTML = "<title>Title of the page.</title>";
        LevelAccess_AccessEngine.setWindowUnderTest(window);

        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("1376");
        expect(res).toBe("na");
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("1376");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("1376");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe(`String Pass (iframe): title is in the body`, function () {
    it(`title is in the body should be equal to pass`, function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<title>Title of the page.</title>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("1376");
        expect(res).toBe("pass");
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("1376");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("1376");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe(`String N/A (main page): first title element has content`, function () {
    it(`first title element has content should be equal to na`, function () {
        document.head.innerHTML = "<title>Title of the page.</title>";
        document.body.innerHTML = "<title></title>";
        LevelAccess_AccessEngine.setWindowUnderTest(window);

        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("1376");
        expect(res).toBe("na");
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("1376");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("1376");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe(`String Pass (iframe): first title element has content`, function () {
    it(`first title element has content should be equal to pass`, function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "<title>Title of the page.</title>";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<title></title>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("1376");
        expect(res).toBe("pass");
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("1376");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("1376");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe(`String N/A (main page): page has no title`, function () {
    it(`page has no title should be equal to na`, function () {
        document.documentElement.innerHTML = "<h1>this page has no title</h1>";
        LevelAccess_AccessEngine.setWindowUnderTest(window);

        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("1376");
        expect(res).toBe("na");
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("1376");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("1376");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe(`String Fail (iframe): page has no title`, function () {
    it(`page has no title should be equal to fail`, function () {
        document.querySelector("#testing").contentWindow.document.documentElement.innerHTML = "<h1>this page has no title</h1>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("1376");
        expect(res).toBe("fail");
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("1376");
        expect(res).toBe("1376,1");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("1376");
        expect(res.instances.length).toBe(1);
        // </variant3>
    });
});

describe(`String N/A (main page): page has no title`, function () {
    it(`page has no title should be equal to na`, function () {
        document.documentElement.innerHTML = "<iframe src='#'></iframe>";
        LevelAccess_AccessEngine.setWindowUnderTest(window);

        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("1376");
        expect(res).toBe("na");
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("1376");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("1376");
        expect(res).toBe(null);
        // </variant3>
    });
});


describe(`String Fail (iframe): page has no title`, function () {
    it(`page has no title should be equal to fail`, function () {
        document.querySelector("#testing").contentWindow.document.documentElement.innerHTML = "<iframe src='#'></iframe>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("1376");
        expect(res).toBe("fail");
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("1376");
        expect(res).toBe("1376,1");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("1376");
        expect(res.instances.length).toBe(1);
        // </variant3>
    });
});

describe(`String N/A (main page): only title in svg element`, function () {
    it(`only title in svg element should be equal to na`, function () {
        document.documentElement.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg'><title>This is an SVG</title></svg>";
        LevelAccess_AccessEngine.setWindowUnderTest(window);

        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("1376");
        expect(res).toBe("na");
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("1376");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("1376");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe(`String Fail (iframe): only title in svg element`, function () {
    it(`only title in svg element should be equal to fail`, function () {
        document.querySelector("#testing").contentWindow.document.documentElement.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg'><title>This is an SVG</title></svg>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("1376");
        expect(res).toBe("fail");
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("1376");
        expect(res).toBe("1376,1");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("1376");
        expect(res.instances.length).toBe(1);
        // </variant3>
    });
});

describe(`String N/A (main page): only titles in children of svg element`, function () {
    it(`only titles in children of svg element should be equal to na`, function () {
        document.documentElement.innerHTML = 
        `
            <svg viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="4">
                    <title>I"m a circle</title>
                </circle>
                 
                <rect x="11" y="1" width="8" height="8">
                    <title>I"m a square</title>
                </rect>
            </svg>
        `;
        LevelAccess_AccessEngine.setWindowUnderTest(window);

        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("1376");
        expect(res).toBe("na");
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("1376");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("1376");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe(`String Fail (iframe): only titles in children of svg element`, function () {
    it(`only titles in children of svg element should be equal to fail`, function () {
        document.querySelector("#testing").contentWindow.document.documentElement.innerHTML = 
        `
            <svg viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="4">
                    <title>I"m a circle</title>
                </circle>
                
                <rect x="11" y="1" width="8" height="8">
                    <title>I"m a square</title>
                </rect>
            </svg>
        `;
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("1376");
        expect(res).toBe("fail");
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("1376");
        expect(res).toBe("1376,1");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("1376");
        expect(res.instances.length).toBe(1);
        // </variant3>
    });
});

describe(`String N/A (main page): two title elements in the head (first empty) and two title elements in the body`, function () {
    it(`two title elements in the head (first empty) and two title elements in the body should be equal to na`, function () {
        document.head.innerHTML = "<title></title><title>Good</title>";
        document.body.innerHTML = "<title>Good</title><title>Good</title>";
        LevelAccess_AccessEngine.setWindowUnderTest(window);

        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("1376");
        expect(res).toBe("na");
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("1376");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("1376");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe(`String Pass (iframe): two title elements in the head (first empty) and two title elements in the body`, function () {
    it(`two title elements in the head (first empty) and two title elements in the body should be equal to pass`, function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "<title></title><title>Good</title>";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<title>Good</title><title>Good</title>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("1376");
        expect(res).toBe("pass");
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("1376");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("1376");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe(`String N/A (main page): two title elements in the body (first is empty)`, function () {
    it(`two title elements in the body (first is empty) should be equal to na`, function () {
        document.head.innerHTML = "";
        document.body.innerHTML = "<title></title><title>Good</title>";
        LevelAccess_AccessEngine.setWindowUnderTest(window);

        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("1376");
        expect(res).toBe("na");
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("1376");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("1376");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe(`String Pass (iframe): two title elements in the body (first is empty)`, function () {
    it(`two title elements in the body (first is empty) should be equal to pass`, function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<title></title><title>Good</title>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("1376");
        expect(res).toBe("pass");
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("1376");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("1376");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe(`String N/A (main page): a title element in the head with a single space character`, function () {
    it(`a title element in the head with a single space character should be equal to na`, function () {
        document.head.innerHTML = "<title> </title>";
        document.body.innerHTML = "";
        LevelAccess_AccessEngine.setWindowUnderTest(window);

        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("1376");
        expect(res).toBe("na");
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("1376");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("1376");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe(`String Pass (iframe): a title element in the head with a single space character`, function () {
    it(`a title element in the head with a single space character should be equal to pass`, function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "<title> </title>";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("1376");
        expect(res).toBe("pass");
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("1376");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("1376");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe(`String N/A (main page): two title elements in the head (second is empty) and two empty title elements in the body`, function () {
    it(`two title elements in the head (second is empty) and two empty title elements in the body should be equal to na`, function () {
        document.head.innerHTML = "<title>Good</title><title></title>";
        document.body.innerHTML = "<title></title><title></title>";
        LevelAccess_AccessEngine.setWindowUnderTest(window);

        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("1376");
        expect(res).toBe("na");
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("1376");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("1376");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe(`String Pass (iframe): two title elements in the head (second is empty) and two empty title elements in the body`, function () {
    it(`two title elements in the head (second is empty) and two empty title elements in the body should be equal to pass`, function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "<title>Good</title><title></title>";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<title></title><title></title>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("1376");
        expect(res).toBe("pass");
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("1376");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("1376");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe(`String N/A (main page): two title elements in the body (second is empty)`, function () {
    it(`two title elements in the body (second is empty) should be equal to na`, function () {
        document.head.innerHTML = "";
        document.body.innerHTML = "<title>Good</title><title></title>";
        LevelAccess_AccessEngine.setWindowUnderTest(window);

        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("1376");
        expect(res).toBe("na");
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("1376");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("1376");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe(`String Pass (iframe): two title elements in the body (second is empty)`, function () {
    it(`two title elements in the body (second is empty) should be equal to pass`, function () {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<title>Good</title><title></title>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("1376");
        expect(res).toBe("pass");
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("1376");
        expect(res).toBe("");
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("1376");
        expect(res).toBe(null);
        // </variant3>
    });
});

describe("String Pass: a div with a title element in the body tested via runAllTests_returnInstances_JSON_NodeCapture", function () {
    it("a div with a title element in the body tested via runAllTests_returnInstances_JSON_NodeCapture should be equal to pass", function () {
        document.head.innerHTML = "";
        document.body.innerHTML = "<div><title id='target'>This is a title</title></div>";
        var targetParent = document.querySelector("#target").parentElement;
        LevelAccess_AccessEngine.setWindowUnderTest(window);
        var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON_NodeCapture(targetParent);
        var resObj = JSON.parse(res);
        expect(resObj.length).toBe(0);
    });
});

describe("String Pass: a div with a div in the body tested via runAllTests_returnInstances_JSON_NodeCapture", function () {
    it("a div with a div in the body tested via runAllTests_returnInstances_JSON_NodeCapture should be equal to pass", function () {
        document.head.innerHTML = "";
        document.body.innerHTML = "<div><div id='target'></div></div>";
        // because of the way node capture works, Engine has no way of knowing if this is the first title element in the page or not, so it won"t flag this as a violation
        var targetParent = document.querySelector("#target").parentElement;
        LevelAccess_AccessEngine.setWindowUnderTest(window);
        var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON_NodeCapture(targetParent);
        var resObj = JSON.parse(res);
        expect(resObj.length).toBe(0);
    });
});