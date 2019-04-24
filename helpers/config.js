const config = {
    dbUrl: 'postgres://postgres:masterkey@localhost:5432/DummyDB',
    port: 3001,
    secret: 'eabs212',
    uploads: `${__dirname}/../public/uploads`
}

module.exports = config;