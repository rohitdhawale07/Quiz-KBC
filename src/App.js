import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import QandAns from "./components/QandAns";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("Rs 0");

  const data = [
    {
      id: 1,
      question: "What is the capital of Australia?",
      answers: [
        { text: "Sydney", correct: false },
        { text: "Melbourne", correct: false },
        { text: "Canberra", correct: true },
        { text: "Perth", correct: false },
      ],
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Venus", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: false },
      ],
    },

    {
      id: 3,
      question: "Who wrote the play 'Romeo and Juliet'?",
      answers: [
        { text: "Charles Dickens", correct: false },
        { text: "William Shakespeare", correct: true },
        { text: "Jane Austen", correct: false },
        { text: "Mark Twain", correct: false },
      ],
    },
    {
      id: 4,
      question: "Who played the character of harry potter in movie?",
      answers: [
        { text: "Johnny Deep", correct: false },
        { text: "Leonardo Di Caprio", correct: false },
        { text: "Denzel Washington", correct: false },
        { text: "Daniel Red Cliff", correct: true },
      ],
    },
    {
      id: 5,
      question: "In which year did the Titanic sink?",
      answers: [
        { text: "1909", correct: false },
        { text: "1912", correct: true },
        { text: "1921", correct: false },
        { text: "1933", correct: false },
      ],
    },
    {
      id: 6,
      question: "What is the largest ocean on Earth?",
      answers: [
        { text: "Atlantic Ocean", correct: false },
        { text: "Indian Ocean", correct: false },
        { text: "Arctic Ocean", correct: false },
        { text: "Pacific Ocean", correct: true },
      ],
    },
    {
      id: 7,
      question: "Who painted the Mona Lisa?",
      answers: [
        { text: "Vincent van Gogh", correct: false },
        { text: "Pablo Picasso", correct: false },
        { text: "Leonardo da Vinci", correct: true },
        { text: "Claude Monet", correct: false },
      ],
    },
    {
      id: 8,
      question: "What is the largest mammal on land?",
      answers: [
        { text: "Elephant", correct: true },
        { text: "Giraffe", correct: false },
        { text: "Hippopotamus", correct: false },
        { text: "Rhinoceros", correct: false },
      ],
    },
    {
      id: 9,
      question: "Which gas do plants absorb from the atmosphere?",
      answers: [
        { text: "Oxygen", correct: false },
        { text: "Carbon Dioxide", correct: true },
        { text: "Nitrogen", correct: false },
        { text: "Hydrogen", correct: false },
      ],
    },
    {
      id: 10,
      question: "Who is known as the 'Father of Computer Science'?",
      answers: [
        { text: "Alan Turing", correct: true },
        { text: "Bill Gates", correct: false },
        { text: "Steve Jobs", correct: false },
        { text: "Mark Zuckerberg", correct: false },
      ],
    },
    {
      id: 11,
      question: "What is the currency of Japan?",
      answers: [
        { text: "Yen", correct: true },
        { text: "Won", correct: false },
        { text: "Dollar", correct: false },
        { text: "Euro", correct: false },
      ],
    },
    {
      id: 12,
      question: "In which year did the Berlin Wall fall?",
      answers: [
        { text: "1987", correct: false },
        { text: "1989", correct: true },
        { text: "1991", correct: false },
        { text: "1993", correct: false },
      ],
    },
    {
      id: 13,
      question: "Who developed the theory of relativity?",
      answers: [
        { text: "Isaac Newton", correct: false },
        { text: "Galileo Galilei", correct: false },
        { text: "Albert Einstein", correct: true },
        { text: "Nikola Tesla", correct: false },
      ],
    },
    {
      id: 14,
      question: "What is the largest desert in the world?",
      answers: [
        { text: "Sahara Desert", correct: true },
        { text: "Gobi Desert", correct: false },
        { text: "Arabian Desert", correct: false },
        { text: "Antarctica", correct: false },
      ],
    },
    {
      id: 15,
      question: "Who wrote 'To Kill a Mockingbird'?",
      answers: [
        { text: "Harper Lee", correct: true },
        { text: "J.K. Rowling", correct: false },
        { text: "George Orwell", correct: false },
        { text: "Mark Twain", correct: false },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "Rs 2,000" },
        { id: 2, amount: "Rs 5,000" },
        { id: 3, amount: "Rs 10,000" },
        { id: 4, amount: "Rs 20,000" },
        { id: 5, amount: "Rs 40,000" },
        { id: 6, amount: "RS 80,000" },
        { id: 7, amount: "Rs 1,60,000" },
        { id: 8, amount: "Rs 3,20,000" },
        { id: 9, amount: "Rs 6,40,000" },
        { id: 10, amount: "Rs 12,50,000" },
        { id: 11, amount: "Rs 25,00,000" },
        { id: 12, amount: "Rs 50,00,000" },
        { id: 13, amount: "Rs 1 Crore" },
        { id: 14, amount: "Rs 3 Crore" },
        { id: 15, amount: "Rs 7 Crore" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut || questionNumber > data.length ? (
              <h1 className="endText">Congratulations, You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <QandAns
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
