describe('String Pass: android.widget.ListView Appium XML transform with disabled attribute', function() {
    it('Appium XML transform with disabled attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div data-xmlnodetype="android.widget.ListView" data-resource-id="com.levelaccess.exampleandroidapp:id/fragmentListView" style="position:absolute;width:0px;height:357px;left:1080px;top:1794px;" disabled="disabled"></div>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	
        var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeAndroidUI_returnInstances_JSON([5]));
		expect(res.length).toBe(0);
    });
});

describe('String Fail: android.widget.ListView Appium XML transform without disabled attribute', function() {
    it('Appium XML transform without disabled attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div data-xmlnodetype="android.widget.ListView" data-resource-id="com.levelaccess.exampleandroidapp:id/fragmentListView" style="position:absolute;width:0px;height:357px;left:1080px;top:1794px;"></div>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	
		var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeAndroidUI_returnInstances_JSON([5]));
		expect(res.length).toBe(1);
		expect(res[0].testResult).toBe(3);
    });
});
