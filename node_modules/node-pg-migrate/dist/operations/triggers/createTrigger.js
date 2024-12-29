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
var createTrigger_exports = {};
__export(createTrigger_exports, {
  createTrigger: () => createTrigger
});
module.exports = __toCommonJS(createTrigger_exports);
var import_utils = require("../../utils");
var import_functions = require("../functions");
var import_dropTrigger = require("./dropTrigger");
function createTrigger(mOptions) {
  const _create = (tableName, triggerName, triggerOptions, definition) => {
    const {
      constraint = false,
      condition,
      operation,
      deferrable = false,
      deferred = false,
      functionParams = []
    } = triggerOptions;
    let { when, level = "STATEMENT", function: functionName } = triggerOptions;
    const operations = (0, import_utils.toArray)(operation).join(" OR ");
    if (constraint) {
      when = "AFTER";
    }
    if (!when) {
      throw new Error('"when" (BEFORE/AFTER/INSTEAD OF) have to be specified');
    }
    const isInsteadOf = /instead\s+of/i.test(when);
    if (isInsteadOf) {
      level = "ROW";
    }
    if (definition) {
      functionName = functionName === void 0 ? triggerName : functionName;
    }
    if (!functionName) {
      throw new Error("Can't determine function name");
    }
    if (isInsteadOf && condition) {
      throw new Error("INSTEAD OF trigger can't have condition specified");
    }
    if (!operations) {
      throw new Error(
        '"operation" (INSERT/UPDATE[ OF ...]/DELETE/TRUNCATE) have to be specified'
      );
    }
    const defferStr = constraint ? `${deferrable ? `DEFERRABLE INITIALLY ${deferred ? "DEFERRED" : "IMMEDIATE"}` : "NOT DEFERRABLE"}
  ` : "";
    const conditionClause = condition ? `WHEN (${condition})
  ` : "";
    const constraintStr = constraint ? " CONSTRAINT" : "";
    const paramsStr = functionParams.map(import_utils.escapeValue).join(", ");
    const triggerNameStr = mOptions.literal(triggerName);
    const tableNameStr = mOptions.literal(tableName);
    const functionNameStr = mOptions.literal(functionName);
    const triggerSQL = `CREATE${constraintStr} TRIGGER ${triggerNameStr}
  ${when} ${operations} ON ${tableNameStr}
  ${defferStr}FOR EACH ${level}
  ${conditionClause}EXECUTE PROCEDURE ${functionNameStr}(${paramsStr});`;
    const fnSQL = definition ? `${(0, import_functions.createFunction)(mOptions)(
      functionName,
      [],
      { ...triggerOptions, returns: "trigger" },
      definition
    )}
` : "";
    return `${fnSQL}${triggerSQL}`;
  };
  _create.reverse = (tableName, triggerName, triggerOptions, definition) => {
    const triggerSQL = (0, import_dropTrigger.dropTrigger)(mOptions)(
      tableName,
      triggerName,
      triggerOptions
    );
    const fnSQL = definition ? `
${(0, import_functions.dropFunction)(mOptions)(triggerOptions.function || triggerName, [], triggerOptions)}` : "";
    return `${triggerSQL}${fnSQL}`;
  };
  return _create;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createTrigger
});
