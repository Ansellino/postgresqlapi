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
var revokeRoles_exports = {};
__export(revokeRoles_exports, {
  revokeRoles: () => revokeRoles
});
module.exports = __toCommonJS(revokeRoles_exports);
var import_utils = require("../../utils");
function revokeRoles(mOptions) {
  const _revokeRoles = (roles, rolesFrom, options = {}) => {
    const { onlyAdminOption = false, cascade = false } = options;
    const rolesStr = (0, import_utils.toArray)(roles).map(mOptions.literal).join(", ");
    const rolesToStr = (0, import_utils.toArray)(rolesFrom).map(mOptions.literal).join(", ");
    const onlyAdminOptionStr = onlyAdminOption ? " ADMIN OPTION FOR" : "";
    const cascadeStr = cascade ? " CASCADE" : "";
    return `REVOKE${onlyAdminOptionStr} ${rolesStr} FROM ${rolesToStr}${cascadeStr};`;
  };
  return _revokeRoles;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  revokeRoles
});
