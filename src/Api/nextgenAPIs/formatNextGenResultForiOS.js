import { origiOSXmlFromHTML } from "../ApiUtils/resultsFormatter_AccessContinuumMobile_iOS";

export function formatNextGenResultForiOS(node, test) {
	const result = {
		attributeDetail: test.metaText || "",
		timestamp: new Date().toISOString(),
	};

    if (node.hasAttribute("data-xmlnodetype")) {
		const iOSWidget = node.getAttribute("data-xmlnodetype").split("XCUIElementType")[1];
		result.attributeDetail = result.attributeDetail.replace("[[object]]", iOSWidget);
		result.element = origiOSXmlFromHTML(node).substring(0, 2998); // data-base takes string to 3000
		const width = result.element.match(/width="\d+"/)?.toString();
		const height = result.element.match(/height="\d+"/)?.toString();
		const x = result.element.match(/x="-?\d+"/)?.toString();
		const y = result.element.match(/y="-?\d+"/)?.toString()
		result.uel = `${width};${height};${x};${y}`;
	}

	return result;
}
