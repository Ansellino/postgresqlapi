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
var alterView_exports = {};
__export(alterView_exports, {
  alterView: () => alterView
});
module.exports = __toCommonJS(alterView_exports);
var import_shared = require("./shared");
function alterView(mOptions) {
  const _alter = (viewName, viewOptions) => {
    const { checkOption, options = {} } = viewOptions;
    if (checkOption !== void 0) {
      if (options.check_option === void 0) {
        options.check_option = checkOption;
      } else {
        throw new Error(
          `"options.check_option" and "checkOption" can't be specified together`
        );
      }
    }
    const clauses = [];
    const withOptions = Object.keys(options).filter((key) => options[key] !== null).map((0, import_shared.viewOptionStr)(options)).join(", ");
    if (withOptions) {
      clauses.push(`SET (${withOptions})`);
    }
    const resetOptions = Object.keys(options).filter((key) => options[key] === null).join(", ");
    if (resetOptions) {
      clauses.push(`RESET (${resetOptions})`);
    }
    return clauses.map((clause) => `ALTER VIEW ${mOptions.literal(viewName)} ${clause};`).join("\n");
  };
  return _alter;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  alterView
});
