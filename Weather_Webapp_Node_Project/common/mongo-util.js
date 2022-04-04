
const mongoClient = require('mongodb').MongoClient;


class MongoDB {
  constructor(url){
    this.url = url;
  }

  createRecord(collection, document) {

    return new Promise((resolve, reject) => {
        mongoClient.connect(this.url, function (error, db) {
            if (error) {
                reject(error);
            } else {
                db.collection(collection).insertOne(document, function (err, res) {
                    if (err) {
                        reject(err);
                    } else {
                        db.close();
                        resolve(res);
                    }
                });
            }
        });
    });
};
}

module.exports = MongoDB;