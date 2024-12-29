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
var renameSequence_exports = {};
__export(renameSequence_exports, {
  renameSequence: () => renameSequence
});
module.exports = __toCommonJS(renameSequence_exports);
function renameSequence(mOptions) {
  const _rename = (sequenceName, newSequenceName) => {
    const sequenceNameStr = mOptions.literal(sequenceName);
    const newSequenceNameStr = mOptions.literal(newSequenceName);
    return `ALTER SEQUENCE ${sequenceNameStr} RENAME TO ${newSequenceNameStr};`;
  };
  _rename.reverse = (sequenceName, newSequenceName) => _rename(newSequenceName, sequenceName);
  return _rename;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  renameSequence
});
