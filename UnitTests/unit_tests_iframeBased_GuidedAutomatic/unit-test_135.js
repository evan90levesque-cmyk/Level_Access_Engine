describe('String N/A: span node with a role set to a text value that starts with presentation', function() {
    it('span node with a role set to a text value that starts with presentation should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='presentation'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("135");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("135");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("135");
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
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("135");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("135");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("135");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a span node with an ondblclick attribute set a null text value; and no events attached in the code behind', function() {
    it('a span node with an ondblclick attribute set a null text value; and no events attached in the code behind should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span ondblclick=''></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("135");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("135");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("135");
       expect(res).toBe(null);
       // </variant3>
    });
});


describe('String Pass: span node with an ondblclick attribute set to a text value; and an onkeydown attribute set to a text value', function() {
    it('span node with an ondblclick attribute set to a text value; and an onkeydown attribute set to a text value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span ondblclick='function(){}' onkeydown='function(){}'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("135");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("135");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("135");
       expect(res).toBe(null);
       // </variant3>
    });
});

/*
describe('String Pass: span node with a dblclick and keydown events set in the code behind', function() {
    it('span node with a dblclick and keydown events set in the code behind should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["dblclick","keydown"];
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       
       //document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' data-ae_ev='dblclick,keydown'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("135");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("135");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("135");
       expect(res).toBe(null);
       // </variant3>
    });
});
*/

/*
describe('String Pass: span node with a dblclick event set in the code behind; and an onkeydown attribute set to a text value', function() {
    it('span node with a dblclick event set in the code behind; and an onkeydown attribute set to a text value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["dblclick"];
       span.setAttribute("onkeydown", "function() {}");
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       
       //document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' onkeydown='function(){}' data-ae_ev='dblclick'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("135");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("135");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("135");
       expect(res).toBe(null);
       // </variant3>
    });
});
*/

/*
describe('String Pass: span node with a keydown event set in the code behind; and an ondblclick attribute set to a text value', function() {
    it('span node with a keydown event set in the code behind; and an ondblclick attribute set to a text value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["keydown"];
       span.setAttribute("ondblclick", "function() {}");
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       
       //document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' ondblclick='function(){}' data-ae_ev='keydown'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("135");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("135");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("135");
       expect(res).toBe(null);
       // </variant3>
    });
});
*/

describe('String Fail: a span node with an ondblclick attribute set a text value; and no events attached in the code behind; without an onkeydown atttribute set to a text value', function() {
    it('a span node with an ondblclick attribute set a text value; and no events attached in the code behind; without an onkeydown event set to a text value should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span ondblclick='function(){}'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("135");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("135");
       expect(res).toBe("135,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("135");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a span node with an ondblclick attribute set a text value; and no events attached in the code behind; and an onkeydown attribute set to a text value', function() {
    it('a span node with an ondblclick attribute set a text value; and no events attached in the code behind; and an onkeydown attribute set to a text value should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span ondblclick='function(){}' onkeydown=''></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("135");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("135");
       expect(res).toBe("135,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("135");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

/*
describe('String Fail: span node with a dblclick event set in the code behind; without a keydown event set in the code behind; without an onkeydown attribute', function() {
    it('span node with a dblclick event set in the code behind; without a keydown event set in the code behind; without an onkeydown attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["dblclick"];
       span.setAttribute("onkeydown", "");
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       
       //document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' onkeydown='' data-ae_ev='dblclick'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("135");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("135");
       expect(res).toBe("135,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("135");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});
*/

/*
describe('String Fail: span node with a dblclick event set in the code behind; without a keydown event set in the code behind; with an onkeydown attribute set to a null value', function() {
    it('span node with a dblclick event set in the code behind; without a keydown event set in the code behind; with an onkeydown attribute set to a null value should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["dblclick"];
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       
       //document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' data-ae_ev='dblclick'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("135");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("135");
       expect(res).toBe("135,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("135");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});
*/