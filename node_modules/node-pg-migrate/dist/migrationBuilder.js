"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var migrationBuilder_exports = {};
__export(migrationBuilder_exports, {
  default: () => MigrationBuilderImpl
});
module.exports = __toCommonJS(migrationBuilder_exports);
var casts = __toESM(require("./operations/casts"));
var domains = __toESM(require("./operations/domains"));
var extensions = __toESM(require("./operations/extensions"));
var functions = __toESM(require("./operations/functions"));
var grants = __toESM(require("./operations/grants"));
var indexes = __toESM(require("./operations/indexes"));
var mViews = __toESM(require("./operations/materializedViews"));
var operators = __toESM(require("./operations/operators"));
var policies = __toESM(require("./operations/policies"));
var roles = __toESM(require("./operations/roles"));
var schemas = __toESM(require("./operations/schemas"));
var sequences = __toESM(require("./operations/sequences"));
var sql = __toESM(require("./operations/sql"));
var tables = __toESM(require("./operations/tables"));
var triggers = __toESM(require("./operations/triggers"));
var types = __toESM(require("./operations/types"));
var views = __toESM(require("./operations/views"));
var import_utils = require("./utils");
class MigrationBuilderImpl {
  constructor(db, typeShorthands, shouldDecamelize, logger) {
    __publicField(this, "createExtension");
    __publicField(this, "dropExtension");
    __publicField(this, "addExtension");
    __publicField(this, "createTable");
    __publicField(this, "dropTable");
    __publicField(this, "renameTable");
    __publicField(this, "alterTable");
    __publicField(this, "addColumns");
    __publicField(this, "dropColumns");
    __publicField(this, "renameColumn");
    __publicField(this, "alterColumn");
    __publicField(this, "addColumn");
    __publicField(this, "dropColumn");
    __publicField(this, "addConstraint");
    __publicField(this, "dropConstraint");
    __publicField(this, "renameConstraint");
    __publicField(this, "createConstraint");
    __publicField(this, "createType");
    __publicField(this, "dropType");
    __publicField(this, "addType");
    __publicField(this, "renameType");
    __publicField(this, "renameTypeAttribute");
    __publicField(this, "renameTypeValue");
    __publicField(this, "addTypeAttribute");
    __publicField(this, "dropTypeAttribute");
    __publicField(this, "setTypeAttribute");
    __publicField(this, "addTypeValue");
    __publicField(this, "createIndex");
    __publicField(this, "dropIndex");
    __publicField(this, "addIndex");
    __publicField(this, "createRole");
    __publicField(this, "dropRole");
    __publicField(this, "alterRole");
    __publicField(this, "renameRole");
    __publicField(this, "createFunction");
    __publicField(this, "dropFunction");
    __publicField(this, "renameFunction");
    __publicField(this, "createTrigger");
    __publicField(this, "dropTrigger");
    __publicField(this, "renameTrigger");
    __publicField(this, "createSchema");
    __publicField(this, "dropSchema");
    __publicField(this, "renameSchema");
    __publicField(this, "createDomain");
    __publicField(this, "dropDomain");
    __publicField(this, "alterDomain");
    __publicField(this, "renameDomain");
    __publicField(this, "createSequence");
    __publicField(this, "dropSequence");
    __publicField(this, "alterSequence");
    __publicField(this, "renameSequence");
    __publicField(this, "createOperator");
    __publicField(this, "dropOperator");
    __publicField(this, "createOperatorClass");
    __publicField(this, "dropOperatorClass");
    __publicField(this, "renameOperatorClass");
    __publicField(this, "createOperatorFamily");
    __publicField(this, "dropOperatorFamily");
    __publicField(this, "renameOperatorFamily");
    __publicField(this, "addToOperatorFamily");
    __publicField(this, "removeFromOperatorFamily");
    __publicField(this, "createPolicy");
    __publicField(this, "dropPolicy");
    __publicField(this, "alterPolicy");
    __publicField(this, "renamePolicy");
    __publicField(this, "createView");
    __publicField(this, "dropView");
    __publicField(this, "alterView");
    __publicField(this, "alterViewColumn");
    __publicField(this, "renameView");
    __publicField(this, "createMaterializedView");
    __publicField(this, "dropMaterializedView");
    __publicField(this, "alterMaterializedView");
    __publicField(this, "renameMaterializedView");
    __publicField(this, "renameMaterializedViewColumn");
    __publicField(this, "refreshMaterializedView");
    __publicField(this, "grantRoles");
    __publicField(this, "revokeRoles");
    __publicField(this, "grantOnSchemas");
    __publicField(this, "revokeOnSchemas");
    __publicField(this, "grantOnTables");
    __publicField(this, "revokeOnTables");
    __publicField(this, "createCast");
    __publicField(this, "dropCast");
    __publicField(this, "sql");
    __publicField(this, "func");
    __publicField(this, "db");
    __publicField(this, "_steps");
    __publicField(this, "_REVERSE_MODE");
    __publicField(this, "_useTransaction");
    this._steps = [];
    this._REVERSE_MODE = false;
    this._useTransaction = true;
    const wrap = (operation) => (...args) => {
      if (this._REVERSE_MODE) {
        if (typeof operation.reverse !== "function") {
          const name = `pgm.${operation.name}()`;
          throw new Error(
            `Impossible to automatically infer down migration for "${name}"`
          );
        }
        this._steps = this._steps.concat(operation.reverse(...args));
      } else {
        this._steps = this._steps.concat(operation(...args));
      }
    };
    const options = {
      typeShorthands,
      schemalize: (0, import_utils.createSchemalize)({ shouldDecamelize, shouldQuote: false }),
      literal: (0, import_utils.createSchemalize)({ shouldDecamelize, shouldQuote: true }),
      logger
    };
    this.createExtension = wrap(extensions.createExtension(options));
    this.dropExtension = wrap(extensions.dropExtension(options));
    this.addExtension = this.createExtension;
    this.createTable = wrap(tables.createTable(options));
    this.dropTable = wrap(tables.dropTable(options));
    this.renameTable = wrap(tables.renameTable(options));
    this.alterTable = wrap(tables.alterTable(options));
    this.addColumns = wrap(tables.addColumns(options));
    this.dropColumns = wrap(tables.dropColumns(options));
    this.renameColumn = wrap(tables.renameColumn(options));
    this.alterColumn = wrap(tables.alterColumn(options));
    this.addColumn = this.addColumns;
    this.dropColumn = this.dropColumns;
    this.addConstraint = wrap(tables.addConstraint(options));
    this.dropConstraint = wrap(tables.dropConstraint(options));
    this.renameConstraint = wrap(tables.renameConstraint(options));
    this.createConstraint = this.addConstraint;
    this.createType = wrap(types.createType(options));
    this.dropType = wrap(types.dropType(options));
    this.addType = this.createType;
    this.renameType = wrap(types.renameType(options));
    this.renameTypeAttribute = wrap(types.renameTypeAttribute(options));
    this.renameTypeValue = wrap(types.renameTypeValue(options));
    this.addTypeAttribute = wrap(types.addTypeAttribute(options));
    this.dropTypeAttribute = wrap(types.dropTypeAttribute(options));
    this.setTypeAttribute = wrap(types.setTypeAttribute(options));
    this.addTypeValue = wrap(types.addTypeValue(options));
    this.createIndex = wrap(indexes.createIndex(options));
    this.dropIndex = wrap(indexes.dropIndex(options));
    this.addIndex = this.createIndex;
    this.createRole = wrap(roles.createRole(options));
    this.dropRole = wrap(roles.dropRole(options));
    this.alterRole = wrap(roles.alterRole(options));
    this.renameRole = wrap(roles.renameRole(options));
    this.createFunction = wrap(functions.createFunction(options));
    this.dropFunction = wrap(functions.dropFunction(options));
    this.renameFunction = wrap(functions.renameFunction(options));
    this.createTrigger = wrap(triggers.createTrigger(options));
    this.dropTrigger = wrap(triggers.dropTrigger(options));
    this.renameTrigger = wrap(triggers.renameTrigger(options));
    this.createSchema = wrap(schemas.createSchema(options));
    this.dropSchema = wrap(schemas.dropSchema(options));
    this.renameSchema = wrap(schemas.renameSchema(options));
    this.createDomain = wrap(domains.createDomain(options));
    this.dropDomain = wrap(domains.dropDomain(options));
    this.alterDomain = wrap(domains.alterDomain(options));
    this.renameDomain = wrap(domains.renameDomain(options));
    this.createSequence = wrap(sequences.createSequence(options));
    this.dropSequence = wrap(sequences.dropSequence(options));
    this.alterSequence = wrap(sequences.alterSequence(options));
    this.renameSequence = wrap(sequences.renameSequence(options));
    this.createOperator = wrap(operators.createOperator(options));
    this.dropOperator = wrap(operators.dropOperator(options));
    this.createOperatorClass = wrap(operators.createOperatorClass(options));
    this.dropOperatorClass = wrap(operators.dropOperatorClass(options));
    this.renameOperatorClass = wrap(operators.renameOperatorClass(options));
    this.createOperatorFamily = wrap(operators.createOperatorFamily(options));
    this.dropOperatorFamily = wrap(operators.dropOperatorFamily(options));
    this.renameOperatorFamily = wrap(operators.renameOperatorFamily(options));
    this.addToOperatorFamily = wrap(operators.addToOperatorFamily(options));
    this.removeFromOperatorFamily = wrap(
      operators.removeFromOperatorFamily(options)
    );
    this.createPolicy = wrap(policies.createPolicy(options));
    this.dropPolicy = wrap(policies.dropPolicy(options));
    this.alterPolicy = wrap(policies.alterPolicy(options));
    this.renamePolicy = wrap(policies.renamePolicy(options));
    this.createView = wrap(views.createView(options));
    this.dropView = wrap(views.dropView(options));
    this.alterView = wrap(views.alterView(options));
    this.alterViewColumn = wrap(views.alterViewColumn(options));
    this.renameView = wrap(views.renameView(options));
    this.createMaterializedView = wrap(mViews.createMaterializedView(options));
    this.dropMaterializedView = wrap(mViews.dropMaterializedView(options));
    this.alterMaterializedView = wrap(mViews.alterMaterializedView(options));
    this.renameMaterializedView = wrap(mViews.renameMaterializedView(options));
    this.renameMaterializedViewColumn = wrap(
      mViews.renameMaterializedViewColumn(options)
    );
    this.refreshMaterializedView = wrap(
      mViews.refreshMaterializedView(options)
    );
    this.grantRoles = wrap(grants.grantRoles(options));
    this.revokeRoles = wrap(grants.revokeRoles(options));
    this.grantOnSchemas = wrap(grants.grantOnSchemas(options));
    this.revokeOnSchemas = wrap(grants.revokeOnSchemas(options));
    this.grantOnTables = wrap(grants.grantOnTables(options));
    this.revokeOnTables = wrap(grants.revokeOnTables(options));
    this.createCast = wrap(casts.createCast(options));
    this.dropCast = wrap(casts.dropCast(options));
    this.sql = wrap(sql.sql(options));
    this.func = import_utils.PgLiteral.create;
    const wrapDB = (operation) => (...args) => {
      if (this._REVERSE_MODE) {
        throw new Error("Impossible to automatically infer down migration");
      }
      return operation(...args);
    };
    this.db = {
      query: wrapDB(db.query),
      select: wrapDB(db.select)
    };
  }
  enableReverseMode() {
    this._REVERSE_MODE = true;
    return this;
  }
  noTransaction() {
    this._useTransaction = false;
    return this;
  }
  isUsingTransaction() {
    return this._useTransaction;
  }
  getSql() {
    return `${this.getSqlSteps().join("\n")}
`;
  }
  getSqlSteps() {
    return this._REVERSE_MODE ? [...this._steps].reverse() : this._steps;
  }
}
