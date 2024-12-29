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
var createRole_exports = {};
__export(createRole_exports, {
  createRole: () => createRole
});
module.exports = __toCommonJS(createRole_exports);
var import_dropRole = require("./dropRole");
var import_shared = require("./shared");
function createRole(mOptions) {
  const _create = (roleName, roleOptions = {}) => {
    const options = (0, import_shared.formatRoleOptions)({
      ...roleOptions,
      superuser: roleOptions.superuser || false,
      createdb: roleOptions.createdb || false,
      createrole: roleOptions.createrole || false,
      inherit: roleOptions.inherit !== false,
      login: roleOptions.login || false,
      replication: roleOptions.replication || false
    });
    const optionsStr = options ? ` WITH ${options}` : "";
    return `CREATE ROLE ${mOptions.literal(roleName)}${optionsStr};`;
  };
  _create.reverse = (0, import_dropRole.dropRole)(mOptions);
  return _create;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createRole
});
