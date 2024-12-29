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
  formatRoleOptions: () => formatRoleOptions
});
module.exports = __toCommonJS(shared_exports);
var import_utils = require("../../utils");
function formatRoleOptions(roleOptions = {}) {
  const options = [];
  if (roleOptions.superuser !== void 0) {
    options.push(roleOptions.superuser ? "SUPERUSER" : "NOSUPERUSER");
  }
  if (roleOptions.createdb !== void 0) {
    options.push(roleOptions.createdb ? "CREATEDB" : "NOCREATEDB");
  }
  if (roleOptions.createrole !== void 0) {
    options.push(roleOptions.createrole ? "CREATEROLE" : "NOCREATEROLE");
  }
  if (roleOptions.inherit !== void 0) {
    options.push(roleOptions.inherit ? "INHERIT" : "NOINHERIT");
  }
  if (roleOptions.login !== void 0) {
    options.push(roleOptions.login ? "LOGIN" : "NOLOGIN");
  }
  if (roleOptions.replication !== void 0) {
    options.push(roleOptions.replication ? "REPLICATION" : "NOREPLICATION");
  }
  if (roleOptions.bypassrls !== void 0) {
    options.push(roleOptions.bypassrls ? "BYPASSRLS" : "NOBYPASSRLS");
  }
  if (roleOptions.limit) {
    options.push(`CONNECTION LIMIT ${Number(roleOptions.limit)}`);
  }
  if (roleOptions.password !== void 0) {
    const encrypted = roleOptions.encrypted === false ? "UNENCRYPTED" : "ENCRYPTED";
    options.push(`${encrypted} PASSWORD ${(0, import_utils.escapeValue)(roleOptions.password)}`);
  }
  if (roleOptions.valid !== void 0) {
    const valid = roleOptions.valid ? (0, import_utils.escapeValue)(roleOptions.valid) : "'infinity'";
    options.push(`VALID UNTIL ${valid}`);
  }
  if (roleOptions.inRole) {
    const inRole = (0, import_utils.toArray)(roleOptions.inRole).join(", ");
    options.push(`IN ROLE ${inRole}`);
  }
  if (roleOptions.role) {
    const role = (0, import_utils.toArray)(roleOptions.role).join(", ");
    options.push(`ROLE ${role}`);
  }
  if (roleOptions.admin) {
    const admin = (0, import_utils.toArray)(roleOptions.admin).join(", ");
    options.push(`ADMIN ${admin}`);
  }
  return options.join(" ");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  formatRoleOptions
});
