import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-25
 * @returns {AutoTestShell} testShell
 */
export function test25() {
	aeKernel.addAdvisoryAutomaticTest("25", {
		bestPractice:343,
		testId:25,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more map elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not contain only area elements (without an ARIA-assigned role) as direct child elements.",
		metaText: "This element should only contain area elements (without an ARIA-assigned role) as direct child elements",
		fixType: "",
		testFunc: function() {
			var testShell = new AutoTestShell(
				'map[data-ae_vis][data-ae_avat][data-ae_ar="null"]:not(:empty)'
			);
			
			testShell.set_candidateSetNodesFunc(function() {
				var badnodes = [];
				var maps = aeKernel.rootTestNode.querySelectorAll('map[data-ae_vis][data-ae_avat][data-ae_ar="null"]:not(:empty)');
				for (var i = 0; i < maps.length; i++) {
					var mapchildren=maps[i].children, fail=false;
					for(var j=0; j<mapchildren.length && fail==false; j++){
						var testchild=mapchildren[j];
						if(testchild.tagName!="AREA" || testchild.getAttribute("data-ae_ar")!="null"){
							//Child type not on the allowed list or has a role
							badnodes.push(maps[i]);
							fail=true;
						}
					}
				}
				return badnodes;
			});

			return testShell;
		}
	});
}
