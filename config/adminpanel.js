'use strict';

module.exports.adminpanel = {
    instances : {
        themes : {
            title : 'Themes',
            model : 'Themes',

            list : {
                fields : {
                    id        : 'ID',
                    name      : 'Name',
                    link      : 'Link',
                    createdAt : false,
                    updatedAt : false
                }
            }
        },
        rules  : {
            title : 'Rules',
            model : 'Rules',

            list : {
                fields : {
                    text         : {
                        title:'Text',
                        editor: true
                    },
                    status    : 'Status',
                    theme_id  : 'Theme ID',
                    id        : 'ID',
                    createdAt : false,
                    updatedAt : false
                }
            }
        },

        lessons : {
            title : 'Lessons',
            model : 'Lessons',

            list : {
                fields : {
                    text         : {
                        title:'Text',
                        editor: true
                    },
                    lesson_type  : 'Type',
                    rule_id      : 'Theme ID',
                    id           : 'ID',
                    createdAt    : false,
                    updatedAt    : false
                }
            }
        }

    }
};
