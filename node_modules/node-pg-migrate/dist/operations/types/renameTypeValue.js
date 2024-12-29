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
var renameTypeValue_exports = {};
__export(renameTypeValue_exports, {
  renameTypeValue: () => renameTypeValue
});
module.exports = __toCommonJS(renameTypeValue_exports);
var import_utils = require("../../utils");
function renameTypeValue(mOptions) {
  const _rename = (typeName, value, newValue) => {
    const valueStr = (0, import_utils.escapeValue)(value);
    const newValueStr = (0, import_utils.escapeValue)(newValue);
    const typeNameStr = mOptions.literal(typeName);
    return `ALTER TYPE ${typeNameStr} RENAME VALUE ${valueStr} TO ${newValueStr};`;
  };
  _rename.reverse = (typeName, value, newValue) => _rename(typeName, newValue, value);
  return _rename;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  renameTypeValue
});
