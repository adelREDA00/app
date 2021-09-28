const express = require('express');
const app = express();

app.listen(5500, () => {
    console.log(`Starting server at `);
  });
  app.use(express.static('public'));
  app.use(express.json({ limit: '1mb' }));
  
app.get('/weather/:lat/:long',async (request,response)=>{

    const lat = await request.params.lat;
    const lon = await request.params.long;

    const meto = require('request');
    meto(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=15b439c910b69a1623d98b234d27421e`,async (error,weth)=>{
        const data =await JSON.parse(weth.body)
        response.json(data)
    }) 
  })