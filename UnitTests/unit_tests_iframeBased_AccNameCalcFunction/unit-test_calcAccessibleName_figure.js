describe('calcAccessibleName_a1: figure element with child element figcaption and img with alt, neither of which should not act as accessible name', function() {
	it('figure should should lack accessible name', function() {
		var iframe = document.querySelector("#testing");
		iframe.contentWindow.document.head.innerHTML = "";
		iframe.contentWindow.document.body.innerHTML =
		`<figure id="test">
		<img src="bob.jpg" alt="foo">
		<figcaption>bar</figcaption>
		</figure>`;
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
		expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
	});
});

describe('calcAccessibleName_a2: figure element with child element figcaption with aria-label providing accessible name', function() {
	it('figure should should have accessible name of "some text"', function() {
		var iframe = document.querySelector("#testing");
		iframe.contentWindow.document.head.innerHTML = "";
		iframe.contentWindow.document.body.innerHTML =
		`<figure id="test" aria-label="some text">
		<img src="bob.jpg" alt="foo">
		<figcaption>bar</figcaption>
		</figure>`;
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
		expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("some text");
	});
});

