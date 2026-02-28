const testDivPassForASingleRoleAttribute = (roleName) => {
    it(`a div node with a role attribute set to "${roleName}" should be equal to pass`, function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = `<div role='${roleName}'>`;
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        // <variant1>
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("412");
        expect(res).toBe('pass');
        // </variant1>
        // <variant2>
        res = LevelAccess_AccessEngine.runTest_returnNumbers("412");
        expect(res).toBe("");       
        // </variant2>
        // <variant3>
        res = LevelAccess_AccessEngine.runTest_returnInstances("412");
        expect(res).toBe(null);
        // </variant3>
     });

}

describe('String N/A: no nodes', function() {
    it('no nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("412");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("412");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("412");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a input node with a type="checkbox" attribute and a role="cat" not visible', function() {
    it('a input node with a type="checkbox" attribute and a role="cat" not visible should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='checkbox' style='display:none' role='cat'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("412");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("412");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("412");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: an input node without a role attribute', function() {
    it('an input node without a role attribute should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='checkbox' style='display:none' role='checkbox'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("412");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("412");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("412");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: an input node with a role attribute set to a null value', function() {
    it('an input node with a role attribute set to a null value should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='checkbox' role=''>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("412");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("412");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("412");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: an input node with a role attribute set to "checkbox"', function() {
    it('an input node with a role attribute set to "checkbox" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='checkbox' role='checkbox'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("412");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("412");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("412");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: an input node with a role attribute set to "menuitemcheckbox"', function() {
    it('an input node with a role attribute set to "menuitemcheckbox" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='checkbox' role='menuitemcheckbox'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("412");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("412");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("412");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a div node with a role attribute set to "text"', function() {
    it('a div node with a role attribute set to "text" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div role='text'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("412");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("412");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("412");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a span node with a role attribute set to "text"', function() {
    it('a span with a role attribute set to "text" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='text'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("412");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("412");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("412");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a p node with a role attribute set to "text"', function() {
    it('an p node with a role attribute set to "text" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p role='text'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("412");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("412");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("412");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a div node with a role attribute set to "associationlist"', function() {
    testDivPassForASingleRoleAttribute("associationlist");
});

describe('String Pass: a div node with a role attribute set to "associationlistitemkey"', function() {
    testDivPassForASingleRoleAttribute("associationlistitemkey");
});

describe('String Pass: a div node with a role attribute set to "associationlistitemvalue"', function() {
    testDivPassForASingleRoleAttribute("associationlistitemvalue");
});

describe('String Pass: a div node with a role attribute set to "blockquote"', function() {
    testDivPassForASingleRoleAttribute("blockquote");
});

describe('String Pass: a div node with a role attribute set to "caption"', function() {
    testDivPassForASingleRoleAttribute("caption");
});

describe('String Pass: a div node with a role attribute set to "code"', function() {
    testDivPassForASingleRoleAttribute("code");
});

describe('String Pass: a div node with a role attribute set to "comment"', function() {
    testDivPassForASingleRoleAttribute("comment");
});

describe('String Pass: a div node with a role attribute set to "deletion"', function() {
    testDivPassForASingleRoleAttribute("deletion");
});

describe('String Pass: a div node with a role attribute set to "emphasis"', function() {
    testDivPassForASingleRoleAttribute("emphasis");
});

describe('String Pass: a div node with a role attribute set to "image"', function() {
    testDivPassForASingleRoleAttribute("image");
});

describe('String Pass: a div node with a role attribute set to "insertion"', function() {
    testDivPassForASingleRoleAttribute("insertion");
});

describe('String Pass: a div node with a role attribute set to "mark"', function() {
    testDivPassForASingleRoleAttribute("mark");
});

describe('String Pass: a div node with a role attribute set to "meter"', function() {
    testDivPassForASingleRoleAttribute("meter");
});

describe('String Pass: a div node with a role attribute set to "paragraph"', function() {
    testDivPassForASingleRoleAttribute("paragraph");
});

describe('String Pass: a div node with a role attribute set to "strong"', function() {
    testDivPassForASingleRoleAttribute("strong");
});

describe('String Pass: a div node with a role attribute set to "subscript"', function() {
    testDivPassForASingleRoleAttribute("subscript");
});

describe('String Pass: a div node with a role attribute set to "suggestion"', function() {
    testDivPassForASingleRoleAttribute("suggestion");
});

describe('String Pass: a div node with a role attribute set to "superscript"', function() {
    testDivPassForASingleRoleAttribute("superscript");
});

describe('String Pass: a div node with a role attribute set to "time"', function() {
    testDivPassForASingleRoleAttribute("time");
});

describe('String Fail: a div node with a role="cat"', function() {
    it('a div node with a role="cat" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div role='cat'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("412");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("412");
       expect(res).toBe("412,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("412");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a label node with a role="cat"', function() {
    it('a label node with a role="cat" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<label role='cat'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("412");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("412");
       expect(res).toBe("412,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("412");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a label node with a role="text"', function() {
    it('a label node with a role="text" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<label role='text'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("412");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("412");
       expect(res).toBe("412,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("412");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a input node with a role="cat"', function() {
    it('a input node with a role="cat" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='checkbox' role='cat'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("412");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("412");
       expect(res).toBe("412,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("412");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a input node with a role="inpu"', function() {
    it('a input node with a role="inpu" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='checkbox' role='inpu'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("412");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("412");
       expect(res).toBe("412,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("412");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a div node with a role="roletype"', function() {
    it('a div node with a role="roletype" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div role='roletype'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("412");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("412");
       expect(res).toBe("412,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("412");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a div node with a role="generic"', function() {
    it('a div node with a role="generic" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div role='generic'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("412");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("412");
       expect(res).toBe("412,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("412");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});