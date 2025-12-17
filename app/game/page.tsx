'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { chapters } from '@/lib/data/chapters';
import { GameState } from '@/lib/types';
import { calculatePlayerRank } from '@/lib/data/leaderboard';
import WalletBadge from '@/components/WalletBadge';
import ProgressBar from '@/components/ProgressBar';
import ScoreIndicator from '@/components/ScoreIndicator';
import StoryCard from '@/components/StoryCard';
import QuizCard from '@/components/QuizCard';
import CompletionScreen from '@/components/CompletionScreen';

type GamePhase = 'story' | 'quiz' | 'complete';

export default function GamePage() {
    const router = useRouter();
    const [gameState, setGameState] = useState<GameState>({
        currentChapter: 1,
        score: 0,
        answers: {},
        completedChapters: [],
    });
    const [phase, setPhase] = useState<GamePhase>('story');

    const currentChapter = chapters.find(ch => ch.id === gameState.currentChapter);

    if (!currentChapter) {
        return <div>Error: Chapter not found</div>;
    }

    const handleStoryContinue = () => {
        setPhase('quiz');
    };

    const handleQuizComplete = (answers: number[]) => {
        // Calculate score for this chapter
        let chapterScore = 0;
        currentChapter.questions.forEach((question, index) => {
            if (answers[index] === question.correctAnswer) {
                chapterScore += 10; // 10 points per correct answer
            }
        });

        // Bonus for perfect chapter (both answers correct)
        if (chapterScore === 20) {
            chapterScore += 10; // +10 bonus
        }

        // Update game state
        const newGameState: GameState = {
            ...gameState,
            score: gameState.score + chapterScore,
            answers: {
                ...gameState.answers,
                [currentChapter.id]: answers,
            },
            completedChapters: [...gameState.completedChapters, currentChapter.id],
        };

        setGameState(newGameState);

        // Check if all chapters completed
        if (currentChapter.id === chapters.length) {
            setPhase('complete');
        } else {
            // Move to next chapter
            setGameState({
                ...newGameState,
                currentChapter: currentChapter.id + 1,
            });
            setPhase('story');
        }
    };

    const handleReplay = () => {
        setGameState({
            currentChapter: 1,
            score: 0,
            answers: {},
            completedChapters: [],
        });
        setPhase('story');
        router.push('/');
    };

    return (
        <main className="min-h-screen pb-20">
            {/* Header */}
            <header className="p-6 flex justify-between items-center">
                <button
                    onClick={() => router.push('/')}
                    className="text-injective-cyan hover:text-injective-purple transition-colors"
                >
                    ← Back to Home
                </button>
                <WalletBadge />
            </header>

            {/* Score indicator (fixed) */}
            <ScoreIndicator score={gameState.score} />

            {/* Main content */}
            <div className="container mx-auto px-6 pt-8">
                {phase !== 'complete' && (
                    <ProgressBar
                        currentChapter={gameState.currentChapter}
                        totalChapters={chapters.length}
                    />
                )}

                {phase === 'story' && (
                    <StoryCard chapter={currentChapter} onContinue={handleStoryContinue} />
                )}

                {phase === 'quiz' && (
                    <QuizCard
                        questions={currentChapter.questions}
                        onComplete={handleQuizComplete}
                    />
                )}

                {phase === 'complete' && (
                    <CompletionScreen
                        score={gameState.score}
                        leaderboard={calculatePlayerRank(gameState.score)}
                        onReplay={handleReplay}
                    />
                )}
            </div>
        </main>
    );
}
