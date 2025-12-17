'use client';

import { ChainProvider } from '@cosmos-kit/react';
import { wallets as keplrWallets } from '@cosmos-kit/keplr';
import { wallets as leapWallets } from '@cosmos-kit/leap';

// Manual Injective chain configuration to avoid issues with chain-registry exports
const injectiveChain = {
    chain_name: 'injective',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Injective',
    chain_id: 'injective-1',
    bech32_prefix: 'inj',
    slip44: 60,
    fees: {
        fee_tokens: [{
            denom: 'inj',
            fixed_min_gas_price: 500000000,
            low_gas_price: 500000000,
            average_gas_price: 700000000,
            high_gas_price: 900000000,
        }],
    },
    staking: {
        staking_tokens: [{
            denom: 'inj',
        }],
    },
    apis: {
        rpc: [{
            address: 'https://sentry.tm.injective.network:443',
        }],
        rest: [{
            address: 'https://sentry.lcd.injective.network',
        }],
    },
    explorers: [{
        kind: 'Injective Explorer',
        url: 'https://explorer.injective.network/',
        tx_page: 'https://explorer.injective.network/transaction/${txHash}',
    }],
};

const injectiveAssets = {
    chain_name: 'injective',
    assets: [{
        denom_units: [{
            denom: 'inj',
            exponent: 0,
        }, {
            denom: 'INJ',
            exponent: 18,
        }],
        base: 'inj',
        name: 'Injective',
        display: 'INJ',
        symbol: 'INJ',
        logo_URIs: {
            png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        },
    }],
};

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ChainProvider
            chains={[injectiveChain as any]}
            assetLists={[injectiveAssets as any]}
            wallets={[...keplrWallets, ...leapWallets]}
            throwErrors={false}
            walletConnectOptions={{
                signClient: {
                    projectId: 'injective-ninja-quest',
                    metadata: {
                        name: 'Injective Ninja Quest',
                        description: 'Learn about Injective blockchain through an interactive quest',
                        url: typeof window !== 'undefined' ? window.location.origin : '',
                        icons: [],
                    },
                },
            }}
        >
            {children}
        </ChainProvider>
    );
}
