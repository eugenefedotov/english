/**
 * RulesController
 *
 * @description :: Server-side logic for managing themes
 * @docs        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports= {
    list : function (req, res) {
        Rules.find(req.params.id).exec(function (err, rules) {
            if(err) {
                return res.serverError(err);
            }
            return res.json(rules);
        });
    }
};
