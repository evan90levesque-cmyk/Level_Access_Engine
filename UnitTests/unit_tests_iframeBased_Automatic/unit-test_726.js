describe('String N/A: iframe node with style set to a "display:none" text value', function() {
    it('iframe node with style set to a "display:none" text value should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<iframe style="display:none" src="images/goat-4.jpg">';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("726");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("726");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("726");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: iframe node with a role set to a text value that starts with presentation', function() {
    it('iframe node with a role set to a text value that starts with presentation should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<iframe role="presentation" src="images/goat-4.jpg">';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("726");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("726");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("726");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: iframe node with src attribute set to an html file', function() {
    it('iframe node with src attribute set to an html file should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<iframe src="foo.html">';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("726");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("726");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("726");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: iframe node with src attribute set to an url parameter ending in an image file extension', function() {
    it('iframe node with src attribute set to an url parameter ending in an image file extension should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<iframe src="hello.html?asd=bob.png">';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("726");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("726");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("726");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: iframe node with src attribute set to an url parameter ending in an image file extension, but containing an htm file extension', function() {
    it('iframe node with src attribute set to an url parameter ending in an image file extension, but containing an htm file extension should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<iframe src="image.htm?test.jpg">';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("726");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("726");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("726");
       expect(res).toBe(null);
       // </variant3>
    });
});

//There is a long list of image file extensions to check for in the test.
//The last one is PCX so if this works, the rest should as well.
describe('String Fail: iframe node with src attribute set to an image file', function() {
    it('iframe node with src attribute set to an image file should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<iframe src="foo.PCX">';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("726");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("726");
       expect(res).toBe("726,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("726");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});