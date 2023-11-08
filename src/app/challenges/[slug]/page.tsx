import { challenges } from "@/app/page";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";
import * as fs from "fs";
import path from "path";
import Button from "@/components/Button";

export default async function ChallengesPage({
  params,
}: {
  params: { slug: string };
}) {
  const challenge = challenges.find(
    (challenge) => challenge.path === params.slug
  )!;
  // there _has_ to be a better way but idc for now
  const promptPath = path.join(
    path.resolve("src/prompts"),
    `/${challenge.path}.md`
  );
  const fileContents = fs.readFileSync(promptPath, "utf8");
  const processedContent = await remark().use(html).process(fileContents);
  const contentHtml = processedContent.toString();

  return (
    <main className="p-4">
      <div
        className="prose lg:prose-xl dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      ></div>
      <label htmlFor="is-completed">Completed:</label>
      <input type="checkbox" name="is-completed" />
      <br />
      <Button>
        <Link href={`/solutions/${challenge.path}`}>Go to demo</Link>
      </Button>
    </main>
  );
}
