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
var renameColumn_exports = {};
__export(renameColumn_exports, {
  renameColumn: () => renameColumn
});
module.exports = __toCommonJS(renameColumn_exports);
function renameColumn(mOptions) {
  const _rename = (tableName, columnName, newName) => {
    const tableNameStr = mOptions.literal(tableName);
    const columnNameStr = mOptions.literal(columnName);
    const newNameStr = mOptions.literal(newName);
    return `ALTER TABLE ${tableNameStr} RENAME ${columnNameStr} TO ${newNameStr};`;
  };
  _rename.reverse = (tableName, columnName, newName) => _rename(tableName, newName, columnName);
  return _rename;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  renameColumn
});
