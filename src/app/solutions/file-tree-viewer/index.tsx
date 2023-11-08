"use client";

// start time is 19.30
// end time 20.00
import { useState } from "react";
import { FileTree } from "./page";

export default function FileTreeViewer({ fileTree }: { fileTree: FileTree[] }) {
  return (
    <div>
      <h1>File Tree Viewer</h1>
      <ul>
        {fileTree.map((file) => {
          return <File key={file.name} file={file} />;
        })}
      </ul>
    </div>
  );
}

function File({ file }: { file: FileTree }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(`rendering ${file.children ? "folder" : "file"}:`, file);

  return file.children ? (
    <>
      <li>
        📁 {file.name}{" "}
        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "↑" : "↓"}</button>
      </li>
      {isOpen && (
        <ul style={{ marginLeft: "20px" }}>
          {file.children.map((f) => (
            <File key={f.name} file={f} />
          ))}
        </ul>
      )}
    </>
  ) : (
    <li>
      <span>📄 {file.name}</span>
    </li>
  );
}
