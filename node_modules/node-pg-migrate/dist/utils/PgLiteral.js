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
var PgLiteral_exports = {};
__export(PgLiteral_exports, {
  PgLiteral: () => PgLiteral,
  isPgLiteral: () => isPgLiteral
});
module.exports = __toCommonJS(PgLiteral_exports);
class PgLiteral {
  /**
   * Creates a new `PgLiteral` instance.
   *
   * @param value The string value.
   */
  constructor(value) {
    this.value = value;
    /**
     * Indicates that this object is a `PgLiteral`.
     */
    __publicField(this, "literal", true);
  }
  /**
   * Creates a new `PgLiteral` instance.
   *
   * @param str The string value.
   * @returns The new `PgLiteral` instance.
   */
  static create(str) {
    return new PgLiteral(str);
  }
  /**
   * Returns the string value.
   *
   * @returns The string value.
   */
  toString() {
    return this.value;
  }
}
function isPgLiteral(val) {
  return val instanceof PgLiteral || typeof val === "object" && val !== null && "literal" in val && val.literal === true;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PgLiteral,
  isPgLiteral
});
