module.exports = {
  username: process.env.DB_USER || 'USER_LEGAL_JOBS',
  password: process.env.DB_PASSWORD || 'USER_LEGAL_JOBS',
  database:  process.env.DB_NAME || 'legal',
  host: process.env.DB_HOST || 'bprspsql25d.brasilprev.corp',
  dialect: 'mssql',
  //logging: false,
  pool: {
    max: 50,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  options: {
    encrypt: true,
    enableArithAbort: true
  }
}