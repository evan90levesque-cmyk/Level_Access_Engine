describe('String Pass: android.widget.CheckBox Appium XML transform with aria-label populated', function() {
    it('Appium XML transform with aria-label populated should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div role="checkbox" data-xmlnodetype="android.widget.CheckBox" data-resource-id="@resource-id" data-xmlattmapping="checked:aria-checked;content-desc:aria-label;text:title;bounds-width:css-width;bounds-height:css-height;bounds-x:css-top;bounds-y:css-left;" aria-label="@content-desc" aria-checked="true" title="@text" style="position:absolute;width:@width_px;height:@height_px;left:@x_px;top:@y_px;"></div>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	
        var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeAndroidUI_returnInstances_JSON());
		expect(res.length).toBe(0);
    });
});

describe('String Fail: android.widget.CheckBox Appium XML transform with aria-label and title empty', function() {
    it('Appium XML transform with aria-label and title empty should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div role="checkbox" data-xmlnodetype="android.widget.CheckBox" data-resource-id="@resource-id" data-xmlattmapping="checked:aria-checked;content-desc:aria-label;text:title;bounds-width:css-width;bounds-height:css-height;bounds-x:css-top;bounds-y:css-left;" aria-label="" aria-checked="true" title="" style="position:absolute;width:@width_px;height:@height_px;left:@x_px;top:@y_px;"></div>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	
		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeAndroidUI_returnInstances_JSON());
		expect(res.length).toBe(1);
		expect(res[0].testResult).toBe(0);
    });
});
