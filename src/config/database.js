module.exports = {
  host: '127.0.0.1',
  username: 'postgres',
  password: 'postgres',
  database: 'node-tdd-jest-app',
  dialect: 'postgres',
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}