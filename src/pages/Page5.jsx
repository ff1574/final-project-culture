import React, { useState } from "react";
import { Chart } from "primereact/chart";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import TabMenuComponent from "../components/TabMenuComponent";
import "../assets/css/Page5.css";

const wordCloudData = {
  labels: [
    "Heroes",
    "Myths",
    "Legends",
    "Magic",
    "Transformation",
    "Tradition",
    "Courage",
    "Wit",
    "Morality",
    "Good vs Evil",
    "Innovation",
    "Cultural Fusion",
    "Environmentalism",
    "Digital Age",
  ],
  datasets: [
    {
      label: "Frequency",
      backgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#FF9F40",
        "#4BC0C0",
        "#9966FF",
        "#0DFF4D",
        "#F7464A",
        "#46BFBD",
        "#FDB45C",
        "#C9CBCF",
        "#9B59B6",
        "#2ECC71",
        "#1ABC9C",
      ],
      data: [50, 35, 40, 30, 20, 25, 15, 45, 60, 70, 40, 30, 20, 25],
    },
  ],
};

const quizQuestions = [
  {
    question: "What is the Norse World Tree called?",
    options: ["Yggdrasil", "Asgard", "Midgard", "Valhalla"],
    answer: "Yggdrasil",
  },
  {
    question: "Who is the trickster god in Norse mythology?",
    options: ["Thor", "Loki", "Odin", "Freyr"],
    answer: "Loki",
  },
  {
    question: "Which culture is associated with the Monkey King?",
    options: ["Chinese", "Japanese", "Korean", "Vietnamese"],
    answer: "Chinese",
  },
  {
    question: "What did Prometheus steal from the gods to give to humans?",
    options: ["Water", "Fire", "Knowledge", "Immortality"],
    answer: "Fire",
  },
  {
    question: "Who is the Greek god of the underworld?",
    options: ["Zeus", "Poseidon", "Hades", "Apollo"],
    answer: "Hades",
  },
  {
    question:
      "Which folklore character is known for 'robbing the rich to feed the poor'?",
    options: ["Robin Hood", "King Arthur", "Paul Bunyan", "Beowulf"],
    answer: "Robin Hood",
  },
  {
    question: "In Japanese mythology, what is Amaterasu the goddess of?",
    options: ["Moon", "Sun", "Storms", "Harvest"],
    answer: "Sun",
  },
  {
    question:
      "What creature is associated with the Chinese Zodiac Year of the Dragon?",
    options: ["Phoenix", "Lion", "Dragon", "Tiger"],
    answer: "Dragon",
  },
  {
    question:
      "What is the Native American folklore creature that transforms and tricks people?",
    options: ["Coyote", "Bear", "Wolf", "Eagle"],
    answer: "Coyote",
  },
  {
    question:
      "Which legend is known for pulling a sword from a stone to become king?",
    options: ["Beowulf", "Robin Hood", "King Arthur", "Gilgamesh"],
    answer: "King Arthur",
  },
];

const Page5 = () => {
  const [quizVisible, setQuizVisible] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    if (option === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
      setFeedback("correct");
    } else {
      setFeedback("incorrect");
    }

    setTimeout(() => {
      if (currentQuestion + 1 < quizQuestions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
        setFeedback(null);
      } else {
        setQuizFinished(true);
      }
    }, 1500); // Delay to show feedback
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizFinished(false);
    setSelectedOption(null);
    setFeedback(null);
  };

  return (
    <div className="page-container">
      {/* TabMenu for Navigation */}
      <TabMenuComponent />

      {/* Introduction Section */}
      <section className="intro-section">
        <h1>The Future of Folklore</h1>
        <p>
          As we look to the future, technology and globalization present both
          challenges and opportunities for folklore. New storytelling platforms
          and digital tools are reshaping how traditions are preserved and
          shared, ensuring folklore remains relevant in the modern world.
        </p>
      </section>

      {/* Technology Section */}
      <section className="technology-section">
        <h2>Technology and Folklore</h2>
        <ul>
          <li>
            <b>AI in Storytelling:</b> Artificial intelligence can create
            folklore-inspired narratives, bridging traditional and modern
            storytelling techniques.
          </li>
          <li>
            <b>Virtual Reality Experiences:</b> VR allows users to immerse
            themselves in folklore worlds, experiencing stories interactively.
          </li>
          <li>
            <b>Digital Archives:</b> Platforms like the Global Folklore Archive
            enable communities to preserve their stories online.
          </li>
          <li>
            <b>Augmented Reality (AR):</b> AR brings folklore to life in
            real-world settings, enhancing cultural education and tourism.
          </li>
        </ul>
      </section>

      {/* Word Cloud Section */}
      <section className="word-cloud-section">
        <h2>Emerging Folklore Themes</h2>
        <Chart type="bar" data={wordCloudData} className="chart" />
      </section>

      {/* Folklore Quiz Section */}
      <section className="quiz-section">
        <h2>Folklore Quiz</h2>
        <p>Test your knowledge of folklore and mythology!</p>
        <Button
          label="Start Quiz"
          icon="pi pi-play"
          className="p-button-rounded start-quiz-button"
          onClick={() => setQuizVisible(true)}
        />
      </section>

      {/* Quiz Dialog */}
      <Dialog
        visible={quizVisible}
        onHide={() => setQuizVisible(false)}
        style={{ width: "40vw" }}
        modal
        header="Folklore Quiz"
      >
        {!quizFinished ? (
          <div className="quiz-dialog">
            <h3>
              Question {currentQuestion + 1}/{quizQuestions.length}
            </h3>
            <p>{quizQuestions[currentQuestion].question}</p>
            <div className="quiz-options">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  label={option}
                  className={`p-button-outlined quiz-option ${
                    feedback === "correct" &&
                    option === quizQuestions[currentQuestion].answer
                      ? "correct"
                      : feedback === "incorrect" && option === selectedOption
                      ? "incorrect"
                      : ""
                  }`}
                  onClick={() => handleAnswer(option)}
                  disabled={!!feedback} // Disable other options after answering
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="quiz-result">
            <h3>Quiz Finished!</h3>
            <p>
              You scored {score}/{quizQuestions.length}.
            </p>
            <Button
              label="Restart Quiz"
              icon="pi pi-replay"
              className="p-button-rounded restart-button"
              onClick={restartQuiz}
            />
          </div>
        )}
      </Dialog>
    </div>
  );
};

export default Page5;
