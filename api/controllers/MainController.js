/**
 * MainController
 *
 * @description ::
 * @docs        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    index : function (req, res) {
        return res.view('homepage');
    }
};
