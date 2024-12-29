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
var createSequence_exports = {};
__export(createSequence_exports, {
  createSequence: () => createSequence
});
module.exports = __toCommonJS(createSequence_exports);
var import_dropSequence = require("./dropSequence");
var import_shared = require("./shared");
function createSequence(mOptions) {
  const _create = (sequenceName, options = {}) => {
    const { temporary = false, ifNotExists = false } = options;
    const temporaryStr = temporary ? " TEMPORARY" : "";
    const ifNotExistsStr = ifNotExists ? " IF NOT EXISTS" : "";
    const sequenceNameStr = mOptions.literal(sequenceName);
    const clausesStr = (0, import_shared.parseSequenceOptions)(
      mOptions.typeShorthands,
      options
    ).join("\n  ");
    return `CREATE${temporaryStr} SEQUENCE${ifNotExistsStr} ${sequenceNameStr}
  ${clausesStr};`;
  };
  _create.reverse = (0, import_dropSequence.dropSequence)(mOptions);
  return _create;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createSequence
});
