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
var alterViewColumn_exports = {};
__export(alterViewColumn_exports, {
  alterViewColumn: () => alterViewColumn
});
module.exports = __toCommonJS(alterViewColumn_exports);
var import_utils = require("../../utils");
function alterViewColumn(mOptions) {
  const _alter = (viewName, columnName, options) => {
    const { default: defaultValue } = options;
    const actions = [];
    if (defaultValue === null) {
      actions.push("DROP DEFAULT");
    } else if (defaultValue !== void 0) {
      actions.push(`SET DEFAULT ${(0, import_utils.escapeValue)(defaultValue)}`);
    }
    const viewNameStr = mOptions.literal(viewName);
    const columnNameStr = mOptions.literal(columnName);
    return actions.map(
      (action) => `ALTER VIEW ${viewNameStr} ALTER COLUMN ${columnNameStr} ${action};`
    ).join("\n");
  };
  return _alter;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  alterViewColumn
});
