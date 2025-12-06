import { getSortedBlitzData } from "@/lib/blitz";
import { BlitzCard } from "@/components/blitz-card";

export const metadata = {
    title: "Blitz Thoughts - Odinaka",
    description: "Short-form thoughts, ideas, and updates.",
};

export default function BlitzPage() {
    const allBlitzData = getSortedBlitzData();

    return (
        <div className="max-w-2xl mx-auto space-y-12 pt-12">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">blitz thoughts</h1>
                <p className="text-muted-foreground text-lg">
                    fleeting ideas, quick updates, and random musings.
                </p>
            </div>

            <div className="space-y-6">
                {allBlitzData.length > 0 ? (
                    allBlitzData.map((blitz, index) => (
                        <BlitzCard
                            key={blitz.id}
                            {...blitz}
                            index={index}
                        />
                    ))
                ) : (
                    <div className="text-center py-12 text-muted-foreground">
                        <p>No thoughts yet. Check back soon!</p>
                    </div>
                )}
            </div>
        </div>
    );
}
