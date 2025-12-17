'use client';

import { useEffect, useState } from 'react';
import { Chapter, InjectiveChainData } from '@/lib/types';
import { fetchInjectiveData } from '@/lib/rpc/injective';
import ChainDataDisplay from './ChainDataDisplay';

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
        <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-card border border-dark-border rounded-2xl p-8 shadow-2xl">
                {/* Chapter header */}
                <div className="mb-6">
                    <h2 className="text-3xl font-bold text-dark-text mb-2">{chapter.title}</h2>
                    <p className="text-injective-cyan text-lg">{chapter.subtitle}</p>
                </div>

                {/* Story content */}
                <div className="mb-6 text-dark-text leading-relaxed whitespace-pre-line">
                    {chapter.story}
                </div>

                {/* Live blockchain data */}
                <div className="mb-6">
                    <ChainDataDisplay data={chainData} loading={loading} type={chapter.rpcDataType} />
                </div>

                {/* Continue button */}
                <button
                    onClick={onContinue}
                    className="w-full py-4 bg-gradient-ninja rounded-lg text-white font-bold text-lg hover:opacity-90 transition-opacity"
                >
                    Begin Training →
                </button>
            </div>
        </div>
    );
}
