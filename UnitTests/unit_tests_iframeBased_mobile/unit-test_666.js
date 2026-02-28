describe('String Pass: XCUIElementTypePicker Appium XML transform with aria-label populated', function() {
    it('Appium XML transform with aria-label populated should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<select data-xmlnodetype="XCUIElementTypePicker" data-resource-id="@label" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="@label" style="position:absolute;width:@width_px;height:@height_px;left:@x_px;top:@y_px;"></select>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	
		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeiOSUI_returnInstances_JSON());
		expect(res.length).toBe(0);
    });
});

describe('String Fail: XCUIElementTypePicker Appium XML transform with aria-label empty', function() {
    it('Appium XML transform with aria-label empty should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<select data-xmlnodetype="XCUIElementTypePicker" data-resource-id="@label" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="" style="position:absolute;width:@width_px;height:@height_px;left:@x_px;top:@y_px;"></select>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	
		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeiOSUI_returnInstances_JSON());
		expect(res.length).toBe(1);
		expect(res[0].testResult).toBe(0);
    });
});
