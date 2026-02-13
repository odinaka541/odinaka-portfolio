import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { getFileCreationDate } from "@/lib/date";
import { parse } from "date-fns";

const blitzDirectory = path.join(process.cwd(), "src/content/blitz");

export interface BlitzData {
    id: string;
    date: string;
    contentHtml: string;
    content?: string;
}

function getDateFromFilename(fileName: string): string | null {
    try {
        // Pattern 1: DDMMMYY (e.g., 11feb26-one.md, 07Dec25-two.md)
        const pattern1 = /^(\d{2})([a-zA-Z]{3})(\d{2})/;
        const match1 = fileName.match(pattern1);
        if (match1) {
            const dateStr = `${match1[1]}${match1[2]}${match1[3]}`;
            // parsed date object
            const parsedDate = parse(dateStr, "ddMMMyy", new Date());
            return parsedDate.toISOString();
        }

        // Pattern 2: DD-MMM (e.g., 04-Dec-One.md) - Defaulting to 2025 based on git history
        const pattern2 = /^(\d{2})-([a-zA-Z]{3})/;
        const match2 = fileName.match(pattern2);
        if (match2) {
            const dateStr = `${match2[1]}-${match2[2]}-25`;
            const parsedDate = parse(dateStr, "dd-MMM-yy", new Date());
            return parsedDate.toISOString();
        }

        return null;
    } catch (e) {
        console.error(`Error parsing date from filename ${fileName}:`, e);
        return null;
    }
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

            const date = matterResult.data.date
                ? new Date(matterResult.data.date).toISOString()
                : (getDateFromFilename(fileName) || getFileCreationDate(fullPath));

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
