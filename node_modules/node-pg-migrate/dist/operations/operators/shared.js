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
var shared_exports = {};
__export(shared_exports, {
  operatorMap: () => operatorMap
});
module.exports = __toCommonJS(shared_exports);
var import_utils = require("../../utils");
function operatorMap(mOptions) {
  return ({ type, number, name, params = [] }) => {
    const nameStr = mOptions.literal(name);
    if (String(type).toLowerCase() === "operator") {
      if (params.length > 2) {
        throw new Error("Operator can't have more than 2 parameters");
      }
      const paramsStr = params.length > 0 ? (0, import_utils.formatParams)(params, mOptions) : "";
      return `OPERATOR ${number} ${nameStr}${paramsStr}`;
    }
    if (String(type).toLowerCase() === "function") {
      const paramsStr = (0, import_utils.formatParams)(params, mOptions);
      return `FUNCTION ${number} ${nameStr}${paramsStr}`;
    }
    throw new Error('Operator "type" must be either "function" or "operator"');
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  operatorMap
});
