const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nodeSchema = new Schema({
  nodeNumber: Number,
  data: String,
  referenceNodeId: String,
  childReferenceNodeId: String,
  genesisReferenceNodeId: String,
  hashValue: String,
  userId: String
});

module.exports = mongoose.model("Node", nodeSchema);
