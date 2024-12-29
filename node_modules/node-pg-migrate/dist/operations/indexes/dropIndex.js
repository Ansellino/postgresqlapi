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
var dropIndex_exports = {};
__export(dropIndex_exports, {
  dropIndex: () => dropIndex
});
module.exports = __toCommonJS(dropIndex_exports);
var import_utils = require("../../utils");
var import_shared = require("./shared");
function dropIndex(mOptions) {
  const _drop = (tableName, rawColumns, options = {}) => {
    const { concurrently = false, ifExists = false, cascade = false } = options;
    const columns = (0, import_utils.toArray)(rawColumns);
    const concurrentlyStr = concurrently ? " CONCURRENTLY" : "";
    const ifExistsStr = ifExists ? " IF EXISTS" : "";
    const indexName = (0, import_shared.generateIndexName)(
      tableName,
      columns,
      options,
      mOptions.schemalize
    );
    const cascadeStr = cascade ? " CASCADE" : "";
    const indexNameStr = mOptions.literal(indexName);
    return `DROP INDEX${concurrentlyStr}${ifExistsStr} ${indexNameStr}${cascadeStr};`;
  };
  return _drop;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  dropIndex
});
