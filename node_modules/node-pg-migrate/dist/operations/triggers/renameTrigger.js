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
var renameTrigger_exports = {};
__export(renameTrigger_exports, {
  renameTrigger: () => renameTrigger
});
module.exports = __toCommonJS(renameTrigger_exports);
function renameTrigger(mOptions) {
  const _rename = (tableName, oldTriggerName, newTriggerName) => {
    const oldTriggerNameStr = mOptions.literal(oldTriggerName);
    const tableNameStr = mOptions.literal(tableName);
    const newTriggerNameStr = mOptions.literal(newTriggerName);
    return `ALTER TRIGGER ${oldTriggerNameStr} ON ${tableNameStr} RENAME TO ${newTriggerNameStr};`;
  };
  _rename.reverse = (tableName, oldTriggerName, newTriggerName) => _rename(tableName, newTriggerName, oldTriggerName);
  return _rename;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  renameTrigger
});
