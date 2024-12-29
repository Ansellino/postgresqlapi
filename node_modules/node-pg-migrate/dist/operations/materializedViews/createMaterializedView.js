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
var createMaterializedView_exports = {};
__export(createMaterializedView_exports, {
  createMaterializedView: () => createMaterializedView
});
module.exports = __toCommonJS(createMaterializedView_exports);
var import_utils = require("../../utils");
var import_dropMaterializedView = require("./dropMaterializedView");
var import_shared = require("./shared");
function createMaterializedView(mOptions) {
  const _create = (viewName, options, definition) => {
    const {
      ifNotExists = false,
      columns = [],
      tablespace,
      storageParameters = {},
      data
    } = options;
    const columnNames = (0, import_utils.toArray)(columns).map(mOptions.literal).join(", ");
    const withOptions = Object.keys(storageParameters).map((0, import_shared.storageParameterStr)(storageParameters)).join(", ");
    const ifNotExistsStr = ifNotExists ? " IF NOT EXISTS" : "";
    const columnsStr = columnNames ? `(${columnNames})` : "";
    const withOptionsStr = withOptions ? ` WITH (${withOptions})` : "";
    const tablespaceStr = tablespace ? ` TABLESPACE ${mOptions.literal(tablespace)}` : "";
    const dataStr = (0, import_shared.dataClause)(data);
    const viewNameStr = mOptions.literal(viewName);
    return `CREATE MATERIALIZED VIEW${ifNotExistsStr} ${viewNameStr}${columnsStr}${withOptionsStr}${tablespaceStr} AS ${definition}${dataStr};`;
  };
  _create.reverse = (0, import_dropMaterializedView.dropMaterializedView)(mOptions);
  return _create;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createMaterializedView
});
