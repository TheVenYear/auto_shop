const fs = require('fs');

const reportSQL = fs.readFileSync('./db/sql/queries/report.sql').toString();
const ordersSQL = fs.readFileSync('./db/sql/queries/orders.sql').toString();
const proceeds3DaysSQL = fs.readFileSync('./db/sql/queries/proceeds_3_days.sql').toString();
const topClientsSQL = fs.readFileSync('./db/sql/queries/top_clients.sql').toString();
const clientExpensesSQL = fs.readFileSync('./db/sql/queries/client_expenses.sql').toString();

class Repo {
    constructor(db) {
        this.db = db;
    }

    report = async () => ((await this.db.query(reportSQL)).rows);

    orders = async () => ((await this.db.query(ordersSQL)).rows);

    proceeds3Days = async () => ((await this.db.query(proceeds3DaysSQL)).rows);

    topClients = async () => ((await this.db.query(topClientsSQL)).rows);

    clientExpenses = async () => ((await this.db.query(clientExpensesSQL)).rows);
}

module.exports = Repo;