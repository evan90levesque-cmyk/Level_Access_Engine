describe('String N/A: no nodes with an aria-valuemin attribute', function() {
    it('no nodes with an aria-valuemin attribute should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("69");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("69");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("69");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a span node with an aria-valuemin attribute set to a null value', function() {
    it('a span node with an aria-valuemin attribute set to a null value should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span aria-valuemin=''></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("69");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("69");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("69");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a span node with a role attribute value that starts with the text "presentation" and an aria-valuemin attribute set to the value 10', function() {
    it('a span node with a role attribute value that starts with the text "presentation" and an aria-valuemin attribute set to the value 10 should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='presentation' aria-valuemin='10'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("69");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("69");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("69");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a span node with a style attribute value set to the value "display:none;" and an aria-valuemin attribute set to the value 10', function() {
    it('a span node with a style attribute value set to the value "display:none;" and an aria-valuemin attribute set to the value 10 should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span style='display:none;' aria-valuemin='10'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("69");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("69");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("69");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a span node with an aria-valuemin attribute set to "10" that is available in the DOM', function() {
    it('a span node with an aria-valuemin attribute set to "10" that is available in the DOM should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span aria-valuemin='10'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("69");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("69");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("69");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: two span nodes with an aria-valuemin attribute set to "10" that is available in the DOM', function() {
    it('two span nodes with an aria-valuemin attribute set to "10" that is available in the DOM should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span aria-valuemin='10'></span><span aria-valuemin='10'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("69");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("69");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("69");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a span node with an aria-valuemin attribute set to "-10" that is available in the DOM', function() {
    it('a span node with an aria-valuemin attribute set to "-10" that is available in the DOM should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span aria-valuemin='-10'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("69");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("69");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("69");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a span node with an aria-valuemin attribute set to "0.5" that is available in the DOM', function() {
    it('a span node with an aria-valuemin attribute set to "0.5" that is available in the DOM should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span aria-valuemin='0.5'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("69");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("69");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("69");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a span node with an aria-valuemin attribute set to "-0.5" that is available in the DOM', function() {
    it('a span node with an aria-valuemin attribute set to "-0.5" that is available in the DOM should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span aria-valuemin='-0.5'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("69");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("69");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("69");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: a span node with an aria-valuemin attribute set to "hello10" that is available in the DOM', function() {
    it('a span node with an aria-valuemin attribute set to "hello10" that is available in the DOM should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span aria-valuemin='hello10'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("69");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("69");
       expect(res).toBe("69,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("69");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: two span nodes with an aria-valuemin attribute set to "hello10" that is available in the DOM', function() {
    it('two span nodes with an aria-valuemin attribute set to "hello10" that is available in the DOM should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span aria-valuemin='hello10'></span><span aria-valuemin='hello10'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("69");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("69");
       expect(res).toBe("69,2");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("69");
       expect(res.instances.length).toBe(2);
       // </variant3>
    });
});

describe('String Fail: a span node with an aria-valuemin attribute set to "10hello" that is available in the DOM', function() {
    it('a span node with an aria-valuemin attribute set to "10hello" that is available in the DOM should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span aria-valuemin='10hello'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("69");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("69");
       expect(res).toBe("69,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("69");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a span node with an aria-valuemin attribute set to "0.5a3" that is available in the DOM', function() {
    it('a span node with an aria-valuemin attribute set to "0.5a3" that is available in the DOM should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span aria-valuemin='0.5a3'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("69");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("69");
       expect(res).toBe("69,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("69");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});