interface ProgressBarProps {
    currentChapter: number;
    totalChapters: number;
}

export default function ProgressBar({ currentChapter, totalChapters }: ProgressBarProps) {
    return (
        <div className="w-full max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-dark-muted">Chapter Progress</span>
                <span className="text-sm text-injective-cyan font-semibold">
                    {currentChapter} / {totalChapters}
                </span>
            </div>
            <div className="flex gap-2">
                {Array.from({ length: totalChapters }).map((_, index) => {
                    const chapterNum = index + 1;
                    const isCompleted = chapterNum < currentChapter;
                    const isCurrent = chapterNum === currentChapter;

                    return (
                        <div
                            key={chapterNum}
                            className={`flex-1 h-2 rounded-full transition-all ${isCompleted
                                    ? 'bg-gradient-ninja'
                                    : isCurrent
                                        ? 'bg-injective-cyan animate-pulse-slow'
                                        : 'bg-dark-border'
                                }`}
                        />
                    );
                })}
            </div>
        </div>
    );
}
