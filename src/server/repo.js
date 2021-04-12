const sql = require('./db/sql').queries;

class Repo {
  constructor(db) {
    this.db = db;
  }

  report = async () => (await this.db.query(sql.report)).rows;

  orders = async () => (await this.db.query(sql.orders)).rows;

  proceeds3Days = async () => (await this.db.query(sql.proceeds3Days)).rows;

  topClients = async () => (await this.db.query(sql.topClients)).rows;

  clientExpenses = async () => (await this.db.query(sql.clientExpenses)).rows;

  init = async () => {
    await this.db.query(sql.schema);
    await this.db.query(sql.init);
  };
}

module.exports = Repo;
