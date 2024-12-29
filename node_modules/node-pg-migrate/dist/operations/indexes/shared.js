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
  generateColumnString: () => generateColumnString,
  generateColumnsString: () => generateColumnsString,
  generateIndexName: () => generateIndexName
});
module.exports = __toCommonJS(shared_exports);
function generateIndexName(table, columns, options, schemalize) {
  if (options.name) {
    return typeof table === "object" ? { schema: table.schema, name: options.name } : options.name;
  }
  const cols = columns.map((col) => schemalize(typeof col === "string" ? col : col.name)).join("_");
  const uniq = "unique" in options && options.unique ? "_unique" : "";
  return typeof table === "object" ? {
    schema: table.schema,
    name: `${table.name}_${cols}${uniq}_index`
  } : `${table}_${cols}${uniq}_index`;
}
function generateColumnString(column, mOptions) {
  const name = mOptions.schemalize(column);
  const isSpecial = /[ ().]/.test(name);
  return isSpecial ? name : mOptions.literal(name);
}
function generateColumnsString(columns, mOptions) {
  return columns.map(
    (column) => typeof column === "string" ? generateColumnString(column, mOptions) : [
      generateColumnString(column.name, mOptions),
      column.opclass ? mOptions.literal(column.opclass) : void 0,
      column.sort
    ].filter((s) => typeof s === "string" && s !== "").join(" ")
  ).join(", ");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  generateColumnString,
  generateColumnsString,
  generateIndexName
});
