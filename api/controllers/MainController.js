/**
 * MainController
 *
 * @description ::
 * @docs        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports= {
    index : function (res, req) {
        return res.view('homepage');
    }
};
