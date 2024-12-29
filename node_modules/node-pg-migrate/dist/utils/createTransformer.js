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
var createTransformer_exports = {};
__export(createTransformer_exports, {
  createTransformer: () => createTransformer
});
module.exports = __toCommonJS(createTransformer_exports);
var import__ = require(".");
function createTransformer(literal) {
  return (statement, mapping = {}) => Object.keys(mapping).reduce((str, param) => {
    const val = mapping == null ? void 0 : mapping[param];
    return str.replace(
      new RegExp(`{${param}}`, "g"),
      val === void 0 ? "" : typeof val === "string" || typeof val === "object" && val !== null && "name" in val ? literal(val) : String((0, import__.escapeValue)(val))
    );
  }, statement);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createTransformer
});
