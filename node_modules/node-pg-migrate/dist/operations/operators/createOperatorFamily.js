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
var createOperatorFamily_exports = {};
__export(createOperatorFamily_exports, {
  createOperatorFamily: () => createOperatorFamily
});
module.exports = __toCommonJS(createOperatorFamily_exports);
var import_dropOperatorFamily = require("./dropOperatorFamily");
function createOperatorFamily(mOptions) {
  const _create = (operatorFamilyName, indexMethod) => {
    const operatorFamilyNameStr = mOptions.literal(operatorFamilyName);
    return `CREATE OPERATOR FAMILY ${operatorFamilyNameStr} USING ${indexMethod};`;
  };
  _create.reverse = (0, import_dropOperatorFamily.dropOperatorFamily)(mOptions);
  return _create;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createOperatorFamily
});
