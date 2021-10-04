"use strict";
const mongoose = require("mongoose");
const schemaMOd = mongoose.Schema({
  instructions: { type: String },
  photo: { type: String },
  name: { type: String, unique: true },
  slug: { type: String, unique: true },
});
const SchemaModule = mongoose.model("collection", schemaMOd);
module.exports = SchemaModule;
