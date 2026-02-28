describe('String N/A: no fieldset nodes', function() {
    it('no fieldset nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("738");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("738");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("738");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: fieldset node with style set to a "display:none" text value', function() {
    it('fieldset node with style set to a "display:none" text value should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div><fieldset style='display:none'><legend>This is a legend</legend><label for='areacode'>First</label><input type='text' id='areacode' name='areacode'></fieldset></div>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("738");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("738");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("738");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: fieldset node with a role set to a text value that starts with presentation', function() {
    it('fieldset node with a role set to a text value that starts with presentation should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<fieldset role='presentation'><legend>This is a legend</legend><label for='areacode'>First</label><input type='text' id='areacode' name='areacode'></fieldset>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("738");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("738");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("738");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: fieldset node with a legend as the first child node', function() {
    it('fieldset node with a legend as the first child node should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<fieldset><legend>This is a legend</legend><label for='areacode'>First</label><input type='text' id='areacode' name='areacode'></fieldset>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("738");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("738");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("738");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: fieldset node with legend as second node', function() {
    it('fieldset node with legend as second node should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<fieldset><label for='areacode'>First</label><legend>This is a legend</legend><input type='text' id='areacode' name='areacode'></fieldset>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("738");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("738");
       expect(res).toBe("738,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("738");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: fieldset node with legend nested within first node', function() {
    it('fieldset node with legend nested within first node should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<fieldset><div><legend>This is a legend</legend></div><label for='areacode'>First</label><input type='text' id='areacode' name='areacode'></fieldset>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("738");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("738");
       expect(res).toBe("738,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("738");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: fieldset node with legend nested within second node', function() {
    it('fieldset node with legend nested within second node should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<fieldset><label for='areacode'>First</label><div><legend>This is a legend</legend></div><input type='text' id='areacode' name='areacode'></fieldset>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("738");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("738");
       expect(res).toBe("738,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("738");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});