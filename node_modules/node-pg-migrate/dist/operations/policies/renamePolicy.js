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
var renamePolicy_exports = {};
__export(renamePolicy_exports, {
  renamePolicy: () => renamePolicy
});
module.exports = __toCommonJS(renamePolicy_exports);
function renamePolicy(mOptions) {
  const _rename = (tableName, policyName, newPolicyName) => {
    const policyNameStr = mOptions.literal(policyName);
    const newPolicyNameStr = mOptions.literal(newPolicyName);
    const tableNameStr = mOptions.literal(tableName);
    return `ALTER POLICY ${policyNameStr} ON ${tableNameStr} RENAME TO ${newPolicyNameStr};`;
  };
  _rename.reverse = (tableName, policyName, newPolicyName) => _rename(tableName, newPolicyName, policyName);
  return _rename;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  renamePolicy
});
