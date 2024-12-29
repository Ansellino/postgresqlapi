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
var createPolicy_exports = {};
__export(createPolicy_exports, {
  createPolicy: () => createPolicy
});
module.exports = __toCommonJS(createPolicy_exports);
var import_dropPolicy = require("./dropPolicy");
var import_shared = require("./shared");
function createPolicy(mOptions) {
  const _create = (tableName, policyName, options = {}) => {
    const { role = "PUBLIC", command = "ALL" } = options;
    const createOptions = {
      ...options,
      role
    };
    const clauses = [`FOR ${command}`, ...(0, import_shared.makeClauses)(createOptions)];
    const clausesStr = clauses.join(" ");
    const policyNameStr = mOptions.literal(policyName);
    const tableNameStr = mOptions.literal(tableName);
    return `CREATE POLICY ${policyNameStr} ON ${tableNameStr} ${clausesStr};`;
  };
  _create.reverse = (0, import_dropPolicy.dropPolicy)(mOptions);
  return _create;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createPolicy
});
