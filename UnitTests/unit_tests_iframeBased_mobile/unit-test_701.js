describe('String Pass: android.widget.DatePicker Appium XML transform with aria-label populated', function() {
    it('Appium XML transform with aria-label populated should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<input type="date" data-xmlnodetype="android.widget.DatePicker" aria-label="@content-desc" data-resource-id="@resource-id" data-xmlattmapping="content-desc:aria-label;bounds-width:css-width;bounds-height:css-height;bounds-x:css-top;bounds-y:css-left;" style="position:absolute;width:@width_px;height:@height_px;left:@x_px;top:@y_px;">';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	
        var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeAndroidUI_returnInstances_JSON());
		expect(res.length).toBe(0);
    });
});

describe('String Fail: android.widget.DatePicker Appium XML transform with aria-label empty', function() {
    it('Appium XML transform with aria-label empty should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<input type="date" data-xmlnodetype="android.widget.DatePicker" aria-label="" data-resource-id="@resource-id" data-xmlattmapping="content-desc:aria-label;bounds-width:css-width;bounds-height:css-height;bounds-x:css-top;bounds-y:css-left;" style="position:absolute;width:@width_px;height:@height_px;left:@x_px;top:@y_px;">';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	
		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeAndroidUI_returnInstances_JSON());
		expect(res.length).toBe(1);
		expect(res[0].testResult).toBe(0);
    });
});
