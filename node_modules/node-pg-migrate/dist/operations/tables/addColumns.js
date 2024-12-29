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
var addColumns_exports = {};
__export(addColumns_exports, {
  addColumns: () => addColumns
});
module.exports = __toCommonJS(addColumns_exports);
var import_utils = require("../../utils");
var import_dropColumns = require("./dropColumns");
var import_shared = require("./shared");
function addColumns(mOptions) {
  const _add = (tableName, columns, options = {}) => {
    const { ifNotExists = false } = options;
    const { columns: columnLines, comments: columnComments = [] } = (0, import_shared.parseColumns)(tableName, columns, mOptions);
    const ifNotExistsStr = ifNotExists ? "IF NOT EXISTS " : "";
    const columnsStr = (0, import_utils.formatLines)(columnLines, `  ADD ${ifNotExistsStr}`);
    const tableNameStr = mOptions.literal(tableName);
    const alterTableQuery = `ALTER TABLE ${tableNameStr}
${columnsStr};`;
    const columnCommentsStr = columnComments.length > 0 ? `
${columnComments.join("\n")}` : "";
    return `${alterTableQuery}${columnCommentsStr}`;
  };
  _add.reverse = (0, import_dropColumns.dropColumns)(mOptions);
  return _add;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addColumns
});
