const config = {
    dbUrl: 'postgres://postgres:admin@localhost:5433/manga',
    port: 3001,
    secret: 'eabs212',
    uploads: `${__dirname}/../public/uploads`
}

module.exports = config;