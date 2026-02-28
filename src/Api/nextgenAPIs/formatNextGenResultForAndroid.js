import { origAndroidXmlFromHTML } from "../ApiUtils/resultsFormatter_AccessContinuumMobile_Android";

export function formatNextGenResultForAndroid(node, test) {
	const result = {
		attributeDetail: test.metaText || "",
		timestamp: new Date().toISOString(),
	};

	if (node.hasAttribute("data-xmlnodetype")) {
		const androidWidget = node.getAttribute("data-xmlnodetype").split("android.widget.")[1];
		result.attributeDetail = result.attributeDetail.replace("[[object]]", androidWidget);
		result.element = origAndroidXmlFromHTML(node).substring(0, 2998); // data-base takes string to 3000
		result.uel = result.element.match(/bounds="\[-?\d+,-?\d+]\[-?\d+,-?\d+]"/)?.toString();
	}

	return result;
}
