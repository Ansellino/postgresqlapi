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
var renameConstraint_exports = {};
__export(renameConstraint_exports, {
  renameConstraint: () => renameConstraint
});
module.exports = __toCommonJS(renameConstraint_exports);
function renameConstraint(mOptions) {
  const _rename = (tableName, constraintName, newName) => {
    const tableNameStr = mOptions.literal(tableName);
    const constraintNameStr = mOptions.literal(constraintName);
    const newNameStr = mOptions.literal(newName);
    return `ALTER TABLE ${tableNameStr} RENAME CONSTRAINT ${constraintNameStr} TO ${newNameStr};`;
  };
  _rename.reverse = (tableName, constraintName, newName) => _rename(tableName, newName, constraintName);
  return _rename;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  renameConstraint
});
