if(document.head.attachShadow){
	describe('String Pass: Empty link with aria-labelledby pointing to node directly after a shadowDOM gets an accessible name from the label', function() {
		it('Empty link with aria-labelledby pointing to node directly after a shadowDOM gets an accessible name from the label should be equal to pass', function() {

			var d=document.querySelector("#testing").contentWindow.document;
            d.head.innerHTML = "";
            d.body.innerHTML = "<div id='shadow'></div><span id='label1'> Make this the <em>top</em>most element</span><a href='#' id='test' aria-labelledby='label1'></a>";
            d.getElementById("shadow").attachShadow({mode: "open"}).innerHTML='<div id="frank"></div><div id="jim"></div>';

		   LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		   var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       	   expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("make this the topmost element");
		});
	});
}
