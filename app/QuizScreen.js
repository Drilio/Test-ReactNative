import React, { useState, useEffect } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

const QuizScreen = ({ navigation }) => {
  const questions = [
    { questionText: 'What is a brand style guide ?', answerOptions: ["A document that defines the visual elements", "a graphical charter", "A specification", "A guide to be swag"], correctAnswer: "A document that defines the visual elements" },
    { questionText: 'What are the main components of a brand style guide?', answerOptions: ["the colour palette","The logo and pictures","Logo, color palette, typography, images, voice tones","The price of the brand"], correctAnswer:"Logo, color palette, typography, images, voice tones"},
    { questionText: "Why is it important to have a brand style guide?", answerOptions: ["Not to get lost in a mall","Ensure visual consistency and brand recognition","A  guide to be stylish","To have a lot of benefits"], correctAnswer:"Ensure visual consistency and brand recognition"},
    { questionText: "How does a brand style guide contribute to the user experience?", answerOptions: ["It creates a consistent and memorable experience", "It makes the user spend money","It creates user satisfaction","It makes the user want to come back"], correctAnswer: 'It creates a consistent and memorable experience'},
    { questionText: "What specific information can be found in the typography section of a brand style guide?", answerOptions: ["Only fonts","The graphic chart","The font and they usage rules","Colors, fonts and brand"], correctAnswer:'The font and they usage rules'},
    { questionText: "How does a brand style guide evolve over time ?", answerOptions: ["Based on trends and changes in brand identity"," By law"," According to competitors"," Depending on the evilest competitor"], correctAnswer: " Based on trends and changes in brand identity"},
    { questionText: "What is the difference between the primary and secondary color palettes in a brand style guide?", answerOptions: [ "Primary colors are blue, red and yellow", "Primary colors are the main brand and secondary to vary if needed", " Primary colors are the main colors of the brand and secondary do not exist", "The secondary ones are purple and green"], correctAnswer: " Primary colors are the main brand and secondary to vary if needed"},
    { questionText: "How can a brand style guide be used in the process of creating new products?", answerOptions: [' It is useless', " To respect the font", "To use the same colors","To align new products with the brand’s visual identity"], correctAnswer: "To align new products with the brand’s visual identity"},
    { questionText: "Why is the section on images important in a brand style guide?", answerOptions: ["Establishes standards for the style of images used", "To make the images beautiful", "To ensure images have the correct format", "To choose the right images"], correctAnswer: "Establishes standards for the style of images used"},
    {
      "questionText": "How can a brand style guide be used to maintain consistency across digital and physical platforms?",
      "answerOptions": [
        "Provides guidelines for visual adaptation across platforms",
        "Provides ergonomic guidelines",
        "Ensures consistency of colors and fonts across all platforms",
        "Determines the frequency of social media posts"
      ],
      "correctAnswer": "Provides guidelines for visual adaptation across platforms"
    },
    {
      "questionText": "What role does the logo play in a brand style guide?",
      "answerOptions": [
        "The logo is for aesthetic purposes",
        "The logo is the visual face of the brand, and the style guide defines its usage",
        "The logo is not present in the brand style guide",
        "The logo must be included in the brand style guide for use when needed"
      ],
      "correctAnswer": "The logo is the visual face of the brand, and the style guide defines its usage"
    },
    {
      "questionText": "How can the brand style guide be used to maintain consistency among marketing, design, and communication teams?",
      "answerOptions": [
        "It serves as a common reference among teams",
        "To prevent teams from getting lost in the forest",
        "It is used to avoid using the same visuals",
        "It does not serve for consistency among teams"
      ],
      "correctAnswer": "It serves as a common reference among teams"
    },
    {
      "questionText": "What are the advantages of including a voice tone section in a brand style guide?",
      "answerOptions": [
        "The section is there in case someone needs it",
        "You can cut out the voice tone section and hang it on the office walls",
        "This section is for using the right volume in ads",
        "This section guides the use of appropriate language for the brand"
      ],
      "correctAnswer": "This section guides the use of appropriate language for the brand"
    },
    {
      "questionText": "Why is visual consistency particularly crucial in a digital environment?",
      "answerOptions": [
        "It reinforces online credibility, brand memorability, and facilitates navigation",
        "To avoid artistic hacking attacks",
        "For an energetic balance of screens",
        "To facilitate navigation only"
      ],
      "correctAnswer": "It reinforces online credibility, brand memorability, and facilitates navigation"
    },
    {
      "questionText": "How can a brand style guide be adapted for seasonal campaigns without compromising the brand's core identity?",
      "answerOptions": [
        "By changing the graphic design according to the seasons",
        "Changing the logo only according to the seasons",
        "By having specific recommendations for colors, graphics, and visual elements",
        "It does not adapt according to the seasons"
      ],
      "correctAnswer": "By having specific recommendations for colors, graphics, and visual elements"
    },
    {
      "questionText": "What could inappropriate use of the brand style guide lead to?",
      "answerOptions": [
        "Consumers would be lost",
        "It could create a fashion faux pas epidemic",
        "It could dilute the brand, create confusion among consumers, and compromise its credibility",
        "The brand would simply lose credibility"
      ],
      "correctAnswer": "It could dilute the brand, create confusion among consumers, and compromise its credibility"
    },
    {
      "questionText": "How can a brand style guide reflect diversity and inclusion?",
      "answerOptions": [
        "By using all possible colors",
        "Developing mascots for all possible personalities",
        "It should mainly represent diversity in clothing",
        "It can ensure that the brand is inclusive in its visual communications"
      ],
      "correctAnswer": "It can ensure that the brand is inclusive in its visual communications"
    },
    {
      "questionText": "What is the role of user feedback in the evolution of a brand style guide?",
      "answerOptions": [
        "To be able to adjust the style guide",
        "To be able to delete the style guide",
        "They serve to have simple interaction",
        "Users cannot comment"
      ],
      "correctAnswer": "To be able to adjust the style guide"
    },
    {
      "questionText": "How can the brand style guide be used to tell a consistent visual story across different communication channels?",
      "answerOptions": [
        "It cannot adapt to all channels",
        "It provides the right colors",
        "It suggests fonts and colors",
        "It provides guidelines on how to visually translate the brand story"
      ],
      "correctAnswer": "It provides guidelines on how to visually translate the brand story"
    },
    {
      "questionText": "What steps should be followed to successfully implement a new brand style guide within a company?",
      "answerOptions": [
        "Change and implement regular monitoring",
        "Meeting with a meal and changing the new guide",
        "Employee training, communication of changes, and regular monitoring",
        "There are no specific steps"
      ],
      "correctAnswer": "Employee training, communication of changes, and regular monitoring"
    },
    {
      "questionText": "How can the choice of colors in design influence the perception of a brand?",
      "answerOptions": [
        "By its opacity",
        "If they are in CMYK or RGB",
        "No red, it's too violent",
        "Through the emotional and psychological connotations of colors"
      ],
      "correctAnswer": "Through the emotional and psychological connotations of colors"
    },
    {
      "questionText": "What are the key elements to consider when creating a user-friendly interface for a website or application?",
      "answerOptions": [
        "Accessibility, navigation, readability, and consistency",
        "Accessibility and navigation",
        "Readability only",
        "If the colors are beautiful"
      ],
      "correctAnswer": "Accessibility, navigation, readability, and consistency"
    },
    {
      "questionText": "How can design be effectively used to convey a message in advertising or a marketing campaign?",
      "answerOptions": [
        "By being attractive and clear",
        "By being aligned with the message of the campaign only",
        "By being attractive, aligned with the message of the campaign, and tailored to the target audience",
        "Pixels must dance"
      ],
      "correctAnswer": "By being attractive, aligned with the message of the campaign, and tailored to the target audience"
    },
    {
      "questionText": "What are the current design trends that can influence the creation of new products or services?",
      "answerOptions": [
        "Immersive user experience",
        "Minimalist design, custom fonts, animation, and immersive user experience",
        "Abstract design, thin fonts, and animations",
        "Custom fonts"
      ],
      "correctAnswer": "Minimalist design, custom fonts, animation, and immersive user experience"
    },
    {
  "questionText": "How can design be used to enhance the credibility of a company on its website?",
  "answerOptions": [
    "Professional design, clear layout, high-quality images, and easy navigation",
    "Clear layout and images with a specific format",
    "Showcasing achievements on the website",
    "Animations"
  ],
  "correctAnswer": "Professional design, clear layout, high-quality images, and easy navigation"
},
{
  "questionText": "What is the importance of visual hierarchy in a design?",
  "answerOptions": [
    "Allows for a modern look",
    "Ensures information is sorted for users",
    "Highlights important information",
    "Targets the audience"
  ],
  "correctAnswer": "Highlights important information"
},
{
  "questionText": "How can the choice of typography influence the perception of a document or design?",
  "answerOptions": [
    "It evokes a psychological sense",
    "It evokes emotions, reinforces the message, and contributes to the visual identity",
    "It does not play a role in the perception of a design",
    "It plays a role depending on its size"
  ],
  "correctAnswer": "It evokes emotions, reinforces the message, and contributes to the visual identity"
},
{
  "questionText": "What are the important considerations when choosing typography for a website?",
  "answerOptions": [
    "Readability, compatibility with browsers, and consistency with the brand",
    "Readability and the beauty of typography",
    "Consistency with the identity of the brand",
    "Size and final color"
  ],
  "correctAnswer": "Readability, compatibility with browsers, and consistency with the brand"
},
{
  "questionText": "How can the choice of typography be adapted to evoke a sense of trust in a professional context?",
  "answerOptions": [
    "Only classic fonts",
    "It doesn't matter as long as it reflects a brand",
    "There are 5 typographies that look professional",
    "Classic and balanced fonts"
  ],
  "correctAnswer": "Classic and balanced fonts"
},
{
  "questionText": "Why is readability on different screens and screen sizes crucial in choosing typography for web design?",
  "answerOptions": [
    "It just has to adapt to the screen being worked on",
    "The size must be just large enough to be readable",
    "Typography adapts itself automatically to screens",
    "It is important because it must adapt to different supports"
  ],
  "correctAnswer": "It is important because it must adapt to different supports"
},
{
  "questionText": "Why is storytelling considered a powerful tool in the communication of a brand or company?",
  "answerOptions": [
    "It is important to create an emotional connection with the audience",
    "The audience simply loves stories",
    "Through storytelling, more publications can be created",
    "It's just a trend"
  ],
  "correctAnswer": "It is important to create an emotional connection with the audience"
},
{
  "questionText": "How can storytelling help establish an emotional connection with the target audience?",
  "answerOptions": [
    "By making the audience cry",
    "By eliciting emotions that enable customers to make purchases",
    "By eliciting positive emotions that make the audience happy",
    "By eliciting authentic emotions that allow the audience to identify"
  ],
  "correctAnswer": "By eliciting authentic emotions that allow the audience to identify"
},
{
  "questionText": "How can storytelling be used to differentiate a company in a competitive market?",
  "answerOptions": [
    "By telling a false story that conveys strong emotions",
    "By telling a unique story that differentiates it from its competitors",
    "By showing that it is not like its competitors",
    "By showing that the company is the best"
  ],
  "correctAnswer": "By telling a unique story that differentiates it from its competitors"
}

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
