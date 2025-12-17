import { Chapter } from '../types';

export const chapters: Chapter[] = [
    {
        id: 1,
        title: "Awakening on Injective",
        subtitle: "Discovering the Layer 1 Blockchain",
        story: `You wake up in a digital realm, surrounded by flowing data streams. A voice echoes: "Welcome, Ninja. You've entered Injective—a lightning-fast Layer 1 blockchain built for the future of finance."\n\nInjective is not just another blockchain. It's a high-performance, interoperable network purpose-built for decentralized finance (DeFi). Unlike traditional blockchains that require complex bridges, Injective is natively connected to multiple ecosystems, making cross-chain trading seamless.\n\nAs a Layer 1 blockchain, Injective provides the foundation for developers to build advanced financial applications—from decentralized exchanges to prediction markets—all with instant transaction finality.`,
        rpcDataType: 'chainId',
        questions: [
            {
                id: 1,
                question: "What type of blockchain is Injective?",
                options: [
                    "A Layer 2 scaling solution",
                    "A Layer 1 blockchain",
                    "A sidechain",
                    "A payment channel network"
                ],
                correctAnswer: 1,
                explanation: "Injective is a Layer 1 blockchain, meaning it's a foundational blockchain with its own consensus mechanism and native token (INJ)."
            },
            {
                id: 2,
                question: "What is Injective primarily designed for?",
                options: [
                    "Gaming NFTs",
                    "Social media",
                    "Decentralized Finance (DeFi)",
                    "File storage"
                ],
                correctAnswer: 2,
                explanation: "Injective is purpose-built for decentralized finance, offering features like a fully decentralized orderbook and advanced trading capabilities."
            }
        ]
    },
    {
        id: 2,
        title: "Speed of the Chain",
        subtitle: "High Throughput and Fast Finality",
        story: `The Ninja Master appears before you. "Speed is everything in DeFi," they say. "Injective achieves instant block finality—meaning once a transaction is confirmed, it's final. No waiting, no uncertainty."\n\nInjective can process thousands of transactions per second with near-zero gas fees. This is possible thanks to its optimized Tendermint-based consensus powered by Proof of Stake (PoS). Unlike congested networks where users pay hundreds in fees, Injective keeps costs minimal.\n\nThis speed and efficiency make Injective ideal for high-frequency trading, orderbook-based DEXs, and complex financial instruments that demand real-time execution.`,
        rpcDataType: 'latestBlock',
        questions: [
            {
                id: 3,
                question: "What consensus mechanism does Injective use?",
                options: [
                    "Proof of Work (PoW)",
                    "Proof of Stake (PoS) with Tendermint",
                    "Delegated Proof of Stake (DPoS)",
                    "Proof of Authority (PoA)"
                ],
                correctAnswer: 1,
                explanation: "Injective uses a Tendermint-based Proof of Stake consensus, which provides instant finality and high throughput."
            },
            {
                id: 4,
                question: "What is a key benefit of Injective's fast finality?",
                options: [
                    "Transactions can be reversed easily",
                    "Blocks are mined faster than Bitcoin",
                    "Confirmed transactions are immediately final with no reorgs",
                    "It uses less electricity"
                ],
                correctAnswer: 2,
                explanation: "Instant finality means once a transaction is confirmed on Injective, it's permanent and cannot be reversed or reorganized."
            }
        ]
    },
    {
        id: 3,
        title: "Builder's Arsenal",
        subtitle: "CosmWasm, EVM, and iBuild Tools",
        story: `You enter the Builder's Dojo. Scrolls and tools float around you. "Injective gives developers unprecedented flexibility," the Master explains.\n\n"You can build with **CosmWasm**—a powerful smart contract platform native to Cosmos. Or deploy EVM-compatible contracts if you prefer Solidity. Injective even offers pre-built modules for orderbooks, auctions, and derivatives."\n\nThe **iBuild** program provides grants, mentorship, and resources to developers building the next generation of DeFi applications. Whether you're creating a DEX, a perpetual futures platform, or an oracle network, Injective provides the tools and support you need.\n\nMulti-VM support means you're never locked into one development environment—build the way you want.`,
        rpcDataType: 'networkInfo',
        questions: [
            {
                id: 5,
                question: "Which smart contract platforms does Injective support?",
                options: [
                    "Only CosmWasm",
                    "Only EVM/Solidity",
                    "Both CosmWasm and EVM",
                    "Neither, it doesn't support smart contracts"
                ],
                correctAnswer: 2,
                explanation: "Injective supports both CosmWasm (native to Cosmos) and EVM-compatible smart contracts, giving developers maximum flexibility."
            },
            {
                id: 6,
                question: "What is the iBuild program?",
                options: [
                    "A blockchain explorer",
                    "A wallet application",
                    "A grants and mentorship program for developers",
                    "A trading bot"
                ],
                correctAnswer: 2,
                explanation: "iBuild is Injective's program that provides grants, resources, and mentorship to developers building on the Injective ecosystem."
            }
        ]
    },
    {
        id: 4,
        title: "Interoperability World",
        subtitle: "Cross-Chain and Modular Architecture",
        story: `You stand at the edge of a vast network of interconnected chains. "Injective is built on the Cosmos SDK," the Master says, "which means native interoperability with the entire Cosmos ecosystem via IBC (Inter-Blockchain Communication)."\n\nInjective doesn't stop at Cosmos. Through bridges and integrations, it connects to Ethereum, Solana, and other major Layer 1 networks. Assets can flow freely across chains without centralized custodians.\n\nThis modular architecture means developers can leverage the best of every blockchain—composability without compromise. Build once on Injective, access liquidity everywhere.`,
        rpcDataType: 'chainId',
        questions: [
            {
                id: 7,
                question: "What protocol enables Injective to communicate with other Cosmos chains?",
                options: [
                    "Cross-Chain Bridge Protocol (CCBP)",
                    "Inter-Blockchain Communication (IBC)",
                    "Atomic Swap Protocol (ASP)",
                    "Universal Chain Link (UCL)"
                ],
                correctAnswer: 1,
                explanation: "IBC (Inter-Blockchain Communication) is the native protocol in the Cosmos ecosystem that enables secure and trustless communication between blockchains."
            },
            {
                id: 8,
                question: "What is a key advantage of Injective's modular architecture?",
                options: [
                    "It only works with Cosmos chains",
                    "It's cheaper to run nodes",
                    "Developers can leverage features from multiple blockchains",
                    "It doesn't require validators"
                ],
                correctAnswer: 2,
                explanation: "Injective's modular architecture allows developers to access and combine features from different blockchain ecosystems, creating powerful cross-chain applications."
            }
        ]
    },
    {
        id: 5,
        title: "Ninja Labs Dojo",
        subtitle: "Community and Builder Onboarding",
        story: `You arrive at the Ninja Labs Dojo—a vibrant community of builders, traders, and innovators. "Ninja Labs is Injective's community hub in China," the Master explains.\n\n"Here, we host hackathons, educational workshops, and building events. From 'Ninja Break' creative sprints to multi-VM ecosystem carnivals, we're dedicated to onboarding the next generation of Web3 builders."\n\nThe community shares knowledge, collaborates on projects, and pushes the boundaries of what's possible on Injective. Whether you're a seasoned developer or just starting your journey, Ninja Labs welcomes all who seek to build the future of decentralized finance.\n\n"Your quest is complete, Ninja. But this is just the beginning. Now go forth and build!"`,
        rpcDataType: 'latestBlock',
        questions: [
            {
                id: 9,
                question: "What is Ninja Labs?",
                options: [
                    "A DeFi protocol on Injective",
                    "Injective's community hub focused on builder onboarding",
                    "A centralized exchange",
                    "A wallet provider"
                ],
                correctAnswer: 1,
                explanation: "Ninja Labs is Injective's community organization focused on education, hackathons, and onboarding developers into the ecosystem, particularly in the Chinese market."
            },
            {
                id: 10,
                question: "What types of events does Ninja Labs organize?",
                options: [
                    "Only trading competitions",
                    "Only token launches",
                    "Hackathons, workshops, and building events",
                    "Only validator meetings"
                ],
                correctAnswer: 2,
                explanation: "Ninja Labs hosts a variety of events including creative sprints (Ninja Break), hackathons, educational workshops, and ecosystem-building events to help developers learn and build on Injective."
            }
        ]
    }
];
