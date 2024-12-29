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
var addTypeAttribute_exports = {};
__export(addTypeAttribute_exports, {
  addTypeAttribute: () => addTypeAttribute
});
module.exports = __toCommonJS(addTypeAttribute_exports);
var import_utils = require("../../utils");
var import_dropTypeAttribute = require("./dropTypeAttribute");
function addTypeAttribute(mOptions) {
  const _alterAttributeAdd = (typeName, attributeName, attributeType) => {
    const typeStr = (0, import_utils.applyType)(attributeType, mOptions.typeShorthands).type;
    const typeNameStr = mOptions.literal(typeName);
    const attributeNameStr = mOptions.literal(attributeName);
    return `ALTER TYPE ${typeNameStr} ADD ATTRIBUTE ${attributeNameStr} ${typeStr};`;
  };
  _alterAttributeAdd.reverse = (0, import_dropTypeAttribute.dropTypeAttribute)(mOptions);
  return _alterAttributeAdd;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addTypeAttribute
});
