'use client';

import { motion } from 'framer-motion';
import { useChain } from '@cosmos-kit/react';
import { Wallet, User } from 'lucide-react';

export default function WalletBadge() {
    const { address, connect, disconnect, isWalletConnected } = useChain('injective');

    const handleWalletAction = async () => {
        if (isWalletConnected) {
            await disconnect();
        } else {
            await connect();
        }
    };

    const shortenAddress = (addr: string) => {
        return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3"
        >
            {/* Wallet Status Display */}
            <div className="glass-card px-4 py-2.5 rounded-full flex items-center gap-2 min-w-[180px]">
                {isWalletConnected && address ? (
                    <>
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-glow-sm" />
                        <Wallet className="w-4 h-4 text-injective-cyan" />
                        <span className="font-mono text-sm text-injective-cyan glow-text">
                            {shortenAddress(address)}
                        </span>
                    </>
                ) : (
                    <>
                        <User className="w-4 h-4 text-dark-muted" />
                        <span className="text-sm text-dark-muted">Guest Ninja</span>
                    </>
                )}
            </div>

            {/* Connect/Disconnect Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWalletAction}
                className="px-5 py-2.5 rounded-full bg-gradient-ninja text-white font-semibold text-sm shadow-glow-md hover:shadow-glow-lg transition-all duration-300 relative overflow-hidden group"
            >
                <span className="relative z-10">
                    {isWalletConnected ? 'Disconnect' : 'Connect'}
                </span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </motion.button>
        </motion.div>
    );
}
