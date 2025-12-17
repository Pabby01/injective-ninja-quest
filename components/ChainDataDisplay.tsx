import { InjectiveChainData } from '@/lib/types';

interface ChainDataDisplayProps {
    data: InjectiveChainData | null;
    loading: boolean;
    type: 'chainId' | 'latestBlock' | 'networkInfo';
}

export default function ChainDataDisplay({ data, loading, type }: ChainDataDisplayProps) {
    if (loading) {
        return (
            <div className="bg-dark-card border border-injective-cyan/30 rounded-lg p-4 animate-pulse">
                <div className="h-4 bg-dark-border rounded w-3/4 mb-2"></div>
                <div className="h-6 bg-dark-border rounded w-1/2"></div>
            </div>
        );
    }

    if (data?.error) {
        return (
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                <div className="text-sm text-dark-muted">{data.error}</div>
            </div>
        );
    }

    return (
        <div className="bg-dark-card border border-injective-cyan/30 rounded-lg p-4 hover:border-injective-cyan/60 transition-colors">
            <div className="text-xs text-injective-cyan mb-1 uppercase tracking-wide">
                Live Blockchain Data
            </div>
            {type === 'chainId' && data?.chainId && (
                <div>
                    <div className="text-sm text-dark-muted mb-1">Chain ID</div>
                    <div className="text-lg font-mono text-dark-text">{data.chainId}</div>
                </div>
            )}
            {type === 'latestBlock' && (
                <div className="grid grid-cols-2 gap-4">
                    {data?.blockHeight && (
                        <div>
                            <div className="text-sm text-dark-muted mb-1">Block Height</div>
                            <div className="text-lg font-mono text-dark-text">
                                #{data.blockHeight.toLocaleString()}
                            </div>
                        </div>
                    )}
                    {data?.blockTime && (
                        <div>
                            <div className="text-sm text-dark-muted mb-1">Block Time</div>
                            <div className="text-xs font-mono text-dark-text">
                                {new Date(data.blockTime).toLocaleTimeString()}
                            </div>
                        </div>
                    )}
                </div>
            )}
            {type === 'networkInfo' && data?.nodeCount !== undefined && (
                <div>
                    <div className="text-sm text-dark-muted mb-1">Connected Peers</div>
                    <div className="text-lg font-mono text-dark-text">{data.nodeCount} nodes</div>
                </div>
            )}
        </div>
    );
}
