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
var alterColumn_exports = {};
__export(alterColumn_exports, {
  alterColumn: () => alterColumn
});
module.exports = __toCommonJS(alterColumn_exports);
var import_utils = require("../../utils");
var import_sequences = require("../sequences");
function alterColumn(mOptions) {
  return (tableName, columnName, options) => {
    const {
      default: defaultValue,
      type,
      collation,
      using,
      notNull,
      allowNull,
      comment
    } = options;
    const sequenceGenerated = options.sequenceGenerated === void 0 ? options.generated : options.sequenceGenerated;
    const actions = [];
    if (defaultValue === null) {
      actions.push("DROP DEFAULT");
    } else if (defaultValue !== void 0) {
      actions.push(`SET DEFAULT ${(0, import_utils.escapeValue)(defaultValue)}`);
    }
    if (type) {
      const typeStr = (0, import_utils.applyTypeAdapters)(type);
      const collationStr = collation ? ` COLLATE ${collation}` : "";
      const usingStr = using ? ` USING ${using}` : "";
      actions.push(`SET DATA TYPE ${typeStr}${collationStr}${usingStr}`);
    }
    if (notNull) {
      actions.push("SET NOT NULL");
    } else if (notNull === false || allowNull) {
      actions.push("DROP NOT NULL");
    }
    if (sequenceGenerated !== void 0) {
      if (sequenceGenerated) {
        const sequenceOptions = (0, import_sequences.parseSequenceOptions)(
          mOptions.typeShorthands,
          sequenceGenerated
        ).join(" ");
        actions.push(
          `ADD GENERATED ${sequenceGenerated.precedence} AS IDENTITY${sequenceOptions ? ` (${sequenceOptions})` : ""}`
        );
      } else {
        actions.push("DROP IDENTITY");
      }
    }
    const queries = [];
    if (actions.length > 0) {
      const columnsStr = (0, import_utils.formatLines)(
        actions,
        `  ALTER ${mOptions.literal(columnName)} `
      );
      queries.push(
        `ALTER TABLE ${mOptions.literal(tableName)}
${columnsStr};`
      );
    }
    if (comment !== void 0) {
      queries.push(
        (0, import_utils.makeComment)(
          "COLUMN",
          `${mOptions.literal(tableName)}.${mOptions.literal(columnName)}`,
          comment
        )
      );
    }
    return queries.join("\n");
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  alterColumn
});
