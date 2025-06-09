import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Database from "../Database";
import { commonStyles } from "../Styles";
import { MyButton } from "../components/Custom";

export default Questions = ({ navigation, route }) => {
  const { questions, level } = route.params;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [points, setPoints] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [endTitle, setEndTitle] = useState("");

  const updateTitle = () => {
    let title = "";

    if (showScore) {
      title += "Fim!";
    } else {
      title += currentQuestion + 1 + "º questão ";
    }

    navigation.setOptions({ title: title });
  };

  useEffect(() => {
    updateTitle();
  });

  const saveScore = async (score, level) => {
    const scoreData = {
      date: new Date().toLocaleString(),
      value: score,
      total: questions.length,
      level: level,
      points: points,
    };

    let scores = await Database.getValue("scores");
    scores = scores ? JSON.parse(scores) : [];

    scores.push(scoreData);
    await Database.storeValue("scores", JSON.stringify(scores));
  };

  const loadAnswer = () => {
    const isCorrect = selectedOption === questions[currentQuestion].answer;
    const newScore = isCorrect ? score + 1 : score;
    const newPoints = points + (isCorrect ? 10 : 4);
    setScore(newScore);
    setPoints(newPoints);

    (async () => {
      const nextQuestion = currentQuestion + 1;
      setSelectedOption(null);

      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        if (!(newScore >= 6)) {
          setEndTitle("Revise os conceitos para melhorar sua performance");
        } else {
          setEndTitle("Continue assim!");
        }

        await saveScore(newScore, level);

        setShowScore(true);
      }
    })();
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
  };

  const exitQuiz = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      {showScore ? (
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>{endTitle}</Text>
          <Text style={styles.scoreText}>
            Acertou {score} de {questions.length} (+ {points} pontos)
          </Text>
          <MyButton text="Tentar novamente" onPress={restartQuiz} />
          <MyButton text="Sair" onPress={exitQuiz} />
        </View>
      ) : (
        <View style={styles.quizContainer}>
          <Text style={styles.questionText}>
            {questions[currentQuestion].question}
          </Text>

          {questions[currentQuestion].options.map((option, index) => {
            let optionStyle = styles.optionButton;

            if (selectedOption) {
              if (option === questions[currentQuestion].answer) {
                optionStyle = styles.correctOption;
              } else if (option === selectedOption) {
                optionStyle = styles.wrongOption;
              }
            }

            return (
              <TouchableOpacity
                key={index}
                style={optionStyle}
                onPress={() => setSelectedOption(option)}
                disabled={selectedOption !== null}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            );
          })}

          {selectedOption !== null && (
            <TouchableOpacity onPress={loadAnswer}>
              <Text style={styles.continueText}>Continuar</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  quizContainer: {
    width: "100%",
    alignItems: "center",
  },

  questionText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 30,
  },

  optionButton: {
    backgroundColor: "#333",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 5,
    width: "80%",
    alignItems: "center",
  },

  correctOption: {
    backgroundColor: "#28a745",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 5,
    width: "80%",
    alignItems: "center",
  },

  wrongOption: {
    backgroundColor: "#dc3545",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 5,
    width: "80%",
    alignItems: "center",
  },

  optionText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },

  scoreContainer: {
    alignItems: "center",
  },

  scoreText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },

  continueText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 28,
    padding: 10,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "white",
  },
});
