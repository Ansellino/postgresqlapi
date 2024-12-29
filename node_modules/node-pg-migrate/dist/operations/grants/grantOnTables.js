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
var grantOnTables_exports = {};
__export(grantOnTables_exports, {
  grantOnTables: () => grantOnTables
});
module.exports = __toCommonJS(grantOnTables_exports);
var import_utils = require("../../utils");
var import_revokeOnTables = require("./revokeOnTables");
var import_shared = require("./shared");
function grantOnTables(mOptions) {
  const _grantOnTables = (options) => {
    const { privileges, roles, withGrantOption = false } = options;
    const rolesStr = (0, import_shared.asRolesStr)(roles, mOptions);
    const privilegesStr = (0, import_utils.toArray)(privileges).map(String).join(", ");
    const tablesStr = (0, import_shared.asTablesStr)(options, mOptions);
    const withGrantOptionStr = withGrantOption ? " WITH GRANT OPTION" : "";
    return `GRANT ${privilegesStr} ON ${tablesStr} TO ${rolesStr}${withGrantOptionStr};`;
  };
  _grantOnTables.reverse = (0, import_revokeOnTables.revokeOnTables)(mOptions);
  return _grantOnTables;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  grantOnTables
});
