import { LeaderboardEntry } from '../types';

// Simulated leaderboard with Ninja-themed names
export const npcLeaderboard: LeaderboardEntry[] = [
    { rank: 1, name: "Shadow Master 影忍", score: 150 },
    { rank: 2, name: "Cipher Ninja 密码忍者", score: 140 },
    { rank: 3, name: "Blockchain Sensei 链上导师", score: 130 },
    { rank: 4, name: "DeFi Shinobi 金融忍者", score: 120 },
    { rank: 5, name: "Crypto Ronin 加密浪人", score: 110 },
    { rank: 6, name: "Code Samurai 代码武士", score: 100 },
    { rank: 7, name: "Web3 Warrior Web3战士", score: 90 },
    { rank: 8, name: "Smart Contract Ninja 合约忍者", score: 80 },
    { rank: 9, name: "Proof of Stake Monk 质押修士", score: 70 },
    { rank: 10, name: "Testnet Apprentice 测试学徒", score: 60 },
];

export function calculatePlayerRank(playerScore: number): LeaderboardEntry[] {
    // Insert player into leaderboard
    const leaderboardWithPlayer = [...npcLeaderboard];

    // Find insertion point
    let playerRank = npcLeaderboard.length + 1;
    for (let i = 0; i < npcLeaderboard.length; i++) {
        if (playerScore > npcLeaderboard[i].score) {
            playerRank = i + 1;
            break;
        }
    }

    // Insert player
    const playerEntry: LeaderboardEntry = {
        rank: playerRank,
        name: "You",
        score: playerScore,
        isPlayer: true,
    };

    leaderboardWithPlayer.splice(playerRank - 1, 0, playerEntry);

    // Reassign ranks
    return leaderboardWithPlayer
        .map((entry, index) => ({ ...entry, rank: index + 1 }))
        .slice(0, 10); // Show top 10
}
