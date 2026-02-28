describe('String Pass: android.widget.VideoView Appium XML transform with aria-label populated', function() {
    it('Appium XML transform with aria-label populated should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<video data-xmlnodetype="android.widget.VideoView" data-resource-id="@resource-id" data-xmlattmapping="content-desc:aria-label;bounds-width:css-width;bounds-height:css-height;bounds-x:css-top;bounds-y:css-left;" aria-label="@content-desc" style="position:absolute;width:@width_px;height:@height_px;left:@x_px;top:@y_px;"></video>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	
		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeAndroidUI_returnInstances_JSON());
		expect(res.length).toBe(0);
    });
});

describe('String Fail: android.widget.VideoView Appium XML transform with aria-label empty', function() {
    it('Appium XML transform with aria-label empty should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<video data-xmlnodetype="android.widget.VideoView" data-resource-id="@resource-id" data-xmlattmapping="content-desc:aria-label;bounds-width:css-width;bounds-height:css-height;bounds-x:css-top;bounds-y:css-left;" aria-label="" style="position:absolute;width:@width_px;height:@height_px;left:@x_px;top:@y_px;"></video>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	
		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeAndroidUI_returnInstances_JSON());
		expect(res.length).toBe(1);
		expect(res[0].testResult).toBe(0);
    });
});
