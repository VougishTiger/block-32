const express= require('express');
const {getAllFlavors}= require('./db/flavors.cjs')
const app= express();

app.use(express.static('dist'));

app.get('/api/flavors', async(req, res, next)=> {
  console.log('I have arrived');
  try{
   const flavorName= await getFlavors();
    res.send('');
  }catch(err) {
    console.log(err);
  }
});

const PORT= process.env.PORT || 5173;
app.listen(PORT, ()=> console.log(`listining on port ${PORT}`));