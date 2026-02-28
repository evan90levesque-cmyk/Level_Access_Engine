describe('Test 1 - Testing analytics_runAllTests_returnInstances_JSON for automatic results', function() {
    it('Test 1', function() {
       document.head.innerHTML = "";
       document.body.innerHTML = "<img src='#'>";
       LevelAccess_AccessEngine.setWindowUnderTest(window);
       var res = LevelAccess_AccessEngine.analytics_runAllTests_returnInstances_JSON();
       var resObj = JSON.parse(res);
       // automatic results
       expect(resObj.length).toBe(3);
    });
});


