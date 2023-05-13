const express = require('express');
const mongoose = require('mongoose');
const app = express()
const port = 3000


// connect to the database
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/mongoose');
    console.log('🟢 Database connection successfully');
}

main().catch(err=>console.log("🔴 There was an database connection error!"))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})