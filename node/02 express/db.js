const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'dc_store',
    password: '1234',
    port: 5432

});

client.connect()
    .then(async () => {
        console.log('Conectado ao Postgres');

        await client.query(`
    CREATE TABLE IF NOT EXISTS cart (
        id SERIAL PRIMARY KEY,
        user_id INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

    CREATE TABLE IF NOT EXISTS cart_item (
        id SERIAL PRIMARY KEY,
        product_id INTEGER,
        quantity INTEGER DEFAULT 1,
        cart_id INTEGER REFERENCES cart(id) ON DELETE CASCADE
    );`)
    console.log("As tabelas foram criadas.");
})
.catch((error) => {
    console.log(`Erro ao conectar ao banco ${error}`)
})

module.exports = client