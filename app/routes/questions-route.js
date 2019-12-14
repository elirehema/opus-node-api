let router = require('express').Router();
const auths = require('../middleware/auth');
const Controller = require('../controllers/QuestionsController')

router.route('/questions')
    .get(Controller.getAllQuestions)
    .post(auths, Controller.askNewQuestion);
router.route('/questions/:questionId')
    .get(Controller.getQuestionById)
    .patch(auths, Controller.updateQuestion)
    .put(auths, Controller.updateQuestion);
router.route('/questions/:questionId/replies')
    .get( Controller.getAllQuestionReplies)
    .patch(auths, Controller.replyToQuestion)
router.route('/questions/:questionId/answers')
    .get( Controller.getAllQuestionAnswers)
    .post(auths, Controller.answerTheQuestion)
router.route('/questions/:questionId/upvote/:answerId')
    .patch(auths, Controller.upvoteQuestionAnswer)


// Export API routes
module.exports = router;