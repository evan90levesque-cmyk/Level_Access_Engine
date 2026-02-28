describe('String N/A: span node with a role set to a text value that starts with presentation', function() {
    it('span node with a role set to a text value that starts with presentation should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='presentation'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("137");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("137");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("137");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a span node with an aria-label attribute set to "alternative" that is not available in the DOM', function() {
    it('a span node with an aria-label attribute set to "alternative" that is not available in the DOM should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span style='display:none' aria-label='alternative'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("137");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("137");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("137");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a span node with an onmousedown attribute set a null text value; and no events attached in the code behind', function() {
    it('a span node with an onmousedown attribute set a null text value; and no events attached in the code behind should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span onmousedown=''></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("137");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("137");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("137");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: span node with an onmousedown attribute set to a text value; and an onkeydown attribute set to a text value', function() {
    it('span node with an onmousedown attribute set to a text value; and an onkeydown attribute set to a text value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span onmousedown='function(){}' onkeydown='function(){}'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("137");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("137");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("137");
       expect(res).toBe(null);
       // </variant3>
    });
});

/*
describe('String Pass: span node with a mousedown and keydown events set in the code behind', function() {
    it('span node with a mousedown and keydown events set in the code behind should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["mousedown","keydown"];
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' data-ae_ev='mousedown,keydown'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("137");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("137");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("137");
       expect(res).toBe(null);
       // </variant3>
    });
});
*/

/*
describe('String Pass: span node with a mousedown event set in the code behind; and an onkeydown attribute set to a text value', function() {
    it('span node with a mousedown event set in the code behind; and an onkeydown attribute set to a text value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["mousedown"];
       span.setAttribute("onkeydown", "function() {}");
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       
       // document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' onkeydown='function(){}' data-ae_ev='mousedown'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("137");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("137");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("137");
       expect(res).toBe(null);
       // </variant3>
    });
});
*/

/*
describe('String Pass: span node with a keydown event set in the code behind; and an onmousedown attribute set to a text value', function() {
    it('span node with a keydown event set in the code behind; and an onmousedown attribute set to a text value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["keydown"];
       span.setAttribute("onmousedown", "function() {}");
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       
       // document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' onmousedown='function(){}' data-ae_ev='keydown'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("137");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("137");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("137");
       expect(res).toBe(null);
       // </variant3>
    });
});
*/

describe('String Fail: a span node with an onmousedown attribute set a text value; and no events attached in the code behind; without an onkeydown atttribute set to a text value', function() {
    it('a span node with an onmousedown attribute set a text value; and no events attached in the code behind; without an onkeydown event set to a text value should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span onmousedown='function(){}'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("137");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("137");
       expect(res).toBe("137,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("137");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a span node with an onmousedown attribute set a text value; and no events attached in the code behind; and an onkeydown attribute set to a text value', function() {
    it('a span node with an onmousedown attribute set a text value; and no events attached in the code behind; and an onkeydown attribute set to a text value should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span onmousedown='function(){}' onkeydown=''></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("137");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("137");
       expect(res).toBe("137,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("137");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

/*
describe('String Fail: span node with a mousedown event set in the code behind; without a keydown event set in the code behind; without an onkeydown attribute', function() {
    it('span node with a mousedown event set in the code behind; without a keydown event set in the code behind; without an onkeydown attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["mousedown"];
       span.setAttribute("onkeydown", "");
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       
       // document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' onkeydown='' data-ae_ev='mousedown'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("137");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("137");
       expect(res).toBe("137,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("137");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});
*/

/*
describe('String Fail: span node with a mousedown event set in the code behind; without a keydown event set in the code behind; with an onkeydown attribute set to a null value', function() {
    it('span node with a mousedown event set in the code behind; without a keydown event set in the code behind; with an onkeydown attribute set to a null value should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["mousedown"];
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       
       // document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' data-ae_ev='mousedown'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("137");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("137");
       expect(res).toBe("137,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("137");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});
*/

describe('String N/A: a span node with an onmouseup attribute set a null text value; and no events attached in the code behind', function() {
    it('a span node with an onmouseup attribute set a null text value; and no events attached in the code behind should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span onmouseup=''></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("137");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("137");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("137");
       expect(res).toBe(null);
       // </variant3>
    });
});


describe('String Pass: span node with an onmouseup attribute set to a text value; and an onkeyup attribute set to a text value', function() {
    it('span node with an onmouseup attribute set to a text value; and an onkeyup attribute set to a text value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span onmouseup='function(){}' onkeyup='function(){}'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("137");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("137");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("137");
       expect(res).toBe(null);
       // </variant3>
    });
});

/*
describe('String Pass: span node with a mouseup and keyup events set in the code behind', function() {
    it('span node with a mouseup and keyup events set in the code behind should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["mouseup","keyup"];
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       
       // document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' data-ae_ev='mouseup,keyup'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("137");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("137");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("137");
       expect(res).toBe(null);
       // </variant3>
    });
});
*/

/*
describe('String Pass: span node with a mouseup event set in the code behind; and an onkeyup attribute set to a text value', function() {
    it('span node with a mouseup event set in the code behind; and an onkeyup attribute set to a text value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["mouseup"];
       span.setAttribute("onkeyup", "function() {}");
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       
       //document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' onkeyup='function(){}' data-ae_ev='mouseup'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("137");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("137");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("137");
       expect(res).toBe(null);
       // </variant3>
    });
});
*/

/*
describe('String Pass: span node with a keyup event set in the code behind; and an onmouseup attribute set to a text value', function() {
    it('span node with a keyup event set in the code behind; and an onmouseup attribute set to a text value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["keyup"];
       span.setAttribute("onmouseup", "function() {}");
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       
       //document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' onmouseup='function(){}' data-ae_ev='keyup'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("137");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("137");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("137");
       expect(res).toBe(null);
       // </variant3>
    });
});
*/

describe('String Fail: a span node with an onmouseup attribute set a text value; and no events attached in the code behind; without an onkeyup atttribute set to a text value', function() {
    it('a span node with an onmouseup attribute set a text value; and no events attached in the code behind; without an onkeyup event set to a text value should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span onmouseup='function(){}'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("137");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("137");
       expect(res).toBe("137,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("137");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a span node with an onmouseup attribute set a text value; and no events attached in the code behind; and an onkeyup attribute set to a text value', function() {
    it('a span node with an onmouseup attribute set a text value; and no events attached in the code behind; and an onkeyup attribute set to a text value should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span onmouseup='function(){}' onkeyup=''></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("137");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("137");
       expect(res).toBe("137,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("137");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

/*
describe('String Fail: span node with a mouseup event set in the code behind; without a keyup event set in the code behind; without an onkeyup attribute', function() {
    it('span node with a mouseup event set in the code behind; without a keyup event set in the code behind; without an onkeyup attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["mouseup"];
       span.setAttribute("onkeyup", "");
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       
       // document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' onkeyup='' data-ae_ev='mouseup'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("137");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("137");
       expect(res).toBe("137,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("137");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});
*/

/*
describe('String Fail: span node with a mouseup event set in the code behind; without a keyup event set in the code behind; with an onkeyup attribute set to a null value', function() {
    it('span node with a mouseup event set in the code behind; without a keyup event set in the code behind; with an onkeyup attribute set to a null value should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["mouseup"];
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       
       // document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' data-ae_ev='mouseup'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("137");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("137");
       expect(res).toBe("137,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("137");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});
*/

describe('String N/A: a span node with an onmouseup attribute set a null text value; an onmousedown attribute set a null text value; and no events attached in the code behind', function() {
    it('a span node with an onmouseup attribute set a null text value; an onmousedown attribute set a null text value; and no events attached in the code behind should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span onmouseup='' onmousedown=''></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("137");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("137");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("137");
       expect(res).toBe(null);
       // </variant3>
    });
});


describe('String Pass: span node with an onmouseup attribute set to a text value; and an onkeyup attribute set to a text value', function() {
    it('span node with an onmouseup attribute set to a text value; and an onkeyup attribute set to a text value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span onmouseup='function(){}' onkeydown='function(){}'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("137");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("137");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("137");
       expect(res).toBe(null);
       // </variant3>
    });
});

/*
describe('String Pass: span node with a mouseup and keyup events set in the code behind', function() {
    it('span node with a mouseup and keyup events set in the code behind should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["mousedown, keyup"];
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       
       // document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' data-ae_ev='mousedown,keyup'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("137");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("137");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("137");
       expect(res).toBe(null);
       // </variant3>
    });
});
*/

/*
describe('String Pass: span node with a mouseup event set in the code behind; and an onkeyup attribute set to a text value', function() {
    it('span node with a mouseup event set in the code behind; and an onkeyup attribute set to a text value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["mouseup"];
       span.setAttribute("onkeydown", "function() {}");
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       
       // document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' onkeydown='function(){}' data-ae_ev='mouseup'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("137");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("137");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("137");
       expect(res).toBe(null);
       // </variant3>
    });
});
*/

/*
describe('String Pass: span node with a keyup event set in the code behind; and an onmouseup attribute set to a text value', function() {
    it('span node with a keyup event set in the code behind; and an onmouseup attribute set to a text value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["keydown"];
       span.setAttribute("onmouseup", "function() {}");
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       
       // document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' onmouseup='function(){}' data-ae_ev='keydown'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("137");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("137");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("137");
       expect(res).toBe(null);
       // </variant3>
    });
});
*/

describe('String Fail: a span node with an onmouseup attribute set a text value; and no events attached in the code behind; without an onkeyup atttribute set to a text value', function() {
    it('a span node with an onmouseup attribute set a text value; and no events attached in the code behind; without an onkeyup event set to a text value should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span onmouseup='function(){}'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("137");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("137");
       expect(res).toBe("137,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("137");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a span node with an onmouseup attribute set a text value; and no events attached in the code behind; and an onkeyup attribute set to a text value', function() {
    it('a span node with an onmouseup attribute set a text value; and no events attached in the code behind; and an onkeyup attribute set to a text value should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span onmouseup='function(){}' onkeyup=''></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("137");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("137");
       expect(res).toBe("137,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("137");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

/*
describe('String Fail: span node with a mouseup event set in the code behind; without a keyup event set in the code behind; without an onkeydown attribute', function() {
    it('span node with a mouseup event set in the code behind; without a keyup event set in the code behind; without an onkeydown attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["mouseup"];
       span.setAttribute("onkeydown", "");
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       
       
       // document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' onkeydown='' data-ae_ev='mouseup'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("137");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("137");
       expect(res).toBe("137,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("137");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});
*/

/*
describe('String Fail: span node with a mouseup event set in the code behind; without a keyup event set in the code behind; with an onkeyup attribute set to a null value', function() {
    it('span node with a mouseup event set in the code behind; without a keyup event set in the code behind; with an onkeyup attribute set to a null value should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["mouseup"];
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       
       // document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' data-ae_ev='mouseup'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("137");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("137");
       expect(res).toBe("137,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("137");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});
*/