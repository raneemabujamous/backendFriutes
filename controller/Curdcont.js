"use strict";
const SchemaModule = require("../module/SchemaMod");

const postMethod = async (req, res) => {
  const { instructions, photo, name } = req.body;
  const slug = name.toLowerCase().split(" ").join("-");
  SchemaModule.find({ slug: slug }, (error, data) => {
    if (data.length) {
      res.send("data exist");
    } else {
      const newSchema = new SchemaModule({
        instructions: instructions,
        photo: photo,
        name: name,
        slug: slug,
      });
      newSchema.save();
      res.send(newSchema);
    }
  });
};
const getpost = async (req, res) => {
  SchemaModule.find({}, (error, data) => {
    res.send(data);
  });
};
const deleteMethod = async (req, res) => {
  const slug = req.params.slug;
  SchemaModule.remove({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      SchemaModule.find({}, (error, data) => {
        res.send(data);
      });
    }
  });
};
const update = async (req, res) => {
  const { instructions, photo } = req.body;
  console.log(photo, "from update");
  const slug = req.params.slug;
  SchemaModule.find({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      data[0].instructions = instructions;
      data[0].photo = photo;
      data[0].save();
      res.send(data);
    }
  });
};

module.exports = { postMethod, getpost, deleteMethod, update };
