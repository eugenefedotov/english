/**
 * ThemesController
 *
 * @description :: Server-side logic for managing themes
 * @docs        :: See http://links.sailsjs.org/docs/controllers
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
            return res.view({
                themes : themes
            });
        });
    }
};
