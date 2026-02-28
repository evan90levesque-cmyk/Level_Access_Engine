describe('String Pass: a head node with no role or aria- attributes', function() {
    it('a head node with no role or aria- attributes should be equal to pass', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(iframe.contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("66");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("66");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("66");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: a head node with a role="figure" attribute', function() {
    it('a head node with a role="figure" attribute should be equal to fail', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.setAttribute("role", "figure");
       iframe.contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(iframe.contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("66");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("66");
       expect(res).toBe("66,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("66");
       expect(res.instances.length).toBe(1);
       // </variant3>
       iframe.contentWindow.document.head.removeAttribute("role");
    });
});

describe('String Fail: a head node with an aria-expanded="true" attribute', function() {
    it('a head node with an aria-expanded="true" attribute should be equal to fail', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.setAttribute("aria-expanded", "true");
       iframe.contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(iframe.contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("66");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("66");
       expect(res).toBe("66,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("66");
       expect(res.instances.length).toBe(1);
       // </variant3>
       iframe.contentWindow.document.head.removeAttribute("aria-expanded");
    });
});

describe('String Fail: a head node with an aria-expanded="true" attribute and a role="figure" attribute', function() {
    it('a head node with an aria-expanded="true" attribute and a role="figure" attribute should be equal to fail', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.setAttribute("aria-expanded", "true");
       iframe.contentWindow.document.head.setAttribute("role", "figure");
       iframe.contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(iframe.contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("66");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("66");
       expect(res).toBe("66,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("66");
       expect(res.instances.length).toBe(1);
       // </variant3>
       iframe.contentWindow.document.head.removeAttribute("aria-expanded");
       iframe.contentWindow.document.head.removeAttribute("role");
    });
});