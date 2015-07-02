/**
 * Rules.js
 *
 * @description :: Rules model
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Models
 */

module.exports = {

    attributes : {
        theme_id : {
            type    : 'string',
            required : true
        },
        text     : {
            type    : 'text',
            required : true
        },
        status   : {
            type : 'string'
        }
    }
};
