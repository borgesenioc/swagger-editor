'use strict';

var utils = require('../utils/writer.js');
var DeleteId = require('../service/DeleteIdService');

module.exports.delete_id = function delete_id (req, res, next, id) {
  DeleteId.delete_id(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
