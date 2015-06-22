/**
 * ThemesController
 *
 * @description :: Server-side logic for managing themes
 * @docs        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    /**
     * List of themes
     * @param req
     * @param res
     */
    list : function (req, res) {
        Themes.find().exec(function(err, themes) {
            if(err) {
                return res.serverError(err);
            }
            return res.json(themes);
        });
    }
};
