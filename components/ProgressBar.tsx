'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface ProgressBarProps {
    currentChapter: number;
    totalChapters: number;
}

export default function ProgressBar({ currentChapter, totalChapters }: ProgressBarProps) {
    return (
        <div className="w-full max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-dark-muted uppercase tracking-wide">Chapter Progress</span>
                <span className="text-sm font-bold gradient-text">
                    {currentChapter} / {totalChapters}
                </span>
            </div>

            <div className="relative">
                {/* Background line */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-dark-border transform -translate-y-1/2" />

                {/* Progress line */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentChapter - 1) / (totalChapters - 1)) * 100}%` }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="absolute top-1/2 left-0 h-0.5 bg-gradient-ninja transform -translate-y-1/2 shadow-glow-sm"
                />

                {/* Chapter nodes */}
                <div className="relative flex justify-between">
                    {Array.from({ length: totalChapters }).map((_, index) => {
                        const chapterNum = index + 1;
                        const isCompleted = chapterNum < currentChapter;
                        const isCurrent = chapterNum === currentChapter;

                        return (
                            <motion.div
                                key={chapterNum}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: index * 0.1, type: 'spring' }}
                                className="relative flex flex-col items-center"
                            >
                                {/* Node circle */}
                                <div
                                    className={`
                    w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm
                    transition-all duration-300 relative
                    ${isCompleted
                                            ? 'glass-strong border-injective-cyan text-injective-cyan shadow-glow-md'
                                            : isCurrent
                                                ? 'glass-strong border-2 border-injective-purple text-white shadow-glow-purple animate-pulse'
                                                : 'glass border-dark-border text-dark-muted'
                                        }
                  `}
                                >
                                    {isCompleted ? (
                                        <Check className="w-5 h-5" />
                                    ) : (
                                        <span>{chapterNum}</span>
                                    )}

                                    {/* Glow effect for current */}
                                    {isCurrent && (
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.5, 1],
                                                opacity: [0.5, 0, 0.5],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: 'easeInOut',
                                            }}
                                            className="absolute inset-0 rounded-full bg-injective-purple"
                                        />
                                    )}
                                </div>

                                {/* Chapter label (hidden on small screens) */}
                                <span className="hidden md:block mt-2 text-xs text-dark-muted whitespace-nowrap">
                                    Chapter {chapterNum}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div >
    );
}
