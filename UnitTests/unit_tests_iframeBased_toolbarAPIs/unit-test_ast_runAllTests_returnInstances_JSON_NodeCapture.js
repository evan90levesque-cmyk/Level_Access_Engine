describe('Test 1 - Testing ast_runAllTests_returnInstances_JSON_NodeCapture for automatic and guided automatic results', function() {
    it('Test 1', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th>Company</th><th>Contact</th><th>Country</th></tr><tr><td>Alfreds Futterkiste</td><td>Maria Anders</td><td><span id='target'></span><img src='#'>Germany</td></tr></table>";
       var targetParent = document.querySelector("#testing").contentWindow.document.querySelector("#target").parentElement;
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON_NodeCapture(targetParent);
       var resObj = JSON.parse(res);
       // gets results for automatic tests
       expect(resObj.length).toBe(1);
    });
});

describe('Test 2 - Testing ast_runAllTests_returnInstances_JSON_NodeCapture for automatic and guided automatic results', function() {
    it('Test 2', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div id="main"><div><ul><li>Test1</li></ul></div><div><span id="target"></span><ul><span>Test1</span></ul></div><div><img src="#"></div><iframe src="TestPage_Iframe.html"></iframe></div>';
       var targetParent = document.querySelector("#testing").contentWindow.document.querySelector("#target").parentElement;
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON_NodeCapture(targetParent);
       var resObj = JSON.parse(res);
       // gets results for automatic tests
       expect(resObj.length).toBe(1);
    });
});

describe('Test 3 - Testing ast_runAllTests_returnInstances_JSON_NodeCapture for automatic and guided automatic results', function() {
    it('Test 3', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div id="main"><span id="target"></span><div><ul><li>Test1</li></ul></div><div><ul><span>Test1</span></ul></div><div><img src="#"></div><iframe src="TestPage_Iframe.html"></iframe></div>';
       var targetParent = document.querySelector("#testing").contentWindow.document.querySelector("#target").parentElement;
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON_NodeCapture(targetParent);
       var resObj = JSON.parse(res);
       // gets results for automatic tests
       expect(resObj.length).toBe(4);
    });
});

describe('Test 4 - Testing ast_runAllTests_returnInstances_JSON_NodeCapture for special tags', function() {
    for (const tagName of ['HEAD', 'BODY']) {
        it(tagName, () => {
            const iframeWindow = document.querySelector("#testing").contentWindow;
            iframeWindow.document.head.innerHTML = "<title>too short</title>";
            iframeWindow.document.body.innerHTML = "";
            const targetElement = iframeWindow.document.querySelector(tagName);
            LevelAccess_AccessEngine.setWindowUnderTest(iframeWindow);
            const res = LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON_NodeCapture(targetElement);
            const resObj = JSON.parse(res);
            expect(resObj.length).not.toBeNull();  // we just want to make sure there are no runtime errors

            // actually check results
            expect(resObj.filter(result => result.engineTestId === 522).length).toBe((tagName === 'HEAD') ? 1 : 0);
            expect(resObj.filter(result => result.engineTestId === 400).length).toBe((tagName === 'BODY') ? 1 : 0);
        });
    }
});

describe('ENG-984: Color contrast tests should run in node capture mode', function() {
    it('a p node with a style of "font-size: 12px; color: yellow;" should fail color contrast Test 107', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div><p id="target" style="font-size: 12px; color: yellow;">foo</p></div>';

        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        const target = document.querySelector("#testing").contentWindow.document.querySelector("#target");
        const res = LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON_NodeCapture(target);
        const resObj = JSON.parse(res);

        expect(resObj.filter(result => result.engineTestId === 107).length).toBe(1);
    });

    it('a p node with a style of "font-size: 24px; color: yellow;" should fail color contrast Test 109', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div><p id="target" style="font-size: 24px; color: yellow;">foo</p></div>';

        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        const target = document.querySelector("#testing").contentWindow.document.querySelector("#target");
        const res = LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON_NodeCapture(target);
        const resObj = JSON.parse(res);

        expect(resObj.filter(result => result.engineTestId === 109).length).toBe(1);
    });
});