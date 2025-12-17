import { InjectiveChainData } from '../types';

// Official Injective mainnet public RPC endpoint
const INJECTIVE_RPC = 'https://sentry.tm.injective.network:443';

/**
 * Fetch chain ID from Injective RPC
 */
export async function fetchChainId(): Promise<InjectiveChainData> {
    try {
        const response = await fetch(`${INJECTIVE_RPC}/status`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return {
            chainId: data.result.node_info.network || 'Unknown',
        };
    } catch (error) {
        console.error('Error fetching chain ID:', error);
        return {
            error: 'Unable to fetch chain data. The blockchain is still processing...',
        };
    }
}

/**
 * Fetch latest block height and timestamp
 */
export async function fetchLatestBlock(): Promise<InjectiveChainData> {
    try {
        const response = await fetch(`${INJECTIVE_RPC}/block`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return {
            blockHeight: data.result.block.header.height || 'Unknown',
            blockTime: data.result.block.header.time || 'Unknown',
        };
    } catch (error) {
        console.error('Error fetching latest block:', error);
        return {
            error: 'Unable to fetch block data. The chain is synchronizing...',
        };
    }
}

/**
 * Fetch network info (peer count)
 */
export async function fetchNetworkInfo(): Promise<InjectiveChainData> {
    try {
        const response = await fetch(`${INJECTIVE_RPC}/net_info`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return {
            nodeCount: parseInt(data.result.n_peers || '0') + 1, // +1 for the node itself
        };
    } catch (error) {
        console.error('Error fetching network info:', error);
        return {
            error: 'Unable to fetch network data. Nodes are connecting...',
        };
    }
}

/**
 * Main function to fetch blockchain data based on type
 */
export async function fetchInjectiveData(
    type: 'chainId' | 'latestBlock' | 'networkInfo'
): Promise<InjectiveChainData> {
    switch (type) {
        case 'chainId':
            return fetchChainId();
        case 'latestBlock':
            return fetchLatestBlock();
        case 'networkInfo':
            return fetchNetworkInfo();
        default:
            return { error: 'Invalid data type requested' };
    }
}
