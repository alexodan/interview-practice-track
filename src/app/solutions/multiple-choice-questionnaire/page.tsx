import MultipleChoiceQuestionnaire from ".";

export type Question = {
  question: string;
  type: "radio" | "checkbox";
  options: { text: string; isCorrect?: boolean }[];
};

// did this with chat gpt no idea if they're correct or not and idc
const questionnaire: Array<Question> = [
  {
    question: "Which planet is closest to the Sun?",
    type: "radio",
    options: [
      { text: "Mercury", isCorrect: true },
      { text: "Venus" },
      { text: "Earth" },
      { text: "Mars" },
    ],
  },
  //   {
  //     question: "What is the chemical symbol for water?",
  //     type: "radio",
  //     options: [
  //       { text: "H2O", isCorrect: true },
  //       { text: "CO2" },
  //       { text: "O2" },
  //       { text: "H2SO4" },
  //     ],
  //   },
  //   {
  //     question: "Which gas do plants absorb from the atmosphere?",
  //     type: "radio",
  //     options: [
  //       { text: "Carbon dioxide (CO2)", isCorrect: true },
  //       { text: "Oxygen (O2)" },
  //       { text: "Nitrogen (N2)" },
  //       { text: "Hydrogen (H2)" },
  //     ],
  //   },
  //   {
  //     question: "What is the capital of France?",
  //     type: "radio",
  //     options: [
  //       { text: "Paris", isCorrect: true },
  //       { text: "Berlin" },
  //       { text: "Madrid" },
  //       { text: "Rome" },
  //     ],
  //   },
  //   {
  //     question: 'Who wrote "Romeo and Juliet"?',
  //     type: "radio",
  //     options: [
  //       { text: "William Shakespeare", isCorrect: true },
  //       { text: "Jane Austen" },
  //       { text: "Charles Dickens" },
  //       { text: "Mark Twain" },
  //     ],
  //   },
  {
    question:
      "Which of the following are prime numbers? (select all that apply)",
    type: "checkbox",
    options: [
      { text: "2", isCorrect: true },
      { text: "4" },
      { text: "7", isCorrect: true },
      { text: "10" },
      { text: "15" },
    ],
  },
  {
    question:
      "What are the primary colors in subtractive color mixing? (select all that apply)",
    type: "checkbox",
    options: [
      { text: "Red", isCorrect: true },
      { text: "Green", isCorrect: true },
      { text: "Blue", isCorrect: true },
      { text: "Yellow" },
      { text: "Cyan" },
    ],
  },
  //   {
  //     question:
  //       "Which of the following are programming languages? (select all that apply)",
  //     type: "checkbox",
  //     options: [
  //       { text: "Python", isCorrect: true },
  //       { text: "Carrot" },
  //       { text: "Java", isCorrect: true },
  //       { text: "Banana" },
  //       { text: "C++", isCorrect: true },
  //     ],
  //   },
  //   {
  //     question:
  //       "What is the largest mammal in the world? (select all that apply)",
  //     type: "checkbox",
  //     options: [
  //       { text: "Blue Whale", isCorrect: true },
  //       { text: "African Elephant" },
  //       { text: "Giraffe" },
  //       { text: "Lion" },
  //       { text: "Polar Bear" },
  //     ],
  //   },
  //   {
  //     question:
  //       'Which element is represented by the symbol "Fe"? (select all that apply)',
  //     type: "checkbox",
  //     options: [
  //       { text: "Iron", isCorrect: true },
  //       { text: "Iodine" },
  //       { text: "Fluorine" },
  //       { text: "Titanium" },
  //       { text: "Silver" },
  //     ],
  //   },
];

export default function MultipleChoiceQuestionnairePage() {
  return (
    <main className="p-4">
      <MultipleChoiceQuestionnaire questions={questionnaire} />
    </main>
  );
}
