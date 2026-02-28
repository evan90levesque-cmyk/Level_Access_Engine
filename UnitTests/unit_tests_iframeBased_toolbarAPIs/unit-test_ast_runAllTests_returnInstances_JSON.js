describe('Test 1 - Testing ast_runAllTests_returnInstances_JSON for automatic and guided automatic results', function() {
    it('Test 1', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON();
       var resObj = JSON.parse(res);
       // alert(resObj);
       // automatic results
       expect(resObj.length).toBe(3); // removed code from a previous unit test which was causing a ghost issue
    });
});

describe('Test 2 - Testing the fingerprint in ast_runAllTests_returnInstances_JSON for automatic and guided automatic results', function() {
    it('Test 2', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON();
       var resObj = JSON.parse(res);
       var expOut = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
       expect(resObj[1].fingerprint.encoding = expOut);
    });
});

describe('Test 3 - Testing the fingerprint in ast_runAllTests_returnInstances_JSON for automatic and guided automatic results', function() {
    it('Test 3', function() {
       document.head.innerHTML = "";
       document.body.innerHTML = "<img src='#'>";
       document.querySelector("html").removeAttribute("lang");
       LevelAccess_AccessEngine.setWindowUnderTest(window);
       var res = LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON();
       var resObj = JSON.parse(res);
       var expOut = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 4, 7, 6, 6, 0, 3, 2, 6, 2, 0, 0, 2, 1, 4, 4, 0, 6, 8, 6, 0, 1, 0, 1, 5, 0, 9, 11];
       expect(resObj[2].fingerprint.encoding = expOut);
    });
});

describe('Test 4 - Verify support of non-standard HTML elements', function() {
    it('Test 4', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = '<unsupportedhtmlelement="isbad"></unsupportedhtmlelement="isbad">';
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        var res = LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON();
        var resObj = JSON.parse(res);
        expect(resObj.length).toBeGreaterThan(0);
    });
});

describe('ENG-985', function() {
    const totalAttributeCharacterBudget = 2000;
    const cssAttributeEntryRegex = /\[(.*?)="(.*?)"]/g;

    it(`verify the cumulative number of attribute characters across all element attributes is never greater than ${totalAttributeCharacterBudget}`, function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "<title>Title of the page.</title>";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img>";

        const img = document.querySelector("#testing").contentWindow.document.body.querySelector('img');
        const attributeNamesString = 'abcdefghijklmnopqrstuvwxyz123456789';
        for (const attributeName of attributeNamesString.split("")) {
            img.setAttribute(`_${attributeName}`, attributeNamesString + attributeNamesString);
        }  // (2 characters per attribute name + 70 characters per attribute value) * 35 attributes = 2520 cumulative characters, which is greater than totalAttributeCharacterBudget

        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        const res = LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON();
        const resObj = JSON.parse(res);

        const fingerprintCss = resObj[1].fingerprint.css;

        // verify only some attributes made it into the CSS selector
        const matchArrays = [...fingerprintCss.matchAll(cssAttributeEntryRegex)];
        expect(matchArrays.length).toEqual(Math.floor(totalAttributeCharacterBudget / (2 + 70)));
    });

    it('verify shorter CSS selectors contain all qualifying element attributes', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "<title>Title of the page.</title>";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img>";

        const img = document.querySelector("#testing").contentWindow.document.body.querySelector('img');
        const attributeNamesString = 'abcdefghijklmnopqrstuvwxyz';
        for (const attributeName of attributeNamesString.split("")) {
            img.setAttribute(attributeName, attributeNamesString);
        }  // (1 character per attribute name + 26 characters per attribute value) * 26 attributes = 702 cumulative characters, which is less than totalAttributeCharacterBudget

        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        const res = LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON();
        const resObj = JSON.parse(res);

        const fingerprintCss = resObj[1].fingerprint.css;

        // verify all attributes made it into the CSS selector
        const matchArrays = [...fingerprintCss.matchAll(cssAttributeEntryRegex)];
        expect(matchArrays.length).toEqual(attributeNamesString.length);
    });

    it('verify a CSS selector omits a really long attribute if there is no room for it', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "<title>Title of the page.</title>";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img>";

        const img = document.querySelector("#testing").contentWindow.document.body.querySelector('img');
        const attributeNamesString = 'abcdefghijklmnopqrstuvwxyz';
        for (const attributeName of attributeNamesString.split("")) {
            img.setAttribute(attributeName, attributeName);
        }  // (1 character per attribute name + 1 character per attribute value) * 26 attributes = 52 cumulative characters, which is much less than totalAttributeCharacterBudget

        // ...but then we add one additional attribute that has a value that in itself is equal to totalAttributeCharacterBudget
        const bigAttributeName = 'lengthboi';
        const bigAttributeValue = [...Array(totalAttributeCharacterBudget)].map(() => Math.random().toString(36)[2]).join('');  // source: https://stackoverflow.com/a/47496558
        img.setAttribute(bigAttributeName, bigAttributeValue);

        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        const res = LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON();
        const resObj = JSON.parse(res);

        const fingerprintCss = resObj[1].fingerprint.css;

        // verify only the attribute with the long value didn't make it into the CSS selector
        const matchArrays = [...fingerprintCss.matchAll(cssAttributeEntryRegex)];
        expect(matchArrays.length).toEqual(attributeNamesString.length);
    });
});