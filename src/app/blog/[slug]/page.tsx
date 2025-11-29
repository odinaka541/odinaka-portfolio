import { getPostData, getSortedPostsData } from "@/lib/blog";
import { GlassCard } from "@/components/ui/glass-card";
import { ViewCounter } from "@/components/view-counter";
import Link from "next/link";
import { ArrowLeft, Bookmark } from "lucide-react";

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const postData = await getPostData(slug);
    return {
        title: `${postData.title} - Odinaka`,
        description: postData.excerpt,
    };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const postData = await getPostData(slug);

    // Helper function for date formatting, as `formatDate` was not defined in the original context.
    // This is a basic implementation to match the expected output format.
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
        });
    };

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
                {/* Column 1: Metadata & Ethereal Experience */}
                <div className="lg:col-span-1 flex flex-col justify-between h-full sticky top-32">
                    <div>
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Transmission
                        </Link>

                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 font-bodoni">
                            {postData.title}
                        </h1>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                            <time dateTime={postData.date}>
                                {formatDate(postData.date)}
                            </time>
                            <span>•</span>
                            <ViewCounter slug={slug} />
                        </div>
                    </div>

                    {/* Ethereal Visual */}
                    <div className="mt-12 hidden lg:block">
                        <div className="w-full aspect-square rounded-full bg-gradient-to-tr from-primary/20 via-purple-500/10 to-transparent blur-3xl animate-pulse" />
                        <p className="text-xs text-center text-white/20 mt-4 font-mono tracking-widest uppercase">
                            Signal Received
                        </p>
                    </div>
                </div>

                {/* Column 2: Content */}
                <div className="lg:col-span-2 prose prose-invert prose-lg max-w-none">
                    {/* Assuming CustomMDX is a component you have defined elsewhere */}
                    {/* For this example, I'll use dangerouslySetInnerHTML as a placeholder if CustomMDX is not available */}
                    {/* If CustomMDX is a real component, ensure it's imported and used correctly */}
                    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }} />
                </div>

                {/* Column 3: Space (Empty) */}
                <div className="hidden lg:block lg:col-span-1" />
            </div>
        </div>
    );
}
