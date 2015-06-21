/**
 * Themes.js
 *
 * @description :: Themes model
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Models
 */

module.exports = {

    attributes: {
        name : {
            type: 'string',
            required : true
        },
        link : {
            type: 'string',
            required : true
        }
    }
};
