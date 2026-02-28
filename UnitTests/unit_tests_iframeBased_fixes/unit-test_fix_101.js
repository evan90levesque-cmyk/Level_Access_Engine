describe('Fix 101', function() {
    it('The fix for 101 should conform to a specific base model', function() {
        document.querySelector("#testing").contentWindow.document.querySelector("html").setAttribute("lang", "data");
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        
        var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        var resArray = JSON.parse(res);
        var res101 = null;

        for (var r = 0; r < resArray.length; r++) { 
            if (resArray[r].engineTestId === 101) {
                res101 = resArray[r];
                break;
            }
        }

        if (res101) {
            expect(typeof(res101.fingerprint.css)).toBe("string");
        }
    });
});