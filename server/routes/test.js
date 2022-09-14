var express = require('express');
var router = express.Router();
const userModel = require('../models/userModel');
var ObjectId = require('mongodb').ObjectId;

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

    if(userAnswers.length==10){ // when user checked, that he does not want his results to be shown on the leaderboard,
        console.log('dont share test answers')
        for(let i = 0; i < 10; i++){ // so all elements of userAnswers are question answers
            if(testAnswers[i][1]==userAnswers[i].charAt(userAnswers[i].length-1)){
                correctAnswers++;
                // show leaderboard.
            }
        }

    } else { // user didnt check, that he wants his results to be visible, so last element of userAnswers is user ID
        console.log('share test answers')
        for(let i = 0; i < 11; i++){
            if(i==10){
                console.log(userAnswers[i].slice(3));
                console.log(correctAnswers);
                console.log('-----')
                // save test answers count in users schema.
                userModel.findOne({_id: ObjectId(`${userAnswers[i].slice(3)}`)},function(err,user){
                    console.log(user)
                })

                userModel.updateOne({_id: ObjectId(`${userAnswers[i].slice(3)}`)}, {$set:{correctTestAnswers: correctAnswers}})
                  .then(res=>{ // the document in database does not get updated if a .then() is not attached to it... what?
                    console.log(res);
                  })

                console.log('aoh');
                // show leaderboard.
                userModel.findOne({_id: ObjectId(`${userAnswers[i].slice(3)}`)},function(err,user){
                    console.log(user)
                })

                return;
            }
            if(testAnswers[i][1]==userAnswers[i].charAt(userAnswers[i].length-1)){
                correctAnswers++;
            }
        }
    }
    console.log(correctAnswers);
    })

module.exports = router;
