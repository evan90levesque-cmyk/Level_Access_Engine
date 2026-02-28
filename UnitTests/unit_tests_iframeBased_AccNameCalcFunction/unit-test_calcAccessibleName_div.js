describe('ENG-823: accessible name for real-world div example', function() {
    it('should be "add email address"', function() {
        const iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = "";
        iframe.contentWindow.document.body.innerHTML = `
            <div id="test" role="dialog" aria-labelledby="alertContact-addEmail-title">
                <span id="alertContact-addEmail-title" role="heading" aria-level="2">Add Email Address</span>
            </div>
        `;

        LevelAccess_AccessEngine.setWindowUnderTest(iframe.contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("add email address");
    });
});

describe('ENG-942: accessible name calculated using a hidden div', function() {
    it('should be "this is a description"', function() {
        const iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = "";
        iframe.contentWindow.document.body.innerHTML = `
            <div hidden>
                <i id="desc">
                    This is a description.
                    <b aria-hidden="true">
                        This should stay hidden.
                    </b>
                </i>
            </div>
            <input id="test" aria-labelledby="desc" />
        `;

        LevelAccess_AccessEngine.setWindowUnderTest(iframe.contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("this is a description.");
    });
});
