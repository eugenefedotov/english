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
            requred : true
        },
        text     : {
            type : 'string'
        },
        status   : {
            type : 'string'
        }
    }
};
