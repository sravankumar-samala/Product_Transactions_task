const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

const app = express()
dotenv.config()
app.use(cors())

const port = process.env.PORT || 3006
const mongoUri = process.env.MONGO_URI

mongoose.connect(mongoUri, { dbName: 'products_db' })
    .then(() => console.log('Connection Successfull'))
    .catch((error) => console.log("Error", error))

app.listen(port, () => console.log(`Listening on port ${port}`))
