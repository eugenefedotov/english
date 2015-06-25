/**
 * Lessons.js
 *
 * @description :: Lessons model
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Models
 */
module.exprots = {
    attributes : {
        rule_id      : {
            type    : 'string',
            requred : true
        },
        lessons_type : {
            type    : 'string',
            requred : true
        },
        text         : {
            type    : 'string',
            requred : true
        },
        status       : {
            type : 'string'
        }
    }
};
