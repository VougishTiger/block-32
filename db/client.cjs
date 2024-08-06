const {Client}= require('pg');
const client= new Client(process.env.DATABASE_URL || 'postgres://vougi:Strong4hold!@localhost:5432/acme_ice_cream_shop');

module.exports= client;