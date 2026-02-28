// "overlapping" in this context refers to an element being less than 6 units (as implicitly defined by ALLOWED_MARGIN in Test_745.js) from another element that is also in the testing scope of Test 745

describe('String Pass: XCUIElementTypeButton Appium XML transform not overlapping with another XCUIElementTypeButton', function() {
	it('Appium XML transform not close to overlapping with another element should be equal to pass', function() {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<button data-xmlnodetype="XCUIElementTypeButton" data-resource-id="Level Access Accessibility Identifier" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="Level Access Accessibility Label" style="position:absolute;width:100px;height:100px;left:100px;top:100px;"></button><button data-xmlnodetype="XCUIElementTypeButton" data-resource-id="Level Access Accessibility Identifier" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="Level Access Accessibility Label" style="position:absolute;width:100px;height:100px;left:300px;top:300px;"></button>';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeiOSUI_returnInstances_JSON([5]));
		expect(res.length).toBe(0);
	});

	it('Appium XML transform close to (but not) overlapping with another element should be equal to pass', function() {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<button data-xmlnodetype="XCUIElementTypeButton" data-resource-id="Level Access Accessibility Identifier" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="Level Access Accessibility Label" style="position:absolute;width:100px;height:100px;left:0;top:0;"></button><button data-xmlnodetype="XCUIElementTypeButton" data-resource-id="Level Access Accessibility Identifier" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="Level Access Accessibility Label" style="position:absolute;width:100px;height:100px;left:108px;top:108px;"></button>';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeiOSUI_returnInstances_JSON([5]));
		expect(res.length).toBe(0);
	});
});

describe('String Pass: XCUIElementTypeButton Appium XML transform is exactly next to another XCUIElementTypeButton', function() {
	it('Appium XML transform exactly next to another element horizontally should be equal to pass', function() {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<button data-xmlnodetype="XCUIElementTypeButton" data-resource-id="Level Access Accessibility Identifier" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="Level Access Accessibility Label" style="position:absolute;width:100px;height:100px;left:0;top:0;"></button><button data-xmlnodetype="XCUIElementTypeButton" data-resource-id="Level Access Accessibility Identifier" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="Level Access Accessibility Label" style="position:absolute;width:100px;height:100px;left:106px;top:0;"></button>';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeiOSUI_returnInstances_JSON([5]));
		expect(res.length).toBe(0);
	});

	it('Appium XML transform exactly next to another element vertically should be equal to pass', function() {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<button data-xmlnodetype="XCUIElementTypeButton" data-resource-id="Level Access Accessibility Identifier" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="Level Access Accessibility Label" style="position:absolute;width:100px;height:100px;left:0;top:0;"></button><button data-xmlnodetype="XCUIElementTypeButton" data-resource-id="Level Access Accessibility Identifier" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="Level Access Accessibility Label" style="position:absolute;width:100px;height:100px;left:0;top:106px;"></button>';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeiOSUI_returnInstances_JSON([5]));
		expect(res.length).toBe(0);
	});
});

