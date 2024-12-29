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
var createOperator_exports = {};
__export(createOperator_exports, {
  createOperator: () => createOperator
});
module.exports = __toCommonJS(createOperator_exports);
var import_dropOperator = require("./dropOperator");
function createOperator(mOptions) {
  const _create = (operatorName, options) => {
    const {
      procedure,
      left,
      right,
      commutator,
      negator,
      restrict,
      join,
      hashes = false,
      merges = false
    } = options;
    const defs = [];
    defs.push(`PROCEDURE = ${mOptions.literal(procedure)}`);
    if (left) {
      defs.push(`LEFTARG = ${mOptions.literal(left)}`);
    }
    if (right) {
      defs.push(`RIGHTARG = ${mOptions.literal(right)}`);
    }
    if (commutator) {
      defs.push(`COMMUTATOR = ${mOptions.schemalize(commutator)}`);
    }
    if (negator) {
      defs.push(`NEGATOR = ${mOptions.schemalize(negator)}`);
    }
    if (restrict) {
      defs.push(`RESTRICT = ${mOptions.literal(restrict)}`);
    }
    if (join) {
      defs.push(`JOIN = ${mOptions.literal(join)}`);
    }
    if (hashes) {
      defs.push("HASHES");
    }
    if (merges) {
      defs.push("MERGES");
    }
    const operatorNameStr = mOptions.schemalize(operatorName);
    return `CREATE OPERATOR ${operatorNameStr} (${defs.join(", ")});`;
  };
  _create.reverse = (0, import_dropOperator.dropOperator)(mOptions);
  return _create;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createOperator
});
