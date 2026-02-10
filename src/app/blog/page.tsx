import { getSortedPostsData } from "@/lib/blog";
import { BlogCard } from "@/components/blog-card";

export const metadata = {
    title: "Thoughts - Odinaka",
    description: "Thoughts, ideas, and stories.",
};

export default function BlogPage() {
    const allPostsData = getSortedPostsData();

    return (
        <div className="min-h-screen bg-black text-[#E5E5E5] pt-32 pb-24 px-6">
            <div className="max-w-5xl mx-auto space-y-20">
                <div className="space-y-6">
                    <h1 className="text-[10vw] leading-[0.9] font-bold tracking-tighter text-white">
                        THOUGHTS &<br />STORIES
                    </h1>
                    <p className="text-xl text-neutral-400 max-w-2xl font-light">
                        i think about a lot of things. i write about them too, sometimes.
                    </p>
                </div>

                <div className="border-t border-neutral-900">
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
        </div>
    );
}
