const mongoose = require('mongoose');
import app from './app'


const port:number = 5000

// connect to the database
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/mongoose');
    app.listen(port, () => {
        console.log(`🟢 Database connection successfully\n🐽 Example app listening on port ${port}`)
    })
}
main().catch(err => console.log("🔴 There was an database connection error!"))

