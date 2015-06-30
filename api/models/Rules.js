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
            type    : 'text',
            requred : true
        },
        status   : {
            type : 'string'
        }
    }
};
