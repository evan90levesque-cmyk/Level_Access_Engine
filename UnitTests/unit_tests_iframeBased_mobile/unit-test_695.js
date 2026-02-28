describe('String Pass: android.widget.Button Appium XML transform with aria-label populated', function() {
    it('Appium XML transform with aria-label populated should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<button data-xmlnodetype="android.widget.Button" data-resource-id="@resource-id" data-xmlattmapping="text:title;label:aria-label;bounds-width:css-width;bounds-height:css-height;bounds-x:css-top;bounds-y:css-left;" aria-label="@label" title="@text" style="position:absolute;width:@width_px;height:@height_px;left:@x_px;top:@y_px;"></button>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	
		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeAndroidUI_returnInstances_JSON());
		expect(res.length).toBe(0);
    });
});

describe('String Fail: android.widget.Button Appium XML transform with aria-label and title empty', function() {
    it('Appium XML transform with aria-label and title empty should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<button data-xmlnodetype="android.widget.Button" data-resource-id="@resource-id" data-xmlattmapping="text:title;label:aria-label;bounds-width:css-width;bounds-height:css-height;bounds-x:css-top;bounds-y:css-left;" aria-label="" title="" style="position:absolute;width:@width_px;height:@height_px;left:@x_px;top:@y_px;"></button>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	
		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeAndroidUI_returnInstances_JSON());
		expect(res.length).toBe(1);
		expect(res[0].testResult).toBe(0);
    });
});
