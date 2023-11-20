import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

const QuizScreen = ({ navigation }) => {
  const questions = [
    { questionText: 'What is the capital of France?', answerOptions: ['Paris', 'Berlin', 'London', 'Rome'], correctAnswer: 'Paris' },
    { questionText: 'Who wrote "To Kill a Mockingbird"?', answerOptions: ['George Orwell', 'J.K. Rowling', 'Harper Lee', 'Stephen King'], correctAnswer: 'Harper Lee' },
    // Add more questions as needed
  ];

  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [solved, setSolved] = useState(false);

  // Function to pick a random question
  const pickRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
  };

  // useEffect to pick a random question when the component mounts
  useEffect(() => {
    pickRandomQuestion();
  }, []);

  const handleAnswerOptionClick = (answer) => {
    const correctAnswer = currentQuestion.correctAnswer;
    if (answer === correctAnswer) {
      setScore(score + 1);
    }
    setSolved(true);
  };

  const resetQuiz = () => {
    pickRandomQuestion(); // Pick a new random question
    setScore(0);
    setSolved(false);
  };

  return (
    <View>
      {currentQuestion && (
        <>
          <Text>{currentQuestion.questionText}</Text>
          {currentQuestion.answerOptions.map((answerOption) => (
            <Button key={answerOption} title={answerOption} onPress={() => handleAnswerOptionClick(answerOption)} />
          ))}
          {solved && (
            <TouchableOpacity
              onPress={() => {
                resetQuiz();
              }}
            >
              <Text>Next Question</Text>
            </TouchableOpacity>
          )}
        </>
      )}
    </View>
  );
};

export default QuizScreen;