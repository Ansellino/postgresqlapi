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
var grantRoles_exports = {};
__export(grantRoles_exports, {
  grantRoles: () => grantRoles
});
module.exports = __toCommonJS(grantRoles_exports);
var import_utils = require("../../utils");
var import_revokeRoles = require("./revokeRoles");
function grantRoles(mOptions) {
  const _grantRoles = (rolesFrom, rolesTo, options = {}) => {
    const { withAdminOption = false } = options;
    const rolesFromStr = (0, import_utils.toArray)(rolesFrom).map(mOptions.literal).join(", ");
    const rolesToStr = (0, import_utils.toArray)(rolesTo).map(mOptions.literal).join(", ");
    const withAdminOptionStr = withAdminOption ? " WITH ADMIN OPTION" : "";
    return `GRANT ${rolesFromStr} TO ${rolesToStr}${withAdminOptionStr};`;
  };
  _grantRoles.reverse = (0, import_revokeRoles.revokeRoles)(mOptions);
  return _grantRoles;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  grantRoles
});
