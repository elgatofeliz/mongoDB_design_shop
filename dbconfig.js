const { MongoClient } = require('mongodb')

let db; //Design Pattern = Singleton

function connectToDB() {
    if(db){
        const url = process.env.DB_URL
        const client = new MongoClient(url)

        client
        .connect()
        .then((connected_client) => {
            db = connected_client.db('projects')
        })
    }
}

function getAllItems() {
    return db.collection('design_shop')
    .find()
    .toArray()
}

module.exports = {
    getAllItems,
    connectToDB
}