describe('String Fail: XCUIElementTypeButton Appium XML transform overlaps with another XCUIElementTypeButton', function() {
	it('Appium XML transform top overlapping with another element should be equal to fail', function() {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<button data-xmlnodetype="XCUIElementTypeButton" data-resource-id="Level Access Accessibility Identifier" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="Level Access Accessibility Label" style="position:absolute;width:100px;height:100px;left:0;top:50px;"></button><button data-xmlnodetype="XCUIElementTypeButton" data-resource-id="Level Access Accessibility Identifier" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="Level Access Accessibility Label" style="position:absolute;width:100px;height:100px;left:0;top:0;"></button>';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeiOSUI_returnInstances_JSON([5]));
		expect(res.length).toBe(2);
	});

	it('Appium XML transform bottom overlapping with another element should be equal to fail', function() {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<button data-xmlnodetype="XCUIElementTypeButton" data-resource-id="Level Access Accessibility Identifier" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="Level Access Accessibility Label" style="position:absolute;width:100px;height:100px;left:0;top:0;"></button><button data-xmlnodetype="XCUIElementTypeButton" data-resource-id="Level Access Accessibility Identifier" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="Level Access Accessibility Label" style="position:absolute;width:100px;height:100px;left:0;top:50px;"></button>';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeiOSUI_returnInstances_JSON([5]));
		expect(res.length).toBe(2);
	});

	it('Appium XML transform right overlapping with another element should be equal to fail', function() {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<button data-xmlnodetype="XCUIElementTypeButton" data-resource-id="Level Access Accessibility Identifier" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="Level Access Accessibility Label" style="position:absolute;width:100px;height:100px;left:50px;top:0;"></button><button data-xmlnodetype="XCUIElementTypeButton" data-resource-id="Level Access Accessibility Identifier" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="Level Access Accessibility Label" style="position:absolute;width:100px;height:100px;left:0;top:0;"></button>';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeiOSUI_returnInstances_JSON([5]));
		expect(res.length).toBe(2);
	});

	it('Appium XML transform left overlapping with another element should be equal to fail', function() {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<button data-xmlnodetype="XCUIElementTypeButton" data-resource-id="Level Access Accessibility Identifier" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="Level Access Accessibility Label" style="position:absolute;width:100px;height:100px;left:0;top:0;"></button><button data-xmlnodetype="XCUIElementTypeButton" data-resource-id="Level Access Accessibility Identifier" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="Level Access Accessibility Label" style="position:absolute;width:100px;height:100px;left:50px;top:0;"></button>';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeiOSUI_returnInstances_JSON([5]));
		expect(res.length).toBe(2);
	});

	it('Appium XML transform left overlapping (but just barely) with another element should be equal to fail', function() {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<button data-xmlnodetype="XCUIElementTypeButton" data-resource-id="Level Access Accessibility Identifier" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="Level Access Accessibility Label" style="position:absolute;width:100px;height:100px;left:0;top:0;"></button><button data-xmlnodetype="XCUIElementTypeButton" data-resource-id="Level Access Accessibility Identifier" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="Level Access Accessibility Label" style="position:absolute;width:100px;height:100px;left:104px;top:0;"></button>';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeiOSUI_returnInstances_JSON([5]));
		expect(res.length).toBe(2);
	});

	it('Appium XML transform compound overlapping with another element should be equal to fail', function() {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<button data-xmlnodetype="XCUIElementTypeButton" data-resource-id="Level Access Accessibility Identifier" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="Level Access Accessibility Label" style="position:absolute;width:100px;height:100px;left:0;top:0;"></button><button data-xmlnodetype="XCUIElementTypeButton" data-resource-id="Level Access Accessibility Identifier" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="Level Access Accessibility Label" style="position:absolute;width:100px;height:100px;left:50px;top:50px;"></button>';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeiOSUI_returnInstances_JSON([5]));
		expect(res.length).toBe(2);
	});

	it('Appium XML transform compound overlapping with two other elements should be equal to fail', function() {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<button data-xmlnodetype="XCUIElementTypeButton" data-resource-id="Level Access Accessibility Identifier" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="Level Access Accessibility Label" style="position:absolute;width:100px;height:100px;left:0;top:0;"></button><button data-xmlnodetype="XCUIElementTypeButton" data-resource-id="Level Access Accessibility Identifier" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="Level Access Accessibility Label" style="position:absolute;width:100px;height:100px;left:25px;top:25px;"></button><button data-xmlnodetype="XCUIElementTypeButton" data-resource-id="Level Access Accessibility Identifier" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="Level Access Accessibility Label" style="position:absolute;width:100px;height:100px;left:50px;top:50px;"></button>';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeiOSUI_returnInstances_JSON([5]));
		expect(res.length).toBe(3);
	});

	it('Appium XML transform compound overlapping with another element in the same XCUIElementTypeScrollView should be equal to fail', function() {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div data-xmlnodetype="XCUIElementTypeScrollView" data-resource-id="" style="position:absolute;width:500px;height:500px;left:0;top:0;"><button data-xmlnodetype="XCUIElementTypeButton" data-resource-id="Level Access Accessibility Identifier" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="Level Access Accessibility Label" style="position:absolute;width:100px;height:100px;left:0;top:0;"></button><button data-xmlnodetype="XCUIElementTypeButton" data-resource-id="Level Access Accessibility Identifier" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="Level Access Accessibility Label" style="position:absolute;width:100px;height:100px;left:50px;top:50px;"></button></div>';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeiOSUI_returnInstances_JSON([5]));
		expect(res.length).toBe(2);
	});

	it('Appium XML transform compound overlapping with another element in the same XCUIElementTypeScrollView and another element outside that XCUIElementTypeScrollView should be equal to fail, but yield only two overlaps', function() {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div data-xmlnodetype="XCUIElementTypeScrollView" data-resource-id="" style="position:absolute;width:500px;height:500px;left:0;top:0;"><button data-xmlnodetype="XCUIElementTypeButton" data-resource-id="Level Access Accessibility Identifier" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="Level Access Accessibility Label" style="position:absolute;width:100px;height:100px;left:0;top:0;"></button><button data-xmlnodetype="XCUIElementTypeButton" data-resource-id="Level Access Accessibility Identifier" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="Level Access Accessibility Label" style="position:absolute;width:100px;height:100px;left:50px;top:50px;"></button></div><button data-xmlnodetype="XCUIElementTypeButton" data-resource-id="Level Access Accessibility Identifier" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="Level Access Accessibility Label" style="position:absolute;width:100px;height:100px;left:50px;top:50px;"></button>';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeiOSUI_returnInstances_JSON([5]));
		expect(res.length).toBe(2);
	});
});
