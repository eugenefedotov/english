/**
 * LessonsController
 *
 * @description :: Server-side logic for managing lessons
 * @docs        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  /**
   *
   * @param req
   * @param res
   * @returns {*}
   */
  list : function (req, res) {

    if (!req.param('rule_id')) {
      return res.serverError();
    }

    this.setRuleStatus(req, res);

    Lessons.find(
      {
        rule_id : req.param('rule_id')
      },
      {
        answer : 0
      })
      .exec(
      function (err, lessons) {
        if (err) {
          return res.serverError(err);
        }

        return res.json(lessons);
      })
  },

  /**
   *
   * @param req
   * @param res
   */
  getAnswerById : function (req, res) {
    Lessons.find({id : req.params.id}, {answer : 1}).exec(function (err, lesson) {
      if (err) {
        return res.serverError(err);
      }
      return res.json(lesson);
    });
  },

  /**
   *
   * @param req
   * @param res
   */
  setRuleStatus : function (req, res) {
    Rules.findOne(req.param('rule_id')).exec(function (err, rule) {
      if (err) {
        return res.serverError(err);
      }
      if (rule.status == 'no_active') {
        rule.status = 'process';
      }
      rule.save(function (err) {
        if (err) {
          return res.serverError(err);
        }
      })
    })
  }
};
