import { execSync } from "child_process";
import fs from "fs";

export function getFileCreationDate(filePath: string): string {
    try {
        // Try to get the first commit date from git
        const gitDate = execSync(`git log --diff-filter=A --follow --format=%aD -1 -- "${filePath}"`, {
            encoding: "utf-8",
            stdio: ["pipe", "pipe", "ignore"] // Ignore stderr to avoid crashing on non-git files
        }).trim();

        if (gitDate) {
            return new Date(gitDate).toISOString();
        }
    } catch (e) {
        // Ignore git errors (e.g. file not committed yet)
    }

    // Fallback to file creation time (birthtime)
    const stats = fs.statSync(filePath);
    return stats.birthtime.toISOString();
}
