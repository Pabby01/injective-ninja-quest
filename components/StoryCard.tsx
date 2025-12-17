'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Chapter, InjectiveChainData } from '@/lib/types';
import { fetchInjectiveData } from '@/lib/rpc/injective';
import ChainDataDisplay from './ChainDataDisplay';
import { BookOpen, ArrowRight } from 'lucide-react';

interface StoryCardProps {
    chapter: Chapter;
    onContinue: () => void;
}

export default function StoryCard({ chapter, onContinue }: StoryCardProps) {
    const [chainData, setChainData] = useState<InjectiveChainData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadChainData() {
            setLoading(true);
            const data = await fetchInjectiveData(chapter.rpcDataType);
            setChainData(data);
            setLoading(false);
        }
        loadChainData();
    }, [chapter.rpcDataType]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
        >
            <div className="glass-card rounded-3xl p-8 md:p-10 shadow-glass relative overflow-hidden">
                {/* Decorative gradient orb */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial opacity-30 blur-3xl pointer-events-none" />

                {/* Chapter header */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8 relative z-10"
                >
                    <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="w-5 h-5 text-injective-cyan" />
                        <span className="text-sm text-injective-cyan uppercase tracking-wider font-semibold">
                            Chapter {chapter.id}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 glow-text">
                        {chapter.title}
                    </h2>
                    <p className="text-xl text-injective-purple font-medium">
                        {chapter.subtitle}
                    </p>
                </motion.div>

                {/* Divider line */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-injective-cyan/30 to-transparent mb-8" />

                {/* Story content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mb-8 text-dark-text leading-relaxed whitespace-pre-line text-lg relative z-10"
                >
                    {chapter.story}
                </motion.div>

                {/* Live blockchain data */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mb-8 relative z-10"
                >
                    <ChainDataDisplay data={chainData} loading={loading} type={chapter.rpcDataType} />
                </motion.div>

                {/* Continue button */}
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onContinue}
                    className="w-full py-5 bg-gradient-ninja rounded-2xl text-white font-bold text-lg shadow-glow-lg hover:shadow-glow-purple transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        Begin Training
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <motion.div
                        animate={{
                            x: ['-100%', '100%'],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                </motion.button>
            </div>
        </motion.div>
    );
}
