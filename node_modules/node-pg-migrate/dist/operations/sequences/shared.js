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
  parseSequenceOptions: () => parseSequenceOptions
});
module.exports = __toCommonJS(shared_exports);
var import_utils = require("../../utils");
function parseSequenceOptions(typeShorthands, options) {
  const { type, increment, minvalue, maxvalue, start, cache, cycle, owner } = options;
  const clauses = [];
  if (type) {
    clauses.push(`AS ${(0, import_utils.applyType)(type, typeShorthands).type}`);
  }
  if (increment) {
    clauses.push(`INCREMENT BY ${increment}`);
  }
  if (minvalue) {
    clauses.push(`MINVALUE ${minvalue}`);
  } else if (minvalue === null || minvalue === false) {
    clauses.push("NO MINVALUE");
  }
  if (maxvalue) {
    clauses.push(`MAXVALUE ${maxvalue}`);
  } else if (maxvalue === null || maxvalue === false) {
    clauses.push("NO MAXVALUE");
  }
  if (start) {
    clauses.push(`START WITH ${start}`);
  }
  if (cache) {
    clauses.push(`CACHE ${cache}`);
  }
  if (cycle) {
    clauses.push("CYCLE");
  } else if (cycle === false) {
    clauses.push("NO CYCLE");
  }
  if (owner) {
    clauses.push(`OWNED BY ${owner}`);
  } else if (owner === null || owner === false) {
    clauses.push("OWNED BY NONE");
  }
  return clauses;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  parseSequenceOptions
});
