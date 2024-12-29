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
var alterRole_exports = {};
__export(alterRole_exports, {
  alterRole: () => alterRole
});
module.exports = __toCommonJS(alterRole_exports);
var import_shared = require("./shared");
function alterRole(mOptions) {
  const _alter = (roleName, roleOptions = {}) => {
    const options = (0, import_shared.formatRoleOptions)(roleOptions);
    return options ? `ALTER ROLE ${mOptions.literal(roleName)} WITH ${options};` : "";
  };
  return _alter;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  alterRole
});
