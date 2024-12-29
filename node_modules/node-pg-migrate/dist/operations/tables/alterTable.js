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
var alterTable_exports = {};
__export(alterTable_exports, {
  alterTable: () => alterTable
});
module.exports = __toCommonJS(alterTable_exports);
var import_utils = require("../../utils");
function alterTable(mOptions) {
  const _alter = (tableName, options) => {
    const { levelSecurity } = options;
    const alterDefinition = [];
    if (levelSecurity) {
      alterDefinition.push(`${levelSecurity} ROW LEVEL SECURITY`);
    }
    return `ALTER TABLE ${mOptions.literal(tableName)}
  ${(0, import_utils.formatLines)(alterDefinition)};`;
  };
  return _alter;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  alterTable
});
