import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { getFileCreationDate } from "@/lib/date";

const postsDirectory = path.join(process.cwd(), "src/content/posts");

export interface PostData {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    contentHtml?: string;
    author?: string;
}

export function getSortedPostsData(): PostData[] {
    // Create directory if it doesn't exist
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, "");
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const matterResult = matter(fileContents);

            const date = matterResult.data.date || getFileCreationDate(fullPath);

            return {
                slug,
                ...(matterResult.data as { title: string; excerpt: string; author: string }),
                date,
            };
        });

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export async function getPostData(slug: string): Promise<PostData> {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    const date = matterResult.data.date || getFileCreationDate(fullPath);

    return {
        slug,
        contentHtml,
        ...(matterResult.data as { title: string; excerpt: string; author: string }),
        date,
    };
}
