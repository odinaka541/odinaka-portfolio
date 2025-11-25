import { getPostData, getSortedPostsData } from "@/lib/blog";
import { GlassCard } from "@/components/ui/glass-card";
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

    return (
        <div className="max-w-2xl mx-auto pt-8 pb-20">
            <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to writing
            </Link>

            <GlassCard className="bg-white dark:bg-slate-900 border-border shadow-sm p-8 md:p-12">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-lg font-bold text-muted-foreground">
                            {postData.author?.charAt(0) || "O"}
                        </div>
                        <div>
                            <div className="font-semibold text-sm text-foreground">{postData.author || "Odinaka"}</div>
                            <div className="text-xs text-muted-foreground">
                                {new Date(postData.date).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric"
                                })}
                            </div>
                        </div>
                    </div>
                    <Bookmark className="w-5 h-5 text-orange-500" />
                </div>

                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
                    {postData.title}
                </h1>

                <div
                    className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary prose-img:rounded-xl"
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }}
                />
            </GlassCard>
        </div>
    );
}
