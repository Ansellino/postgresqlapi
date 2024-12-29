"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var grants_exports = {};
module.exports = __toCommonJS(grants_exports);
__reExport(grants_exports, require("./grantOnSchemas"), module.exports);
__reExport(grants_exports, require("./grantOnTables"), module.exports);
__reExport(grants_exports, require("./grantRoles"), module.exports);
__reExport(grants_exports, require("./revokeOnSchemas"), module.exports);
__reExport(grants_exports, require("./revokeOnTables"), module.exports);
__reExport(grants_exports, require("./revokeRoles"), module.exports);
__reExport(grants_exports, require("./shared"), module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ...require("./grantOnSchemas"),
  ...require("./grantOnTables"),
  ...require("./grantRoles"),
  ...require("./revokeOnSchemas"),
  ...require("./revokeOnTables"),
  ...require("./revokeRoles"),
  ...require("./shared")
});
