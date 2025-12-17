# Injective Ninja Quest

A story-driven quiz mini game for learning about the Injective blockchain and Ninja Labs community. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🎮 Features

- **5 Interactive Chapters**: Learn about Injective's Layer 1 architecture, speed, developer tools, interoperability, and community
- **10 Quiz Questions**: Test your knowledge with multiple-choice questions and instant feedback
- **Live Blockchain Data**: Real-time RPC calls to Injective mainnet (read-only)
- **Wallet Integration**: Optional Keplr/Leap wallet connection for personalization
- **Scoring System**: Earn up to 150 points with bonus rewards for perfect chapters
- **Simulated Leaderboard**: Compare your score against other ninjas

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Wallet**: @cosmos-kit/react (Keplr, Leap)
- **Blockchain**: Injective Public RPC (read-only)
- **State**: Client-side React (no backend required)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

## 🌐 Deployment

This project is optimized for deployment on **Vercel**:

1. Push code to GitHub repository
2. Import repository in Vercel dashboard
3. Deploy automatically (no configuration needed)

Or manually:
```bash
vercel deploy
```

## 🎯 How to Play

1. Visit the homepage and optionally connect your wallet
2. Click "Begin Your Quest"
3. Read each chapter's story and observe live blockchain data
4. Answer 2 quiz questions per chapter
5. Earn points and complete all 5 chapters
6. View your final score and rank on the leaderboard

## 📚 Educational Content

Content covers:
- Layer 1 blockchain fundamentals
- Proof of Stake consensus with Tendermint
- CosmWasm and EVM support
- Inter-Blockchain Communication (IBC)
- Injective ecosystem and Ninja Labs community

## 🔗 Links

- [Injective](https://injective.com)
- [Injective Docs](https://docs.injective.network)
- [Ninja Labs CN](https://ninjalabscn.com)

## 🛡️ Safety

- **No transactions** - read-only RPC calls only
- **No signing** - wallet used for display only
- **No backend** - fully client-side application
- **No data collection** - scores stored locally

## 📄 License

MIT

---

**Built for the Injective community by Ninja Labs** 🥷⛓️
#