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
var roles_exports = {};
module.exports = __toCommonJS(roles_exports);
__reExport(roles_exports, require("./alterRole"), module.exports);
__reExport(roles_exports, require("./createRole"), module.exports);
__reExport(roles_exports, require("./dropRole"), module.exports);
__reExport(roles_exports, require("./renameRole"), module.exports);
__reExport(roles_exports, require("./shared"), module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ...require("./alterRole"),
  ...require("./createRole"),
  ...require("./dropRole"),
  ...require("./renameRole"),
  ...require("./shared")
});
