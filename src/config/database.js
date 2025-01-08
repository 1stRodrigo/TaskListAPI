module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'admin',
    database: 'productList',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    }
}