import { getSortedBlitzData } from "@/lib/blitz";
import { BlitzCard } from "@/components/blitz-card";

export const metadata = {
    title: "Blitz Thoughts - Odinaka",
    description: "Short-form thoughts, ideas, and updates.",
};

export default function BlitzPage() {
    const allBlitzData = getSortedBlitzData();

    return (
        <div className="min-h-screen bg-black text-[#E5E5E5] pt-32 pb-24 px-6">
            <div className="max-w-5xl mx-auto space-y-20">
                <div className="space-y-6">
                    <h1 className="text-[10vw] leading-[0.9] font-bold tracking-tighter text-white">
                        BLITZ<br />THOUGHTS
                    </h1>
                    <p className="text-xl text-neutral-400 max-w-2xl font-light">
                        fleeting ideas, quick updates, and random musings. raw and unfiltered.
                    </p>
                </div>

                <div className="space-y-8 border-t border-neutral-900 pt-12">
                    {allBlitzData.length > 0 ? (
                        allBlitzData.map((blitz, index) => (
                            <BlitzCard
                                key={blitz.id}
                                {...blitz}
                                index={index}
                            />
                        ))
                    ) : (
                        <div className="py-12 text-neutral-500 font-light text-xl">
                            <p>No thoughts yet. The void is silent.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
