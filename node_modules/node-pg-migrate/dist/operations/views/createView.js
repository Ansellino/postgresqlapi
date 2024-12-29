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
var createView_exports = {};
__export(createView_exports, {
  createView: () => createView
});
module.exports = __toCommonJS(createView_exports);
var import_utils = require("../../utils");
var import_dropView = require("./dropView");
var import_shared = require("./shared");
function createView(mOptions) {
  const _create = (viewName, viewOptions, definition) => {
    const {
      temporary = false,
      replace = false,
      recursive = false,
      columns = [],
      options = {},
      checkOption
    } = viewOptions;
    const columnNames = (0, import_utils.toArray)(columns).map(mOptions.literal).join(", ");
    const withOptions = Object.keys(options).map((0, import_shared.viewOptionStr)(options)).join(", ");
    const replaceStr = replace ? " OR REPLACE" : "";
    const temporaryStr = temporary ? " TEMPORARY" : "";
    const recursiveStr = recursive ? " RECURSIVE" : "";
    const columnStr = columnNames ? `(${columnNames})` : "";
    const withOptionsStr = withOptions ? ` WITH (${withOptions})` : "";
    const checkOptionStr = checkOption ? ` WITH ${checkOption} CHECK OPTION` : "";
    const viewNameStr = mOptions.literal(viewName);
    return `CREATE${replaceStr}${temporaryStr}${recursiveStr} VIEW ${viewNameStr}${columnStr}${withOptionsStr} AS ${definition}${checkOptionStr};`;
  };
  _create.reverse = (0, import_dropView.dropView)(mOptions);
  return _create;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createView
});
