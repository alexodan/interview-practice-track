import Link from "next/link";

export const challenges = [
  {
    name: "Sign Up Form",
    path: "sign-up-form",
  },
  {
    name: "File Tree Viewer",
    path: "file-tree-viewer",
  },
  {
    name: "Time Custom Hooks",
    path: "time-custom-hooks",
  },
  {
    name: "Real Time Market",
    path: "real-time-market",
  },
  {
    name: "Multiple Choice Questionnaire",
    path: "multiple-choice-questionnaire",
  },
  {
    name: "Sudoku",
    path: "sudoku",
  },
  {
    name: "Tetris",
    path: "tetris",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Interview Practice Track</h1>
      {challenges.map((challenge) => (
        <Link key={challenge.path} href={`/challenges/${challenge.path}`}>
          {challenge.name}
        </Link>
      ))}
    </main>
  );
}
