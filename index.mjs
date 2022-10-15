import express from 'express';
  
const app = express();

app.get('/',(req,res) => {    
    setTimeout(() => {
        res.send('Shehzad Responding from HTTP Server');
    }, 4000);
})


const PORT = 5001;
app.listen(PORT,() => {
    console.log(`it is Running on PORT ${PORT}`);
})

