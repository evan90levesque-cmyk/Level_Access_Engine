describe('String N/A: span node with a role set to a text value that starts with presentation', function() {
    it('span node with a role set to a text value that starts with presentation should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='presentation'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("136");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("136");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("136");
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
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("136");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("136");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("136");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a span node with an onmouseout attribute set a null text value; and no events attached in the code behind', function() {
    it('a span node with an onmouseout attribute set a null text value; and no events attached in the code behind should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span onmouseout=''></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("136");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("136");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("136");
       expect(res).toBe(null);
       // </variant3>
    });
});


describe('String Pass: span node with an onmouseout attribute set to a text value; and an onblur attribute set to a text value', function() {
    it('span node with an onmouseout attribute set to a text value; and an onblur attribute set to a text value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span onmouseout='function(){}' onblur='function(){}'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("136");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("136");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("136");
       expect(res).toBe(null);
       // </variant3>
    });
});

/*
describe('String Pass: span node with a mouseout and blur events set in the code behind', function() {
    it('span node with a mouseout and blur events set in the code behind should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["mouseout","blur"];
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       
       // document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' data-ae_ev='mouseout,blur'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("136");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("136");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("136");
       expect(res).toBe(null);
       // </variant3>
    });
});
*/

/*
describe('String Pass: span node with a mouseout event set in the code behind; and an onblur attribute set to a text value', function() {
    it('span node with a mouseout event set in the code behind; and an onblur attribute set to a text value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["mouseout"];
       span.setAttribute("onblur", "function() {}");
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       
       // document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' onblur='function(){}' data-ae_ev='mouseout'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("136");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("136");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("136");
       expect(res).toBe(null);
       // </variant3>
    });
});
*/

/*
describe('String Pass: span node with a blur event set in the code behind; and an onmouseout attribute set to a text value', function() {
    it('span node with a blur event set in the code behind; and an onmouseout attribute set to a text value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["blur"];
       span.setAttribute("onmouseout", "function() {}");
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       
       // document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' onmouseout='function(){}' data-ae_ev='blur'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("136");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("136");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("136");
       expect(res).toBe(null);
       // </variant3>
    });
});
*/

describe('String Fail: a span node with an onmouseout attribute set a text value; and no events attached in the code behind; without an onblur atttribute set to a text value', function() {
    it('a span node with an onmouseout attribute set a text value; and no events attached in the code behind; without an onblur event set to a text value should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span onmouseout='function(){}'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("136");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("136");
       expect(res).toBe("136,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("136");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a span node with an onmouseout attribute set a text value; and no events attached in the code behind; and an onblur attribute set to a text value', function() {
    it('a span node with an onmouseout attribute set a text value; and no events attached in the code behind; and an onblur attribute set to a text value should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span onmouseout='function(){}' onblur=''></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("136");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("136");
       expect(res).toBe("136,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("136");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

/*
describe('String Fail: span node with a mouseout event set in the code behind; without a blur event set in the code behind; without an onblur attribute', function() {
    it('span node with a mouseout event set in the code behind; without a blur event set in the code behind; without an onblur attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["mouseout"];
       span.setAttribute("onblur", "");
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       
       // document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' onblur='' data-ae_ev='mouseout'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("136");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("136");
       expect(res).toBe("136,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("136");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});
*/

/*
describe('String Fail: span node with a mouseout event set in the code behind; without a blur event set in the code behind; with an onblur attribute set to a null value', function() {
    it('span node with a mouseout event set in the code behind; without a blur event set in the code behind; with an onblur attribute set to a null value should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["mouseout"];
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' data-ae_ev='mouseout'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("136");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("136");
       expect(res).toBe("136,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("136");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});
*/