describe('String Pass: android.widget.RadioButton Appium XML transform with aria-label populated', function() {
    it('Appium XML transform with aria-label populated should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div data-xmlnodetype="android.widget.RadioGroup" data-resource-id="com.levelaccess.exampleandroidapp:id/radioGroup" data-xmlattmapping="content-desc:aria-label;bounds-width:css-width;bounds-height:css-height;bounds-x:css-top;bounds-y:css-left;" role="radiogroup" aria-label="some label text" style="position:absolute;width:498px;height:1114px;left:582px;top:1366px;"><div role="radio" data-xmlnodetype="android.widget.RadioButton" aria-checked="true" data-resource-id="@resource-id" data-xmlattmapping="checked:aria-checked;content-desc:aria-label;text:title;bounds-width:css-width;bounds-height:css-height;bounds-x:css-top;bounds-y:css-left;" aria-label="@content-desc" title="@text"style="position:absolute;width:@width_px;height:@height_px;left:@x_px;top:@y_px;"></div></div>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	
        var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeAndroidUI_returnInstances_JSON());
		expect(res.length).toBe(0);
    });
});

describe('String Fail: android.widget.RadioButton Appium XML transform with aria-label and title empty', function() {
    it('Appium XML transform with aria-label and title empty should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div data-xmlnodetype="android.widget.RadioGroup" data-resource-id="com.levelaccess.exampleandroidapp:id/radioGroup" data-xmlattmapping="content-desc:aria-label;bounds-width:css-width;bounds-height:css-height;bounds-x:css-top;bounds-y:css-left;" role="radiogroup" aria-label="some label text" style="position:absolute;width:498px;height:1114px;left:582px;top:1366px;"><div role="radio" data-xmlnodetype="android.widget.RadioButton" aria-checked="true" data-resource-id="@resource-id" data-xmlattmapping="checked:aria-checked;content-desc:aria-label;text:title;bounds-width:css-width;bounds-height:css-height;bounds-x:css-top;bounds-y:css-left;" aria-label="" title=""style="position:absolute;width:@width_px;height:@height_px;left:@x_px;top:@y_px;"></div></div>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	
		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeAndroidUI_returnInstances_JSON());
		expect(res.length).toBe(1);
		expect(res[0].testResult).toBe(0);
    });
});
