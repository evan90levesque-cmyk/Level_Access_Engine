describe('String N/A: no nodes', function() {
    it('no nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("10");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("10");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("10");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a button node with a type="menu" attribute and a role="button" not visible in the displayed content', function() {
    it('a button node with a type="menu" attribute and a role="button" not visible in the displayed content should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<button type='menu' style='display:none' role='button'>Hello</button>";
       
       // IE converts type=menu to type=submit automatically at present
       
       if (document.querySelector("#testing").contentWindow.document.querySelector("[type='menu']") === null) {
            // to give equivalent numbers of tests on all platforms
            expect(null).toBe(null);
            expect(null).toBe(null);
            expect(null).toBe(null);
       }
       else {
           LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
           // <variant1>
           var res = LevelAccess_AccessEngine.runTest_returnOutcome("10");
           expect(res).toBe('na');
           // </variant1>
           // <variant2>
           res = LevelAccess_AccessEngine.runTest_returnNumbers("10");
           expect(res).toBe("");       
           // </variant2>
           // <variant3>
           res = LevelAccess_AccessEngine.runTest_returnInstances("10");
           expect(res).toBe(null);
           // </variant3>
       }
    });
});

describe('String N/A: a button node with a type="menu" attribute and a role="button" not available to assistive technology', function() {
    it('a button node with a type="menu" attribute and a role="button" not available to assistive technology should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<button type='menu' aria-hidden='true' role='button'></button>";
       
       // IE converts type=menu to type=submit automatically at present
       
       if (document.querySelector("#testing").contentWindow.document.querySelector("[type='menu']") === null) {
            // to give equivalent numbers of tests on all platforms
            expect(null).toBe(null);
            expect(null).toBe(null);
            expect(null).toBe(null);
       }
       else {
           LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
           // <variant1>
           var res = LevelAccess_AccessEngine.runTest_returnOutcome("10");
           expect(res).toBe('na');
           // </variant1>
           // <variant2>
           res = LevelAccess_AccessEngine.runTest_returnNumbers("10");
           expect(res).toBe("");       
           // </variant2>
           // <variant3>
           res = LevelAccess_AccessEngine.runTest_returnInstances("10");
           expect(res).toBe(null);
           // </variant3>
       }
    });
});

describe('String Pass: a button node', function() {
    it('a button node should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<button type='menu'></button>";
       // IE converts type=menu to type=submit automatically at present
       
       if (document.querySelector("#testing").contentWindow.document.querySelector("[type='menu']") === null) {
            // to give equivalent numbers of tests on all platforms
            expect(null).toBe(null);
            expect(null).toBe(null);
            expect(null).toBe(null);
       }
       else {
           LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
           // <variant1>
           var res = LevelAccess_AccessEngine.runTest_returnOutcome("10");
           expect(res).toBe('pass');
           // </variant1>
           // <variant2>
           res = LevelAccess_AccessEngine.runTest_returnNumbers("10");
           expect(res).toBe("");       
           // </variant2>
           // <variant3>
           res = LevelAccess_AccessEngine.runTest_returnInstances("10");
           expect(res).toBe(null);
           // </variant3>
       }
    });
});

describe('String Fail: a button node with a role="button"', function() {
    it('a button node with a role="button" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<button type='menu' role='button'></button>";
       // IE converts type=menu to type=submit automatically at present
       
       if (document.querySelector("#testing").contentWindow.document.querySelector("[type='menu']") === null) {
            // to give equivalent numbers of tests on all platforms
            expect(null).toBe(null);
            expect(null).toBe(null);
            expect(null).toBe(null);
       }
       else {
           LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
           // <variant1>
           var res = LevelAccess_AccessEngine.runTest_returnOutcome("10");
           expect(res).toBe('fail');
           // </variant1>
           // <variant2>
           res = LevelAccess_AccessEngine.runTest_returnNumbers("10");
           expect(res).toBe("10,1");
           // </variant2>
           // <variant3>
           res = LevelAccess_AccessEngine.runTest_returnInstances("10");
           expect(res.instances.length).toBe(1);
           // </variant3>
       }
    });
});