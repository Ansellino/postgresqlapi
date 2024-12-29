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
var createFunction_exports = {};
__export(createFunction_exports, {
  createFunction: () => createFunction
});
module.exports = __toCommonJS(createFunction_exports);
var import_utils = require("../../utils");
var import_dropFunction = require("./dropFunction");
function createFunction(mOptions) {
  const _create = (functionName, functionParams = [], functionOptions, definition) => {
    const {
      replace = false,
      returns = "void",
      language,
      window = false,
      behavior = "VOLATILE",
      security = "INVOKER",
      onNull = false,
      parallel,
      set
    } = functionOptions;
    const options = [];
    if (behavior) {
      options.push(behavior);
    }
    if (language) {
      options.push(`LANGUAGE ${language}`);
    } else {
      throw new Error(
        `Language for function ${functionName} have to be specified`
      );
    }
    if (security !== "INVOKER") {
      options.push(`SECURITY ${security}`);
    }
    if (window) {
      options.push("WINDOW");
    }
    if (onNull) {
      options.push("RETURNS NULL ON NULL INPUT");
    }
    if (parallel) {
      options.push(`PARALLEL ${parallel}`);
    }
    if (set) {
      for (const { configurationParameter, value } of set) {
        if (value === "FROM CURRENT") {
          options.push(
            `SET ${mOptions.literal(configurationParameter)} FROM CURRENT`
          );
        } else {
          options.push(
            `SET ${mOptions.literal(configurationParameter)} TO ${value}`
          );
        }
      }
    }
    const replaceStr = replace ? " OR REPLACE" : "";
    const paramsStr = (0, import_utils.formatParams)(functionParams, mOptions);
    const functionNameStr = mOptions.literal(functionName);
    return `CREATE${replaceStr} FUNCTION ${functionNameStr}${paramsStr}
  RETURNS ${returns}
  AS ${(0, import_utils.escapeValue)(definition)}
  ${options.join("\n  ")};`;
  };
  _create.reverse = (0, import_dropFunction.dropFunction)(mOptions);
  return _create;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createFunction
});
