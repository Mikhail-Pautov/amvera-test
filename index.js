import express from 'express';


const app = express();



app.get('/', (req, res) => {
    res.send('Hello pes!!!');
})


app.listen(4444, (err) => {
    if(err) {
        return console.log(err);
    }

    console.log('Server OK');
})

























