import { LeaderboardEntry } from '@/lib/types';

interface CompletionScreenProps {
    score: number;
    leaderboard: LeaderboardEntry[];
    onReplay: () => void;
}

export default function CompletionScreen({ score, leaderboard, onReplay }: CompletionScreenProps) {
    const maxScore = 150;
    const percentage = Math.round((score / maxScore) * 100);

    let grade = 'Ninja Apprentice';
    let gradeColor = 'text-dark-muted';

    if (percentage === 100) {
        grade = 'Master Ninja 忍者大师';
        gradeColor = 'text-injective-cyan';
    } else if (percentage >= 80) {
        grade = 'Elite Ninja 精英忍者';
        gradeColor = 'text-injective-purple';
    } else if (percentage >= 60) {
        grade = 'Skilled Ninja 熟练忍者';
        gradeColor = 'text-blue-400';
    }

    const playerEntry = leaderboard.find(entry => entry.isPlayer);

    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-card border border-dark-border rounded-2xl p-8 shadow-2xl">
                {/* Congratulations header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-dark-text mb-2">
                        Quest Complete! 🥷
                    </h1>
                    <p className="text-lg text-dark-muted">
                        You have completed the Injective Ninja Quest
                    </p>
                </div>

                {/* Score display */}
                <div className="text-center mb-8">
                    <div className="inline-block bg-dark-card border-2 border-injective-cyan rounded-2xl p-8">
                        <div className="text-sm text-dark-muted mb-2">Final Score</div>
                        <div className="text-6xl font-bold bg-gradient-ninja bg-clip-text text-transparent mb-2">
                            {score}
                        </div>
                        <div className="text-dark-muted mb-3">out of {maxScore}</div>
                        <div className={`text-2xl font-bold ${gradeColor}`}>{grade}</div>
                    </div>
                </div>

                {/* Leaderboard */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-dark-text mb-4 text-center">
                        Ninja Leaderboard
                    </h2>
                    <div className="bg-dark-card rounded-lg overflow-hidden">
                        <div className="grid grid-cols-3 gap-4 p-4 bg-dark-border text-sm font-semibold text-dark-muted">
                            <div>Rank</div>
                            <div>Ninja</div>
                            <div className="text-right">Score</div>
                        </div>
                        {leaderboard.map((entry) => (
                            <div
                                key={`${entry.rank}-${entry.name}`}
                                className={`grid grid-cols-3 gap-4 p-4 border-t border-dark-border ${entry.isPlayer ? 'bg-injective-cyan/10' : ''
                                    }`}
                            >
                                <div className="flex items-center gap-2">
                                    <span className={`font-bold ${entry.rank === 1 ? 'text-yellow-500' :
                                            entry.rank === 2 ? 'text-gray-400' :
                                                entry.rank === 3 ? 'text-orange-600' :
                                                    'text-dark-muted'
                                        }`}>
                                        #{entry.rank}
                                    </span>
                                    {entry.rank <= 3 && <span>🏆</span>}
                                </div>
                                <div className={`${entry.isPlayer ? 'text-injective-cyan font-bold' : 'text-dark-text'}`}>
                                    {entry.name}
                                </div>
                                <div className={`text-right font-mono ${entry.isPlayer ? 'text-injective-cyan font-bold' : 'text-dark-text'}`}>
                                    {entry.score}
                                </div>
                            </div>
                        ))}
                    </div>
                    {playerEntry && (
                        <div className="text-center mt-4 text-dark-muted">
                            You ranked <span className="text-injective-cyan font-bold">#{playerEntry.rank}</span> among all ninjas!
                        </div>
                    )}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                    <button
                        onClick={onReplay}
                        className="flex-1 py-4 bg-gradient-ninja rounded-lg text-white font-bold text-lg hover:opacity-90 transition-opacity"
                    >
                        Replay Quest
                    </button>
                    <button
                        onClick={() => window.open('https://injective.com', '_blank')}
                        className="flex-1 py-4 bg-dark-card border-2 border-injective-cyan text-injective-cyan rounded-lg font-bold text-lg hover:bg-injective-cyan/10 transition-colors"
                    >
                        Explore Injective
                    </button>
                </div>
            </div>
        </div>
    );
}
