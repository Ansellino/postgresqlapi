"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var db_exports = {};
__export(db_exports, {
  default: () => db_default
});
module.exports = __toCommonJS(db_exports);
var import_node_util = require("node:util");
var import_pg = __toESM(require("pg"));
var ConnectionStatus = /* @__PURE__ */ ((ConnectionStatus2) => {
  ConnectionStatus2["DISCONNECTED"] = "DISCONNECTED";
  ConnectionStatus2["CONNECTED"] = "CONNECTED";
  ConnectionStatus2["ERROR"] = "ERROR";
  ConnectionStatus2["EXTERNAL"] = "EXTERNAL";
  return ConnectionStatus2;
})(ConnectionStatus || {});
function db(connection, logger = console) {
  const isExternalClient = typeof connection === "object" && "query" in connection && typeof connection.query === "function";
  const client = isExternalClient ? connection : new import_pg.default.Client(connection);
  let connectionStatus = isExternalClient ? "EXTERNAL" /* EXTERNAL */ : "DISCONNECTED" /* DISCONNECTED */;
  const beforeCloseListeners = [];
  const connected = () => connectionStatus === "CONNECTED" /* CONNECTED */ || connectionStatus === "EXTERNAL" /* EXTERNAL */;
  const createConnection = () => new Promise((resolve, reject) => {
    if (connected()) {
      resolve();
    } else if (connectionStatus === "ERROR" /* ERROR */) {
      reject(
        new Error("Connection already failed, do not try to connect again")
      );
    } else {
      client.connect((err) => {
        if (err) {
          connectionStatus = "ERROR" /* ERROR */;
          logger.error(`could not connect to postgres: ${(0, import_node_util.inspect)(err)}`);
          reject(err);
          return;
        }
        connectionStatus = "CONNECTED" /* CONNECTED */;
        resolve();
      });
    }
  });
  const query = async (queryTextOrConfig, values) => {
    await createConnection();
    try {
      return await client.query(queryTextOrConfig, values);
    } catch (error) {
      const { message, position } = error;
      const string = typeof queryTextOrConfig === "string" ? queryTextOrConfig : queryTextOrConfig.text;
      if (message && position >= 1) {
        const endLineWrapIndexOf = string.indexOf("\n", position);
        const endLineWrapPos = endLineWrapIndexOf >= 0 ? endLineWrapIndexOf : string.length;
        const stringStart = string.slice(0, endLineWrapPos);
        const stringEnd = string.slice(endLineWrapPos);
        const startLineWrapPos = stringStart.lastIndexOf("\n") + 1;
        const padding = " ".repeat(position - startLineWrapPos - 1);
        logger.error(`Error executing:
${stringStart}
${padding}^^^^${stringEnd}

${message}
`);
      } else {
        logger.error(`Error executing:
${string}
${error}
`);
      }
      throw error;
    }
  };
  const select = async (queryTextOrConfig, values) => {
    const { rows } = await query(queryTextOrConfig, values);
    return rows;
  };
  const column = async (columnName, queryTextOrConfig, values) => {
    const rows = await select(queryTextOrConfig, values);
    return rows.map((r) => r[columnName]);
  };
  return {
    createConnection,
    query,
    select,
    column,
    connected,
    addBeforeCloseListener: (listener) => beforeCloseListeners.push(listener),
    close: async () => {
      await beforeCloseListeners.reduce(
        (promise, listener) => promise.then(listener).catch((error) => {
          logger.error(error.stack || error);
        }),
        Promise.resolve()
      );
      if (!isExternalClient) {
        connectionStatus = "DISCONNECTED" /* DISCONNECTED */;
        client.end();
      }
    }
  };
}
var db_default = db;
