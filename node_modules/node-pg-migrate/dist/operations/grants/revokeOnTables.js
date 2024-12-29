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
var revokeOnTables_exports = {};
__export(revokeOnTables_exports, {
  revokeOnTables: () => revokeOnTables
});
module.exports = __toCommonJS(revokeOnTables_exports);
var import_utils = require("../../utils");
var import_shared = require("./shared");
function revokeOnTables(mOptions) {
  const _revokeOnTables = (options) => {
    const {
      privileges,
      roles,
      onlyGrantOption = false,
      cascade = false
    } = options;
    const rolesStr = (0, import_shared.asRolesStr)(roles, mOptions);
    const privilegesStr = (0, import_utils.toArray)(privileges).map(String).join(", ");
    const tablesStr = (0, import_shared.asTablesStr)(options, mOptions);
    const onlyGrantOptionStr = onlyGrantOption ? " GRANT OPTION FOR" : "";
    const cascadeStr = cascade ? " CASCADE" : "";
    return `REVOKE${onlyGrantOptionStr} ${privilegesStr} ON ${tablesStr} FROM ${rolesStr}${cascadeStr};`;
  };
  return _revokeOnTables;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  revokeOnTables
});
