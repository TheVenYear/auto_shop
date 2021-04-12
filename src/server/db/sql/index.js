const fs = require('fs');
const path = require('path');

const sql = (file) => {
  const fullPath = path.join(__dirname, file);
  return fs.readFileSync(fullPath).toString();
};

module.exports = {
  queries: {
    report: sql('queries/report.sql'),
    orders: sql('queries/orders.sql'),
    topClients: sql('queries/top_clients.sql'),
    proceeds3Days: sql('queries/proceeds_3_days.sql'),
    clientExpenses: sql('queries/client_expenses.sql'),
    init: sql('init.sql'),
    schema: sql('schema.sql'),
  },
};
