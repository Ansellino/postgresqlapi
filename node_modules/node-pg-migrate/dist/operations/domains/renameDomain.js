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
var renameDomain_exports = {};
__export(renameDomain_exports, {
  renameDomain: () => renameDomain
});
module.exports = __toCommonJS(renameDomain_exports);
function renameDomain(mOptions) {
  const _rename = (domainName, newDomainName) => {
    const domainNameStr = mOptions.literal(domainName);
    const newDomainNameStr = mOptions.literal(newDomainName);
    return `ALTER DOMAIN ${domainNameStr} RENAME TO ${newDomainNameStr};`;
  };
  _rename.reverse = (domainName, newDomainName) => _rename(newDomainName, domainName);
  return _rename;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  renameDomain
});
