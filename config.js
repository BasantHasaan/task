const env = process.env;

const config = {
  db: { /* don't expose password or any sensitive info, done only for demo */
    host: env.DB_HOST || 'freedb.tech',
    user: env.DB_USER || 'freedbtech_adminadmin',
    password: env.DB_PASSWORD || 'admin123',
    database: env.DB_NAME || 'freedbtech_task',
  },
  listPerPage: env.LIST_PER_PAGE || 25,
};


module.exports = config;