const Question = require('../models/question');

exports.createQuestion = (req, res, next) => {
    const question = new Question({
      topic: req.body.topic,
      question: req.body.question,
      answer: req.body.answer,
      information: req.body.information
    });
    question.save().then(
      () => {
        res.status(201).json({
          message: 'Question created and saved successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
};

exports.getOneQuestion = (req, res, next) => {
    Question.findOne({
      _id: req.params.id
    }).then(
      (question) => {
        res.status(200).json(question);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
};

exports.modifyQuestion = (req, res, next) => {
    const question = new Question({
      _id: req.params.id,
      topic: req.body.topic,
      question: req.body.question,
      answer: req.body.answer,
      information: req.body.information
    });
    Question.updateOne({_id: req.params.id}, question).then(
      () => {
        res.status(201).json({
          message: 'Question updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
};

exports.deleteQuestion = (req, res, next) => {
    Question.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Question deleted !'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
};

exports.getAllQuestions = (req, res, next) => {
    Question.find().then(
      (questions) => {
        res.status(200).json(questions);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
};

exports.getRandomQuestion = (req, res, next) => {
    
    Question.findOneRandom(function(err, question) {
      if (err) res.status(400).json({
        error: error
      });
      else res.status(200).json(question);
    });
    
    /*).then(
      (question) => {
        res.status(200).json(question);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );*/
};