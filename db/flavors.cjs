const client= require('./client.cjs')

const createFlavor= async(flavor, is_favorite)=> {
  try {
    await client.query(`
      INSERT INTO flavors (name, is_favorite, created_at, updated_at)
      VALUES ($1,$2,NOW(),NOW());
    `,
      [flavor, is_favorite]);
  } catch(err) {
    console.log(err);
  }
}

const getAllFlavors= async()=> {
  try {
    const query= await client.query(`
      SELECT * FROM flavors;
      `);
      console.log('TYPEOF QUERY', typeof query);
      console.log('QUERY', query);
  } catch(err) {
    console.log(err);
  }
}

module.exports= {
  createFlavor, 
  getAllFlavors
};