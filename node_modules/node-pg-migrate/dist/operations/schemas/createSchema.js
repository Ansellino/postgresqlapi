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
var createSchema_exports = {};
__export(createSchema_exports, {
  createSchema: () => createSchema
});
module.exports = __toCommonJS(createSchema_exports);
var import_dropSchema = require("./dropSchema");
function createSchema(mOptions) {
  const _create = (schemaName, options = {}) => {
    const { ifNotExists = false, authorization } = options;
    const ifNotExistsStr = ifNotExists ? " IF NOT EXISTS" : "";
    const schemaNameStr = mOptions.literal(schemaName);
    const authorizationStr = authorization ? ` AUTHORIZATION ${authorization}` : "";
    return `CREATE SCHEMA${ifNotExistsStr} ${schemaNameStr}${authorizationStr};`;
  };
  _create.reverse = (0, import_dropSchema.dropSchema)(mOptions);
  return _create;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createSchema
});
