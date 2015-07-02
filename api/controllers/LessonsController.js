/**
 * LessonsController
 *
 * @description :: Server-side logic for managing lessons
 * @docs        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    list : function (req, res) {
        Lessons.find({rule_id : req.params.rule_id}, {answer : 0}).exec(function (err, lessons) {
            if(err) {
                return res.serverError(err);
            }

            return res.json(lessons);
        })
    },

    getAnswerById : function (req, res) {
        Lessons.find({id : req.params.id}, {answer : 1}).exec(function (err, lesson) {
            if(err) {
                return res.serverError(err);
            }
            return res.json(lesson);
        });
    },

    setStatus : function (req, res) {

    }
};
