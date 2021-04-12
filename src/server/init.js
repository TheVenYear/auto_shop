const Repo = require('./repo');

exports = () => {
  const pool = require('./db/index');
  const repo = new Repo(pool);
  repo.init();
};
