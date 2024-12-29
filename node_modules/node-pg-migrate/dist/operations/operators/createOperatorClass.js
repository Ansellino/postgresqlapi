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
var createOperatorClass_exports = {};
__export(createOperatorClass_exports, {
  createOperatorClass: () => createOperatorClass
});
module.exports = __toCommonJS(createOperatorClass_exports);
var import_utils = require("../../utils");
var import_dropOperatorClass = require("./dropOperatorClass");
var import_shared = require("./shared");
function createOperatorClass(mOptions) {
  const _create = (operatorClassName, type, indexMethod, operatorList, options) => {
    const { default: isDefault, family } = options;
    const operatorClassNameStr = mOptions.literal(operatorClassName);
    const defaultStr = isDefault ? " DEFAULT" : "";
    const typeStr = mOptions.literal((0, import_utils.applyType)(type).type);
    const indexMethodStr = mOptions.literal(indexMethod);
    const familyStr = family ? ` FAMILY ${family}` : "";
    const operatorListStr = operatorList.map((0, import_shared.operatorMap)(mOptions)).join(",\n  ");
    return `CREATE OPERATOR CLASS ${operatorClassNameStr}${defaultStr} FOR TYPE ${typeStr} USING ${indexMethodStr}${familyStr} AS
  ${operatorListStr};`;
  };
  _create.reverse = (operatorClassName, type, indexMethod, operatorList, options) => (0, import_dropOperatorClass.dropOperatorClass)(mOptions)(operatorClassName, indexMethod, options);
  return _create;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createOperatorClass
});
