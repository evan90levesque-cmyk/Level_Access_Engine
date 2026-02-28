describe('String N/A: No elements have a role', function() {
    it('No elements with a role should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("445");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("445");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("445");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: A node with no role', function() {
    it('A node with no role should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div ></div>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("445");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("445");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("445");
       expect(res).toBe(null);
       // </variant3>
    });
});


describe('String Pass: A body element with a role not set to application', function() {
    it('A body element with a role not set to application should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.body.setAttribute("role", "contentinfo");
      LevelAccess_AccessEngine.setWindowUnderTest(iframe.contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("445");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("445");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("445");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a node with a role set to ""', function() {
    it('a node with a role set to "" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div role=''></div>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("445");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("445");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("445");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a node with a role that is not application', function() {
    it('a node with a role should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div role='button'></div>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("445");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("445");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("445");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: A node with a role set to application', function() {
    it('A node with a role set to application should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div role='application'></div>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("445");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("445");
       expect(res).toBe("445,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("445");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

 describe('String Fail: A body element with a role set to application', function() {
    it('A body element with a role set to application should be equal to fail', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = ""; 
        document.querySelector("#testing").contentWindow.document.body.innerHTML = ""; 
        var iframe = document.querySelector("#testing");
        iframe.contentWindow.document.body.setAttribute("role", "application");
       LevelAccess_AccessEngine.setWindowUnderTest(iframe.contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("445");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("445");
       expect(res).toBe("445,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("445");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
}); 