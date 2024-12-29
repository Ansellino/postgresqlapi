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
var alterSequence_exports = {};
__export(alterSequence_exports, {
  alterSequence: () => alterSequence
});
module.exports = __toCommonJS(alterSequence_exports);
var import_shared = require("./shared");
function alterSequence(mOptions) {
  return (sequenceName, options) => {
    const { restart } = options;
    const clauses = (0, import_shared.parseSequenceOptions)(mOptions.typeShorthands, options);
    if (restart) {
      if (restart === true) {
        clauses.push("RESTART");
      } else {
        clauses.push(`RESTART WITH ${restart}`);
      }
    }
    return `ALTER SEQUENCE ${mOptions.literal(sequenceName)}
  ${clauses.join("\n  ")};`;
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  alterSequence
});
