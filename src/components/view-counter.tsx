"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

interface ViewCounterProps {
    slug: string;
}

export function ViewCounter({ slug }: ViewCounterProps) {
    const [views, setViews] = useState<number | null>(null);

    useEffect(() => {
        // TODO: Connect to a real backend service (e.g., Upstash Redis, Supabase, or a custom API)
        // Since this is a static site, we can't write to a local file or database directly.
        // Example implementation with Upstash Redis:
        // const incrementView = async () => {
        //     const res = await fetch('/api/views', {
        //         method: 'POST',
        //         body: JSON.stringify({ slug })
        //     });
        //     const data = await res.json();
        //     setViews(data.views);
        // };
        // incrementView();

        // --- DEMO IMPLEMENTATION ---
        // Simulating view counts using localStorage for persistence across reloads on the same device.
        // In a real app, this would come from the server.
        const storageKey = `blog-views-${slug}`;
        const storedViews = localStorage.getItem(storageKey);

        let currentViews = storedViews ? parseInt(storedViews, 10) : 0;

        // Simulate "new view" logic
        // In a real app, you might want to debounce this or check for unique sessions
        const hasViewedSession = sessionStorage.getItem(`viewed-${slug}`);

        if (!hasViewedSession) {
            // Randomly increment by 1-3 to make it feel "alive" for the demo
            const increment = Math.floor(Math.random() * 3) + 1;
            currentViews += increment;
            localStorage.setItem(storageKey, currentViews.toString());
            sessionStorage.setItem(`viewed-${slug}`, 'true');
        }

        // If it's a new post (0 views), give it a realistic starting number
        if (currentViews === 0) {
            currentViews = Math.floor(Math.random() * 50) + 10;
            localStorage.setItem(storageKey, currentViews.toString());
        }

        setViews(currentViews);
    }, [slug]);

    if (views === null) {
        return (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground animate-pulse">
                <Eye className="w-3.5 h-3.5" />
                <span>...</span>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground" title={`${views} people read this`}>
            <Eye className="w-3.5 h-3.5" />
            <span>{views.toLocaleString()} views</span>
        </div>
    );
}
