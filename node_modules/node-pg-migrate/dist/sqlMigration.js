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
var sqlMigration_exports = {};
__export(sqlMigration_exports, {
  default: () => sqlMigration_default,
  getActions: () => getActions
});
module.exports = __toCommonJS(sqlMigration_exports);
var import_promises = require("node:fs/promises");
function createMigrationCommentRegex(direction) {
  return new RegExp(`^\\s*--[\\s-]*${direction}\\s+migration`, "im");
}
function getActions(content) {
  const upMigrationCommentRegex = createMigrationCommentRegex("up");
  const downMigrationCommentRegex = createMigrationCommentRegex("down");
  const upMigrationStart = content.search(upMigrationCommentRegex);
  const downMigrationStart = content.search(downMigrationCommentRegex);
  const upSql = upMigrationStart >= 0 ? content.slice(
    upMigrationStart,
    downMigrationStart < upMigrationStart ? void 0 : downMigrationStart
  ) : content;
  const downSql = downMigrationStart >= 0 ? content.slice(
    downMigrationStart,
    upMigrationStart < downMigrationStart ? void 0 : upMigrationStart
  ) : void 0;
  return {
    up: (pgm) => {
      pgm.sql(upSql);
    },
    down: downSql === void 0 ? false : (pgm) => {
      pgm.sql(downSql);
    }
  };
}
async function sqlMigration(sqlPath) {
  const content = await (0, import_promises.readFile)(sqlPath, "utf8");
  return getActions(content);
}
var sqlMigration_default = sqlMigration;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getActions
});
