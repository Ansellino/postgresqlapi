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
var dropOperator_exports = {};
__export(dropOperator_exports, {
  dropOperator: () => dropOperator
});
module.exports = __toCommonJS(dropOperator_exports);
function dropOperator(mOptions) {
  const _drop = (operatorName, options = {}) => {
    const {
      left = "none",
      right = "none",
      ifExists = false,
      cascade = false
    } = options;
    const operatorNameStr = mOptions.schemalize(operatorName);
    const leftStr = mOptions.literal(left);
    const rightStr = mOptions.literal(right);
    const ifExistsStr = ifExists ? " IF EXISTS" : "";
    const cascadeStr = cascade ? " CASCADE" : "";
    return `DROP OPERATOR${ifExistsStr} ${operatorNameStr}(${leftStr}, ${rightStr})${cascadeStr};`;
  };
  return _drop;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  dropOperator
});
