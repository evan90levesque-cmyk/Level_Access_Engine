describe('Test 1 - Testing runAllTests_returnInstances_JSON_NodeCapture', function() {
    it('Test 1', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th>Company</th><th>Contact</th><th>Country</th></tr><tr><td>Alfreds Futterkiste</td><td>Maria Anders</td><td><span id='target'></span><img src='#'>Germany</td></tr></table>";
       var targetParent = document.querySelector("#testing").contentWindow.document.querySelector("#target").parentElement;
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON_NodeCapture(targetParent);
       var resObj = JSON.parse(res);
       expect(resObj.length).toBe(1);
    });
});

describe('Test 2 - Testing runAllTests_returnInstances_JSON_NodeCapture', function() {
    it('Test 2', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div id="main"><div><ul><li>Test1</li></ul></div><div><span id="target"></span><ul><span>Test1</span></ul></div><div><img src="#"></div><iframe src="TestPage_Iframe.html"></iframe></div>';
       var targetParent = document.querySelector("#testing").contentWindow.document.querySelector("#target").parentElement;
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON_NodeCapture(targetParent);
       var resObj = JSON.parse(res);
       expect(resObj.length).toBe(1);
    });
});

describe('Test 3 - Testing runAllTests_returnInstances_JSON_NodeCapture', function() {
    it('Test 3', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div id="main"><span id="target"></span><div><ul><li>Test1</li></ul></div><div><ul><span>Test1</span></ul></div><div><img src="#"></div><iframe src="TestPage_Iframe.html"></iframe></div>';
       var targetParent = document.querySelector("#testing").contentWindow.document.querySelector("#target").parentElement;
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON_NodeCapture(targetParent);
       var resObj = JSON.parse(res);
       expect(resObj.length).toBe(3);
    });
});

describe('Test 4 - Testing runAllTests_returnInstances_JSON_NodeCapture for special tags', function() {
    for (const tagName of ['HEAD', 'BODY']) {
        it(tagName, () => {
            const iframeWindow = document.querySelector("#testing").contentWindow;
            iframeWindow.document.head.innerHTML = "<meta content='maximum-scale=0.5'>";
            iframeWindow.document.body.innerHTML = "<img src='#'>";
            const targetElement = iframeWindow.document.querySelector(tagName);
            LevelAccess_AccessEngine.setWindowUnderTest(iframeWindow);
            const res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON_NodeCapture(targetElement);
            const resObj = JSON.parse(res);
            expect(resObj.length).not.toBeNull();  // we just want to make sure there are no runtime errors

            // actually check results
            expect(resObj.filter(result => result.engineTestId === 59).length).toBe((tagName === 'HEAD') ? 1 : 0);
            expect(resObj.filter(result => result.engineTestId === 89).length).toBe((tagName === 'BODY') ? 1 : 0);
        });
    }
});