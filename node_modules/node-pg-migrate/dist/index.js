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
var src_exports = {};
__export(src_exports, {
  Migration: () => import_migration.Migration,
  PgLiteral: () => import_utils.PgLiteral,
  PgType: () => import_types.PgType,
  default: () => import_runner.runner,
  isPgLiteral: () => import_utils.isPgLiteral,
  runner: () => import_runner.runner
});
module.exports = __toCommonJS(src_exports);
var import_migration = require("./migration");
var import_runner = require("./runner");
var import_types = require("./types");
var import_utils = require("./utils");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Migration,
  PgLiteral,
  PgType,
  isPgLiteral,
  runner
});
