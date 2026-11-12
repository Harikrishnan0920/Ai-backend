var express = require('express');
const { generateMessage } = require('../Helpers/functions');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/success', function(req, res) {
  res.send({ message: 'success' });
});


router.post('/', async function(req, res, next) {
  try {
  const { question } = req.body;
  const AiResponse = await generateMessage(question);
  console.log(AiResponse,"this is the ai response");
  res.send({ message: AiResponse.choices[0]?.message?.content??"success", status: 'success' });

} catch (error) {
  console.log(error,"this is the error");
    res.send({ message: "error", status: 'error' });
  }
});

module.exports = router;
