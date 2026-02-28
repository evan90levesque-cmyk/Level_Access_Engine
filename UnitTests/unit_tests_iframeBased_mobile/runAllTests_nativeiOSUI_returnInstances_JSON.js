describe('String Pass: nativeiOSUI called with no parameters runs only automatic tests', function() {
    it('nativeiOSUI called with no parameters runs only automatic tests should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML='<div data-xmlnodetype="XCUIElementTypeNavigationBar" data-resource-id="@label"  style="position:absolute;width:@width_px;height:@height_px;left:@x_px;top:@y_px;"></div><img src="@name" data-xmlnodetype="XCUIElementTypeImage" data-resource-id="@label" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="" style="position:absolute;width:@width_px;height:@height_px;left:@x_px;top:@y_px;"></img>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	
        var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeiOSUI_returnInstances_JSON());
        expect(res.length).toBe(1);
        expect(res[0].testResult).toBe(0);
    });
});

describe('String Pass: nativeiOSUI called with [4] runs only automatic tests', function() {
    it('nativeiOSUI called with [4] runs only automatic tests should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div data-xmlnodetype="XCUIElementTypeNavigationBar" data-resource-id="@label"  style="position:absolute;width:@width_px;height:@height_px;left:@x_px;top:@y_px;"></div><img src="@name" data-xmlnodetype="XCUIElementTypeImage" data-resource-id="@label" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="" style="position:absolute;width:@width_px;height:@height_px;left:@x_px;top:@y_px;"></img>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	
        var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeiOSUI_returnInstances_JSON([4]));
        expect(res.length).toBe(1);
		expect(res[0].testResult).toBe(0);
    });
});

describe('String Pass: nativeiOSUI called with [5] runs only guided automatic tests', function() {
    it('nativeiOSUI called with [5] runs only guided automatic tests should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div data-xmlnodetype="XCUIElementTypeNavigationBar" data-resource-id="@label"  style="position:absolute;width:@width_px;height:@height_px;left:@x_px;top:@y_px;"></div><img src="@name" data-xmlnodetype="XCUIElementTypeImage" data-resource-id="@label" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="" style="position:absolute;width:@width_px;height:@height_px;left:@x_px;top:@y_px;"></img>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	
        var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeiOSUI_returnInstances_JSON([5]));
        expect(res.length).toBe(1);
        expect(res[0].testResult).toBe(3);
    });
});

describe('String Pass: nativeiOSUI called with [4,5] runs both automatic and guided automatic tests', function() {
    it('nativeiOSUI called with [4,5] runs both automatic and aguided automatic tests should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div data-xmlnodetype="XCUIElementTypeNavigationBar" data-resource-id="@label"  style="position:absolute;width:@width_px;height:@height_px;left:@x_px;top:@y_px;"></div><img src="@name" data-xmlnodetype="XCUIElementTypeImage" data-resource-id="@label" data-xmlattmapping="label:aria-label;width:css-width;height:css-height;x:css-top;y:css-left;" aria-label="" style="position:absolute;width:@width_px;height:@height_px;left:@x_px;top:@y_px;"></img>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	
        var res = JSON.parse(LevelAccess_AccessEngine.runAllTests_nativeiOSUI_returnInstances_JSON([4,5]));
        expect(res.length).toBe(2);
        expect(res[0].testResult).toBe(3);
        expect(res[1].testResult).toBe(0);
    });
});
