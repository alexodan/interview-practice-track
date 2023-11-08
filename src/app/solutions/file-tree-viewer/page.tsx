import FileTreeViewer from ".";

export type FileTree = {
  name: string;
  children?: FileTree[];
};

// How should the data-type of this structure be?
export const fileTree: FileTree[] = [
  {
    name: "codebooks",
    children: [
      {
        name: "codebook.pdf",
      },
      {
        name: "format.txt",
      },
    ],
  },
  {
    name: "data",
    children: [
      {
        name: "aggregate",
        children: [
          {
            name: "aggregates.tab",
          },
        ],
      },
      {
        name: "raw",
        children: [
          {
            name: "output_data.tab",
          },
          {
            name: "quality_data.tab",
          },
        ],
      },
      {
        name: "readme.txt",
      },
    ],
  },
];

export default function FileTreeViewerPage() {
  return (
    <main className="p-4">
      <FileTreeViewer fileTree={fileTree} />
    </main>
  );
}
