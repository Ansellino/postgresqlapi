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
var renameOperatorFamily_exports = {};
__export(renameOperatorFamily_exports, {
  renameOperatorFamily: () => renameOperatorFamily
});
module.exports = __toCommonJS(renameOperatorFamily_exports);
function renameOperatorFamily(mOptions) {
  const _rename = (oldOperatorFamilyName, indexMethod, newOperatorFamilyName) => {
    const oldOperatorFamilyNameStr = mOptions.literal(oldOperatorFamilyName);
    const newOperatorFamilyNameStr = mOptions.literal(newOperatorFamilyName);
    return `ALTER OPERATOR FAMILY ${oldOperatorFamilyNameStr} USING ${indexMethod} RENAME TO ${newOperatorFamilyNameStr};`;
  };
  _rename.reverse = (oldOperatorFamilyName, indexMethod, newOperatorFamilyName) => _rename(newOperatorFamilyName, indexMethod, oldOperatorFamilyName);
  return _rename;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  renameOperatorFamily
});
