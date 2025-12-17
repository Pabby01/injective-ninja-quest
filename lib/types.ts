// Chapter data structure
export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

export interface Chapter {
    id: number;
    title: string;
    subtitle: string;
    story: string;
    rpcDataType: 'chainId' | 'latestBlock' | 'networkInfo';
    questions: Question[];
}

// Game state
export interface GameState {
    currentChapter: number;
    score: number;
    answers: Record<number, number[]>; // chapterId => [answer1, answer2]
    completedChapters: number[];
}

// Injective chain data from RPC
export interface InjectiveChainData {
    chainId?: string;
    blockHeight?: string;
    blockTime?: string;
    nodeCount?: number;
    error?: string;
}

// Leaderboard entry
export interface LeaderboardEntry {
    rank: number;
    name: string;
    score: number;
    isPlayer?: boolean;
}
