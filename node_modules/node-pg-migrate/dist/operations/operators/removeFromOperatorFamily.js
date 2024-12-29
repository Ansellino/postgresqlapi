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
var removeFromOperatorFamily_exports = {};
__export(removeFromOperatorFamily_exports, {
  removeFromOperatorFamily: () => removeFromOperatorFamily
});
module.exports = __toCommonJS(removeFromOperatorFamily_exports);
var import_shared = require("./shared");
const removeFromOperatorFamily = (mOptions) => {
  const method = (operatorFamilyName, indexMethod, operatorList) => {
    const operatorFamilyNameStr = mOptions.literal(operatorFamilyName);
    const operatorListStr = operatorList.map((0, import_shared.operatorMap)(mOptions)).join(",\n  ");
    return `ALTER OPERATOR FAMILY ${operatorFamilyNameStr} USING ${indexMethod} DROP
  ${operatorListStr};`;
  };
  return method;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  removeFromOperatorFamily
});
