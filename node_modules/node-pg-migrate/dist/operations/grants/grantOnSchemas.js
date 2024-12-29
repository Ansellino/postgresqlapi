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
var grantOnSchemas_exports = {};
__export(grantOnSchemas_exports, {
  grantOnSchemas: () => grantOnSchemas
});
module.exports = __toCommonJS(grantOnSchemas_exports);
var import_utils = require("../../utils");
var import_revokeOnSchemas = require("./revokeOnSchemas");
var import_shared = require("./shared");
function grantOnSchemas(mOptions) {
  const _grantOnSchemas = (options) => {
    const { privileges, schemas, roles, withGrantOption = false } = options;
    const rolesStr = (0, import_shared.asRolesStr)(roles, mOptions);
    const schemasStr = (0, import_utils.toArray)(schemas).map(mOptions.literal).join(", ");
    const privilegesStr = (0, import_utils.toArray)(privileges).map(String).join(", ");
    const withGrantOptionStr = withGrantOption ? " WITH GRANT OPTION" : "";
    return `GRANT ${privilegesStr} ON SCHEMA ${schemasStr} TO ${rolesStr}${withGrantOptionStr};`;
  };
  _grantOnSchemas.reverse = (0, import_revokeOnSchemas.revokeOnSchemas)(mOptions);
  return _grantOnSchemas;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  grantOnSchemas
});
