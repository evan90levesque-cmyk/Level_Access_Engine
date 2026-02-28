describe('String Pass: XCUIElementTypeButton Appium XML transform > 44 units in width and height', function() {
	it('Appium XML transform > 44 units in width and height should be equal to pass', function() {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<button data-xmlnodetype="XCUIElementTypeButton" data-resource-id="Level Access Accessibility Identifier" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="Level Access Accessibility Label" style="position:absolute;width:66px;height:66px;left:0;top:0;"></button>';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeiOSUI_returnInstances_JSON([5]));
		expect(res.length).toBe(0);
	});
});

describe('String Pass: XCUIElementTypeOther wrapping XCUIElementTypeSearchField > 44 units in width and height, but wrapped XCUIElementTypeSearchField is < 44 units', function() {
	it('Appium XML transform > 44 units in width and height should be equal to pass', function() {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div data-xmlnodetype="XCUIElementTypeOther" data-resource-id="" style="position:absolute;width:414px;height:57px;left:0;top:0;"><input data-xmlnodetype="XCUIElementTypeSearchField" data-resource-id="" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" type="search" style="position:absolute;width:398px;height:37px;left:8px;top:10px;" /></div>';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeiOSUI_returnInstances_JSON([5]));
		expect(res.length).toBe(0);
	});
});

describe('String Pass: XCUIElementTypeButton Appium XML transform = 44 units in width and height', function() {
    it('Appium XML transform = 44 units in width and height should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<button data-xmlnodetype="XCUIElementTypeButton" data-resource-id="Level Access Accessibility Identifier" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="Level Access Accessibility Label" style="position:absolute;width:44px;height:44px;left:0;top:0;"></button>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	
        var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeiOSUI_returnInstances_JSON([5]));
		expect(res.length).toBe(0);
    });
});

describe('String Fail: XCUIElementTypeButton Appium XML transform < 44 units in width', function() {
    it('Appium XML transform < 44 units in width should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<button data-xmlnodetype="XCUIElementTypeButton" data-resource-id="Level Access Accessibility Identifier" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="Level Access Accessibility Label" style="position:absolute;width:22px;height:44px;left:0;top:0;"></button>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	
		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeiOSUI_returnInstances_JSON([5]));
		expect(res.length).toBe(1);
		expect(res[0].testResult).toBe(3);
    });
});

describe('String Fail: XCUIElementTypeButton Appium XML transform < 44 units in height', function() {
	it('Appium XML transform < 44 units in height should be equal to fail', function() {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<button data-xmlnodetype="XCUIElementTypeButton" data-resource-id="Level Access Accessibility Identifier" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="Level Access Accessibility Label" style="position:absolute;width:44px;height:22px;left:0;top:0;"></button>';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeiOSUI_returnInstances_JSON([5]));
		expect(res.length).toBe(1);
		expect(res[0].testResult).toBe(3);
	});
});

describe('String Fail: XCUIElementTypeButton Appium XML transform < 44 units in width and height', function() {
	it('Appium XML transform < 44 units in width and height should be equal to fail', function() {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<button data-xmlnodetype="XCUIElementTypeButton" data-resource-id="Level Access Accessibility Identifier" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="Level Access Accessibility Label" style="position:absolute;width:22px;height:22px;left:0;top:0;"></button>';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeiOSUI_returnInstances_JSON([5]));
		expect(res.length).toBe(1);
		expect(res[0].testResult).toBe(3);
	});
});
