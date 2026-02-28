describe('calcAccessibleName_a18: complex A element from http://www.realtor.com/realestateandhomes-search/94710', function() {
    it('complex A element from http://www.realtor.com/realestateandhomes-search/94710 should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = '<a id="test" class="move-network-links" data-container="body" data-toggle="popover" data-placement="bottom" data-popover-content="#move-network-popover" data-original-title="" title="" data-template="<div class=&quot;popover global-nav-network-sites-popover&quot; role=&quot;tooltip&quot;><div class=&quot;global-nav-popover-arrow arrow&quot;></div><div class=&quot;popover-content&quot;></div></div>"><i class="svg-icon svg-icon-angle-down-header"></i></a>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });
});
