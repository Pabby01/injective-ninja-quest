'use client';

import { useChain } from '@cosmos-kit/react';

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
        return `${addr.slice(0, 8)}...${addr.slice(-6)}`;
    };

    return (
        <div className="flex items-center gap-3">
            <div className="text-sm text-dark-muted">
                {isWalletConnected && address ? (
                    <span className="flex items-center gap-2">
                        <span className="text-injective-cyan">🥷</span>
                        <span className="text-dark-text">Ninja ID:</span>
                        <span className="font-mono text-injective-cyan">{shortenAddress(address)}</span>
                    </span>
                ) : (
                    <span className="flex items-center gap-2">
                        <span className="text-dark-muted">👤</span>
                        <span className="text-dark-muted">Guest Ninja</span>
                    </span>
                )}
            </div>
            <button
                onClick={handleWalletAction}
                className="px-4 py-2 rounded-lg bg-gradient-ninja text-white font-semibold text-sm hover:opacity-90 transition-opacity"
            >
                {isWalletConnected ? 'Disconnect' : 'Connect Wallet'}
            </button>
        </div>
    );
}
