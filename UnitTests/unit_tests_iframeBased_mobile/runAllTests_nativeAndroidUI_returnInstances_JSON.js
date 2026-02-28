describe('String Pass: nativeAndroidUI called with no parameters runs only automatic tests', function() {
    it('nativeAndroidUI called with no parameters runs only automatic tests should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div data-xmlnodetype="android.widget.ListView" data-resource-id="com.levelaccess.exampleandroidapp:id/fragmentListView" style="position:absolute;width:0px;height:357px;left:1080px;top:1794px;"></div><button data-xmlnodetype="android.widget.Button" data-resource-id="com.levelaccess.exampleandroidapp:id/button" data-xmlattmapping="content-desc:aria-label;text:title;bounds-width:width;bounds-height:css-height;bounds-x:css-top;bounds-y:css-left;" aria-label="this is a label" title="" style="position:absolute;width:424px;height:1420px;left:655px;top:1546px;" disabled="disabled"></button>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	
        var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeAndroidUI_returnInstances_JSON());
        expect(res.length).toBe(1);
        expect(res[0].testResult).toBe(0);
    });
});

describe('String Pass: nativeAndroidUI called with [4] runs only automatic tests', function() {
    it('nativeAndroidUI called with [4] runs only automatic tests should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div data-xmlnodetype="android.widget.ListView" data-resource-id="com.levelaccess.exampleandroidapp:id/fragmentListView" style="position:absolute;width:0px;height:357px;left:1080px;top:1794px;"></div><button data-xmlnodetype="android.widget.Button" data-resource-id="com.levelaccess.exampleandroidapp:id/button" data-xmlattmapping="content-desc:aria-label;text:title;bounds-width:width;bounds-height:css-height;bounds-x:css-top;bounds-y:css-left;" aria-label="this is a label" title="" style="position:absolute;width:424px;height:1420px;left:655px;top:1546px;" disabled="disabled"></button>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	
        var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeAndroidUI_returnInstances_JSON([4]));
        expect(res.length).toBe(1);
		expect(res[0].testResult).toBe(0);
    });
});

describe('String Pass: nativeAndroidUI called with [5] runs only guided automatic tests', function() {
    it('nativeAndroidUI called with [5] runs only guided automatic tests should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div data-xmlnodetype="android.widget.ListView" data-resource-id="com.levelaccess.exampleandroidapp:id/fragmentListView" style="position:absolute;width:0px;height:357px;left:1080px;top:1794px;"></div><button data-xmlnodetype="android.widget.Button" data-resource-id="com.levelaccess.exampleandroidapp:id/button" data-xmlattmapping="content-desc:aria-label;text:title;bounds-width:width;bounds-height:css-height;bounds-x:css-top;bounds-y:css-left;" aria-label="this is a label" title="" style="position:absolute;width:424px;height:1420px;left:655px;top:1546px;" disabled="disabled"></button>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	
        var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeAndroidUI_returnInstances_JSON([5]));
        expect(res.length).toBe(1);
        expect(res[0].testResult).toBe(3);
    });
});

describe('String Pass: nativeAndroidUI called with [4,5] runs both automatic and guided automatic tests', function() {
    it('nativeAndroidUI called with [4,5] runs both automatic and aguided automatic tests should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div data-xmlnodetype="android.widget.ListView" data-resource-id="com.levelaccess.exampleandroidapp:id/fragmentListView" style="position:absolute;width:0px;height:357px;left:1080px;top:1794px;"></div><button data-xmlnodetype="android.widget.Button" data-resource-id="com.levelaccess.exampleandroidapp:id/button" data-xmlattmapping="content-desc:aria-label;text:title;bounds-width:width;bounds-height:css-height;bounds-x:css-top;bounds-y:css-left;" aria-label="this is a label" title="" style="position:absolute;width:424px;height:1420px;left:655px;top:1546px;" disabled="disabled"></button>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	
        var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeAndroidUI_returnInstances_JSON([4,5]));
        expect(res.length).toBe(2);
        expect(res[0].testResult).toBe(3);
        expect(res[1].testResult).toBe(0);
    });
});
