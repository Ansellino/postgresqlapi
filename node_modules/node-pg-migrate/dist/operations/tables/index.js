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
var tables_exports = {};
module.exports = __toCommonJS(tables_exports);
__reExport(tables_exports, require("./addColumns"), module.exports);
__reExport(tables_exports, require("./addConstraint"), module.exports);
__reExport(tables_exports, require("./alterColumn"), module.exports);
__reExport(tables_exports, require("./alterTable"), module.exports);
__reExport(tables_exports, require("./createTable"), module.exports);
__reExport(tables_exports, require("./dropColumns"), module.exports);
__reExport(tables_exports, require("./dropConstraint"), module.exports);
__reExport(tables_exports, require("./dropTable"), module.exports);
__reExport(tables_exports, require("./renameColumn"), module.exports);
__reExport(tables_exports, require("./renameConstraint"), module.exports);
__reExport(tables_exports, require("./renameTable"), module.exports);
__reExport(tables_exports, require("./shared"), module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ...require("./addColumns"),
  ...require("./addConstraint"),
  ...require("./alterColumn"),
  ...require("./alterTable"),
  ...require("./createTable"),
  ...require("./dropColumns"),
  ...require("./dropConstraint"),
  ...require("./dropTable"),
  ...require("./renameColumn"),
  ...require("./renameConstraint"),
  ...require("./renameTable"),
  ...require("./shared")
});
