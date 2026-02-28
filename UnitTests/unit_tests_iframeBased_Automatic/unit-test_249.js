describe('String N/A: no object nodes', function() {
    it('no object nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("249");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("249");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("249");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: object node with style set to a "display:none" text value', function() {
    it('object node with style set to a "display:none" text value should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<object style='display:none'>Hello</object>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("249");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("249");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("249");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: object node with a role set to a text value that starts with presentation', function() {
    it('object node with a role set to a text value that starts with presentation should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<object role='presentation'>Hello</object>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("249");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("249");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("249");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: object node with an aria-labelledby attribute', function() {
    it('object node with an aria-labelledby attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='label1'>Label</span><object aria-labelledby='label1'></object>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("249");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("249");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("249");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: object node with an aria-label attribute', function() {
    it('object node with an aria-label attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<object aria-label='label1'></object>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("249");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("249");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("249");
       expect(res).toBe(null);
       // </variant3>
    });
});

// innerText no longer allowed for object acc name calc
describe('String Fail: object node with text in its body', function() {
    it('object node with text in its body should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<object>Hello</object>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("249");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("249");
       expect(res).toBe("249,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("249");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Pass: object node with a title attribute', function() {
    it('object node with a title attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<object title='label1'></object>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("249");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("249");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("249");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: object node without an aria-labelledby, aria-label, text in its body or title attribute', function() {
    it('object node without an aria-labelledby, aria-label, text in its body or title attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<object></object>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("249");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("249");
       expect(res).toBe("249,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("249");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: object node with an aria-labelledby attribute set to a null value', function() {
    it('object node with an aria-labelledby attribute set to a null value should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<object aria-labelledby=''></object>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("249");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("249");
       expect(res).toBe("249,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("249");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

// Deque
// Inner text no longer allowed in accessible name calc
describe('Deque Fail: object node with text in its body', function() {
    it('object node with text in its body should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<object id="pass1">This object has text.</object>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("249");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("249");
       expect(res).toBe("249,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("249");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('Deque Pass: object node with a title attribute set to a text value', function() {
    it('object node with a title attribute set to a text value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<object id="pass2" title="This object has text"></object>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("249");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("249");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("249");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('Deque Pass: object node with an aria-label attribute set to a text value', function() {
    it('object node with an aria-label attribute set to a text value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<object id="pass3" aria-label="this object has text"></object>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("249");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("249");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("249");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('Deque Pass: object node with an aria-labelledeby attribute set to a valid id', function() {
    it('object node with an aria-labelledby attribute set to a valid id should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<span id="label1">this object has text</span><object id="pass4" aria-labelledby="label1"></object>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("249");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("249");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("249");
       expect(res).toBe(null);
       // </variant3>
    });
});

/*





<object id="violation1"></object>
<object id="violation2"><div> </div></object>
<object id="violation3"><p style="display: none;">This object has no text.</p></object>

*/

describe('Deque Fail: object node without alt, aria-labelledby, aria-label or text in its body', function() {
    it('object node without alt, aria-labelledby, aria-label or text in its body should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<object id="violation1"></object>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("249");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("249");
       expect(res).toBe("249,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("249");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('Deque Fail: object node with an empty div in its body', function() {
    it('object node with an empty div in its body should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<object id="violation2"><div> </div></object>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("249");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("249");
       expect(res).toBe("249,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("249");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

/* We see this as a pass

describe('Deque Fail: object node with an empty and display:none p in its body', function() {
    it('object node with an empty and display:none p in its body should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<object id="violation3"><p style="display: none;">This object has no text.</p></object>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("249");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("249");
       expect(res).toBe("249,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("249");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});
*/