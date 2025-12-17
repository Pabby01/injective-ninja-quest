interface ScoreIndicatorProps {
    score: number;
    maxScore?: number;
}

export default function ScoreIndicator({ score, maxScore = 150 }: ScoreIndicatorProps) {
    return (
        <div className="fixed top-4 right-4 bg-dark-card border border-dark-border rounded-lg px-6 py-3 shadow-lg">
            <div className="text-center">
                <div className="text-xs text-dark-muted mb-1">Score</div>
                <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold bg-gradient-ninja bg-clip-text text-transparent">
                        {score}
                    </span>
                    <span className="text-sm text-dark-muted">/ {maxScore}</span>
                </div>
            </div>
        </div>
    );
}
