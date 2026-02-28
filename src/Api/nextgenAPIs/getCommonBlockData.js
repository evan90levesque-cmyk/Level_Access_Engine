import sha256 from 'crypto-js/sha256';

import {aeKernel} from "../../Kernel/AEKernel";

export function getCommonBlockData(element, assetId, subject, scanId) {
    if (!element) {
        return null;
    }

    if (!aeKernel.rootTestNode.contains(element)) {
        // this element is not a descendant of our root test node
        return null;
    }

    if (!element.hasAttribute("data-ae_uid")) {
        // this element does not have a unique ID assigned to it yet
        // make sure nextgen_runAllTests_returnInstances_JSON was run prior to invoking this function
        return null;
    }

    const tagName = element.getAttribute("data-ae_origTagName") || element.tagName.toLowerCase();
    if ((tagName === 'body') || !element.closest('body')) {
        // we don't calculate clustering data for body elements nor elements that are not descendants of body elements
        return null;
    }

    const clusteringData = getClusteringData(element);

    let commonBlockKey;
    if (assetId) {
        commonBlockKey = sha256(`${assetId} ${JSON.stringify(clusteringData, ['tagName', 'children'], null)}`).toString();
    }

    let commonBlockInstanceKey;
    if (assetId && subject && scanId && clusteringData.uniqueId) {
        commonBlockInstanceKey = sha256(`${assetId} ${subject} ${scanId} ${clusteringData.uniqueId}`).toString();
    }

    return {
        clusteringData,
        commonBlockKey,
        commonBlockInstanceKey
    };
}

function getClusteringData(element, parentClusteringData = null) {
    const clusteringData = {
        uniqueId: element.getAttribute("data-ae_uid"),
        tagName: element.getAttribute("data-ae_origTagName") || element.tagName.toLowerCase(),
        attributes: {},
        text: null,
        children: []
    };

    // format attributes
    const elementAttributes = element.attributes;
    for (let i = 0; i < elementAttributes.length; i++) {
        const attribute = elementAttributes[i];
        const {name, value} = attribute;

        if (name.startsWith("data-ae_")) {
            // don't include attributes added by Access Engine
            continue;
        }

        clusteringData.attributes[name] = value;
    }

    // format text
    clusteringData.text = Array.prototype.filter
        .call(element.childNodes, child => child.nodeType === Node.TEXT_NODE)
        .map(child => child.textContent)
        .join('');

    if (parentClusteringData) {
        parentClusteringData.children.push(clusteringData);
    }

    // recursively format the element's children
    let childElement = element.firstElementChild;
    do {
        if (!childElement) {
            break;
        }

        getClusteringData(childElement, clusteringData);
    } while (childElement = childElement.nextElementSibling);

    return clusteringData;
}