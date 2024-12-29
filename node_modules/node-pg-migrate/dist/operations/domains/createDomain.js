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
var createDomain_exports = {};
__export(createDomain_exports, {
  createDomain: () => createDomain
});
module.exports = __toCommonJS(createDomain_exports);
var import_utils = require("../../utils");
var import_dropDomain = require("./dropDomain");
function createDomain(mOptions) {
  const _create = (domainName, type, options = {}) => {
    const {
      default: defaultValue,
      collation,
      notNull = false,
      check,
      constraintName
    } = options;
    const constraints = [];
    if (collation) {
      constraints.push(`COLLATE ${collation}`);
    }
    if (defaultValue !== void 0) {
      constraints.push(`DEFAULT ${(0, import_utils.escapeValue)(defaultValue)}`);
    }
    if (notNull && check) {
      throw new Error(`"notNull" and "check" can't be specified together`);
    } else if (notNull || check) {
      if (constraintName) {
        constraints.push(`CONSTRAINT ${mOptions.literal(constraintName)}`);
      }
      if (notNull) {
        constraints.push("NOT NULL");
      } else if (check) {
        constraints.push(`CHECK (${check})`);
      }
    }
    const constraintsStr = constraints.length > 0 ? ` ${constraints.join(" ")}` : "";
    const typeStr = (0, import_utils.applyType)(type, mOptions.typeShorthands).type;
    const domainNameStr = mOptions.literal(domainName);
    return `CREATE DOMAIN ${domainNameStr} AS ${typeStr}${constraintsStr};`;
  };
  _create.reverse = (domainName, type, options) => (0, import_dropDomain.dropDomain)(mOptions)(domainName, options);
  return _create;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createDomain
});
