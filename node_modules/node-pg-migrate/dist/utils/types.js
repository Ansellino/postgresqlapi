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
var types_exports = {};
__export(types_exports, {
  applyType: () => applyType,
  applyTypeAdapters: () => applyTypeAdapters
});
module.exports = __toCommonJS(types_exports);
const TYPE_ADAPTERS = Object.freeze({
  int: "integer",
  string: "text",
  float: "real",
  double: "double precision",
  datetime: "timestamp",
  bool: "boolean"
});
const DEFAULT_TYPE_SHORTHANDS = Object.freeze({
  id: { type: "serial", primaryKey: true }
  // convenience type for serial primary keys
});
function applyTypeAdapters(type) {
  return type in TYPE_ADAPTERS ? TYPE_ADAPTERS[type] : type;
}
function toType(type) {
  return typeof type === "string" ? { type } : type;
}
function removeType({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type,
  ...rest
}) {
  return rest;
}
function applyType(type, extendingTypeShorthands = {}) {
  const typeShorthands = {
    ...DEFAULT_TYPE_SHORTHANDS,
    ...extendingTypeShorthands
  };
  const options = toType(type);
  let ext = null;
  const types = [options.type];
  while (typeShorthands[types[types.length - 1]]) {
    ext = {
      ...toType(typeShorthands[types[types.length - 1]]),
      ...ext === null ? {} : removeType(ext)
    };
    if (types.includes(ext.type)) {
      throw new Error(
        `Shorthands contain cyclic dependency: ${types.join(", ")}, ${ext.type}`
      );
    } else {
      types.push(ext.type);
    }
  }
  return {
    ...ext,
    ...options,
    type: applyTypeAdapters((ext == null ? void 0 : ext.type) ?? options.type)
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  applyType,
  applyTypeAdapters
});
