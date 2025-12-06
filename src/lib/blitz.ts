import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { getFileCreationDate } from "@/lib/date";

const blitzDirectory = path.join(process.cwd(), "src/content/blitz");

export interface BlitzData {
    id: string;
    date: string;
    contentHtml: string;
    content?: string;
}

export function getSortedBlitzData(): BlitzData[] {
    // Create directory if it doesn't exist
    if (!fs.existsSync(blitzDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(blitzDirectory);
    const allBlitzData = fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => {
            const id = fileName.replace(/\.md$/, "");
            const fullPath = path.join(blitzDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const matterResult = matter(fileContents);

            // Process content synchronously for the list view since they are short
            const processedContent = remark()
                .use(html)
                .processSync(matterResult.content);
            const contentHtml = processedContent.toString();

            const date = matterResult.data.date || getFileCreationDate(fullPath);

            return {
                id,
                contentHtml,
                date,
            };
        });

    return allBlitzData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}
