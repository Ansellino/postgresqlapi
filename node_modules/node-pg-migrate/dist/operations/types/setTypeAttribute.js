"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var setTypeAttribute_exports = {};
__export(setTypeAttribute_exports, {
  setTypeAttribute: () => setTypeAttribute
});
module.exports = __toCommonJS(setTypeAttribute_exports);
var import_utils = require("../../utils");
function setTypeAttribute(mOptions) {
  return (typeName, attributeName, attributeType) => {
    const typeStr = (0, import_utils.applyType)(attributeType, mOptions.typeShorthands).type;
    const typeNameStr = mOptions.literal(typeName);
    const attributeNameStr = mOptions.literal(attributeName);
    return `ALTER TYPE ${typeNameStr} ALTER ATTRIBUTE ${attributeNameStr} SET DATA TYPE ${typeStr};`;
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  setTypeAttribute
});
