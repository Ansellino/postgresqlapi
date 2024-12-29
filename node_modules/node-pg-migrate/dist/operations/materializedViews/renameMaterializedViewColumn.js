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
var renameMaterializedViewColumn_exports = {};
__export(renameMaterializedViewColumn_exports, {
  renameMaterializedViewColumn: () => renameMaterializedViewColumn
});
module.exports = __toCommonJS(renameMaterializedViewColumn_exports);
function renameMaterializedViewColumn(mOptions) {
  const _rename = (viewName, columnName, newColumnName) => {
    const viewNameStr = mOptions.literal(viewName);
    const columnNameStr = mOptions.literal(columnName);
    const newColumnNameStr = mOptions.literal(newColumnName);
    return `ALTER MATERIALIZED VIEW ${viewNameStr} RENAME COLUMN ${columnNameStr} TO ${newColumnNameStr};`;
  };
  _rename.reverse = (viewName, columnName, newColumnName) => _rename(viewName, newColumnName, columnName);
  return _rename;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  renameMaterializedViewColumn
});
