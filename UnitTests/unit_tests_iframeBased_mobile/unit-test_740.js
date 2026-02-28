describe('String Pass: android.widget.Button Appium XML transform without disabled attribute', function() {
    it('Appium XML transform without disabled attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML='<button data-xmlnodetype="android.widget.Button" data-resource-id="com.levelaccess.exampleandroidapp:id/button" data-xmlattmapping="content-desc:aria-label;text:title;bounds-width:width;bounds-height:css-height;bounds-x:css-top;bounds-y:css-left;" aria-label="this is a label" title="" style="position:absolute;width:424px;height:1420px;left:655px;top:1546px;"></button>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	
        var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeAndroidUI_returnInstances_JSON());
		expect(res.length).toBe(0);
    });
});

describe('String Fail: android.widget.Button Appium XML transform with disabled attribute', function() {
    it('Appium XML transform with disabled attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<button data-xmlnodetype="android.widget.Button" data-resource-id="com.levelaccess.exampleandroidapp:id/button" data-xmlattmapping="content-desc:aria-label;text:title;bounds-width:width;bounds-height:css-height;bounds-x:css-top;bounds-y:css-left;" aria-label="this is a label" title="" style="position:absolute;width:424px;height:1420px;left:655px;top:1546px;" disabled="disabled"></button>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	
		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeAndroidUI_returnInstances_JSON());
		expect(res.length).toBe(1);
		expect(res[0].testResult).toBe(0);
    });
});

describe('String Fail: android.widget.ToggleButton Appium XML transform with disabled attribute and role set', function() {
    it('Appium XML transform with disabled attribute and role set should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div data-xmlnodetype="android.widget.ToggleButton" data-resource-id="com.levelaccess.exampleandroidapp:id/toggleButton2" data-xmlattmapping="content-desc:aria-label;bounds-width:css-width;bounds-height:css-height;bounds-x:css-top;bounds-y:css-left;" role="checkbox" aria-label="a toggle button you can turn on or off" aria-checked="false" title="" style="position:absolute;width:424px;height:715px;left:655px;top:841px;" disabled="disabled"></div>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	
		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeAndroidUI_returnInstances_JSON());
		expect(res.length).toBe(1);
		expect(res[0].testResult).toBe(0);
    });
});

describe('String Fail: android.widget.Switch Appium XML transform with disabled attribute and role set', function() {
    it('Appium XML transform with disabled attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div data-xmlnodetype="android.widget.Switch" data-resource-id="com.levelaccess.exampleandroidapp:id/sw1tch2" data-xmlattmapping="content-desc:aria-label;bounds-width:css-width;bounds-height:css-height;bounds-x:css-top;bounds-y:css-left;" role="checkbox" aria-label="a switch you can turn on or off" aria-checked="false" title="" style="position:absolute;width:479px;height:521px;left:601px;top:592px;" disabled="disabled"></div>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	
		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeAndroidUI_returnInstances_JSON());
		expect(res.length).toBe(1);
		expect(res[0].testResult).toBe(0);
    });
});

describe('String Fail: android.widget.CheckBox Appium XML transform with disabled attribute and role set', function() {
    it('Appium XML transform with disabled attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div data-xmlnodetype="android.widget.CheckBox" data-resource-id="com.levelaccess.exampleandroidapp:id/checkBox2" data-xmlattmapping="checked:aria-checked;content-desc:aria-label;bounds-width:css-width;bounds-height:css-height;bounds-x:css-top;bounds-y:css-left;" role="checkbox" aria-checked="false" aria-label="" title="Check me!" style="position:absolute;width:411px;height:1024px;left:668px;top:1108px;" disabled="disabled"></div>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	
		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeAndroidUI_returnInstances_JSON());
		expect(res.length).toBe(1);
		expect(res[0].testResult).toBe(0);
    });
});

describe('String Fail: android.widget.RadioButton Appium XML transform with disabled attribute and role set', function() {
    it('Appium XML transform with disabled attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div data-xmlnodetype="android.widget.RadioGroup" data-resource-id="com.levelaccess.exampleandroidapp:id/radioGroup" data-xmlattmapping="content-desc:aria-label;bounds-width:css-width;bounds-height:css-height;bounds-x:css-top;bounds-y:css-left;" role="radiogroup" aria-label="some label text" style="position:absolute;width:498px;height:1114px;left:582px;top:1366px;"><div data-xmlnodetype="android.widget.RadioButton" data-resource-id="com.levelaccess.exampleandroidapp:id/radioGroup2_radioButton" data-xmlattmapping="checked:aria-checked;content-desc:aria-label;bounds-width:css-width;bounds-height:css-height;bounds-x:css-top;bounds-y:css-left;" role="radio" aria-checked="false" aria-label="" title="Apple" style="position:absolute;width:450px;height:1103px;left:629px;top:1187px;" disabled="disabled"></div></div>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	
		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeAndroidUI_returnInstances_JSON());
		expect(res.length).toBe(1);
		expect(res[0].testResult).toBe(0);
    });
});

describe('String Fail: android.widget.VideoView Appium XML transform with disabled attribute', function() {
    it('Appium XML transform with disabled attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<video data-xmlnodetype="android.widget.VideoView" data-resource-id="com.levelaccess.exampleandroidapp:id/video" data-xmlattmapping="content-desc:aria-label;text:title;bounds-width:width;bounds-height:css-height;bounds-x:css-top;bounds-y:css-left;" aria-label="this is a label" title="" style="position:absolute;width:424px;height:1420px;left:655px;top:1546px;" disabled="disabled"></video>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	
		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeAndroidUI_returnInstances_JSON());
		expect(res.length).toBe(1);
		expect(res[0].testResult).toBe(0);
    });
});
