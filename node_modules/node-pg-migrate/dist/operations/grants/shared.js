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
var shared_exports = {};
__export(shared_exports, {
  asRolesStr: () => asRolesStr,
  asTablesStr: () => asTablesStr,
  isAllTablesOptions: () => isAllTablesOptions
});
module.exports = __toCommonJS(shared_exports);
var import_utils = require("../../utils");
function isAllTablesOptions(options) {
  return "schema" in options;
}
function asRolesStr(roles, mOptions) {
  return (0, import_utils.toArray)(roles).map((role) => role === "PUBLIC" ? role : mOptions.literal(role)).join(", ");
}
function asTablesStr(options, mOptions) {
  return isAllTablesOptions(options) ? `ALL TABLES IN SCHEMA ${mOptions.literal(options.schema)}` : (0, import_utils.toArray)(options.tables).map(mOptions.literal).join(", ");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  asRolesStr,
  asTablesStr,
  isAllTablesOptions
});
