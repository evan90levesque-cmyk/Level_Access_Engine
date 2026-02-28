describe('String N/A: frame node with style set to a "display:none" text value', function() {
    it('frame node with style set to a "display:none" text value should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<frameset cols="*"><frame style="display:none" src="images/goat-4.jpg"></frameset>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("725");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("725");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("725");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: frame node with a role set to a text value that starts with presentation', function() {
    it('frame node with a role set to a text value that starts with presentation should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<frameset cols="*"><frame role="presentation" src="images/goat-4.jpg"></frameset>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("725");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("725");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("725");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: frame node with src attribute set to an html file', function() {
    it('frame node with src attribute set to an html file should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<frameset cols="*"><frame src="foo.html"></frameset>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("725");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("725");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("725");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: frame node with src attribute set to an url parameter ending in an image file extension', function() {
    it('frame node with src attribute set to an url parameter ending in an image file extension should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<frameset cols="*"><frame src="hello.html?asd=bob.png"></frameset>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("725");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("725");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("725");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: frame node with src attribute set to an url parameter ending in an image file extension, but containing an htm file extension', function() {
    it('frame node with src attribute set to an url parameter ending in an image file extension, but containing an htm file extension should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<frameset cols="*"><frame src="image.htm?test.jpg"></frameset>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("725");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("725");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("725");
       expect(res).toBe(null);
       // </variant3>
    });
});

//There is a long list of image file extensions to check for in the test.
//The last one is PCX so if this works, the rest should as well.
describe('String Fail: frame node with src attribute set to an image file', function() {
    it('frame node with src attribute set to an image file should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = '<frameset cols="*"><frame src="foo.PCX"></frameset>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("725");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("725");
       expect(res).toBe("725,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("725");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

// IMPORTANT: N/A is here for a reason
// as outerHTML is changed - we need to reset it in the test below

describe('String N/A: no frame nodes', function() {
    it('no frame nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.outerHTML = "<body></body>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("725");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("725");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("725");
       expect(res).toBe(null);
       // </variant3>
    });
});
