import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send(`HRM Server Side...`)
})

app.listen(port, () => console.log(`Hi Antu You Are In Right Place...`))