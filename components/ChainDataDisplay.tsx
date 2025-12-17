'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { InjectiveChainData } from '@/lib/types';
import { Database, Activity, Network, Loader2, AlertCircle } from 'lucide-react';

interface ChainDataDisplayProps {
    data: InjectiveChainData | null;
    loading: boolean;
    type: 'chainId' | 'latestBlock' | 'networkInfo';
}

export default function ChainDataDisplay({ data, loading, type }: ChainDataDisplayProps) {
    const getIcon = () => {
        switch (type) {
            case 'chainId':
                return <Database className="w-5 h-5 text-injective-cyan" />;
            case 'latestBlock':
                return <Activity className="w-5 h-5 text-injective-cyan" />;
            case 'networkInfo':
                return <Network className="w-5 h-5 text-injective-cyan" />;
        }
    };

    if (loading) {
        return (
            <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-3">
                    <Loader2 className="w-5 h-5 text-injective-cyan animate-spin" />
                    <span className="text-dark-muted">Connecting to Injective blockchain...</span>
                </div>
            </div>
        );
    }

    if (data?.error) {
        return (
            <div className="glass rounded-2xl p-6 border-dark-border">
                <div className="flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-dark-muted" />
                    <span className="text-sm text-dark-muted">{data.error}</span>
                </div>
            </div>
        );
    }

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={type}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="glass-card rounded-2xl p-6 glow-border hover-glow relative overflow-hidden group"
            >
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-injective-cyan/5 to-injective-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                        {getIcon()}
                        <span className="text-xs text-injective-cyan uppercase tracking-wide font-semibold">
                            Live Blockchain Data
                        </span>
                    </div>

                    {type === 'chainId' && data?.chainId && (
                        <div>
                            <div className="text-sm text-dark-muted mb-2">Chain ID</div>
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                className="text-2xl font-mono font-bold text-white glow-text"
                            >
                                {data.chainId}
                            </motion.div>
                        </div>
                    )}

                    {type === 'latestBlock' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {data?.blockHeight && (
                                <div>
                                    <div className="text-sm text-dark-muted mb-2">Block Height</div>
                                    <motion.div
                                        initial={{ y: -10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xl font-mono font-bold text-white"
                                    >
                                        #{parseInt(data.blockHeight).toLocaleString()}
                                    </motion.div>
                                </div>
                            )}
                            {data?.blockTime && (
                                <div>
                                    <div className="text-sm text-dark-muted mb-2">Block Time</div>
                                    <motion.div
                                        initial={{ y: -10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 }}
                                        className="text-sm font-mono text-white"
                                    >
                                        {new Date(data.blockTime).toLocaleTimeString()}
                                    </motion.div>
                                </div>
                            )}
                        </div>
                    )}

                    {type === 'networkInfo' && data?.nodeCount !== undefined && (
                        <div>
                            <div className="text-sm text-dark-muted mb-2">Connected Peers</div>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="text-2xl font-mono font-bold text-white flex items-baseline gap-2"
                            >
                                <span className="gradient-text">{data.nodeCount}</span>
                                <span className="text-lg text-dark-muted">nodes</span>
                            </motion.div>
                        </div>
                    )}
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
