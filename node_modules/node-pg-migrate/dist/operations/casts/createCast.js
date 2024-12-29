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
var createCast_exports = {};
__export(createCast_exports, {
  createCast: () => createCast
});
module.exports = __toCommonJS(createCast_exports);
var import_dropCast = require("./dropCast");
function createCast(mOptions) {
  const _create = (sourceType, targetType, options = {}) => {
    const { functionName, argumentTypes, inout = false, as } = options;
    let conversion = "";
    if (functionName) {
      const args = argumentTypes || [sourceType];
      conversion = ` WITH FUNCTION ${mOptions.literal(functionName)}(${args.join(", ")})`;
    } else if (inout) {
      conversion = " WITH INOUT";
    } else {
      conversion = " WITHOUT FUNCTION";
    }
    const implicit = as ? ` AS ${as}` : "";
    return `CREATE CAST (${sourceType} AS ${targetType})${conversion}${implicit};`;
  };
  _create.reverse = (0, import_dropCast.dropCast)(mOptions);
  return _create;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createCast
});
