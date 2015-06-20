/**
 * Themes.js
 *
 * @description :: Themes model
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        name : {
            type: 'string',
            required : true
        },
        link : {
            type: 'string'
        }
    }
};
