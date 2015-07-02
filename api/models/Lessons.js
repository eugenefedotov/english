/**
 * Lessons.js
 *
 * @description :: Lessons model
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Models
 */

var _ = require('lodash');

var TYPES = {
    TRANSLATION : 'translation',
    WORD        : 'word'
};

module.exports = {

    TYPES : TYPES,

    attributes : {
        rule_id     : {
            type    : 'string',
            required : true
        },
        lesson_type : {
            type       : 'string',
            enum       : _.values(TYPES),
            required   : true,
            defaultsTo : TYPES.TRANSLATION
        },
        text        : {
            type    : 'text',
            required : true
        },
        answer      : {
            type    : 'string',
            required : true
        },
        status : {
            type: 'boolean'
        }
    }
};
