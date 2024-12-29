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
var createSchemalize_exports = {};
__export(createSchemalize_exports, {
  createSchemalize: () => createSchemalize
});
module.exports = __toCommonJS(createSchemalize_exports);
var import_decamelize = require("./decamelize");
var import_identity = require("./identity");
var import_quote = require("./quote");
function createSchemalize(options, _legacyShouldQuote) {
  const { shouldDecamelize, shouldQuote } = typeof options === "boolean" ? {
    shouldDecamelize: options,
    shouldQuote: _legacyShouldQuote
  } : options;
  if (typeof options === "boolean") {
    console.warn(
      "createSchemalize(shouldDecamelize, shouldQuote) is deprecated. Use createSchemalize({ shouldDecamelize, shouldQuote }) instead."
    );
  }
  const transform = [
    shouldDecamelize ? import_decamelize.decamelize : import_identity.identity,
    shouldQuote ? import_quote.quote : import_identity.identity
  ].reduce((acc, fn) => fn === import_identity.identity ? acc : (str) => acc(fn(str)));
  return (value) => {
    if (typeof value === "object") {
      const { schema, name } = value;
      return (schema ? `${transform(schema)}.` : "") + transform(name);
    }
    return transform(value);
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createSchemalize
});
