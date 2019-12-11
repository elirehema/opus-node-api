let router = require('express').Router();
const auths = require('../middleware/auth');
const Controller = require('../controllers/QuestionsController')

router.route('/questions')
    .get(Controller.getAllQuestions)
    .post(auths, Controller.askNewQuestion);
router.route('/questions/:questionId')
    .get(Controller.getQuestionById)
    .patch(auths, Controller.updateQuestion)
    .put(auths, Controller.updateQuestion)
    


// Export API routes
module.exports = router;