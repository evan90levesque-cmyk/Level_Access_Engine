describe('calcAccessibleName_pseudo_a1: pseudo after in A element', function() {
    it('pseudo after in A element should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = '<style>a:after {content: "alternative1";}</style>';
       iframe.contentWindow.document.body.innerHTML = '<a id="test">hello</a>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("helloalternative1");
    });
});

describe('calcAccessibleName_pseudo_a2: pseudo after in A element', function() {
    it('pseudo after in A element should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = '<style>span:after {content: "alternative1";}</style>';
       iframe.contentWindow.document.body.innerHTML = '<a id="test">alternative <span>hello</hello></a>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative hello");
    });
});

describe('calcAccessibleName_pseudo_a3: pseudo before in A element', function() {
    it('pseudo before in A element should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = '<style>a:before {content: "alternative1";}</style>';
       iframe.contentWindow.document.body.innerHTML = '<a id="test">hello</a>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1hello");
    });
});

describe('calcAccessibleName_pseudo_a4: pseudo before in A element', function() {
    it('pseudo before in A element should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = '<style>span:before {content: "alternative1";}</style>';
       iframe.contentWindow.document.body.innerHTML = '<a id="test">alternative <span>hello</hello></a>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative hello");
    });
});

describe('calcAccessibleName_pseudo_a5: ignore CSS pseudo element content when aria-label is already present on node', function() {
    it('iignore CSS pseudo element content when aria-label is already present on node should be "asd"', function() {
        var iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = '<style>a:before {content: "qwe";}</style>';
        iframe.contentWindow.document.body.innerHTML = '<a id="test" href="#" aria-label="asd">foo</a>';
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("asd");
    });
});

describe('calcAccessibleName_pseudo_a6: ignore CSS pseudo element content when aria-labelledby is already present on node', function() {
    it('ignore CSS pseudo element content when aria-labelledby is already present on node should be "asd"', function() {
        var iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = '<style>a:after {content: "qwe";}</style>';
        iframe.contentWindow.document.body.innerHTML = '<span id="label">asd</span><a id="test" href="#" aria-labelledby="label">foo</a>';
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("asd");
    });
});

describe('calcAccessibleName_pseudo_a7: ignore URLs in CSS pseudo element content', function() {
    it('ignore URLs in CSS pseudo element content should be "some kind of link"', function() {
        var iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = '<style>a[target="_blank"]::after {content: url(/abcd/example.png);}</style>';
        iframe.contentWindow.document.body.innerHTML = '<a id="test" href="#" target="_blank">some kind of link</a>';
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("some kind of link");
    });
});

describe('calcAccessibleName_pseudo_a8: use alt text in CSS pseudo element content', function() {
    it('use alt text in CSS pseudo element content should be "some kind of linkopens in new window"', function() {
        var iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = '<style>a[target="_blank"]::after {content: url(/abcd/example.png) / "opens in new window";}</style>';
        iframe.contentWindow.document.body.innerHTML = '<a id="test" href="#" target="_blank">some kind of link</a>';
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();

        let expectedText;

        const rawChromeVersion = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);  // https://stackoverflow.com/a/4900484
        const rawFirefoxVersion = navigator.userAgent.match(/Firefox\/([0-9]+)\./);

        const chromeVersion = rawChromeVersion ? parseInt(rawChromeVersion[2], 10) : null;
        const firefoxVersion = rawFirefoxVersion ? parseInt(rawFirefoxVersion[1], 10) : null;

        if ((chromeVersion && chromeVersion >= 79) || (firefoxVersion && firefoxVersion >= 128)) {
            expectedText = "some kind of linkopens in new window";
        } else {
            // alt text in CSS pseudo element content is not yet supported by all browsers
            expectedText = "some kind of link";
        }

        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(expectedText);
    });
});