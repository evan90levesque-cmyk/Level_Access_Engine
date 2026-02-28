describe('String N/A: no nodes', function() {
    it('no nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("327");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("327");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("327");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a picture node not visible in the displayed content', function() {
    it('a picture node not visible in the displayed content should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<picture style='display:none'></picture>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("327");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("327");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("327");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a picture node not available to assistive technology', function() {
    it('a picture node not available to assistive technology should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<picture aria-hidden='true' role='button'></picture>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("327");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("327");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("327");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a picture node with a role="slider" attribute', function() {
    it('a picture node with a role="slider" attribute should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<picture aria-hidden='true' role='button'></picture>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("327");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("327");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("327");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a picture node with an img element as it last child element', function() {
    it('a picture node with an img element as it last child element should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<picture><source media="(min-width: 650px)" srcset="#"><source media="(min-width: 465px)" srcset="#"><img src="#" alt="Flowers" style="width:auto;"></picture>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("327");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("327");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("327");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: two picture nodes with an img element as it last child element', function() {
    it('two picture nodes with an img element as it last child element should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<picture><source media="(min-width: 650px)" srcset="#"><source media="(min-width: 465px)" srcset="#"><img src="#" alt="Flowers" style="width:auto;"></picture><picture><source media="(min-width: 650px)" srcset="#"><source media="(min-width: 465px)" srcset="#"><img src="#" alt="Flowers" style="width:auto;"></picture>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("327");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("327");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("327");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: a picture node without an img element', function() {
    it('a picture node without an img element should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<picture></picture>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("327");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("327");
       expect(res).toBe("327,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("327");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a picture node without an img element as it last child element', function() {
    it('a picture node without an img element as it last child element should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<picture><source media="(min-width: 465px)" srcset="#"><img src="#" alt="Flowers" style="width:auto;"><source media="(min-width: 650px)" srcset="#"></picture>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("327");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("327");
       expect(res).toBe("327,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("327");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: two picture nodes without an img element as it last child element', function() {
    it('two picture nodes without an img element as it last child element should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<picture><source media="(min-width: 465px)" srcset="#"><img src="#" alt="Flowers" style="width:auto;"><source media="(min-width: 650px)" srcset="#"></picture><picture><source media="(min-width: 465px)" srcset="#"><img src="#" alt="Flowers" style="width:auto;"><source media="(min-width: 650px)" srcset="#"></picture>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("327");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("327");
       expect(res).toBe("327,2");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("327");
       expect(res.instances.length).toBe(2);
       // </variant3>
    });
});