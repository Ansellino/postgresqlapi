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
var addTypeValue_exports = {};
__export(addTypeValue_exports, {
  addTypeValue: () => addTypeValue
});
module.exports = __toCommonJS(addTypeValue_exports);
var import_utils = require("../../utils");
function addTypeValue(mOptions) {
  const _add = (typeName, value, options = {}) => {
    const { before, after, ifNotExists = false } = options;
    if (before && after) {
      throw new Error(`"before" and "after" can't be specified together`);
    }
    const beforeStr = before ? ` BEFORE ${(0, import_utils.escapeValue)(before)}` : "";
    const afterStr = after ? ` AFTER ${(0, import_utils.escapeValue)(after)}` : "";
    const ifNotExistsStr = ifNotExists ? " IF NOT EXISTS" : "";
    const valueStr = (0, import_utils.escapeValue)(value);
    const typeNameStr = mOptions.literal(typeName);
    return `ALTER TYPE ${typeNameStr} ADD VALUE${ifNotExistsStr} ${valueStr}${beforeStr}${afterStr};`;
  };
  return _add;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addTypeValue
});
