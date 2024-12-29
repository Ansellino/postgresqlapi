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
var escapeValue_exports = {};
__export(escapeValue_exports, {
  escapeValue: () => escapeValue
});
module.exports = __toCommonJS(escapeValue_exports);
var import__ = require(".");
function escapeValue(val) {
  if (val === null) {
    return "NULL";
  }
  if (typeof val === "boolean") {
    return val.toString();
  }
  if (typeof val === "string") {
    let dollars;
    const ids = new import__.StringIdGenerator();
    let index;
    do {
      index = ids.next();
      dollars = `$pg${index}$`;
    } while (val.includes(dollars));
    return `${dollars}${val}${dollars}`;
  }
  if (typeof val === "number") {
    return val;
  }
  if (Array.isArray(val)) {
    const arrayStr = val.map(escapeValue).join(",").replace(/ARRAY/g, "");
    return `ARRAY[${arrayStr}]`;
  }
  if ((0, import__.isPgLiteral)(val)) {
    return val.value;
  }
  return "";
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  escapeValue
});
