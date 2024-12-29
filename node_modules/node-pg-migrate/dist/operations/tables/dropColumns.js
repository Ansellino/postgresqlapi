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
var dropColumns_exports = {};
__export(dropColumns_exports, {
  dropColumns: () => dropColumns
});
module.exports = __toCommonJS(dropColumns_exports);
var import_utils = require("../../utils");
function dropColumns(mOptions) {
  const _drop = (tableName, columns, options = {}) => {
    const { ifExists = false, cascade = false } = options;
    if (typeof columns === "string") {
      columns = [columns];
    } else if (!Array.isArray(columns) && typeof columns === "object") {
      columns = Object.keys(columns);
    }
    const ifExistsStr = ifExists ? "IF EXISTS " : "";
    const cascadeStr = cascade ? " CASCADE" : "";
    const lines = columns.map(mOptions.literal).map((column) => `DROP ${ifExistsStr}${column}${cascadeStr}`);
    return `ALTER TABLE ${mOptions.literal(tableName)}
${(0, import_utils.formatLines)(lines)};`;
  };
  return _drop;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  dropColumns
});
