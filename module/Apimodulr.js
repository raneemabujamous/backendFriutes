"use strict";
class ModuleApi {
  constructor(data) {
    this.instructions = data.instructions;
    this.photo = data.photo;
    this.name = data.name;
  }
}
module.exports = ModuleApi;
