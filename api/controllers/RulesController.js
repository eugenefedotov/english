/**
 * RulesController
 *
 * @description :: Server-side logic for managing rules
 * @docs        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  /**
   * List of rules
   * @param req
   * @param res
   */
  list : function (req, res) {
    if(!req.param('id')) {
      return res.badRequest();
    }
    Rules.find({theme_id : req.param('id')}).exec(function (err, rules) {
      if (err) {
        return res.serverError(err);
      }
      return res.json(rules);
    });
  }
};
