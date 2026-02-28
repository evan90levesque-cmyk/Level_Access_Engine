describe('String N/A: no meta nodes', function() {
    it('no meta nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("61");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("61");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("61");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: meta node without a content attribute set to "refresh"', function() {
    it('meta node without a content attribute set to "refresh" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "<meta>";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("61");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("61");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("61");
       expect(res).toBe(null);
       // </variant3>
    });
});

/*
describe('String N/A: meta node with a content attribute set to "refresh" but no content attribute', function() {
    it('meta node without a content attribute set to "refresh" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "<meta http-equiv='refresh'>";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("61");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("61");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("61");
       expect(res).toBe(null);
       // </variant3>
    });
});
*/

/*
 
// causes an error as page is reloaded
 
describe('String Pass: a meta node with an http-equiv attribute set to the text value "refresh" and a content attribute set to a 0 second time limit', function() {
    it('a meta node with an http-equiv attribute set to the text value "refresh" and a content attribute set to a 0 second time limit should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "<meta http-equiv='refresh' content=\"0;URL='http://thetudors.example.com/'\">";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("61");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("61");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("61");
       expect(res).toBe(null);
       // </variant3>
    });
});
*/

/*
describe('String Fail: a meta node with an http-equiv attribute set to the text value "refresh" and a content attribute set to a 5 second time limit', function() {
    it('a meta node with an http-equiv attribute set to the text value "refresh" and a content attribute set to a 5 second time limit should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "<meta http-equiv='refresh' content=\"15;URL='http://thetudors.example.com/'\">";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("61");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("61");
       expect(res).toBe("61,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("61");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a meta node with an http-equiv attribute set to the text value "refresh" and a content attribute set to a 20 second time limit', function() {
    it('a meta node with an http-equiv attribute set to the text value "refresh" and a content attribute set to a 20 second time limit should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "<meta http-equiv='refresh' content=\"20;URL='http://thetudors.example.com/'\">";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("61");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("61");
       expect(res).toBe("61,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("61");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});
*/