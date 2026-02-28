describe('Test 1 - Testing runAllTests_returnInstances_JSON', function() {
    it('Test 1', function() {
       document.head.innerHTML = "";
       document.body.innerHTML = "<img src='#'>";
       LevelAccess_AccessEngine.setWindowUnderTest(window);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       var resObj = JSON.parse(res);
       expect(resObj.length).toBe(3);
    });
});