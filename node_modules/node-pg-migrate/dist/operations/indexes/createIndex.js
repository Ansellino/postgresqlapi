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
var createIndex_exports = {};
__export(createIndex_exports, {
  createIndex: () => createIndex
});
module.exports = __toCommonJS(createIndex_exports);
var import_utils = require("../../utils");
var import_dropIndex = require("./dropIndex");
var import_shared = require("./shared");
function createIndex(mOptions) {
  const _create = (tableName, rawColumns, options = {}) => {
    const {
      opclass,
      unique = false,
      concurrently = false,
      ifNotExists = false,
      method,
      where,
      include
    } = options;
    const columns = (0, import_utils.toArray)(rawColumns);
    if (opclass) {
      mOptions.logger.warn(
        "Using opclass is deprecated. You should use it as part of column definition e.g. pgm.createIndex('table', [['column', 'opclass', 'ASC']])"
      );
      const lastIndex = columns.length - 1;
      const lastColumn = columns[lastIndex];
      if (typeof lastColumn === "string") {
        columns[lastIndex] = { name: lastColumn, opclass };
      } else if (lastColumn.opclass) {
        throw new Error(
          "There is already defined opclass on column, can't override it with global one"
        );
      } else {
        columns[lastIndex] = { ...lastColumn, opclass };
      }
    }
    const indexName = (0, import_shared.generateIndexName)(
      typeof tableName === "object" ? tableName.name : tableName,
      columns,
      options,
      mOptions.schemalize
    );
    const columnsString = (0, import_shared.generateColumnsString)(columns, mOptions);
    const uniqueStr = unique ? " UNIQUE" : "";
    const concurrentlyStr = concurrently ? " CONCURRENTLY" : "";
    const ifNotExistsStr = ifNotExists ? " IF NOT EXISTS" : "";
    const methodStr = method ? ` USING ${method}` : "";
    const whereStr = where ? ` WHERE ${where}` : "";
    const includeStr = include ? ` INCLUDE (${(0, import_utils.toArray)(include).map(mOptions.literal).join(", ")})` : "";
    const indexNameStr = mOptions.literal(indexName);
    const tableNameStr = mOptions.literal(tableName);
    return `CREATE${uniqueStr} INDEX${concurrentlyStr}${ifNotExistsStr} ${indexNameStr} ON ${tableNameStr}${methodStr} (${columnsString})${includeStr}${whereStr};`;
  };
  _create.reverse = (0, import_dropIndex.dropIndex)(mOptions);
  return _create;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createIndex
});
