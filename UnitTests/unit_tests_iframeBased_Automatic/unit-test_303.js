describe('String N/A: no nodes', function() {
    it('no nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("303");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("303");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("303");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: input node with a type="number" attribute with a role="spinbutton" not visible in the displayed content', function() {
    it('input node with a type="number" attribute not visible with a role="spinbutton" in the displayed content should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='number' style='display:none' role='spinbutton'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("303");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("303");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("303");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: input node with a type="number" attribute with a role="spinbutton" not available to assistive technology', function() {
    it('input node with a type="number" attribute with a role="spinbutton" not available to assistive technology should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='number' aria-hidden='true' role='spinbutton'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("303");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("303");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("303");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: input node with a type="number" attribute', function() {
    it('input node with a type="number" attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='number'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("303");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("303");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("303");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: input node with a type="number" attribute with a role="spinbutton"', function() {
    it('input node with a type="number" attribute with a role="spinbutton" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='number' role='spinbutton'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("303");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("303");
       expect(res).toBe("303,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("303");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});