const mongoose = require("mongoose");

const { MONGO_DB_CLUSTER_URL } = require("../config/config");

const connectDatabase = () => {
  mongoose.connect(MONGO_DB_CLUSTER_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(data => {
    console.log(`MongoDb connected with ${data.connection.host}`)
  });
};


module.exports = {connectDatabase}
