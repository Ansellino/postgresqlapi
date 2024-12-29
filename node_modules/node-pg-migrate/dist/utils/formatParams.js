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
var formatParams_exports = {};
__export(formatParams_exports, {
  formatParams: () => formatParams
});
module.exports = __toCommonJS(formatParams_exports);
var import__ = require(".");
function formatParam(mOptions) {
  return (param) => {
    const {
      mode,
      name,
      type,
      default: defaultValue
    } = (0, import__.applyType)(param, mOptions.typeShorthands);
    const options = [];
    if (mode) {
      options.push(mode);
    }
    if (name) {
      options.push(mOptions.literal(name));
    }
    if (type) {
      options.push(type);
    }
    if (defaultValue) {
      options.push(`DEFAULT ${(0, import__.escapeValue)(defaultValue)}`);
    }
    return options.join(" ");
  };
}
function formatParams(params, mOptions) {
  return `(${params.map(formatParam(mOptions)).join(", ")})`;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  formatParams
});
