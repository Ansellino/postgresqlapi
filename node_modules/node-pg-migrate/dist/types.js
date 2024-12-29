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
var types_exports = {};
__export(types_exports, {
  PgType: () => PgType
});
module.exports = __toCommonJS(types_exports);
var PgType = /* @__PURE__ */ ((PgType2) => {
  PgType2["BIGINT"] = "bigint";
  PgType2["INT8"] = "int8";
  PgType2["BIGSERIAL"] = "bigserial";
  PgType2["BIT_1"] = "bit";
  PgType2["BIT_VARYING"] = "bit varying";
  PgType2["VARBIT"] = "varbit";
  PgType2["SERIAL8"] = "serial8";
  PgType2["BOOLEAN"] = "boolean";
  PgType2["BOOL"] = "bool";
  PgType2["BOX"] = "box";
  PgType2["BYTEA"] = "bytea";
  PgType2["CHARACTER"] = "character";
  PgType2["CHAR"] = "char";
  PgType2["CHARACTER_VARYING"] = "character varying";
  PgType2["VARCHAR"] = "varchar";
  PgType2["CIDR"] = "cidr";
  PgType2["CIRCLE"] = "circle";
  PgType2["DATE"] = "date";
  PgType2["DOUBLE_PRECISION"] = "double precision";
  PgType2["INET"] = "inet";
  PgType2["INTEGER"] = "integer";
  PgType2["INT"] = "int";
  PgType2["INT4"] = "int4";
  PgType2["INTERVAL"] = "interval";
  PgType2["JSON"] = "json";
  PgType2["JSONB"] = "jsonb";
  PgType2["LINE"] = "line";
  PgType2["LSEG"] = "lseg";
  PgType2["MACADDR"] = "macaddr";
  PgType2["MONEY"] = "money";
  PgType2["NUMERIC"] = "numeric";
  PgType2["PATH"] = "path";
  PgType2["PG_LSN"] = "pg_lsn";
  PgType2["POINT"] = "point";
  PgType2["POLYGON"] = "polygon";
  PgType2["REAL"] = "real";
  PgType2["FLOAT4"] = "float4";
  PgType2["SMALLINT"] = "smallint";
  PgType2["INT2"] = "int2";
  PgType2["SMALLSERIAL"] = "smallserial";
  PgType2["SERIAL2"] = "serial2";
  PgType2["SERIAL"] = "serial";
  PgType2["SERIAL4"] = "serial4";
  PgType2["TEXT"] = "text";
  PgType2["TIME"] = "time";
  PgType2["TIME_WITHOUT_TIME_ZONE"] = "without time zone";
  PgType2["TIME_WITH_TIME_ZONE"] = "time with time zone";
  PgType2["TIMETZ"] = "timetz";
  PgType2["TIMESTAMP"] = "timestamp";
  PgType2["TIMESTAMP_WITHOUT_TIME_ZONE"] = "timestamp without time zone";
  PgType2["TIMESTAMP_WITH_TIME_ZONE"] = "timestamp with time zone";
  PgType2["TIMESTAMPTZ"] = "timestamptz";
  PgType2["TSQUERY"] = "tsquery";
  PgType2["TSVECTOR"] = "tsvector";
  PgType2["TXID_SNAPSHOT"] = "txid_snapshot";
  PgType2["UUID"] = "uuid";
  PgType2["XML"] = "xml";
  return PgType2;
})(PgType || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PgType
});
