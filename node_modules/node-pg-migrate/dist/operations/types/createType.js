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
var createType_exports = {};
__export(createType_exports, {
  createType: () => createType
});
module.exports = __toCommonJS(createType_exports);
var import_utils = require("../../utils");
var import_dropType = require("./dropType");
function createType(mOptions) {
  const _create = (typeName, options) => {
    if (Array.isArray(options)) {
      const optionsStr = options.map(import_utils.escapeValue).join(", ");
      const typeNameStr = mOptions.literal(typeName);
      return `CREATE TYPE ${typeNameStr} AS ENUM (${optionsStr});`;
    }
    const attributes = Object.entries(options).map(([attributeName, attribute]) => {
      const typeStr = (0, import_utils.applyType)(attribute, mOptions.typeShorthands).type;
      return `${mOptions.literal(attributeName)} ${typeStr}`;
    }).join(",\n");
    return `CREATE TYPE ${mOptions.literal(typeName)} AS (
${attributes}
);`;
  };
  _create.reverse = (0, import_dropType.dropType)(mOptions);
  return _create;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createType
});
