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
var renameFunction_exports = {};
__export(renameFunction_exports, {
  renameFunction: () => renameFunction
});
module.exports = __toCommonJS(renameFunction_exports);
var import_utils = require("../../utils");
function renameFunction(mOptions) {
  const _rename = (oldFunctionName, functionParams = [], newFunctionName) => {
    const paramsStr = (0, import_utils.formatParams)(functionParams, mOptions);
    const oldFunctionNameStr = mOptions.literal(oldFunctionName);
    const newFunctionNameStr = mOptions.literal(newFunctionName);
    return `ALTER FUNCTION ${oldFunctionNameStr}${paramsStr} RENAME TO ${newFunctionNameStr};`;
  };
  _rename.reverse = (oldFunctionName, functionParams, newFunctionName) => _rename(newFunctionName, functionParams, oldFunctionName);
  return _rename;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  renameFunction
});
