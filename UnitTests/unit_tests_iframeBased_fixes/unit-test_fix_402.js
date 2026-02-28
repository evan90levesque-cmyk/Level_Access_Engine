describe('Fix 402', function() {
    it('The fix for 402 should conform to a specific base model', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<h2>Level 2 Heading</h2>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       var resArray = JSON.parse(res);
       var res101 = null;

       for (var r = 0; r < resArray.length; r++) { 
           if (resArray[r].engineTestId === 402) {
               res101 = resArray[r];
               break;
           }
       }

       if (res101) {
           expect(typeof(res101.fingerprint.css)).toBe("string");
       }

    });
});