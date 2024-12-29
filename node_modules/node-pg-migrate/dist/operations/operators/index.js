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
var operators_exports = {};
module.exports = __toCommonJS(operators_exports);
__reExport(operators_exports, require("./addToOperatorFamily"), module.exports);
__reExport(operators_exports, require("./createOperator"), module.exports);
__reExport(operators_exports, require("./createOperatorClass"), module.exports);
__reExport(operators_exports, require("./createOperatorFamily"), module.exports);
__reExport(operators_exports, require("./dropOperator"), module.exports);
__reExport(operators_exports, require("./dropOperatorClass"), module.exports);
__reExport(operators_exports, require("./dropOperatorFamily"), module.exports);
__reExport(operators_exports, require("./removeFromOperatorFamily"), module.exports);
__reExport(operators_exports, require("./renameOperatorClass"), module.exports);
__reExport(operators_exports, require("./renameOperatorFamily"), module.exports);
__reExport(operators_exports, require("./shared"), module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ...require("./addToOperatorFamily"),
  ...require("./createOperator"),
  ...require("./createOperatorClass"),
  ...require("./createOperatorFamily"),
  ...require("./dropOperator"),
  ...require("./dropOperatorClass"),
  ...require("./dropOperatorFamily"),
  ...require("./removeFromOperatorFamily"),
  ...require("./renameOperatorClass"),
  ...require("./renameOperatorFamily"),
  ...require("./shared")
});
