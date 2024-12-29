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
var domains_exports = {};
module.exports = __toCommonJS(domains_exports);
__reExport(domains_exports, require("./alterDomain"), module.exports);
__reExport(domains_exports, require("./createDomain"), module.exports);
__reExport(domains_exports, require("./dropDomain"), module.exports);
__reExport(domains_exports, require("./renameDomain"), module.exports);
__reExport(domains_exports, require("./shared"), module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ...require("./alterDomain"),
  ...require("./createDomain"),
  ...require("./dropDomain"),
  ...require("./renameDomain"),
  ...require("./shared")
});
