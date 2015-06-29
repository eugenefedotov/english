'use strict';

module.exports.adminpanel = {
    instances : {

        /* users : {

         title : 'Users',
         model : 'User',

         list : {
         fields : {
         id        : 'ID',
         email     : 'Email',
         active    : 'Active',
         admin     : 'Admin',
         createdAt : 'Created'
         }
         },

         edit : {
         fields : {
         email : 'Email',

         active : {
         title : 'Active'
         },
         admin  : {
         title    : 'Admin',
         disabled : true
         }
         }
         }
         },*/
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
                    text      : 'Text',
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
                    text         : 'Text',
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
