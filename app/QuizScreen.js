import React, { useState, useEffect } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

const QuizScreen = ({ navigation }) => {
  const questions = [
    { questionText: 'What is the capital of France?', answerOptions: ['Paris', 'Berlin', 'London', 'Rome'], correctAnswer: 'Paris' },
    { questionText: 'Who wrote "To Kill a Mockingbird"?', answerOptions: ['George Orwell', 'J.K. Rowling', 'Harper Lee', 'Stephen King'], correctAnswer: 'Harper Lee' },
    // Add more questions as needed
  ];

  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [solved, setSolved] = useState(false);
  const [answer, setAnswer] = useState(null);

  // Function to pick a random question
  const pickRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
  };

  // useEffect to pick a random question when the component mounts
  useEffect(() => {
    pickRandomQuestion();
  }, []);

  const handleAnswerOptionClick = (selectedAnswer) => {
    const correctAnswer = currentQuestion.correctAnswer;
    setAnswer(selectedAnswer);
    setSolved(true);
  };
  

  const resetQuiz = () => {
    pickRandomQuestion(); // Pick a new random question
    setScore(0);
    setSolved(false);
    setAnswer(null);
  };

  return (
    <View>
      {currentQuestion && (
        <>
          <Text>{currentQuestion.questionText}</Text>
          {currentQuestion.answerOptions.map((answerOption, index) => (
  <TouchableHighlight
  key={index}
  onPress={() => handleAnswerOptionClick(answerOption)}
  style={{
    backgroundColor: solved && answerOption === currentQuestion.correctAnswer
      ? "#7be25b" // Correct answer
      : solved && answerOption === answer
        ? "#f0222b" // Incorrect answer
        : "#cfcdcc", // Default color
    padding: 10,
    margin: 5,
    borderRadius: 5,
  }}
  disabled={solved}
>
  <Text>{answerOption}</Text>
</TouchableHighlight>
          ))}
          {solved && (
            <TouchableHighlight
              onPress={() => {
                resetQuiz();
              }}
              style={{
                backgroundColor: "#cfcdcc",
                padding: 10,
                margin: 5,
                borderRadius: 5,
              }}
            >
              <Text>Next Question</Text>
            </TouchableHighlight>
          )}
        </>
      )}
    </View>
  );
};

export default QuizScreen;
