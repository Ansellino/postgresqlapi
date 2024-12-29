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
var types_exports = {};
module.exports = __toCommonJS(types_exports);
__reExport(types_exports, require("./addTypeAttribute"), module.exports);
__reExport(types_exports, require("./addTypeValue"), module.exports);
__reExport(types_exports, require("./createType"), module.exports);
__reExport(types_exports, require("./dropType"), module.exports);
__reExport(types_exports, require("./dropTypeAttribute"), module.exports);
__reExport(types_exports, require("./renameType"), module.exports);
__reExport(types_exports, require("./renameTypeAttribute"), module.exports);
__reExport(types_exports, require("./renameTypeValue"), module.exports);
__reExport(types_exports, require("./setTypeAttribute"), module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ...require("./addTypeAttribute"),
  ...require("./addTypeValue"),
  ...require("./createType"),
  ...require("./dropType"),
  ...require("./dropTypeAttribute"),
  ...require("./renameType"),
  ...require("./renameTypeAttribute"),
  ...require("./renameTypeValue"),
  ...require("./setTypeAttribute")
});
