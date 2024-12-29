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
var decamelize_exports = {};
__export(decamelize_exports, {
  decamelize: () => decamelize
});
module.exports = __toCommonJS(decamelize_exports);
const REPLACEMENT = "$1_$2";
function decamelize(text) {
  if (text.length < 2) {
    return text.toLowerCase();
  }
  const decamelized = text.replace(
    new RegExp("([\\p{Lowercase_Letter}\\d])(\\p{Uppercase_Letter})", "gu"),
    REPLACEMENT
  );
  return decamelized.replace(
    new RegExp("(\\p{Uppercase_Letter})(\\p{Uppercase_Letter}\\p{Lowercase_Letter}+)", "gu"),
    REPLACEMENT
  ).toLowerCase();
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  decamelize
});
