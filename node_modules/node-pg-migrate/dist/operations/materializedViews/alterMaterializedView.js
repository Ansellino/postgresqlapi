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
var alterMaterializedView_exports = {};
__export(alterMaterializedView_exports, {
  alterMaterializedView: () => alterMaterializedView
});
module.exports = __toCommonJS(alterMaterializedView_exports);
var import_utils = require("../../utils");
var import_shared = require("./shared");
function alterMaterializedView(mOptions) {
  const _alter = (viewName, options) => {
    const { cluster, extension, storageParameters = {} } = options;
    const clauses = [];
    if (cluster !== void 0) {
      if (cluster) {
        clauses.push(`CLUSTER ON ${mOptions.literal(cluster)}`);
      } else {
        clauses.push("SET WITHOUT CLUSTER");
      }
    }
    if (extension) {
      clauses.push(`DEPENDS ON EXTENSION ${mOptions.literal(extension)}`);
    }
    const withOptions = Object.keys(storageParameters).filter((key) => storageParameters[key] !== null).map((0, import_shared.storageParameterStr)(storageParameters)).join(", ");
    if (withOptions) {
      clauses.push(`SET (${withOptions})`);
    }
    const resetOptions = Object.keys(storageParameters).filter((key) => storageParameters[key] === null).join(", ");
    if (resetOptions) {
      clauses.push(`RESET (${resetOptions})`);
    }
    const clausesStr = (0, import_utils.formatLines)(clauses);
    const viewNameStr = mOptions.literal(viewName);
    return `ALTER MATERIALIZED VIEW ${viewNameStr}
${clausesStr};`;
  };
  return _alter;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  alterMaterializedView
});
