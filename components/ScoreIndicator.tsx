'use client';

import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

interface ScoreIndicatorProps {
    score: number;
    maxScore?: number;
}

export default function ScoreIndicator({ score, maxScore = 150 }: ScoreIndicatorProps) {
    const percentage = (score / maxScore) * 100;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed top-4 right-4 z-50"
        >
            <div className="glass-strong rounded-2xl px-6 py-4 shadow-glass min-w-[140px]">
                <div className="flex items-center gap-2 mb-2">
                    <Trophy className="w-4 h-4 text-injective-cyan" />
                    <div className="text-xs text-dark-muted uppercase tracking-wider">Score</div>
                </div>

                {/* Score Display */}
                <div className="flex items-baseline gap-1 mb-2">
                    <motion.span
                        key={score}
                        initial={{ scale: 1.3, color: '#00F2FE' }}
                        animate={{ scale: 1, color: '#E5E5E7' }}
                        transition={{ duration: 0.3 }}
                        className="text-4xl font-bold gradient-text"
                    >
                        {score}
                    </motion.span>
                    <span className="text-sm text-dark-muted">/ {maxScore}</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-dark-border rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="h-full bg-gradient-ninja shadow-glow-sm"
                    />
                </div>
            </div>
        </motion.div>
    );
}
