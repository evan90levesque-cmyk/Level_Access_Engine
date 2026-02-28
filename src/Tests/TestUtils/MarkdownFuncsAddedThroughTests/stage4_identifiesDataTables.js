import {logger} from "../../../Utils/Logger.js";
import {getRuntimeExceededMessage, isRunningTooLong} from "../../../Markdown/MarkdownUtils/mdUtils";

export let stage4_identifiesDataTables_errors = [];

/*
 * Pre-Testing: Finds tables that appear to be data tables and adds an "data-ae_dtab" attribute
 * @returns {Number}
 */
export function identifiesDataTables(rootTestNode) {
	try {
		const potentialTables = rootTestNode.querySelectorAll("table");
		for (let i = 0, len_potTables = potentialTables.length; i < len_potTables; i++) {
			if (isRunningTooLong()) {
				throw getRuntimeExceededMessage();
			}

			const potentialTable = potentialTables[i];

			const cells = potentialTable.querySelectorAll("td");
			const numberOfCells = cells.length;
			let numberOfCellsWhichContainOnlyText = 0;
			const cell = document.createElement("td");
			for (let j = numberOfCells; j--;) {
				//Strip inline elements that might be wrapping text so they don't throw off nodeType/count checks
				//Copy the cell so stripping doesn't mangle the original decorated DOM
				cell.innerHTML = cells[j].innerHTML;
				//Grab any tags to be stripped - currently common inline elements
				const thingsToStrip = cell.querySelectorAll("b,em,i,span,strong,br,a,bdi,label");
				//Rip each tag out but leave its innerHTML in place
				for (let k = thingsToStrip.length; k--;) {
					thingsToStrip[k].outerHTML = thingsToStrip[k].innerHTML;
				}
				//Firefox keeps adjacent text nodes as separate children so this fixes that
				cell.normalize();
				if ((cell.childNodes.length === 1) && (cell.childNodes[0].nodeType === 3)) {
					// cell contains only text
					numberOfCellsWhichContainOnlyText = numberOfCellsWhichContainOnlyText + 1;
				}
			}

			const percTextOnlyCells = Math.round((numberOfCellsWhichContainOnlyText / numberOfCells) * 100);
			if (percTextOnlyCells > 65) {
				potentialTable.setAttribute("data-ae_dtab", "true");
			}
		}

		return rootTestNode;
	} catch (err) {
		logger.error(err);
		stage4_identifiesDataTables_errors.push("stage4_identifiesDataTables");
		return null;
	}
}