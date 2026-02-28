describe('String N/A: marquee node not available in the DOM', function() {
    it('no marquee nodes not available in the DOM should be equal to na', function() {
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("43");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("43");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("43");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: marquee node visible in the displayed content', function() {
    it('a marquee node is visible in the displayed content should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<marquee>Hello</marquee>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("43");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("43");
       expect(res).toBe("43,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("43");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

// Deque

describe('Deque Fail: marquee node visible in the displayed content', function() {
    it('a marquee node is visible in the displayed content should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<marquee id="marqueemarq">This content is inside a marquee.</marquee>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("43");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("43");
       expect(res).toBe("43,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("43");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});