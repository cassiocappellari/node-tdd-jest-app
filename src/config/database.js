require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? 'tests.env' : 'development.env'
})

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME,
  dialect: process.env.DB_DIALECT || 'postgres',
  storage: './tests/database.sqlite',
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}