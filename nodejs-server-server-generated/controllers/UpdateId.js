'use strict';

var utils = require('../utils/writer.js');
var UpdateId = require('../service/UpdateIdService');

module.exports.update_id = function update_id (req, res, next, id) {
  UpdateId.update_id(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
