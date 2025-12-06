import { getSortedPostsData } from "@/lib/blog";
import { BlogCard } from "@/components/blog-card";

export const metadata = {
    title: "Thoughts - Odinaka",
    description: "Thoughts, ideas, and stories.",
};

export default function BlogPage() {
    const allPostsData = getSortedPostsData();

    return (
        <div className="max-w-2xl mx-auto space-y-12 pt-12">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">my thoughts</h1>
                <p className="text-muted-foreground text-lg">
                    i think about a lot of things. i write about them too, sometimes.
                </p>
            </div>

            <div className="grid gap-6">
                {allPostsData.map((post, index) => (
                    <BlogCard
                        key={post.slug}
                        {...post}
                        author={post.author || "Odinaka"}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}
