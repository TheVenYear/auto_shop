const route = require('express')();
const db = require('./db');
const Repo = require('./repo');
const repo = new Repo(db);

route.get('', async (req, res) => {
    res.status(200);
    const result = await repo.report();
    res.json(result);
});

route.get('/top-clients', async (req, res) => {
    res.status(200);
    const result = await repo.topClients();
    res.json(result);
});

route.get('/orders', async (req, res) => {
    res.status(200);
    const result = await repo.orders();
    res.json(result);
});

route.get('/client-expenses', async (req, res) => {
    res.status(200);
    const result = await repo.clientExpenses();
    res.json(result);
});

route.get('/proceeds-3-days', async (req, res) => {
    res.status(200);
    const result = await repo.proceeds3Days();
    res.json(result);
});

module.exports = route;