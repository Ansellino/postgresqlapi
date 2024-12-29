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
var alterDomain_exports = {};
__export(alterDomain_exports, {
  alterDomain: () => alterDomain
});
module.exports = __toCommonJS(alterDomain_exports);
var import_utils = require("../../utils");
function alterDomain(mOptions) {
  const _alter = (domainName, options) => {
    const {
      default: defaultValue,
      notNull,
      allowNull = false,
      check,
      constraintName
    } = options;
    const actions = [];
    if (defaultValue === null) {
      actions.push("DROP DEFAULT");
    } else if (defaultValue !== void 0) {
      actions.push(`SET DEFAULT ${(0, import_utils.escapeValue)(defaultValue)}`);
    }
    if (notNull) {
      actions.push("SET NOT NULL");
    } else if (notNull === false || allowNull) {
      actions.push("DROP NOT NULL");
    }
    if (check) {
      actions.push(
        `${constraintName ? `CONSTRAINT ${mOptions.literal(constraintName)} ` : ""}CHECK (${check})`
      );
    }
    return `${actions.map((action) => `ALTER DOMAIN ${mOptions.literal(domainName)} ${action}`).join(";\n")};`;
  };
  return _alter;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  alterDomain
});
