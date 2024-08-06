const client= require('./client.cjs');
const {createFlavor}= require('./flavors.cjs');
const dropTables= async()=> {
  try {
    await client.query(`
      DROP TABLE IF EXISTS flavors;
      `);
  } catch(err) {
    console.log(err);
  }
}
const createTables= async() =>{
  try {
    await client.query(`
      CREATE TABLE flavors(
      id SERIAL PRIMARY KEY,
      name VARCHAR(30) NOT NULL,
      is_favorite BOOLEAN,
      created_at TIMESTAMP,
      updated_at TIMESTAMP
      )
      `);
  } catch (err) {
    console.log(err);
  }
}

const syncAndSeed= async() => {
  await client.connect();
  console.log('Connected to the Database!!!');

  await dropTables();
  console.log('Tables Dropped!');

  await createTables();
  console.log('Tables Created!');

  await createFlavor('Vanilla',true);
  console.log('Flavor Created!');

  await createFlavor('Chocolate',true);
  console.log('Flavor Created!');

  await createFlavor('Cookie_Dough',true);
  console.log('Flavor Created!');

  await createFlavor('Mint_Chocolate_chip', false);
  console.log('Flavor Created!');

  await client.end();
  console.log('Disconnected from the Database!!!');
}

syncAndSeed();