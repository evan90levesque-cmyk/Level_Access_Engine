describe('Test 1 - Verify live DOM is always cleaned up', () => {
    it('Test 1', () => {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='#'>";

        LevelAccess_AccessEngine.test_stages("stage2");

        expect(document.querySelector("#testing").contentWindow.document.documentElement.outerHTML).not.toContain("data-ae");
    });
});