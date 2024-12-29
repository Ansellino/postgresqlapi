"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
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
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var StringIdGenerator_exports = {};
__export(StringIdGenerator_exports, {
  StringIdGenerator: () => StringIdGenerator
});
module.exports = __toCommonJS(StringIdGenerator_exports);
class StringIdGenerator {
  constructor(chars = "abcdefghijklmnopqrstuvwxyz") {
    this.chars = chars;
    __publicField(this, "ids", [0]);
  }
  next() {
    const idsChars = this.ids.map((id) => this.chars[id]);
    this.increment();
    return idsChars.join("");
  }
  increment() {
    for (let i = this.ids.length - 1; i >= 0; i -= 1) {
      this.ids[i] += 1;
      if (this.ids[i] < this.chars.length) {
        return;
      }
      this.ids[i] = 0;
    }
    this.ids.unshift(0);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  StringIdGenerator
});
