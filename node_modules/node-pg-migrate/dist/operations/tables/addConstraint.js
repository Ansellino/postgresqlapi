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
var addConstraint_exports = {};
__export(addConstraint_exports, {
  addConstraint: () => addConstraint
});
module.exports = __toCommonJS(addConstraint_exports);
var import_utils = require("../../utils");
var import_dropConstraint = require("./dropConstraint");
var import_shared = require("./shared");
function addConstraint(mOptions) {
  const _add = (tableName, constraintName, expressionOrOptions) => {
    const { constraints, comments } = typeof expressionOrOptions === "string" ? {
      constraints: [
        `${constraintName ? `CONSTRAINT ${mOptions.literal(constraintName)} ` : ""}${expressionOrOptions}`
      ],
      comments: []
    } : (0, import_shared.parseConstraints)(
      tableName,
      expressionOrOptions,
      constraintName,
      mOptions.literal
    );
    const constraintStr = (0, import_utils.formatLines)(constraints, "  ADD ");
    return [
      `ALTER TABLE ${mOptions.literal(tableName)}
${constraintStr};`,
      ...comments
    ].join("\n");
  };
  _add.reverse = (tableName, constraintName, expressionOrOptions) => {
    if (constraintName === null) {
      throw new Error(
        "Impossible to automatically infer down migration for addConstraint without naming constraint"
      );
    }
    if (typeof expressionOrOptions === "string") {
      throw new Error(
        "Impossible to automatically infer down migration for addConstraint with raw SQL expression"
      );
    }
    return (0, import_dropConstraint.dropConstraint)(mOptions)(
      tableName,
      constraintName,
      expressionOrOptions
    );
  };
  return _add;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addConstraint
});
