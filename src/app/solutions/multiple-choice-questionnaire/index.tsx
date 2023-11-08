// start time 23.30
// end time 00.10
"use client";

import Button from "@/components/Button";
import { Question } from "./page";
import { useState } from "react";

/**
    We want to build a Multiple choice Questionnaire. After submission, we calculate a score based on the answers.
    Create a questionnaire that takes two types of questions

    Questions with a single answer (radio)
    Questions with multiple answers (checkboxes)
    After submitting the questionnaire, each of the users answers must be compared with the actual answer for grading.
    A multiple answer question is correct if all of the selected answers are correct
 */

export default function MultipleChoiceQuestionnaire({
  questions,
}: {
  questions: Question[];
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState<number[]>([]); // e.g. [1, 3] for checkbox, [2] for radio
  const [responses, setResponses] = useState<Array<number[]>>([]);

  const nextQuestion = () => {
    // TODO: what if is the last one
    setAnswer([]);
    setResponses((prev) => [...prev, answer]);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert("Questionnaire finished");
      // calculate score
    }
  };

  const selectAnswer = (pick: number) => {
    // TODO: if picked answer is selected then deselect
    console.log("pick:", pick);
    const picked = answer.find((ans) => ans === pick);
    if (picked) {
      if (questions[currentQuestion].type === "checkbox") {
        setAnswer((prev) => prev.filter((ans) => ans !== picked));
      } else {
        setAnswer(() => []);
      }
    } else {
      if (questions[currentQuestion].type === "checkbox") {
        setAnswer((prev) => [...prev, pick]);
      } else {
        setAnswer(() => [pick]);
      }
    }
  };

  const question = questions[currentQuestion];
  const answerSelected =
    question.type === "radio" ? answer.length === 1 : answer.length >= 1;

  return (
    <div className="text-xl">
      <h1 className="text-4xl">Multiple Choice Questionnaire</h1>
      <h2 className="text-md mb-4">
        Question {currentQuestion + 1} of {questions.length}
      </h2>
      <h3 className="text-2xl italic">{question.question}</h3>
      <ul className="py-4">
        {question.options.map((option, optionIndex) => {
          console.log(optionIndex);
          return (
            <div key={optionIndex} className="mb-2">
              <label className="mr-2" htmlFor="option">
                {option.text}
              </label>
              {question.type === "checkbox" ? (
                <input
                  type="checkbox"
                  name="option"
                  checked={answer.includes(optionIndex + 1)}
                  onChange={() => selectAnswer(optionIndex + 1)}
                />
              ) : (
                <input
                  type="radio"
                  name="option"
                  checked={!!answer.find((ans) => ans === optionIndex + 1)}
                  onChange={() => selectAnswer(optionIndex + 1)}
                />
              )}
            </div>
          );
        })}
      </ul>
      <Button disabled={!answerSelected} onClick={nextQuestion}>
        Next
      </Button>
    </div>
  );
}
