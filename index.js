'use strict';

const { db } = require('./src/auth/models/index.js');

db.sync()
  .then(() => {
    require('./src/server.js').startup(process.env.PORT);
  });
