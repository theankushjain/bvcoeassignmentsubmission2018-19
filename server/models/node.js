const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nodeSchema = new Schema({
  nodeNumber: Number,
  data: String,
  referenceNodeId: String,
<<<<<<< HEAD
=======
  childReferenceNodeId: String,
>>>>>>> 0758b126889c92e96578992695b5c358693f02d0
  genesisReferenceNodeId: String,
  hashValue: String,
  userId: String
});

module.exports = mongoose.model("Node", nodeSchema);
