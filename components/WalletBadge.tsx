'use client';

import { useChain } from '@cosmos-kit/react';
import { Wallet } from 'lucide-react';

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

    // Avoid hydration errors by not rendering until mounted
    if (typeof window === 'undefined') {
        return (
            <button className="px-4 py-2 rounded-lg border border-cyan-500/30 text-cyan-400 text-sm font-medium">
                Connect Wallet
            </button>
        );
    }

    return (
        <div className="flex items-center gap-2">
            {isWalletConnected && address ? (
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-sm font-mono text-cyan-400">
                        {shortenAddress(address)}
                    </span>
                </div>
            ) : (
                <div className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-sm text-gray-400">Guest</span>
                </div>
            )}

            <button
                onClick={handleWalletAction}
                className="px-4 py-2 rounded-lg border border-cyan-500/30 text-cyan-400 text-sm font-medium hover:bg-cyan-500/10 transition-colors flex items-center gap-2"
            >
                <Wallet className="w-4 h-4" />
                {isWalletConnected ? 'Disconnect' : 'Connect'}
            </button>
        </div>
    );
}
