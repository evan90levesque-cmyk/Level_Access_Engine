describe('Test 1 - Testing analytics_runAllTests_returnInstances_JSON_Timer for automatic results', function() {
    it('Test 1', function(done) {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#'>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        LevelAccess_AccessEngine.analytics_runAllTests_returnInstances_JSON_timer(() => {
            const res = LevelAccess_AccessEngine.test_analytics_outcomes;
            expect(res).toEqual(jasmine.any(Array));
            expect(res.length).toBeGreaterThan(0);
            done();
        });
    });
});

describe('Test 2 - Verify live DOM is always cleaned up', () => {
    it('Test 2', (done) => {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#'>";

        LevelAccess_AccessEngine.analytics_runAllTests_returnInstances_JSON_timer(() => {
            expect(document.querySelector("#testing").contentWindow.document.documentElement.outerHTML).not.toContain("data-ae");
            done();
        });
    });
});