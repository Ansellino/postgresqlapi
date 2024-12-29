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
var materializedViews_exports = {};
module.exports = __toCommonJS(materializedViews_exports);
__reExport(materializedViews_exports, require("./alterMaterializedView"), module.exports);
__reExport(materializedViews_exports, require("./createMaterializedView"), module.exports);
__reExport(materializedViews_exports, require("./dropMaterializedView"), module.exports);
__reExport(materializedViews_exports, require("./refreshMaterializedView"), module.exports);
__reExport(materializedViews_exports, require("./renameMaterializedView"), module.exports);
__reExport(materializedViews_exports, require("./renameMaterializedViewColumn"), module.exports);
__reExport(materializedViews_exports, require("./shared"), module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ...require("./alterMaterializedView"),
  ...require("./createMaterializedView"),
  ...require("./dropMaterializedView"),
  ...require("./refreshMaterializedView"),
  ...require("./renameMaterializedView"),
  ...require("./renameMaterializedViewColumn"),
  ...require("./shared")
});
