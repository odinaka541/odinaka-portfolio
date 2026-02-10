"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
    text: string;
    className?: string;
}

export function CopyButton({ text, className = "" }: CopyButtonProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className={`group flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800 transition-all ${className}`}
            aria-label="Copy to clipboard"
        >
            {copied ? (
                <>
                    <Check className="w-3.5 h-3.5 text-green-500" />
                    <span className="text-xs font-mono text-green-500 uppercase tracking-wider">Copied</span>
                </>
            ) : (
                <>
                    <Copy className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" />
                    <span className="text-xs font-mono text-neutral-500 group-hover:text-white uppercase tracking-wider transition-colors">Copy</span>
                </>
            )}
        </button>
    );
}
