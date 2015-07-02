'use strict';

module.exports.adminpanel = {

    assets : 'link',

    instances : {
        themes : {
            title : 'Themes',
            model : 'Themes',

            fields : {
                id        : 'ID',
                name      : 'Name',
                link      : 'Link',
                createdAt : false,
                updatedAt : false
            }
        },
        rules  : {
            title : 'Rules',
            model : 'Rules',

            fields : {
                id        : 'ID',
                theme_id  : 'Theme ID',
                text      : {
                    title  : 'Text',
                    editor : true
                },
                status    : 'Status',
                createdAt : false,
                updatedAt : false
            }
        },

        lessons : {
            title : 'Lessons',
            model : 'Lessons',

            fields : {
                id          : 'ID',
                rule_id     : 'Rule ID',
                text        : {
                    title  : 'Text',
                    editor : true
                },
                lesson_type : 'Type',
                status      : false,
                createdAt   : false,
                updatedAt   : false
            }
        }

    }
};
