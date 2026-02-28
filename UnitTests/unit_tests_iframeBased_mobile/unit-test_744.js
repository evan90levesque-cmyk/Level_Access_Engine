describe('String Pass: XCUIElementTypeNavigationBar Appium XML transform with child node present"', function() {
    it('Appium XML transform with child node present should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML='<div data-xmlnodetype="XCUIElementTypeNavigationBar" data-resource-id="@label"  style="position:absolute;width:@width_px;height:@height_px;left:@x_px;top:@y_px;"><div data-xmlnodetype="XCUIElementTypeOther" data-resource-id="@label" style="position:absolute;width:@width_px;height:@height_px;left:@x_px;top:@y_px;"></div></div>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	
        var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeiOSUI_returnInstances_JSON([5]));
		expect(res.length).toBe(0);
    });
});

describe('String Fail: XCUIElementTypeNavigationBar Appium XML transform with no child node present', function() {
    it('Appium XML transform with no child node present should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML='<div data-xmlnodetype="XCUIElementTypeNavigationBar" data-resource-id="@label"  style="position:absolute;width:@width_px;height:@height_px;left:@x_px;top:@y_px;"></div>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	
		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeiOSUI_returnInstances_JSON([5]));
		expect(res.length).toBe(1);
		expect(res[0].testResult).toBe(3);
    });
});
