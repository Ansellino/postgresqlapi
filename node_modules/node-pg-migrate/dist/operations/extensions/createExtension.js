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
var createExtension_exports = {};
__export(createExtension_exports, {
  createExtension: () => createExtension
});
module.exports = __toCommonJS(createExtension_exports);
var import_utils = require("../../utils");
var import_dropExtension = require("./dropExtension");
function createExtension(mOptions) {
  const _create = (_extensions, options = {}) => {
    const { ifNotExists = false, schema } = options;
    const extensions = (0, import_utils.toArray)(_extensions);
    const ifNotExistsStr = ifNotExists ? " IF NOT EXISTS" : "";
    const schemaStr = schema ? ` SCHEMA ${mOptions.literal(schema)}` : "";
    return extensions.map((extension) => {
      const extensionStr = mOptions.literal(extension);
      return `CREATE EXTENSION${ifNotExistsStr} ${extensionStr}${schemaStr};`;
    });
  };
  _create.reverse = (0, import_dropExtension.dropExtension)(mOptions);
  return _create;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createExtension
});
