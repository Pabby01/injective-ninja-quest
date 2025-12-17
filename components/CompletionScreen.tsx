'use client';

import { motion } from 'framer-motion';
import { LeaderboardEntry } from '@/lib/types';
import { Trophy, Medal, Award, Sparkles, RotateCcw, ExternalLink } from 'lucide-react';

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
    let gradeIcon = Award;

    if (percentage === 100) {
        grade = 'Master Ninja 忍者大师';
        gradeColor = 'gradient-text';
        gradeIcon = Trophy;
    } else if (percentage >= 80) {
        grade = 'Elite Ninja 精英忍者';
        gradeColor = 'text-injective-purple';
        gradeIcon = Medal;
    } else if (percentage >= 60) {
        grade = 'Skilled Ninja 熟练忍者';
        gradeColor = 'text-injective-cyan';
        gradeIcon = Award;
    }

    const GradeIcon = gradeIcon;
    const playerEntry = leaderboard.find(entry => entry.isPlayer);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-5xl mx-auto"
        >
            {/* Congratulations section */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center mb-12"
            >
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                        duration: 2,
                        ease: 'easeInOut',
                    }}
                    className="text-7xl mb-4 inline-block"
                >
                    🎉
                </motion.div>
                <h1 className="text-5xl md:text-6xl font-bold gradient-text glow-text mb-4">
                    Quest Complete!
                </h1>
                <p className="text-xl text-dark-text">
                    You have mastered the Injective Ninja Quest
                </p>
            </motion.div>

            {/* Score card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="glass-card rounded-3xl p-10 mb-8 text-center relative overflow-hidden shadow-glass"
            >
                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-radial opacity-20 blur-3xl" />

                <div className="relative z-10">
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <Sparkles className="w-5 h-5 text-injective-cyan" />
                        <span className="text-sm text-dark-muted uppercase tracking-wider">Final Score</span>
                    </div>

                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6, type: 'spring', bounce: 0.5 }}
                        className="text-8xl font-bold gradient-text mb-4"
                    >
                        {score}
                    </motion.div>

                    <div className="text-dark-muted mb-6">out of {maxScore}</div>

                    <div className="inline-flex items-center gap-3 glass-strong px-8 py-4 rounded-full">
                        <GradeIcon className="w-6 h-6 text-injective-cyan" />
                        <span className={`text-2xl font-bold ${gradeColor}`}>{grade}</span>
                    </div>
                </div>
            </motion.div>

            {/* Leaderboard */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="glass-card rounded-3xl overflow-hidden shadow-glass mb-8"
            >
                <div className="p-8">
                    <h2 className="text-3xl font-bold text-white mb-6 text-center flex items-center justify-center gap-2">
                        <Trophy className="w-8 h-8 text-injective-cyan" />
                        Ninja Leaderboard
                    </h2>

                    {/* Leaderboard header */}
                    <div className="grid grid-cols-3 gap-4 p-4 glass rounded-xl text-sm font-semibold text-dark-muted mb-3">
                        <div>Rank</div>
                        <div>Ninja</div>
                        <div className="text-right">Score</div>
                    </div>

                    {/* Leaderboard entries */}
                    <div className="space-y-2">
                        {leaderboard.map((entry, index) => (
                            <motion.div
                                key={`${entry.rank}-${entry.name}`}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.9 + index * 0.05 }}
                                className={`
                  grid grid-cols-3 gap-4 p-4 rounded-xl transition-all duration-300
                 ${entry.isPlayer
                                        ? 'glass-strong glow-border-purple'
                                        : 'glass hover:glass-strong'
                                    }
                `}
                            >
                                <div className="flex items-center gap-2">
                                    <span className={`font-bold ${entry.rank === 1 ? 'text-yellow-400 text-2xl' :
                                            entry.rank === 2 ? 'text-gray-400 text-xl' :
                                                entry.rank === 3 ? 'text-orange-500 text-lg' :
                                                    entry.isPlayer ? 'text-injective-purple' :
                                                        'text-dark-muted'
                                        }`}>
                                        #{entry.rank}
                                    </span>
                                    {entry.rank === 1 && <span className="text-2xl">🥇</span>}
                                    {entry.rank === 2 && <span className="text-xl">🥈</span>}
                                    {entry.rank === 3 && <span className="text-lg">🥉</span>}
                                </div>
                                <div className={`${entry.isPlayer ? 'text-injective-purple font-bold glow-text' : 'text-dark-text'}`}>
                                    {entry.name}
                                </div>
                                <div className={`text-right font-mono ${entry.isPlayer ? 'text-injective-purple font-bold' : 'text-dark-text'}`}>
                                    {entry.score}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {playerEntry && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="text-center mt-6 p-4 glass-strong rounded-xl"
                        >
                            <span className="text-dark-text">You ranked </span>
                            <span className="text-injective-purple font-bold text-xl glow-text">
                                #{playerEntry.rank}
                            </span>
                            <span className="text-dark-text"> among all ninjas! 🥷</span>
                        </motion.div>
                    )}
                </div>
            </motion.div>

            {/* Action buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="flex flex-col md:flex-row gap-4"
            >
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onReplay}
                    className="flex-1 py-5 bg-gradient-ninja rounded-2xl text-white font-bold text-lg shadow-glow-lg hover:shadow-glow-purple transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                    <RotateCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                    Replay Quest
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.open('https://injective.com', '_blank')}
                    className="flex-1 py-5 glass-strong glow-border text-injective-cyan rounded-2xl font-bold text-lg hover:glass-strong transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                    Explore Injective
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
            </motion.div>
        </motion.div>
    );
}
