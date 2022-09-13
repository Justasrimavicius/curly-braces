var express = require('express');
var router = express.Router();

const testAnswers = [
    ['q1','1'],
    ['q2','2'],
    ['q3','4'],
    ['q4','3'],
    ['q5','4'],
    ['q6','2'],
    ['q7','1'],
    ['q8','1'],
    ['q9','2'],
    ['q10','4'],
]
router.post('/', function(req,res,next){
    let correctAnswers = 0;
    const userAnswers = Object.keys(req.body);
    userAnswers.forEach((element,index)=>{
        if(testAnswers[index][1]==element.charAt(element.length-1)){
            correctAnswers++;
        }
    })
    console.log(correctAnswers);
    })

module.exports = router;
